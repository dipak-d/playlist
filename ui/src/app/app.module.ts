import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DataTablesModule } from 'angular-datatables'
import { HttpClientModule } from '@angular/common/http'

import { PlaylistService } from './shared/playlist.service'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxStarRatingModule } from 'ngx-star-rating'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxStarRatingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PlaylistService],
  bootstrap: [AppComponent]
})
export class AppModule {}
