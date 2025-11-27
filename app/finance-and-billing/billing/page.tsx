"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function BillingRedirect() {
  const { user, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (user) router.replace('/finance-and-billing/agent-billing');
  }, [router, user]);
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>You must log in first.</p>;
  return null;
}
"use client";

import { useAuth } from "@/context/AuthContext";

export default function BillingPage() {
  const { user, loading } = useAuth();
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>You must log in first.</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Billing</h1>
      <p className="mt-4">Placeholder page for Billing.</p>
    </div>
  );
}
