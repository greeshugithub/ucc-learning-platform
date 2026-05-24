import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-uccchatbot',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './uccchatbot.component.html',
  styleUrl: './uccchatbot.component.css'
})

export class UccchatbotComponent {

  userMessage: string = '';

  questionCount: number = 0;

  showLoginPopup: boolean = false;

  isLoggedIn: boolean = false;

  messages: any[] = [
    {
      sender: 'bot',
      text: 'Hi 👋 I am UCC AI Mentor. Tell me what confuses you?'
    }
  ];

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {

    if (typeof window !== 'undefined') {

      /* LOGIN STATUS */

      const loggedIn =
        localStorage.getItem('uccLoggedIn');

      if (loggedIn === 'true') {

        this.isLoggedIn = true;

      }
this.showLoginPopup = false;
      /* OLD CHAT */

      const savedMessages =
        localStorage.getItem('uccMessages');

      if (savedMessages) {

        this.messages =
          JSON.parse(savedMessages);

      }

      /* QUESTION COUNT */

      const savedCount =
        localStorage.getItem('uccQuestionCount');

      if (savedCount) {

        this.questionCount =
          Number(savedCount);

      }

      /* SHOW POPUP AFTER LOGIN */

      if (
        this.isLoggedIn &&
        this.questionCount >= 5
      ) 
      {

        this.showLoginPopup = true;

      }

    }

  }

  /* SAVE CHAT */

  saveChatData() {

    if (typeof window !== 'undefined') {

      localStorage.setItem(
        'uccMessages',
        JSON.stringify(this.messages)
      );

      localStorage.setItem(
        'uccQuestionCount',
        this.questionCount.toString()
      );

    }

  }

  /* SEND MESSAGE */

  sendMessage() {

    if (!this.userMessage.trim()) {
      return;
    }

    this.messages.push({
      sender: 'user',
      text: this.userMessage
    });

    const currentQuestion =
      this.userMessage;

    this.userMessage = '';

    this.http.get<any>(
      `http://127.0.0.1:5000/chatbot/${currentQuestion}`
    )
    .subscribe((response) => {

      this.messages.push({
        sender: 'bot',
        text: response.answer
      });

      this.saveChatData();

    });

    this.questionCount++;

    this.saveChatData();

    /* BEFORE LOGIN */

    if (
      this.questionCount >= 5 &&
      !this.isLoggedIn
    ) {

      setTimeout(() => {

        this.showLoginPopup = true;

      }, 1200);

    }

    /* AFTER LOGIN */

    if (
      this.questionCount >= 10 &&
      this.isLoggedIn
    ) {

      setTimeout(() => {

        this.showLoginPopup = true;

      }, 1200);

    }

  }

  /* CONTINUE CHAT */

  continueChat() {

    this.showLoginPopup = false;

    this.router.navigate(['/login']);

  }

  /* COURSES */

  goToCourses() {

    this.showLoginPopup = false;

    this.router.navigate(['/course']);

  }

  /* LOGOUT */

  logout() {

    if (typeof window !== 'undefined') {

      localStorage.removeItem(
        'uccLoggedIn'
      );

      localStorage.removeItem(
        'uccMessages'
      );

      localStorage.removeItem(
        'uccQuestionCount'
      );

    }

    this.isLoggedIn = false;

    this.questionCount = 0;

    this.showLoginPopup = false;

    this.messages = [
      {
        sender: 'bot',
        text: 'Hi 👋 I am UCC AI Mentor. Tell me what confuses you?'
      }
    ];

    this.router.navigate(['/login']);

  }

}