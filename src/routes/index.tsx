import { createFileRoute } from "@tanstack/react-router";
import React, { useState } from "react";
import {
  LayoutDashboard,
  ShoppingBag,
  BarChart3,
  Users,
  FolderKanban,
  Cpu,
  Image as ImageIcon,
  UtensilsCrossed,
  Truck,
  GraduationCap,
  Building2,
  Megaphone,
  ChevronDown,
  ChevronsLeft,
  Search,
  Maximize2,
  Sliders,
  DollarSign,
  ShoppingCart,
  Receipt,
  Package,
  ArrowUpRight,
  Calendar,
  Download,
  LogIn,
  Pencil,
  Plus,
  Send,
  MessageSquare,
  Bell,
  Settings,
  Globe,
} from "lucide-react";

import logo from "../assets/logo-PalletOMS.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "eCommerce — Rivera Admin" },
      {
        name: "description",
        content: "Live revenue, orders, customers, and inventory across Rivera.",
      },
    ],
  }),
  component: Dashboard,
});

const dashboards = [
  { name: "eCommerce", active: true },
  { name: "Analytics" },
  { name: "CRM" },
  { name: "Projects" },
  { name: "POS System" },
  { name: "NFT Market" },
  { name: "Restaurant" },
  { name: "Logistics" },
  { name: "Academy" },
  { name: "Real Estate" },
  { name: "Marketing" },
];

const webapps = [
  { name: "Applications", icon: Cpu },
  { name: "eCommerce", icon: ShoppingBag },
  { name: "Projects", icon: FolderKanban },
  { name: "POS System", icon: Receipt },
  { name: "NFT Market", icon: ImageIcon },
  { name: "Logistics", icon: Truck },
  { name: "Real Estate", icon: Building2 },
  { name: "Marketing", icon: Megaphone },
  { name: "Academy", icon: GraduationCap },
  { name: "Blogs", icon: Pencil },
  { name: "Subscription", icon: Calendar },
];

const sidebarMenu = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "On Board Dashboard", icon: LayoutDashboard },
  {
    name: "Master",
    icon: Cpu,
    children: [{ name: "Users" }, { name: "Companies" }, { name: "Locations" }],
  },
  { name: "Items", icon: ShoppingCart, children: [{ name: "Products" }, { name: "Categories" }] },
  { name: "InBound", icon: Package, children: [{ name: "Receipts" }, { name: "Putaway" }] },
  {
    name: "OutBound",
    icon: Truck,
    children: [{ name: "Pick" }, { name: "Pack" }, { name: "Ship" }],
  },
  { name: "Inventory", icon: BarChart3, children: [{ name: "Stock" }] },
  { name: "Reports", icon: Receipt, children: [{ name: "Daily" }, { name: "Monthly" }] },
  { name: "Invoicing", icon: Receipt },
  { name: "Settings", icon: Settings },
];

const stats = [
  {
    label: "Shipping Orders Today",
    value: "$19,330.00",
    delta: "11.8%",
    sub: "vs. previous period",
    icon: DollarSign,
    tint: "bg-blue-50 text-blue-600",
  },
  {
    label: "Receiving orders",
    value: "12",
    delta: "4.2%",
    sub: "this period",
    icon: ShoppingCart,
    tint: "bg-indigo-50 text-indigo-600",
  },
  {
    label: "Pending Outbound",
    value: "$1,610.83",
    delta: "2.6%",
    sub: "per order",
    icon: Receipt,
    tint: "bg-amber-50 text-amber-600",
  },
];

