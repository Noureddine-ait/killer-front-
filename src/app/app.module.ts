import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import { CourriesComponent } from './view/courries/courries.component';
import { CourrierCreateComponent } from './view/courries/courrier-create/courrier-create.component';
import { CourrierEditComponent } from './view/courries/courrier-edit/courrier-edit.component';
import { CourrierListComponent } from './view/courries/courrier-list/courrier-list.component';
import { CourrierViewComponent } from './view/courries/courrier-view/courrier-view.component';
import { ConsignesComponent } from './view/consignes/consignes.component';
import { ConsigneCreateComponent } from './view/consignes/consigne-create/consigne-create.component';
import { ConsigneEditComponent } from './view/consignes/consigne-edit/consigne-edit.component';
import { ConsigneListComponent } from './view/consignes/consigne-list/consigne-list.component';
import { ConsigneViewComponent } from './view/consignes/consigne-view/consigne-view.component';
import { TraitementsComponent } from './view/traitements/traitements.component';
import { TraitementCreateComponent } from './view/traitements/traitement-create/traitement-create.component';
import { TraitementEditComponent } from './view/traitements/traitement-edit/traitement-edit.component';
import { TraitementListComponent } from './view/traitements/traitement-list/traitement-list.component';
import { TraitementViewComponent } from './view/traitements/traitement-view/traitement-view.component';
import { ServicestraitantsComponent } from './view/servicestraitants/servicestraitants.component';
import { ServicetraitantCreateComponent } from './view/servicestraitants/servicetraitant-create/servicetraitant-create.component';
import { ServicetraitantEditComponent } from './view/servicestraitants/servicetraitant-edit/servicetraitant-edit.component';
import { ServicetraitantListComponent } from './view/servicestraitants/servicetraitant-list/servicetraitant-list.component';
import { ServicetraitantViewComponent } from './view/servicestraitants/servicetraitant-view/servicetraitant-view.component';
import { MenuComponent } from './view/menu/menu.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    CourriesComponent,
    CourrierCreateComponent,
    CourrierEditComponent,
    CourrierListComponent,
    CourrierViewComponent,
    ConsignesComponent,
    ConsigneCreateComponent,
    ConsigneEditComponent,
    ConsigneListComponent,
    ConsigneViewComponent,
    TraitementsComponent,
    TraitementCreateComponent,
    TraitementEditComponent,
    TraitementListComponent,
    TraitementViewComponent,
    ServicestraitantsComponent,
    ServicetraitantCreateComponent,
    ServicetraitantEditComponent,
    ServicetraitantListComponent,
    ServicetraitantViewComponent,
    MenuComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DialogModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
