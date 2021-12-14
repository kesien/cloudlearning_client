import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CourseRequest } from '../_models/courserequest.model';

@Injectable({
  providedIn: 'root',
})
export class CloudService {
  baseUrl = environment.baseApiUrl + 'api/switch/courses';
  constructor(private http: HttpClient) {}

  getData(courses: CourseRequest[]) {
    return this.http.post(this.baseUrl, courses);
  }
}
