import { RouterModule } from '@angular/router';
import { AppRootingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { LoginComponent } from './components/login/login.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardGalleryComponent } from './components/dashboard-gallery/dashboard-gallery.component';
import { DashboardCardsComponent } from './components/dashboard-cards/dashboard-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    DashboardComponent,
    PrimaryButtonComponent,
    MainMenuComponent,
    LoginComponent,
    FormInputComponent,
    HeaderComponent,
    DashboardGalleryComponent,
    DashboardCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRootingModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
