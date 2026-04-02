export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).send("OK");
  }

  try {
    const GAS_URL = "https://script.googleusercontent.com/macros/s/AKfycbx_N7t-dJSrmzOAv4TnEuarKKOYluMZlX7qf30gPAgOiK5vVChMVEWV8Ugunih9rNjAoQ/exec";

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
