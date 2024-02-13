import NextAuth from "next-auth"
import {authOptions} from "@/src/utils/auth";
import {NextApiRequest, NextApiResponse} from "next";

export async function GET( req:NextApiRequest, res:NextApiResponse ) {
    return NextAuth(req,res, authOptions)
}

export async function POST( req:NextApiRequest, res:NextApiResponse ) {
    return NextAuth(req,res, authOptions)
}