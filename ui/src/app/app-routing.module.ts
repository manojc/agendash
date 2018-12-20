import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MAT_OPTION_PARENT_COMPONENT } from '@angular/material';
import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  
  {
  path: '',
  component: ListingComponent
}, {
  path: 'List',
  component: ListingComponent,
}, {
  path: 'Details/:id',
  component: DetailsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
