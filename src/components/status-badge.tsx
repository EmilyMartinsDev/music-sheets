import { cn } from "@/lib/utils"

interface StatusBadgeProps {
  status: "active" | "archived" | "draft" | "published"
  className?: string
}

export default function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        status === "active" && "bg-green-100 text-green-800",
        status === "archived" && "bg-gray-100 text-gray-800",
        status === "draft" && "bg-yellow-100 text-yellow-800",
        status === "published" && "bg-blue-100 text-blue-800",
        className,
      )}
    >
      {status === "active" && "Ativo"}
      {status === "archived" && "Arquivado"}
      {status === "draft" && "Rascunho"}
      {status === "published" && "Publicado"}
    </span>
  )
}
