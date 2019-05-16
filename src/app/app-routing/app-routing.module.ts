import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';
import { ExampleComponent } from '../example/example.component';

const routes: Routes = [
  {path: 'registration', component: RegistrationComponent},
  {path: 'example', component: ExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
