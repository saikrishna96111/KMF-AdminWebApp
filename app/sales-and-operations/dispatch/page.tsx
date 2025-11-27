"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import SalesOpsLayout from "@/components/SalesOpsLayout";
import SalesOpsSection from "@/components/SalesOpsSection";
import salesData from "@/lib/salesData";

export default function DispatchPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>You must log in first.</p>;

  const columns = [
    { key: 'dispatchId', label: 'Dispatch ID' },
    { key: 'routeName', label: 'Route Name' },
    { key: 'vehicleNo', label: 'Vehicle No.' },
    { key: 'driverName', label: 'Driver Name' },
    { key: 'dispatchDate', label: 'Dispatch Date' },
    { key: 'totalQty', label: 'Total Qty' },
    { key: 'status', label: 'Status' },
  ];

  return (
    <SalesOpsLayout selected="dispatch" onSelect={(id) => router.push(`/sales-and-operations/${id}`)}>
      <SalesOpsSection title="Route Sheet & Dispatch" columns={columns} data={salesData.dispatches as any} />
    </SalesOpsLayout>
  );
}
