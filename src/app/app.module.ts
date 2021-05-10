import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//components
import { OrganismsModule } from './components/organisms/organisms.module'
import { MainPageComponent } from './components/pages/main/main.component';

//pages

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrganismsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
