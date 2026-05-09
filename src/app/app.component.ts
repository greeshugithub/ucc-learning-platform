import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UccchatbotComponent } from './uccchatbot/uccchatbot.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UccchatbotComponent,LoginComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'uccchatbot';
}
