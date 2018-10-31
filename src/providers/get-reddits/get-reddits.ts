import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable()
export class GetRedditsProvider {
  items:any;
  length;
  prevLength = 0;
  end;
  baseUrl = 'https://www.reddit.com/r/';

  constructor(public http: HttpClient) {
  //  this.getReddits('funny', 5);
  }

  getReddits(category:string, limit:number){
    if(limit == 10){
      this.prevLength = 0;
      this.end = false;   

    }
    console.log(this.items)
    // this.items = [];
    // console.log(this.items)
    
    var global = this;
    var url = this.baseUrl+category+'/top.json?limit='+limit;
    $.ajax({
      url:url,
      type:'GET',
      async:false,
      success:function(data){
        // global.length = data.length;
         console.log(data.data.children);
         
        global.length = data.data.children.length;
        // console.log(global.length, global.prevLength)
        if(global.length == global.prevLength){
          // console.log('end')
          global.end = true;
        }
        else{
          global.prevLength = global.length;
          global.items = data.data.children;
          console.log(global.items)
          
        }
      },
      error:function(){
        console.log('error');
      }
    })
  }


}
