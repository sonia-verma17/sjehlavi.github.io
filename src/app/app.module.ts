import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'; 

import { AppComponent } from './app.component';
import { EditTableComponent } from './edit-table/edit-table.component';

@NgModule({
  declarations: [
    AppComponent,
    EditTableComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  entryComponents: [
    EditTableComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
