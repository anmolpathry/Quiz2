import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BocinasPage } from '../pages/bocinas/bocinas';
import { TvPage } from '../pages/tv/tv';
import { SmartPage } from '../pages/smart/smart';
import { LamparaPage } from '../pages/lampara/lampara';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BocinasPage,
    TvPage,
    SmartPage,
    LamparaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BocinasPage,
    TvPage,
    SmartPage,
    LamparaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
