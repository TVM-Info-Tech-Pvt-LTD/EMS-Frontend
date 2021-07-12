import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TaskserviceService } from '../taskservice.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskdetail:any;
  show:any;
  data:any;

  constructor(private serv:TaskserviceService,private fb:FormBuilder) { }
  taskForm=this.fb.group(
    {
      id:[],
      taskname:[]
    }
  )
  senddata()
    {
      let data=this.taskForm.value;
      this.serv.postdata(data).subscribe();
      this.getdata();
    }
    getdata()
    {
      this.show=true;
      this.serv.getdata().subscribe(data=>this.taskdetail=data);
    }
    deletedata(id:any)
    {
      this.serv.deletedata(id).subscribe(res=>{
        this.getdata();
      })
    }
    editdata(id:any)
    {
      this.serv.stusingledata(id).subscribe(
        datas=>
        {
          this.data=datas;
          this.taskForm.patchValue(
            {
              id:this.data.id,
              taskname:this.data.taskname
            }
          )
        }
      )
    }
    updatedata()
    {
      let taskid=this.data.id;
      let data=this.taskForm.value;
      this.serv.updatedata(taskid,data).subscribe();
      this.getdata();
    }

  ngOnInit(): void {
  }

}
