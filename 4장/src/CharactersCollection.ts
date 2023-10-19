import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const charaters = this.data.split('');

    const leftHand = charaters[leftIndex];
    charaters[leftIndex] = charaters[rightIndex];
    charaters[rightIndex] = leftHand;
    this.data = charaters.join('');
  }
}