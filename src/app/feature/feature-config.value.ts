import { InjectionToken } from '@angular/core';

export interface FeatureConfig {
  enabled: boolean;
  items: number[];
}

export const FEATURE_CONFIG = new InjectionToken('feature-config');

export const featureConfig: FeatureConfig = {
  enabled: true,
  items: [
    1, 2, 3, 4, 5
  ],
};
