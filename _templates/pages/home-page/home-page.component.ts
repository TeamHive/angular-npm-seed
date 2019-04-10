import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: 'home-page.component.html'
})
export class HomePageComponent {
  readme: string;

  constructor() {
    const readmeText: string = require('!!raw-loader?lang=markdown!../../../../../../README.md');

    this.readme = readmeText.substr(readmeText.indexOf('<!-- header-chop -->')).replace(/```typescript/g, '```javascript');
  }
}
