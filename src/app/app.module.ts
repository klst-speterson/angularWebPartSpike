import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MegaMenu } from './mm';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    NgbModule.forRoot(),
    BrowserModule
  ],
  declarations: [
    AppComponent, MegaMenu
  ],
  bootstrap: [ MegaMenu ]
})
//  bootstrap: [ AppComponent, MegaMenu ]
export class AppModule { }