const orders = [
  {
    ref: "RV-10241",
    customer: "Atlas Coffee Co.",
    items: 4,
    amount: "$1,280.00",
    status: "Paid",
    when: "last month",
  },
  {
    ref: "RV-10242",
    customer: "Harbor Logistics",
    items: 2,
    amount: "$5,400.00",
    status: "Pending",
    when: "last month",
  },
  {
    ref: "RV-10243",
    customer: "Coral Boutique",
    items: 1,
    amount: "€320.00",
    status: "Paid",
    when: "2 months ago",
  },
  {
    ref: "RV-10244",
    customer: "Northwind Supply",
    items: 6,
    amount: "$8,900.00",
    status: "Refunded",
    when: "2 months ago",
  },
  {
    ref: "RV-10245",
    customer: "Sage Magazine",
    items: 3,
    amount: "£1,500.00",
    status: "Paid",
    when: "2 months ago",
  },
  {
    ref: "RV-10246",
    customer: "Driftwood Studio",
    items: 1,
    amount: "$420.00",
    status: "Failed",
    when: "2 months ago",
  },
];

const statusStyles: Record<string, string> = {
  Paid: "bg-emerald-500/10 text-emerald-700 ring-emerald-500/20",
  Pending: "bg-amber-500/10 text-amber-700 ring-amber-500/20",
  Refunded: "bg-slate-500/10 text-slate-600 ring-slate-500/20",
  Failed: "bg-rose-500/10 text-rose-700 ring-rose-500/20",
};

const activity = [
  { icon: LogIn, title: "Signed in as Admin", when: "NOW" },
  { icon: LogIn, title: "Signed in from Lisbon", when: "LAST MONTH" },
  { icon: Pencil, title: "Updated milestone — Atlas Rebrand", when: "LAST MONTH" },
  { icon: Plus, title: "Created task — Shipment tracking API", when: "LAST MONTH" },
  { icon: Download, title: "Exported revenue report (Q1)", when: "LAST MONTH" },
  { icon: Send, title: "Invited Henrik Voss as Member", when: "2 MONTHS AGO" },
  {
    icon: MessageSquare,
    title: "Commented on Sage editorial layout templates",
    when: "2 MONTHS AGO",
  },
];

