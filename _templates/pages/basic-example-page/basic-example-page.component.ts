import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-example-page',
  templateUrl: 'basic-example-page.component.html'
})
export class BasicExamplePageComponent {

  readonly source = {
    html: require(`!!raw-loader?lang=html!../../examples/basic-example/basic-example.component.html`),
    css: require(`!!raw-loader?lang=css!../../examples/basic-example/basic-example.component.scss`),
    ts: require(`!!raw-loader?lang=typescript!../../examples/basic-example/basic-example.component.ts`)
  }

  otherFiles: { name: string; language: string; content: string }[] = [
    {
      name: 'sample.interface.ts',
      language: 'javascript',
      content: require('!!raw-loader?lang=typescript!../../models/sample.interface.ts')
    }
  ];
}
