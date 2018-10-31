import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { SettingsPage } from '../pages/settings/settings';
import { RedditsPage } from '../pages/reddits/reddits';
import { TabsPage } from '../pages/tabs/tabs';
import { PostDetailPage } from '../pages/post-detail/post-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IonicStorageModule } from '@ionic/storage';
import { GetRedditsProvider } from '../providers/get-reddits/get-reddits';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    SettingsPage,
    RedditsPage,
    TabsPage,
    PostDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    SettingsPage,
    RedditsPage,
    TabsPage,
    PostDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GetRedditsProvider,
    HttpClient,
    InAppBrowser
  ]
})
export class AppModule {}
