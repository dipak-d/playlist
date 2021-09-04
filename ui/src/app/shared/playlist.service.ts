import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { retry, catchError } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  endpoint =
    'https://<API endpoint>/Dev/playlist'

  constructor (private http: HttpClient) {}

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  processError (err: any) {
    let message = ''
    if (err.error instanceof ErrorEvent) {
      message = err.error.message
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`
    }
    console.log(message)
    return throwError(message)
  }

  getPlaylists (title: any = ''): Observable<any> {
    return this.http
      .get<any>(this.endpoint)
      .pipe(retry(1), catchError(this.processError))
  }
}
