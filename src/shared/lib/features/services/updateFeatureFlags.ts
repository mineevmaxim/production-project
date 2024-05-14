import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
	updateFeatureFlagsMutation,
	UpdateFeatureFlagsOptions,
} from '../api/featureFlagsApi';
import { getAllFeatureFlags } from '../lib/setGetFeatures';

export const updateFeatureFlags = createAsyncThunk<
	void,
	UpdateFeatureFlagsOptions,
	ThunkConfig<string>
>('features/updateFeatureFlags', async ({ features, userId }, thunkApi) => {
	const { dispatch, rejectWithValue } = thunkApi;

	try {
		await dispatch(
			updateFeatureFlagsMutation({
				userId,
				features: {
					...getAllFeatureFlags(),
					...features,
				},
			}),
		);
		window.location.reload();
	} catch (e) {
		console.log(e);
		rejectWithValue('error');
	}
});
