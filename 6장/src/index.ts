import { User } from "./models/User";

const user = new User({ name: 'junu', age: 26 });

user.events.on('change', () => {
  console.log('change!');
});

user.events.trigger('change');