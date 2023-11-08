import { connect } from "@/lib/dbConfig";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connect();
        const {email} = await req.json();
        const user = await User.findOne({email}).select("_id");
        console.log(user);

        return NextResponse.json({user});
    } catch (error) {
        console.error(error);
    }
}