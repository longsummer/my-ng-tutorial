import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';

import { SimpleTableComponent } from './simple-table/simple-table.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    ShareModule
  ],
  declarations: [SimpleTableComponent],
  exports: [ SimpleTableComponent ]
})
export class TableModule { }
