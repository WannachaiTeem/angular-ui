import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card'; //กาด
import {MatButtonModule} from '@angular/material/button'; // ปุ่ม
import {MatIconModule} from '@angular/material/icon'; // ไอคอน
import {MatFormFieldModule} from '@angular/material/form-field'; //ฟอร์ม
import {MatInputModule} from '@angular/material/input'; //อินพุต

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule, //กาด
    MatButtonModule, // ปุ่ม
    MatIconModule, // ไอคอน
    MatFormFieldModule, //ฟอร์ม
    MatInputModule //อินพุต
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
