/* Place your angular imports here */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/* Place any other imports here */
import { Category } from '../../models/categories.model';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryCardComponent {
  @Input() public category: Category;

  constructor() { }
}
