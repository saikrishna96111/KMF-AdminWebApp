"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ReportsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    router.replace('/reports-and-analytics');
  }, [router]);
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>You must log in first.</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Reports &amp; MIS</h1>
      <p className="mt-4">Placeholder page for Reports &amp; MIS.</p>
    </div>
  );
}
