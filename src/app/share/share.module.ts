import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { IterateObjectPipe } from './iterateObject.pipe';
import { DropdownMenuComponent } from './downdown-menu/dropdown-menu.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot()
  ],
  declarations: [ IterateObjectPipe, DropdownMenuComponent],
  exports: [ IterateObjectPipe, DropdownMenuComponent]
})
export class ShareModule { }
