import { Routes } from '@angular/router';
import { BasicExamplePageComponent } from './pages/basic-example-page/basic-example-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

/**
 * Root-level route definitions
 * Note: For child paths use the feature modules *-routing.module declaration.
 */
export const AppRoutes: Routes = [
    {
        path: 'home',
        component: HomePageComponent
    },
    {
      path: 'basic',
      component: BasicExamplePageComponent
    },

    /**
     * Default path match when no routes match the user's destination path.
     * Redirect to a main page or a 404 page.
     */
    {
        path: '**',
        redirectTo: '/home'
    }
];

export const AppPages = [
  HomePageComponent,
  BasicExamplePageComponent
];
