import { Component, OnInit } from '@angular/core';
import{AfterViewInit} from '@angular/core';
import Typewriter from 't-writer.js';
import{ViewChild} from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';
}
