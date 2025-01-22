import { NextResponse } from 'next/server';

export async function POST() {

    // Validasi email dan password
    return NextResponse.json(
        {
            "meta": {
                "status_code": 200,
                "status": "OK",
                "message": [],
                "url": "/api/login",
                "last_page": 0,
                "per_page": 0,
                "page": 0,
                "total": 0
            },
            "data": {
                "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjYsImlzcyI6Imh0dHBzOi8vYXV0aC5pb2RhY2FkZW15LmlkIiwiYXVkIjoiaHR0cHM6Ly9hcGkuaW9kYWNhZGVteS5pZCIsIm5hbWUiOiJ0ZXMgMSIsImVtYWlsIjoidGVzMUBnbWFpbC5jb20iLCJwaG9uZV9udW1iZXIiOiIrNjI4ODIyODkyNTg2Iiwic3Vic2NyaXB0aW9uX3BsYW4iOiJmcmVlIiwiaWF0IjoxNzM3MDE1NTg3LCJleHAiOjE3MzcwMTY0ODd9.KSf2BaKgE_rAEUvuLwamqBf4qvLSrdmtc-Gsx0Iyl0Y",
                "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjYsImlzcyI6Imh0dHBzOi8vYXV0aC5pb2RhY2FkZW15LmlkIiwiYXVkIjoiaHR0cHM6Ly9hcGkuaW9kYWNhZGVteS5pZCIsIm5hbWUiOiJ0ZXMgMSIsImVtYWlsIjoidGVzMUBnbWFpbC5jb20iLCJwaG9uZV9udW1iZXIiOiIrNjI4ODIyODkyNTg2Iiwic3Vic2NyaXB0aW9uX3BsYW4iOiJmcmVlIiwiaWF0IjoxNzM3MDE1NTg3LCJleHAiOjE3Mzc2MjAzODd9.5rSf0LFGOpiNsgCFTZRgomhaSgnF8y5IR-303WHK6vU"
            }
        }
    );
}