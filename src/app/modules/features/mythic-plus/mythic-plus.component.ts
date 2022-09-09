import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { DungeonService } from '../../core/api/dungeon.service';
import { Dungeon } from '../../shared/models/dungeon.model';
import { dungeons } from '../../shared/maps/maps';

@Component({
  selector: 'app-mythic-plus',
  templateUrl: './mythic-plus.component.html',
  styleUrls: ['./mythic-plus.component.scss']
})
export class MythicPlusComponent implements OnInit {

  public dungeons!: Dungeon[];
  public dungeonMap: Map<String, String> = dungeons;



  constructor(
    private service: DungeonService
  ) { }

  async ngOnInit() {
    this.dungeons = await firstValueFrom(this.service.getDungeonData());
  }

}
