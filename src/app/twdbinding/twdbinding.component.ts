import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twdbinding',
  template: `
    <h3>
      Two Way Data-Binding
    </h3>
    <input [(ngModel)]= data type="text">
    <div class="output">
      <h4>{{data}}</h4>
    </div>
  `,
  styles: [`
    h3{
      font-family: serif;
      color:green;
      text-align: center;
  }
  .output{
    text-align: center;
    color:red;
    text-transform: uppercase;
  }
    
  `]
})
export class TwdbindingComponent implements OnInit {

  public data="";
  constructor() { }

  ngOnInit(): void {
  }

}
