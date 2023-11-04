import { Component, OnInit } from '@angular/core';
// import { NotificationsService } from 'angular2-notifications';
import { SettingService } from '../setting.service';

@Component({
  selector: 'app-lk-master',
  templateUrl: './lk-master.component.html',
  styleUrls: ['./lk-master.component.css']
})
export class LkMasterComponent implements OnInit {
  public lkmasters: any;
  public lkmaster: Lkmaster;
  public IsAddFormVisible = false;
  lkdetail: any;
  // Lkmaster: Object;
  constructor( 
    private SettingService: SettingService,
    
    // private notificationsService: NotificationsService
  ) {
    this.lkmaster = new Lkmaster();
  }
  ngOnInit(): void {
    this.getlkmaster();
  }
  getisactive() {
    this.SettingService.getisactive().subscribe(
      
     { next: (response:any) => {
      
        
        this.lkdetail = response["lKdetailDo"];
        this.lkdetail = this.lkdetail.filter((value:any) => value['closed']==  true )
        console.log("lkdetail", response);
      },
     error: (error) => {
        // const toast = this.notificationsService.error(
        //   "Error",
        //   "SomeThing Went Wrong"
        // );
      }
     } );
  }
  getlkmaster() {
    this.SettingService.getlkmaster().subscribe(
      { next: (response:any) => {
        
        // this.lkmasters = response;
        console.log('abbb',response)
        this.lkmasters = response["lKmasterDo"];
        
      },
     error: (error) => {
       
      }
  });
  }


}

export class Lkmaster{
  public lkmaster_code: any;
  public description: any;
  public parent: any;
  public TopicORModule: any;
  public Form_Code: any;

}
