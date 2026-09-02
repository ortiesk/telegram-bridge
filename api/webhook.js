export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).send("OK");
  }

  try {
    const GAS_URL = "https://script.google.com/macros/s/AKfycbzV-2DjgwQMz3r57MXZfqO8TVbn9wKzftP7Ch--zk1_mILj8abz1oFcmdKw1TXhbcpK5Q/exec";

    // Telegram'a BEKLEMEDEN anında yanıt dön (Tıkanmayı önler)
    res.status(200).send("OK");

    // Apps Script'e isteği arka planda ilet (await KULLANMADAN)
    fetch(GAS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    }).catch(err => console.error("GAS İletim Hatası:", err));

  } catch (e) {
    return res.status(200).send("OK");
  }
}
