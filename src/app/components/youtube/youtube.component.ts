import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import { DomSanitizer } from '@angular/platform-browser';


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
  video: any = {id: 'wzrnuUOoFNM'};
  baseUrl:string = 'https://www.youtube.com/embed/';
  url: any;


  arraysId: any = [];


  constructor(private youtubeService: YoutubeService, private sanitizer: DomSanitizer) {
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

  playVideo(){

  }

}
