import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { SearchInputComponent } from './search-input/search-input.component';
import { UserContentComponent } from './user-content/user-content.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    UserContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
