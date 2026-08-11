import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Globe, Sun as SunIcon, Battery, Zap, Phone, Mail, MapPin } from 'lucide-react';
import './index.css';

// Intersection Observer Hook for scroll animations
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}

function App() {
  const { t, i18n } = useTranslation();
  const [isDark, setIsDark] = useState(true);

  useScrollReveal();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'de' ? 'en' : 'de');
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      <header>
        <div className="logo-sprite" title="EnHUB Logo" />
        
        <nav>
          <a onClick={() => scrollTo('home')}>{t('tab1')}</a>
          <a onClick={() => scrollTo('info')}>{t('tab2')}</a>
          <a onClick={() => scrollTo('contact')}>{t('tab3')}</a>
        </nav>

        <div className="controls">
          <button className="icon-btn" onClick={toggleLanguage} title="Toggle Language">
            <Globe size={20} />
            <span style={{ marginLeft: 4, fontSize: '0.875rem', fontWeight: 'bold' }}>
              {i18n.language.toUpperCase()}
            </span>
          </button>
          <button className="icon-btn" onClick={() => setIsDark(!isDark)} title="Toggle Theme">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="section hero-section">
          <div className="hero-content animate-on-scroll">
            <h1>{t('message')}</h1>
          </div>
        </section>

        {/* INFO SECTION */}
        <section id="info" className="section info-section">
          <h2 className="animate-on-scroll">{t('info_title')}</h2>
          <p className="animate-on-scroll">{t('info_desc')}</p>
          
          <div className="services-grid">
            <div className="service-card animate-on-scroll delay-100">
              <SunIcon className="service-icon" size={48} />
              <h3>{t('srv_solar_title')}</h3>
              <p>{t('srv_solar_desc')}</p>
            </div>
            
            <div className="service-card animate-on-scroll delay-200">
              <Battery className="service-icon" size={48} />
              <h3>{t('srv_battery_title')}</h3>
              <p>{t('srv_battery_desc')}</p>
            </div>
            
            <div className="service-card animate-on-scroll delay-300">
              <Zap className="service-icon" size={48} />
              <h3>{t('srv_manage_title')}</h3>
              <p>{t('srv_manage_desc')}</p>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section contact-section">
          <div className="contact-container">
            <div className="contact-info animate-on-scroll">
              <h2>{t('contact_title')}</h2>
              <p>{t('contact_desc')}</p>
              
              <div className="contact-details">
                <div className="contact-detail-item animate-on-scroll delay-100">
                  <Phone size={24} />
                  <span>{t('phone')}</span>
                </div>
                <div className="contact-detail-item animate-on-scroll delay-200">
                  <Mail size={24} />
                  <span>{t('email')}</span>
                </div>
                <div className="contact-detail-item animate-on-scroll delay-300">
                  <MapPin size={24} />
                  <span>{t('address')}</span>
                </div>
              </div>
            </div>

            <div className="contact-form animate-on-scroll delay-200">
              <div className="form-group">
                <input type="text" id="name" placeholder=" " />
                <label htmlFor="name">{t('form_name')}</label>
              </div>
              
              <div className="form-group">
                <input type="email" id="email" placeholder=" " />
                <label htmlFor="email">{t('form_email')}</label>
              </div>
              
              <div className="form-group">
                <textarea id="message" placeholder=" "></textarea>
                <label htmlFor="message">{t('form_message')}</label>
              </div>
              
              <button className="submit-btn">{t('form_submit')}</button>
            </div>
          </div>
        </section>
      </main>

      <footer>
        {t('address')}
      </footer>
    </div>
  );
}

export default App;
