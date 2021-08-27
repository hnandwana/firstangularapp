import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subss',
  templateUrl: './subss.component.html',
  styleUrls: ['./subss.component.scss']
})
export class SubssComponent implements OnInit 
{
  
  rows = [
    {
      "ID" : "1",
      "Course" : "Absract Algebra",
      "Root": "/abstract",
    },
    {
      "ID" : "2",
      "Course" : "Computer Programming",
      "Root": "/cpp",
 
    }, 
     {
      "ID" : "3",
      "Course" : "Data Structures",
      "Root": "/data",
    }, 
    {
     "ID" : "4",
     "Course" : "DBMS",
     "Root": "/dbms",

   }, 
   {
    "ID" : "5",
    "Course" : "Differential Equations",
    "Root": "/diff",
  }, 
  {
   "ID" : "6",
   "Course" : "Linear Algebra",
   "Root": "/linear",
 }, 
 {
  "ID" : "7",
  "Course" : "Parallel Computing",
  "Root": "/parallel",
}, 
{
 "ID" : "8",
 "Course" : "Probability",
 "Root": "/prob",
}, 
{
 "ID" : "9",
 "Course" : "Real Analysis",
 "Root": "/real",
}


  ]

 
  constructor() { }

  ngOnInit(): void {
  }

}
