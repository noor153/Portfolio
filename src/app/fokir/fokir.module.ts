import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FokirRoutingModule } from './fokir-routing.module';
import { FokirComponent } from './fokir.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CounterComponent } from './counter/counter.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    FokirComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    CounterComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FokirRoutingModule
  ]
})
export class FokirModule { }
