"use client";
import React from "react";

export default function SalesOpsLayout({ selected, onSelect, children }: {
  selected: string;
  onSelect: (id: string) => void;
  children: React.ReactNode;
}) {
  const menus = [
    { id: 'indent', label: 'Indent Management' },
    { id: 'dispatch', label: 'Route Sheet & Dispatch' },
    { id: 'fgs', label: 'FGS Integration' },
    { id: 'sales', label: 'Sales Recording' },
    { id: 'returns', label: 'Sales Return / Adjustment' },
    { id: 'inventory', label: 'Inventory Management' },
    { id: 'production', label: 'Production & Quality' },
    { id: 'procurement', label: 'Procurement & Input Supply' },
  ];

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border p-4">
            <h3 className="text-lg font-semibold mb-4">Sales & Operations</h3>
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
