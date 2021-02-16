import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnvoiComponent } from './envoi/envoi.component';

const routes: Routes = [

  {path: "envoi", component : EnvoiComponent},
  {path: "list", component : ListComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
