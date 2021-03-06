import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import {StoreModule} from '@ngrx/store'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './store/store';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { EffectsModule } from "@ngrx/effects";
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { NgrxAutoEntityModule } from '@briebug/ngrx-auto-entity';
import { AuthGuard } from './auth-guard/auth.guard';
import { ChatApp1Component } from './about-chat/chat-app1/chat-app1.component';
import { RoomComponent } from './about-chat/room/room.component';
import { SocketComponent } from './about-chat/socket/socket.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SocketComponent,
    ChatApp1Component,
    RoomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument(),
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: false,
      },
    }),
    // StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    NgrxAutoEntityModule.forRoot(),
    NgbModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
