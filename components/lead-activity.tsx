import { Activity, Mail, Phone, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const activityIcons: { [key: string]: React.ReactNode } = {
  Email: <Mail className="h-4 w-4" />,
  Call: <Phone className="h-4 w-4" />,
  Meeting: <Calendar className="h-4 w-4" />,
  Other: <Activity className="h-4 w-4" />,
}

interface LeadActivity {
  id: number
  type: string
  description: string
  date: string
  performedBy: string
}

interface LeadActivityProps {
  activities: LeadActivity[]
}

export function LeadActivity({ activities }: LeadActivityProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-4">
              <div className="rounded-full bg-muted p-2">{activityIcons[activity.type] || activityIcons["Other"]}</div>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{activity.description}</p>
                <p className="text-sm text-muted-foreground">
                  {activity.performedBy} - {activity.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

