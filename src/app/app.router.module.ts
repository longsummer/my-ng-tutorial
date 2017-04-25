import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'monitorinfo', loadChildren: 'app/monitorinfo/monitorinfo.module#MonitorInfoModule'},
  {path: 'systemconfig', loadChildren: 'app/system-config/system-config.module#SystemConfigModule'}
];

@NgModule({
  imports: [  RouterModule.forRoot(routes) ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  exports: [ RouterModule ]
})
export class AppRouterModule { }
