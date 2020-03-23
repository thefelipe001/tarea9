import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { RestProvider } from '../providers/rest/rest';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
Items:any;
  constructor(public navCtrl:NavController,public alert:AlertController,
    public proveedor:RestProvider) {
      this.loadInfo();
    }

    loadInfo(){
      this.proveedor.loadInfo().then(data=>{
        this.Items=data;
        console.log(this.Items);

      }).catch(data=>{
        console.log(data);

      })
    }

}
