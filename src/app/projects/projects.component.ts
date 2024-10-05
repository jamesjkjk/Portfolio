import { Component, OnInit } from '@angular/core';
import { trigger, style,animate,transition } from '@angular/animations'
import { Project } from '../models/Project';
import { faWindowClose } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('myModalTrigger', [
      transition(':enter', [
        style({ opacity:'0'}),
        animate('200ms ease-out', style({ opacity: '1' })),
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({ opacity:'0' }))
      ])
    ]),
  ]
})

export class ProjectsComponent implements OnInit {
  faWindowClose=faWindowClose;
  projects:Project[] = [];
  display=false;

  constructor() { }

  ngOnInit() {
    this.projects.push({
      name:'Feddit',
      summary: 'content blach fdsak hnfldshakl fhdsjk alfhdjksa hfkjdsh akfds ahkjfdhskaj fhdsatiueayfkjdhsjkafh dsiahf jkdsh ajkfhdjksa hfkjdshakjfdh skajf hdksa.',
      img:'F_logo.png',
      imagePath:'assets/pics/F_logo.png',
      code_link: 'link',
      demo_link: 'link',
      technologies: ['MongoDB','ExpressJS','Angular8','NodeJS','HTML & CSS','TypeScript','AWS']
    });
  }
  openModal(){
    this.display=true;
    console.log(this.display)
  }
  closeModal(){
    this.display=false;
    console.log(this.display)

  }
}