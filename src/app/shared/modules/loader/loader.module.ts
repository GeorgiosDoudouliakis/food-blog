import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { LoaderService } from '@shared/services/loader/loader.service';
import { LoaderComponent } from './loader.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    LoaderComponent
  ],
  exports: [
    LoaderComponent
  ],
  providers: [LoaderService]
})
export class LoaderModule { }
