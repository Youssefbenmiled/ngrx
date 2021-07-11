import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainesListComponent } from './domaines-list/domaines-list.component';
import { DomainesFormComponent } from './domaines-form/domaines-form.component';
import { RouterModule, Routes } from '@angular/router';
import { NgrxAutoEntityModule } from '@briebug/ngrx-auto-entity';
import { StoreModule } from '@ngrx/store';
import {  domaineReducer, DOMAINE_CONST } from './domaine.state';
import { Domaine } from './domaine.model';
import { DomaineEntityService } from './domaine.service';
import { DomaineFacade } from './domaine.facade';

const routes:Routes=[
  {
    path:'',
    component:DomainesListComponent
  }
]


@NgModule({
  declarations: [DomainesListComponent, DomainesFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    StoreModule.forFeature(DOMAINE_CONST,domaineReducer),
    NgrxAutoEntityModule.forFeature(),
  ],
  providers:[
    {provide:Domaine,useClass:DomaineEntityService},
    DomaineEntityService,
    DomaineFacade
  ]
})
export class DomaineModule { }
