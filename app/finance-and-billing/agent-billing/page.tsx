"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import FinanceLayout from "@/components/FinanceLayout";
import FinanceSection from "@/components/FinanceSection";
import fdata from "@/lib/financeData";

export default function AgentBillingPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>You must log in first.</p>;

  const columns = [{ key: 'billId', label: 'Bill ID' }, { key: 'agentName', label: 'Agent' }, { key: 'amount', label: 'Amount' }, { key: 'dueDate', label: 'Due Date' }, { key: 'status', label: 'Status' }];

  return (
    <FinanceLayout selected="agent-billing" onSelect={(id) => router.push(`/finance-and-billing/${id}`)}>
      <FinanceSection title="Agent Billing" columns={columns} data={fdata.agentBilling as any} />
    </FinanceLayout>
  );
}
