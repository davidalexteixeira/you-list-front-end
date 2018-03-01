import { Component, OnInit } from '@angular/core';
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
  playlist: any;
  
  constructor(private authService: AuthService, private playlistService: PlaylistService) { }
  

  ngOnInit() {
    this.user = this.authService.getUser();
  }

}