function SidebarItem({ item }) {
  const [open, setOpen] = useState(false);

  if (item.children) {
    return (
      <li>
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-accent text-sidebar-foreground"
        >
          <span className="flex items-center gap-2.5">
            {item.icon
              ? (() => {
                  const Icon = item.icon;
                  return <Icon className="size-4 text-muted-foreground" />;
                })()
              : null}
            {item.name}
          </span>
          <ChevronDown className={`size-3.5 transition-transform ${open ? "-rotate-180" : ""}`} />
        </button>
        {open ? (
          <ul className="ml-4 mt-1 border-l border-border pl-3 space-y-1">
            {item.children.map((c) => (
              <li key={c.name}>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-lg text-[13px] text-muted-foreground hover:text-foreground hover:bg-accent/60"
                >
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </li>
    );
  }

  return (
    <li>
      <a
        href="#"
        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-accent text-sidebar-foreground"
      >
        {item.icon
          ? (() => {
              const Icon = item.icon;
              return <Icon className="size-4 text-muted-foreground" />;
            })()
          : null}{" "}
        {item.name}
      </a>
    </li>
  );
}

function Dashboard() {
  return (
    <div className="min-h-screen flex bg-background text-foreground">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 shrink-0 flex-col bg-sidebar border-r border-border bg-white">
        <div className="px-5 py-2.5 flex items-center gap-3 border-b">
          <img src={logo} alt="Pallet WMS" className="h-8" />
          <div>
            <div className="font-semibold leading-none text-foreground">Pallet WMS</div>
            <div className="text-[10px] tracking-[0.18em] text-muted-foreground mt-1">
              Resources Warehouse, Inc.
            </div>
          </div>
        </div>

        <nav className="px-3 py-2 overflow-y-auto flex-1 text-sm">
          <div className="px-2 pt-3 pb-2 text-[10px] tracking-[0.2em] text-muted-foreground font-medium">
            MENU
          </div>
          <ul className="mt-2 space-y-1">
            {sidebarMenu.map((item) => (
              <SidebarItem key={item.name} item={item} />
            ))}
          </ul>
        </nav>

        <div className="m-3 p-2 rounded-xl bg-accent/50 flex items-center gap-3">
          <div className="size-9 rounded-lg bg-primary text-white grid place-items-center text-sm font-semibold">
            A
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm leading-none font-medium text-foreground">Admin</div>
            <div className="text-[10px] tracking-[0.18em] text-muted-foreground mt-0.5">ADMIN</div>
          </div>
          <ChevronDown className="size-4 opacity-60 text-muted-foreground" />
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Top bar */}
        <header className="h-14 border-b border-border flex items-center gap-3 px-4 lg:px-6 bg-card">
          <button className="size-8 rounded-lg hover:bg-accent grid place-items-center text-muted-foreground">
            <ChevronsLeft className="size-4" />
          </button>
          <div className="flex-1 max-w-xl relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              placeholder="Search…"
              className="w-full h-9 pl-9 pr-12 rounded-lg bg-background border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <kbd className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground bg-accent px-1.5 py-0.5 rounded-md border border-border">
              Test
            </kbd>
          </div>
          <div className="flex items-center gap-1 ml-auto">
            {/* <button className="size-8 rounded-lg hover:bg-accent grid place-items-center text-muted-foreground">
              <Maximize2 className="size-4" />
            </button>
            <button className="size-8 rounded-lg hover:bg-accent grid place-items-center text-muted-foreground">
              <Globe className="size-4" />
            </button>
            <button className="relative size-8 rounded-lg hover:bg-accent grid place-items-center text-muted-foreground">
              <MessageSquare className="size-4" />
              <span className="absolute -top-0.5 -right-0.5 size-4 rounded-full bg-emerald-500 text-[9px] text-white font-medium grid place-items-center border-2 border-card">
                2
              </span>
            </button>
            <button className="relative size-8 rounded-lg hover:bg-accent grid place-items-center text-muted-foreground">
              <Bell className="size-4" />
              <span className="absolute -top-0.5 -right-0.5 size-4 rounded-full bg-rose-500 text-[9px] text-white font-medium grid place-items-center border-2 border-card">
                4
              </span>
            </button>
            <button className="size-8 rounded-lg hover:bg-accent grid place-items-center text-muted-foreground">
              <Settings className="size-4" />
            </button> */}
            <div className="flex items-center gap-2 ml-1 pl-2 border-l border-border">
              <div className="size-8 rounded-lg bg-primary text-white grid place-items-center text-sm font-semibold">
                A
              </div>
              <div className="hidden md:block">
                <div className="text-sm leading-none font-medium text-foreground">Admin</div>
                <div className="text-[10px] tracking-[0.18em] text-muted-foreground mt-0.5">
                  ADMIN
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-5 lg:p-8 max-w-[1500px] w-full mx-auto">
          {/* Heading */}
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                <span>Dashboards</span>
                <span>/</span>
                <span className="text-foreground/80">eCommerce</span>
              </div>
              <h1 className="font-display text-4xl lg:text-5xl mt-3 tracking-tight">
                Welcome back to your storefront
              </h1>
              <p className="text-sm text-muted-foreground mt-2">
                Live revenue, orders, customers, and inventory across Rivera.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="h-10 px-4 rounded-md bg-card border border-border text-sm flex items-center gap-2 hover:bg-accent/60">
                <Calendar className="size-4" /> Pick a date range
              </button>
              <button className="h-10 px-4 rounded-md bg-primary text-primary-foreground text-sm flex items-center gap-2 hover:opacity-90">
                <Download className="size-4" /> Export report
              </button>
            </div>
          </div>

          {/* KPI cards */}
          <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl bg-card border border-border p-5">
                <div className="flex items-start justify-between">
                  <div className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                    {s.label}
                  </div>
                  <div className={`size-9 rounded-lg grid place-items-center ${s.tint}`}>
                    <s.icon className="size-4" />
                  </div>
                </div>
                <div className="mt-4 text-3xl font-semibold tracking-tight">{s.value}</div>
                <div className="mt-3 flex items-center gap-2 text-xs">
                  <span className="inline-flex items-center gap-1 text-emerald-600 font-medium">
                    <ArrowUpRight className="size-3" /> {s.delta}
                  </span>
                  <span className="text-muted-foreground">{s.sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Orders + Activity */}
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <section className="lg:col-span-2 rounded-xl bg-card border border-border p-6">
              <header className="flex items-end justify-between">
                <div>
                  <h2 className="font-display text-2xl tracking-tight">Recent orders</h2>
                  <p className="text-xs text-muted-foreground mt-1">Latest customer transactions</p>
                </div>
              </header>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                      <th className="text-left font-normal pb-3 pr-4">Reference</th>
                      <th className="text-left font-normal pb-3 pr-4">Customer</th>
                      <th className="text-left font-normal pb-3 pr-4">Items</th>
                      <th className="text-left font-normal pb-3 pr-4">Amount</th>
                      <th className="text-left font-normal pb-3 pr-4">Status</th>
                      <th className="text-left font-normal pb-3">When</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((o) => (
                      <tr key={o.ref} className="border-t border-border/70">
                        <td className="py-3.5 pr-4 text-foreground/90">{o.ref}</td>
                        <td className="py-3.5 pr-4">{o.customer}</td>
                        <td className="py-3.5 pr-4 text-muted-foreground">{o.items}</td>
                        <td className="py-3.5 pr-4 font-medium">{o.amount}</td>
                        <td className="py-3.5 pr-4">
                          <span
                            className={`inline-flex items-center gap-1.5 text-[11px] px-2 py-0.5 rounded-full ring-1 ${statusStyles[o.status]}`}
                          >
                            <span className="size-1.5 rounded-full bg-current opacity-80" />{" "}
                            {o.status}
                          </span>
                        </td>
                        <td className="py-3.5 text-muted-foreground">{o.when}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80"
              >
                View all orders <ArrowUpRight className="size-3.5" />
              </a>
            </section>

            <section className="rounded-xl bg-card border border-border p-6">
              <h2 className="font-display text-2xl tracking-tight">Recent activity</h2>
              <p className="text-xs text-muted-foreground mt-1">Live actions across your team</p>

              <ol className="mt-6 space-y-5">
                {activity.map((a, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="size-8 rounded-full bg-accent border border-border grid place-items-center shrink-0">
                      <a.icon className="size-3.5 text-muted-foreground" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm leading-snug">
                        <span className="text-muted-foreground">U ·</span> {a.title}
                      </div>
                      <div className="text-[10px] tracking-[0.18em] text-muted-foreground mt-1">
                        {a.when}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80"
              >
                View full timeline <ArrowUpRight className="size-3.5" />
              </a>
            </section>
          </div>

          {/* Footer */}
          <footer className="mt-10 pt-6 border-t border-border flex flex-wrap items-center justify-between text-xs text-muted-foreground gap-3">
            <div className="flex items-center gap-3">
              <span className="font-display text-base text-foreground">Rivera</span>
              <span className="tracking-[0.18em]">V1.0.0</span>
              <span>© 2026 Rivera Labs</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-foreground">
                Docs
              </a>
              <a href="#" className="hover:text-foreground">
                Changelog
              </a>
              <a href="#" className="hover:text-foreground">
                Support
              </a>
              <span className="inline-flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-emerald-500" /> All systems normal
              </span>
            </div>
          </footer>
        </main>
      </div>

      {/* Floating settings */}
      <button className="fixed right-4 bottom-4 size-10 rounded-full bg-card border border-border grid place-items-center text-muted-foreground hover:text-foreground shadow-lg">
        <Sliders className="size-4" />
      </button>
    </div>
  );
}
