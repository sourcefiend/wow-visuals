import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Mount } from '../../shared/models/mount.model';

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

  // async fillMountArrayWithRenders(mounts: Mount[]) {

  //   let mountsWithRenders = [];

  //   const mountOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer ' + localStorage.getItem(`oauth_access_token_${localStorage.getItem('region')}`)
  //     }),
  //     params: new HttpParams()
  //       .set('locale', 'en_US')
  //       .set('namespace', `static-${localStorage.getItem('region')}`)
  //   }

  //   for (let mount of mounts) {
  //     const mountURL = `https://${localStorage.getItem('region')}.api.blizzard.com/data/wow/mount/${mount.id}`;

  //     let mountWithRender = await this.http.get(mountURL, mountOptions)
  //       .pipe(
  //         map((item: any) => {
  //           mount.description = item.description;
  //           mount.display_url = (item.creature_displays as any[]).shift().key.href;
  //           return mount;
  //         })
  //       );

  //     mountsWithRenders.push(mountWithRender)
  //   }

  //   return mountsWithRenders;
  // }
}
