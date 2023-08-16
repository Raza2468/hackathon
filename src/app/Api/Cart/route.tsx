import { db, cartTable } from '@/lib/drizzle';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuid } from 'uuid'
import { cookies } from 'next/headers'

export const GET = async (request: NextRequest) => {
    try {
        const res = await db.select().from(cartTable)
        return NextResponse.json({ res })
    } catch (error) {

    }
}


export const POST = async (request: NextRequest) => {

    let req = await request.json();

    let uid = uuid()
    let setcookies = cookies()

    let user_id = cookies().get("user_id")
    console.log(user_id, "get user_id");


    if (!user_id) {
        setcookies.set("user_id", uid)

        // console.log(cookies().get("user_id")?.value, "coll this Api");
        // console.log("===>", user_id?.name=='user_id', "raza");
    } else {
    }
    // console.log(req, user_id?.value, "coll this Api");
console.log(req.product_id,user_id);

    try {
        const res = await db.insert(cartTable).values({
            product_id: req.product_id,
            quantity: 1,
            user_id: cookies().get("user_id")?.value as string
        }).returning()
        return NextResponse.json({ res })
    } catch (error) {
        return NextResponse.json({ error })
    }
}