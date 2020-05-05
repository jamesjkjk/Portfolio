import { Component, OnInit } from '@angular/core';
import { timer } from "rxjs";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  time=50.45;
  time_string="";
  isRunning=true;
  constructor() { }

  ngOnInit() {
    timer(0,10).subscribe(ellapsedCycles => {
      if(this.isRunning && this.time>.01){
        this.time=this.time-.01;
        this.time_string=this.time.toFixed(2);
      }
    });
    }

}

