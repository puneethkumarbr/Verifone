import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


export interface FlickrPhoto {
  farm: string;
  id: string;
  secret: string;
  server: string;
  title: string;
}

export interface ImagesOutput {
  photos: {
    photo: FlickrPhoto[];
  };
}


@Injectable()
export class ImagesService {
  prevKeyword: string;
  currPage = 1;
  public url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&';

  constructor(private http: HttpClient) { }

  getSearchResult(data: string) {
    return this.http.get("https://api.unsplash.com/search/photos?query=" + data + "&client_id=sbBsGrbZ5dCT1jmiVOXRh5aulWC20_qfWM-s2L5mJ-U");
  }

  search_keyword(keyword: string) {
    if (this.prevKeyword === keyword) {
      this.currPage++;
    } else {
      this.currPage = 1;
    }
    this.prevKeyword = keyword;

    const params = `api_key=${environment.flickr.key}&text=${keyword}&format=json&nojsoncallback=1&per_page=12&page=${this.currPage}`;

    return this.http.get(this.url + params).pipe(map((res: ImagesOutput) => {
      const urlArr = [];
      console.log(res);
      res.photos.photo.forEach((ph: FlickrPhoto) => {
        const photoObj = {
          url: `http://farm${ph.farm}.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}`,
          title: ph.title
        };
        urlArr.push(photoObj);
      });
      return urlArr;
    }));
  }
}

