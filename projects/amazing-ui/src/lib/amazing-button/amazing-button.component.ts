import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


export enum ButtonSize {
  small = "small",
  medium = "medium",
  large = "large"
}
export interface IButtonConfig {
  title: string;
  color: string;
  background: string;
  size: ButtonSize;
}
@Component({
  selector: 'app-amazing-button',
  templateUrl: './amazing-button.component.html',
  styleUrls: ['./amazing-button.component.scss']
})
export class AmazingButtonComponent implements OnInit {
  @Output() changed = new EventEmitter<string>();
  @Input() config!: IButtonConfig;
  constructor() { }

  ngOnInit() {
  }

}
