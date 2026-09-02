export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).send("OK");
  }

  try {
    const GAS_URL = "https://script.google.com/macros/s/AKfycbzV-2DjgwQMzJr57MXZfqO8TVbn9wKzftP7ch--zkl_mILj8abz1oFcmdKw1TXhbcpK5Q/exec";

    await fetch(GAS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    });

    return res.status(200).send("OK");
  } catch (e) {
    return res.status(200).send("OK");
  }
}
