import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
      <h2> i am a {{title}}</h2>
      <h2 *ngIf="initial; else foo">this ngif</h2>
      <ng-template #foo>
      <h2>this is hidden!</h2>
      </ng-template>
      `,
  styles: [
    `
    .text-success{
      color:green;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-style:italic;
    }
    `
    ]
})
export class TestComponent implements OnInit {
public name="maina"
public siteUrl=window.location.href
public isDisabled=true;
public classSuccess="text-success";
public hasError=true;
public isspecial=true;
public color="red";
public greeting ="";
public initial=false;
public message={
  "text-success":!this.hasError,
  "text-danger":this.hasError,
  "text-special":this.isspecial
}
public stylek={
  color:"blue",
  fontStyle:"italic"
}
  constructor() { }

  ngOnInit() {
  }
  greetUser(){
    return "hello" + this.name;
  }
  onClick(event){
    console.log(event)

  }
  log(value){
    console.log(value)
  }
}
