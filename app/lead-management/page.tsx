import { Plus } from "lucide-react"
import { DragHandleDots2Icon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout } from "@/components/layout"
import { Badge } from "@/components/ui/badge"
import { AddLeadDialog } from "@/components/add-lead-dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { sampleLeads } from "@/lib/sample-data"

const stages = [
  { id: "new", name: "New" },
  { id: "contacted", name: "Contacted" },
  { id: "qualified", name: "Qualified" },
  { id: "proposal", name: "Proposal" },
  { id: "negotiation", name: "Negotiation" },
  { id: "closed", name: "Closed" },
]

export default function LeadManagementPage() {
  const leadsInStages = stages.map((stage) => ({
    ...stage,
    leads: sampleLeads.filter((lead) => lead.status.toLowerCase() === stage.id),
  }))

  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Revup Leads - Lead Management</h1>
          <AddLeadDialog>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Lead
            </Button>
          </AddLeadDialog>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {leadsInStages.map((stage) => (
            <div key={stage.id} className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-semibold">{stage.name}</h2>
                  <p className="text-sm text-muted-foreground">{stage.leads.length} leads</p>
                </div>
                <AddLeadDialog initialStage={stage.id}>
                  <Button variant="ghost" size="icon">
                    <Plus className="h-4 w-4" />
                  </Button>
                </AddLeadDialog>
              </div>
              <div className="space-y-4">
                {stage.leads.map((lead) => (
                  <Card key={lead.id} className="cursor-move">
                    <CardHeader className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={`https://avatar.vercel.sh/${lead.name}`} />
                            <AvatarFallback>
                              {lead.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="space-y-1">
                            <CardTitle className="text-sm">{lead.name}</CardTitle>
                            <p className="text-xs text-muted-foreground">{lead.company}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <DragHandleDots2Icon className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">{lead.carModel}</Badge>
                        <Badge variant="outline">{lead.preferredBudget}</Badge>
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground">Last Contact: {lead.lastContact}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

