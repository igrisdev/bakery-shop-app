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
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonText,
    IonIcon,
    IonLabel,
    IonItem,
    IonContent,
    IonHeader,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
