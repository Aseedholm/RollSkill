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
  ngOnInit(): void {
  }

}
