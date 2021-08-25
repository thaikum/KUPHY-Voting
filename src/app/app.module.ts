import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrialpageComponent } from './components/trialpage/trialpage.component';
import { AngularFireModule } from '@angular/fire';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { VoteComponent } from './components/vote/vote.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AddAspirantsComponent } from './components/add-aspirants/add-aspirants.component';
import { AddPositionComponent } from './components/add-position/add-position.component';
import { MatRadioModule } from '@angular/material/radio';
import { VerifyVoterComponent } from './components/verify-voter/verify-voter.component';
import { MatCardModule } from '@angular/material/card';
import { AdminComponent } from './components/admin/admin.component';
import { MatSelectModule } from '@angular/material/select';

const firebaseConfig = {
  apiKey: 'AIzaSyDfPPjgUR_6C9B7ro_q8Er9lOc7YqcsIgE',
  authDomain: 'kuphy-voting.firebaseapp.com',
  projectId: 'kuphy-voting',
  storageBucket: 'kuphy-voting.appspot.com',
  messagingSenderId: '95416969555',
  appId: '1:95416969555:web:28ce810f9a338d312099a6',
};

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    TrialpageComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    VoteComponent,
    AddAspirantsComponent,
    AddPositionComponent,
    VerifyVoterComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCardModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
//@ts-ignore
export class AppModule {}
