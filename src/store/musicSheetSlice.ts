// src/store/slices/musicsheetSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface MusicSheet {
    id: string
    name: string
    file: string
    createdAt: string
    updatedAt: string
    userId: string
    category?: {
      id: string
      name: string
    } | null
    instrument?: {
      id: string
      name: string
    } | null
  }
  export interface MusicSheetVersion {
    id: string;
    name: string;
    file: string;
    action: string;
    musicSheet?: {
        id: string;
    } | null;
    musicSheetId?: string | null;
    user?: {
        id: string;
        name: string;
    } | null;
    userId?: string | null;
    createdAt: string;
    version: number;
}

  interface MusicSheetsState {
    data: MusicSheet[]
    loading: boolean
    error: string | null
  }
  
  const initialState: MusicSheetsState = {
    data: [],
    loading: false,
    error: null,
  }

const musicSheetSlice = createSlice({
    name: 'musicSheets',
    initialState,
    reducers: {
        fetchMusicSheetsStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchMusicSheetsSuccess(state, action: PayloadAction<MusicSheet[]>) {
            state.loading = false;
            state.data = action.payload;
        },
        fetchMusicSheetsFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        storeMusicSheet(state, action: PayloadAction<MusicSheet>) {
            state.data.push(action.payload);
        }
    },
});

export const {
    fetchMusicSheetsStart,
    fetchMusicSheetsSuccess,
    fetchMusicSheetsFailure,
    storeMusicSheet,
} = musicSheetSlice.actions;

export default musicSheetSlice.reducer;
