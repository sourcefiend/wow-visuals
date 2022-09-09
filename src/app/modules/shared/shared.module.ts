import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ReputationProgressPipe } from './pipes/reputation-progress.pipe';
import { DataViewModule } from 'primeng/dataview';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';


@NgModule({
  declarations: [
    ReputationProgressPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    DataViewModule,
    ProgressBarModule,
    InputTextModule,
    CardModule,
    DividerModule
  ],
  exports: [
    ReputationProgressPipe,
    DataViewModule,
    ProgressBarModule,
    InputTextModule,
    CardModule,
    DividerModule
  ]
})
export class SharedModule { }
