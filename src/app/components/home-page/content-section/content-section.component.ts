import { Component, Input, OnInit } from '@angular/core';
import { BasePageComponent } from '../../base/base-page/base-page.component';
import { ProjectSection } from '../../../models/types.models';



@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrl: './content-section.component.scss'
})
export class ContentSectionComponent extends BasePageComponent implements OnInit {

  @Input() _projectDescription!: ProjectSection;

  public projectDescription!: ProjectSection;

  constructor() { 
    super() 
  }

  ngOnInit() {
    this.projectDescription = this._projectDescription;
  }

}
