import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex61-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ex61-login.html',
  styleUrl: './ex61-login.css',
})
export class Ex61Login implements OnInit {
  username: string = '';
  password: string = '';
  message: string = '';
  messageClass: string = '';

  // Values read from cookie on page load
  loggedUsername: string = '';
  loggedFullname: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Read the saved login cookie and display it on the interface
    const raw = this.getCookie('loggedUser');
    if (raw) {
      try {
        const user = JSON.parse(raw);
        this.loggedUsername = user.username || '';
        this.loggedFullname = user.fullname || '';
      } catch {
        this.loggedUsername = raw;
      }
    }
  }

  login(): void {
    const body = { username: this.username, password: this.password };
    // /auth is proxied to http://localhost:3000 via proxy.conf.json
    this.http.post<any>('/auth/login', body, { withCredentials: true })
      .subscribe({
        next: (res) => {
          this.message = res.message;
          this.messageClass = 'text-success';
          // Update displayed cookie info immediately after login
          this.loggedUsername = res.username || this.username;
          this.loggedFullname = res.fullname || '';
        },
        error: (err) => {
          this.message = err.error?.message || 'Login failed';
          this.messageClass = 'text-danger';
        }
      });
  }

  /** Read a cookie value by name from document.cookie */
  private getCookie(name: string): string | null {
    for (const part of document.cookie.split(';')) {
      const [key, ...rest] = part.trim().split('=');
      if (key === name) {
        return decodeURIComponent(rest.join('='));
      }
    }
    return null;
  }
}
