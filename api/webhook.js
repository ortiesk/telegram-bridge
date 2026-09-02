export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).send("OK");
  }

  try {
    const GAS_URL = "https://script.google.com/macros/s/AKfycbxmS4WxatJFvN5tJa7yuLlpQ3ZV2fBEKtRM_hVJdQI9mYxlmC4jvxNLZyCs4R4a0zqAGA/exec";

    // Apps Script'e isteği giden veriyi bekleterek ilet
    await fetch(GAS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    });

    // İşlem bittikten sonra yanıt dön
    return res.status(200).send("OK");

  } catch (e) {
    console.error("Hata:", e);
    return res.status(200).send("OK");
  }
}
