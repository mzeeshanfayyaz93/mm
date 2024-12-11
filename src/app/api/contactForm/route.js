export async function POST(req) {
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbwowXySOvuani2mMKR0qROwnKwnavBI2qKG9CULTn7T_SqOVRsCcH-eZOkH4_SEgAPweA/exec';

    try {
        const body = await req.json(); // Parse the request body

        const response = await fetch(scriptUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Error from Google Apps Script:", response.status, errorText);
            return new Response(JSON.stringify({ error: "Failed to proxy request", details: errorText }), {
                status: response.status,
                headers: { "Content-Type": "application/json" },
            });
        }

        const data = await response.json();
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error proxying request:", error);
        return new Response(JSON.stringify({ error: "Failed to proxy request", details: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

export function GET() {
    return new Response(JSON.stringify({ message: "Method not allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json" },
    });
}
