import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit(): void {
    console.log('AppComponent ngOnInit')
  }

}
