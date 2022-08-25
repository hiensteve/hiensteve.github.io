import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
