export default class Team {
  constructor() {
    this.length = 0;
  }

  add(person) {
    this[this.length += 1] = person;
  }

  addAll(...persons) {
    persons.forEach((person) => this.add(person));
  }

  // [Symbol.iterator] = function() {
  //   let from = 0;
  //   let to = this.length;
  //   let team = this;
  //   return {
  //     next() {
  //       if (from < to) {
  //         return {
  //           value: team[counter++],
  //           done: false
  //         }
  //       }
  //       return { done: true }
  //     }
  //   }
  // }

  * [Symbol.iterator]() {
    for (let i = 0; i < this.length; i += 1) {
      yield this[i];
    }
  }
}
