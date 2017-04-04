export interface IContact {
    id: number;
    name: string;
    tel: string;
    email: string;
    imageId ?: number;

}

export class Contact implements IContact {
  name:string;
  tel:string;
  email:string;
  imageId:number;
  id:number;
  constructor() {}
}

