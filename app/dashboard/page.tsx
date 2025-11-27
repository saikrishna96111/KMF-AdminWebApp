"use client";
// no longer managing navigation state here; NavBar global component handles it
import { useAuth } from "@/context/AuthContext";
import Dashboard from "@/components/Dashboard";
// This page no longer contains navigation-specific types; NavBar provides navigation globally.

export default function DashboardPage() {
  const { user, loading } = useAuth();
  // Navigation handled globally by `components/NavBar` in app layout

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-xl text-gray-600">Loading...</p>
      </div>
    );

  if (!user)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-xl text-red-600 font-medium">You must log in first.</p>
      </div>
    );

  // Navigation moved to a global NavBar component. This page only renders the Dashboard content.

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 relative">
      <div
        className="fixed inset-0 opacity-10 pointer-events-none z-0"
        style={{
          backgroundImage: "url('/myimage.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Navigation handled globally by components/NavBar */}

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <Dashboard />
      </main>
    </div>
  );
}
