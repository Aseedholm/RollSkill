import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-page',
  templateUrl: './skill-page.component.html',
  styleUrls: ['./skill-page.component.css']
})
export class SkillPageComponent implements OnInit {

  constructor() { }
  strength: 0;
  dexterity: 0;
  constitution: 0;
  intelligence: 0;
  wisdom: 0;
  charisma: 0;
  proficiency: 0;
  acrobatics: 0;
  animalHandling: 0;
  arcana: 0;
  athletics: 0;
  deception: 0;
  history: 0;
  insight: 0;
  intimidation: 0;
  investigation: 0;
  medicine: 0;
  nature: 0;
  perception: 0;
  performance: 0;
  persuasion: 0;
  religion: 0;
  sleightOfHand: 0;
  stealth: 0;
  survival: 0;
  stateCheck = () => {
    console.log('STRENGTH', this.strength);
    console.log('DEXTERITY', this.dexterity);
    console.log('CONSTITUTION', this.constitution);
    console.log('INTELLIGENCE', this.intelligence);
    console.log('WISDOM', this.wisdom);
    console.log('CHARISMA', this.charisma);
    console.log('CHARISMA', this.proficiency);
  }
  // skillCheck = (skillProficiencyPassed) => {
  //   const proficiencyBonus = skillProficiencyPassed * this.proficiency;
  //
  // }
  rollDieTwenty = () => {
    const max = 20;
    const min = 1;
    const roll = Math.floor(Math.random() * (max - min + 1)) + min;
    return roll;
    // for (let i = 0; i < 100000; i++) {
    //   // const test = Math.round(Math.random() * 20);
    //   const test = Math.floor(Math.random() * (max - min + 1)) + min;
    //   if (test < 1) {
    //     console.log('BELOW 1');
    //     console.log(test);
    //
    //   }
    //   if (test > 20) {
    //     console.log('ABOVE 20');
    //     console.log(test);
    //   }
    //
    // }
    // console.log('Cleared');
    // console.log(Math.round(Math.random() * 20));
  }
  ngOnInit(): void {
  }

}
