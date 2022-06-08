import { Component, OnInit } from '@angular/core';
import { Device } from '@awesome-cordova-plugins/device/ngx';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.page.html',
  styleUrls: ['./phone-details.page.scss'],
})
export class PhoneDetailsPage implements OnInit {
  constructor(private device: Device) {}

  platform: string;
  version: string;
  uuid: string;
  model: string;

  supported: boolean;

  ngOnInit() {
    if (this.device.platform) {
      this.supported = true;
      this.platform = this.device.platform;
      this.version = this.device.version;
      this.uuid = this.device.uuid;
      this.model = this.device.model;
    } else {
      this.supported = false;
    }
  }
}
