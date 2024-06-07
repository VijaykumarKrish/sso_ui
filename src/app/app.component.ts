import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpService } from './http/http.service';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private http: HttpClient,private httpService:HttpService){}
  title = 'ang';

  Login(){
    
  console.log("login")
  }
  Logout(){
    const cookies = document.cookie;
        console.log("cookies ",cookies)
      this.http.get('http://app1.localtest.me:9005/logout',  {headers:{
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
      }}).subscribe(data => {
        console.log("data ",data)
        
      })


    // this.httpService.fetchData1('http://app1.localtest.me:9005/logout')
    // .pipe(
    //   map((data) => {
    //     return data;
    //   })
    // );
  //   fetch('http://app1.localtest.me:9005/logout')
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch(error => console.error('Error:', error));

  //   localStorage.setItem('userData','')
    console.log("logout")
    }
}


