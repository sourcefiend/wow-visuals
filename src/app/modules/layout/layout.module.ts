import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { FullComponent } from './full/full.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenubarModule } from 'primeng/menubar';


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
  ]
})
export class LayoutModule { }
