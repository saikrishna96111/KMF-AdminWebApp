"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import FinanceLayout from "@/components/FinanceLayout";
import FinanceSection from "@/components/FinanceSection";
import fdata from "@/lib/financeData";

export default function ReceivablesPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>You must log in first.</p>;

  const columns = [{ key: 'receivableId', label: 'Receivable ID' }, { key: 'customerName', label: 'Customer' }, { key: 'amount', label: 'Amount' }, { key: 'dueDate', label: 'Due Date' }, { key: 'agingDays', label: 'Aging Days' }];

  return (
    <FinanceLayout selected="outstanding-receivables" onSelect={(id) => router.push(`/finance-and-billing/${id}`)}>
      <FinanceSection title="Outstanding Receivables" columns={columns} data={fdata.outstandingReceivables as any} />
    </FinanceLayout>
  );
}
