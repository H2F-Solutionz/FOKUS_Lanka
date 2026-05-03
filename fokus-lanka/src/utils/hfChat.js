// Simple helper to call a public HuggingFace inference model
// This uses the BlenderBot 400M distilled model, which allows unauthenticated inference for low‑traffic usage.
// If the model requires an API token in the future, you can add an Authorization header here.

export async function sendMessageToHF(message) {
  const endpoint = 'https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill';
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputs: message }),
    });
    if (!response.ok) {
      throw new Error(`HF request failed with status ${response.status}`);
    }
    const data = await response.json();
    // The API returns an array of objects with a generated_text field
    if (Array.isArray(data) && data[0]?.generated_text) {
      return data[0].generated_text;
    }
    // Some models return { generated_text: ... }
    if (data?.generated_text) {
      return data.generated_text;
    }
    // Fallback: return stringified JSON
    return JSON.stringify(data);
  } catch (err) {
    console.error('Error calling HuggingFace inference:', err);
    throw err;
  }
}
