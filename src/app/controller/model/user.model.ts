import {Chaine} from './chaine.model';

export class User {
  public id: number;
  public ref: string;
  public login: string;
  public password: string;
  public chaines = new Array<Chaine>();

}

