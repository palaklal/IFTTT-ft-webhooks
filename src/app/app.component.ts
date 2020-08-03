import { Component, OnInit, OnDestroy } from '@angular/core'
import { IftttFtWebhooksService } from './core/ifttt-ft-webhooks.service'
import devices from '../assets/json/devices.json'
import { Device } from './shared/models/device.model'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = []
  devices: Device[] = []

  constructor(private service: IftttFtWebhooksService) {}

  ngOnInit() {
    this.devices = devices.devices
  }

  ngOnDestroy() {
    for (let subscription of this.subscriptions) {
      subscription.unsubscribe()
    }
  }

  getColor(company: Device['company']): string {
    switch(company) {
      case 'vesync':
        return 'vesync-teal'
        break;
      case 'sengled':
        return 'ifttt-gold'
        break;
      // case 'switchbot':
      //   return 'switchbot-red'
      //   break;
      case 'vizio':
        return 'vizio-purple'
        break;
      case 'deebot':
        return 'deebot-blue'
        break;
      default:
        return 'button-orange'
    }
  }

  getSize(buttons: Device['buttons'], b: number): string {
    switch(buttons.length) {
      case 2:
        return 'half'
        break;
      case 3:
        return 'third'
        break;
      case 4:
        return b === 0 ? 'top' : 'third third-of-four'
        break;
      default:
        return ''
    }
  }

  triggerEvent(events: any[]): void {
    for (let event of events) {
      this.subscriptions.push(this.service.triggerIftttWebhook((event as any).event).subscribe(
        res => {
          console.log(res)
        },
        error => {
          console.error(error)
        })
      )
    }
  }

}
