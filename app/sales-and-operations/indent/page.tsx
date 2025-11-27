"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import SalesOpsLayout from "@/components/SalesOpsLayout";
import SalesOpsSection from "@/components/SalesOpsSection";
import salesData from "@/lib/salesData";

export default function IndentPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>You must log in first.</p>;

  // helper to compute approximate amount; assume unit price 50 for demo
  const columns = [
    { key: "indentId", label: "Indent ID" },
    { key: "agentName", label: "Agent Name" },
    { key: "product", label: "Product" },
    { key: "quantity", label: "Quantity" },
    { key: "date", label: "Date" },
    { key: "creditLimit", label: "Credit Limit" },
    {
      key: "status",
      label: "Status",
      render: (r: any) => {
        const amount = (r.quantity || 0) * 50; // assume unit price 50
        return amount > r.creditLimit ? <span className="text-red-600">Over Limit</span> : <span className="text-green-600">Within Limit</span>;
      },
    },
  ];

  return (
    <SalesOpsLayout selected="indent" onSelect={(id) => router.push(`/sales-and-operations/${id}`)}>
      <SalesOpsSection title="Indent Management" subtitle="Indent list with credit cap checks" columns={columns} data={salesData.indents as any} />
    </SalesOpsLayout>
  );
}
