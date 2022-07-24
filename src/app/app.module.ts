import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Interceptors
import { TokenInterceptor } from './interceptors/token.interceptor';
import { LoadingInterceptor } from './interceptors/loading.interceptor';

// Componentes comunes
import { NavbarComponent } from './commons/navbar/navbar.component';
import { LoadingComponent } from './commons/loading/loading.component';

// Componentes
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ErrorComponent } from './pages/error/error.component';
import { MessageComponent } from './commons/message/message.component';
import { FooterComponent } from './commons/footer/footer.component';

// Modulos
import { ReportModule } from './pages/admin/report/report.module';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

// Ngx Modal
import { ModalModule } from 'ngx-bootstrap/modal';

import { ProfesionalsModule } from './pages/admin/operaciones/profesionals.module';
import { ParametrosModule } from './pages/admin/parametros/parametros.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    NavbarComponent,
    ErrorComponent,
    LoadingComponent,
    FooterComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ReportModule,
    SweetAlert2Module.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    ProfesionalsModule,
    ParametrosModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
