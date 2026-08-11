import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Globe, Phone, Mail, MapPin, Leaf, Shield, Info } from 'lucide-react';
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
  const [activeTab, setActiveTab] = useState('home');

  useScrollReveal();

  useEffect(() => {
    const sectionIds = ['home', 'solar', 'batteries', 'info', 'about', 'contact'];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

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
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {/* Moving Electricity Overlay */}
      <div className="electricity-overlay">
        <div className="electric-line line-1"></div>
        <div className="electric-line line-2"></div>
        <div className="electric-line line-3"></div>
        <div className="electric-line line-4"></div>
        <div className="electric-line line-5"></div>
      </div>

      <header>
        {/* Logo: Image + Text directly */}
        <div className="logo-container" onClick={() => scrollTo('home')}>
          <img src="/logo_002.png" alt="EnHUB Logo" className="logo-img" />
          <span className="logo-text">EnHUB</span>
        </div>
        
        <nav>
          <a className={activeTab === 'home' ? 'active' : ''} onClick={() => scrollTo('home')}>{t('tab1')}</a>
          <a className={activeTab === 'solar' ? 'active' : ''} onClick={() => scrollTo('solar')}>{t('tab2')}</a>
          <a className={activeTab === 'batteries' ? 'active' : ''} onClick={() => scrollTo('batteries')}>{t('tab3')}</a>
          <a className={activeTab === 'info' ? 'active' : ''} onClick={() => scrollTo('info')}>{t('tab4')}</a>
          <a className={activeTab === 'about' ? 'active' : ''} onClick={() => scrollTo('about')}>{t('tab5')}</a>
          <a className={activeTab === 'contact' ? 'active' : ''} onClick={() => scrollTo('contact')}>{t('tab6')}</a>
        </nav>

        <div className="controls">
          <button className="icon-btn" onClick={toggleLanguage} title="Toggle Language">
            <Globe size={32} />
            <span style={{ marginLeft: 8, fontSize: '1.25rem', fontWeight: 'bold' }}>
              {i18n.language.toUpperCase()}
            </span>
          </button>
          <button className="icon-btn" onClick={() => setIsDark(!isDark)} title="Toggle Theme">
            {isDark ? <Sun size={32} /> : <Moon size={32} />}
          </button>
        </div>
      </header>

      <main>
        {/* 1. HERO SECTION */}
        <section id="home" className="section hero-section">
          <div className="hero-content animate-on-scroll">
            <h1>{t('message')}</h1>
          </div>
        </section>

        {/* 2. SOLAR PANELS SECTION */}
        <section id="solar" className="section section-content-alt">
          <h2 className="section-title animate-on-scroll">{t('solar_title')}</h2>
          <p className="section-subtitle animate-on-scroll">{t('solar_desc')}</p>
          
          <div className="pricing-grid">
            <div className="pricing-card animate-on-scroll delay-100">
              <div className="product-img-wrapper"><img src="/panel.jpg" alt="Solar Panel" className="product-img" /></div>
              <h3>{t('solar_p1_title')}</h3>
              <div className="price">{t('solar_p1_price')}</div>
              <p>Standard Module for efficient home energy generation.</p>
            </div>
            
            <div className="pricing-card animate-on-scroll delay-200">
              <div className="product-img-wrapper"><img src="/panel.jpg" alt="Solar Panel" className="product-img" /></div>
              <h3>{t('solar_p2_title')}</h3>
              <div className="price">{t('solar_p2_price')}</div>
              <p>High performance panels for demanding setups.</p>
            </div>
            
            <div className="pricing-card animate-on-scroll delay-300">
              <div className="product-img-wrapper"><img src="/panel.jpg" alt="Solar Panel" className="product-img" /></div>
              <h3>{t('solar_p3_title')}</h3>
              <div className="price">{t('solar_p3_price')}</div>
              <p>Maximum yield and durability for commercial use.</p>
            </div>
          </div>
        </section>

        {/* 3. BATTERIES SECTION */}
        <section id="batteries" className="section section-content">
          <h2 className="section-title animate-on-scroll">{t('battery_title')}</h2>
          <p className="section-subtitle animate-on-scroll">{t('battery_desc')}</p>
          
          <div className="pricing-grid">
            <div className="pricing-card animate-on-scroll delay-100">
              <div className="product-img-wrapper"><img src="/battery.jpg" alt="Battery" className="product-img" /></div>
              <h3>{t('bat_1_title')}</h3>
              <div className="price">{t('bat_1_price')}</div>
              <p>Perfect for small households and essential backup.</p>
            </div>
            
            <div className="pricing-card animate-on-scroll delay-200">
              <div className="product-img-wrapper"><img src="/battery.jpg" alt="Battery" className="product-img" /></div>
              <h3>{t('bat_2_title')}</h3>
              <div className="price">{t('bat_2_price')}</div>
              <p>Ideal balance of storage for average homes.</p>
            </div>
            
            <div className="pricing-card animate-on-scroll delay-300">
              <div className="product-img-wrapper"><img src="/battery.jpg" alt="Battery" className="product-img" /></div>
              <h3>{t('bat_3_title')}</h3>
              <div className="price">{t('bat_3_price')}</div>
              <p>Large capacity storage for maximum independence.</p>
            </div>
          </div>
        </section>

        {/* 4. INFO SECTION */}
        <section id="info" className="section section-content-alt">
          <h2 className="section-title animate-on-scroll">{t('info_title')}</h2>
          <p className="section-subtitle animate-on-scroll">{t('info_desc')}</p>
          
          <div className="pricing-grid">
            <div className="pricing-card animate-on-scroll delay-100">
              <Leaf className="pricing-icon" size={48} />
              <h3>{t('srv_solar_title')}</h3>
              <p>{t('srv_solar_desc')}</p>
            </div>
            
            <div className="pricing-card animate-on-scroll delay-200">
              <Shield className="pricing-icon" size={48} />
              <h3>{t('srv_battery_title')}</h3>
              <p>{t('srv_battery_desc')}</p>
            </div>
            
            <div className="pricing-card animate-on-scroll delay-300">
              <Info className="pricing-icon" size={48} />
              <h3>{t('srv_manage_title')}</h3>
              <p>{t('srv_manage_desc')}</p>
            </div>
          </div>
        </section>

        {/* 5. ABOUT US SECTION */}
        <section id="about" className="section section-content">
          <h2 className="section-title animate-on-scroll">{t('about_title')}</h2>
          <div className="about-container animate-on-scroll delay-200">
            <p>{t('about_desc')}</p>
          </div>
        </section>

        {/* 6. CONTACT SECTION */}
        <section id="contact" className="section section-content-alt">
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
