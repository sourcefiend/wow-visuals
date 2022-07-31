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
                label: 'Overview',
            },
            {
                label: 'Achievements',
                items: [
                    {label: 'Character'},
                    {label: 'Quests'},
                    {label: 'Exploration'},
                    {label: 'Player vs. Player'},
                    {label: 'Dungeons & Raids'},
                    {label: 'Professions'},
                    {label: 'Reputation'},
                    {label: 'World Events'},
                    {label: 'Pet Battles'},
                    {label: 'Collections'},
                    {label: 'Expansion Features'},
                    {label: 'Legacy'},
                    {label: 'Feats of Strength'}
                ]
            },
            {
                label: 'Collectable',
                items: [
                    { label: 'Mounts', routerLink: 'mounts' },
                    { label: 'Companions'},
                    { label: 'Battle Pets'},
                    { label: 'Toys'},
                    { label: 'Titles'}
                ]
            },
            {
                label: 'Calendar'
            },
            {
                label: 'Reputation'
            }
        ];
    }
}
