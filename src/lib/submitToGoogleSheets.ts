type RegistrationSheetPayload = {
  timestamp: string;
  category: string;
  title: string;
  name: string;
  mobile: string;
  email: string;
  institution: string;
  designation: string;
  city: string;
  state: string;
  mciNumber: string;
  specialty: string;
  stateMedicalCouncil: string;
  cgsiMember: string;
  cgsiMemberNo: string;
  conferencePackage: string;
  totalAmount: string;
  utr: string;
  message: string;
  paymentScreenshotUrl: string;
};

function printRegistrationLog(message: string, data?: unknown) {
  console.log(`[submitToGoogleSheets] ${message}`, data ?? "");

  if (import.meta.env.DEV) {
    fetch("/__dev-log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: `[submitToGoogleSheets] ${message}`, data }),
    }).catch(() => {
      // Ignore dev log transport errors.
    });
  }
}

export async function submitToGoogleSheets(payload: RegistrationSheetPayload) {
  const url = import.meta.env.VITE_GOOGLE_SHEETS_URL;

  printRegistrationLog("submitToGoogleSheets called", {
    url: url || "(not set)",
    name: payload.name,
    email: payload.email,
    mobile: payload.mobile,
    conferencePackage: payload.conferencePackage,
    totalAmount: payload.totalAmount,
  });

  if (!url) {
    printRegistrationLog("skipped — VITE_GOOGLE_SHEETS_URL is not set");
    return;
  }

  printRegistrationLog("sending payload to Google Sheets", payload);

  const response = await fetch(url, {
    method: "POST",
    redirect: "follow",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });

  const text = await response.text();

  printRegistrationLog("Google Sheets response", {
    status: response.status,
    ok: response.ok,
    body: text.slice(0, 500),
  });

  if (!response.ok) {
    throw new Error(`Google Sheets sync failed (${response.status}): ${text.slice(0, 200)}`);
  }

  let result: { success?: boolean; error?: string; version?: string };
  try {
    result = JSON.parse(text);
  } catch {
    printRegistrationLog("Google Sheets sync completed (non-JSON response)");
    return;
  }

  if (result.success === false) {
    printRegistrationLog("Google Sheets sync failed", result);
    throw new Error(result.error || "Google Sheets sync failed");
  }

  printRegistrationLog("Google Sheets sync succeeded", result);
}
