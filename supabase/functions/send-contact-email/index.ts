// Deno Edge Function to send email notifications via Resend
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")
const TO_EMAIL = Deno.env.get("TO_EMAIL")

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      }
    })
  }

  try {
    if (!RESEND_API_KEY) {
      throw new Error("Missing RESEND_API_KEY environment variable")
    }
    if (!TO_EMAIL) {
      throw new Error("Missing TO_EMAIL environment variable")
    }

    const payload = await req.json()
    console.log("Received webhook payload:", payload)

    // Check that we got an INSERT trigger and have a record
    const record = payload?.record
    if (!record) {
      return new Response(JSON.stringify({ error: "No record found in payload" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      })
    }

    const { name, email, message } = record

    // Send the email using the Resend API
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Joe Web Design <inquiry@contact.joewebdesigns.com>",
        to: [TO_EMAIL],
        subject: `New Contact Submission from ${name}`,
        html: `
          <h2>New Contact Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #f4f4f4; padding: 12px; border-radius: 4px;">${message}</p>
        `
      })
    })

    const resData = await res.json()
    if (!res.ok) {
      throw new Error(`Resend API error: ${JSON.stringify(resData)}`)
    }

    console.log("Email sent successfully via Resend:", resData)

    return new Response(JSON.stringify({ success: true, data: resData }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
  } catch (err: any) {
    console.error("Error sending email:", err.message)
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
  }
})
