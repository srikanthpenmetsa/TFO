import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'TFO';
  public currentProgress:string= "solution";

    nextClicked():void{
    
      if(this.currentProgress === "solution"){
      this.currentProgress = "environment";
    } else if(this.currentProgress === "environment"){
      this.currentProgress = "functional";
    }
  }
}
