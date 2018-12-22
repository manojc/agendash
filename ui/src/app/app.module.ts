import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingComponent, DialogOverviewExampleDialog } from './listing/listing.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule,MatCheckboxModule, MatTableModule, MatFormFieldModule, MatInputModule, MatCardModule, MatDialogModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    DetailsComponent, 
     
     DialogOverviewExampleDialog
  ],
  imports: [
    
    BrowserModule,
    HttpClientModule, 
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  entryComponents: [DialogOverviewExampleDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
