"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/src/components/ui/button"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2].filter(
    (page) => page > 0 && page <= totalPages,
  )

  // Always show first page if not in range
  if (!pages.includes(1)) {
    pages.unshift(1)
    if (pages[1] !== 2) {
      pages.splice(1, 0, -1) // Add ellipsis
    }
  }

  // Always show last page if not in range
  if (!pages.includes(totalPages) && totalPages > 1) {
    if (pages[pages.length - 1] !== totalPages - 1) {
      pages.push(-1) // Add ellipsis
    }
    pages.push(totalPages)
  }

  return (
    <div className="flex justify-center items-center py-4 px-4 border-t">
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 border-none"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <div className="flex items-center mx-2">
        {pages.map((page, i) =>
          page === -1 ? (
            <span key={`ellipsis-${i}`} className="mx-1">
              ...
            </span>
          ) : (
            <Button
              key={page}
              variant={page === currentPage ? "default" : "outline"}
              size="icon"
              className={`h-8 w-8 mx-1 ${
                page === currentPage ? "bg-blue-600 hover:bg-blue-700 text-white" : "border-none hover:bg-gray-100"
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </Button>
          ),
        )}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 border-none"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
