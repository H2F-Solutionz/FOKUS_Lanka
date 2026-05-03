import { knowledgeBase } from '../data/knowledgeBase';

/**
 * Enhanced Bot Service for Fokus Lanka
 * Combines Project Knowledge Base with AI Fallback
 */

const getKBResponse = (query) => {
  const q = query.toLowerCase();

  // Contact Info
  if (q.includes('contact') || q.includes('phone') || q.includes('call') || q.includes('number')) {
    return `You can reach us at ${knowledgeBase.contact.phone[0]} or ${knowledgeBase.contact.phone[1]}. You can also email us at ${knowledgeBase.contact.email}.`;
  }

  // Location
  if (q.includes('location') || q.includes('where') || q.includes('office') || q.includes('address')) {
    return `Our office is located at ${knowledgeBase.about.location} in Jaffna.`;
  }

  // Services
  if (q.includes('service') || q.includes('what do you do') || q.includes('build') || q.includes('construction')) {
    const services = knowledgeBase.services.map(s => s.name).join(", ");
    return `We offer several premium services including: ${services}. We specialize in UK-qualified engineering standards.`;
  }

  // Specific Services
  if (q.includes('luxury') || q.includes('home') || q.includes('house') || q.includes('villa')) {
    return `Luxury Home Construction is our specialty. We build homes that last for generations using premium materials and UK-standard precision.`;
  }

  // Founder / About
  if (q.includes('who are you') || q.includes('about') || q.includes('founder') || q.includes('owner')) {
    return knowledgeBase.about.mission + " Founded by " + knowledgeBase.about.founder;
  }

  // Projects
  if (q.includes('project') || q.includes('portfolio') || q.includes('work')) {
    const projects = knowledgeBase.projects.map(p => p.title).join(" and ");
    return `We have completed several high-end projects such as ${projects}. Would you like to see our portfolio?`;
  }

  // Price / Quote
  if (q.includes('price') || q.includes('cost') || q.includes('quote') || q.includes('how much')) {
    return `Pricing depends on the project scope and materials. For a detailed quote, please call our engineering team at ${knowledgeBase.contact.phone[0]} or click 'Get Quote' in the navbar.`;
  }

  return null;
};

export async function processChat(message) {
  // 1. Check Knowledge Base first (Precision)
  const kbResponse = getKBResponse(message);
  if (kbResponse) return kbResponse;

  // 2. AI Fallback (Conversational)
  try {
    const endpoint = 'https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill';
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ inputs: message }),
    });
    
    if (response.ok) {
      const data = await response.json();
      const reply = Array.isArray(data) ? data[0]?.generated_text : data?.generated_text;
      if (reply) return reply;
    }
  } catch (err) {
    console.error('AI Fallback failed:', err);
  }

  // 3. Last Resort
  return "I'm specialized in Fokus Lanka services. Please ask about our construction, engineering, or contact details!";
}
