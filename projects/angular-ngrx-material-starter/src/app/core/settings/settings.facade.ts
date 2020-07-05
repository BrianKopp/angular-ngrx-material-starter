import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, Language } from './settings.model';
import { actionSettingsChangeAnimationsPageDisabled, actionSettingsChangeLanguage } from './settings.actions';
import { selectEffectiveTheme, selectSettingsLanguage, selectSettingsStickyHeader } from './settings.selectors';


@Injectable()
export class SettingsFacade {
  theme$ = this.store.select(selectEffectiveTheme);
  language$ = this.store.select(selectSettingsLanguage);
  stickyHeaders$ = this.store.select(selectSettingsStickyHeader);

  constructor(private store: Store<State>) { }

  setPageAnimation(enabled: boolean) {
    this.store.dispatch(
      actionSettingsChangeAnimationsPageDisabled({
        pageAnimationsDisabled: !enabled
      })
    );
  }

  setLanguage(language: Language) {
    this.store.dispatch(
      actionSettingsChangeLanguage({ language })
    );
  }
}

