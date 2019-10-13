import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import {RouterModule, Routes} from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { CreateCharacterComponent } from './create-character/create-character.component';

const appRoutes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'character-list', component: CharacterListComponent},
  {path: 'create-character', component: CreateCharacterComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignupComponent,
    CharacterListComponent,
    CreateCharacterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
