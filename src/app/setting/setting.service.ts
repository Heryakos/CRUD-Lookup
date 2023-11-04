import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  public lkmasterUrl = environment.rootApiPath + "TBLControllers/LKmaster";
  public isactiveUrl =environment.rootApiPath + "TBLControllers/lkdetail";
  constructor(private http: HttpClient) { }

  
  getlkmaster() {
    return this.http.get(this.lkmasterUrl);
  }
  updatelkmaster(lkmaster: any) {
    return this.http.put(this.lkmasterUrl, lkmaster);
  }
  getisactive() {
    return this.http.get(this.isactiveUrl);
  }
}
