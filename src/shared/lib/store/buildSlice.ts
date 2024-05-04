import { bindActionCreators, createSlice } from '@reduxjs/toolkit';
import { CreateSliceOptions, SliceCaseReducers } from '@reduxjs/toolkit/dist';
import { useMemo } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

export function buildSlice<
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string = string
>(options: CreateSliceOptions<State, CaseReducers, Name>) {
    const slice = createSlice(options);

    const useActions = () => {
        const dispatch = useAppDispatch();

        // @ts-ignore
        return useMemo(() => bindActionCreators(slice.actions, dispatch), [dispatch]);
    };

    return {
        ...slice,
        useActions,
    };
}
