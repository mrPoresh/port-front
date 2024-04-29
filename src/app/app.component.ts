import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  isDarkMode = false;

  constructor(private renderer: Renderer2) {
    
  }

  ngOnInit(): void {
    console.log('AppComponent ngOnInit')
  }

}
