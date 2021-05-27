import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResultSinglePageComponent} from './components/result-single-page/result-single-page.component';
import {TestResultComponent} from './components/test-result/test-result.component';
import {QuestionStatsComponent} from './components/question-stats/question-stats.component';

const routes: Routes = [
  { path: '', component: TestResultComponent },
  { path: 'test-result/:id', component: ResultSinglePageComponent },
  { path: 'question-stats', component: QuestionStatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
