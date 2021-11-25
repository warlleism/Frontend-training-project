import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NerdcastComponent } from './nerdcast/nerdcast.component';
import { NerdofficeComponent } from './nerdoffice/nerdoffice.component';
import { NerdPlayerComponent } from './nerdplayer/nerd-player.component';

const routes: Routes = [
  {
    path: 'nerdCast',
    component: NerdcastComponent,
  },
  {
    path: 'nerdOffcer',
    component: NerdofficeComponent,
  },
  {
    path: 'nerdPlayer',
    component: NerdPlayerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderRoutingModule {}
