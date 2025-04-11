import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store'; // Adjust the path to your store
import {

fetchMusicSheetsStart,
fetchMusicSheetsSuccess,
fetchMusicSheetsFailure,
storeMusicSheet,
} from '../store/musicSheetSlice'; // Adjust the path to your slice
import { toast } from 'react-toastify';

export const useMusicSheetStore = () => {
const dispatch = useDispatch<AppDispatch>();
const state = useSelector((state: RootState) => state.musicSheet);

const fetchMusicSheets = async () => {
    dispatch(fetchMusicSheetsStart());
    try {
        const response = await fetch('/api/musicsheets');
        if (!response) {
            throw new Error('Failed to fetch music sheets');
        }
        const data = await response.json();
        dispatch(fetchMusicSheetsSuccess(data));
    } catch (error) {
        console.error('Error fetching music sheets:', error);
        dispatch(fetchMusicSheetsFailure('Failed to fetch music sheets'));
    }
};

const saveMusicSheet = async (sheet: any) => {
    try {
        const response = await fetch('/api/musicsheets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(sheet),
        });
        const data = await response.json();
        dispatch(storeMusicSheet(data)); // Dispatch the Redux action
        toast.success('Partitura musical armazenada com sucesso!');
    }
    catch (error) {
        toast.error('Erro ao armazenar a partitura musical');
    }
};

return {
    state,
    fetchMusicSheets,
    saveMusicSheet,
};
};
