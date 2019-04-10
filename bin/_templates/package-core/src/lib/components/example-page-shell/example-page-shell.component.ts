import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example-page-shell',
  templateUrl: 'example-page-shell.component.html',
  styleUrls: ['example-page-shell.component.scss']
})
export class ExamplePageShellComponent {

  @Input() exampleTitle = 'Example';
  @Input() exampleSources: { ts?: string; html?: string; css?: string; } = {};
  @Input() otherSources : { name: string; language: string; content: string }[] = [];

  constructor() { }


}
