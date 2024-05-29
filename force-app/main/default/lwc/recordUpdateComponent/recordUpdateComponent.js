import { LightningElement, api } from 'lwc';
import accountName from '@salesforce/schema/Account.Name';
import accounttype from '@salesforce/schema/Account.Type';
import accountEmp from '@salesforce/schema/Account.NumberOfEmployees';
import accountIndustry from '@salesforce/schema/Account.Industry';
export default class RecordUpdateComponent extends LightningElement {

  Name = accountName;
  Type = accountEmp;
  NumberOfEmployees =  accounttype;
  Industry = accountIndustry;

  fields = {accountName,accounttype,accountIndustry,accountEmp};
  @api recordId;
  @api objectApiName;
}