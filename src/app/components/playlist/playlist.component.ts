import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../services/playlist.service';


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  playlists: Array<any>;

  constructor(private playlistService: PlaylistService) {
    this.playlistService.getList()
    .then((playlists) => {
    this.playlists = playlists});
   }

  ngOnInit() {
  }

}
