import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { ShareModule } from './share/share.module';

import { AppRouterModule } from './app.router.module';
import { HomeModule } from './home/home.module';
import { MonitorInfoModule } from './monitorinfo/monitorinfo.module';
import { SystemConfigModule } from './system-config/system-config.module';
import { TableModule } from './table/table.module';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule,
    HomeModule,
    MonitorInfoModule,
    SystemConfigModule,
    TableModule,
    ShareModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
