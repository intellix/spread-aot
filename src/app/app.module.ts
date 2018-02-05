import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeatureModule } from './feature/feature.module';
import { appFeatureConfig } from './app-feature-config.value';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FeatureModule.forRoot(appFeatureConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
