import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GlobalService } from './global.service';
import { ProductComponent } from './product/product.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PostsModule } from './posts/posts.module';
import { CoreModule } from './core/core.module';
import { AlbumsModule } from './albums/albums.module';
import { RegistrationComponent } from './registration/registration.component';
import { ExampleComponent } from './example/example.component';
import { PipeStudyComponent } from './pipe-study/pipe-study.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { CustomDirectiveDirective } from './structural-directive/custom-directive.directive';
import { CstudyComponent } from './cstudy/cstudy.component';
import { ChildComponent } from './cstudy/child/child.component';
import { RxJsstudyComponent } from './rx-jsstudy/rx-jsstudy.component';
import { Child2Component } from './cstudy/child2/child2.component';
import { LoginComponent } from './login/login.component';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { CanActivateGuard } from './can-activate.guard';
import { CanLoadGuard } from './can-load.guard';
import { CustomPipeComponent } from './pipe-study/custom-pipe/custom-pipe.component';
import { ProductFilterPipe } from './pipe-study/custom-pipe/product-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    RegistrationComponent,
    ExampleComponent,
    PipeStudyComponent,
    StructuralDirectiveComponent,
    CustomDirectiveDirective,
    CstudyComponent,
    ChildComponent,
    RxJsstudyComponent,
    Child2Component,
    LoginComponent,
    CustomPipeComponent,
    ProductFilterPipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    PostsModule,
    AlbumsModule,
    CoreModule
  ],
  providers: [GlobalService, CanDeactivateGuard, CanActivateGuard, CanLoadGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
