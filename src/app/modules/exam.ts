import { Teacher } from './teacher';

export class Exam {
  id?: number;
  option?: string;
  startDate?: Date;
  endDate?: Date;
  teacher?: Teacher;
}
