import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {
  private url="  http://localhost:3000/task";
  
  constructor(private http:HttpClient) { }
  postdata(data:any)
  {
    return this.http.post(this.url,data);
  }
  getdata()
  {
    return this.http.get(this.url);
  }
  deletedata(id:any)
  {
    return this.http.delete(this.url+"/"+id);
  }
  updatedata(id:any,data:any)
  {
    return this.http.put(this.url+"/"+id,data);
  }
  stusingledata(id:any)
  {
    return this.http.get(this.url+"/"+id);
  }
}
