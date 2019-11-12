import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProjectEulerService {
    /**
     *
     */
    constructor(private http: HttpClient) {
        console.log('ProjectEulerService started');
    }
}
