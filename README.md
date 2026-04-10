# Avante Law Website

This is a lightweight static website for Avante Law.

## Files

- `index.html` contains the site structure and content.
- `styles.css` contains the full visual system and responsive layout.
- No local JavaScript is required right now beyond the external Calendly embed.

## Best Hosting Path

The easiest production setup is:

1. Host the static site on Netlify or Vercel.
2. Keep your domain at GoDaddy.
3. Point your GoDaddy DNS to the hosting provider.

This is usually simpler than using GoDaddy's site builder and gives you easier updates.

## If You Want To Use GoDaddy Hosting Directly

1. Create or open your hosting account in GoDaddy.
2. Open the file manager or connect by FTP.
3. Upload `index.html` and `styles.css` into the web root, usually `public_html`.
4. Make sure `index.html` is in the root so it loads automatically.

## Booking Setup Recommendations

### Fastest and easiest

Use Calendly or Microsoft Bookings.

- Add a `Book Consultation` button that opens your scheduling page.
- Ask 4-6 intake questions before confirming the appointment.
- Connect it to Google Calendar or Outlook.

### Better intake tracking

Use a form backend plus scheduling.

- Formspree, Basin, or Netlify Forms for intake submissions
- Calendly or Microsoft Bookings for actual appointment selection
- Google Sheets, Airtable, or a CRM to track leads

### Best long-term law office workflow

Use a legal practice platform.

- Clio Grow
- PracticePanther
- MyCase

These can help with intake, reminders, notes, and follow-up in one place.

## Important Before Launch

- Replace placeholder bio notes with verified founder education and credentials.
- Add a privacy policy and legal disclaimer.
- Decide where consultation submissions should go.
- Review the live Calendly flow once the site is uploaded.
