"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import FinanceLayout from "@/components/FinanceLayout";
import FinanceSection from "@/components/FinanceSection";
import fdata from "@/lib/financeData";

export default function EmployeeSubsidyPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>You must log in first.</p>;

  const columns = [{ key: 'subsidyId', label: 'Subsidy ID' }, { key: 'employeeName', label: 'Employee' }, { key: 'amount', label: 'Amount' }, { key: 'month', label: 'Month' }, { key: 'status', label: 'Status' }];

  return (
    <FinanceLayout selected="employee-subsidy" onSelect={(id) => router.push(`/finance-and-billing/${id}`)}>
      <FinanceSection title="Employee Subsidy Billing" columns={columns} data={fdata.employeeSubsidy as any} />
    </FinanceLayout>
  );
}
