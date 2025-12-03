# EmailJS Setup Guide

This guide will help you set up EmailJS to send form submissions to `austinkirby@pacificsolarshiners.com`.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)

## Step 2: Add an Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.) or use **Custom SMTP**
4. Follow the setup instructions for your email provider
5. Note your **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

**Template Name:** Pricing Request

**Subject:** New Pricing Request from Website

**Content:**
```
New pricing request received:

Number of Panels: {{panels}}
Number of Stories: {{stories}}
Property Address: {{address}}
Phone Number: {{phone}}

---
This email was sent from the Pacific Solar Shiners website.
```

4. Save the template and note your **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in the EmailJS dashboard
2. Find your **Public Key** (also called API Key)
3. Copy this key

## Step 5: Configure the Application

1. Open `src/config/emailjs.js`
2. Replace the placeholder values:
   - `YOUR_PUBLIC_KEY` → Your EmailJS Public Key
   - `YOUR_SERVICE_ID` → Your Email Service ID
   - `YOUR_TEMPLATE_ID` → Your Email Template ID
   - The `toEmail` is already set to `austinkirby@pacificsolarshiners.com`

Example:
```javascript
export const emailjsConfig = {
  publicKey: 'abc123xyz789',
  serviceId: 'service_gmail',
  templateId: 'template_abc123',
  toEmail: 'austinkirby@pacificsolarshiners.com'
}
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Open the website and click "Get Pricing"
3. Fill out the form and submit
4. Check your email at `austinkirby@pacificsolarshiners.com` for the submission

## Troubleshooting

- **"EmailJS not configured" error**: Make sure you've replaced all placeholder values in `src/config/emailjs.js`
- **Emails not arriving**: Check your EmailJS dashboard for error logs
- **CORS errors**: Make sure your domain is added to EmailJS allowed domains (Account → Security)

## Free Tier Limits

The free EmailJS plan includes:
- 200 emails per month
- Basic email templates
- Standard support

For higher volume, consider upgrading to a paid plan.

