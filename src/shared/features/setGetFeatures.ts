import { FeatureFlags } from '@/shared/types/featureFlags';

let featuresFlags: FeatureFlags = {};

export function setFeaturesFlags(newFeatureFlags?: FeatureFlags) {
	if (newFeatureFlags) {
		featuresFlags = newFeatureFlags;
	}
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
	return featuresFlags[flag];
}
