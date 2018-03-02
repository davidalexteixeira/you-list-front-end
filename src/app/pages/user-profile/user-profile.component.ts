import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service'
import { PlaylistService } from '../../services/playlist.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: any;
  playlists: any;
  userId: any;
  
  constructor(private authService: AuthService, 
    private userService: UserService,
    private activatedRoute: ActivatedRoute) { }
  

  ngOnInit() {
    this.user = this.authService.getUser();

    this.activatedRoute.params
    .subscribe((params) => {
      this.userId = String(params.id)
    });
    this.userService.getPlayList()
    .then((data) => this.playlists = data)
  }

}
