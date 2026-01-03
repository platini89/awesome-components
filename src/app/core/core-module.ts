import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Headercomponent } from './components/header/header';
import { SharedModule } from '../shared/shared-module';
import { HttpClientModule } from '@angular/common/http'; 




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Headercomponent,
    SharedModule,
    HttpClientModule,
    


  ]
  ,
  exports:[

    Headercomponent
  ]
})
export class CoreModule { }
