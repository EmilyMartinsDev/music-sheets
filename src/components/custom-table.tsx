"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import TablePagination from "@/src/components/table-pagination"

interface Column<T> {
  id: string
  header: string
  accessor: (item: T) => React.ReactNode
  sortable?: boolean
  cellClassName?: string
}

interface PaginationOptions {
  currentPage: number
  totalPages: number
  totalItems: number
  onPageChange: (page: number) => void
}

interface CustomTableProps<T> {
  data: T[]
  columns: Column<T>[]
  keyField: keyof T
  onRowClick?: (item: T) => void
  sortable?: boolean
  striped?: boolean
  hoverable?: boolean
  pagination?: PaginationOptions
  rowActions?: (item: T) => React.ReactNode
}

export default function CustomTable<T>({
  data,
  columns,
  keyField,
  onRowClick,
  sortable = false,
  striped = false,
  hoverable = false,
  pagination,
  rowActions,
}: CustomTableProps<T>) {
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: "asc" | "desc" } | null>(null)

  // Handle sorting - in a real app, this would send the sort params to the backend
  const handleSort = (columnId: string) => {
    if (!sortable) return

    let direction: "asc" | "desc" = "asc"

    if (sortConfig && sortConfig.key === columnId) {
      direction = sortConfig.direction === "asc" ? "desc" : "asc"
    }

    setSortConfig({ key: columnId, direction })

    // In a real app, you would call an API here with the sort parameters
    console.log(`Sorting by ${columnId} in ${direction} order`)
  }

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              {columns.map((column) => (
                <th
                  key={column.id}
                  className={cn(
                    "px-4 py-3 text-left font-medium text-sm",
                    sortable && column.sortable && "cursor-pointer select-none",
                  )}
                  onClick={() => column.sortable && handleSort(column.id)}
                >
                  <div className="flex items-center gap-1">
                    {column.header}
                    {sortable && column.sortable && (
                      <div className="flex flex-col">
                        <ChevronUp
                          className={cn(
                            "h-3 w-3 -mb-1",
                            sortConfig?.key === column.id && sortConfig?.direction === "asc"
                              ? "text-blue-600"
                              : "text-gray-400",
                          )}
                        />
                        <ChevronDown
                          className={cn(
                            "h-3 w-3",
                            sortConfig?.key === column.id && sortConfig?.direction === "desc"
                              ? "text-blue-600"
                              : "text-gray-400",
                          )}
                        />
                      </div>
                    )}
                  </div>
                </th>
              ))}

              {rowActions && <th className="px-4 py-3 w-16 text-right">Ações</th>}
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length + (rowActions ? 1 : 0)} className="px-4 py-8 text-center text-gray-500">
                  Nenhum registro encontrado
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr
                  key={String(item[keyField])}
                  className={cn(
                    striped && index % 2 === 1 ? "bg-gray-50" : "bg-white",
                    hoverable && "hover:bg-gray-100",
                    onRowClick && "cursor-pointer",
                  )}
                  onClick={() => onRowClick && onRowClick(item)}
                >
                  {columns.map((column) => (
                    <td
                      key={`${String(item[keyField])}-${column.id}`}
                      className={cn("px-4 py-3", column.cellClassName)}
                    >
                      {column.accessor(item)}
                    </td>
                  ))}

                  {rowActions && <td className="px-4 py-3 w-16 text-right">{rowActions(item)}</td>}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {pagination && (
        <TablePagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          onPageChange={pagination.onPageChange}
          totalItems={pagination.totalItems}
        />
      )}
    </div>
  )
}
