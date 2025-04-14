export interface MusicSheet {
  id: string
  title: string
  description: string
  instrument: string
  category: string
  createdAt: string
  createdBy?: string
  updatedAt?: string
  updatedBy?: string
  file?: string // URL or path to the file
  fileName?: string // Original file name
}

export interface MusicSheetVersion {
  versionId: string
  sheetId: string
  versionNumber: number
  title: string
  description: string
  instrument: string
  category: string
  timestamp: string
  updatedBy: string
  file?: string // URL or path to the file
  fileName?: string // Original file name
}

interface PaginationParams {
  page: number
  limit: number
  search?: string
}

interface PaginatedResult {
  data: MusicSheet[]
  totalItems: number
  totalPages: number
}

// Mock data
const musicSheets: MusicSheet[] = [
  {
    id: "1",
    title: "Sonata ao Luar",
    description: "Sonata para piano No. 14 em Dó sustenido menor, Op. 27, No. 2, de Ludwig van Beethoven.",
    instrument: "Piano",
    category: "Clássica",
    createdAt: "2023-05-15T10:30:00Z",
    createdBy: "João Silva",
    updatedAt: "2023-06-10T14:20:00Z",
    updatedBy: "Maria Oliveira",
    file: "/files/sonata-ao-luar.pdf",
    fileName: "sonata-ao-luar.pdf",
  },
  {
    id: "2",
    title: "Garota de Ipanema",
    description: "Clássico da Bossa Nova composto por Tom Jobim e Vinícius de Moraes.",
    instrument: "Violão",
    category: "Bossa Nova",
    createdAt: "2023-06-20T14:45:00Z",
    createdBy: "Carlos Santos",
    file: "/files/garota-de-ipanema.pdf",
    fileName: "garota-de-ipanema.pdf",
  },
  {
    id: "3",
    title: "Stairway to Heaven",
    description: "Uma das músicas mais icônicas do rock, da banda Led Zeppelin.",
    instrument: "Violão",
    category: "Rock",
    createdAt: "2023-07-10T09:15:00Z",
    createdBy: "Ana Pereira",
    updatedAt: "2023-08-05T11:30:00Z",
    updatedBy: "Pedro Costa",
    file: "/files/stairway-to-heaven.pdf",
    fileName: "stairway-to-heaven.pdf",
  },
  {
    id: "4",
    title: "Aquarela do Brasil",
    description: "Samba exaltação composto por Ary Barroso em 1939.",
    instrument: "Piano",
    category: "Samba",
    createdAt: "2023-08-05T16:20:00Z",
    createdBy: "Fernanda Lima",
    file: "/files/aquarela-do-brasil.pdf",
    fileName: "aquarela-do-brasil.pdf",
  },
  {
    id: "5",
    title: "Für Elise",
    description: "Bagatela para piano solo em Lá menor, composta por Ludwig van Beethoven.",
    instrument: "Piano",
    category: "Clássica",
    createdAt: "2023-09-12T11:10:00Z",
    createdBy: "Roberto Alves",
    updatedAt: "2023-10-15T09:45:00Z",
    updatedBy: "Juliana Mendes",
    file: "/files/fur-elise.pdf",
    fileName: "fur-elise.pdf",
  },
  {
    id: "6",
    title: "Asa Branca",
    description: "Canção brasileira composta por Luiz Gonzaga e Humberto Teixeira.",
    instrument: "Acordeão",
    category: "Forró",
    createdAt: "2023-10-18T13:25:00Z",
    createdBy: "Marcos Souza",
    file: "/files/asa-branca.pdf",
    fileName: "asa-branca.pdf",
  },
  {
    id: "7",
    title: "Carinhoso",
    description: "Composição de Pixinguinha, considerada uma das mais importantes da música popular brasileira.",
    instrument: "Flauta",
    category: "Choro",
    createdAt: "2023-11-22T09:40:00Z",
    createdBy: "Luciana Ferreira",
    updatedAt: "2023-12-10T15:20:00Z",
    updatedBy: "Ricardo Gomes",
    file: "/files/carinhoso.pdf",
    fileName: "carinhoso.pdf",
  },
  {
    id: "8",
    title: "Chega de Saudade",
    description: "Composição de Tom Jobim e Vinícius de Moraes, considerada o marco inicial da Bossa Nova.",
    instrument: "Violão",
    category: "Bossa Nova",
    createdAt: "2023-12-05T14:15:00Z",
    createdBy: "Camila Rocha",
    file: "/files/chega-de-saudade.pdf",
    fileName: "chega-de-saudade.pdf",
  },
  {
    id: "9",
    title: "Bachianas Brasileiras No. 5",
    description: "Composição de Heitor Villa-Lobos para soprano e orquestra de violoncelos.",
    instrument: "Violoncelo",
    category: "Clássica",
    createdAt: "2024-01-10T10:30:00Z",
    createdBy: "Daniel Martins",
    file: "/files/bachianas-brasileiras-5.pdf",
    fileName: "bachianas-brasileiras-5.pdf",
  },
  {
    id: "10",
    title: "Imagine",
    description: "Canção composta por John Lennon, uma das mais conhecidas de sua carreira solo.",
    instrument: "Piano",
    category: "Pop",
    createdAt: "2024-02-15T16:45:00Z",
    createdBy: "Patrícia Almeida",
    updatedAt: "2024-03-01T10:15:00Z",
    updatedBy: "Gabriel Santos",
    file: "/files/imagine.pdf",
    fileName: "imagine.pdf",
  },
  {
    id: "11",
    title: "O Trenzinho do Caipira",
    description: "Parte da suíte Bachianas Brasileiras No. 2 de Heitor Villa-Lobos.",
    instrument: "Orquestra",
    category: "Clássica",
    createdAt: "2024-03-20T09:20:00Z",
    createdBy: "Renata Oliveira",
    file: "/files/trenzinho-do-caipira.pdf",
    fileName: "trenzinho-do-caipira.pdf",
  },
  {
    id: "12",
    title: "Águas de Março",
    description: "Composição de Tom Jobim, considerada uma das melhores canções brasileiras de todos os tempos.",
    instrument: "Violão",
    category: "MPB",
    createdAt: "2024-04-25T13:50:00Z",
    createdBy: "Bruno Costa",
    updatedAt: "2024-05-10T14:30:00Z",
    updatedBy: "Carla Dias",
    file: "/files/aguas-de-marco.pdf",
    fileName: "aguas-de-marco.pdf",
  },
]

