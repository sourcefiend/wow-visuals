import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ReputationService } from '../../core/api/reputation.service';
import { Reputation } from '../../shared/models/reputation.model';

@Component({
  selector: 'app-reputation',
  templateUrl: './reputation.component.html',
  styleUrls: ['./reputation.component.scss']
})
export class ReputationComponent implements OnInit {

  public reputations!: Reputation[];

  constructor(
    private service: ReputationService
  ) { }

  async ngOnInit() {
    this.reputations = await firstValueFrom(this.service.getReputations());
  }

}
