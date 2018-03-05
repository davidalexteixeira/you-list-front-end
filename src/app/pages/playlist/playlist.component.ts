import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../services/playlist.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  playlists: Array<any>;
  filteredPlaylists: any;
  term: string = '';
 

  constructor(private activatedRoute: ActivatedRoute, 
    private playlistService: PlaylistService) {
    this.playlistService.getList()
    .then((playlists) => {
    this.playlists = playlists
     })
    .then((playlists) => {
      this.filteredPlaylists = this.playlists
     });
   }
   

  ngOnInit() {
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
