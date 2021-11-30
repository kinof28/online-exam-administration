import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ExamService } from 'src/app/services/exam.service';
import { Exam } from 'src/app/modules/exam';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css'],
})
export class ExamsComponent implements OnInit {
  exams$?: Observable<Exam[]>;
  constructor(private service: ExamService) {}

  ngOnInit(): void {
    this.exams$ = this.service.getAll();
  }
  delete(id: number | any): void {
    if (
      confirm(
        'are u sure that u want to delete this exam ?\nthis action can not be undone please be carefull'
      )
    ) {
      this.service.deleteOne(id).subscribe((data) => {
        this.ngOnInit();
      });
    }
  }
}
