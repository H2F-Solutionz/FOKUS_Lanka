import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, ChevronDown } from 'lucide-react';
import faqs from '../data/faqs.json';
import { processChat } from '../utils/botService';

const Chatbot = () => {
  const [show, setShow] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! 👋 Welcome to Fokus Lanka. I\'m here to help you with any questions about our construction services. How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading]);

  const toggleChat = () => setShow(prev => !prev);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const botReply = await processChat(input);
      setMessages(prev => [...prev, { from: 'bot', text: botReply }]);
    } catch (err) {
      console.error('Chat error:', err);
      setMessages(prev => [...prev, { from: 'bot', text: 'Sorry, I\'m having trouble connecting right now. Please call us at +94 76 668 4532.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleFaqClick = (faq) => {
    setMessages(prev => [
      ...prev,
      { from: 'user', text: faq.question },
      { from: 'bot', text: faq.answer }
    ]);
  };

  return (
    <>
      {/* ── Toggle Button ── */}
      <button
        onClick={toggleChat}
        aria-label="Open chatbot"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 50,
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #D4AF37, #FF8C00)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 24px rgba(212,175,55,0.5), 0 0 0 0 rgba(212,175,55,0.4)',
          transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease',
          animation: show ? 'none' : 'chatPulse 2.5s ease-in-out infinite',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.12)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(212,175,55,0.7)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(212,175,55,0.5)'; }}
      >
        <div style={{ transition: 'transform 0.3s ease', transform: show ? 'rotate(90deg) scale(0.9)' : 'rotate(0deg) scale(1)' }}>
          {show ? <X size={26} color="white" strokeWidth={2.5} /> : <MessageCircle size={26} color="white" strokeWidth={2} />}
        </div>
        {/* Notification dot */}
        {!show && (
          <span style={{
            position: 'absolute',
            top: '4px',
            right: '4px',
            width: '12px',
            height: '12px',
            background: '#22c55e',
            borderRadius: '50%',
            border: '2px solid white',
            animation: 'greenPulse 2s ease-in-out infinite'
          }} />
        )}
      </button>

      {/* ── Chat Window ── */}
      <div style={{
        position: 'fixed',
        bottom: '6.5rem',
        right: '2rem',
        zIndex: 50,
        width: '380px',
        maxHeight: '600px',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.25), 0 0 0 1px rgba(212,175,55,0.15)',
        background: 'rgba(8, 15, 35, 0.97)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        flexDirection: 'column',
        transform: show ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
        opacity: show ? 1 : 0,
        pointerEvents: show ? 'all' : 'none',
        transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.25s ease',
      }}>

        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #0F2040 0%, #1A365D 100%)',
          padding: '1rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          borderBottom: '1px solid rgba(212,175,55,0.2)',
        }}>
          <div style={{
            width: '44px', height: '44px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #D4AF37, #FF8C00)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 16px rgba(212,175,55,0.4)',
            flexShrink: 0,
          }}>
            <Bot size={22} color="white" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ color: 'white', fontWeight: 700, fontSize: '0.9rem', fontFamily: 'Poppins,sans-serif' }}>
              Fokus Lanka Assistant
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '2px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.72rem' }}>Online • Typically replies instantly</span>
            </div>
          </div>
          <button onClick={toggleChat} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '8px', padding: '6px', cursor: 'pointer', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
            <ChevronDown size={18} />
          </button>
        </div>

        {/* Quick FAQ Chips */}
        <div style={{
          padding: '0.75rem 1rem 0.5rem',
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(255,255,255,0.02)',
        }}>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', width: '100%', marginBottom: '4px', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Quick Questions</span>
          {faqs.slice(0, 4).map((faq, idx) => (
            <button
              key={idx}
              onClick={() => handleFaqClick(faq)}
              style={{
                background: 'rgba(212,175,55,0.1)',
                border: '1px solid rgba(212,175,55,0.25)',
                borderRadius: '20px',
                padding: '4px 12px',
                color: '#D4AF37',
                fontSize: '0.72rem',
                cursor: 'pointer',
                fontWeight: 500,
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(212,175,55,0.25)'; e.currentTarget.style.borderColor = '#D4AF37'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(212,175,55,0.1)'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.25)'; }}
            >
              {faq.question.length > 28 ? faq.question.slice(0, 28) + '…' : faq.question}
            </button>
          ))}
        </div>

        {/* Messages */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(212,175,55,0.3) transparent',
        }}>
          {messages.map((msg, i) => (
            <div key={i} style={{
              display: 'flex',
              justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start',
              alignItems: 'flex-end',
              gap: '8px',
            }}>
              {msg.from === 'bot' && (
                <div style={{
                  width: '28px', height: '28px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #D4AF37, #FF8C00)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Bot size={14} color="white" />
                </div>
              )}
              <div style={{
                maxWidth: '75%',
                padding: '0.65rem 1rem',
                borderRadius: msg.from === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                background: msg.from === 'user'
                  ? 'linear-gradient(135deg, #D4AF37, #FF8C00)'
                  : 'rgba(255,255,255,0.06)',
                border: msg.from === 'bot' ? '1px solid rgba(255,255,255,0.1)' : 'none',
                color: 'white',
                fontSize: '0.82rem',
                lineHeight: '1.55',
                boxShadow: msg.from === 'user' ? '0 4px 16px rgba(212,175,55,0.3)' : 'none',
              }}>
                {msg.text}
              </div>
              {msg.from === 'user' && (
                <div style={{
                  width: '28px', height: '28px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, border: '1px solid rgba(255,255,255,0.15)',
                }}>
                  <User size={14} color="white" />
                </div>
              )}
            </div>
          ))}

          {/* Typing indicator */}
          {loading && (
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
              <div style={{
                width: '28px', height: '28px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #D4AF37, #FF8C00)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <Bot size={14} color="white" />
              </div>
              <div style={{
                padding: '0.65rem 1rem',
                borderRadius: '18px 18px 18px 4px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', gap: '4px', alignItems: 'center',
              }}>
                {[0, 1, 2].map(i => (
                  <span key={i} style={{
                    width: '7px', height: '7px', borderRadius: '50%',
                    background: '#D4AF37',
                    display: 'inline-block',
                    animation: `typingDot 1.2s ease-in-out ${i * 0.2}s infinite`,
                  }} />
                ))}
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div style={{
          padding: '0.75rem 1rem',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'center',
          background: 'rgba(255,255,255,0.02)',
        }}>
          <input
            type="text"
            placeholder="Ask about our services…"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            style={{
              flex: 1,
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '12px',
              padding: '0.6rem 1rem',
              color: 'white',
              fontSize: '0.83rem',
              outline: 'none',
              fontFamily: 'Inter, sans-serif',
              transition: 'border-color 0.2s',
            }}
            onFocus={e => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.5)'}
            onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            style={{
              width: '40px', height: '40px', borderRadius: '12px', border: 'none',
              background: input.trim() ? 'linear-gradient(135deg, #D4AF37, #FF8C00)' : 'rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: input.trim() ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s',
              flexShrink: 0,
              boxShadow: input.trim() ? '0 4px 12px rgba(212,175,55,0.35)' : 'none',
            }}
            onMouseEnter={e => { if (input.trim()) e.currentTarget.style.transform = 'scale(1.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
          >
            <Send size={16} color="white" />
          </button>
        </div>
      </div>

      {/* Inline keyframes via style tag */}
      <style>{`
        @keyframes chatPulse {
          0%, 100% { box-shadow: 0 4px 24px rgba(212,175,55,0.5), 0 0 0 0 rgba(212,175,55,0.4); }
          50% { box-shadow: 0 4px 24px rgba(212,175,55,0.6), 0 0 0 12px rgba(212,175,55,0); }
        }
        @keyframes greenPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }
        @keyframes typingDot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-5px); opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default Chatbot;
