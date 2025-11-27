"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import SalesOpsLayout from "@/components/SalesOpsLayout";
import SalesOpsSection from "@/components/SalesOpsSection";
import salesData from "@/lib/salesData";

export default function OfficeSalesPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>You must log in first.</p>;

  const columns = [{ key: 'saleId', label: 'Sale ID' }, { key: 'saleType', label: 'Sale Type' }, { key: 'product', label: 'Product' }, { key: 'qty', label: 'Qty' }, { key: 'price', label: 'Price' }, { key: 'soldTo', label: 'Sold To' }, { key: 'date', label: 'Date' }];
  const data = (salesData.sales as any).filter((s: any) => s.saleType === 'Office Sales');

  return (
    <SalesOpsLayout selected="sales" onSelect={(id) => router.push(`/sales-and-operations/${id}`)}>
      <SalesOpsSection title="Office Sales" columns={columns} data={data} />
    </SalesOpsLayout>
  );
}
