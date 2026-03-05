// src/components/Contact.jsx
import { useState } from 'react'

const EMAIL    = 'meshackomoding21@gmail.com'
const WHATSAPP = '254729298595' 

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', project: '', message: '' })
  const [channel, setChannel] = useState('email') 
  const [error, setError]     = useState('')

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const validate = () => {
    if (!form.name.trim())    return 'Please enter your name.'
    if (!form.message.trim()) return 'Please enter a message.'
    return ''
  }

  const handleSubmit = () => {
    const err = validate()
    if (err) { setError(err); return }
    setError('')

    const body = `Hi Samuel,\n\nMy name is ${form.name}.\n\nProject: ${form.project || 'N/A'}\nEmail: ${form.email || 'N/A'}\n\n${form.message}`

    if (channel === 'email') {
      const subject = encodeURIComponent(`Portfolio Enquiry — ${form.project || 'Collaboration'}`)
      const bodyEnc = encodeURIComponent(body)
      window.open(`mailto:${EMAIL}?subject=${subject}&body=${bodyEnc}`, '_blank')
    } else {
      const waText = encodeURIComponent(body)
      window.open(`https://wa.me/${WHATSAPP}?text=${waText}`, '_blank')
    }
  }

  return (
    <>
      <style>{`
        .contact-section {
          padding: 140px 60px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: center;
          background: var(--deep-black);
          position: relative;
          overflow: hidden;
        }

        .contact-section::before {
          content: 'CONTACT';
          position: absolute;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 200px;
          color: transparent;
          -webkit-text-stroke: 1px rgba(201,168,76,0.04);
          bottom: 20px;
          left: -10px;
          pointer-events: none;
          letter-spacing: 10px;
          line-height: 1;
        }

        /* ── LEFT INFO ── */
        .contact-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(56px, 7vw, 100px);
          line-height: 0.95;
          color: var(--warm-white);
          margin-bottom: 32px;
          letter-spacing: 2px;
        }

        .contact-heading em {
          color: var(--gold);
          font-family: 'Playfair Display', serif;
          font-style: italic;
          display: block;
        }

        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-bottom: 40px;
        }

        .contact-info-item {
          display: flex;
          flex-direction: column;
          padding: 20px 0;
          border-bottom: 1px solid rgba(201,168,76,0.12);
          text-decoration: none;
          transition: padding-left 0.3s;
        }

        .contact-info-item:hover {
          padding-left: 8px;
        }

        .contact-info-label {
          font-size: 9px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--gold);
          opacity: 0.7;
          margin-bottom: 5px;
          font-family: 'DM Sans', sans-serif;
        }

        .contact-info-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          color: var(--cream);
          letter-spacing: 0.5px;
        }

        .contact-tagline {
          font-family: 'Cormorant Garamond', serif;
          font-size: 17px;
          font-style: italic;
          color: rgba(245,237,216,0.45);
          line-height: 1.8;
          margin-top: 32px;
          padding-top: 32px;
          border-top: 1px solid rgba(201,168,76,0.08);
        }

        /* ── FORM CARD ── */
        .contact-form-card {
          background: var(--warm-dark);
          border: 1px solid rgba(201,168,76,0.12);
          padding: 52px 48px;
          position: relative;
          z-index: 2;
        }

        .form-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 26px;
          letter-spacing: 4px;
          color: var(--gold);
          margin-bottom: 36px;
        }

        /* ── CHANNEL TOGGLE ── */
        .channel-toggle {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
          margin-bottom: 32px;
          border: 1px solid rgba(201,168,76,0.15);
        }

        .channel-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 10px;
          background: transparent;
          border: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(245,237,216,0.4);
          cursor: pointer;
          transition: background 0.3s, color 0.3s;
          position: relative;
        }

        .channel-btn.active-email {
          background: rgba(201,168,76,0.1);
          color: var(--gold);
          border-bottom: 2px solid var(--gold);
        }

        .channel-btn.active-whatsapp {
          background: rgba(37,211,102,0.08);
          color: #25D366;
          border-bottom: 2px solid #25D366;
        }

        .channel-btn:not(.active-email):not(.active-whatsapp):hover {
          background: rgba(201,168,76,0.04);
          color: rgba(245,237,216,0.6);
        }

        /* ── FIELDS ── */
        .form-group {
          margin-bottom: 24px;
        }

        .form-label {
          display: block;
          font-size: 9px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--cream);
          opacity: 0.45;
          margin-bottom: 10px;
          font-family: 'DM Sans', sans-serif;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(201,168,76,0.2);
          color: var(--cream);
          font-size: 14px;
          outline: none;
          font-family: 'DM Sans', sans-serif;
          padding: 10px 0;
          transition: border-color 0.3s;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-bottom-color: var(--gold);
        }

        .form-textarea {
          resize: none;
          height: 90px;
        }

        /* ── ERROR ── */
        .form-error {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 1px;
          color: #e07070;
          margin-bottom: 16px;
          padding: 10px 14px;
          border: 1px solid rgba(220,100,100,0.25);
          background: rgba(220,100,100,0.06);
        }

        /* ── SUBMIT ── */
        .submit-btn {
          width: 100%;
          border: none;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 16px;
          letter-spacing: 4px;
          padding: 17px 48px;
          cursor: pointer;
          margin-top: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          transition: background 0.3s, transform 0.2s;
        }

        .submit-btn:active {
          transform: scale(0.98);
        }

        .submit-btn.via-email {
          background: var(--gold);
          color: var(--deep-black);
        }

        .submit-btn.via-email:hover {
          background: var(--gold-light);
        }

        .submit-btn.via-whatsapp {
          background: #25D366;
          color: #fff;
        }

        .submit-btn.via-whatsapp:hover {
          background: #20bd5a;
        }

        /* ── SEND NOTE ── */
        .send-note {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          font-style: italic;
          color: rgba(245,237,216,0.3);
          text-align: center;
          margin-top: 14px;
          letter-spacing: 0.5px;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .contact-section {
            grid-template-columns: 1fr;
            padding: 80px 30px;
            gap: 60px;
          }

          .contact-section::before {
            font-size: 100px;
          }

          .contact-form-card {
            padding: 40px 28px;
          }
        }
      `}</style>

      <section className="contact-section" id="contact">

        {/* ── LEFT — Info ── */}
        <div>
          <h2 className="contact-heading">
            Let's Work<br />
            <em>Together</em>
          </h2>

          <div className="contact-info-list">
            <a href="mailto:meshackomoding21@gmail.com" className="contact-info-item">
              <span className="contact-info-label">Email</span>
              <span className="contact-info-value">meshackomoding21@gmail.com</span>
            </a>
            <a href="tel:+254729298595" className="contact-info-item">
              <span className="contact-info-label">Phone</span>
              <span className="contact-info-value">0729 298 595</span>
            </a>
            <a href="https://wa.me/254729298595" target="_blank"
              rel="noopener noreferrer" className="contact-info-item">
              <span className="contact-info-label">WhatsApp</span>
              <span className="contact-info-value">+254 729 298 595</span>
            </a>
            <div className="contact-info-item">
              <span className="contact-info-label">Location</span>
              <span className="contact-info-value">Nairobi, Kenya</span>
            </div>
          </div>

          <p className="contact-tagline">
            Open to commercial, lifestyle, editorial, and tourism campaigns.
            Brands that value originality and cultural impact are especially welcome.
          </p>
        </div>

        {/* ── RIGHT — Form ── */}
        <div className="contact-form-card">
          <p className="form-title">Send a Message</p>

          {/* ── Channel Toggle ── */}
          <div className="channel-toggle">
            <button
              className={`channel-btn ${channel === 'email' ? 'active-email' : ''}`}
              onClick={() => setChannel('email')}
            >
              <svg width="13" height="13" fill="none" stroke="currentColor"
                strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Send via Email
            </button>

            <button
              className={`channel-btn ${channel === 'whatsapp' ? 'active-whatsapp' : ''}`}
              onClick={() => setChannel('whatsapp')}
            >
              <svg width="13" height="13" fill="none" stroke="currentColor"
                strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7
                  8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8
                  8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              Send via WhatsApp
            </button>
          </div>

          {/* ── Fields ── */}
          {['name', 'email', 'project', 'message'].map(field => (
            <div className="form-group" key={field}>
              <label className="form-label">
                {field === 'project' ? 'Project Type' : field}
                {(field === 'name' || field === 'message') && (
                  <span style={{ color: 'var(--gold)', marginLeft: 4 }}>*</span>
                )}
              </label>
              {field === 'message'
                ? <textarea
                    name={field}
                    className="form-textarea"
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={
                      channel === 'whatsapp'
                        ? 'Hi Samuel, I\'d like to discuss a project with you...'
                        : 'Tell me about your project...'
                    }
                  />
                : <input
                    name={field}
                    className="form-input"
                    type={field === 'email' ? 'email' : 'text'}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={
                      field === 'name'    ? 'Your full name'         :
                      field === 'email'   ? 'your@email.com'         :
                      field === 'project' ? 'e.g. Commercial Campaign' : ''
                    }
                  />
              }
            </div>
          ))}

          {/* ── Validation Error ── */}
          {error && <p className="form-error">{error}</p>}

          {/* ── Submit ── */}
          <button
            className={`submit-btn ${channel === 'whatsapp' ? 'via-whatsapp' : 'via-email'}`}
            onClick={handleSubmit}
          >
            {channel === 'email' ? (
              <>
                <svg width="14" height="14" fill="none" stroke="currentColor"
                  strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Open in Email
              </>
            ) : (
              <>
                <svg width="14" height="14" fill="none" stroke="currentColor"
                  strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7
                    8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8
                    8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
                Open in WhatsApp
              </>
            )}
          </button>

          <p className="send-note">
            {channel === 'email'
              ? 'Opens your default mail app with the message pre-filled.'
              : 'Opens WhatsApp with the message pre-filled and ready to send.'}
          </p>

        </div>
      </section>
    </>
  )
}




