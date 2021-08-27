import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abstract-algebra',
  templateUrl: './abstract-algebra.component.html',
  styleUrls: ['./abstract-algebra.component.scss']
})
export class AbstractAlgebraComponent implements OnInit {

  constructor() { }
 // subs: string[] = ['Absract Algebra', 'Computer Programming', 'Data Structures','DBMS','Differential Equations','Linear Algebra','Parallel Computing','Probability','Real Analysis']; 
  subj: string = "Absract Algebra"
  subs: string[] = ['Absract Algebra', 'Computer Programming', 'Data Structures','DBMS',
  'Differential Equations','Linear Algebra','Parallel Computing','Probability','Real Analysis'];

  ngOnInit(): void {
  }

}
