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
  
  selectedtask = null;showtime:any;timedetail:any;
  userTask=[
    {
      "id": "1",
      "taskname": "Task1"
    },
    {
      "id": "2",
      "taskname": "Task2"
    },
    {
      "id": "4",
      "taskname": "task4edit"
    },
    {
      "id": "06",
      "taskname": "task6"
    },
    {
      "id": "07",
      "taskname": "editedd"
    }
  ];
  timesheetForm=this.fb.group(
    {
      taskname:[],
      soption:[],
      stime:[],
      etime:[]
    }
  )
   sendData()
    {
      let tsdata=this.timesheetForm.value;
      this.timeserv.postData(tsdata).subscribe();
      this.getData();
    }
    getData()
    {
      this.showtime=true;
      this.timeserv.getData().subscribe(tsdata=>this.timedetail=tsdata);
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
