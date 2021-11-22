import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NerdcastComponent } from './nerdcast/nerdcast.component';

const routes: Routes = [
  {
    path: 'nerdCast',
    component: NerdcastComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderRoutingModule {}
