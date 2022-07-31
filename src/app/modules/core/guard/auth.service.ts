import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { VariableBinding } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, firstValueFrom, map, throwError } from 'rxjs';
import { AccessToken } from '../../shared/models/access-token.model';
import { Login } from '../../shared/models/login.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public characterExists: boolean = false;

  private getOAuthTokenOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }),
    params: new HttpParams()
      .set('grant_type', 'client_credentials')
      .set('client_id', '68cd90008f0748d5a48e52447e2ad7dc')
      .set('client_secret', 'wLl05WhCBbAHnA0MBcM0f1SnsJcKziLY')
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) {};

  async getUSOAuthToken() {
    if (!localStorage.getItem('oauth_access_token_us')) {
      const usToken = await firstValueFrom(this.http.post('https://us.battle.net/oauth/token', undefined, this.getOAuthTokenOptions)
      .pipe(
        map((tokenData: any) => tokenData.access_token)
      )
      );
      localStorage.setItem('oauth_access_token_us', usToken)
    }
  }

  async getEUOAuthToken() {
    if (!localStorage.getItem('oauth_access_token_eu')) {
      const euToken = await firstValueFrom(this.http.post('https://eu.battle.net/oauth/token', undefined, this.getOAuthTokenOptions)
        .pipe(
          map((tokenData: any) => tokenData.access_token)
        )
      );
      localStorage.setItem('oauth_access_token_eu', euToken);
    }
  }

  async login(loginInfo: Login) {
    const loginOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem(`oauth_access_token_${loginInfo.region.toLowerCase()}`)
      }),
      params: new HttpParams()
        .set('locale', 'en_US')
        .set('namespace', `profile-${loginInfo.region.toLowerCase()}`)
    }
    const character = await firstValueFrom(this.http
      .get(`https://${loginInfo.region.toLowerCase()}.api.blizzard.com/profile/wow/character/${loginInfo.realm.toLocaleLowerCase()}/${loginInfo.characterName.toLowerCase()}`,
      loginOptions)
      .pipe(
        catchError(this.handleLoginError)
      ))

    if (character) {
      this.storeLoginData(loginInfo);
    }

    this.router.navigate(['/overview']);
  }

  clearTokens() {
    localStorage.removeItem('oauth_access_token_eu');
    localStorage.removeItem('oauth_access_token_us');
  }

  logout() {
    localStorage.removeItem('region');
    localStorage.removeItem('realm');
    localStorage.removeItem('characterName');
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['/login']);
  }

  private handleLoginError(error: HttpErrorResponse) {
    if (error.status === 404) {
      console.log('Character doesn\'t exist!');
    }

    return throwError(() => new Error('Something went wrong: please try again later.'));
  }

  private storeLoginData(loginInfo: Login) {
    localStorage.setItem('region', `${loginInfo.region.toLowerCase()}`);
    localStorage.setItem('realm', `${loginInfo.realm.toLowerCase()}`);
    localStorage.setItem('characterName', `${loginInfo.characterName.toLowerCase()}`);
    localStorage.setItem('isLoggedIn', 'true');
  }
}


