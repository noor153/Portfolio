import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptoFieldRoutingModule } from './crypto-field-routing.module';
import { CryptoFieldComponent } from './crypto-field.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { TokenSaleComponent } from './token-sale/token-sale.component';
import { DocsComponent } from './docs/docs.component';
import { RoadMapComponent } from './road-map/road-map.component';
import { GroupComponent } from './group/group.component';
import { DesktopComponent } from './desktop/desktop.component';
import { TeamComponent } from './team/team.component';
import { PartnersComponent } from './partners/partners.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactComponent } from './contact/contact.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    CryptoFieldComponent,
    NavbarComponent,
    HomeComponent,
    SecondComponent,
    ThirdComponent,
    TokenSaleComponent,
    DocsComponent,
    RoadMapComponent,
    GroupComponent,
    DesktopComponent,
    TeamComponent,
    PartnersComponent,
    FaqsComponent,
    ContactComponent,
    SubscribeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CryptoFieldRoutingModule
  ]
})
export class CryptoFieldModule { }
