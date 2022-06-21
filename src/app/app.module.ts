import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoCardComponent } from './alumno-card/alumno-card.component';
import { AsideComponent } from './aside/aside.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoCardComponent,
    AsideComponent,
    NavComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