// Mock version history data
const musicSheetVersions: MusicSheetVersion[] = [
  {
    versionId: "v1-1",
    sheetId: "1",
    versionNumber: 1,
    title: "Sonata ao Luar (Versão Original)",
    description: "Sonata para piano No. 14 em Dó sustenido menor, Op. 27, No. 2.",
    instrument: "Piano",
    category: "Clássica",
    timestamp: "2023-05-15T10:30:00Z",
    updatedBy: "João Silva",
    file: "/files/sonata-ao-luar-v1.pdf",
    fileName: "sonata-ao-luar-v1.pdf",
  },
  {
    versionId: "v1-2",
    sheetId: "1",
    versionNumber: 2,
    title: "Sonata ao Luar",
    description: "Sonata para piano No. 14 em Dó sustenido menor, Op. 27, No. 2, de Ludwig van Beethoven.",
    instrument: "Piano",
    category: "Clássica",
    timestamp: "2023-06-10T14:20:00Z",
    updatedBy: "Maria Oliveira",
    file: "/files/sonata-ao-luar.pdf",
    fileName: "sonata-ao-luar.pdf",
  },
  {
    versionId: "v3-1",
    sheetId: "3",
    versionNumber: 1,
    title: "Stairway to Heaven (Rascunho)",
    description: "Música da banda Led Zeppelin.",
    instrument: "Violão",
    category: "Rock",
    timestamp: "2023-07-10T09:15:00Z",
    updatedBy: "Ana Pereira",
    file: "/files/stairway-to-heaven-v1.pdf",
    fileName: "stairway-to-heaven-v1.pdf",
  },
  {
    versionId: "v3-2",
    sheetId: "3",
    versionNumber: 2,
    title: "Stairway to Heaven",
    description: "Uma das músicas mais icônicas do rock, da banda Led Zeppelin.",
    instrument: "Violão",
    category: "Rock",
    timestamp: "2023-08-05T11:30:00Z",
    updatedBy: "Pedro Costa",
    file: "/files/stairway-to-heaven.pdf",
    fileName: "stairway-to-heaven.pdf",
  },
  {
    versionId: "v5-1",
    sheetId: "5",
    versionNumber: 1,
    title: "Für Elise (Versão Inicial)",
    description: "Bagatela para piano solo em Lá menor.",
    instrument: "Piano",
    category: "Clássica",
    timestamp: "2023-09-12T11:10:00Z",
    updatedBy: "Roberto Alves",
    file: "/files/fur-elise-v1.pdf",
    fileName: "fur-elise-v1.pdf",
  },
  {
    versionId: "v5-2",
    sheetId: "5",
    versionNumber: 2,
    title: "Für Elise",
    description: "Bagatela para piano solo em Lá menor, composta por Ludwig van Beethoven.",
    instrument: "Piano",
    category: "Clássica",
    timestamp: "2023-10-15T09:45:00Z",
    updatedBy: "Juliana Mendes",
    file: "/files/fur-elise.pdf",
    fileName: "fur-elise.pdf",
  },
  {
    versionId: "v7-1",
    sheetId: "7",
    versionNumber: 1,
    title: "Carinhoso (Rascunho)",
    description: "Composição de Pixinguinha.",
    instrument: "Flauta",
    category: "Choro",
    timestamp: "2023-11-22T09:40:00Z",
    updatedBy: "Luciana Ferreira",
    file: "/files/carinhoso-v1.pdf",
    fileName: "carinhoso-v1.pdf",
  },
  {
    versionId: "v7-2",
    sheetId: "7",
    versionNumber: 2,
    title: "Carinhoso",
    description: "Composição de Pixinguinha, considerada uma das mais importantes da música popular brasileira.",
    instrument: "Flauta",
    category: "Choro",
    timestamp: "2023-12-10T15:20:00Z",
    updatedBy: "Ricardo Gomes",
    file: "/files/carinhoso.pdf",
    fileName: "carinhoso.pdf",
  },
]

