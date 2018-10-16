import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BocinasPage } from './bocinas';

@NgModule({
  declarations: [
    BocinasPage,
  ],
  imports: [
    IonicPageModule.forChild(BocinasPage),
  ],
})
export class BocinasPageModule {}
