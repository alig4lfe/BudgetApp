import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  navigateHome(){
    this.router.navigateByUrl('/');
  }

}

@Component({
  selector: 'drop-down',
  templateUrl:'drop-down.html',
  styleUrls: ['./header.component.css']
})
export class DropDown implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  navigate(page:string){
    this.router.navigateByUrl(page);
  }

}
