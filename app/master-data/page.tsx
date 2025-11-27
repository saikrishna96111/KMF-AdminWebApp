"use client";

import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import MasterDataLayout from "@/components/MasterDataLayout";
import MasterDataSection from "@/components/MasterDataSection";
import data from "@/lib/masterData";

export default function MasterDataIndexPage() {
  const { user, loading } = useAuth();
  const [selected, setSelected] = useState("parties");
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>You must log in first.</p>;

  return (
    <MasterDataLayout selected={selected} onSelect={setSelected}>
      {selected === "parties" && (
        <div className="space-y-6">
          <MasterDataSection
            title="Agent / Point Holders"
            columns={[
              { key: 'agentCode', label: 'Agent Code' },
              { key: 'agentName', label: 'Agent Name' },
              { key: 'location', label: 'Location' },
              { key: 'creditLimit', label: 'Credit Limit' },
              { key: 'contactNo', label: 'Contact No.' },
            ]}
            data={data.agents}
          />

          <MasterDataSection
            title="Customer / Outlet Master"
            columns={[{ key: 'customerCode', label: 'Customer Code' }, { key: 'name', label: 'Name' }, { key: 'address', label: 'Address' }, { key: 'route', label: 'Route' }, { key: 'phone', label: 'Phone' }]}
            data={data.customers}
          />

          <MasterDataSection
            title="Contractor Master"
            columns={[{ key: 'contractorId', label: 'Contractor ID' }, { key: 'name', label: 'Name' }, { key: 'serviceType', label: 'Service Type' }, { key: 'availableFrom', label: 'Available From' }]}
            data={data.contractors}
          />

          <MasterDataSection
            title="Employee Master"
            columns={[{ key: 'employeeId', label: 'Employee ID' }, { key: 'name', label: 'Name' }, { key: 'department', label: 'Department' }, { key: 'subsidyEligible', label: 'Subsidy Eligible' }]}
            data={data.employees}
          />
        </div>
      )}

      {selected === "product" && (
        <div className="space-y-6">
          <MasterDataSection title="Product Master" columns={[{ key: 'productCode', label: 'Product Code' }, { key: 'name', label: 'Product Name' }, { key: 'category', label: 'Category' }, { key: 'active', label: 'Active' }]} data={data.products} />

          <MasterDataSection title="Product Variants" columns={[{ key: 'productCode', label: 'Product Code' }, { key: 'variantName', label: 'Variant' }, { key: 'uom', label: 'UOM' }, { key: 'price', label: 'Price' }]} data={data.variants} />

          <MasterDataSection title="Rate Categories" columns={[{ key: 'rateCategory', label: 'Rate Category' }, { key: 'productCode', label: 'Product' }, { key: 'rateValue', label: 'Rate Value' }, { key: 'effectiveDate', label: 'Effective Date' }]} data={data.rateCategories} />
        </div>
      )}

      {selected === "route" && (
        <div className="space-y-6">
          <MasterDataSection title="Distribution Routes" columns={[{ key: 'routeCode', label: 'Route Code' }, { key: 'routeName', label: 'Route Name' }, { key: 'region', label: 'Region' }, { key: 'sequence', label: 'Sequence' }]} data={data.routes} />

          <MasterDataSection title="Region / Zone Master" columns={[{ key: 'regionCode', label: 'Region Code' }, { key: 'regionName', label: 'Region Name' }]} data={data.regions} />

          <MasterDataSection title="Transport Vendor Master" columns={[{ key: 'vendorName', label: 'Vendor Name' }, { key: 'contactNo', label: 'Contact No.' }, { key: 'vehicleLinked', label: 'Vehicle Linked' }]} data={data.transportVendors} />

          <MasterDataSection title="Vehicle Master" columns={[{ key: 'vehicleNo', label: 'Vehicle No.' }, { key: 'type', label: 'Type' }, { key: 'capacity', label: 'Capacity' }]} data={data.vehicles} />
        </div>
      )}

      {selected === "financial" && (
        <div className="space-y-6">
          <MasterDataSection title="Payment Terms" columns={[{ key: 'termName', label: 'Term' }, { key: 'durationDays', label: 'Duration (Days)' }, { key: 'applicableFor', label: 'Applicable For' }]} data={data.paymentTerms} />

          <MasterDataSection title="Credit Limits" columns={[{ key: 'entityType', label: 'Entity Type' }, { key: 'name', label: 'Name' }, { key: 'creditLimit', label: 'Credit Limit' }]} data={data.creditLimits} />

          <MasterDataSection title="Tax / GST Configuration" columns={[{ key: 'hsnCode', label: 'HSN Code' }, { key: 'taxPercent', label: 'Tax %' }, { key: 'category', label: 'Category' }]} data={data.taxConfig} />
        </div>
      )}
    </MasterDataLayout>
  );
}
