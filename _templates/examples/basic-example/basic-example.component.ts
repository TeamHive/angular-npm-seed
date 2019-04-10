import { Component } from '@angular/core';
import { Sample } from '../../models/sample.interface';

@Component({
  selector: 'app-basic-example',
  templateUrl: 'basic-example.component.html',
  styleUrls: ['basic-example.component.scss']
})
export class BasicExampleComponent {
    readonly data: Sample = {
        name: 'Basic Example',
        otherProperty: 'this is another thing'
    }
}
