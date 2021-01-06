import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  protected artista: any = {};
  protected topTracks: any[] = [];

  constructor( private router: ActivatedRoute,
               private _spotifyService: SpotifyService
    ) {
    this.router.params.subscribe( params=>{
      this.getArtista( params.id );
      this.getTopTracks(params.id );
    })
  }

  ngOnInit(): void {
  }

  getArtista(id: string){
    this._spotifyService.getArtista(id)
        .subscribe ( artista =>{
          console.log(artista);
          this.artista = artista;
        })
  }

  getTopTracks ( id: string){
    this._spotifyService.getTopTracks(id)
        .subscribe ( topTracks =>{
          console.log(topTracks);
          this.topTracks = topTracks;
        })
  }

}
