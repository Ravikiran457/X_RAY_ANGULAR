import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestCasesRecordComponent } from './test-cases-record/test-cases-record.component';
import { TestCasesTableComponent } from './test-cases-table/test-cases-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TestCasesRecordComponent,
    TestCasesTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
