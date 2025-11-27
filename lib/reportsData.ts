const reportsData = {
  masterReports: [
    { id: 'mst-001', name: 'Master Agents', count: 120 },
    { id: 'mst-002', name: 'Master Customers', count: 780 },
    { id: 'mst-003', name: 'Master Products', count: 150 },
  ],
  salesDistributionReports: [
    { id: 'sdr-001', name: 'Daily Sales', amount: 125000, date: '2025-11-26' },
    { id: 'sdr-002', name: 'Route Sales', amount: 55000, date: '2025-11-26' },
  ],
  accountingReports: [
    { id: 'acc-001', name: 'General Ledger Snapshot', balance: 987000 },
    { id: 'acc-002', name: 'Trial Balance', balance: 987000 },
  ],
  operationalReports: [
    { id: 'opr-001', name: 'Vehicle Utilization', usedPercent: 82 },
    { id: 'opr-002', name: 'Parlor Throughput', litres: 12000 },
  ],
  inventoryProductionReports: [
    { id: 'inv-001', name: 'Stock Levels', totalStock: 4520 },
    { id: 'prod-001', name: 'Production Output', litersProduced: 78000 },
  ],
  creditOutstandingReports: [
    { id: 'cr-001', name: 'Top Overdue Customers', overdueAmount: 52000 },
    { id: 'cr-002', name: 'Agent Outstanding', overdueAmount: 15000 },
  ],
  trendPerformanceReports: [
    { id: 'tp-001', name: 'Sales Trend', trend: 'increasing' },
    { id: 'tp-002', name: 'Agent Performance', topAgent: 'Agent 11' },
  ]
} as const;

export default reportsData;
