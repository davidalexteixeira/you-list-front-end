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
  filteredPlaylists: any;
  term: string = '';
  
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
    .then((playlists) => {
      this.filteredPlaylists = this.playlists
     });
  }

  deletePlaylist() {
    console.log(`you just clicked on ${JSON.stringify(this.playlists)}`)
  //   for(let property in this.playlists[0]) {
  //   console.log(`you just clicked on ${(JSON.stringify(property))}`);
  // }
  }

  filterPlaylists(){
    console.log(this.term)
    if(this.term.length < 0){
      this.filteredPlaylists = this.playlists;
    } else {
      this.filteredPlaylists = this.playlists.filter((playlist: any) => {
        return playlist.playlistname.toLowerCase().includes(this.term.toLowerCase()) 
      });
    }
  }

}

//this.delete.emit(this.animal)
//  @Output() delete = new EventEmitter<string>();
