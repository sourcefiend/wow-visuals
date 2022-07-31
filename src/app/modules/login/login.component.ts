import { Component, OnInit } from '@angular/core';
import { FilterService, SelectItemGroup } from 'primeng/api';
import { firstValueFrom } from 'rxjs';
import { RealmService } from '../core/api/realm.service';
import { AuthService } from '../core/guard/auth.service';
import { Realm } from '../shared/models/realm.model';
import { sortByName } from '../../utils/utils';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../shared/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  euRealms!: Realm[];
  usRealms!: Realm[];

  groupedRealms!: SelectItemGroup[];
  filteredRealms!: any[];

  model!: Login;

  loginForm = new FormGroup({
    realm: new FormControl('', Validators.required),
    characterName: new FormControl('', Validators.required)
  })

  constructor(
    private realmService: RealmService,
    private authService: AuthService,
    private filterService: FilterService
  ) {}

  async ngOnInit() {
    this.authService.clearTokens();
    await this.authService.getEUOAuthToken();
    await this.authService.getUSOAuthToken();
    this.euRealms = await firstValueFrom(this.realmService.getEURealms());
    this.usRealms = await firstValueFrom(this.realmService.getUSRealms());

    this.groupedRealms = [
      {
        label: 'EU', value: 'eu',
        items: this.euRealms.map(realm => {
          return {label: 'EU', value: realm.name}
        }).sort(sortByName)
      },
      {
        label: 'US', value: 'us',
        items: this.usRealms.map(realm => {
          return {label: 'US', value: realm.name}
        }).sort(sortByName)
      }
    ]
  }

  filterGroupedRealms(event: any) {
    let query = event.query;
    let filteredRealms = [];

    for (let optgroup of this.groupedRealms) {
      let filteredSubOptions = this.filterService.filter(
        optgroup.items,
        ["value"],
        query,
        "contains"
      );
      if (filteredSubOptions && filteredSubOptions.length) {
        filteredRealms.push({
          label: optgroup.label,
          value: optgroup.label,
          items: filteredSubOptions
        })
      }
    }

    this.filteredRealms = filteredRealms.sort(sortByName);
  }

  login() {
    const model: Login = new Login(
      this.loginForm.controls['realm'].value.label,
      this.loginForm.controls['realm'].value.value,
      this.loginForm.controls['characterName'].value
    );
    this.authService.login(model);
  }

  //TODO: fixat da kad se klikne van realm dropdowna vrijednost unutra ostane neresetirana

}
