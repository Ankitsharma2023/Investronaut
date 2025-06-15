from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import pandas as pd
import faiss
import numpy as np
from fastapi.middleware.cors import CORSMiddleware
import torch
from sentence_transformers import SentenceTransformer

# Initialize FastAPI
app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load CSV
df = pd.read_csv("investor_data.csv")

# Load FAISS cosine index
index = faiss.read_index("investor_index_cosine.faiss")

# Load sentence transformer model
model = SentenceTransformer('BAAI/bge-small-en', device='cuda' if torch.cuda.is_available() else 'cpu')

# Normalize function for cosine similarity
def normalize(x):
    return x / np.linalg.norm(x, axis=1, keepdims=True)

# Request schema
class QueryRequest(BaseModel):
    startup_idea: str

# Response schema
class InvestorMatch(BaseModel):
    rank: int
    investor_name: str
    investor_type: str
    investment_thesis: str
    stage_of_investment: str
    countries_of_investment: str
    first_cheque_minimum: str
    first_cheque_maximum: str
    website: str | None
    similarity_score: float  # For debugging (you can remove later)

@app.post("/find_investors", response_model=list[InvestorMatch])
def find_investors(request: QueryRequest):
    if not request.startup_idea.strip():
        raise HTTPException(status_code=400, detail="Startup idea cannot be empty")

    # Encode and normalize query
    query_embedding = model.encode([request.startup_idea], convert_to_numpy=True)
    query_embedding = normalize(query_embedding.astype('float32'))

    # Search FAISS index
    k = 6
    distances, indices = index.search(query_embedding, k)

    threshold = 0.75  # Adjust based on print results

    matches = []
    for rank, (idx, score) in enumerate(zip(indices[0], distances[0])):
        print(f"Result #{rank + 1}: Score = {score}")  # Debug

        if score < threshold:
            print(f"Skipping result with low score: {score}")  # Debug
            continue

        investor = df.iloc[idx]
        fields = {
            'investor_name': 'Investor name',
            'investor_type': 'Investor type',
            'investment_thesis': 'Investment thesis',
            'stage_of_investment': 'Stage of investment',
            'countries_of_investment': 'Countries of investment',
            'first_cheque_minimum': 'First cheque minimum',
            'first_cheque_maximum': 'First cheque maximum',
            'website': 'Website'
        }

        result = {
            key: investor[field] if pd.notna(investor[field]) else ''
            for key, field in fields.items()
        }

        matches.append(InvestorMatch(
            rank=len(matches) + 1,
            similarity_score=score,
            **result
        ))

    if not matches:
        raise HTTPException(status_code=404, detail="No relevant investors found for your startup idea.")

    return matches
