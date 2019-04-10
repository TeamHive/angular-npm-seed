import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourceTabsComponent, ExamplePageShellComponent } from './components';
import { PrismModule } from '@ngx-prism/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DocsExampleModule } from '@ngx-docs/example';
import { SafeHtmlPipe } from './pipes';

@NgModule({
  imports: [
    CommonModule,
    PrismModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    DocsExampleModule.forRoot(),
  ],
  entryComponents: [
    SourceTabsComponent
  ],
  exports: [
    SourceTabsComponent,
    ExamplePageShellComponent,
    CommonModule,
    SafeHtmlPipe
  ],
  declarations: [
    SourceTabsComponent,
    ExamplePageShellComponent,
    SafeHtmlPipe
  ]
})
export class TeamHivePackageCoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TeamHivePackageCoreModule,
      providers: []
    };
  }
}
