import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimesheetserviceService {

  constructor(private thttp:HttpClient) { }
  private turl=" http://localhost:8000/timesheet";
  postData(tsdata:any)
  {
    return this.thttp.post(this.turl,tsdata);
  }
  getData()
  {
    return this.thttp.get(this.turl);
  }
}
