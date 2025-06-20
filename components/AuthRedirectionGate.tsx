"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { auth } from "@/app/firebase/firebase";

export default function AuthRedirectGate() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (auth.currentUser) {
      router.replace(searchParams.get("next") ?? "/");
    }
  }, []);

  return null; // it only handles redirect, nothing to render
}
