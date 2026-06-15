"use client"

import { useState, useEffect } from "react"
import type { DateRange } from "react-day-picker"

import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"

const now = new Date()
const year = now.getFullYear()
const month = now.getMonth()
const endOfMonth = new Date(year, month + 1, 0).getDate()

const from = new Date(year, month, Math.min(6, endOfMonth))
const to = new Date(year, month, Math.min(18, endOfMonth))

export function Pattern() {
  const [date, setDate] = useState<DateRange | undefined>({
    from,
    to,
  })

  useEffect(() => {
    (window as any).customDateReactState = date;
  }, [date])

  return (
    <Card className="p-0 border-0 shadow-none bg-transparent overflow-visible">
      <CardContent className="p-0">
        <div className="font-sans">
          <Calendar
            mode="range"
            numberOfMonths={2}
            selected={date}
            onSelect={setDate}
            className="rounded-xl border border-neutral-200 bg-white shadow-xs p-2"
          />
        </div>
      </CardContent>
    </Card>
  )
}
