import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { RestapiService } from '../../providers/restapi-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  user = { name: '', username: '', email: '', phone: '', website: '', address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: '', lng: '' } }, company: { name: '', bs: '', catchPhrase: '' }};

  constructor(public navCtrl: NavController, public restapiService: RestapiService) {

  }

  saveUser() {
    this.restapiService.saveUser(this.user).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }

}
