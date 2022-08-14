import { Employee } from './../Employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRegistrationService {

  private baseUrl = 'http://localhost:8080/employee/';

  constructor(private http: HttpClient) { }

  public doRegistration(Employee: Employee){
    return this.http.post("http://localhost:8080/employee",Employee);
  }

  public getUsers(){
    return this.http.get("http://localhost:8080/employee");
  }

  public getUserById(id: number){
    return this.http.get("http://localhost:8080/employee/"+id);
  }

  public deleteUser(id : number){
    return this.http.delete("http://localhost:8080/employee/"+id, {responseType:'text'});
  }

  public updateUser(id: number, value:any){
    return this.http.put(`${this.baseUrl}${id}`, value);
  }
}
