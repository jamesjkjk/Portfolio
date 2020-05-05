import { Component, OnInit } from '@angular/core';
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faUserCircle } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  faLinkedin=faLinkedin;
  faGithub=faGithub;
  faEnvelope=faEnvelope;
  faUserCircle=faUserCircle;
  constructor() {}

  ngOnInit() {
    
  }

}
