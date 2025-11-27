"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MasterDataPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    // Redirect to the new top-level master-data route
    router.replace("/master-data");
  }, [router]);
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>You must log in first.</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Master Data</h1>
      <p className="mt-4">Placeholder page for Master Data.</p>
    </div>
  );
}
