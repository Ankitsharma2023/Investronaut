// app/signin/page.tsx
import { Suspense } from "react";
import SignInForm from "@/components/signInForms";

export default function SignInPage() {
  return (
    <Suspense fallback={<div>Loading sign-in form...</div>}>
      <SignInForm />
    </Suspense>
  );
}
