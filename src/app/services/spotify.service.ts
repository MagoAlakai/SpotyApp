import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getQuery( query: string){

    const url: string = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQCeA5bzoJnVLrWrYc6t-teQx2ml8tH9P0seJDRvkFPuW7Z1UFN_CtYhfV9Jwko-aU4Tpw3jRDY_nWFn0w0',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases')
               .pipe( map( (data: any) => data.albums.items));

  }

  getArtistas(artista: string){

    return this.getQuery(`search?q=${ artista }&type=artist&limit=20`)
                    .pipe( map( (data: any) => data.artists.items));

  }

  getArtista(id: string){

    return this.getQuery(`artists/${id}`);
                    //.pipe( map( (data: any) => data.artists.items));

  }

  getTopTracks(id: string){

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
                    .pipe( map( (data: any) => data.tracks));

  }
}
