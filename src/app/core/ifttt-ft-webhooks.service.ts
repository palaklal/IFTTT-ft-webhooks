import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class IftttFtWebhooksService {
  private baseUrl: string = environment.baseURL
  private key: string = environment.webhooksAPIKey

  constructor(private http: HttpClient) { }

  triggerIftttWebhook(event: string, payload?): Observable<any> {
    let url = this.baseUrl + event + '/with/key/' + this.key
    let body = payload || null
    return this.http.post(url, body, { responseType: 'text' })
  }
}
