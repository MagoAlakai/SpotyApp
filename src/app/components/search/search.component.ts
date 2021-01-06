import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  protected artistas: any[] = [];
  protected loading: boolean;

  constructor(private _spotifyService: SpotifyService ) {
  }

  ngOnInit(): void {
  }

  buscar(artista: string){
    this.loading = true;
    this._spotifyService.getArtistas(artista)
        .subscribe ((data: any) =>{
          this.artistas = data;
          this.loading = false;
        })
  }

}
