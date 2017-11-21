import { Component, Inject } from '@angular/core';
import { OverlayContainer } from '@angular/material';
import { environment } from '../environments/environment';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  darkTheme = false;
  squareState: string;
  constructor(private oc: OverlayContainer, @Inject('BASE_CONFIG') config) {
    console.log(config);
  }
  switchTheme(dark) {
    this.darkTheme = dark;
    this.oc.themeClass = dark ? 'myapp-dark-theme' : null;
  }

}


