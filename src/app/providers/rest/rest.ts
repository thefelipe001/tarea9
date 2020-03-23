import  {HttpClient}from "@angular/common/http";
import {Injectable}from '@angular/core'

@Injectable()
export class RestProvider{
    constructor(public http:HttpClient){
        console.log("Hello RestProvider Provider");
    }
    loadInfo(){
        var api_url="https://jsonplaceholder.typicode.com/users";
        return new Promise(resolve=>{
            this.http.get(api_url).subscribe(data=>{
                resolve(data);

            },err=>{
                console.log(err);
            });
        });
    }
}