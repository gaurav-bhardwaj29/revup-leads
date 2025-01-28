"use client"

import { MoreHorizontal } from "lucide-react"
import type { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { Lead, LeadPriority, LeadStatus } from "@/lib/types"

const statusColors: Record<LeadStatus, string> = {
  New: "default",
  Contacted: "secondary",
  Qualified: "warning",
  Proposal: "primary",
  Won: "success",
  Lost: "destructive",
}

const priorityColors: Record<LeadPriority, string> = {
  Low: "secondary",
  Medium: "warning",
  High: "destructive",
}

export const columns: ColumnDef<Lead>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <Link href={`/leads/${row.original.id}`} className="font-medium hover:underline">
          {row.getValue("name")}
        </Link>
      )
    },
  },
  {
    accessorKey: "company",
    header: "Company",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as LeadStatus
      return <Badge variant={statusColors[status]}>{status}</Badge>
    },
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => {
      const priority = row.getValue("priority") as LeadPriority
      return <Badge variant={statusColors[priority]}>{priority}</Badge>
    },
  },
  {
    accessorKey: "assignedTo",
    header: "Assigned To",
  },
  {
    accessorKey: "lastContact",
    header: "Last Contact",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(row.original.id.toString())}>
              Copy lead ID
            </DropdownMenuItem>
            <DropdownMenuItem>Edit lead</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">Delete lead</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

