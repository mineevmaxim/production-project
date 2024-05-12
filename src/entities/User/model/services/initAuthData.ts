import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getUserDataByIdQuery } from '../../api/userApi';
import { User } from '../types/user';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
	'user/initAuthData',
	async (newJsonSettings, thunkApi) => {
		const { rejectWithValue, getState, dispatch } = thunkApi;

		const userId = JSON.parse(
			localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
		);

		if (!userId) {
			return rejectWithValue('no user data');
		}

		try {
			return await dispatch(getUserDataByIdQuery(userId)).unwrap();
		} catch (e) {
			return rejectWithValue('error');
		}
	},
);
