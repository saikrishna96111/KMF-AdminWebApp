"use client";

import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import ReportsLayout from '@/components/ReportsLayout';
import ReportsSection from '@/components/ReportsSection';
import reportsData from '@/lib/reportsData';

export default function SalesReportsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>You must log in first.</p>;

  return (
    <ReportsLayout selected="sales" onSelect={(id) => router.push(`/reports-and-analytics/${id}`)}>
      <ReportsSection title="Sales & Distribution Reports" columns={[{ key: 'id', label: 'ID' }, { key: 'name', label: 'Name' }, { key: 'amount', label: 'Amount' }, { key: 'date', label: 'Date' }]} data={reportsData.salesDistributionReports as any} />
    </ReportsLayout>
  );
}
