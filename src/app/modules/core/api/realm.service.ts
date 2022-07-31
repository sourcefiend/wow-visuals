import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Realm } from '../../shared/models/realm.model';

@Injectable({
  providedIn: 'root'
})
export class RealmService {

  constructor(
    private http: HttpClient
  ) { }

  getUSRealms(): Observable<Realm[]> {
    const usRealmsURL = 'https://us.api.blizzard.com/data/wow/realm/index';

    const usRealmsOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('oauth_access_token_us')
      }),
      params: new HttpParams()
        .set('region', 'us')
        .set('namespace', 'dynamic-us')
        .set('locale', 'en_US')
    }

    return this.http.get<Realm[]>(usRealmsURL, usRealmsOptions)
      .pipe(
        map((data: any) => data.realms)
      );
  }

  getEURealms(): Observable<Realm[]> {
    const euRealmsURL = 'https://eu.api.blizzard.com/data/wow/realm/index';

    const euRealmsOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('oauth_access_token_eu')
      }),
      params: new HttpParams()
        .set('region', 'eu')
        .set('namespace', 'dynamic-eu')
        .set('locale', 'en_US')
    }
    
    return this.http.get<Realm[]>(euRealmsURL, euRealmsOptions)
      .pipe(
        map((data: any) => data.realms)
      );
  }
}
