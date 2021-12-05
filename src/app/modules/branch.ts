export class Branch {
  id: number = 0;
  name: string = '';
  description: string = '';
  children: Branch[] = new Array<Branch>();
  type?: string;
  level?: string;
  departmentId?: string;
  speciality?: Branch;
  expanded: boolean = false;
}
