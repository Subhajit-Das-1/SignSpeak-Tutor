"use client"

import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

export function Overview({ data }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="total" fill="currentColor" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function RecentSales({ data }) {
  return (
    <div className="space-y-8">
      {data.map((item) => (
        <div key={item.name} className="flex items-center">
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{item.name}</p>
            <p className="text-sm text-muted-foreground">
              {item.email}
            </p>
          </div>
          <div className="ml-auto font-medium">+${item.amount}</div>
        </div>
      ))}
    </div>
  )
}
