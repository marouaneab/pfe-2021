export interface Member {
  id: number;
  classification: Classification;
  role: Role;
  firstName: string;
  lastName: string;
  mail: string;
  image?: string;
}

export enum Classification {
  Loi = 'membre par loi',
  Design = 'membre désigné',
  Elu = 'membre elu'
}

export enum Role {
  Directeur = 'directeur',
  Adjoint = 'directeur adjoint',
  ChefDept = 'chef de département',
  PA = 'professeur assistant',
  PH = 'professeur habilité',
  PES = 'professeur d\'enseignement supérieur',
  Admin = 'administrateur',
  Tech = 'technecien',
  Etud = 'étudiant',
  Membre = 'membre'
}
