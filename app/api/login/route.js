// app/api/login/route.js
export async function POST(req) {
  try {
    const { password } = await req.json();
    if (!password) return new Response("Missing password", { status: 400 });

    if (password === process.env.STUDIO_PASSWORD) {
      const response = new Response(JSON.stringify({ ok: true }), { status: 200 });
      // set cookie for 1 hour
      response.headers.set(
        "Set-Cookie",
        `admin-auth=true; Path=/; HttpOnly; Max-Age=${60 * 60}; SameSite=Lax`
      );
      return response;
    } else {
      return new Response(JSON.stringify({ error: "Invalid password" }), { status: 401 });
    }
  } catch (err) {
    return new Response("Server error", { status: 500 });
  }
}
  