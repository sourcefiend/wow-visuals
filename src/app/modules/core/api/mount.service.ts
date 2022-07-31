import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MountService {

  constructor(
    private http: HttpClient
  ) { }

  getMounts() {
    const URL = `https://${localStorage.getItem('region')}.api.blizzard.com/profile/wow/character/${localStorage.getItem('realm')}/${localStorage.getItem('characterName')}/collections/mounts`
  }



}
