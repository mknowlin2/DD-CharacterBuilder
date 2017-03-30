import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CharacterComponent } from './character/character.component';

const DD_ROUTES: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'characters', loadChildren: 'app/character/character.module#CharacterModule'}
];

export const routing = RouterModule.forRoot(DD_ROUTES);
