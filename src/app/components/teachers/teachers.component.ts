import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';
import { Teacher } from 'src/app/modules/teacher';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
})
export class TeachersComponent implements OnInit {
  teachers$?: Observable<Teacher[]>;
  constructor(private service: TeacherService) {}

  ngOnInit(): void {
    this.teachers$ = this.service.getAll();
  }

  delete(id: number | any): void {
    if (
      confirm(
        'are u sure that u want to delete this teacher ?\nthis action can not be undone please be carefull'
      )
    ) {
      this.service.deleteOne(id).subscribe((data) => {
        this.ngOnInit();
      });
    }
  }
}
