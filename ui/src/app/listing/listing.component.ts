import { Component, OnInit, inject, Inject } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { MatTableDataSource, MatFormField, matFormFieldAnimations, MatInput,MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { style } from '@angular/animations';

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  public uData = [];
  test:number = 0;
  animal: string;
  name: string;
  constructor(private userData: UserDataService, public dialog : MatDialog) { }
    
    openDialog(): void {
      const dialogRef = this.dialog.open( DialogOverviewExampleDialog, {
        width: '500px',
        
        data: {name: this.name, animal: this.animal},
        
      });
      
      this.test = 1;
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.test = 0;
      });
    }
  


  

  ngOnInit() {
    this.userData.getData().subscribe(data => {
      this.uData = data,
        console.log(this.uData)
    });

    
  }
  
}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrls: ['./dialog-style.css']
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
