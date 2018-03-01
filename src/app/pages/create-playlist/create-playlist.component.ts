import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../services/playlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent implements OnInit {

  feedbackEnabled = false;
  error = null;
  processing = false;
  playlistname: String;
  
  constructor(private playlistService: PlaylistService, private router: Router) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
      if (form.valid) {
      this.processing = true;
      this.playlistService.createPlaylist({
        playlistname: this.playlistname,
      })
        .then((data) => {
        this.router.navigate(['/playlist'])
      //     // ... maybe turn this to false if your're staying on the page - this.processing = false;
       })
        .catch((err) => {
       this.error = err.error.error; // :-)
       this.processing = false;
       this.feedbackEnabled = false;
        });
    }
  }

}
