import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { BasePageComponent } from './components/base/base-page/base-page.component';
import { HeaderComponent } from './components/base/header/header.component';
import { FooterComponent } from './components/base/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { FlatBtnDirective } from './directives/flat-btn.directive';
import { FillBtnDirective } from './directives/fill-btn.directive';
import { ShowPageComponent } from './components/show-page/show-page.component';
import { IconBtnDirective } from './directives/icon-btn.directive';
import { ToggBtnDirective } from './directives/togg-btn.directive';


@NgModule({
  declarations: [
    AppComponent,
    BasePageComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    AboutPageComponent,
    FlatBtnDirective,
    FillBtnDirective,
    IconBtnDirective,
    ToggBtnDirective,
    ShowPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    // services, guards, interceptors
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }