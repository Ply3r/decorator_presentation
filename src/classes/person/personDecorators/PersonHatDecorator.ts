import { Accessory } from "@/classes/Accessory";
import { PersonDecorator } from "../Person";

export class PersonHatDecorator extends PersonDecorator {
  constructor() {
    super(
      new Accessory('Hat', 'https://stardewvalleywiki.com/mediawiki/images/9/99/Cowboy_Hat.png')
    );
  }
}