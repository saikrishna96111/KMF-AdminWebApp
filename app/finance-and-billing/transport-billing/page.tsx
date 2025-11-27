"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import FinanceLayout from "@/components/FinanceLayout";
import FinanceSection from "@/components/FinanceSection";
import fdata from "@/lib/financeData";

export default function TransportBillingPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>You must log in first.</p>;

  const columns = [{ key: 'invoiceId', label: 'Invoice ID' }, { key: 'vendorName', label: 'Vendor' }, { key: 'route', label: 'Route' }, { key: 'amount', label: 'Amount' }, { key: 'date', label: 'Date' }, { key: 'status', label: 'Status' }];

  return (
    <FinanceLayout selected="transport-billing" onSelect={(id) => router.push(`/finance-and-billing/${id}`)}>
      <FinanceSection title="Transportation Billing (DTC)" columns={columns} data={fdata.transportBilling as any} />
    </FinanceLayout>
  );
}
