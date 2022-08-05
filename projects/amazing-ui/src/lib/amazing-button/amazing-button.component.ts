import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-amazing-button',
  templateUrl: './amazing-button.component.html',
  styleUrls: ['./amazing-button.component.scss']
})
export class AmazingButtonComponent implements OnInit {
  @Input() title = "I'm a button";
  constructor() { }

  ngOnInit() {
  }

}
