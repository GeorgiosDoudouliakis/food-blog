import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { LoaderService } from '@shared/services/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
  title = 'food-blog';

  constructor(
    public loaderService: LoaderService,
    private cd: ChangeDetectorRef
  ) {}

  ngAfterViewChecked() {
    this.cd.detectChanges();
  }
}
