import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SideNavService } from './side-nav.service';
import { NotificationsService } from 'angular2-notifications';

import { Guid } from 'guid-typescript';
import { ThisReceiver } from '@angular/compiler';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'] 
})
export class SideNavComponent implements OnInit {
  lkDetail: any;
  displayBasic:boolean=false;
  editDialogVisible: boolean = false;
  public IsAddFormVisible = false;
  public lkdetaills: any;
  title: any;
  public lkmaster: lkdetail;
  disabl: boolean = true;
  public lkmasterss: any;
  opened: boolean = true;
  add_Lease_Type: boolean = false;
  displayedColumns: string[] = ['id', 'customerStatus', 'addNew', 'edit'];
  dataSource: MatTableDataSource<lkdetail> = new MatTableDataSource();
  lk_detail: lkdetail = new lkdetail();
  add_Newlkdetail: boolean = false;
  currentLink: number = 0;
  component: number = 1; 
  public onclose = new EventEmitter();
  @Output() saveDataCompleted = new EventEmitter();
  public lkdetail: any;
  lkdetails: any;
  lkde: any;
  IsAddJournalEntryFormVisible = false;
  disable: any;
  display: boolean = false;
  lkmastersss: any;
  selectedRow: any;

  constructor(
    public SideNavService: SideNavService,
    public notificationsService: NotificationsService
  ) { 
    this.lkmaster = new lkdetail();
  }

  isActive: boolean = false;

  ngOnInit(): void { 
    this.getLkDetail();
    this.getdescription(); 
    this.getdescriptionsssssssss(); 
    console.log(this.lkmaster.lkmaster_master_code)
  }

  passdata(ee: any) {
    console.log('eeeeee', ee.target.value);
    this.SideNavService.getisactive().subscribe({
      next: (response: any) => {
        console.log("lkdetail", response);
        this.lkdetail = response.lkdetailDo;
        this.lkdetail = this.lkdetail.find((value: any) => value.lkmaster_master_code === ee.target.value);
        console.log("lkdetailllll", this.lkdetail);
        this.SideNavService.lkmaster_master_code = this.lkdetail.lkmaster_master_code;
        this.getisactive(this.SideNavService.lkmaster_master_code);
        this.getisactives(this.SideNavService.lkmaster_master_code);
      },
      error: (error) => {
        // Handle error
      }
    });
  }

  addlkdetail() {
    this.IsAddFormVisible = true;
    console.log(this.lkdetail.lkmaster_master_code);
    this.lkmaster.lkmaster_master_code = this.lkdetail.lkmaster_master_code;
  }

  // getlkdetail(lkmasastercode: any) {
  //   // Implement your logic here
  // }

  Addnew() {
    this.display = true;
    this.lkmaster.lkmaster_master_code;
    this.IsAddJournalEntryFormVisible = !this.IsAddJournalEntryFormVisible;

    console.log("lkdetailllll", this.lkdetail);
    this.SideNavService.lkmaster_master_code = this.lkmaster.lkmaster_master_code;
    console.log('aaa', this.SideNavService.lkmaster_master_code)
    this.lkmaster.lkdetail_code = Guid.create();
    this.lkmaster.lkdetail_code = this.lkmaster.lkdetail_code.value; 
    this.lkmaster.parent = Guid.create();
    this.lkmaster.parent = this.lkmaster.parent.value;
  }
  edit(row: any) {
    console.log('logggggg',row);
    
    this.display = true;
    this.add_Newlkdetail = true;
   
    this.lkmaster.lkdetail_code = row.lkdetail_code;
    // this.lkmaster.lkdetail_code = this.lkmaster.lkdetail_code.value; 
    this.SideNavService.lkmaster_master_code=row.lkmaster_master_code
    this.lkmaster.english_description=row.english_description
    this.lkmaster.amharic_description=row.amharic_description
    this.lkmaster.tigrigna_description=row.tigrigna_description
    this.lkmaster.oromiffa_description=row.oromiffa_description
    this.lkmaster.isActive=row.isActive
    this.lkmaster.parent=row.parent
    // this.lkmaster.parent = Guid.create();
    // this.lkmaster.parent = this.lkmaster.parent.value;
    }
  
