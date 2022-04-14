import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(
    private http:HttpClient,
    private route:Router
    ) { }

  onRegister(userDetails){
    return this.http.post<any>(`${environment.baseURL}/api/users/register`,userDetails)
  }
  onLogin(credientials){
    return this.http.post<any>(`${environment.baseURL}/api/users/login`,credientials)
   
  }
  getUserDetails(){
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    if(userDetails){
      return userDetails;
    }
  }

  isAdmin(){
    const userDetails = this.getUserDetails();
    if(userDetails && userDetails.role==='admin'){
        return true
    }
  }
  
  isLoggedIn(){
    const userDetails = this.getUserDetails();
    if(userDetails && userDetails.role==='user'){
        return true
    }
  }
  
  logout(){
    localStorage.clear();
    this.route.navigate(['/Login']);
    
  }
}

