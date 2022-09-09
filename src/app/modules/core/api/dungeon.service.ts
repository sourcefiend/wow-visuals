import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Dungeon } from '../../shared/models/dungeon.model';

@Injectable({
  providedIn: 'root'
})
export class DungeonService {

  constructor(
    private http: HttpClient
  ) { }

  getDungeonData() {
    const dungeonsURL = `https://
    ${localStorage.getItem('region')}.api.blizzard.com/profile/wow/character/
    ${localStorage.getItem('realm')}/
    ${localStorage.getItem('characterName')}/mythic-keystone-profile/season/7`

    const dungeonsOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem(`oauth_access_token_${localStorage.getItem('region')}`)
      }),
      params: new HttpParams()
        .set('locale', 'en_US')
        .set('namespace', `profile-${localStorage.getItem('region')}`)
    }

    return this.http.get(dungeonsURL, dungeonsOptions)
      .pipe(
        map((item: any) => {
          const dungeonData = item.best_runs;
          let dungeons = [] as Dungeon[];

          dungeonData.forEach((dungeon: any) => {

            dungeons.push(new Dungeon(
              new Date(dungeon.completed_timestamp),
              dungeon.duration,
              dungeon.keystone_level,
              (dungeon.keystone_affixes as any[]).map(affix => affix.name).join(", "),
              (dungeon.members as any[]).map(member => member.character.name).join(", "),
              dungeon.dungeon.name,
              dungeon.is_completed_within_time,
              dungeon.mythic_rating.rating
            ))
          })

          return dungeons;
        }),
      )
  }
}
