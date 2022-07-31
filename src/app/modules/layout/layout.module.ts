import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { FullComponent } from './full/full.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext'
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    FullComponent,
    MenuComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MenubarModule,
    InputTextModule,
    SharedModule,
    ButtonModule
  ]
})
export class LayoutModule { }
