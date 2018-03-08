import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.css']
})
export class PlaylistCardComponent implements OnInit {

  @Input() playlist: any;
  @Output() delete = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }



handleDeleteClick() {
  this.delete.emit(this.playlist);
  console.log(`you clicked on ${this.playlist.name}`);
}


}
