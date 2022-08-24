import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CryptoFieldRoutingModule } from './crypto-field/crypto-field-routing.module';
import { CryptoFieldModule } from './crypto-field/crypto-field.module';
import { MoviedbRoutingModule } from './moviedb/moviedb-routing.module';
import { MoviedbModule } from './moviedb/moviedb.module';
import { AppHomeComponent } from './app-home/app-home.component';
import { HomeNotFoundComponent } from './home-not-found/home-not-found.component';
import { FokirModule } from './fokir/fokir.module';
import { FokirRoutingModule } from './fokir/fokir-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    HomeNotFoundComponent,
    NavbarComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MoviedbRoutingModule,
    MoviedbModule,
    // CryptoFieldModule,
    // CryptoFieldRoutingModule,
    // FokirModule,
    // FokirRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
