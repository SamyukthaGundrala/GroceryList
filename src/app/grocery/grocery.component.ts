import { Component} from '@angular/core';
// import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
  // styleUrls: ['../assets/css/bootstrap.min.css']
})
export class GroceryComponent {

  task: string='';
  tasks:any=[];
  emptyTask:boolean=false;
  
  
  onAdd(){
    if(this.task === '') {
      this.emptyTask =true;
    } else{
      this.emptyTask =false;
      this.tasks.push({name:this.task});
      this.task = '';
    }
    
  }

  onDelete(i:number){
    this.tasks.splice(i,1);
  }

  onReset(){
    this.task ='';
  }

}
