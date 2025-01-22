import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        // Parsing body dari request
        const body = await request.json();

        // Validasi email dan password, atau logic tambahan lainnya di sini

        return NextResponse.json(
            {
                "meta": {
                    "status_code": 200,
                    "status": "OK",
                    "message": [],
                    "url": "/api/register",
                    "last_page": 0,
                    "per_page": 0,
                    "page": 0,
                    "total": 0
                },
                "data": {
                    "user": {
                        name: body?.name,
                        email: body?.email,
                        password: body?.password,
                        phone_number: body?.phone_number,
                    },
                    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjYsImlzcyI6Imh0dHBzOi8vYXV0aC5pb2RhY2FkZW15LmlkIiwiYXVkIjoiaHR0cHM6Ly9hcGkuaW9kYWNhZGVteS5pZCIsIm5hbWUiOiJ0ZXMgMSIsImVtYWlsIjoidGVzMUBnbWFpbC5jb20iLCJwaG9uZV9udW1iZXIiOiIrNjI4ODIyODkyNTg2Iiwic3Vic2NyaXB0aW9uX3BsYW4iOiJmcmVlIiwiaWF0IjoxNzM3MDE1NTg3LCJleHAiOjE3MzcwMTY0ODd9.KSf2BaKgE_rAEUvuLwamqBf4qvLSrdmtc-Gsx0Iyl0Y",
                    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjYsImlzcyI6Imh0dHBzOi8vYXV0aC5pb2RhY2FkZW15LmlkIiwiYXVkIjoiaHR0cHM6Ly9hcGkuaW9kYWNhZGVteS5pZCIsIm5hbWUiOiJ0ZXMgMSIsImVtYWlsIjoidGVzMUBnbWFpbC5jb20iLCJwaG9uZV9udW1iZXIiOiIrNjI4ODIyODkyNTg2Iiwic3Vic2NyaXB0aW9uX3BsYW4iOiJmcmVlIiwiaWF0IjoxNzM3MDE1NTg3LCJleHAiOjE3Mzc2MjAzODd9.5rSf0LFGOpiNsgCFTZRgomhaSgnF8y5IR-303WHK6vU"
                }
            }
        );
    } catch (error) {
        return NextResponse.json(
            {
                "meta": {
                    "status_code": 400,
                    "status": "ERROR",
                    "message": ["Invalid request body"],
                },
                "data": null
            },
            { status: 400 }
        );
    }
}
