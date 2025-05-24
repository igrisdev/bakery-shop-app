import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  input,
  OnInit,
} from '@angular/core';
import { Category } from 'src/app/interfaces/category.interface';
import { IonicSlides, IonCol } from '@ionic/angular/standalone';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  // imports: [IonCol, ImageCircleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CategoriesComponent implements OnInit {
  swiperModules = [IonicSlides];
  categories = input<Category[]>([]);

  constructor() {}

  ngOnInit() {}
}
