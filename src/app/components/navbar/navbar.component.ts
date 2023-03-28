import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(
    private _router: Router,
    //private _token:TokenService
  ) { }

  /*
  logout(event: MouseEvent) {
    event.preventDefault();
    this._token.remove();
    this._router.navigateByUrl('/login');
  }

  isloggedIn() {
    return !!localStorage.getItem('token');
  }
  */
}
