(() => {
  const API_URL =
    window.location.hostname === 'localhost'
      ? 'http://localhost:3000/chat'
      : 'https://growit-landing-page.onrender.com/chat';

  // ── Styles ──────────────────────────────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    #growit-chat-bubble {
      position: fixed;
      bottom: 28px;
      right: 28px;
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background: #2d6a4f;
      color: #fff;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 16px rgba(37,99,235,0.4);
      z-index: 9999;
      transition: transform 0.2s;
    }
    #growit-chat-bubble:hover { transform: scale(1.08); }

    #growit-chat-window {
      position: fixed;
      bottom: 92px;
      right: 28px;
      width: 340px;
      max-height: 480px;
      border-radius: 16px;
      background: #fff;
      box-shadow: 0 8px 40px rgba(0,0,0,0.18);
      display: flex;
      flex-direction: column;
      z-index: 9999;
      overflow: hidden;
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      transition: transform 0.3s ease, opacity 0.3s ease;
    }
    #growit-chat-window.hidden { display: none; }

    /* ── Mobile: full-screen bottom sheet ── */
    @media (max-width: 600px) {
      #growit-chat-window {
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        max-height: 92dvh;
        height: 92dvh;
        border-radius: 20px 20px 0 0;
        transform: translateY(0);
      }
      #growit-chat-window.hidden {
        display: flex;
        transform: translateY(100%);
        pointer-events: none;
        opacity: 0;
      }
      #growit-chat-bubble {
        bottom: 20px;
        right: 20px;
      }
      #growit-chat-header {
        padding: 16px 18px;
      }
      #growit-erika-avatar {
        width: 40px;
        height: 40px;
        font-size: 22px;
      }
      #growit-chat-messages {
        flex: 1;
        padding: 16px;
      }
      #growit-chat-form {
        padding: 12px;
        padding-bottom: max(12px, env(safe-area-inset-bottom));
      }
      #growit-chat-input {
        font-size: 16px; /* prevents iOS auto-zoom on focus */
      }
      /* drag handle pill */
      #growit-chat-window::before {
        content: '';
        display: block;
        width: 36px;
        height: 4px;
        background: rgba(0,0,0,0.15);
        border-radius: 2px;
        margin: 10px auto 0;
        flex-shrink: 0;
      }
    }

    #growit-chat-header {
      background: #2d6a4f;
      color: #fff;
      padding: 12px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    #growit-chat-header-identity {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    #growit-erika-avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(255,255,255,0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      flex-shrink: 0;
    }
    #growit-chat-header-text { display: flex; flex-direction: column; }
    #growit-chat-header-name { font-weight: 700; font-size: 15px; line-height: 1.2; }
    #growit-chat-header-status { font-size: 11px; opacity: 0.85; }
    #growit-chat-close {
      background: none;
      border: none;
      color: #fff;
      cursor: pointer;
      font-size: 18px;
      line-height: 1;
      padding: 0;
    }

    #growit-chat-messages {
      flex: 1;
      overflow-y: auto;
      padding: 14px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .gc-msg {
      max-width: 82%;
      padding: 9px 13px;
      border-radius: 12px;
      line-height: 1.5;
      word-break: break-word;
    }
    .gc-msg.bot {
      background: #f1f5f9;
      color: #1e293b;
      align-self: flex-start;
      border-bottom-left-radius: 3px;
    }
    .gc-msg.user {
      background: #2d6a4f;
      color: #fff;
      align-self: flex-end;
      border-bottom-right-radius: 3px;
    }
    .gc-msg.typing { color: #64748b; font-style: italic; }

    #growit-chat-form {
      display: flex;
      border-top: 1px solid #e2e8f0;
      padding: 10px;
      gap: 8px;
    }
    #growit-chat-input {
      flex: 1;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      padding: 8px 11px;
      font-size: 14px;
      outline: none;
      font-family: inherit;
    }
    #growit-chat-input:focus { border-color: #2d6a4f; }
    #growit-chat-send {
      background: #2d6a4f;
      color: #fff;
      border: none;
      border-radius: 8px;
      padding: 8px 14px;
      cursor: pointer;
      font-weight: 600;
      transition: background 0.15s;
    }
    #growit-chat-send:hover { background: #1a4a35; }
    #growit-chat-send:disabled { background: #95d5b2; cursor: not-allowed; }
  `;
  document.head.appendChild(style);

  // ── HTML ─────────────────────────────────────────────────────────────────────
  const bubble = document.createElement('button');
  bubble.id = 'growit-chat-bubble';
  bubble.setAttribute('aria-label', 'Open chat');
  bubble.innerHTML = `🤖`;
  bubble.style.fontSize = '24px';

  const chatWindow = document.createElement('div');
  chatWindow.id = 'growit-chat-window';
  chatWindow.classList.add('hidden');
  chatWindow.innerHTML = `
    <div id="growit-chat-header">
      <div id="growit-chat-header-identity">
        <div id="growit-erika-avatar">🤖</div>
        <div id="growit-chat-header-text">
          <span id="growit-chat-header-name">Erika</span>
          <span id="growit-chat-header-status">✦ GrowIT Assistant</span>
        </div>
      </div>
      <button id="growit-chat-close" aria-label="Close chat">✕</button>
    </div>
    <div id="growit-chat-messages"></div>
    <form id="growit-chat-form" autocomplete="off">
      <input id="growit-chat-input" type="text" placeholder="Ask about GrowIT…" required />
      <button id="growit-chat-send" type="submit">Send</button>
    </form>
  `;

  document.body.appendChild(chatWindow);
  document.body.appendChild(bubble);

  // ── State ────────────────────────────────────────────────────────────────────
  const history = []; // { role, content }

  // ── Helpers ──────────────────────────────────────────────────────────────────
  const messagesEl = () => document.getElementById('growit-chat-messages');

  function addMessage(role, text) {
    const el = document.createElement('div');
    el.className = `gc-msg ${role}`;
    el.textContent = text;
    messagesEl().appendChild(el);
    messagesEl().scrollTop = messagesEl().scrollHeight;
    return el;
  }

  function addTyping() {
    const el = document.createElement('div');
    el.className = 'gc-msg bot typing';
    el.textContent = 'Erika is typing…';
    messagesEl().appendChild(el);
    messagesEl().scrollTop = messagesEl().scrollHeight;
    return el;
  }

  // ── Open / close ─────────────────────────────────────────────────────────────
  let opened = false;

  const isMobile = () => window.innerWidth <= 600;

  function openChat() {
    chatWindow.classList.remove('hidden');
    bubble.style.display = 'none';
    if (!opened) {
      addMessage(
        'bot',
        "Hi there! 👋 I'm Erika, GrowIT's assistant. Ask me anything about our services, how we work, or how to get started!",
      );
      opened = true;
    }
    // slight delay on mobile so keyboard doesn't fight the slide-up animation
    setTimeout(
      () => document.getElementById('growit-chat-input').focus(),
      isMobile() ? 350 : 0,
    );
  }

  function closeChat() {
    chatWindow.classList.add('hidden');
    bubble.style.display = 'flex';
  }

  bubble.addEventListener('click', openChat);
  document
    .getElementById('growit-chat-close')
    .addEventListener('click', closeChat);

  // ── Send message ─────────────────────────────────────────────────────────────
  document
    .getElementById('growit-chat-form')
    .addEventListener('submit', async (e) => {
      e.preventDefault();
      const input = document.getElementById('growit-chat-input');
      const sendBtn = document.getElementById('growit-chat-send');
      const text = input.value.trim();
      if (!text) return;

      input.value = '';
      sendBtn.disabled = true;

      addMessage('user', text);
      history.push({ role: 'user', content: text });

      const typingEl = addTyping();

      try {
        const res = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: history }),
        });

        const data = await res.json();
        typingEl.remove();

        const reply =
          data.reply || data.error || "Sorry, I couldn't get a response.";
        addMessage('bot', reply);
        history.push({ role: 'assistant', content: reply });
      } catch {
        typingEl.remove();
        addMessage(
          'bot',
          'Connection error. Make sure the chatbot server is running.',
        );
      } finally {
        sendBtn.disabled = false;
        input.focus();
      }
    });
})();
