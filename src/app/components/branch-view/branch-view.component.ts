import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Branch } from 'src/app/modules/branch';

@Component({
  selector: 'app-branch-view',
  templateUrl: './branch-view.component.html',
  styleUrls: ['./branch-view.component.css'],
})
export class BranchViewComponent implements OnInit {
  branch: Branch = new Branch();
  title: string = '';
  constructor(
    // private service: UniversisityService,
    private dialogRef: MatDialogRef<BranchViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.branch = this.data.branch;
    this.title = this.data.title;
  }
  public closeMe() {
    this.dialogRef.close();
  }
}
