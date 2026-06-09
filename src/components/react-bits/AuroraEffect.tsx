"use client"

import { useMemo } from "react"
import Aurora from "./Aurora"
import { getThemeColors } from "@/lib/theme-colors"

export function AuroraEffect() {
  const colors = useMemo(() => {
    const c = getThemeColors()
    return [c[0] || "#5227FF", c[2] || "#7cff67", c[4] || "#5227FF"] as [string, string, string]
  }, [])

  return <Aurora colorStops={colors} blend={0.5} amplitude={1.0} speed={1} />
}
