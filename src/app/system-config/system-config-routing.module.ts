import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SystemConfigComponent } from './system-config/system-config.component';
import { BalanceComponent } from './balance/balance.component';
import { SmtpComponent } from './smtp/smtp.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '', component: SystemConfigComponent,
            children: [
                {path: '', redirectTo: 'smtp', pathMatch: 'full'},
                {path: 'smtp', component: SmtpComponent},
                {path: 'balance', component: BalanceComponent}
            ]
        }
    ])],
    exports: [RouterModule]
})
export class SystemConfigRoutingModule {}
