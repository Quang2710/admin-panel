import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirebaseApp } from '@angular/fire/app';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-management-app';

  constructor(private app: FirebaseApp) {
    console.log('✅ Firebase App initialized:', app.name);
  }
}
