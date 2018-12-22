import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public uData:any;
  public test:any;
  constructor(private route: ActivatedRoute, private userData: UserDataService) { }

  ngOnInit() {
    
    let jobId = this.route.snapshot.params.id;
    var currentTime = new Date();
    console.log(jobId, currentTime);
    this.userData.getData().subscribe(data => {
      this.uData = data
    });
   
    
  } 

}
