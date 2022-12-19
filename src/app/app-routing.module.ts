import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainViewComponent} from "./pages/main-view/main-view.component";
import {AddMeasureComponent} from "./pages/add-measure/add-measure.component";

const routes: Routes = [
  { path: '', component: MainViewComponent },
  { path: 'add', component: AddMeasureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
