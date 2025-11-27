"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import SalesOpsLayout from "@/components/SalesOpsLayout";
import SalesOpsSection from "@/components/SalesOpsSection";
import salesData from "@/lib/salesData";

export default function SalesIndexPageNew() {
  const { user, loading } = useAuth();
  const router = useRouter();
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>You must log in first.</p>;

  return (
    <SalesOpsLayout selected="sales" onSelect={(id) => router.push(`/sales-and-operations/${id}`)}>
      <div className="space-y-6">
        <div className="flex gap-2 mb-4">
          <button className="px-3 py-2 rounded bg-indigo-100" onClick={() => router.push('/sales-and-operations/sales/office')}>Office Sales</button>
          <button className="px-3 py-2 rounded bg-indigo-100" onClick={() => router.push('/sales-and-operations/sales/route-sales')}>Route Sales</button>
          <button className="px-3 py-2 rounded bg-indigo-100" onClick={() => router.push('/sales-and-operations/sales/adhoc')}>Adhoc Sales</button>
          <button className="px-3 py-2 rounded bg-indigo-100" onClick={() => router.push('/sales-and-operations/sales/parlor')}>Parlor Sales</button>
        </div>
        <SalesOpsSection title="Sales Recording - Overview" columns={[{ key: 'saleId', label: 'Sale ID' }, { key: 'saleType', label: 'Sale Type' }, { key: 'product', label: 'Product' }, { key: 'qty', label: 'Qty' }, { key: 'price', label: 'Price' }, { key: 'soldTo', label: 'Sold To' }, { key: 'date', label: 'Date' }]} data={salesData.sales as any} />
      </div>
    </SalesOpsLayout>
  );
}
