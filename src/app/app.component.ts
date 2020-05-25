import { Component } from '@angular/core';
import { SettingsService, SidebarService, SharedService } from './services/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(public settingServices: SettingsService) { }
}
