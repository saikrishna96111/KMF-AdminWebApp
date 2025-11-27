"use client";
import React from "react";

type Column<T> = {
  key: keyof T | string;
  label: string;
  render?: (row: T) => React.ReactNode;
};

export default function DataTable<T extends Record<string, any>>({ columns, data }: {
  columns: Column<T>[];
  data: T[];
}) {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-sm border">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50 text-gray-600 text-xs uppercase">
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)} className="px-4 py-3">{col.label}</th>
            ))}
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-indigo-50">
              {columns.map((col) => (
                <td key={String(col.key)} className="px-4 py-3">
                  {col.render ? col.render(row) : String((row as any)[col.key as string])}
                </td>
              ))}
              <td className="px-4 py-3">
                <button className="text-indigo-600 hover:underline mr-3">Edit</button>
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
