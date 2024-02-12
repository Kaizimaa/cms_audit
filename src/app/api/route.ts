import { NextResponse } from "next/server";

const API_URL:string = process.env.BASE_URL as string
const API_KEY:string = process.env.DATA_API_KEY as string

export async function LoginAuth(request : Request) {
    const { username, password}: Partial<Login> = await request.json()
    if (!username && !password) return NextResponse.json({ Message: "Missing Required Data"})

    const res = await fetch(API_URL + 'users', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_KEY
        },
        body: JSON.stringify({
            username, password
        })
    })
    const newLogin: Login = await res.json()
    return NextResponse.json(newLogin)
}
export async function RegistAuth(request : Request) {
    const { email, name ,username, password}: Partial<Register> = await request.json()
    if (!email && !name && !username && !password) return NextResponse.json({ Message: "Missing Required Data"})

    const res = await fetch(API_URL + 'auth/register', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_KEY
        },
        body: JSON.stringify({
            email, name , username, password
        })
    })
    const newRegister: Register = await res.json()
    return NextResponse.json(newRegister)
}