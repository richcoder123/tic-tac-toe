import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridDisplayComponent } from './components/grid-display/grid-display.component';
import { AvailableOptionsComponent } from './components/available-options/available-options.component';
import { RouterModule, Routes } from '@angular/router';
import { GridUpdateComponent } from './components/grid-update/grid-update.component';

const appRoutes: Routes = [
  { path: 'random-game', component: GridDisplayComponent },
  { path: 'against-aman', component: GridDisplayComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GridDisplayComponent,
    AvailableOptionsComponent,
    GridUpdateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
