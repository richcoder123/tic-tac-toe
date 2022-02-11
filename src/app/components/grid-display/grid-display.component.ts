import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-display',
  templateUrl: './grid-display.component.html',
  styleUrls: ['./grid-display.component.css']
})
export class GridDisplayComponent implements OnInit {

  noOfBlocks = 9;

  constructor() { }

  ngOnInit(): void {
  }

}
