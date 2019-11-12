import { Component } from '@angular/core';
import { ProjectEulerService } from './services/projecteuler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project Euler';
  baseUrl = 'https://localhost:44346/api/euler';
  fakeArray = new Array(12);

  /**
   *
   */
  constructor(private _projectEulerService: ProjectEulerService) {
  }
}
