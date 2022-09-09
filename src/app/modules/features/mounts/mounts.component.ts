import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { MountService } from '../../core/api/mount.service';
import { Mount } from '../../shared/models/mount.model';

@Component({
  selector: 'app-mounts',
  templateUrl: './mounts.component.html',
  styleUrls: ['./mounts.component.scss']
})
export class MountsComponent implements OnInit {

  public mounts!: Mount[];

  public totalRecords!: number;

  constructor(
    private service: MountService
  ) { }

  async ngOnInit() {
    this.mounts = await firstValueFrom(this.service.getMounts());
    // this.mounts = await firstValueFrom(this.service.fillMountArrayWithRenders(this.mounts));
  }

  onPage(event: any) {
    console.log(event);
  }

  onSort(event: any) {
    console.log(event);
  }

}
