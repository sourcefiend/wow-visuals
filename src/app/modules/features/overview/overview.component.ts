import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { OverviewService } from '../../core/api/overview.service';
import { covenants, factions } from '../../shared/maps/maps';
import { Overview } from '../../shared/models/overview.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  public overview!: Overview;
  public factionMap: Map<String, String> = factions;
  public covenantMap: Map<String, String> = covenants;

  constructor(
    private service: OverviewService
  ) { }

  async ngOnInit() {
    this.overview = await firstValueFrom(this.service.getOverview());
  }

}
