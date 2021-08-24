import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrialpageComponent } from './components/trialpage/trialpage.component';
import { AngularFireModule } from '@angular/fire';

const firebaseConfig = {
  apiKey: 'AIzaSyDfPPjgUR_6C9B7ro_q8Er9lOc7YqcsIgE',
  authDomain: 'kuphy-voting.firebaseapp.com',
  projectId: 'kuphy-voting',
  storageBucket: 'kuphy-voting.appspot.com',
  messagingSenderId: '95416969555',
  appId: '1:95416969555:web:28ce810f9a338d312099a6',
};

@NgModule({
  declarations: [AppComponent, TrialpageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
