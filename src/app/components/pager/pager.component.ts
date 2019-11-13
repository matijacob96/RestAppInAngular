import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {

  @Input() config: any = {};
  @Output() pageSelected: EventEmitter<number>;

  constructor() {
    this.pageSelected = new EventEmitter();
  }

  pages: any = [];

  ngOnInit() {
    this.pages =
      Array.from(Array(this.config.total_pages).keys()).map(i => 1 + i);
  }

  setPage(page: number){
    this.pageSelected.emit(page);
  }

}
