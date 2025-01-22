"use client"; // Menandakan komponen ini adalah Client Component

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import ProtectedRoute from "./components/auth/protected-route";
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '../lib/query-client';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <QueryClientProvider client={queryClient}>
            <ProtectedRoute>
              {children}
            </ProtectedRoute>
          </QueryClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
