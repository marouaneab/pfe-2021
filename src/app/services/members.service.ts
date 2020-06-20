import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Classification, Department, Grade, Member} from "../interfaces/Member";
import {AngularFireDatabase} from "@angular/fire/database";
import ThenableReference = firebase.database.ThenableReference;

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  private _members: BehaviorSubject<Member[]> = new BehaviorSubject<Member[]>([]);

  constructor(private db: AngularFireDatabase) {
    this.db.list('Conseils/Members').snapshotChanges().subscribe(el => {
      this._members.next([]);
      el.forEach(e => {
        const key = e.key;
        const member = e.payload.val() as {
          nom: string, prenom: string,
          mail: string, adresse?: string,
          grade: string, classification?: string,
          department?: string
        };

        this._members.next([...this._members.value, {
          id: key,
          nom: member.nom,
          prenom: member.prenom,
          mail: member.mail,
          adresse: member.adresse,
          grade: Grade[member.grade],
          classification: this.class(member.classification),
          department: this.dept(member.department)
        }]);
      });
    });
  }

  get ALL_MEMBERS() {
    return this._members;
  }

  grade(gr: string): Grade {
    switch (gr.toLowerCase()) {
      case "directeur": return Grade.Directeur;
      case "adjoint": return Grade.Directeur;
      case "pa": return Grade.PA;
      case "chef_dept": return Grade.ChefDept;
      case "member": return Grade.Membre;
      case "étudiant": return Grade.Etud;
    }
  }

  class(gr: string): Classification {
    switch (gr.toLowerCase()) {
      case "design": return Classification.Design;
      case "loi": return Classification.Loi;
      case "elu": return Classification.Elu;
    }
  }

  dept(dp: string): Department {
    return Department[dp];
  }

  grade2str(grade: Grade): string {
    for (let o in Grade) {
      if (grade === Grade[o]) return o;
    }
    return grade;
  }

  class2str(classification: Classification) {
    for (let o in Classification) {
      if (classification === Classification[o]) return o;
    }
    return classification;
  }

  dep2str(department: Department) {
    for (let o in Department) {
      if (department === Department[o]) return o;
    }
    return department;
  }

  update(result: Member): Promise<void> {
    const obj = this.db.object('Conseils/Members/' + result.id);
    delete result.id;
    this.chck4null(result);
    return obj.set(result);
  }

  add(result: Member): ThenableReference {
    delete result.id;
    this.chck4null(result);
    return this.db.list('Conseils/Members').push(result);
  }

  private chck4null(result: Member) {
    for (let o in result) if (result.hasOwnProperty(o)) if (result[o] === undefined) result[o] = null;
  }
}
