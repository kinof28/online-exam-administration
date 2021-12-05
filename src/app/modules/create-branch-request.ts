export interface CreateBranchRequest {
  SuperId: number;
  name: string;
  description: string;
  degreeType?: string;
  level?: string;
  specialityID?: number;
}
