import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BocinasPage } from '../bocinas/bocinas';
import { TvPage } from '../tv/tv';
import { SmartPage } from '../smart/smart';
import { LamparaPage } from '../lampara/lampara';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bocinas= BocinasPage;
  tv = TvPage;
  smart= SmartPage;
  lampara= LamparaPage;

  constructor(public navCtrl: NavController) {

  }

  Bocinas(){
    this.navCtrl.push(this.bocinas);

  }

  Tv(){
   this.navCtrl.push(this.tv);
  }

  Sm(){
   this.navCtrl.push(this.smart);
  }

  Lam(){
   this.navCtrl.push(this.lampara);
  }
}
