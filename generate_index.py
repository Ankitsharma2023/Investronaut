import pandas as pd
import numpy as np
from sentence_transformers import SentenceTransformer
import faiss

# Load investor data
df = pd.read_csv("investor_data.csv")

# Combine relevant fields
texts = df["Investment thesis"].fillna("") + " " + df["Investor type"].fillna("") + " " + df["Stage of investment"].fillna("")

# Load SentenceTransformer model
model = SentenceTransformer("BAAI/bge-small-en")

# Create embeddings
embeddings = model.encode(texts.tolist(), convert_to_numpy=True)
embeddings = embeddings.astype('float32')

# Normalize for cosine similarity
def normalize(x):
    return x / np.linalg.norm(x, axis=1, keepdims=True)

normalized_embeddings = normalize(embeddings)

# Create cosine similarity index
index = faiss.IndexFlatIP(normalized_embeddings.shape[1])
index.add(normalized_embeddings)

# Save index
faiss.write_index(index, "investor_index_cosine.faiss")
print("✅ Cosine similarity index created and saved as investor_index_cosine.faiss")
