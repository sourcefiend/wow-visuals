import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Realm, RealmAdapter } from '../../shared/models/realm.model';

@Injectable({
  providedIn: 'root'
})
export class RealmService {

  constructor(
    private http: HttpClient,
    private adapter: RealmAdapter
  ) { }

  getUSRealms() {
    const usRealmsURL = 'https://us.api.blizzard.com/data/wow/realm/index';

    const usRealmsOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('oauth_access_token_us') as string)
      }),
      params: new HttpParams()
        .set('region', 'us')
        .set('namespace', 'dynamic-us')
        .set('locale', 'en_US')
    }

    this.http.get(usRealmsURL, usRealmsOptions).subscribe(result => {
      console.log(result);
    })
  }

  getEURealms() {
    const euRealmsURL = 'https://eu.api.blizzard.com/data/wow/realm/index';

    const euRealmsOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('oauth_access_token_eu') as string)
      }),
      params: new HttpParams()
        .set('region', 'eu')
        .set('namespace', 'dynamic-eu')
        .set('locale', 'en_US')
    }
    this.http.get(euRealmsURL, euRealmsOptions).subscribe(result => {
      console.log(result);
    })
  }
}
