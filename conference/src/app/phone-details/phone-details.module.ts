import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhoneDetailsPageRoutingModule } from './phone-details-routing.module';

import { PhoneDetailsPage } from './phone-details.page';
import { Device } from '@awesome-cordova-plugins/device/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhoneDetailsPageRoutingModule,
  ],
  declarations: [PhoneDetailsPage],
  providers: [Device],
})
export class PhoneDetailsPageModule {}
