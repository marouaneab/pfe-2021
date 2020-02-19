import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface Users {

  nom: string;
  Uid: number;
  photo?: string;
  prenom: string;
  email: string;
  address: string;
  role: string;
  department : string;
  section ?:  string;
}

const USER_DATA: Users[] = [
  {
    Uid: 1,
    photo: '',
    nom: 'Ababou',
    prenom: 'Marouane',
    email: 'marouaneababou52@gmail.com',
    address: 'Marjane 2 Meknes',
    role: 'Etudiant',
    department : 'Informatique',
  },
  {
    Uid: 2,
    photo: '',
    nom: 'Mounir',
    prenom: 'Bouaiche',
    email: 'Mounir.9@gmail.com',
    address: 'SebaaYoune',
    role: 'Etudiant',
    department : 'Informatique',
  },
  {
    Uid: 3,
    photo: '',
    nom: 'BENNASER',
    prenom: 'Mohammed',
    email: 'mohamed.bennaser@gmail.com',
    address: 'Rabat',
    role: 'Directeur',
    department : 'Techniques de Commercialisation et de Communication',
  },
  {
    Uid: 4,
    photo: '',
    nom: 'BOURAS',
    prenom: 'Najat',
    email: 'najat.bouras@gmail.com',
    address: 'Meknes',
    role: 'Secrétariat du Directeur',
    department : '',
  },
  {
    Uid: 5,
    photo: '',
    nom: 'BOUACHRINE',
    prenom: 'Mohammed',
    email: 'mohammed.bouachrine@gmail.com',
    address: 'Meknes',
    role: 'Directeur Adjoint',
    department : 'Génie Electrique',
  },
  {
    Uid: 6,
    photo: '',
    nom: 'BENBRAHIM',
    prenom: 'Souad',
    email: 'benbrahim@est-umi.ac.ma',
    address: 'Rabat',
    role: 'Secrétariat du Directeur Adjoint',
    department : '',
  },
  {
    Uid: 7,
    photo: '',
    nom: 'BAGHDI',
    prenom: 'Mohammed',
    email: 'baghdi.mohammed@est-umi.ac.ma',
    address: 'Rabat',
    role: 'Secrétaire Général',
    department : '',
  },
  {
    Uid: 8,
    photo: '',
    nom: 'CHAHIR',
    prenom: 'Saida',
    email: 'saida.chahir@est-umi.ac.ma',
    address: 'Meknes',
    role: 'Service Scolarité',
    department : '',
  },
  {
    Uid: 9,
    photo: '',
    nom: 'REGRAGUI',
    prenom: 'Fatiha',
    email: 'fatiha.regragui@est-umi.ac.ma',
    address: 'Rabat',
    role: 'Chef du Département Techniques de Management',
    department : 'Techniques de Management',
    
  },
  {
    Uid: 10,
    photo: '',
    nom: 'MRANI',
    prenom: 'nabil',
    email: 'nabil.mrani@gmail.com',
    address: 'meknes',
    role: 'Professeur',
    department : 'Informatique',
  },
  {
    Uid: 11,
    photo: '',
    nom: 'Lahmer',
    prenom: 'Mohammed',
    email: 'mohammed.lahmer@gmail.com',
    address: 'Meknes',
    role: 'Professeur',
    department : 'Informatique',
  },
  {
    Uid: 12,
    photo: '',
    nom: 'Addadi',
    prenom: 'Amina',
    email: 'amina.addadi@gmail.com',
    address: 'meknes',
    role: 'Professeur',
    department : 'Informatique',
  },
  {
    Uid: 13,
    photo: '',
    nom: 'Ghazali',
    prenom: 'Yassine',
    email: 'yassine.ghazali@gmail.com',
    address: 'meknes',
    role: 'professeur',
    department : 'Informatique',
  },
  {
    Uid: 14,
    photo: '',
    nom: 'EL OUAZZANI',
    prenom: 'Rajae',
    email: 'elouzzani.rajae@gmail.com',
    address: 'Casablanca',
    role: 'Professeur',
    department : 'Informatique',
  },
  {
    Uid: 15,
    photo: '',
    nom: 'CHANA',
    prenom: 'Idriss',
    email: 'chana.idriss@gmail.com',
    address: 'Rabat',
    role: 'Professeur',
    department : 'Informatique',
  },
  {
    Uid: 16,
    photo: '',
    nom: 'BARRADA',
    prenom: 'Mohammed',
    email: 'Mohammed.barrada@gmail.com',
    address: 'Rabat',
    role: 'Professeur',
    department : 'Informatique',
  },
  {
    Uid: 17,
    photo: '',
    nom: 'BENAMAR',
    prenom: 'Mariya',
    email: 'benamer.mariya@gmail.com',
    address: 'Meknes',
    role: 'Professeur',
    department : 'Informatique',
  },
  {
    Uid: 18,
    photo: '',
    nom: 'BENAMER',
    prenom: 'Nabil',
    email: 'benamer.nabil@gmail.com',
    address: 'Meknes',
    role: 'Professeur',
    department : 'Informatique',
  },
  {
    Uid: 19,
    photo: '',
    nom: 'NASIRI',
    prenom: 'Samia',
    email: 'nasiri.samia@gmail.com',
    address: 'Rabat',
    role: 'Professeur',
    department : 'Informatique',
  },
  {
    Uid: 20,
    photo: '',
    nom: 'LOUMMOU',
    prenom: 'Brahim',
    email: 'brahim.loummou@gmail.com',
    address: 'Casa',
    role: 'Professeur',
    department : 'Techniques de Management',
  }
];

@Component({
  selector: 'users-table-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})

export class UserCardComponent implements OnInit {

  displayedColumns: string[] = ['Uid', 'photo', 'nom', 'prenom', 'email', 'address', 'role','department'];
  dataSource = new MatTableDataSource<Users>(USER_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
