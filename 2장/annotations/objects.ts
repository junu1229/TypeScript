const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
}

// const {age, name}: {age: number, name: string} = profile;
// console.log(age);
// console.log(name);
const {coords: {lat, lng}}: {coords: {lat:number, lng:number}} = profile;
console.log(lat);
console.log(lng);