import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let options = {
       strings: ["WELCOME TO HIEN STEVE'S UNIVERSE","HAPPY TO SEE YOU HERE!","FEEL FREE TO EXPLORE MY SPACE"],
       typeSpeed: 60,
       backSpeed: -50,
       showCursor: true,
       cursorChar: "|",
       loop:true
    }

    let typed = new Typed(".typing-element", options);
 }


}
