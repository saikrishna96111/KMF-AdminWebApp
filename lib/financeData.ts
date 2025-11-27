// Static demo data for Finance & Billing
export const salesAccounting = [
  { saleId: 'S001', description: 'Office sale S001', amount: 1000, date: '2025-11-01', postedToLedger: true },
  { saleId: 'S002', description: 'Route sale S002', amount: 1750, date: '2025-11-03', postedToLedger: false },
];

export const agentBilling = [
  { billId: 'BILL001', agentName: 'Sai Kumar', amount: 2500, dueDate: '2025-11-30', status: 'Pending' },
  { billId: 'BILL002', agentName: 'Ravi Sharma', amount: 3000, dueDate: '2025-12-15', status: 'Paid' },
];

export const transportBilling = [
  { invoiceId: 'T001', vendorName: 'TransCo', route: 'North', amount: 1200, date: '2025-11-05', status: 'Paid' },
  { invoiceId: 'T002', vendorName: 'LogiServe', route: 'South', amount: 900, date: '2025-11-06', status: 'Pending' },
];

export const employeeSubsidy = [
  { subsidyId: 'SUB001', employeeName: 'Anitha', amount: 200, month: '2025-11', status: 'Processed' },
  { subsidyId: 'SUB002', employeeName: 'Karthik', amount: 150, month: '2025-11', status: 'Pending' },
];

export const outstandingReceivables = [
  { receivableId: 'R001', customerName: 'Nandini Store', amount: 800, dueDate: '2025-11-30', agingDays: 10 },
  { receivableId: 'R002', customerName: 'Green Grocer', amount: 500, dueDate: '2025-12-05', agingDays: 5 },
];

export const commissions = [
  { commissionId: 'C001', agentName: 'Sai Kumar', period: '2025-10', amount: 250, status: 'Paid' },
  { commissionId: 'C002', agentName: 'Ravi Sharma', period: '2025-10', amount: 180, status: 'Pending' },
];

export default {
  salesAccounting,
  agentBilling,
  transportBilling,
  employeeSubsidy,
  outstandingReceivables,
  commissions,
};
