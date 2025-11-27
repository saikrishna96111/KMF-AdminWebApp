"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

type SubLink = { name: string; path: string };
type LinkItem = { name: string; path: string; subLinks?: SubLink[] };
type MenuItem = { label: string; links: LinkItem[] };

export default function NavBar() {
  const router = useRouter();
  const { user, loading } = useAuth();
  if (loading) return null;
  if (!user) return null;
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openNested, setOpenNested] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { label: "Dashboard", links: [{ name: "Overview", path: "/dashboard" }] },
    { label: "Master Data", links: [{ name: "Master Data", path: "/master-data" }] },
    {
      label: "Sales & Operations",
      links: [
        { name: "Indent", path: "/sales-and-operations/indent" },
        { name: "Sales", path: "/sales-and-operations/sales" },
        { name: "Dispatch", path: "/sales-and-operations/dispatch" },
        { name: "Inventory", path: "/sales-and-operations/inventory" },
        { name: "Production", path: "/sales-and-operations/production" },
        { name: "Procurement", path: "/sales-and-operations/procurement" },
      ],
    },
    {
      label: "Finance & Billing",
      links: [
        { name: "Sales Accounting", path: "/finance-and-billing/sales-accounting" },
        { name: "Agent Billing", path: "/finance-and-billing/agent-billing" },
        { name: "Transport Billing (DTC)", path: "/finance-and-billing/transport-billing" },
        { name: "Employee Subsidy", path: "/finance-and-billing/employee-subsidy" },
        { name: "Outstanding Receivables", path: "/finance-and-billing/outstanding-receivables" },
        { name: "Commissions & Incentives", path: "/finance-and-billing/commissions" },
      ],
    },
    {
      label: "Reports & Analytics",
      links: [
        { name: "Overview", path: "/reports-and-analytics" },
        { name: "Master Reports", path: "/reports-and-analytics/master" },
        { name: "Sales & Distribution", path: "/reports-and-analytics/sales" },
        { name: "Accounting", path: "/reports-and-analytics/accounting" },
        { name: "Operations", path: "/reports-and-analytics/operations" },
        { name: "Inventory & Production", path: "/reports-and-analytics/inventory" },
        { name: "Credit & Outstanding", path: "/reports-and-analytics/credit" },
        { name: "Trend & Performance", path: "/reports-and-analytics/trend" },
      ],
    },
    {
      label: "Administration",
      links: [
        { name: "Settings", path: "/administration/settings" },
        { name: "Roles", path: "/administration/roles" },
        { name: "Support", path: "/administration/support" },
        { name: "Logout", path: "/logout" },
      ],
    },
  ];

  const handleNavigation = (path: string) => {
    router.push(path);
    setOpenDropdown(null);
    setOpenNested(null);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-xl border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/dashboard" className="text-2xl font-bold text-indigo-700">RBKVMUL Dashboard</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div key={item.label} className="relative">
                <button
                  onClick={() => {
                    if (item.links.length === 1 && !item.links[0].subLinks) {
                      handleNavigation(item.links[0].path);
                      return;
                    }
                    setOpenDropdown(openDropdown === item.label ? null : item.label);
                  }}
                  className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-md font-medium transition"
                >
                  {item.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                  />
                </button>

                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-2xl border border-gray-200 py-2 z-50">
                    {item.links.map((link) => (
                      <div key={link.name} className="relative group">
                        <div
                          onClick={() => !link.subLinks && handleNavigation(link.path)}
                          className="flex items-center justify-between px-4 py-3 hover:bg-indigo-50 text-gray-700 cursor-pointer transition"
                        >
                          <span className="text-sm font-medium">{link.name}</span>
                          {link.subLinks && <ChevronDown className="w-4 h-4" />}
                        </div>

                        {link.subLinks && openNested === link.name && (
                          <div className="absolute top-0 left-full ml-1 w-56 bg-white rounded-lg shadow-2xl border border-gray-200 py-2">
                            {link.subLinks.map((sub) => (
                              <div
                                key={sub.name}
                                onClick={() => handleNavigation(sub.path)}
                                className="px-4 py-3 hover:bg-indigo-50 text-gray-700 cursor-pointer text-sm"
                              >
                                {sub.name}
                              </div>
                            ))}
                          </div>
                        )}

                        {link.subLinks && (
                          <div
                            onMouseEnter={() => setOpenNested(link.name)}
                            onMouseLeave={() => setOpenNested(null)}
                            className="absolute inset-0"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop image icons */}
          <div className="hidden lg:flex items-center space-x-2 mr-3">
            <Image src="/download.jpg" alt="Download" width={28} height={28} className="object-contain rounded" />
            <Image src="/download_1.jpg" alt="Download 1" width={28} height={28} className="object-contain rounded" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          {menuItems.map((item) => (
            <div key={item.label} className="border-b border-gray-100">
              <button
                onClick={() => {
                  if (item.links.length === 1 && !item.links[0].subLinks) {
                    handleNavigation(item.links[0].path);
                    return;
                  }
                  setOpenDropdown(openDropdown === item.label ? null : item.label);
                }}
                className="w-full px-6 py-4 text-left font-medium text-gray-700 hover:bg-indigo-50 flex justify-between items-center"
              >
                {item.label}
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                />
              </button>
              {openDropdown === item.label && (
                <div className="bg-gray-50">
                  {item.links.map((link) => (
                    <div key={link.name}>
                      <div
                        onClick={() => !link.subLinks && handleNavigation(link.path)}
                        className="px-8 py-3 text-gray-600 hover:bg-indigo-100 cursor-pointer"
                      >
                        {link.name}
                      </div>
                      {link.subLinks && openNested === link.name && (
                        <div className="bg-white ml-8">
                          {link.subLinks.map((sub) => (
                            <div
                              key={sub.name}
                              onClick={() => handleNavigation(sub.path)}
                              className="px-8 py-3 text-sm text-gray-600 hover:bg-indigo-50 cursor-pointer"
                            >
                              → {sub.name}
                            </div>
                          ))}
                        </div>
                      )}
                      {link.subLinks && (
                        <button
                          onClick={() => setOpenNested(openNested === link.name ? null : link.name)}
                          className="px-8 py-2 text-xs text-indigo-600"
                        >
                          {openNested === link.name ? "Hide" : "Show"} Submenu
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
