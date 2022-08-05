import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageTitle = "welcome to the amazing web"
  changeTitle(){
    this.pageTitle = "Yeahhh";
  }

}
