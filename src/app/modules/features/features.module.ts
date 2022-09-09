import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { MountsComponent } from './mounts/mounts.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReputationComponent } from './reputation/reputation.component';
import { SharedModule } from '../shared/shared.module';
import { MythicPlusComponent } from './mythic-plus/mythic-plus.component';




@NgModule({
  declarations: [
    OverviewComponent,
    MountsComponent,
    ReputationComponent,
    MythicPlusComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule
  ]
})
export class FeaturesModule { }
