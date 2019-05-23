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


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    RegistrationComponent,
    ExampleComponent,
    PipeStudyComponent,
    StructuralDirectiveComponent,
    CustomDirectiveDirective

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
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
