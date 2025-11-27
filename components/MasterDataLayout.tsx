"use client";
import React from "react";
import Link from "next/link";

export default function MasterDataLayout({ selected, onSelect, children }: {
  selected: string;
  onSelect: (id: string) => void;
  children: React.ReactNode;
}) {
  const menus = [
    { id: 'parties', label: 'Parties & Stakeholders' },
    { id: 'product', label: 'Product & Pricing' },
    { id: 'route', label: 'Route & Distribution' },
    { id: 'financial', label: 'Financial Configuration' },
  ];

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border p-4">
            <h3 className="text-lg font-semibold mb-4">Master Data</h3>
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
