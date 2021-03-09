import { UserService } from './../../user.service';
import { User } from './../../user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user?: User;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.userService.getUser();
    if(this.user == undefined)
    {
      this.router.navigate(['/login'])
    }
  }



}
