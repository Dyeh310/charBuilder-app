import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import {RouterModule, Routes} from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { SelectedCharacterComponent } from './selected-character/selected-character.component';
import { EditCharacterComponent } from './edit-character/edit-character.component';
import { NoComponentFoundComponent } from './no-component-found/no-component-found.component';
import { AccountConfirmationComponent } from './account-confirmation/account-confirmation.component';
import { CharacterConfirmationComponent } from './character-confirmation/character-confirmation.component';


const appRoutes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'account-confirmation', component: AccountConfirmationComponent},
  {path: 'character-list', component: CharacterListComponent},
  {path: 'create-character', component: CreateCharacterComponent},
  {path: 'character-confirmation', component: CharacterConfirmationComponent},
  {path: 'edit-character/:id', component: EditCharacterComponent},
  {path: 'selected-character/:id', component: SelectedCharacterComponent},
  {path: '**', component: NoComponentFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignupComponent,
    CharacterListComponent,
    CreateCharacterComponent,
    SelectedCharacterComponent,
    EditCharacterComponent,
    NoComponentFoundComponent,
    AccountConfirmationComponent,
    CharacterConfirmationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
