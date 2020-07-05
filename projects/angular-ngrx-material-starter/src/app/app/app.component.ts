import browser from 'browser-detect';
import { Component, OnInit } from '@angular/core';
import { environment as env } from '../../environments/environment';

import {
  routeAnimations,
  LocalStorageService
} from '../core/core.module';
import { SettingsFacade } from '../core/settings/settings.facade';
import { AuthFacade } from '../core/auth/auth.facade';

@Component({
  selector: 'anms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit {
  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;
  year = new Date().getFullYear();

  isAuthenticated$ = this.authFacade.isAuthenticated$;
  stickyHeader$ = this.settingsFacade.stickyHeaders$;
  language$ = this.settingsFacade.language$;
  theme$ = this.settingsFacade.theme$;

  constructor(
    private storageService: LocalStorageService,
    private settingsFacade: SettingsFacade,
    private authFacade: AuthFacade
  ) {}

  private static isIEorEdgeOrSafari() {
    return ['ie', 'edge', 'safari'].includes(browser().name);
  }

  ngOnInit(): void {
    this.storageService.testLocalStorage();
    if (AppComponent.isIEorEdgeOrSafari()) {
      this.settingsFacade.setPageAnimation(true);
    }
  }

  onLoginClick() {
    this.authFacade.login();
  }

  onLogoutClick() {
    this.authFacade.logout();
  }

  onLanguageSelect({ value: language }) {
    this.settingsFacade.setLanguage(language);
  }
}
