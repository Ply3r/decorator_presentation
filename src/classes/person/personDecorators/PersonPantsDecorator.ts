import { Accessory } from "@/classes/Accessory";
import { PersonDecorator } from "../Person";

export class PersonPantsDecorator extends PersonDecorator {
  constructor() {
    super(new Accessory('Pants', 'https://stardewvalleywiki.com/mediawiki/images/7/78/Farmer_Pants.png'));
  }
}