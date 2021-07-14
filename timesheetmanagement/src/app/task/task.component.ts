import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TaskserviceService } from '../taskservice.service';
import { TimesheetserviceService } from '../timesheetservice.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  
  selectedtask = null;showtime:any;timedetail:any;stime:any;
  timesheetForm=this.fb.group(
    {
      taskname:[],
      stime:[],
      etime:[]
    }
  )
  sendData()
  {
    let data=this.timesheetForm.value;
    let data2=this.selectedtask;
    let data3=this.stime;
    this.timeserv.postdata(data2,data).subscribe();
   // this.timeserv.postdata(data3).subscribe();
    console.log(data);
    this.getdata();
  }
  getData()
  {
    this.showtime=true;
    this.timeserv.getdata().subscribe(data=>this.timedetail=data);
  }

    //task crud methods started..
  taskdetail:any;
  show:any;
  data:any;
  constructor(private serv:TaskserviceService,private fb:FormBuilder,private timeserv:TimesheetserviceService) { }
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
