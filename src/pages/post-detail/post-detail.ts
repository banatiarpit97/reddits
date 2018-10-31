import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-post-detail',
  templateUrl: 'post-detail.html',
})
export class PostDetailPage {
  post;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ib: InAppBrowser) {
    this.post = this.navParams.get('post');
  }
  
  openReddit(link){
    var url ="https://www.reddit.com"+link;
    this.ib.create(url)
  }

}
