import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uccchatbot',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './uccchatbot.component.html',
  styleUrl: './uccchatbot.component.css'
})

export class UccchatbotComponent {
   userMessage: string = '';

  questionCount: number = 0;

  showLoginPopup: boolean = false;

  messages: any[] = [
    {
      sender: 'bot',
      text: 'Hi 👋 I am UCC AI Mentor. Tell me what confuses you?'
    }
  ];
constructor(private router: Router) {}
  sendMessage() {

    if (!this.userMessage.trim()) {
      return;
    }

    this.messages.push({
      sender: 'user',
      text: this.userMessage
    });

    let botReply = this.generateReply(this.userMessage);

    this.messages.push({
      sender: 'bot',
      text: botReply
    });

    this.questionCount++;

    if (this.questionCount >= 5) {
      this.showLoginPopup = true;
    }

    this.userMessage = '';
  }

  generateReply(message: string): string {

    const lowerMessage = message.toLowerCase();

    if (
      lowerMessage.includes('ui') ||
      lowerMessage.includes('design') ||
      lowerMessage.includes('frontend')
    ) {
      return 'You may enjoy Frontend Development using Angular.';
    }

    if (
      lowerMessage.includes('logic') ||
      lowerMessage.includes('backend') ||
      lowerMessage.includes('api')
    ) {
      return 'Backend development may suit your thinking style.';
    }

    if (
      lowerMessage.includes('cloud') ||
      lowerMessage.includes('deployment') ||
      lowerMessage.includes('devops')
    ) {
      return 'DevOps and Cloud Engineering may be a good path for you.';
    }

    return 'Tell me more about your interests so I can guide you better.';
  }

goToLogin() {
  this.router.navigate(['/login']);
}

}
