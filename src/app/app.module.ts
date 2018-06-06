import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { ResultsComponent} from './input-field/results/results.component';
import { HeaderComponent} from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ServerService } from './server.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InputFieldComponent,
    ResultsComponent,
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
