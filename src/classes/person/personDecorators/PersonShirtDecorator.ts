import { Accessory } from "@/classes/Accessory";
import { PersonDecorator } from "../Person";

export class PersonShirtDecorator extends PersonDecorator {
  constructor() {
    super(new Accessory('Shirt', 'https://stardewvalleywiki.com/mediawiki/images/2/25/Shirt184.png'));
  }
}