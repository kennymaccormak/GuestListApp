import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { GuestsTableComponent } from './guests-table/guests-table.component';
import { GuestsEditorComponent } from './guests-editor/guests-editor.component';
import { GuestsBoardComponent } from './guests-board/guests-board.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'dashboard/guest-table',
    component: GuestsTableComponent
  },
  {
    path: 'dashboard/guest-editor',
    component: GuestsEditorComponent
  },
  {
    path: 'dashboard/guest-board',
    component: GuestsBoardComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
