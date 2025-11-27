"use client";

import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import SalesOpsLayout from "@/components/SalesOpsLayout";
import SalesOpsSection from "@/components/SalesOpsSection";
import salesData from "@/lib/salesData";

export default function SalesAndOperationsIndexPage() {
  const { user, loading } = useAuth();
  const [selected, setSelected] = useState('indent');
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>You must log in first.</p>;

  return (
    <SalesOpsLayout selected={selected} onSelect={setSelected}>
      {selected === 'indent' && (
        <div className="space-y-6">
          <SalesOpsSection title="Indent Management" subtitle="Indents & credit checks" columns={[{ key: 'indentId', label: 'Indent ID' }, { key: 'agentName', label: 'Agent Name' }, { key: 'product', label: 'Product' }, { key: 'quantity', label: 'Quantity' }, { key: 'date', label: 'Date' }, { key: 'creditLimit', label: 'Credit Limit' }, { key: 'status', label: 'Status' }]} data={salesData.indents} />
        </div>
      )}

      {selected === 'dispatch' && (
        <div className="space-y-6">
          <SalesOpsSection title="Route Sheet & Dispatch" columns={[{ key: 'dispatchId', label: 'Dispatch ID' }, { key: 'routeName', label: 'Route Name' }, { key: 'vehicleNo', label: 'Vehicle No.' }, { key: 'driverName', label: 'Driver Name' }, { key: 'dispatchDate', label: 'Dispatch Date' }, { key: 'totalQty', label: 'Total Qty' }, { key: 'status', label: 'Status' }]} data={salesData.dispatches} />
        </div>
      )}

      {selected === 'fgs' && (
        <div className="space-y-6">
          <SalesOpsSection title="FGS Integration for Dispatch" columns={[{ key: 'batchNo', label: 'Batch No' }, { key: 'product', label: 'Product' }, { key: 'availableQty', label: 'Available Qty' }, { key: 'allocatedQty', label: 'Allocated Qty' }, { key: 'dispatchRef', label: 'Dispatch Ref' }]} data={salesData.fgsIntegration} />
        </div>
      )}

      {selected === 'sales' && (
        <div className="space-y-6">
          <SalesOpsSection title="Sales Recording" subtitle="Office / Route / Adhoc / Parlor" columns={[{ key: 'saleId', label: 'Sale ID' }, { key: 'saleType', label: 'Sale Type' }, { key: 'product', label: 'Product' }, { key: 'qty', label: 'Qty' }, { key: 'price', label: 'Price' }, { key: 'soldTo', label: 'Sold To' }, { key: 'date', label: 'Date' }]} data={salesData.sales} />
        </div>
      )}

      {selected === 'returns' && (
        <div className="space-y-6">
          <SalesOpsSection title="Sales Return / Adjustment" columns={[{ key: 'returnId', label: 'Return ID' }, { key: 'saleRef', label: 'Sale Ref' }, { key: 'product', label: 'Product' }, { key: 'returnedQty', label: 'Returned Qty' }, { key: 'reason', label: 'Reason' }, { key: 'date', label: 'Date' }]} data={salesData.salesReturns} />
        </div>
      )}

      {selected === 'inventory' && (
        <div className="space-y-6">
          <SalesOpsSection title="Stock Register" columns={[{ key: 'product', label: 'Product' }, { key: 'openingStock', label: 'Opening Stock' }, { key: 'received', label: 'Received' }, { key: 'issued', label: 'Issued' }, { key: 'closingStock', label: 'Closing Stock' }]} data={salesData.stockRegister} />

          <SalesOpsSection title="FGS Stock" columns={[{ key: 'batchNo', label: 'Batch No' }, { key: 'product', label: 'Product' }, { key: 'qtyAvailable', label: 'Qty Available' }, { key: 'expiryDate', label: 'Expiry Date' }]} data={salesData.fgsStock} />

          <SalesOpsSection title="Adjustment / Wastage" columns={[{ key: 'adjustmentId', label: 'Adjustment ID' }, { key: 'product', label: 'Product' }, { key: 'qtyAdjusted', label: 'Qty Adjusted' }, { key: 'reason', label: 'Reason' }, { key: 'date', label: 'Date' }]} data={salesData.adjustments} />
        </div>
      )}

      {selected === 'production' && (
        <div className="space-y-6">
          <SalesOpsSection title="Production & Quality" columns={[{ key: 'productionBatch', label: 'Production Batch' }, { key: 'product', label: 'Product' }, { key: 'producedQty', label: 'Produced Qty' }, { key: 'qualityStatus', label: 'Quality Status' }, { key: 'date', label: 'Date' }]} data={salesData.productions} />
        </div>
      )}

      {selected === 'procurement' && (
        <div className="space-y-6">
          <SalesOpsSection title="Procurement & Input Supply" columns={[{ key: 'procurementId', label: 'Procurement ID' }, { key: 'supplierName', label: 'Supplier Name' }, { key: 'product', label: 'Product/Item' }, { key: 'qtySupplied', label: 'Qty Supplied' }, { key: 'date', label: 'Date' }, { key: 'costCenter', label: 'Cost Center' }]} data={salesData.procurements} />
        </div>
      )}
    </SalesOpsLayout>
  );
}
