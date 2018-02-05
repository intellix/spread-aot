import { NgModule, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureConfig, featureConfig, FEATURE_CONFIG } from './feature-config.value';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class FeatureModule {
  static forRoot(config: FeatureConfig = featureConfig) {
    return {
      ngModule: FeatureModule,
      providers: [
        {
          provide: FEATURE_CONFIG,
          useValue: config,
        },
      ],
    };
  }

  constructor(@Inject(FEATURE_CONFIG) config: FeatureConfig) {
    console.log(config);
  }
}
