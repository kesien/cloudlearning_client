import { Component, OnInit } from '@angular/core';
import { CourseRequest } from '../_models/courserequest.model';
import { CourseResponse } from '../_models/courseresponse.model';
import { AlertService } from '../_services/alert.service';
import { CloudService } from '../_services/cloud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  courseRequest: CourseRequest = {
    coursenumber: '',
    cloudlearning: false,
    homework: false,
    ebook: false,
  };

  courses?: CourseResponse[];
  constructor(
    private cloudService: CloudService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.courseRequest = {
      coursenumber: '',
      cloudlearning: false,
      homework: false,
      ebook: false,
    };
  }

  getData() {
    const req: CourseRequest[] = [];

    for (let course of this.courseRequest.coursenumber.split(',')) {
      course = course.replace(/\s/g, '');
      console.log(course);

      req.push({
        coursenumber: course,
        cloudlearning: this.courseRequest.cloudlearning,
        homework: this.courseRequest.homework,
        ebook: this.courseRequest.ebook,
      });
    }
    this.cloudService.getData(req).subscribe(
      (response) => (this.courses = response as CourseResponse[]),
      (error) => this.alertService.error(error),
      () => (this.courseRequest.coursenumber = '')
    );
  }
}
