import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientService } from './http-client.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [HttpClientService]
})
export class CoreModule { }
