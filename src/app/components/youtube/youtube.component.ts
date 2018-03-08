import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  search: any;
  results: any;
  res:any;
  name:string;
  baseUrl:string = 'https://www.youtube.com/embed/';
  url: any;
  playlistId: string;


  arraysId: any = [];


  constructor(private youtubeService: YoutubeService, private sanitizer: DomSanitizer,
  private activatedRoute: ActivatedRoute,
  private router: Router) {
  }

  ngOnInit() {
    
  }

  searchVideo(){
    this.youtubeService.getYoutubeList(this.search)
      .then((result: any) => {

        result.items.forEach((elem) => {
          const url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + elem.id.videoId);
          this.arraysId.push(url);
        }) 
        this.results = result.items;
      })
  }

  addVideo(id, videoName){
    this.activatedRoute.params.subscribe(params=>{
      this.playlistId = String(params.id)
    })
    this.youtubeService.addVideo(id.id.videoId, this.playlistId, videoName)
    window.location.reload();
  }

}
