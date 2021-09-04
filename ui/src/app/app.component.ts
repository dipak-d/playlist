import { Component, OnInit } from '@angular/core'
import { PlaylistService } from './shared/playlist.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'datatables'
  dtOptions: DataTables.Settings = {}
  playlists: any = []

  constructor (public playlistService: PlaylistService) {}

  ngOnInit (): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    }

    this.playlistService.getPlaylists().subscribe((res: {}) => {
      this.playlists = (<any>res).body.data
    })
  }
}
