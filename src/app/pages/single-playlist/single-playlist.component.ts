import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../../services/playlist.service';

@Component({
  selector: 'app-single-playlist',
  templateUrl: './single-playlist.component.html',
  styleUrls: ['./single-playlist.component.css']
})
export class SinglePlaylistComponent implements OnInit {

  playlists: any;
  playlistId: any;

  constructor(private activatedRoute: ActivatedRoute, private playlistService: PlaylistService ) { 
    this.activatedRoute.params
    .subscribe((params) => {
      this.playlistId = String(params.id)
      console.log(this.playlistId);
      this.playlistService.getPlayList(this.playlistId)
      .then((res: any) => {
        this.playlists = res
        console.log(this.playlists)
      })
  })
  }

  ngOnInit() {
  }

}

