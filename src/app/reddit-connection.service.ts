import { Injectable } from '@angular/core';
import { RandomService } from './random.service';
import { Headers, Http,  RequestOptions } from '@angular/http';
import { Token } from 'app/token';

@Injectable()
export class RedditConnectionService {

    private _state: string;
    private _token: string;

    public get state(): string {
        return this._state;
    }

    public get token(): string {
        return this._token;
    }

    public constructor(private _randomService: RandomService, private _http: Http) {
        this._state = this._randomService.generateStateString(20);
     }

    public getRedditAuthorizationUrl(): string {
        localStorage.setItem('state', this._state);
        return `https://www.reddit.com/api/v1/authorize?client_id=upw3i_YafZpoXw&response_type=code` +
            `&state=${this._state}&redirect_uri=http://localhost:4200/saved-posts&duration=temporary&scope=history`;
    }

    public getAuthorizationTokenWithCode(code: string): void {
        const headers = new Headers();
        const requestOptions = new RequestOptions({ headers: headers });
        headers.append('Authorization', 'Basic dXB3M2lfWWFmWnBvWHc6NzdkMzRocWFSYUpreUxLNno1eGo2NWF4WWRV');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        const body = `grant_type=authorization_code&code=${code}` +
        '&redirect_uri=http://localhost:4200/saved-posts';
        this._http.post('https://www.reddit.com/api/v1/access_token', body, requestOptions)
            .subscribe(token => this.mapToken(token.json()), error => console.log(error));
    }

    private mapToken(token: Token) {
        this._token = token.access_token;
    }
}