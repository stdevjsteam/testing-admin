import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResultSinglePageComponent} from './components/result-single-page/result-single-page.component';
import {TestResultComponent} from './components/test-result/test-result.component';

const routes: Routes = [
  { path: '', component: TestResultComponent },
  { path: 'test-result/:id', component: ResultSinglePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
