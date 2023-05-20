/* Place your angular imports here */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/* Place your interface imports here */
import { Category } from '../../interfaces/categories.interface';

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
