import { Component, OnInit, Inject } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from '../../../node_modules/rxjs';
import { Data } from '../data';

export interface DialogData {
  key: string;
  value: string;
}


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class ListingComponent implements OnInit {
  public uData = [];
  displayedColumns: string[] = ['name', 'type', 'status'];
  dataSource = new UserDataSource(this.userData);
  vals : any[];
  test: number = 0;
  
  animal: string;
  name: string;
  expandedElement: Data | null;
  constructor(private userData: UserDataService, public dialog: MatDialog) { }

  openDialog(val): void {
    this.test = 1;
    this.vals = val;
    this.dialog.open(DialogOverviewExampleDialog,{
      width: '500px',
      data:this.vals
      
      })
      .afterClosed().subscribe(result => {
        
        this.vals= result;
        this.test = 0;
      });
    }  
  
  ngOnInit() {
    
    this.userData.getData().subscribe(data => {this.uData = data});
  }
}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrls: ['./dialog-style.css']
})


export class DialogOverviewExampleDialog {
  filters: any[] = [{ key: '', value: '' }];
  constructor( public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,@Inject(MAT_DIALOG_DATA) public data: {filters : this.vals}) {
    
  }test made some ch

  onNoClick(): void {
    this.dialogRef.close(this.filters);
    
  }
  addFilter() {
    this.filters = [...this.filters, { key: '', value: '' }];
  }
  deleteFilter(id:number){
    console.log(id);
    this.filters.splice(id,1);
  }
}

export class UserDataSource extends DataSource<any> {
  constructor(private userService: UserDataService) {
    super();
  }
  connect(): Observable<Data[]> {
    return this.userService.getData();
  }
  disconnect() {}
}