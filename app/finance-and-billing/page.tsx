"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import FinanceLayout from "@/components/FinanceLayout";
import FinanceSection from "@/components/FinanceSection";
import finData from "@/lib/financeData";

export default function FinanceAndBillingIndexPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>You must log in first.</p>;

  return (
    <FinanceLayout selected="sales-accounting" onSelect={(id) => router.push(`/finance-and-billing/${id}`)}>
      <div className="space-y-6">
        <div className="flex gap-2 mb-4">
          <button className="px-3 py-2 rounded bg-indigo-100" onClick={() => router.push('/finance-and-billing/sales-accounting')}>Sales Accounting</button>
          <button className="px-3 py-2 rounded bg-indigo-100" onClick={() => router.push('/finance-and-billing/agent-billing')}>Agent Billing</button>
          <button className="px-3 py-2 rounded bg-indigo-100" onClick={() => router.push('/finance-and-billing/transport-billing')}>Transport Billing</button>
          <button className="px-3 py-2 rounded bg-indigo-100" onClick={() => router.push('/finance-and-billing/employee-subsidy')}>Employee Subsidy</button>
          <button className="px-3 py-2 rounded bg-indigo-100" onClick={() => router.push('/finance-and-billing/outstanding-receivables')}>Receivables</button>
          <button className="px-3 py-2 rounded bg-indigo-100" onClick={() => router.push('/finance-and-billing/commissions')}>Commissions</button>
        </div>
        <FinanceSection title="Finance & Billing Overview" columns={[{ key: 'saleId', label: 'Sale ID' }, { key: 'description', label: 'Description' }, { key: 'amount', label: 'Amount' }, { key: 'date', label: 'Date' }, { key: 'postedToLedger', label: 'Posted' }]} data={finData.salesAccounting as any} />
      </div>
    </FinanceLayout>
  );
}
