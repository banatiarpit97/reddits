import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GetRedditsProvider } from '../../providers/get-reddits/get-reddits';
import { PostDetailPage } from '../post-detail/post-detail';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {
  limit = 10;
  category;
  constructor(public navCtrl: NavController, public getReddits: GetRedditsProvider, private storage:Storage) {
    this.storage.get('category').then((category) => {
      if (category) {
        this.category = category;
      }
      else {
        this.category = 'funny';
      }
      this.getReddits.getReddits(this.category, this.limit);
    })
  }

  doInfinite(infiniteScroll){
    this.limit += 20;
    // console.log(this.limit)
    this.getReddits.getReddits(this.category, this.limit);
    
    infiniteScroll.complete();
    // if (this.getReddits.end) {
    //   infiniteScroll.enable(false);
    // }
    // else if (!this.getReddits.end){
    //   infiniteScroll.enable(true);
    // }
  }

  postDetail(post){
    this.navCtrl.push(PostDetailPage, {post:post});
  }
  
  changeCategory(){
    this.limit = 10;
    this.getReddits.getReddits(this.category, this.limit);
  }

}

