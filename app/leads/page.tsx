import { Layout } from "@/components/layout"
import { columns } from "@/components/data-table/columns"
import { DataTable } from "@/components/data-table/data-table"
import { sampleLeads } from "@/lib/sample-data"

export default function LeadsPage() {
  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Revup Leads - All Leads</h1>
        </div>
        <DataTable columns={columns} data={sampleLeads} />
      </div>
    </Layout>
  )
}

