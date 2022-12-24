import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // list = [];

  constructor() { }

  async ngOnInit(): Promise<void> {
    // const res = this.listService.list().subscribe((list) => {
    //   console.log(list.toString);
    //   console.log(list);
    //   this.list = list;
    // });
    // this.list = res;
    // console.log(this.list);
  }

}
