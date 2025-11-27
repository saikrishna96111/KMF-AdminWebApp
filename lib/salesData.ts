// Dummy / static sales & operations data
export const indents = [
  { indentId: 'IND001', agentName: 'Sai Kumar', product: 'Cow Milk 1L', quantity: 50, date: '2025-11-01', creditLimit: 50000, status: 'Approved' },
  { indentId: 'IND002', agentName: 'Ravi Sharma', product: 'Paneer 200g', quantity: 20, date: '2025-11-05', creditLimit: 20000, status: 'Pending' },
];

export const dispatches = [
  { dispatchId: 'DSP001', routeName: 'North', vehicleNo: 'KA01A1111', driverName: 'Kumar', dispatchDate: '2025-11-05', totalQty: 500, status: 'Dispatched' },
  { dispatchId: 'DSP002', routeName: 'South', vehicleNo: 'KA02B2222', driverName: 'John', dispatchDate: '2025-11-07', totalQty: 350, status: 'Planned' },
];

export const fgsIntegration = [
  { batchNo: 'B001', product: 'Cow Milk 1L', availableQty: 1000, allocatedQty: 300, dispatchRef: 'DSP001' },
  { batchNo: 'B002', product: 'Paneer 200g', availableQty: 500, allocatedQty: 150, dispatchRef: 'DSP002' },
];

export const sales = [
  { saleId: 'S001', saleType: 'Office Sales', product: 'Cow Milk 1L', qty: 20, price: 50, soldTo: 'Nandini Store', date: '2025-11-05' },
  { saleId: 'S002', saleType: 'Route Sales', product: 'Cow Milk 1L', qty: 35, price: 50, soldTo: 'Green Grocer', date: '2025-11-06' },
  { saleId: 'S003', saleType: 'Adhoc Sales', product: 'Paneer 200g', qty: 6, price: 120, soldTo: 'DirectOffice', date: '2025-11-02' },
  { saleId: 'S004', saleType: 'Parlor Sales', product: 'Cow Milk 1L', qty: 15, price: 52, soldTo: 'Parlor A', date: '2025-11-03' },
];

export const salesReturns = [
  { returnId: 'R001', saleRef: 'S002', product: 'Cow Milk 1L', returnedQty: 2, reason: 'Spoilage', date: '2025-11-06' },
];

export const stockRegister = [
  { product: 'Cow Milk 1L', openingStock: 1000, received: 500, issued: 600, closingStock: 900 },
  { product: 'Paneer 200g', openingStock: 300, received: 150, issued: 100, closingStock: 350 },
];

export const fgsStock = [
  { batchNo: 'B001', product: 'Cow Milk 1L', qtyAvailable: 1000, expiryDate: '2025-12-01' },
  { batchNo: 'B002', product: 'Paneer 200g', qtyAvailable: 500, expiryDate: '2025-12-10' },
];

export const adjustments = [
  { adjustmentId: 'A001', product: 'Cow Milk 1L', qtyAdjusted: -10, reason: 'Wastage', date: '2025-11-06' },
];

export const productions = [
  { productionBatch: 'PB001', product: 'Cow Milk 1L', producedQty: 5000, qualityStatus: 'Pass', date: '2025-11-01' },
  { productionBatch: 'PB002', product: 'Paneer 200g', producedQty: 800, qualityStatus: 'Check', date: '2025-11-01' },
];

export const procurements = [
  { procurementId: 'PR001', supplierName: 'DairyFarm', product: 'Cow Milk 20L', qtySupplied: 100, date: '2025-10-30', costCenter: 'Input' },
  { procurementId: 'PR002', supplierName: 'Farmers Co-op', product: 'Feed', qtySupplied: 50, date: '2025-11-01', costCenter: 'Procurement' },
];

export default {
  indents,
  dispatches,
  fgsIntegration,
  sales,
  salesReturns,
  stockRegister,
  fgsStock,
  adjustments,
  productions,
  procurements,
};
