import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DefaulthomePage } from './defaulthome';

@NgModule({
  declarations: [
    DefaulthomePage,
  ],
  imports: [
    IonicPageModule.forChild(DefaulthomePage),
  ],
})
export class DefaulthomePageModule {}
