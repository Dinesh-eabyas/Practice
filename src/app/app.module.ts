import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TwdbindingComponent } from './twdbinding/twdbinding.component';
import { FormsModule } from '@angular/forms';
import { StructuralIfComponent } from './structural-if/structural-if.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TwdbindingComponent,
    StructuralIfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
