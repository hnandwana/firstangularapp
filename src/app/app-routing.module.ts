import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AbstractAlgebraComponent } from './Components/subjects/abstract-algebra/abstract-algebra.component';
import { ComputerProgrammingComponent } from './Components/subjects/computer-programming/computer-programming.component';
import { DataStructuresComponent } from './Components/subjects/data-structures/data-structures.component';
import { DBMSComponent } from './Components/subjects/dbms/dbms.component';
import { DifferentialEquationsComponent } from './Components/subjects/differential-equations/differential-equations.component';
import { LinearAlgebraComponent } from './Components/subjects/linear-algebra/linear-algebra.component';
import { ParallelComputingComponent } from './Components/subjects/parallel-computing/parallel-computing.component';
import { ProbabilityComponent } from './Components/subjects/probability/probability.component';
import { RealAnalysisComponent } from './Components/subjects/real-analysis/real-analysis.component';
import { SubjectsComponent } from './Components/subjects/subjects.component';
import { TimeTableComponent } from './Components/time-table/time-table.component';



const routes: Routes = [


 {path: 'Subjects', component: SubjectsComponent},  
 {path: 'abstract', component: AbstractAlgebraComponent},
 {path: 'cpp', component: ComputerProgrammingComponent},
 {path: 'prob', component: ProbabilityComponent},
 {path: 'diff', component: DifferentialEquationsComponent},
 {path: 'dbms', component: DBMSComponent},
 {path: 'real', component: RealAnalysisComponent},
 {path: 'parallel', component: ParallelComputingComponent},
 {path: 'linear', component: LinearAlgebraComponent},
 {path: 'data', component: DataStructuresComponent},
  {path: 'TimeTable', component: TimeTableComponent},
  {path: 'Home', component: HomeComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
