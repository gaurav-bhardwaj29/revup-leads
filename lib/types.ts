export type LeadStatus = "New" | "Contacted" | "Qualified" | "Proposal" | "Won" | "Lost"
export type LeadPriority = "Low" | "Medium" | "High"

export interface Lead {
  id: number
  name: string
  company: string
  title: string
  email: string
  phone: string
  status: LeadStatus
  priority: LeadPriority
  assignedTo: string
  lastContact: string
  source: string
  campaign?: string
  linkedIn?: string
  website?: string
  address?: string
  notes?: string[]
  attachments?: Array<{
    id: number
    name: string
    url: string
    type: string
    uploadedAt: string
  }>
  activities?: Array<{
    id: number
    type: string
    description: string
    date: string
    performedBy: string
  }>
  carModel?: string
  preferredBudget?: string
  testDriveDate?: string
}

export interface DashboardStats {
  totalLeads: number
  newLeads: {
    daily: number
    weekly: number
    monthly: number
  }
  qualifiedLeads: number
  conversionRate: number
  leadsByStatus: Record<LeadStatus, number>
  leadsBySource: Record<string, number>
}

