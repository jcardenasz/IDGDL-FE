import { Component } from '@angular/core';
import { Jumbotron } from '../../components/jumbotron/jumbotron';
import { Map } from '../../components/map/map';

@Component({
  selector: 'app-home-component',
  imports: [Jumbotron, Map],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {
  constructor() {
  }
}
