"use client";

import React from 'react';
import { useAuth } from '@/context/AuthContext';

type Props = { selected?: string; onSelect?: (id: string) => void; children?: React.ReactNode };

export default function ReportsLayout({ selected, onSelect, children }: Props) {
  const { user, loading } = useAuth();
  if (loading) return null;
  if (!user) return null;

  return (
    <div className="flex">
      <aside className="w-64 bg-white border-r p-4">
        <div className="mb-4"> <h2 className="font-bold">Reports & Analytics</h2></div>
        <ul>
          <li className={`p-2 rounded ${selected === 'master' ? 'bg-indigo-50' : ''}`} onClick={() => onSelect?.('master')}>Master Reports</li>
          <li className={`p-2 rounded ${selected === 'sales' ? 'bg-indigo-50' : ''}`} onClick={() => onSelect?.('sales')}>Sales & Distribution Reports</li>
          <li className={`p-2 rounded ${selected === 'accounting' ? 'bg-indigo-50' : ''}`} onClick={() => onSelect?.('accounting')}>Accounting Reports</li>
          <li className={`p-2 rounded ${selected === 'operations' ? 'bg-indigo-50' : ''}`} onClick={() => onSelect?.('operations')}>Operational Reports</li>
          <li className={`p-2 rounded ${selected === 'inventory' ? 'bg-indigo-50' : ''}`} onClick={() => onSelect?.('inventory')}>Inventory & Production Reports</li>
          <li className={`p-2 rounded ${selected === 'credit' ? 'bg-indigo-50' : ''}`} onClick={() => onSelect?.('credit')}>Credit & Outstanding Reports</li>
          <li className={`p-2 rounded ${selected === 'trend' ? 'bg-indigo-50' : ''}`} onClick={() => onSelect?.('trend')}>Trend & Performance Analytics</li>
        </ul>
      </aside>
      <div className="flex-1 p-6 bg-gray-50">{children}</div>
    </div>
  );
}
