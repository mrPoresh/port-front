import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

// Define the theme enum
enum Theme {
  Light = 'light',
  Dark = 'dark'
}

const LIGHT_THEME = 'light-theme';
const DARK_THEME = 'dark-theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private theme: Theme;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.theme = this.loadThemePreference(); // Load theme preference on initialization
    this.applyTheme(this.theme); // Apply the loaded theme
  }

  /**
   * Toggles the current theme between 'Light' and 'Dark'.
   */
  toggleTheme(): void {
    this.theme = this.theme === Theme.Light ? Theme.Dark : Theme.Light;
    this.applyTheme(this.theme);
    this.saveThemePreference(); // Save the updated preference
  }

  /**
   * Applies the specified theme by updating the class on the body element.
   * @param theme The theme to be applied.
   */
  private applyTheme(theme: Theme): void {
    const themeClass = theme === Theme.Light ? LIGHT_THEME : DARK_THEME;
    this.renderer.removeClass(document.body, LIGHT_THEME);
    this.renderer.removeClass(document.body, DARK_THEME);
    this.renderer.addClass(document.body, themeClass);
  }

  /**
   * Saves the current theme preference to local storage.
   */
  private saveThemePreference(): void {
    localStorage.setItem('user-theme', this.theme);
  }

  /**
   * Loads the theme preference from local storage.
   * Returns 'Light' by default if no preference is stored.
   * @returns The stored theme preference.
   */
  private loadThemePreference(): Theme {
    return localStorage.getItem('user-theme') as Theme || Theme.Light;
  }

  /**
   * Returns the current theme.
   * @returns The current theme.
   */
  getCurrentTheme(): Theme {
    return this.theme;
  }
}