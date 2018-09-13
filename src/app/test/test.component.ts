import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl:'./test.component.html',
  styleUrls: ['./test.component.css']
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
