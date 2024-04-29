import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private currentTheme: 'light-theme' | 'dark-theme' = 'light-theme';

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  setLightTheme() {
    this.setTheme('light-theme');
  }

  setDarkTheme() {
    this.setTheme('dark-theme');
  }

  private setTheme(theme: 'light-theme' | 'dark-theme') {
    const body = document.body;
    this.renderer.removeClass(body, this.currentTheme);
    this.renderer.addClass(body, theme);
    this.currentTheme = theme;
  }
}