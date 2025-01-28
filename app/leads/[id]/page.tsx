import { ArrowLeft, Mail, Phone } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Layout } from "@/components/layout"
import { Badge } from "@/components/ui/badge"
import { sampleLeads } from "@/lib/sample-data"
import { LeadActivity } from "@/components/lead-activity"

export default function LeadDetailsPage({ params }: { params: { id: string } }) {
  const lead = sampleLeads.find((l) => l.id === Number.parseInt(params.id))

  if (!lead) {
    return <div>Lead not found</div>
  }

  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/leads">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Leads
            </Link>
          </Button>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-semibold">{lead.name}</h1>
              <p className="text-muted-foreground">{lead.company}</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline">{lead.status}</Badge>
              <Button>Edit Lead</Button>
            </div>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-6 md:col-span-2">
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
                <TabsTrigger value="attachments">Attachments</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <a href={`mailto:${lead.email}`} className="hover:underline">
                        {lead.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <a href={`tel:${lead.phone}`} className="hover:underline">
                        {lead.phone}
                      </a>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Professional Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <dl className="grid gap-2">
                      <div>
                        <dt className="text-sm font-medium">Title</dt>
                        <dd className="text-muted-foreground">{lead.title}</dd>
                      </div>
                      {lead.linkedIn && (
                        <div>
                          <dt className="text-sm font-medium">LinkedIn</dt>
                          <dd>
                            <a
                              href={lead.linkedIn}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              {lead.linkedIn}
                            </a>
                          </dd>
                        </div>
                      )}
                      {lead.website && (
                        <div>
                          <dt className="text-sm font-medium">Website</dt>
                          <dd>
                            <a
                              href={lead.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              {lead.website}
                            </a>
                          </dd>
                        </div>
                      )}
                    </dl>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="activity">
                {lead.activities && <LeadActivity activities={lead.activities} />}
              </TabsContent>
              <TabsContent value="notes">
                <Card>
                  <CardHeader>
                    <CardTitle>Notes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {lead.notes && lead.notes.length > 0 ? (
                      <ul className="list-disc pl-4 space-y-2">
                        {lead.notes.map((note, index) => (
                          <li key={index} className="text-sm">
                            {note}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground">No notes available.</p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="attachments">
                <Card>
                  <CardHeader>
                    <CardTitle>Attachments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {lead.attachments && lead.attachments.length > 0 ? (
                      <ul className="space-y-2">
                        {lead.attachments.map((attachment) => (
                          <li key={attachment.id} className="flex items-center gap-2">
                            <a
                              href={attachment.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              {attachment.name}
                            </a>
                            <span className="text-xs text-muted-foreground">({attachment.type})</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground">No attachments available.</p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Lead Details</CardTitle>
              <CardDescription>Last updated: {lead.lastContact}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-sm font-medium">Assigned To</div>
                <div className="text-muted-foreground">{lead.assignedTo}</div>
              </div>
              <div>
                <div className="text-sm font-medium">Priority</div>
                <div>
                  <Badge variant="outline">{lead.priority}</Badge>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium">Source</div>
                <div className="text-muted-foreground">{lead.source}</div>
              </div>
              {lead.campaign && (
                <div>
                  <div className="text-sm font-medium">Campaign</div>
                  <div className="text-muted-foreground">{lead.campaign}</div>
                </div>
              )}
              <div>
                <div className="text-sm font-medium">Car Model</div>
                <div className="text-muted-foreground">{lead.carModel}</div>
              </div>
              <div>
                <div className="text-sm font-medium">Preferred Budget</div>
                <div className="text-muted-foreground">{lead.preferredBudget}</div>
              </div>
              {lead.testDriveDate && (
                <div>
                  <div className="text-sm font-medium">Test Drive Date</div>
                  <div className="text-muted-foreground">{lead.testDriveDate}</div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

