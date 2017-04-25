import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block',
  // inputs: ['title'],
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
