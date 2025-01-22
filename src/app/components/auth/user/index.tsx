"use client";

import { useSession } from "next-auth/react";
import LogoutButton from '@/app/components/auth/logout-button'

export default function Profile() {
    const { data: session } = useSession();
    console.log(session)
    if (!session) {
        return <div>Loading ..</div>;
    }

    return (
        <div className="flex justify-between gap-1">
            <div>
                <h1>Profile Login</h1>
                <p><strong>name:</strong> {session?.user?.name}</p>
                <p><strong>email:</strong> {session?.user?.email}</p>
            </div>
            <div>
                <LogoutButton />
            </div>
        </div>
    );
}
