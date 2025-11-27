"use client";
import React from "react";

export default function FinanceLayout({ selected, onSelect, children }: {
  selected: string;
  onSelect: (id: string) => void;
  children: React.ReactNode;
}) {
  const menus = [
    { id: 'sales-accounting', label: 'Sales Accounting' },
    { id: 'agent-billing', label: 'Agent Billing' },
    { id: 'transport-billing', label: 'Transportation Billing (DTC)' },
    { id: 'employee-subsidy', label: 'Employee Subsidy Billing' },
    { id: 'outstanding-receivables', label: 'Outstanding Receivables' },
    { id: 'commissions', label: 'Commissions & Incentives' },
  ];

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border p-4">
            <h3 className="text-lg font-semibold mb-4">Finance & Billing</h3>
            <nav className="space-y-2">
              {menus.map(m => (
                <button
                  key={m.id}
                  onClick={() => onSelect(m.id)}
                  className={`w-full text-left px-3 py-2 rounded-md ${selected === m.id ? 'bg-indigo-50 font-medium text-indigo-700' : 'text-gray-700 hover:bg-gray-50'}`}>
                  {m.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>
        <main className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
