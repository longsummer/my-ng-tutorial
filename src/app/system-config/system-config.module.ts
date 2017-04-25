import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SystemConfigRoutingModule } from './system-config-routing.module';
import { SmtpComponent } from './smtp/smtp.component';
import { SystemConfigComponent } from './system-config/system-config.component';
import { BalanceComponent } from './balance/balance.component';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    SystemConfigRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [SmtpComponent, SystemConfigComponent, BalanceComponent]
})
export class SystemConfigModule { }
