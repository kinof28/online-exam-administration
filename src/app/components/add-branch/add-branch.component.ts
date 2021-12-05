import { CreateBranchRequest } from './../../modules/create-branch-request';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Branch } from 'src/app/modules/branch';
import { UniversisityService } from 'src/app/services/universisity.service';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css'],
})
export class AddBranchComponent implements OnInit {
  request: CreateBranchRequest = {
    SuperId: 0,
    name: '',
    description: '',
  };
  specialities: Branch[] = [];
  selectedSpeciality: Branch | any;
  addSpeciality: boolean = false;
  constructor(
    private service: UniversisityService,
    private dialogRef: MatDialogRef<AddBranchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {
    if (this.data.branch != null && this.data.branch != undefined) {
      this.request.name = this.data.branch.name;
      this.request.description = this.data.branch.description;
    }
    if (this.isOption()) {
      this.service
        .getAllSpecialities(this.data.departmentId)
        .subscribe((data) => {
          this.specialities = data;
        });
    }
  }
  public closeMe() {
    this.dialogRef.close();
  }
  isDegree(): boolean {
    return this.data.title == 'Degree';
  }
  isOption(): boolean {
    return this.data.title == 'Option';
  }
  selectSpeciality(id: number): void {
    this.service.getSpeciality(id).subscribe((data) => {
      this.selectedSpeciality = data;
    });
  }
  add() {
    this.request.SuperId = this.data.SuperId;
    console.log(this.request);
    if (this.data.type == 'edit') {
      this.service
        .editBranch(
          {
            id: this.data.branch.id,
            name: this.request.name,
            describtion: this.request.description,
          },
          this.data.title
        )
        .subscribe((data) => {
          if (data.startsWith('updated')) window.location.reload();
        });
    } else {
      if (this.addSpeciality) {
        this.selectedSpeciality.departmentId = this.data.departmentId;
        this.service
          .createSpeciality(this.selectedSpeciality)
          .subscribe((data) => {
            console.log(data);
            if (data.startsWith('created')) {
              this.request.specialityID = Number(data.substr(7));
              console.log(this.request.specialityID);
              this.service
                .createBranch(this.request, this.data.title)
                .subscribe((data) => {
                  // console.log(data);
                  if (data.startsWith('created')) window.location.reload();
                });
            }
          });
      } else {
        this.service
          .createBranch(this.request, this.data.title)
          .subscribe((data) => {
            // console.log(data);
            if (data.startsWith('created')) window.location.reload();
          });
      }
    }
  }
  addSpecialityF(): void {
    this.addSpeciality = !this.addSpeciality;
    this.selectedSpeciality = new Branch();
  }
  isEdit(): boolean {
    return this.data.type == 'edit';
  }
}
