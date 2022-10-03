import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Overview } from '../../shared/models/overview.model';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {

  constructor(
    private http: HttpClient
  ) { }

  getOverview() {
    const overviewURL = `https://${localStorage.getItem('region')}.api.blizzard.com/profile/wow/character/${localStorage.getItem('realm')}/${localStorage.getItem('characterName')}`;

    const overviewOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem(`oauth_access_token_${localStorage.getItem('region')}`)
      }),
      params: new HttpParams()
        .set('locale', 'en_US')
        .set('namespace', `profile-${localStorage.getItem('region')}`)
    }

    return this.http.get(overviewURL, overviewOptions)
      .pipe(
        map((item: any) => new Overview(
          item.name,
          item.realm.name,
          item.gender.name,
          item.faction.name,
          item.race.name,
          item.character_class.name,
          item.active_spec.name,
          item.level,
          item.achievement_points,
          item.average_item_level,
          item.active_title.name,
          item.covenant_progress.chosen_covenant.name,
          item.covenant_progress.renown_level
        )),
      )
  }
}
