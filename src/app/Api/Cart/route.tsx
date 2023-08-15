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


export const POST = async (request: Request) => {

    let req = await request.json();

    let uid = uuid()
    let setcookies = cookies()

    let user_id = cookies().get("user_id")

    console.log(req, user_id?.value, "coll this Api");

    if (!user_id) {
        setcookies.set("user_id", uid)
    }

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