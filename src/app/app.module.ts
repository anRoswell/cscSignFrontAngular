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
import { SettingsModule } from './pages/admin/settings/settings.module';
import { StatisticsModule } from './pages/admin/statistics/statistics.module';

import { ChartsModule } from 'ng2-charts';

import { DataTablesModule } from 'angular-datatables';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DatatableComponent } from './commons/datatable/datatable.component';

import { ListComponent } from './pages/admin/patients/list/list.component';
import { FormComponent } from './pages/admin/patients/form/form.component';
import { HistoryComponent } from './pages/admin/patients/history/history.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProfesionalsModule } from './pages/admin/operaciones/profesionals.module';

const config: SocketIoConfig = {
  url: 'http://localhost:3000/',
  options: {},
};

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
    DatatableComponent,
    ListComponent,
    FormComponent,
    HistoryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SettingsModule,
    ReportModule,
    StatisticsModule,
    ChartsModule,
    DataTablesModule,
    NgbModule,
    SweetAlert2Module.forRoot(),
    SocketIoModule.forRoot(config),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    ProfesionalsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
