import { Participant } from './participant.model';

export interface CourseResponse {
  id: string;
  coursenumber: string;
  language: string;
  level: string;
  participants: Participant[];
  wordFilePath?: string;
  importFilePath?: string;
}
