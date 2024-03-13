import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UISchema } from '../types/UISchema';

const initialState: UISchema = {
    scroll: {

    },
};

export const UISlice = createSlice({
    name: 'UI',
    initialState,
    reducers: {
        setScrollPosition: (state, action: PayloadAction<{ path: string, position: number }>) => {
            state.scroll[action.payload.path] = action.payload.position;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: UIActions } = UISlice;
export const { reducer: UIReducer } = UISlice;
