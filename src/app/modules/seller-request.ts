import { Account } from "./account";

export class SellerRequest {
    id:number=0;
    idNumber: number=0;
    faceImage:string="";
    idImage:string="";
    client:Account=new Account();
}
