import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  showSignup: boolean = false;

  constructor(
    private router: Router
  ) {}

  // goTohome() {

  //   if (typeof window !== 'undefined') {

  //     localStorage.setItem(
  //       'uccLoggedIn',
  //       'true'
  //     );

  //   }

  //   this.router.navigate(['']);

  // }
 goTohome() {

  if (typeof window !== 'undefined') {

    localStorage.setItem(
      'uccLoggedIn',
      'true'
    );

    /* RESET QUESTION COUNT */

    localStorage.setItem(
      'uccQuestionCount',
      '0'
    );

  }

  this.router.navigate(['']);

}
}