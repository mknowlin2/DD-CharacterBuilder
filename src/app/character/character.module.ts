import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterComponent } from './character.component';
import { CharacterHomeComponent } from './character-home.component';
import { CharacterBuilderComponent } from './character-builder/character-builder.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListComponent } from './character-list/character-list.component';

import { characterRouting } from './character.routes';

@NgModule({
  imports: [
    CommonModule,
    characterRouting
  ],
  declarations: [
    CharacterComponent,
    CharacterHomeComponent,
    CharacterListComponent,
    CharacterBuilderComponent,
    CharacterDetailsComponent]
})
export class CharacterModule { }
