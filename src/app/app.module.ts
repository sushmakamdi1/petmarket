import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginInPipe } from './app/auth-screens/auto-screen/login-in.pipe';
import { SignUpPipe } from './app/auth-screens/auto-screen/sign-up.pipe';

@NgModule({
  declarations: [AppComponent, LoginInPipe, SignUpPipe],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
