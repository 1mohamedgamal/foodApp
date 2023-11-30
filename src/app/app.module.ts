import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalInterceptor } from './interceptors/global.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { SheardModule } from './sheard/sheard.module';
import { NgxSpinnerModule } from 'ngx-spinner';

import {AppAuthGuard} from './sheard/auth.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule,
    // SpinnerComponent,
    SheardModule,
    ToastrModule.forRoot({
      closeButton: true,
    }),
    NgxSpinnerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },AppAuthGuard

   
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
