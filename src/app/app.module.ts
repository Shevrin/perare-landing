import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './landing/header/header.component';
import { FooterComponent } from './landing/footer/footer.component';
import { WelcomeComponent } from './landing/welcome/welcome.component';
import { PartnersComponent } from './landing/partners/partners.component';
import { IndustriesComponent } from './landing/industries/industries.component';
import { IndustriesBodyItemComponent } from './landing/industries-body-item/industries-body-item.component';
import { TesterComponent } from './landing/tester/tester.component';
import { FeaturesComponent } from './landing/features/features.component';
import { ReviewsComponent } from './landing/reviews/reviews.component';
import { CallComponent } from './landing/call/call.component';
import { IndustriesBodyHeaderComponent } from './landing/industries-body-header/industries-body-header.component';
import { CounterComponent } from './landing/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    PartnersComponent,
    IndustriesComponent,
    IndustriesBodyItemComponent,
    IndustriesBodyHeaderComponent,
    TesterComponent,
    FeaturesComponent,
    ReviewsComponent,
    CallComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
