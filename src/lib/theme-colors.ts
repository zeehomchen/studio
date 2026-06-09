/** 从 CSS 变量读取当前主题的 6 色（跳过 pride-4 白色）。 */
export function getThemeColors(): string[] {
  if (typeof window === "undefined") {
    return ["#D52D00", "#EF7627", "#FF9A56", "#D162A4", "#B55690", "#A30262"]
  }
  const s = getComputedStyle(document.documentElement)
  return [1, 2, 3, 5, 6, 7].map(
    (i) => s.getPropertyValue(`--color-pride-${i}`).trim() || "#888",
  )
}
