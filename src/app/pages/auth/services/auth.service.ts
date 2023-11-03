import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterDto } from '../interfaces/registerDto';
import { Observable, tap } from 'rxjs';
import { Urls } from '../enums/url';
import { AuthDto } from '../interfaces/authDto';
import { AuthResponse } from '../interfaces/authResponse';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = 'https://api.realworld.io/api/';
  constructor(private http: HttpClient) {}

  register(registerDto: RegisterDto): Observable<RegisterDto> {
    return this.http.post<RegisterDto>(this.baseUrl + Urls.USER, registerDto);
  }

  login(authDto: AuthDto): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.baseUrl + Urls.LOGIN, authDto);
  }

  setToken(token: string) {
    localStorage.setItem('authToken', token);
  }
}
