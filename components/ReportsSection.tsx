"use client";

import React from 'react';
import DataTable from './DataTable';

type Filters = { fromDate?: string | null; toDate?: string | null; time?: string | null } | undefined;

export default function ReportsSection({ title, subtitle, columns, data, filters }: { title: string; subtitle?: string; columns: { key: string; label: string }[]; data: any[]; filters?: Filters }) {
  const { fromDate, toDate, time } = filters || {};
  const filtered = (data || []).filter((row) => {
    if (fromDate || toDate) {
      const dateField = (row as any).date || (row as any).createdDate || null;
      if (!dateField) return true; // nothing to filter
      const d = new Date(dateField).toISOString().slice(0, 10);
      if (fromDate && d < fromDate) return false;
      if (toDate && d > toDate) return false;
    }
    if (time) {
      const timeField = (row as any).time || (row as any).createdTime || null;
      if (!timeField) return true;
      // Compare as hh:mm, if file has time in 'HH:MM:SS' strip seconds
      const normalize = (v: string) => v.split(':').slice(0, 2).join(':');
      if (normalize(timeField) !== time) return false;
    }
    return true;
  });
  const toCsv = (rows: any[], columns: { key: string; label: string }[]) => {
    const header = columns.map((c) => `"${c.label.replace(/"/g, '""')}"`).join(',');
    const lines = rows.map((r) => {
      return columns.map((c) => {
        const val = (r as any)[c.key];
        return `"${String(val ?? '').replace(/"/g, '""')}"`;
      }).join(',');
    });
    return [header, ...lines].join('\n');
  };

  const downloadCsv = () => {
    const csv = toCsv(filtered, columns);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const fname = `${title.replace(/\s+/g, '-')}-${new Date().toISOString().slice(0,10)}.csv`;
    a.download = fname;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white shadow rounded p-4 mb-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={downloadCsv} className="bg-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-indigo-700">Download</button>
        </div>
      </div>
      <div className="mt-4">
        <DataTable columns={columns} data={filtered} />
      </div>
    </div>
  );
}
