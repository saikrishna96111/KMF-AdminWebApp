"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import SalesOpsLayout from "@/components/SalesOpsLayout";
import SalesOpsSection from "@/components/SalesOpsSection";
import salesData from "@/lib/salesData";

export default function SalesReturnsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>You must log in first.</p>;

  const columns = [
    { key: 'returnId', label: 'Return ID' },
    { key: 'saleRef', label: 'Sale Ref' },
    { key: 'product', label: 'Product' },
    { key: 'returnedQty', label: 'Returned Qty' },
    { key: 'reason', label: 'Reason' },
    { key: 'date', label: 'Date' },
  ];

  return (
    <SalesOpsLayout selected="returns" onSelect={(id) => router.push(`/sales-and-operations/${id}`)}>
      <SalesOpsSection title="Sales Return / Adjustment" columns={columns} data={salesData.salesReturns as any} />
    </SalesOpsLayout>
  );
}
