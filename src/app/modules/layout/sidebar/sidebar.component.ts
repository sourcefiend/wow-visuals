import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CharacterMediaService } from '../../core/api/character-media.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  heroBannerUrl!: string

  constructor(
    private characterMediaService: CharacterMediaService
  ) { }

  async ngOnInit() {
    this.heroBannerUrl = await firstValueFrom(this.characterMediaService.getCharacterRender());
  }

}
