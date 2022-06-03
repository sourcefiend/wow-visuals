import { Component, OnInit } from '@angular/core';
import { RealmService } from '../core/api/realm.service';
import { AuthService } from '../core/guard/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private realmService: RealmService,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    await this.authService.getOAuthTokens();
    this.realmService.getEURealms();
    this.realmService.getUSRealms();
  }

}
