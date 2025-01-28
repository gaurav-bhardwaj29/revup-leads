"use client"

import { Bar, BarChart as RechartsBarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

interface BarChartProps {
  data: { name: string; value: number }[]
  xAxisDataKey: string
  barDataKey: string
  fill?: string
}

export function BarChart({ data, xAxisDataKey, barDataKey, fill = "#3b82f6" }: BarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsBarChart data={data}>
        <XAxis dataKey={xAxisDataKey} />
        <YAxis />
        <Tooltip />
        <Bar dataKey={barDataKey} fill={fill} />
      </RechartsBarChart>
    </ResponsiveContainer>
  )
}

