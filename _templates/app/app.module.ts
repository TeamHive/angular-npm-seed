import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NxModule } from '@nrwl/nx';
import { {{MODULE_NAME}} } from '@{{NPM_SCOPE}}/{{PACKAGE_NAME}}';
import { TeamHivePackageCoreModule } from '@teamhive/package-core';
import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from './app.component';
import { AppPages, AppRoutes } from './app.routes';
import { AppExamples } from './examples';

@NgModule({
  declarations: [
    AppComponent,
    ...AppPages,
    ...AppExamples
  ],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(AppRoutes, { initialNavigation: 'enabled' }),
    {{MODULE_NAME}},
    FlexLayoutModule,
    TeamHivePackageCoreModule.forRoot(),
    BrowserAnimationsModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}