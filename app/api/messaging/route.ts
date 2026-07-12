import { NextRequest } from "next/server";

const mockString = 'Bad request'

export async function POST(req: NextRequest) {
    const { text } = await req.json();
    
    const fetchString = `https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage?chat_id=@maomiwizardtest&text=${encodeURIComponent(text ?? mockString)}`;

    const response = await fetch(fetchString, {
        method: "POST",
    });


    console.log('response', response);
    return new Response(JSON.stringify({ message: "Message sent" }), { status: 200 });
}