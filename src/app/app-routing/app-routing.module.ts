import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';
import { ExampleComponent } from '../example/example.component';
import { PipeStudyComponent } from '../pipe-study/pipe-study.component';
import { StructuralDirectiveComponent } from '../structural-directive/structural-directive.component';
import { CstudyComponent } from '../cstudy/cstudy.component';

const routes: Routes = [
  {path: 'registration', component: RegistrationComponent},
  {path: 'component-study', component: CstudyComponent},
  {path: 'example', component: ExampleComponent},
  {path: 'pipe-study', component: PipeStudyComponent},
  {path: 'structural-directive', component: StructuralDirectiveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
