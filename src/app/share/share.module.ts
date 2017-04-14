import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IterateObjectPipe } from './iterateObject.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ IterateObjectPipe ],
  exports: [ IterateObjectPipe ]
})
export class ShareModule { }
