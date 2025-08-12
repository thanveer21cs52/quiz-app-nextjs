import { url } from "inspector";
import next from "next";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req:NextRequest){
    const token= req.cookies.get("accesstoken")
    if(token){
        return NextResponse.next()
    }
    return NextResponse.redirect(new URL("/",req.url))

}
export const config = {
  matcher: ["/quizes/:path*"],
};