// Simulate server-side pagination and search
export function getMusicSheetsFromServer({ page, limit, search = "" }: PaginationParams): PaginatedResult {
  // Filter by search term (simulating server-side search)
  const filteredSheets = musicSheets.filter(
    (sheet) =>
      !search ||
      sheet.title.toLowerCase().includes(search.toLowerCase()) ||
      sheet.description.toLowerCase().includes(search.toLowerCase()) ||
      sheet.instrument.toLowerCase().includes(search.toLowerCase()) ||
      sheet.category.toLowerCase().includes(search.toLowerCase()) ||
      (sheet.fileName && sheet.fileName.toLowerCase().includes(search.toLowerCase())),
  )

  // Calculate pagination
  const totalItems = filteredSheets.length
  const totalPages = Math.ceil(totalItems / limit)
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedData = filteredSheets.slice(startIndex, endIndex)

  return {
    data: paginatedData,
    totalItems,
    totalPages,
  }
}

// Get versions of a music sheet
export function getMusicSheetVersions(sheetId: string): MusicSheetVersion[] {
  return musicSheetVersions
    .filter((version) => version.sheetId === sheetId)
    .sort((a, b) => b.versionNumber - a.versionNumber) // Sort by version number descending
}

// Add a new music sheet
export function addMusicSheet(sheet: MusicSheet): void {
  musicSheets.unshift(sheet)

  // Create initial version
  const newVersion: MusicSheetVersion = {
    versionId: `v${sheet.id}-1`,
    sheetId: sheet.id,
    versionNumber: 1,
    title: sheet.title,
    description: sheet.description,
    instrument: sheet.instrument,
    category: sheet.category,
    timestamp: sheet.createdAt,
    updatedBy: sheet.createdBy || "Sistema",
    file: sheet.file,
    fileName: sheet.fileName,
  }

  musicSheetVersions.push(newVersion)
}

// Delete a music sheet
export function deleteMusicSheet(id: string): void {
  const index = musicSheets.findIndex((sheet) => sheet.id === id)
  if (index !== -1) {
    musicSheets.splice(index, 1)
  }
}

// Update a music sheet
export function updateMusicSheet(updatedSheet: MusicSheet): void {
  const index = musicSheets.findIndex((sheet) => sheet.id === updatedSheet.id)
  if (index !== -1) {
    // Add audit information
    const now = new Date().toISOString()
    const updatedBy = "Usuário Atual" // In a real app, this would come from authentication

    musicSheets[index] = {
      ...updatedSheet,
      updatedAt: now,
      updatedBy,
    }

    // Create new version
    const versions = getMusicSheetVersions(updatedSheet.id)
    const newVersionNumber = versions.length > 0 ? Math.max(...versions.map((v) => v.versionNumber)) + 1 : 1

    const newVersion: MusicSheetVersion = {
      versionId: `v${updatedSheet.id}-${newVersionNumber}`,
      sheetId: updatedSheet.id,
      versionNumber: newVersionNumber,
      title: updatedSheet.title,
      description: updatedSheet.description,
      instrument: updatedSheet.instrument,
      category: updatedSheet.category,
      timestamp: now,
      updatedBy,
      file: updatedSheet.file,
      fileName: updatedSheet.fileName,
    }

    musicSheetVersions.push(newVersion)
  }
}

// Get a music sheet by ID
export function getMusicSheetById(id: string): MusicSheet | undefined {
  return musicSheets.find((sheet) => sheet.id === id)
}

export function getMusicSheets(): MusicSheet[] {
  return musicSheets
}
