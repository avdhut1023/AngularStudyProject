import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GlobalService } from './global.service';
import { ProductComponent } from './product/product.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PostsModule } from './posts/posts.module';
import { CoreModule } from './core/core.module';
import { AlbumsModule } from './albums/albums.module';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent

  ],
  imports: [
    BrowserModule,
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
