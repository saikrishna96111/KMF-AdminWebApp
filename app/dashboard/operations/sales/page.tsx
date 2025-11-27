"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SalesIndexPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (user) router.replace('/sales-and-operations/sales');
  }, [router, user]);
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>You must log in first.</p>;

  return null;
}
