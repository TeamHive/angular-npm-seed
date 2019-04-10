# Contribution

## Running the example

```bash
npm start
```

## Adding an Example

* Open the demo web app folder
* In the pages folder, create a page component with a concise name that describes the purpose of the example.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-example-page',
  templateUrl: 'basic-example-page.component.html',
  styleUrls: ['basic-example-page.component.scss']
})
export class BasicExamplePageComponent {

  // The component example's files. Allows the component to be run and the files viewed at the same time. 
  // Dynamic paths do not work. The entire relative path must be available at compile time.
  readonly source = {
    html: require(`!!raw-loader?lang=html!../../examples/basic-example/basic-example.component.html`),
    css: require(`!!raw-loader?lang=html!../../examples/basic-example/basic-example.component.css`),
    ts: require(`!!raw-loader?lang=typescript!../../examples/basic-example/basic-example.component.ts`)
  }

  // Other supporting files (data, interfaces, utils, pipes, etc.)
  otherFiles: { name: string; language: string; content: string }[] = [
    {
      name: 'table-data.interface.ts',
      language: 'javascript',
      content: require('!!raw-loader?lang=typescript!../../models/table-data.interface.ts')
    },
    {
      name: 'sample-data.ts',
      language: 'javascript',
      content: require('!!raw-loader?lang=typescript!../../data/sample-data.ts')
    }
  ];
}
```

```html
<!-- the example title will display above the example -->
<app-example-page-shell exampleTitle="Basic Example" [exampleSources]="source" [otherSources]="otherFiles">
    <app-basic-example></app-basic-example>
</app-example-page-shell>
```

* The page will not yet compile as the component example is not created. Create it now.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-example',
  templateUrl: 'basic-example.component.html',
  styleUrls: ['basic-example.component.scss']
})
export class BasicExampleComponent {
  ...
}
```

* Add the component, and any other supporting components/providers to the app module

```typescript
import { {{MODULE_NAME}} } from '@{{NPM_SCOPE}}/{{PACKAGE_NAME}}';

@NgModule({
  declarations: [
    AppComponent,
    ...,
    ...AppPages
    BasicExampleComponent,
  ],
  imports: [
    ...
    {{MODULE_NAME}}
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

* Add the page to the routes and the pages array

```typescript
export const AppRoutes: Routes = [
    {
        path: 'home',
        component: HomePageComponent
    },
    {
      path: 'basic',
      component: BasicExamplePageComponent
    }
];

export const AppPages = [
  HomePageComponent,
  BasicTablePageComponent,
  ...
];
```

* Add the example to the navigation collection in `app.component.ts`

```typescript
  navItems: any[] = [
    ..., {
    title: 'Basic',
    location: '/basic'
  }];
```

## Publishing

Publishing an updated documentation site

```bash
npm run gh-pages
```

Versioning and and publishing the npm package. Fully supports the [npm version](https://docs.npmjs.com/cli/version.html) command

```bash
npm run package:version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]
npm run package:version:git
npm run publish:package
```

Create release notes in Github under the published tag