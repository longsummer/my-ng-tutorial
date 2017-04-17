import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WarningInfoComponent } from './warning-info/warning-info.component';
import { EventInfoComponent } from './event-info/event-info.component';
import { MonitorInfoComponent } from './monitorinfo.component';

@NgModule({
    imports: [RouterModule.forChild([
        {path: '', component: MonitorInfoComponent,
        children: [
            {path: '', redirectTo: 'warninginfo', pathMatch: 'full'},
            {path: 'warninginfo', component: WarningInfoComponent},
            {path: 'eventinfo', component: EventInfoComponent}
        ]},
    ])],
    exports: [RouterModule]
})
export class MonitorInfoRoutingModule {}

