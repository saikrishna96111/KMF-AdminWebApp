"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProcurementPageOps() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    router.replace("/sales-and-operations/procurement");
  }, [router]);
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>You must log in first.</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Procurement &amp; Input</h1>
      <p className="mt-4">Placeholder page for Procurement & Input (Operations).</p>
    </div>
  );
}
