import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }
  user: any;
  userId: any;

  ngOnInit() {
    this.activatedRoute.params
    .subscribe((params) => {
      this.userId = String(params.id)
      console.log(this.userId);
      this.userService.getUser(this.userId)
      .then((res: any) => {this.user = res})
  })
  }

}
