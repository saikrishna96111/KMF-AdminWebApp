"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import SalesOpsLayout from "@/components/SalesOpsLayout";
import SalesOpsSection from "@/components/SalesOpsSection";
import salesData from "@/lib/salesData";

export default function InventoryPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>You must log in first.</p>;

  return (
    <SalesOpsLayout selected="inventory" onSelect={(id) => router.push(`/sales-and-operations/${id}`)}>
      <div className="space-y-6">
        <SalesOpsSection title="Stock Register" columns={[{ key: 'product', label: 'Product' }, { key: 'openingStock', label: 'Opening Stock' }, { key: 'received', label: 'Received' }, { key: 'issued', label: 'Issued' }, { key: 'closingStock', label: 'Closing Stock' }]} data={salesData.stockRegister as any} />

        <SalesOpsSection title="FGS Stock" columns={[{ key: 'batchNo', label: 'Batch No' }, { key: 'product', label: 'Product' }, { key: 'qtyAvailable', label: 'Qty Available' }, { key: 'expiryDate', label: 'Expiry Date' }]} data={salesData.fgsStock as any} />

        <SalesOpsSection title="Adjustment / Wastage" columns={[{ key: 'adjustmentId', label: 'Adjustment ID' }, { key: 'product', label: 'Product' }, { key: 'qtyAdjusted', label: 'Qty Adjusted' }, { key: 'reason', label: 'Reason' }, { key: 'date', label: 'Date' }]} data={salesData.adjustments as any} />
      </div>
    </SalesOpsLayout>
  );
}
