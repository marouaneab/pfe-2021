import {Component, OnInit} from '@angular/core';
import {Classification, Member, Grade} from '../interfaces/Member';

@Component({
  selector: 'app-users',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  arr: Member[] = [];
  searchWord = '';
  Loi = Classification.Loi;
  Elu = Classification.Elu;
  Design = Classification.Design;

  constructor() { }

  ngOnInit(): void {
    this.arr = [];
    const classification = [
      Classification.Design,
      Classification.Elu,
      Classification.Loi
    ];
    const names = [
      'Marouane', 'Mounir', 'Mohammed', 'Said', 'Oussama', 'Billal', 'Soufiane', 'Rabie'
    ];

    for (let i = 0; i < 20; i++) {
      this.arr.push({
        id: i,
        classification: classification[Math.floor(Math.random() * 3)],
        nom: 'Nom',
        prenom: names[Math.floor(Math.random() * 8)],
        mail: '',
        grade: Grade.Membre
      });
    }
  }
}
