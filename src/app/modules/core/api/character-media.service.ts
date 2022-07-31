import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterMediaService {


  constructor(
    private http: HttpClient
  ) { }

  getCharacterRender() {
    const URL = `https://${localStorage.getItem('region')}.api.blizzard.com/profile/wow/character/${localStorage.getItem('realm')}/${localStorage.getItem('characterName')}/character-media`;

    const characterOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem(`oauth_access_token_${localStorage.getItem('region')}`)
      }),
      params: new HttpParams()
        .set('locale', 'en_US')
        .set('namespace', `profile-${localStorage.getItem('region')}`)
    }

    return this.http.get(URL, characterOptions)
      .pipe(
        map((item: any) => {
          const assets = item.assets as [any];
          const mainBanner = assets.find(asset => asset.key === 'main-raw')
          return mainBanner.value;
        }),
      )
  }
}
