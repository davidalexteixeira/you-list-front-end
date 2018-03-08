import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { PlaylistService } from '../../services/playlist.service';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: any;
  playlists: any;
  userId: any;
  filteredPlaylists: any;
  term: String = '';
  youtubeList: any;

  constructor(private authService: AuthService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit() {
    this.user = this.authService.getUser();

    this.activatedRoute.params
    .subscribe((params) => {
      this.userId = String(params.id);
    });
    this.userService.getPlayList()
    .then((data) => this.playlists = data)
    .then((playlists) => {
      this.filteredPlaylists = this.playlists;
     });
  }

  filterPlaylists() {
    console.log(this.term);
    if (this.term.length < 0) {
      this.filteredPlaylists = this.playlists;
    } else {
      this.filteredPlaylists = this.playlists.filter((playlist: any) => {
        return playlist.playlistname.toLowerCase().includes(this.term.toLowerCase());
      });
    }
  }

  deletePlaylist(playlist) {
    this.activatedRoute.params.subscribe(params => {
      this.userId = String(params.id);
    });
    console.log(playlist);
    this.userService.deletePlayList(playlist, this.userId);
    window.location.reload();
  }

  editPlaylist(id) {
    console.log(id);
    this.router.navigate(['../../playlist/single-playlist', id]);
  }

}
