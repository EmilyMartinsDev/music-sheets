export interface Instrument {
  id: string
  name: string
  section: string
  createdAt: string
}

export interface InstrumentVersion {
  versionId: string
  instrumentId: string
  versionNumber: number
  name: string
  section: string
  timestamp: string
  updatedBy: string
}

interface PaginationParams {
  page: number
  limit: number
  search?: string
}

interface PaginatedResult {
  data: Instrument[]
  totalItems: number
  totalPages: number
}

// Mock data - symphony orchestra instruments
const instruments: Instrument[] = [
  // Cordas
  {
    id: "1",
    name: "Violino",
    section: "Cordas",
    createdAt: "2023-05-10T08:30:00Z",
  },
  {
    id: "2",
    name: "Viola",
    section: "Cordas",
    createdAt: "2023-05-12T09:45:00Z",
  },
  {
    id: "3",
    name: "Violoncelo",
    section: "Cordas",
    createdAt: "2023-05-15T14:20:00Z",
  },
  {
    id: "4",
    name: "Contrabaixo",
    section: "Cordas",
    createdAt: "2023-05-18T10:10:00Z",
  },
  {
    id: "5",
    name: "Harpa",
    section: "Cordas",
    createdAt: "2023-05-20T16:30:00Z",
  },
  // Madeiras
  {
    id: "6",
    name: "Flauta",
    section: "Madeiras",
    createdAt: "2023-05-22T11:15:00Z",
  },
  {
    id: "7",
    name: "Oboé",
    section: "Madeiras",
    createdAt: "2023-05-25T09:40:00Z",
  },
  {
    id: "8",
    name: "Clarinete",
    section: "Madeiras",
    createdAt: "2023-05-28T13:50:00Z",
  },
  {
    id: "9",
    name: "Fagote",
    section: "Madeiras",
    createdAt: "2023-06-01T10:25:00Z",
  },
  // Metais
  {
    id: "10",
    name: "Trompa",
    section: "Metais",
    createdAt: "2023-06-05T15:30:00Z",
  },
  {
    id: "11",
    name: "Trompete",
    section: "Metais",
    createdAt: "2023-06-08T11:20:00Z",
  },
  {
    id: "12",
    name: "Trombone",
    section: "Metais",
    createdAt: "2023-06-10T14:15:00Z",
  },
  {
    id: "13",
    name: "Tuba",
    section: "Metais",
    createdAt: "2023-06-12T09:30:00Z",
  },
  // Percussão
  {
    id: "14",
    name: "Tímpano",
    section: "Percussão",
    createdAt: "2023-06-15T13:45:00Z",
  },
  {
    id: "15",
    name: "Caixa",
    section: "Percussão",
    createdAt: "2023-06-18T10:20:00Z",
  },
  {
    id: "16",
    name: "Bombo",
    section: "Percussão",
    createdAt: "2023-06-20T15:10:00Z",
  },
  {
    id: "17",
    name: "Pratos",
    section: "Percussão",
    createdAt: "2023-06-22T11:30:00Z",
  },
  // Outros
  {
    id: "18",
    name: "Piano",
    section: "Outros",
    createdAt: "2023-06-25T14:40:00Z",
  },
]

// Mock version history data
const instrumentVersions: InstrumentVersion[] = [
  {
    versionId: "v1-1",
    instrumentId: "1",
    versionNumber: 1,
    name: "Violino Primeiro",
    section: "Cordas",
    timestamp: "2023-05-10T08:30:00Z",
    updatedBy: "João Silva",
  },
  {
    versionId: "v1-2",
    instrumentId: "1",
    versionNumber: 2,
    name: "Violino",
    section: "Cordas",
    timestamp: "2023-06-15T11:20:00Z",
    updatedBy: "Maria Oliveira",
  },
]

// Simulate server-side pagination and search
export function getInstrumentsFromServer({ page, limit, search = "" }: PaginationParams): PaginatedResult {
  // Filter by search term (simulating server-side search)
  const filteredInstruments = instruments.filter(
    (instrument) =>
      !search ||
      instrument.name.toLowerCase().includes(search.toLowerCase()) ||
      instrument.section.toLowerCase().includes(search.toLowerCase()),
  )

  // Calculate pagination
  const totalItems = filteredInstruments.length
  const totalPages = Math.ceil(totalItems / limit)
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedData = filteredInstruments.slice(startIndex, endIndex)

  return {
    data: paginatedData,
    totalItems,
    totalPages,
  }
}

// Get versions of an instrument
export function getInstrumentVersions(instrumentId: string): InstrumentVersion[] {
  return instrumentVersions
    .filter((version) => version.instrumentId === instrumentId)
    .sort((a, b) => b.versionNumber - a.versionNumber) // Sort by version number descending
}

// Add a new instrument
export function addInstrument(instrument: Instrument): void {
  instruments.unshift(instrument)

  // Create initial version
  const newVersion: InstrumentVersion = {
    versionId: `v${instrument.id}-1`,
    instrumentId: instrument.id,
    versionNumber: 1,
    name: instrument.name,
    section: instrument.section,
    timestamp: instrument.createdAt,
    updatedBy: "Sistema",
  }

  instrumentVersions.push(newVersion)
}

// Delete an instrument
export function deleteInstrument(id: string): void {
  const index = instruments.findIndex((instrument) => instrument.id === id)
  if (index !== -1) {
    instruments.splice(index, 1)
  }
}

// Update an instrument
export function updateInstrument(updatedInstrument: Instrument): void {
  const index = instruments.findIndex((instrument) => instrument.id === updatedInstrument.id)
  if (index !== -1) {
    instruments[index] = {
      ...updatedInstrument,
    }

    // Create new version
    const versions = getInstrumentVersions(updatedInstrument.id)
    const newVersionNumber = versions.length > 0 ? Math.max(...versions.map((v) => v.versionNumber)) + 1 : 1

    const newVersion: InstrumentVersion = {
      versionId: `v${updatedInstrument.id}-${newVersionNumber}`,
      instrumentId: updatedInstrument.id,
      versionNumber: newVersionNumber,
      name: updatedInstrument.name,
      section: updatedInstrument.section,
      timestamp: new Date().toISOString(),
      updatedBy: "Usuário Atual",
    }

    instrumentVersions.push(newVersion)
  }
}

// Get an instrument by ID
export function getInstrumentById(id: string): Instrument | undefined {
  return instruments.find((instrument) => instrument.id === id)
}

export function getInstruments(): Instrument[] {
  return instruments
}
