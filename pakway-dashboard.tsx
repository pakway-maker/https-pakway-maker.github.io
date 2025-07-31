"use client"

import { AppSidebar } from "./components/app-sidebar"
import { StatsCards } from "./components/stats-cards"
import { RevenueChart } from "./components/revenue-chart"
import { RecentOrders } from "./components/recent-orders"
import { TopProducts } from "./components/top-products"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Search, Bell, User } from "lucide-react"

export default function PakwayDashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Pakway</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="ml-auto flex items-center gap-2 px-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="w-[300px] pl-8" />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">Welcome back! Here's what's happening with your business today.</p>
              </div>
              <Button>Download Report</Button>
            </div>

            <StatsCards />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <RevenueChart />
              <RecentOrders />
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <TopProducts />
              <div className="col-span-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl bg-muted/50 p-6">
                    <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        Add New Product
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        Create Order
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        View Reports
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-xl bg-muted/50 p-6">
                    <h3 className="text-lg font-semibold mb-2">System Status</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Server Status</span>
                        <span className="text-sm text-green-600">Online</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Database</span>
                        <span className="text-sm text-green-600">Connected</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">API Status</span>
                        <span className="text-sm text-green-600">Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
