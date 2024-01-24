import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component.js';
import { OtherpageComponent } from './otherpage/otherpage.component.js';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'other', component: OtherpageComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

export const routing = RouterModule.forRoot(routes);
