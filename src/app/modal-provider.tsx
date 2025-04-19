"use client"

import type React from "react"

import { useState, createContext, useContext } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/src/components/ui/dialog"
import MusicSheetForm from "@/src/components/music-sheet-form"

interface ModalContextType {
  openNewSheetModal: () => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType>({
  openNewSheetModal: () => {},
  closeModal: () => {},
})

export const useModal = () => useContext(ModalContext)

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState("")
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(null)

  const openNewSheetModal = () => {
    setModalTitle("Nova Partitura")
    setModalContent(<MusicSheetForm onClose={() => setIsOpen(false)} />)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <ModalContext.Provider value={{ openNewSheetModal, closeModal }}>
      {children}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>{modalTitle}</DialogTitle>
          </DialogHeader>
          {modalContent}
        </DialogContent>
      </Dialog>
    </ModalContext.Provider>
  )
}
