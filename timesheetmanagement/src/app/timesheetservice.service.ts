import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimesheetserviceService {
  private url2=" http://localhost:3000/timesheet";
  constructor(private thttp:HttpClient) { }
  postdata(data:any,data2:any)
  {
    return this.thttp.post(this.url2,data,data2);
  }
  getdata()
  {
    return this.thttp.get(this.url2);
  }
  deletedata(id:any)
  {
    return this.thttp.delete(this.url2+"/"+id);
  }
  updatedata(id:any,data:any)
  {
    return this.thttp.put(this.url2+"/"+id,data);
  }
  stusingledata(id:any)
  {
    return this.thttp.get(this.url2+"/"+id);
  }

}
