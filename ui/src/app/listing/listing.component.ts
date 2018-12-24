import { Component, OnInit, Inject } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-listing',
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
    public uData = [];
    test: number = 0;
    animal: string;
    name: string;
    constructor(private userData: UserDataService, public dialog: MatDialog) { }

    openDialog(): void {
        this.test = 1;
        this.dialog.open(DialogOverviewExampleDialog, { width: '500px' })
            .afterClosed().subscribe(result => console.log(JSON.stringify(result, null, 4)));
    }

    ngOnInit() {
        this.userData.getData().subscribe(data => {
            this.uData = data
            //console.log(this.uData)
        });
    }
}


@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'dialog-overview-example-dialog.html',
    styleUrls: ['./dialog-style.css']
})
export class DialogOverviewExampleDialog {

    constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialog>, @Inject(MAT_DIALOG_DATA) public filters: Array<any>) {
        this.addFilter();
    }

    public onNoClick(): void {
        this.filters = this.filters || [];
        this.filters = this.filters.filter(filter => !!filter.key && !!filter.value);
        this.dialogRef.close(this.filters);
    }

    public addFilter() {
        this.filters = this.filters || [];
        this.filters = [...this.filters, { key: '', value: '' }];
    }
}
