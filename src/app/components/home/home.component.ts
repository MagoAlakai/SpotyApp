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

  constructor( private _spotifyService: SpotifyService) {

    this.loading = true;

    this._spotifyService.getNewReleases()
        .subscribe ( (data: any) =>{
          this.nuevasCanciones = data;
          this.loading = false;
        })
   }

  ngOnInit(): void {

  }

}
