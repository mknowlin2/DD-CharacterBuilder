import { Routes, RouterModule } from '@angular/router';

import { CharacterComponent } from './character.component';
import { CharacterHomeComponent } from './character-home.component';
import { CharacterBuilderComponent } from './character-builder/character-builder.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';

const CHARACTER_ROUTES: Routes = [
  { path: '', component: CharacterComponent, children: [
    {path: '', component: CharacterHomeComponent},
    {path: 'details', component: CharacterDetailsComponent},
    {path: 'build', component: CharacterBuilderComponent}
  ]}
];

export const characterRouting = RouterModule.forChild(CHARACTER_ROUTES);
