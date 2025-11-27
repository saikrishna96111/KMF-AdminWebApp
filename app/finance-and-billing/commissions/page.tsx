"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import FinanceLayout from "@/components/FinanceLayout";
import FinanceSection from "@/components/FinanceSection";
import fdata from "@/lib/financeData";

export default function CommissionsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>You must log in first.</p>;

  const columns = [{ key: 'commissionId', label: 'Commission ID' }, { key: 'agentName', label: 'Agent' }, { key: 'period', label: 'Period' }, { key: 'amount', label: 'Amount' }, { key: 'status', label: 'Status' }];

  return (
    <FinanceLayout selected="commissions" onSelect={(id) => router.push(`/finance-and-billing/${id}`)}>
      <FinanceSection title="Commissions & Incentives" columns={columns} data={fdata.commissions as any} />
    </FinanceLayout>
  );
}
