export class AssetRequestModel {
  assetRequestId: number;
  assetId: number;
  userId: number;
  requestStatus: string;
  requestDate: Date;

  constructor() {
    this.assetRequestId = 0;
    this.assetId = 0;
    this.userId = 0;
    this.requestStatus = "";
    this.requestDate = new Date();
  }
}