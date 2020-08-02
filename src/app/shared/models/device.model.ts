export class Device {
  name: string;
  company: string;
  img: string;
  buttons: {
    value: string;
    events: {
      event: string;
    }[]
  }[]
}
