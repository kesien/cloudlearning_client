import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CourseResponse } from '../_models/courseresponse.model';
import { AlertService } from '../_services/alert.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  @Input() course?: CourseResponse;
  baseUrl = environment.baseApiUrl + 'files/';
  constructor(private alertService: AlertService) {}

  ngOnInit(): void {}

  copyToClipBoard() {
    const emails: string[] = [];
    this.course?.participants.forEach((participant) =>
      emails.push(participant.email)
    );
    navigator.clipboard.writeText(emails.join(',')).then(
      () => this.alertService.info('Copied to the clipboard!'),
      (err) => this.alertService.error(err)
    );
  }
}
