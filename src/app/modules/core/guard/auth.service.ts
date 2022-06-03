import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { VariableBinding } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AccessToken } from '../../shared/models/access-token.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) {};

  async getOAuthTokens() {
    const getOAuthTokenOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      }),
      params: new HttpParams()
        .set('grant_type', 'client_credentials')
        .set('client_id', '68cd90008f0748d5a48e52447e2ad7dc')
        .set('client_secret', 'wLl05WhCBbAHnA0MBcM0f1SnsJcKziLY')
    }

    // US Token
    if (!localStorage.getItem('oauth_access_token_us')) {
      this.http.post('https://us.battle.net/oauth/token', undefined, getOAuthTokenOptions).subscribe(access_token => {
        const OAuth2AccessToken = access_token as AccessToken;
        localStorage.setItem('oauth_access_token_us', JSON.stringify(OAuth2AccessToken.access_token));
      })
    }

    // EU Token
    if (!localStorage.getItem('oauth_access_token_eu')) {
      this.http.post('https://eu.battle.net/oauth/token', undefined, getOAuthTokenOptions).subscribe(access_token => {
        const OAuth2AccessToken = access_token as AccessToken;
        localStorage.setItem('oauth_access_token_eu', JSON.stringify(OAuth2AccessToken.access_token))
      })
    }
  }
}


