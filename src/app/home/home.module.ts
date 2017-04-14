import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { BlockComponent } from './block/block.component';

import { ApiServiceInjectables } from '../service/api.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [HomeRoutingModule, NgbModule.forRoot()],
    declarations: [ HomeComponent, BlockComponent ],
    providers: [ApiServiceInjectables],
})
export class HomeModule {}
