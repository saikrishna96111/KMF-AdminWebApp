"use client";
import React from "react";
import DataTable from "@/components/DataTable";

export default function MasterDataSection<T extends Record<string, any>>({ title, columns, data }: {
  title: string;
  columns: { key: keyof T | string; label: string; render?: (row: T) => React.ReactNode }[];
  data: T[];
}) {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        <div className="flex items-center gap-2">
          <input className="border rounded-md px-3 py-2" placeholder="Search" />
          <button className="px-3 py-2 bg-indigo-600 text-white rounded-md">Add New</button>
        </div>
      </div>
      <DataTable columns={columns as any} data={data as any} />
    </section>
  );
}
