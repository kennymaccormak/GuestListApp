import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuestsTableComponent } from './guests-table/guests-table.component';
import { GuestsEditorComponent } from './guests-editor/guests-editor.component';
import { GuestsBoardComponent } from './guests-board/guests-board.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    DashboardComponent,
    GuestsTableComponent,
    GuestsEditorComponent,
    GuestsBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
