import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import { ResultSinglePageComponent } from './components/result-single-page/result-single-page.component';
import { TestResultComponent } from './components/test-result/test-result.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  declarations: [
    AppComponent,
    ResultSinglePageComponent,
    TestResultComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
