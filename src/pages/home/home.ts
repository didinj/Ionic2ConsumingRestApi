import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { RestapiService } from '../../providers/restapi-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any;

  constructor(public navCtrl: NavController, public restapiService: RestapiService) {
    this.getUsers();
  }

  getUsers() {
    this.restapiService.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }
}
