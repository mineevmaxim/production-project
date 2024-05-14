import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
	updateFeatureFlagsMutation,
	UpdateFeatureFlagsOptions,
} from '../api/featureFlagsApi';
import { getAllFeatureFlags, setFeatureFlags } from '../lib/setGetFeatures';

export const updateFeatureFlags = createAsyncThunk<
	void,
	UpdateFeatureFlagsOptions,
	ThunkConfig<string>
>('features/updateFeatureFlags', async ({ features, userId }, thunkApi) => {
	const { dispatch, rejectWithValue } = thunkApi;

	const allFeatures = {
		...getAllFeatureFlags(),
		...features,
	};

	try {
		await dispatch(
			updateFeatureFlagsMutation({
				userId,
				features: allFeatures,
			}),
		);

		setFeatureFlags(allFeatures);
	} catch (e) {
		console.log(e);
		rejectWithValue('error');
	}
});
