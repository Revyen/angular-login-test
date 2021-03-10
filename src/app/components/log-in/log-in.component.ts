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
  message: string = '';

  constructor( private userService: UserService,
               public messageService: MessageService,
               private router: Router,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  validateCredentials(password:string, e_mail:string){
    let User: User;
    this.userService.validateCredetials(e_mail,password).subscribe(user => User = user)
    if(User == undefined){
      this.messageService.updateMessage("Login ungültig");
    }
    else
    {
      this.router.navigate(['/dashboard']);
      this.messageService.updateMessage("Login gültig");
    }
    this.message = this.messageService.message;

  }

}
