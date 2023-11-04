import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { lkdetail } from './side-nav.component';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  public descriptionUrl = environment.rootApiPath + "TBLControllers/LKmaster";
  public isactiveUrl = environment.rootApiPath + "TBLControllers/lkdetail";
  public lkdetaillsUrl = environment.rootApiPath + "TBLControllers/lkdetail";
  public lkdetailUrl = environment.rootApiPath + "TBLControllers/lkdetail";
  lkmaster_code: any;
  lkmaster_master_code: any;


  constructor(private http: HttpClient) { }
  getdescription() {
    return this.http.get(this.descriptionUrl);
  }
  getisactive() {
    return this.http.get(this.isactiveUrl);
  } 
  getlkdetaill() {
    return this.http.get(this.isactiveUrl);
  } 
  getlkdetail() {
    return this.http.get(this.lkdetaillsUrl);
  }
  getLkDetail() {
    return this.http.get(this.lkdetailUrl);
  }
  Savelkdetail(lkmaster: any) {
    return this.http.put(this.lkdetailUrl, lkmaster);
  }
}
