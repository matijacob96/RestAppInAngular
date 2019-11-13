import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReqresService } from '../../services/reqres.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: any;
  
  constructor(private activatedRoute: ActivatedRoute,
              private reqresService: ReqresService) {
      this.activatedRoute.params.subscribe((params) => {
        // tslint:disable-next-line: no-string-literal
        this.user = reqresService.getUser(params ['id'])
          .subscribe((res: any) => this.user = res.data);
      });
    }

  ngOnInit() {
  }

}
