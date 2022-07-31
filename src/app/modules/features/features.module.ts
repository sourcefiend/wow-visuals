import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { MountsComponent } from './mounts/mounts.component';


@NgModule({
  declarations: [
    OverviewComponent,
    MountsComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class FeaturesModule { }
