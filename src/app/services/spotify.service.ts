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
      'Authorization' : 'Bearer BQAuYag3TQSm7yJzjdG68DacXZ_om3MULUc_aYoatCFP_mxumqx0GMpKNf9EGis_lU3hQaWLAGwEPyub6xU',
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
