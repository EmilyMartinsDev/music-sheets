export interface Category {
  id: string
  name: string
  createdAt: string
}

export interface CategoryVersion {
  versionId: string
  categoryId: string
  versionNumber: number
  name: string
  timestamp: string
  updatedBy: string
}

interface PaginationParams {
  page: number
  limit: number
  search?: string
}

interface PaginatedResult {
  data: Category[]
  totalItems: number
  totalPages: number
}

// Mock data - simplified categories for orchestra music
const categories: Category[] = [
  {
    id: "1",
    name: "Clássica",
    createdAt: "2023-05-10T08:30:00Z",
  },
  {
    id: "2",
    name: "Romântica",
    createdAt: "2023-05-12T09:45:00Z",
  },
  {
    id: "3",
    name: "Barroca",
    createdAt: "2023-05-15T14:20:00Z",
  },
  {
    id: "4",
    name: "Contemporânea",
    createdAt: "2023-05-18T10:10:00Z",
  },
  {
    id: "5",
    name: "Sinfônica",
    createdAt: "2023-05-20T16:30:00Z",
  },
  {
    id: "6",
    name: "Câmara",
    createdAt: "2023-05-22T11:15:00Z",
  },
  {
    id: "7",
    name: "Ópera",
    createdAt: "2023-05-25T09:40:00Z",
  },
  {
    id: "8",
    name: "Concerto",
    createdAt: "2023-05-28T13:50:00Z",
  },
]

// Mock version history data - simplified
const categoryVersions: CategoryVersion[] = [
  {
    versionId: "v1-1",
    categoryId: "1",
    versionNumber: 1,
    name: "Música Clássica",
    timestamp: "2023-05-10T08:30:00Z",
    updatedBy: "João Silva",
  },
  {
    versionId: "v1-2",
    categoryId: "1",
    versionNumber: 2,
    name: "Clássica",
    timestamp: "2023-06-15T11:20:00Z",
    updatedBy: "Maria Oliveira",
  },
]

// Simulate server-side pagination and search
export function getCategoriesFromServer({ page, limit, search = "" }: PaginationParams): PaginatedResult {
  // Filter by search term (simulating server-side search)
  const filteredCategories = categories.filter(
    (category) => !search || category.name.toLowerCase().includes(search.toLowerCase()),
  )

  // Calculate pagination
  const totalItems = filteredCategories.length
  const totalPages = Math.ceil(totalItems / limit)
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedData = filteredCategories.slice(startIndex, endIndex)

  return {
    data: paginatedData,
    totalItems,
    totalPages,
  }
}

// Get versions of a category
export function getCategoryVersions(categoryId: string): CategoryVersion[] {
  return categoryVersions
    .filter((version) => version.categoryId === categoryId)
    .sort((a, b) => b.versionNumber - a.versionNumber) // Sort by version number descending
}

// Add a new category
export function addCategory(category: Category): void {
  categories.unshift(category)

  // Create initial version
  const newVersion: CategoryVersion = {
    versionId: `v${category.id}-1`,
    categoryId: category.id,
    versionNumber: 1,
    name: category.name,
    timestamp: category.createdAt,
    updatedBy: "Sistema",
  }

  categoryVersions.push(newVersion)
}

// Delete a category
export function deleteCategory(id: string): void {
  const index = categories.findIndex((category) => category.id === id)
  if (index !== -1) {
    categories.splice(index, 1)
  }
}

// Update a category
export function updateCategory(updatedCategory: Category): void {
  const index = categories.findIndex((category) => category.id === updatedCategory.id)
  if (index !== -1) {
    // Add audit information
    categories[index] = {
      ...updatedCategory,
    }

    // Create new version
    const versions = getCategoryVersions(updatedCategory.id)
    const newVersionNumber = versions.length > 0 ? Math.max(...versions.map((v) => v.versionNumber)) + 1 : 1

    const newVersion: CategoryVersion = {
      versionId: `v${updatedCategory.id}-${newVersionNumber}`,
      categoryId: updatedCategory.id,
      versionNumber: newVersionNumber,
      name: updatedCategory.name,
      timestamp: new Date().toISOString(),
      updatedBy: "Usuário Atual",
    }

    categoryVersions.push(newVersion)
  }
}

// Get a category by ID
export function getCategoryById(id: string): Category | undefined {
  return categories.find((category) => category.id === id)
}

export function getCategories(): Category[] {
  return categories
}
