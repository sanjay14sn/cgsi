/**
 * CGCON Registration → Google Sheets
 *
 * SETUP (important):
 * 1. Open YOUR spreadsheet (not script.google.com):
 *    https://docs.google.com/spreadsheets/d/1ObdBLuYlEZpMYFgwgbZXga4T4VunGyTsWRNDIjG9ZCk/edit
 * 2. Extensions → Apps Script → paste this entire file → Save
 * 3. Select authorizeSpreadsheetAccess → Run → Allow permissions
 * 4. Deploy → New deployment → Web app → Execute as: Me → Who has access: Anyone
 * 5. Put the /exec URL in .env as VITE_GOOGLE_SHEETS_URL
 *
 * Tab name must be: cgsi
 */

const SHEET_ID = "1ObdBLuYlEZpMYFgwgbZXga4T4VunGyTsWRNDIjG9ZCk";
const SHEET_NAME = "cgsi";
const SCRIPT_VERSION = "5";

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}

/** Browser GET test — open the /exec URL to verify deployment is live. */
function doGet() {
  try {
    var sheet = getSheet_();
    return jsonResponse_({
      success: true,
      version: SCRIPT_VERSION,
      message: "CGSI registration web app is running",
      tab: sheet.getName(),
      sheetId: SHEET_ID,
    });
  } catch (error) {
    return jsonResponse_({
      success: false,
      version: SCRIPT_VERSION,
      error: String(error),
    });
  }
}

function getSheet_() {
  var spreadsheet = null;

  try {
    spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  } catch (openError) {
    Logger.log("openById error: " + openError);
  }

  if (!spreadsheet) {
    try {
      spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    } catch (activeError) {
      Logger.log("getActiveSpreadsheet error: " + activeError);
    }
  }

  if (!spreadsheet) {
    throw new Error(
      "Cannot access spreadsheet. Run authorizeSpreadsheetAccess once in the editor, " +
      "approve permissions, then Deploy → Manage deployments → New version."
    );
  }

  var sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.getSheets()[0];
  }

  if (!sheet) {
    throw new Error(
      'Tab "' + SHEET_NAME + '" not found. Tabs: ' +
      spreadsheet.getSheets().map(function (s) { return s.getName(); }).join(", ")
    );
  }

  return sheet;
}

/** Run this ONCE from the editor before deploying the web app. */
function authorizeSpreadsheetAccess() {
  var sheet = getSheet_();
  Logger.log("OK — connected to tab: " + sheet.getName());
}

function doPost(e) {
  try {
    var sheet = getSheet_();
    var data = {};

    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    }

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.category || "",
      data.title || "",
      data.name || "",
      data.mobile || "",
      data.email || "",
      data.institution || "",
      data.designation || "",
      data.city || "",
      data.state || "",
      data.mciNumber || "",
      data.specialty || "",
      data.stateMedicalCouncil || "",
      data.cgsiMember || "",
      data.cgsiMemberNo || "",
      data.conferencePackage || "",
      data.totalAmount || "",
      data.utr || "",
      data.message || "",
      data.paymentScreenshotUrl || "",
    ]);

    return jsonResponse_({
      success: true,
      version: SCRIPT_VERSION,
      tab: sheet.getName(),
    });
  } catch (error) {
    return jsonResponse_({
      success: false,
      version: SCRIPT_VERSION,
      error: String(error),
    });
  }
}
