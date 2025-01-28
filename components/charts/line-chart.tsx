"use client"

import { Line, LineChart as RechartsLineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

interface LineChartProps {
  data: { name: string; value: number }[]
  xAxisDataKey: string
  lineDataKey: string
  stroke?: string
}

export function LineChart({ data, xAxisDataKey, lineDataKey, stroke = "#3b82f6" }: LineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsLineChart data={data}>
        <XAxis dataKey={xAxisDataKey} />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey={lineDataKey} stroke={stroke} />
      </RechartsLineChart>
    </ResponsiveContainer>
  )
}

