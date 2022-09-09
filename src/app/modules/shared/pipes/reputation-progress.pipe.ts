import { Pipe, PipeTransform } from '@angular/core';
import { Reputation } from '../models/reputation.model';

@Pipe({
  name: 'reputationProgress'
})
export class ReputationProgressPipe implements PipeTransform {

  transform(reputation: Reputation): unknown {
    return Math.floor((reputation.currentPoints.valueOf() / reputation.maximumPoints.valueOf()) * 100)
  }

}
