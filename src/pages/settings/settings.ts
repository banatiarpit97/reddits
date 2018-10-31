import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { RedditsPage } from '../reddits/reddits';
import { GetRedditsProvider } from '../../providers/get-reddits/get-reddits';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  category;
  constructor(public navCtrl: NavController, private storage: Storage, public getReddits: GetRedditsProvider) {
   this.storage.get('category').then((category) =>{
     if(category){
      this.category = category;  
     }
     else{
       this.category = 'funny';
     }
    })
  }

  changeDefaults(){
    this.getReddits.getReddits(this.category, 10);
    this.storage.set('category', this.category);
    this.navCtrl.setRoot(RedditsPage);
  }

}
