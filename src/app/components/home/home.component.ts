import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  protected nuevasCanciones: any[] = [];
  protected loading: boolean;
  protected error: boolean;
  protected mensajeError: string;
  protected status: number;

  constructor( private _spotifyService: SpotifyService) {

    this.loading = true;
    this.error = false;

    this._spotifyService.getNewReleases()
        .subscribe ( (data: any) =>{
          this.nuevasCanciones = data;
          this.loading = false;
        }, ( errorServicio )=>{
          this.loading = false;
          this.error = true;
          this.mensajeError = errorServicio.error.error.message;
          this.status = errorServicio.status;
        })
   }

  ngOnInit(): void {

  }

}
