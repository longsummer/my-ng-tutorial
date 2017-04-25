import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { MonitorInfoRoutingModule } from './monitorinfo-routing.module';
import { TableModule } from '../table/table.module';

import { WarningInfoComponent } from './warning-info/warning-info.component';
import { EventInfoComponent } from './event-info/event-info.component';
import { MonitorInfoComponent } from './monitorinfo.component';

import { ApiServiceInjectables } from '../service/api.service';

@NgModule({
    imports: [
        CommonModule,
        MonitorInfoRoutingModule,
        TableModule,
        NgbModule
    ],
    declarations: [ WarningInfoComponent, EventInfoComponent, MonitorInfoComponent ],
    providers: [ ApiServiceInjectables ]
})
export class MonitorInfoModule {}
