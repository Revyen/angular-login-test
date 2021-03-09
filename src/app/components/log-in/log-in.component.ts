import { DashboardComponent } from './../dashboard/dashboard.component';
import { MessageService } from './../../message.service';
import { User } from './../../user';
import { UserService } from '../../user.service';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  User?: User;
  message: string = '';

  constructor( private userService: UserService,
               public messageService: MessageService,
               private router: Router,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.User = undefined;
  }

  validateCredentials(password:string, e_mail:string){
    this.userService.validateCredetials(e_mail,password).subscribe(user => this.User = user)
    if(this.User == undefined){
      this.messageService.updateMessage("Login ungültig");
    }
    else
    {
      this.userService.setUser(this.User);
      this.router.navigate(['/dashboard']);
      this.messageService.updateMessage("Login gültig");
    }
    this.message = this.messageService.message;

  }

}
