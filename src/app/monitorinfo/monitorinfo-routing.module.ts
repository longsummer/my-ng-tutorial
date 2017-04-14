import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WarningInfoComponent } from './warning-info/warning-info.component';
import { EventInfoComponent } from './event-info/event-info.component';

@NgModule({
    imports: [RouterModule.forChild([
        {path: '', redirectTo: 'warninginfo', pathMatch: 'full'},
        {path: 'warninginfo', component: WarningInfoComponent},
        {path: 'eventInfo', component: EventInfoComponent}
    ])],
    exports: [RouterModule]
})
export class MonitorInfoRoutingModule {}

