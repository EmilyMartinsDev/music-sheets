import { cn } from "@/lib/utils"

interface CategoryBadgeProps {
  category: string
  className?: string
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  Clássica: { bg: "bg-purple-100", text: "text-purple-800" },
  Jazz: { bg: "bg-blue-100", text: "text-blue-800" },
  Rock: { bg: "bg-red-100", text: "text-red-800" },
  Pop: { bg: "bg-pink-100", text: "text-pink-800" },
  MPB: { bg: "bg-green-100", text: "text-green-800" },
  Samba: { bg: "bg-yellow-100", text: "text-yellow-800" },
  "Bossa Nova": { bg: "bg-indigo-100", text: "text-indigo-800" },
  Instrumental: { bg: "bg-gray-100", text: "text-gray-800" },
  Forró: { bg: "bg-orange-100", text: "text-orange-800" },
  Choro: { bg: "bg-teal-100", text: "text-teal-800" },
}

export default function CategoryBadge({ category, className }: CategoryBadgeProps) {
  const colors = categoryColors[category] || { bg: "bg-gray-100", text: "text-gray-800" }

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        colors.bg,
        colors.text,
        className,
      )}
    >
      {category}
    </span>
  )
}
