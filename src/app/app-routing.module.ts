import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CourrierListComponent} from "./view/courries/courrier-list/courrier-list.component";
import {ConsigneListComponent} from "./view/consignes/consigne-list/consigne-list.component";
import {TraitementListComponent} from "./view/traitements/traitement-list/traitement-list.component";
import {PageNotFoundComponent} from "./view/page-not-found/page-not-found.component";
import {ServicetraitantListComponent} from "./view/servicestraitants/servicetraitant-list/servicetraitant-list.component";
// tslint:disable-next-line:max-line-length
const routes: Routes = [
  {path: '', component: CourrierListComponent},
  {path: 'courrier', component: CourrierListComponent},
  {path: 'consigne', component: ConsigneListComponent},
  {path: 'traitement', component: TraitementListComponent},
  {path: 'service-traitant', component: ServicetraitantListComponent},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
