import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block',
  inputs: ['title'],
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
