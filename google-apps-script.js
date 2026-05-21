/**
 * BEEMAN HONEY — Google Apps Script
 *
 * SETUP INSTRUCTIONS:
 * 1. Open Google Sheets → Extensions → Apps Script
 * 2. Paste this entire file into the editor
 * 3. Click "Deploy" → "New deployment"
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the deployment URL
 * 5. Add it to your .env file:  VITE_SHEETS_URL=<paste url here>
 * 6. Redeploy the website
 *
 * SHEET COLUMNS (auto-created on first submission):
 * Timestamp | Name | Email | Phone | Subject | Message
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Add headers if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Subject', 'Message']);
      sheet.getRange(1, 1, 1, 6).setFontWeight('bold').setBackground('#e8a015');
    }

    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.subject || '',
      data.message || '',
    ]);

    // Optional: send email notification
    // MailApp.sendEmail({
    //   to: 'hello@beemanhoney.co.ke',
    //   subject: `New Enquiry: ${data.subject} from ${data.name}`,
    //   body: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nMessage: ${data.message}`,
    // });

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Health check — visit the URL in a browser to confirm it's deployed
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ result: 'ok', app: 'Beeman Honey Contact Form' }))
    .setMimeType(ContentService.MimeType.JSON);
}
