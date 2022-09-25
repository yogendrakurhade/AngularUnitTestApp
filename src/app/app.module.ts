import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HighlightTextPipe } from './pipes/highlight-text.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListInterceptorService } from './mocks/user-list-interceptor.service';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HighlightTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UserListInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
