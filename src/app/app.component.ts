import { Component } from '@angular/core';
import { ImagesService } from './services/images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'verifoneTask';
  images = [];
  keyword: string;
  searchQuery;
  imgArr = [];
  loading: boolean;
  searchTerm: string;

  constructor(private flickrService: ImagesService,) {}

  searchImages(searchValue: any) {
    this.keyword = searchValue.toLowerCase();
    if (this.keyword && this.keyword.length > 0) {
      this.flickrService.search_keyword(this.keyword).subscribe(data => {
        this.images = data;
      });
    }
  }
}
