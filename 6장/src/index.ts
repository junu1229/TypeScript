import { User } from "./models/User";

const user = new User({ name: 'junu', age: 26 });

console.log(user.get('name'));

user.on('change', () => {
  console.log('User was changed, we probably need to update html');
});

user.set({name: 'New name'});