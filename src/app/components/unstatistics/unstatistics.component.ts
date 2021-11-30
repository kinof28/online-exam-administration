import { Component, OnInit } from '@angular/core';
import { ExamService } from 'src/app/services/exam.service';
import { StudentService } from 'src/app/services/student.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-unstatistics',
  templateUrl: './unstatistics.component.html',
  styleUrls: ['./unstatistics.component.css'],
})
export class UnstatisticsComponent implements OnInit {
  exams?: number;
  students?: number;
  teachers?: number;
  constructor(
    private examService: ExamService,
    private studentService: StudentService,
    private teacherService: TeacherService
  ) {}

  ngOnInit(): void {
    this.examService.getAll().subscribe((data) => {
      this.exams = data.length;
    });
    this.studentService.getAll().subscribe((data) => {
      this.students = data.length;
    });
    this.teacherService.getAll().subscribe((data) => {
      this.teachers = data.length;
    });
  }
}
