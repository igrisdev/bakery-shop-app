import { Component } from '@angular/core';
import {
  IonIcon,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  chatboxEllipses,
  chevronDownOutline,
  heart,
  home,
  location,
  person,
} from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  imports: [IonIcon, IonTabBar, IonTabButton, IonTabs, IonLabel],
})
export class TabsPage {
  constructor() {
    addIcons({
      home,
      location,
      heart,
      chatboxEllipses,
      person,
      chevronDownOutline,
    });
  }
}
