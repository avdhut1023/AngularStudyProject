import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';
import { ExampleComponent } from '../example/example.component';
import { PipeStudyComponent } from '../pipe-study/pipe-study.component';
import { StructuralDirectiveComponent } from '../structural-directive/structural-directive.component';
import { CstudyComponent } from '../cstudy/cstudy.component';
import { LoginComponent } from '../login/login.component';
import { CanActivateGuard } from '../can-activate.guard';
import { CanDeactivateGuard } from '../can-deactivate.guard';
import { CanLoadGuard } from '../can-load.guard';
import { AlbumsModule } from '../albums/albums.module';
import { AnimateStudyComponent } from '../animate-study/animate-study.component';
import { BasicAnimateComponent } from '../animate-study/basic-animate/basic-animate.component';
import { Animate2Component } from '../animate-study/animate2/animate2.component';
import { KeyFramesComponent } from '../animate-study/key-frames/key-frames.component';

const routes: Routes = [
  {path: '', redirectTo: 'component-study', pathMatch: 'full'},
  {path: 'registration', component: RegistrationComponent},
  {path: 'component-study', component: CstudyComponent, canDeactivate: [CanDeactivateGuard]},
  {path: 'example', component: ExampleComponent},
  {path: 'pipe-study', component: PipeStudyComponent},
  {path: 'structural-directive', component: StructuralDirectiveComponent},
  {path: 'login', component: LoginComponent, canDeactivate : [CanDeactivateGuard]},
  { 
      path: 'animate-study', 
      component: AnimateStudyComponent,
      children: [
        {path: '', redirectTo: 'basic', pathMatch: 'full'},
        {path: 'basic',  component: BasicAnimateComponent},
        {path: 'animate2',  component: Animate2Component},
        {path: 'keyframe', component: KeyFramesComponent}

      ]},
  { path: 'album', loadChildren: '../albums/albums.module#AlbumsModule', canLoad: [CanLoadGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
