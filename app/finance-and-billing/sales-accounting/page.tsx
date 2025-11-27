"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import FinanceLayout from "@/components/FinanceLayout";
import FinanceSection from "@/components/FinanceSection";
import fdata from "@/lib/financeData";

export default function SalesAccountingPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>You must log in first.</p>;

  const columns = [{ key: 'saleId', label: 'Sale ID' }, { key: 'description', label: 'Description' }, { key: 'amount', label: 'Amount' }, { key: 'date', label: 'Date' }, { key: 'postedToLedger', label: 'Posted' }];

  return (
    <FinanceLayout selected="sales-accounting" onSelect={(id) => router.push(`/finance-and-billing/${id}`)}>
      <FinanceSection title="Sales Accounting (Auto Posting)" subtitle="Ledger entries for sales with an auto-posting flag." columns={columns} data={fdata.salesAccounting as any} />
    </FinanceLayout>
  );
}
