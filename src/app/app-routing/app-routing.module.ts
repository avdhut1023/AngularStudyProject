import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';
import { ExampleComponent } from '../example/example.component';
import { PipeStudyComponent } from '../pipe-study/pipe-study.component';

const routes: Routes = [
  {path: 'registration', component: RegistrationComponent},
  {path: 'example', component: ExampleComponent},
  {path: 'pipe-study', component: PipeStudyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
