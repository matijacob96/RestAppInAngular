import { Component, OnInit } from '@angular/core';
import { ReqresService } from '../../services/reqres.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: any[] = [];

  constructor( private reqresService: ReqresService, private router: Router) {
    this.getUsers();
   }

  getUsers() {
    this.reqresService.getUsers()
      .subscribe((res: any) => {
        this.users = res.data;
      }, (err) => {
        console.log(err);
      });
  }

  userDetails(id: number) {
    this.router.navigate(['user', id]);
  }

  ngOnInit() {
  }

}
