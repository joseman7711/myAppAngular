import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { StudentsComponent } from './components/students/students.component';
import { HomeComponent } from './components/home/home.component';
import { MenuNavegacionComponent } from './components/menu-navegacion/menu-navegacion.component';
import { appRouting } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavegacionComponent,
    AboutComponent,
    StudentsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