  Save() { 
    console.log(this.lkmaster); 
    this.lkmaster.lkmaster_master_code = this.SideNavService.lkmaster_master_code;
    this.lkmaster.parent = this.lkmaster.parent; 
    this.SideNavService.Savelkdetail(this.lkmaster).subscribe({
      next: (response) => {
        this.getisactive(this.SideNavService.lkmaster_master_code)
        // this.getlkdetaill();  
        const toast = this.notificationsService.success("Success", "Successfully Saved");
        this.clearForm();
      },
      error: (error) => {
        console.log("res", error);
      }
    });
  }

  cancele() {
    this.IsAddFormVisible = false;
  }

  getdescription() {
    this.SideNavService.getdescription().subscribe(
      {
        next: (response: any) => {
          console.log('abbb', response)
          this.lkmasterss = response["lKmasterDo"];
          console.log('kkkkkkkk', this.title)
        },
        error: (error) => {  
        }
      });
  }

  getdescriptionsssssssss() {
    this.SideNavService.getlkdetail().subscribe(
      {
        next: (response: any) => {
          console.log('Save to Lkdeatils', response)
          this.lkdetail = response["lkdetailDo"];
          console.log('kkkkkkkk', this.title)
        },
        error: (error) => {
        }
      });
  }

  getisactive(id: any) {
    this.SideNavService.getisactive().subscribe(
      {
        next: (response: any) => {
          console.log("lkdetail", response);
          this.lkde = response["lKdetailDo"];
          console.log("lkdetail", response);
          this.lkde = response
          this.lkde = this.lkde.lkdetailDo;
          this.lkde = (Object.assign([], this.lkde)); 
          console.log("get-lkdetail", id);
          this.lkde = this.lkde.filter((value: any) => value['lkmaster_master_code'] == id)
          console.log("lkdetailss", this.lkde )
        },
        error: (error) => {
        }
      });
  }
  getLkDetail() {
    this.SideNavService.getLkDetail().subscribe(
      (data: any) => {
        this.lkDetail = data;
      },
    
    );
  }
  clearForm() {
    this.IsAddFormVisible = !this.IsAddFormVisible;
    this.SideNavService.lkmaster_master_code = this.lkmaster.lkmaster_master_code
    console.log('lkmaster master code', this.SideNavService.lkmaster_master_code)
    this.lkmaster.lkdetail_code = Guid.create();
    this.lkmaster.lkdetail_code = this.lkmaster.lkdetail_code.value; 
    this.lkmaster.parent = Guid.create();
    this.lkmaster.parent = this.lkmaster.parent.value;
  }

  getisactives(id: any) {
    this.SideNavService.getdescription().subscribe(
      {
        next: (response: any) => {
          console.log('abbb', response)       
          this.lkmastersss = response
          this.lkmastersss = this.lkmastersss.lKmasterDo;
          this.lkmastersss = (Object.assign([], this.lkmastersss)); 
          console.log("get-lkmasterssstail", id);
          this.lkmastersss = this.lkmastersss.filter((value: any) => value['lkmaster_code'] == id)
          console.log("lkmasterssstailss", this.lkmastersss[0].description)
          this.title = this.lkmastersss[0].description
        },
        error: (error) => {
        }
      });
  }

  getlkdetaill() {
    this.SideNavService.getlkdetaill().subscribe(
      {
        next: (response: any) => {
          console.log("get lkdetails", response);
          this.lkdetaills = response["lKdetailDo"];
        },
        error: (error) => {
          const toast = this.notificationsService.error(
            "Error",
            "SomeThing Went Wrong"
          );
        }
      });
  }

  performUpdate($event: any) {
    this.lkmaster = $event.data;
    this.IsAddJournalEntryFormVisible = false;
    console.log("event", $event);
  }

  closeup() {
    this.onclose.emit();
  }

  addNewlkdetail() {
    this.lk_detail = new lkdetail();
    this.add_Newlkdetail = true;
  };

  getCustomerComponent() {
    this.component = 1;
    this.currentLink = this.component;
  }

  getlkmasterComponent() {
    this.component = 2;
    this.currentLink = this.component;
  }

  editRow(row: any) {
    this.selectedRow = row;
    console.log("selected row", this.selectedRow);
  }
}

export class lkdetail {
  public lkdetail_code: any;
  public lkmaster_master_code: any;
  public english_description: any;
  public amharic_description: any;
  public tigrigna_description: any;
  public oromiffa_description: any;
  public isActive: any;
  public parent: any;
}