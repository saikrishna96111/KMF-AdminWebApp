"use client";

import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import ReportsLayout from '@/components/ReportsLayout';
import ReportsSection from '@/components/ReportsSection';
import reportsData from '@/lib/reportsData';

export default function OperationalReportsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>You must log in first.</p>;

  return (
    <ReportsLayout selected="operations" onSelect={(id) => router.push(`/reports-and-analytics/${id}`)}>
      <ReportsSection title="Operational Reports" columns={[{ key: 'id', label: 'ID' }, { key: 'name', label: 'Name' }, { key: 'litres', label: 'Litres' }]} data={reportsData.operationalReports as any} />
    </ReportsLayout>
  );
}
