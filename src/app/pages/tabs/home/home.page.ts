import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonItem,
  IonLabel,
  IonIcon,
  IonText,
  IonButton,
  IonRow,
  IonCol,
  IonSearchbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  chevronDownOutline,
  location,
  cart,
  notifications,
  options,
} from 'ionicons/icons';
import { ListHeadingComponent } from '../../../components/list-heading/list-heading.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonSearchbar,
    IonCol,
    IonRow,
    IonButton,
    IonText,
    IonIcon,
    IonLabel,
    IonItem,
    IonHeader,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonContent,
    ListHeadingComponent,
  ],
})
export class HomePage implements OnInit {
  constructor() {
    addIcons({ location, chevronDownOutline, cart, notifications, options });
  }

  ngOnInit() {}
}
