import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { InformatingPageComponent } from './pages/informating-page/informating-page.component';
import { SingInComponent } from './pages/sing-in/sing-in.component';
import { SingUpComponent } from './pages/sing-up/sing-up.component';

const appRoutes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'informating', component: InformatingPageComponent},
  { path: 'sing-in', component: SingInComponent},
  { path: 'sing-up', component: SingUpComponent},
  { path: '',   redirectTo: '/main', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
