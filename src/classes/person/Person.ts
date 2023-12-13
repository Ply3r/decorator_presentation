import { Accessory } from "../Accessory"
import image from '../../../public/stardew_valley_player.png';

export interface PersonInterface {
  dress(person: Person): Person
}

export class Person implements PersonInterface {
  public name: string
  public img: string
  public accessories: Accessory[]

  constructor({ name }: { name: string }) {
    this.name = name;
    this.img = image.src;
    this.accessories = [];
  }

  dress() {
    return this;
  }
}

export abstract class PersonDecorator implements PersonInterface {
  private accessory: Accessory

  constructor(accessory: Accessory) {
    this.accessory = accessory;
  }

  dress(person: Person) {
    person.accessories.push(this.accessory);
    return person;
  }
}

