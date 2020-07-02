import { Component } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router';


@Component({
    templateUrl: './login.component.html',
    styles: [`
        em { float: right; color: #E05c65; padding-left: 10px}
    `]
})
export class LoginComponent {
    username:string;
    password:string;
    mouseoverLogin:boolean;

    constructor(private authService:AuthService, private router:Router) {

    }

    login(formValues) {
        let username = formValues.username;
        let password = formValues.password;

        this.authService.loginUser(username, password);
        this.router.navigate(['events']);
    }

    cancel() {
        this.router.navigate(['events']);
    }
}