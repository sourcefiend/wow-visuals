import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Mount, MountDisplay } from '../../shared/models/mount.model';

@Injectable({
  providedIn: 'root'
})
export class MountService {

  constructor(
    private http: HttpClient
  ) { }

  getMounts() {
    const mountsURL = `https://${localStorage.getItem('region')}.api.blizzard.com/profile/wow/character/${localStorage.getItem('realm')}/${localStorage.getItem('characterName')}/collections/mounts`;

    const mountsOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem(`oauth_access_token_${localStorage.getItem('region')}`)
      }),
      params: new HttpParams()
        .set('locale', 'en_US')
        .set('namespace', `profile-${localStorage.getItem('region')}`)
    }

    return this.http.get(mountsURL, mountsOptions)
      .pipe(
        map((item: any) =>
          (item.mounts as Mount[]).map((item: any) => new Mount(item.mount.id, item.mount.name, item.mount.key.href))
        ),
      )
  }

  getSpecificMount(mountId: Number) {
    const specificMountURL = `https://${localStorage.getItem('region')}.api.blizzard.com/data/wow/mount/${mountId}`;

    const specificMountOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem(`oauth_access_token_${localStorage.getItem('region')}`)
      }),
      params: new HttpParams()
        .set('locale', 'en_US')
        .set('namespace', `static-${localStorage.getItem('region')}`)
    }

    return this.http.get(specificMountURL, specificMountOptions)
      .pipe(
        map((item: any) => 
          new MountDisplay(item.id, item.name, (item.creature_displays as any[]).pop().id, item.description, item.source)
        ),
      )
  }
}
