import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.css']
})
export class PlaylistListComponent implements OnInit {

  @Input() playlists: any;
  constructor() { }

  ngOnInit() {
  }

}
