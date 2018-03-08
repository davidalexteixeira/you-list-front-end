import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../../services/playlist.service';
import { DomSanitizer } from '@angular/platform-browser';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-single-playlist',
  templateUrl: './single-playlist.component.html',
  styleUrls: ['./single-playlist.component.css']
})
export class SinglePlaylistComponent implements OnInit {

  playlists: any;
  playlistId: any;
  baseUrl: String = 'https://www.youtube.com/embed/';
  url: any;
  results: any;
  videoArray: any = [];

  constructor(private activatedRoute: ActivatedRoute, private playlistService: PlaylistService,
    private sanitizer: DomSanitizer,
    private youtubeService: YoutubeService
   ) { }

   ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.activatedRoute.params
    .subscribe((params) => {
      this.playlistId = String(params.id);
      this.playlistService.getPlayList(this.playlistId)
      .then((res: any) => {
        this.playlists = res;
        this.playlists.video.forEach((elem) => {
          const url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + elem.id);
          this.videoArray.push(url);
        });
        this.results = this.playlists.video;
      });
    });
  }

  deleteVideo(videoId) {
    this.activatedRoute.params.subscribe(params => {
      this.playlistId = String(params.id);
    });
    console.log(videoId);
    this.youtubeService.deleteVideo(videoId, this.playlistId);
    window.location.reload();
  }

}


