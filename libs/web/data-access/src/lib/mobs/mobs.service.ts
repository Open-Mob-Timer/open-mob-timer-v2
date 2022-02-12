import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MobsService {
    constructor(private http: HttpClient) {}

    public createMob(mobName: string): Observable<void> {
        // TODO: Make DTOs shared
        const mob = { name: mobName };
        return this.http.post<any>('api/mobs', mob).pipe(tap((result) => console.log(result)));
    }
}
