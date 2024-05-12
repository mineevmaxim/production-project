import { memo, ReactElement } from 'react';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { getFeatureFlag } from '../setGetFeatures';

interface ToggleFeatureProps {
	feature: keyof FeatureFlags;
	on: ReactElement;
	off: ReactElement;
}

export const ToggleFeature = memo((props: ToggleFeatureProps) => {
	// eslint-disable-next-line react/prop-types
	const { on, off, feature } = props;

	if (getFeatureFlag(feature)) {
		return on;
	}

	return off;
});
