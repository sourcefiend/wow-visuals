import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Reputation } from '../../shared/models/reputation.model';

@Injectable({
  providedIn: 'root'
})
export class ReputationService {

  constructor(
    private http: HttpClient
  ) { }

  getReputations() {
    const reputationURL = `https://${localStorage.getItem('region')}.api.blizzard.com/profile/wow/character/${localStorage.getItem('realm')}/${localStorage.getItem('characterName')}/reputations`;

    const reputationOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem(`oauth_access_token_${localStorage.getItem('region')}`)
      }),
      params: new HttpParams()
        .set('locale', 'en_US')
        .set('namespace', `profile-${localStorage.getItem('region')}`)
    }

    return this.http.get(reputationURL, reputationOption)
      .pipe(
        map((response: any) => {
          const reputations = response.reputations as any[];
          return reputations.map(x => new Reputation(
            x.faction.id,
            x.faction.name,
            x.standing.value,
            x.standing.max,
            x.standing.tier,
            x.standing.name))
          
        })
      )
  }
}
