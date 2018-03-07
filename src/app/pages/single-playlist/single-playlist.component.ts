import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../../services/playlist.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-single-playlist',
  templateUrl: './single-playlist.component.html',
  styleUrls: ['./single-playlist.component.css']
})
export class SinglePlaylistComponent implements OnInit {

  playlists: any;
  playlistId: any;
  baseUrl:string = 'https://www.youtube.com/embed/';
  url: any;
  results: any; 
  videoArray: any = [];

  constructor(private activatedRoute: ActivatedRoute, private playlistService: PlaylistService,
    private sanitizer: DomSanitizer
   ) { 
    this.activatedRoute.params
    .subscribe((params) => {
      this.playlistId = String(params.id)
      this.playlistService.getPlayList(this.playlistId)
      .then((res: any) => {
        this.playlists = res
        this.playlists.video.forEach((elem) => {
          const url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + elem.id);
          this.videoArray.push(url);
        }) 
        this.results = this.playlists.video;
      })
  })
  }

  ngOnInit() {
  }

}

