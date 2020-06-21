export interface Member {
  id?: string;
  image?: string;
  nom: string;
  prenom: string;
  mail: string;
  adresse ?: string;
  grade: Grade;
  classification ?: Classification;
  department ?: Department;
}

export enum Classification {
  Loi = 'membre par loi',
  Design = 'membre désigné',
  Elu = 'membre elu'
}

export enum Department {
  GI = 'Informatique',
  GE = 'Eléctrique',
  TCC = 'Techniques de Commercialistaion et de Communication',
  TM = 'Techniques de management'
}

export enum Grade {
  Directeur = 'directeur',
  Adjoint = 'directeur adjoint',
  ChefDept = 'chef de département',
  PA = 'professeur assistant',
  PH = 'professeur habilité',
  PES = 'professeur d\'enseignement supérieur',
  Admin = 'administrateur',
  Tech = 'technicien',
  Etud = 'étudiant',
  Membre = 'membre'
}
