import { Component,OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    constructor(private myStorage:StorageService){ }

   public  home='Hey, This is home'
   ngOnInit() {
    this.home = localStorage.getItem('myVariable') || 'Default Value';
  }
    save(text:any){
      this.myStorage.save(text);
    }
    remove(){
      this.ngOnDestroy();
    }
    ngOnDestroy(){
      this.myStorage.remove();
    }
  }


