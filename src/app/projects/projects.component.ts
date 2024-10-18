import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations'
import { Project } from '../models/Project';
import { faWindowClose } from '@fortawesome/free-regular-svg-icons';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('myModalTrigger', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('200ms ease-out', style({ opacity: '1' })),
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({ opacity: '0' }))
      ])
    ]),
  ]
})

export class ProjectsComponent implements OnInit {
  faWindowClose = faWindowClose;
  projects!: Project[];
  display = false;
  currentProject!:Project | null;
  constructor() { }

  ngOnInit() {
    this.projects=[]
    this.projects.push({
      name: 'F1Charts',
      summary: `A web app that consumes public accessible API from OpenF1 to create visualization charts. PlotylJS was used to create the charts. This web app has a frontend and a server that are both deployed to Azure.`,
      thumbnail: 'assets/f1charts/openf1-results.PNG',
      imagePath: [
        'assets/f1charts/openf1-results.PNG',
        'assets/f1charts/openf1-results2.PNG',
        'assets/f1charts/openf1-runcompare.PNG'
      ],
      code_link: 'https://github.com/jamesjkjk/f1charts',
      demo_link: 'https://f1charts-frontend-ggd4haevc6h7btbm.westus-01.azurewebsites.net/',
      technologies: ['Angular 15', "PlotlyJS", "TypesScript", "NodeJS", "Express", "Github Workflow", "Azure Cloud Services"]
    })
    this.projects.push({
      name: 'Portfolio',
      summary: `The current portfolio that you are viewing. This was done in Angular. This is deployed to an Azure Static Web App. Also note that Azure resources were used to purchase a domain and route it to this web app.`,
      thumbnail: 'assets/pics/portfolio.PNG',
      imagePath: ['assets/pics/portfolio.PNG'],
      code_link: 'link',
      demo_link: 'link',
      technologies: ['Angular 15','Azure','Typescript']
    });
    console.log(this.projects)
  }

  openModal(project:Project) {
    this.currentProject = project;
    this.display = true;
  }

  closeModal() {
    this.display = false;
    this.currentProject = null;
  }

}