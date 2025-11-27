"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import SalesOpsLayout from "@/components/SalesOpsLayout";
import SalesOpsSection from "@/components/SalesOpsSection";
import salesData from "@/lib/salesData";

export default function FGSIntegrationPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>You must log in first.</p>;

  const columns = [
    { key: 'batchNo', label: 'Batch No' },
    { key: 'product', label: 'Product' },
    { key: 'availableQty', label: 'Available Qty' },
    { key: 'allocatedQty', label: 'Allocated Qty' },
    { key: 'dispatchRef', label: 'Dispatch Ref' },
  ];

  return (
    <SalesOpsLayout selected="fgs" onSelect={(id) => router.push(`/sales-and-operations/${id}`)}>
      <SalesOpsSection title="FGS Integration for Dispatch" columns={columns} data={salesData.fgsIntegration as any} />
    </SalesOpsLayout>
  );
}
