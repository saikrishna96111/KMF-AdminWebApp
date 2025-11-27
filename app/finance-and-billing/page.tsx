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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FinanceSection title="Sales Accounting" columns={[{ key: 'saleId', label: 'Sale ID' }, { key: 'description', label: 'Description' }, { key: 'amount', label: 'Amount' }, { key: 'date', label: 'Date' }, { key: 'postedToLedger', label: 'Posted' }]} data={finData.salesAccounting as any} />

          <FinanceSection title="Agent Billing" columns={[{ key: 'billId', label: 'Bill ID' }, { key: 'agentName', label: 'Agent' }, { key: 'amount', label: 'Amount' }, { key: 'dueDate', label: 'Due Date' }, { key: 'status', label: 'Status' }]} data={finData.agentBilling as any} />

          <FinanceSection title="Transport Billing (DTC)" columns={[{ key: 'invoiceId', label: 'Invoice ID' }, { key: 'vendorName', label: 'Vendor' }, { key: 'route', label: 'Route' }, { key: 'amount', label: 'Amount' }, { key: 'date', label: 'Date' }, { key: 'status', label: 'Status' }]} data={finData.transportBilling as any} />

          <FinanceSection title="Employee Subsidy Billing" columns={[{ key: 'subsidyId', label: 'Subsidy ID' }, { key: 'employeeName', label: 'Employee' }, { key: 'amount', label: 'Amount' }, { key: 'month', label: 'Month' }, { key: 'status', label: 'Status' }]} data={finData.employeeSubsidy as any} />

          <FinanceSection title="Outstanding Receivables" columns={[{ key: 'receivableId', label: 'Receivable ID' }, { key: 'customerName', label: 'Customer' }, { key: 'amount', label: 'Amount' }, { key: 'dueDate', label: 'Due Date' }, { key: 'agingDays', label: 'Aging Days' }]} data={finData.outstandingReceivables as any} />

          <FinanceSection title="Commissions & Incentives" columns={[{ key: 'commissionId', label: 'Commission ID' }, { key: 'agentName', label: 'Agent' }, { key: 'period', label: 'Period' }, { key: 'amount', label: 'Amount' }, { key: 'status', label: 'Status' }]} data={finData.commissions as any} />
        </div>
      </div>
    </FinanceLayout>
  );
}
