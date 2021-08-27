import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {



  @Input() myinput!: string[];
  constructor() { }

  ngOnInit(): void {

    console.warn(this.myinput[1]);
  }

}
