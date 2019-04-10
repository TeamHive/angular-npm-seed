import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = environment.packageName;
  npmLocation = `https://www.npmjs.com/package/${environment.npmScope}/${environment.packageName}`;
  githubLocation = `https://github.com/${environment.githubScope}/${environment.packageName}`;

  navItems: any[] = [{
    title: 'Basic',
    location: '/basic'
  }];
}
