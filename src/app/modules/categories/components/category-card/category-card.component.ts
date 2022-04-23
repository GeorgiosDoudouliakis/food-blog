import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Category } from '../../models/categories.model';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryCardComponent implements OnInit {
  @Input() category: Category;

  constructor() { }

  ngOnInit(): void {
  }

}
