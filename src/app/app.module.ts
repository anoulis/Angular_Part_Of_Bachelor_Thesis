import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { ResultsComponent } from './results/results.component';
import { ResultsListComponent } from './results/results-list/results-list.component';
import { ResultItemComponent } from './results/results-list/result-item/result-item.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ServerService } from './server.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InputFieldComponent,
    ResultsComponent,
    ResultsListComponent,
    ResultItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
