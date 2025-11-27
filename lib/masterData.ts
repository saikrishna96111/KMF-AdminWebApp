// Dummy / static master data used across the admin UI
export const agents = [
  { agentCode: 'AG001', agentName: 'Sai Kumar', location: 'Bengaluru', creditLimit: 50000, contactNo: '9876543210' },
  { agentCode: 'AG002', agentName: 'Ravi Sharma', location: 'Mysuru', creditLimit: 75000, contactNo: '9988776655' },
];

export const customers = [
  { customerCode: 'CU001', name: 'Nandini Store', address: 'MG Road, Bengaluru', route: 'R1', phone: '9123456780' },
  { customerCode: 'CU002', name: 'Green Grocer', address: 'Jayanagar, Bengaluru', route: 'R2', phone: '9981234567' },
];

export const contractors = [
  { contractorId: 'CT001', name: 'Alpha Contractors', serviceType: 'Equipment Rental', availableFrom: '2023-08-01' },
  { contractorId: 'CT002', name: 'Beta Services', serviceType: 'Cold Storage', availableFrom: '2024-01-15' },
];

export const employees = [
  { employeeId: 'E001', name: 'Anitha', department: 'Sales', subsidyEligible: true },
  { employeeId: 'E002', name: 'Karthik', department: 'Production', subsidyEligible: false },
];

export const products = [
  { productCode: 'P001', name: 'Cow Milk 1L', category: 'Milk', active: true },
  { productCode: 'P002', name: 'Paneer 200g', category: 'Milk Products', active: true },
];

export const variants = [
  { productCode: 'P001', variantName: 'Cow Milk 1L - Pack', uom: 'L', price: 50 },
  { productCode: 'P002', variantName: 'Paneer 200g - Pack', uom: 'g', price: 120 },
];

export const rateCategories = [
  { rateCategory: 'Retail', productCode: 'P001', rateValue: 50, effectiveDate: '2025-01-01' },
  { rateCategory: 'Wholesale', productCode: 'P001', rateValue: 45, effectiveDate: '2025-01-01' },
];

export const routes = [
  { routeCode: 'R1', routeName: 'North', region: 'Bengaluru', sequence: 1 },
  { routeCode: 'R2', routeName: 'South', region: 'Mysuru', sequence: 2 },
];

export const regions = [
  { regionCode: 'REG1', regionName: 'Bengaluru' },
  { regionCode: 'REG2', regionName: 'Mysuru' },
];

export const transportVendors = [
  { vendorName: 'TransCo', contactNo: '9998887776', vehicleLinked: true },
  { vendorName: 'LogiServe', contactNo: '8887776665', vehicleLinked: false },
];

export const vehicles = [
  { vehicleNo: 'KA01A1111', type: 'Truck', capacity: '2000kg' },
  { vehicleNo: 'KA02B2222', type: 'Van', capacity: '500kg' },
];

export const paymentTerms = [
  { termName: 'Net 30', durationDays: 30, applicableFor: 'All' },
  { termName: 'Immediate', durationDays: 0, applicableFor: 'Retail' },
];

export const creditLimits = [
  { entityType: 'Agent', name: 'AG001 - Sai Kumar', creditLimit: 50000 },
  { entityType: 'Customer', name: 'CU001 - Nandini Store', creditLimit: 10000 },
];

export const taxConfig = [
  { hsnCode: '0401', taxPercent: 12, category: 'Milk' },
  { hsnCode: '0406', taxPercent: 5, category: 'Dairy Products' },
];

export default {
  agents,
  customers,
  contractors,
  employees,
  products,
  variants,
  rateCategories,
  routes,
  regions,
  transportVendors,
  vehicles,
  paymentTerms,
  creditLimits,
  taxConfig,
};
