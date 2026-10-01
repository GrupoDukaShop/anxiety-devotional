const SHEET_NAME = "Leads";

function doPost(event) {
  try {
    const payload = JSON.parse(event.postData.contents);
    const properties = PropertiesService.getScriptProperties();
    const expectedSecret = properties.getProperty("LEAD_WEBHOOK_SECRET");

    if (!expectedSecret || payload.secret !== expectedSecret) {
      return jsonResponse({ ok: false, error: "Unauthorized" });
    }

    const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      return jsonResponse({ ok: false, error: "Invalid email" });
    }

    const spreadsheetId = properties.getProperty("SPREADSHEET_ID");
    if (!spreadsheetId) {
      return jsonResponse({ ok: false, error: "Missing spreadsheet ID" });
    }

    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Received at", "Email", "Source"]);
    }

    const createdAt = new Date(payload.createdAt);
    const receivedAt = Number.isNaN(createdAt.getTime()) ? new Date() : createdAt;
    sheet.appendRow([receivedAt, email, String(payload.source || "landing-page")]);

    return jsonResponse({ ok: true });
  } catch (error) {
    console.error("Lead save failed", error);
    return jsonResponse({ ok: false, error: "Could not save lead" });
  }
}

function jsonResponse(value) {
  return ContentService.createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}