import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-if',
  template: `
  <div class="ngIf">
    <div class="ngIf-1">
      <h3  *ngIf="status">Welcome to {{ngIf}}</h3>
      <p>This is single line ngif</p> 
    </div> 
    <div class="ngIf-2">
      <h3  *ngIf="status_1;else elseBlock">This is True part</h3>
      <ng-template #elseBlock>
        <h3>This is False part</h3>
      </ng-template>
      <p>This is single template ngif</p> 
    </div>
    <div class="ngIf-3">
      <h3  *ngIf="status_2; then trueBlock else elseBlock"></h3>
      <ng-template #elseBlock>
        <h3>This is False part</h3>
      </ng-template>
      <ng-template #trueBlock>
        <h3>This is True part</h3>
      </ng-template>
      <p>This is multi template ngif</p> 
    </div>
  </div>  
  `,
  styles: [`
  .ngIf{
    border:2px solid black;
    margin:1% 25%;
    background-color:lightgreen;
  }
  .ngIf-1{
    border:2px solid red;
    margin:1% 25%;
    background-color:lightblue;
  }
  .ngIf-1 h3{
    text-align:center;
    color:red;
  }
  .ngIf-1 p{
    text-align:center;
    color:#7d04d4;
  }
  .ngIf-2{
    border:2px solid green;
    margin:1% 25%;
    background-color:#c3d404;
  }
  .ngIf-2 h3{
    text-align:center;
    color:green;
  }
  .ngIf-2 p{
    text-align:center;
    color:#7d04d4;
  }
  .ngIf-3{
    border:2px solid blue;
    margin:1% 25%;
    background-color:#eb7467;
  }
  .ngIf-3 h3{
    text-align:center;
    color:blue;
  }
  .ngIf-3 p{
    text-align:center;
    color:#7d04d4;
  }
  `
  ]
})
export class StructuralIfComponent implements OnInit {

  public status=true;
  public status_1=true;
  public status_2=false;
  public ngIf="Structural Direction";
  constructor() { }

  ngOnInit(): void {
  }

}
