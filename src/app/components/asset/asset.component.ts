import { Component, inject, OnInit } from '@angular/core';
import { AssetService } from '../../services/asset.service';
import { AssetModel } from '../../models/Asset';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-asset',
  imports: [FormsModule],
  templateUrl: './asset.component.html',
  styleUrl: './asset.component.scss'
})
export class AssetComponent implements OnInit {

  assetList: AssetModel []= [];
  assetObj: AssetModel = new AssetModel();
  assetSrv= inject(AssetService);

  ngOnInit(): void {
    this.getAsset();
  }

  getAsset(){
    this.assetSrv.getAsset().subscribe((result:any)=>{
      return this.assetList=result;
    })
  }

  onEdit(data: AssetModel){
    this.assetObj = data;
  }

  onSaveAsset(){
    this.assetSrv.onSaveAsset(this.assetObj).subscribe((result:any)=>{
      alert("Asset Saved Successfully");
      this.getAsset();
    })
  }

  onUpdateAsset(){
    this.assetSrv.onUpdateAsset(this.assetObj).subscribe((result:any)=>{
      alert("Asset Updated Successfully");
      this.getAsset();
    })
  }

  deleteAsset(id:number){
    const isDelete = confirm("Are you sure you want to delete the Asset")
    if(isDelete) {
      this.assetSrv.onDeleteAsset(id).subscribe((result:any)=>{
        alert("Asset Deleted Successfully");
        this.getAsset();
      })
    }
    
  }

  resetAsset() {
    this.assetObj = new AssetModel();
  }
}
