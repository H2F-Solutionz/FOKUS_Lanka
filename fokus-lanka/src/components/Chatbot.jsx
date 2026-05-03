import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import faqs from '../data/faqs.json';
import { sendMessageToHF } from '../utils/hfChat';

const Chatbot = () => {
  const [show, setShow] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleChat = () => setShow(!show);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const hfReply = await sendMessageToHF(input);
      const botMsg = { from: 'bot', text: hfReply };
      setMessages(prev => [...prev, botMsg]);
    } catch (e) {
      const errMsg = { from: 'bot', text: 'Sorry, I could not get a response right now.' };
      setMessages(prev => [...prev, errMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Chatbot toggle button */}
      <div className="fixed bottom-8 right-8 z-50 flex items-center">
        <button
          onClick={toggleChat}
          className="bg-fokus-blue text-orange-500 p-4 rounded-full shadow-[0_0_15px_rgba(0,0,255,0.6)] hover:bg-fokus-blue/90 hover:scale-110 hover:shadow-[0_0_25px_rgba(0,0,255,0.8)] transition-all duration-300 flex items-center justify-center"
          aria-label="Open chatbot"
        >
          <MessageCircle size={24} />
        </button>
      </div>

      {/* Chatbot popup */}
      {show && (
        <div className="fixed bottom-24 right-8 w-80 h-96 bg-white border border-gray-200 rounded-lg shadow-xl flex flex-col">
          <div className="flex justify-between items-center p-2 border-b">
            <h3 className="text-sm font-medium">Chatbot</h3>
            <button onClick={toggleChat} className="text-gray-500 hover:text-gray-700">✕</button>
          </div>
          <div className="flex-1 p-2 overflow-y-auto">
            {/* FAQ accordion */}
            {faqs.map((faq, idx) => (
              <div key={idx} className="mb-2">
                <button
                  className="w-full text-left text-sm font-medium text-fokus-navy py-1 border-b"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  {faq.question}
                </button>
                {openFaq === idx && (
                  <p className="text-xs text-gray-600 pt-1">{faq.answer}</p>
                )}
              </div>
            ))}
            {/* Chat messages */}
            {messages.map((msg, i) => (
              <div key={i} className={`mt-2 ${msg.from === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded ${msg.from === 'user' ? 'bg-fokus-blue text-white' : 'bg-gray-200 text-gray-800'}`}>
                  {msg.text}
                </span>
              </div>
            ))}
            {loading && <p className="text-xs text-gray-400 mt-1">Thinking...</p>}
          </div>
          <div className="p-2 border-t flex">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm mr-1"
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="bg-fokus-blue text-white px-3 rounded hover:bg-fokus-blue/80"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
