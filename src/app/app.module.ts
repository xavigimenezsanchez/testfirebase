import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  ReactiveFormsModule  } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from './environment';
import { AppComponent } from './app.component';
import { PolicyService } from '../policy.service';
import { HelloComponent } from './hello.component';
import { PolicyListComponent } from './policy-list/policy-list.component';
import { PolicyAddComponent } from './policy-add/policy-add.component';

@NgModule({
  imports:      [ BrowserModule,
                   ReactiveFormsModule , 
                  AngularFireModule.initializeApp(environment.firebase),
 	                AngularFirestoreModule, ],
  declarations: [ AppComponent, HelloComponent, PolicyListComponent, PolicyAddComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PolicyService]
})
export class AppModule { }
