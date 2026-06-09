"use client"

import type { ElementType, ComponentPropsWithoutRef } from "react"

type StarBorderProps<T extends ElementType = "div"> = {
  as?: T
  className?: string
  color?: string
  speed?: string
  thickness?: number
  children?: React.ReactNode
} & ComponentPropsWithoutRef<T>

export function StarBorder<T extends ElementType = "div">({
  as: Component = "div" as T,
  className = "",
  color = "white",
  speed = "6s",
  thickness = 5,
  children,
  ...rest
}: StarBorderProps<T>) {
  return (
    <Component
      className={`star-border-container ${className}`}
      style={{
        padding: `${thickness}px 0`,
        ...(rest as Record<string, unknown>).style,
      }}
      {...rest}
    >
      <div
        className="star-border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 40%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="star-border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 40%)`,
          animationDuration: speed,
        }}
      />
      <div className="star-border-inner">{children}</div>
    </Component>
  )
}
