import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AssetRequestModel } from '../../models/AssetRequest';
import { AssetRequestService } from '../../services/asset-request.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-asset-request',
  imports: [FormsModule],
  templateUrl: './asset-request.component.html',
  styleUrl: './asset-request.component.scss'
})
export class AssetRequestComponent {

  assetRequestList: AssetRequestModel[]=[];
  assetRequestObj: AssetRequestModel= new AssetRequestModel();
  assetRequestSrv= inject(AssetRequestService);
  toastr = inject(ToastrService);

 ngOnInit(): void {
  this.getAssetRequest();
 }

  getAssetRequest(){
    this.assetRequestSrv.getAssetRequest().subscribe((result:any)=>{
      return this.assetRequestList=result;
    })
  }

  onEdit(data:AssetRequestModel){
    this.assetRequestObj =data;
  }

  onSaveAssetRequest(){
    this.assetRequestSrv.onSaveAssetRequest(this.assetRequestObj).subscribe((result:any)=>{
      this.toastr.success('Asset Request Saved Successfully');
      this.getAssetRequest();
    })
  }

  onUpdateAssetRequest(){
    this.assetRequestSrv.onUpdateAssetRequest(this.assetRequestObj).subscribe((result:any)=>{
      this.toastr.success('Asset Request Updated Successfully');
      this.getAssetRequest();
    })
  }

  deleteAssetRequest(id:number){
    const isDelete = confirm("Are you sure you want to delete the Asset Request")
    if(isDelete) {
      this.assetRequestSrv.onDeleteAssetRequest(id).subscribe((result:any)=>{
        this.toastr.success('Asset Request Deleted Successfully');

        this.getAssetRequest();
      })
    }

  }

  resetAssetRequest() {
    this.assetRequestObj = new AssetRequestModel();
  }
}

