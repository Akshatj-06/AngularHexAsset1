import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AssetAllocationModel } from '../../models/AssetAllocation';
import { AssetAllocationServiceService } from '../../services/asset-allocation-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-asset-allocation',
  imports: [FormsModule],
  templateUrl: './asset-allocation.component.html',
  styleUrl: './asset-allocation.component.scss'
})
export class AssetAllocationComponent {

  assetAllocationList: AssetAllocationModel[]=[];
  assetAllocationObj: AssetAllocationModel= new AssetAllocationModel();
  assetAllocationSrv= inject(AssetAllocationServiceService)
  taostr = inject(ToastrService);
  ngOnInit(): void {
    this.getAssetAllocation();
  }

  getAssetAllocation(){
    this.assetAllocationSrv.getAssetAllocation().subscribe((result:any)=>{
      this.assetAllocationList= result;
    })
  }

  onEdit(data: AssetAllocationModel){
    this.assetAllocationObj = data;
  }

  onSaveAssetAllocation(){
    this.assetAllocationSrv.onSaveAssetAllocation(this.assetAllocationObj).subscribe((result:any)=>{
      this.taostr.success('Asset Allocated Successfully');
      this.getAssetAllocation();
    })
  }

  onUpdateAssetAllocation(){
    this.assetAllocationSrv.onUpdateAssetAllocation(this.assetAllocationObj).subscribe((result:any)=>{
      this.taostr.success('Asset Allocation Updated Successfully');
      this.getAssetAllocation();
    })
  }

  deleteAssetAllocation(id:number){
    const isDelete = confirm("Are you sure you want to delete the Asset Allocation")
    if(isDelete) {
      this.assetAllocationSrv.onDeleteAssetAllocation(id).subscribe((result:any)=>{
        this.taostr.success('Asset Allocation Deleted Successfully');
        this.getAssetAllocation();
      })
    }
  }

  resetAssetAllocation() {
    this.assetAllocationObj = new AssetAllocationModel();
  }
}
