import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
<<<<<<< HEAD
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

=======
import {MatButtonModule} from '@angular/material/button';
>>>>>>> df84508d6edb98f03ce386c06436d9a0921fc28e

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
<<<<<<< HEAD
    MatSelectModule,FormsModule,ReactiveFormsModule,HttpClientModule
=======
    MatSelectModule,
    MatButtonModule
>>>>>>> df84508d6edb98f03ce386c06436d9a0921fc28e
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
