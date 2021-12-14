import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CourseResponse } from '../_models/courseresponse.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  @Input() course?: CourseResponse;
  baseUrl = environment.baseApiUrl + 'files/';
  constructor() {}

  ngOnInit(): void {}
}
