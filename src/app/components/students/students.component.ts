import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/modules/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  students$?: Observable<Student[]>;
  constructor(private service: StudentService) {}

  ngOnInit(): void {
    this.students$ = this.service.getAll();
  }
  delete(id: string | any): void {
    if (
      confirm(
        'are u sure that u want to delete this student ?\nthis action can not be undone please be carefull'
      )
    ) {
      this.service.deleteOne(id).subscribe((data) => {
        this.ngOnInit();
      });
    }
  }
}
