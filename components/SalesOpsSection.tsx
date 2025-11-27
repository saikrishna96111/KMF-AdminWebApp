"use client";
import React from "react";
import DataTable from "@/components/DataTable";

export default function SalesOpsSection<T extends Record<string, any>>({ title, columns, data, subtitle }: {
  title: string;
  subtitle?: string;
  columns: { key: keyof T | string; label: string; render?: (row: T) => React.ReactNode }[];
  data: T[];
}) {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-2">
          <input className="border rounded-md px-3 py-2" placeholder="Search" />
          <button className="px-3 py-2 bg-indigo-600 text-white rounded-md">Add New</button>
        </div>
      </div>
      <DataTable columns={columns as any} data={data as any} />
    </section>
  );
}
