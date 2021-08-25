import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { SubjectsComponent } from './Components/subjects/subjects.component';
import { TimeTableComponent } from './Components/time-table/time-table.component';
import { HomeComponent } from './Components/home/home.component';
import { BreadcrumbComponent } from './Components/breadcrumb/breadcrumb.component';
import { RealAnalysisComponent } from './Components/subjects/real-analysis/real-analysis.component';
import { ProbabilityComponent } from './Components/subjects/probability/probability.component';
import { DifferentialEquationsComponent } from './Components/subjects/differential-equations/differential-equations.component';
import { DataStructuresComponent } from './Components/subjects/data-structures/data-structures.component';
import { ComputerProgrammingComponent } from './Components/subjects/computer-programming/computer-programming.component';
import { DBMSComponent } from './Components/subjects/dbms/dbms.component';
import { LinearAlgebraComponent } from './Components/subjects/linear-algebra/linear-algebra.component';
import { AbstractAlgebraComponent } from './Components/subjects/abstract-algebra/abstract-algebra.component';
import { ParallelComputingComponent } from './Components/subjects/parallel-computing/parallel-computing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    SubjectsComponent,
    TimeTableComponent,
    HomeComponent,
    BreadcrumbComponent,
    RealAnalysisComponent,
    ProbabilityComponent,
    DifferentialEquationsComponent,
    DataStructuresComponent,
    ComputerProgrammingComponent,
    DBMSComponent,
    LinearAlgebraComponent,
    AbstractAlgebraComponent,
    ParallelComputingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
