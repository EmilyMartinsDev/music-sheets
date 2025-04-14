import type React from "react"
import { cn } from "@/lib/utils"

interface CustomBadgeProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "instrument" | "category"
}

export function CustomBadge({ children, className, variant = "default" }: CustomBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variant === "default" && "bg-gray-100 text-gray-800",
        variant === "instrument" && "bg-blue-50 text-blue-700",
        variant === "category" && "bg-purple-50 text-purple-700",
        className,
      )}
    >
      {children}
    </span>
  )
}
