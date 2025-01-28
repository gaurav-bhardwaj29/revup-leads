import { ArrowDown, ArrowUp, Phone, Users, BarChart3, PieChartIcon } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout } from "@/components/layout"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { sampleLeads, sampleStats } from "@/lib/sample-data"
import { AddLeadDialog } from "@/components/add-lead-dialog"
import { BarChart } from "@/components/charts/bar-chart"
import { PieChart } from "@/components/charts/pie-chart"
import { LineChart } from "@/components/charts/line-chart"

export default function DashboardPage() {
  const leadSourceData = Object.entries(sampleStats.leadsBySource).map(([name, value]) => ({ name, value }))
  const leadStatusData = Object.entries(sampleStats.leadsByStatus).map(([name, value]) => ({ name, value }))
  const salesByModelData = Object.entries(sampleStats.salesByModel).map(([name, value]) => ({ name, value }))
  const revenueByMonthData = Object.entries(sampleStats.revenueByMonth).map(([name, value]) => ({
    name,
    value: value / 10000000,
  }))

  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Revup Leads Dashboard</h1>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
                <ArrowUp className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{sampleStats.totalLeads}</div>
                <p className="text-xs text-green-500">+12% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">New Leads (Today)</CardTitle>
                <ArrowUp className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{sampleStats.newLeads.daily}</div>
                <p className="text-xs text-green-500">+8% from yesterday</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Qualified Leads</CardTitle>
                <ArrowUp className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{sampleStats.qualifiedLeads}</div>
                <p className="text-xs text-green-500">+15% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                <ArrowDown className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{sampleStats.conversionRate}%</div>
                <p className="text-xs text-red-500">-2% from last month</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Lead Sources</CardTitle>
                <CardDescription>Distribution of leads by source</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart data={leadSourceData} xAxisDataKey="name" barDataKey="value" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Lead Status Distribution</CardTitle>
                <CardDescription>Current status of all leads</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart data={leadStatusData} />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Sales by Model</CardTitle>
                <CardDescription>Number of cars sold by model</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart data={salesByModelData} xAxisDataKey="name" barDataKey="value" fill="#22c55e" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Monthly Revenue</CardTitle>
                <CardDescription>Revenue trend over the last 6 months (in crores)</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart data={revenueByMonthData} xAxisDataKey="name" lineDataKey="value" stroke="#8884d8" />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Recent Leads</CardTitle>
                <CardDescription>Latest leads added to the system</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sampleLeads.slice(0, 5).map((lead) => (
                      <TableRow key={lead.id}>
                        <TableCell>
                          <Link href={`/leads/${lead.id}`} className="hover:underline">
                            {lead.name}
                          </Link>
                        </TableCell>
                        <TableCell>{lead.company}</TableCell>
                        <TableCell>{lead.status}</TableCell>
                        <TableCell>{lead.lastContact}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks and activities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <AddLeadDialog>
                  <Button className="w-full justify-start" variant="outline">
                    <Users className="mr-2 h-4 w-4" />
                    Add New Lead
                  </Button>
                </AddLeadDialog>
                <Button className="w-full justify-start" variant="outline">
                  <Phone className="mr-2 h-4 w-4" />
                  Schedule Call
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  View Analytics
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}

