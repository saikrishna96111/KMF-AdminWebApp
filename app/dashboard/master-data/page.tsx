"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MasterDataPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    // Redirect to the new top-level master-data route when authenticated
    if (user) router.replace("/master-data");
  }, [router, user]);
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>You must log in first.</p>;

  // Redirecting; no UI is necessary here
  return null;
}
