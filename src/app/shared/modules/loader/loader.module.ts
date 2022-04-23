import { NgModule } from '@angular/core';
import { LoaderService } from '@shared/services/loader/loader.service';
import { SharedModule } from '@shared/shared.module';
import { LoaderComponent } from './loader.component';

@NgModule({
  imports: [SharedModule],
  declarations: [
    LoaderComponent
  ],
  exports: [
    LoaderComponent
  ],
  providers: [LoaderService]
})
export class LoaderModule { }
