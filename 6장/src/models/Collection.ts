import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";


export class Collection<T> {
  models: T[] = [];
  events: Eventing = new Eventing();
  
  constructor(public rootUrl: string) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl)
    .then((response: AxiosResponse) => {
      response.data.forEach((value: UserProps) => {
        const user = User.buildUser(value);
        this.models.push(user);
      });
      
      this.trigger('change');
    });
  }
}