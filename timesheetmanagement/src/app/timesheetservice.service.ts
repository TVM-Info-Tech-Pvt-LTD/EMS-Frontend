import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimesheetserviceService {

  constructor(private thttp:HttpClient) { }
  private turl=" http://localhost:8000/timesheet";
  postdata(data:any)
  {
    return this.thttp.post(this.turl,data);
  }
  getdata()
  {
    return this.thttp.get(this.turl);
  }
}
