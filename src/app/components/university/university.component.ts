import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Branch } from 'src/app/modules/branch';
import { UniversisityService } from 'src/app/services/universisity.service';
import { AddBranchComponent } from '../add-branch/add-branch.component';
import { BranchViewComponent } from '../branch-view/branch-view.component';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css'],
})
export class UniversityComponent implements OnInit {
  @Input() branches?: Branch[];
  @Input() level: number = 0;
  @Input() id: number = 0;
  @Input() departmentId: number = 0;
  errorMessage: string = '';
  selectedBranch: Branch = new Branch();
  constructor(
    private service: UniversisityService,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    if (this.branches == null || this.branches.length < 1) {
      this.service.getAllBranches().subscribe((data) => {
        // console.log(data);
        this.branches = data;
      });
    }
  }
  hasChild(branch: Branch): boolean {
    return branch.children?.length > 0;
  }
  expand(branch: Branch): void {
    branch.expanded = !branch.expanded;
  }
  levelString(): string {
    switch (this.level) {
      case 0:
        return 'Faculty';
      case 1:
        return 'Department';
      case 2:
        return 'Degree';
      case 3:
        return 'Option';
      // case 4:
      //   return 'Speciality';
      default:
        return '';
    }
  }
  add(): void {
    this.dialog.open(AddBranchComponent, {
      data: {
        type: 'create',
        title: this.levelString(),
        SuperId: this.id,
        departmentId: this.departmentId,
      },
    });
  }
  addNext(branch: Branch): void {
    this.level++;
    this.dialog.open(AddBranchComponent, {
      data: {
        type: 'create',
        title: this.levelString(),
        SuperId: branch.id,
        departmentId: this.departmentId,
      },
    });
    this.level--;
  }
  edit(branch: Branch): void {
    console.log(branch.id);
    this.dialog.open(AddBranchComponent, {
      data: {
        type: 'edit',
        title: this.levelString(),
        branch: branch,
        departmentId: this.departmentId,
      },
    });
  }
  delete(branch: Branch): void {
    this.service
      .deleteBranch(branch.id, this.id, this.levelString())
      .subscribe((data) => {
        if (data.startsWith('deleted')) window.location.reload();
        else
          this.errorMessage =
            'you can not delete this ' +
            this.levelString() +
            ' with id ' +
            branch.id +
            ' please contact support at ab28fb@gmail.com for more details ';
      });
  }
  view(branch: Branch): void {
    this.dialog.open(BranchViewComponent, {
      data: {
        branch: branch,
        title: this.levelString(),
      },
    });
    this.selectedBranch = branch;
  }
}
