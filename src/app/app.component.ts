import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
 
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Chrono', url: '/chronometre', icon: 'stopwatch' },
    { title: 'Shopping cart', url: '/cart', icon: 'cart' },
    { title: 'Gender', url: '/gender', icon: 'person-circle' },
    { title: 'Pokemon', url: '/pokemon', icon: 'bug' }

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
