"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import ReportsLayout from '@/components/ReportsLayout';
import ReportsSection from '@/components/ReportsSection';
import reportsData from '@/lib/reportsData';
import { useAuth } from '@/context/AuthContext';

export default function ReportsAndAnalyticsIndexPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>You must log in first.</p>;

  const navigate = (id: string) => router.push(`/reports-and-analytics/${id}`);

  return (
    <ReportsLayout onSelect={navigate}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ReportsSection columns={[{ key: 'id', label: 'ID' }, { key: 'name', label: 'Name' }]} data={reportsData.masterReports as any} title="Master Reports" subtitle="Master records & metadata" />
        <ReportsSection columns={[{ key: 'id', label: 'ID' }, { key: 'name', label: 'Name' }, { key: 'amount', label: 'Amount' }, { key: 'date', label: 'Date' }]} data={reportsData.salesDistributionReports as any} title="Sales & Distribution Reports" subtitle="Sales & distribution performance data" />
        <ReportsSection columns={[{ key: 'id', label: 'ID' }, { key: 'name', label: 'Name' }, { key: 'balance', label: 'Balance' }]} data={reportsData.accountingReports as any} title="Accounting Reports" subtitle="Accounting snapshots & trial balances" />
        <ReportsSection columns={[{ key: 'id', label: 'ID' }, { key: 'name', label: 'Name' }, { key: 'litres', label: 'Litres' }]} data={reportsData.operationalReports as any} title="Operational Reports" subtitle="Operations & shipments" />
        <ReportsSection columns={[{ key: 'id', label: 'ID' }, { key: 'name', label: 'Name' }, { key: 'totalStock', label: 'Stock' }]} data={reportsData.inventoryProductionReports as any} title="Inventory & Production Reports" subtitle="Inventory levels and production output" />
        <ReportsSection columns={[{ key: 'id', label: 'ID' }, { key: 'name', label: 'Name' }, { key: 'overdueAmount', label: 'Overdue' }]} data={reportsData.creditOutstandingReports as any} title="Credit & Outstanding Reports" subtitle="CPD & dealer outstanding" />
        <ReportsSection columns={[{ key: 'id', label: 'ID' }, { key: 'name', label: 'Name' }, { key: 'trend', label: 'Trend' }]} data={reportsData.trendPerformanceReports as any} title="Trend & Performance Analytics" subtitle="Trend analysis & KPIs" />
      </div>
    </ReportsLayout>
  );
}
