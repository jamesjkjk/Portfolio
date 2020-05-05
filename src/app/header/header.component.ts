import { Component, OnInit } from '@angular/core';
import { trigger, style,animate,transition } from '@angular/animations'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ height:'0'}),
        animate('300ms ease-out', style({ height: '100%' })),
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ height:'0' }))
      ])
    ]),
  ]
})

export class HeaderComponent implements OnInit {
  isShown=false;
  constructor() { }

  ngOnInit() {
    
  }
  
  enter(){
    this.isShown=!this.isShown;;
  }
  leave(){
    this.isShown=false;
  }
}
