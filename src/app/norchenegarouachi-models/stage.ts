export class Stage {
  id!: number;
  Titre!: string;
  Description!: string;
  Entreprise!: string;
  Disponible!: boolean;
  nbrInteresse!: number;

  constructor() {
    this.Disponible = true;
    this.nbrInteresse = 0;
  }
}