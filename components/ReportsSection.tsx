"use client";

import React from 'react';
import DataTable from './DataTable';

export default function ReportsSection({ title, subtitle, columns, data }: { title: string; subtitle?: string; columns: { key: string; label: string }[]; data: any[] }) {
  return (
    <div className="bg-white shadow rounded p-4 mb-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
      </div>
      <div className="mt-4">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
