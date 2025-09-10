import { ReactNode } from "react";
import { DashboardLayout } from "@/blocks/dashboard/layout";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
