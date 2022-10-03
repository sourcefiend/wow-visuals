import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../core/guard/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    items!: MenuItem[];

    loginString!: String;

    constructor(
        private authService: AuthService
    ) {
    }

    ngOnInit() {
        this.initializeMenu();
        this.loginString = `${localStorage.getItem('characterName')}@${localStorage.getItem('realm')}`;
    }

    logout() {
        this.authService.logout();
    }

    private initializeMenu() {
        this.items = [
            {
                label: 'Overview', routerLink: 'overview'
            },
            {
                label: 'Mounts', routerLink: 'mounts'
            },
            {
                label: 'Reputation', routerLink: 'reputation'
            },
            {
                label: 'Mythic+', routerLink: 'mythic-plus'
            }
        ];
    }
}
