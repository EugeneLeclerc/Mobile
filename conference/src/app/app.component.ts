import { Component } from '@angular/core';
import { CachingService } from './services/caching.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Session List', url: '/session-list', icon: 'list' },
    { title: 'Device Details', url: '/phone-details', icon: 'phone-portrait' },
  ];

  constructor(private cachingService: CachingService) {
    this.cachingService.initStorage();
  }
}
