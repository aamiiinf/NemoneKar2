
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './pages/main/main.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { FooterComponent } from './pages/components/footer/footer.component';
import { TopMenuComponent } from './pages/components/top-menu/top-menu.component';
import { CenterMainComponent } from './pages/components/center-main/center-main.component';
import { DowpdownMenuComponent } from './pages/components/dowpdown-menu/dowpdown-menu.component';
import { InformatingPageComponent } from './pages/informating-page/informating-page.component';
import { MainInformaionPageComponent } from './pages/components/main-informaion-page/main-informaion-page.component';
import { SingInComponent } from './pages/sing-in/sing-in.component';
import { SingUpComponent } from './pages/sing-up/sing-up.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NotFoundPageComponent,
    FooterComponent,
    TopMenuComponent,
    CenterMainComponent,
    DowpdownMenuComponent,
    InformatingPageComponent,
    MainInformaionPageComponent,
    SingInComponent,
    SingUpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
