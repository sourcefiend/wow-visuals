import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { MountService } from '../../core/api/mount.service';
import { Mount, MountDisplay } from '../../shared/models/mount.model';

@Component({
  selector: 'app-mounts',
  templateUrl: './mounts.component.html',
  styleUrls: ['./mounts.component.scss']
})
export class MountsComponent implements OnInit {

  public mounts!: Mount[];

  public mountDisplays: MountDisplay[] = [];

  public displayMap = new Map<String, String>();
  public descriptionMap = new Map<String, String>();

  public totalRecords!: number;

  constructor(
    private service: MountService
  ) { }

  async ngOnInit() {
    this.mounts = await firstValueFrom(this.service.getMounts());
    this.mounts.forEach(async mount => {
      const mountDisplay = await firstValueFrom(this.service.getSpecificMount(mount.id))
      this.mountDisplays.push(mountDisplay);
      this.displayMap.set(mountDisplay.name, `https://render.worldofwarcraft.com/us/npcs/zoom/creature-display-${mountDisplay.displayId}.jpg`);
      this.descriptionMap.set(mountDisplay.name, mountDisplay.description)
    });
    console.log(this.mountDisplays);
  }

  onPage(event: any) {
    console.log(event);
  }

  onSort(event: any) {
    console.log(event);
  }

}
