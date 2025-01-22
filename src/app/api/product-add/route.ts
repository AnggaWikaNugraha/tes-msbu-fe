import { NextResponse } from 'next/server';

export async function POST() {

    // Validasi email dan password
    return NextResponse.json(
        {
            "meta": {
                "status_code": 200,
                "status": "OK",
                "message": [],
                "url": "/api/product/add",
                "last_page": 0,
                "per_page": 0,
                "page": 0,
                "total": 0
            },
            "data": {
               message: "Berhasil add product",
            }
        }
    );
}