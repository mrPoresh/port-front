import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Define the theme enum
export enum Theme {
  Light = 'light',
  Dark = 'dark'
}

const LIGHT_THEME = 'light-theme';
const DARK_THEME = 'dark-theme';
const THEME_KEY = 'user-theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private theme: BehaviorSubject<Theme>;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    const initialTheme = this.loadThemePreference();
    this.theme = new BehaviorSubject<Theme>(initialTheme);
    this.applyTheme(initialTheme);
  }

  toggleTheme(): void {
    const newTheme = this.theme.value === Theme.Light ? Theme.Dark : Theme.Light;
    this.theme.next(newTheme);
    this.applyTheme(newTheme);
    this.saveThemePreference(newTheme);
  }

  private applyTheme(theme: Theme): void {
    const themeClass = theme === Theme.Light ? LIGHT_THEME : DARK_THEME;
    this.renderer.removeClass(document.body, LIGHT_THEME);
    this.renderer.removeClass(document.body, DARK_THEME);
    this.renderer.addClass(document.body, themeClass);
  }

  private saveThemePreference(theme: Theme): void {
    localStorage.setItem(THEME_KEY, theme);
  }

  private loadThemePreference(): Theme {
    return (localStorage.getItem(THEME_KEY) as Theme) || Theme.Light;
  }

  isDarkModeEnabled(): boolean {
    return this.theme.value === Theme.Dark;
  }

  getThemeStatus(): BehaviorSubject<Theme> {
    return this.theme;
  }
}