import "./experience.css";
import { useState } from "react";

function ExperiencePage() {
  const [isEdited, setIsEdited] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [activeDemo, setActiveDemo] = useState(null);
  const [demoState, setDemoState] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPromoVisible, setIsPromoVisible] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  const promoCode = "TIMPRO20";

  const handleCopyCode = () => {
    navigator.clipboard.writeText(promoCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleProcess = (type) => {
    setIsProcessing(true);
    setTimeout(() => {
      setDemoState({ ...demoState, [type]: 'completed' });
      setIsProcessing(false);
    }, 2000);
  };

  const renderDemoContent = () => {
    switch(activeDemo) {
      case 'research':
        return (
          <div className="demo-modal">
            <h2>🔍 Bilgi ve Araştırma</h2>
            <div className="demo-input-area">
              <input 
                type="text" 
                defaultValue="Timpro AI Asistan nedir?"
                className="demo-text-input"
                readOnly
              />
              <button 
                className="demo-action-btn"
                onClick={() => handleProcess('research')}
                disabled={isProcessing}
              >
                {isProcessing ? 'Araştırılıyor...' : 'Araştır'}
              </button>
            </div>
            {demoState.research === 'completed' && (
              <div className="demo-result">
                <h4>Araştırma Sonucu:</h4>
                <p><strong>Timpro AI Asistan</strong>, kurumsal çalışma hayatını kolaylaştıran yapay zeka destekli bir masaüstü asistan uygulamasıdır.</p>
                <ul>
                  <li>📧 E-posta ve yazışmaları kurumsal dile dönüştürür</li>
                  <li>📊 Rapor ve sunum hazırlama desteği sağlar</li>
                  <li>🤝 Toplantı notlarını aksiyon planlarına çevirir</li>
                  <li>📅 Ajanda ve takvim yönetimi yapar</li>
                  <li>✈️ İş seyahati planlamalarında yardımcı olur</li>
                </ul>
                <p className="demo-meta">Kaynak: Timpro resmi dokümantasyonu</p>
              </div>
            )}
          </div>
        );
      
      case 'report':
        return (
          <div className="demo-modal">
            <h2>📊 Rapor Hazırlama</h2>
            <div className="demo-input-area">
              <div className="input-tabs">
                <span className="tab active">📝 Metin Girişi</span>
                <span className="tab">📄 Dosya Yükle</span>
              </div>
              
              <textarea 
                className="demo-textarea"
                placeholder="Rapor içeriğinizi buraya yazın veya yapıştırın..."
                defaultValue="2024 yılında şirketimiz %35 büyüme kaydetti. Yeni ürünlerimiz piyasada çok iyi karşılandı. Müşteri memnuniyeti %92'ye ulaştı. Gelecek yıl için hedefimiz %40 büyüme ve 3 yeni pazara giriş. Ekip büyüklüğümüzü 50 kişiden 75 kişiye çıkarmayı planlıyoruz."
                readOnly
              />

              <div className="template-selector">
                <label>📐 Rapor Şablonu:</label>
                <select className="template-select">
                  <option>Kurumsal - Profesyonel</option>
                  <option>Modern - Minimalist</option>
                  <option>Detaylı - Akademik</option>
                  <option>Özet - Yönetici Raporu</option>
                </select>
              </div>

              <button 
                className="demo-action-btn"
                onClick={() => handleProcess('report')}
                disabled={isProcessing}
              >
                {isProcessing ? 'Rapor Oluşturuluyor...' : 'Rapor Oluştur'}
              </button>
            </div>
            {demoState.report === 'completed' && (
              <div className="demo-result">
                <h4>✅ Rapor Hazır</h4>
                <div className="report-preview">
                  <div className="report-header">
                    <h3>2024 Yıl Sonu Performans Raporu</h3>
                    <p className="report-date">Rapor Tarihi: 5 Ocak 2026</p>
                  </div>
                  
                  <div className="report-section">
                    <h4>📈 Yönetici Özeti</h4>
                    <p>2024 yılı şirketimiz için başarılı bir dönem olmuştur. %35 büyüme oranıyla hedeflerimizi aşan bir performans sergiledik. Yeni ürün lansmanlarımız pazar tarafından olumlu karşılanmış ve müşteri memnuniyeti %92 seviyesine ulaşmıştır.</p>
                  </div>

                  <div className="report-section">
                    <h4>🎯 Başlıca Başarılar</h4>
                    <ul className="report-list">
                      <li><strong>Büyüme Oranı:</strong> %35 yıllık artış</li>
                      <li><strong>Müşteri Memnuniyeti:</strong> %92 (hedef: %85)</li>
                      <li><strong>Yeni Ürünler:</strong> Piyasada güçlü kabul gördü</li>
                      <li><strong>Pazar Payı:</strong> Önemli artış kaydedildi</li>
                    </ul>
                  </div>

                  <div className="report-section">
                    <h4>🚀 2025 Hedefleri ve Stratejiler</h4>
                    <ul className="report-list">
                      <li><strong>Büyüme Hedefi:</strong> %40 yıllık büyüme</li>
                      <li><strong>Pazar Genişlemesi:</strong> 3 yeni pazara giriş</li>
                      <li><strong>Kapasite Artırımı:</strong> Ekip büyüklüğü 50'den 75 kişiye çıkarılacak</li>
                      <li><strong>Yatırım Alanları:</strong> AR-GE ve dijital dönüşüm</li>
                    </ul>
                  </div>

                  <div className="report-section">
                    <h4>📊 Sonuç ve Öneriler</h4>
                    <p>Mevcut momentum sürdürülerek 2025 yılında daha agresif büyüme hedefleri belirlenmiştir. Ekip genişlemesi ve yeni pazarlara giriş stratejileri öncelikli çalışma alanlarımızdır.</p>
                  </div>
                </div>
                <div className="report-stats">
                  <span>📄 4 Sayfa</span>
                  <span>📝 Otomatik biçimlendirildi</span>
                  <span>🎨 Kurumsal Şablon</span>
                </div>
                <button className="export-btn">📥 Raporu İndir (.docx)</button>
              </div>
            )}
          </div>
        );

      case 'meeting':
        return (
          <div className="demo-modal">
            <h2>🤝 Toplantı ve Karar Desteği</h2>
            <div className="demo-input-area">
              <textarea 
                className="demo-textarea"
                placeholder="Toplantı notlarınızı buraya yapıştırın..."
                defaultValue="Toplantıda yeni ofis konumu tartışıldı. İki alternatif var: Maslak'ta kiralık ofis veya Levent'te satılık ofis almak. Maslak opsiyonu daha merkezi ama kira maliyeti yüksek. Levent'te mülk alırsak uzun vadede daha karlı ama başlangıç yatırımı fazla. Ekip ulaşım kolaylığını tercih ediyor. Karar için bütçe analizi ve 5 yıllık maliyet karşılaştırması yapılmalı."
                readOnly
              />

              <div className="meeting-actions">
                <label className="action-checkbox">
                  <input type="checkbox" defaultChecked />
                  <span>📋 Toplantı notunu özetle ve maddeleştir</span>
                </label>
                <label className="action-checkbox">
                  <input type="checkbox" defaultChecked />
                  <span>🔍 Karar alternatiflerini analiz et</span>
                </label>
                <label className="action-checkbox">
                  <input type="checkbox" />
                  <span>📊 Karşılaştırma tablosu oluştur</span>
                </label>
              </div>

              <button 
                className="demo-action-btn"
                onClick={() => handleProcess('meeting')}
                disabled={isProcessing}
              >
                {isProcessing ? 'Analiz Ediliyor...' : 'Toplantıyı Analiz Et'}
              </button>
            </div>
            {demoState.meeting === 'completed' && (
              <div className="demo-result">
                <h4>📋 Toplantı Özeti ve Analiz</h4>
                
                <div className="meeting-summary">
                  <strong>🎯 Konu:</strong>
                  <p>Yeni ofis konumu belirlenmesi</p>
                </div>

                <div className="meeting-summary">
                  <strong>📝 Toplantı Notları:</strong>
                  <ul>
                    <li>İki farklı lokasyon değerlendirildi</li>
                    <li>Maslak: Merkezi konum, yüksek kira</li>
                    <li>Levent: Mülk edinimi, yüksek başlangıç maliyeti</li>
                    <li>Ekip önceliği: Ulaşım kolaylığı</li>
                    <li>Gerekli: Bütçe analizi ve 5 yıllık projeksiyon</li>
                  </ul>
                </div>

                <div className="decision-alternatives">
                  <strong>🔍 Karar Alternatifleri Analizi:</strong>
                  
                  <div className="alternative-card">
                    <h5>Alternatif 1: Maslak Kiralık Ofis</h5>
                    <div className="pros-cons">
                      <div className="pros">
                        <strong>✅ Avantajlar:</strong>
                        <ul>
                          <li>Merkezi konum, kolay ulaşım</li>
                          <li>Düşük başlangıç maliyeti</li>
                          <li>Esneklik (uzun vadeli bağlılık yok)</li>
                        </ul>
                      </div>
                      <div className="cons">
                        <strong>❌ Dezavantajlar:</strong>
                        <ul>
                          <li>Yüksek aylık kira bedeli</li>
                          <li>Uzun vadede yatırım değeri yok</li>
                          <li>Kira artış riski</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="alternative-card">
                    <h5>Alternatif 2: Levent Mülk Alımı</h5>
                    <div className="pros-cons">
                      <div className="pros">
                        <strong>✅ Avantajlar:</strong>
                        <ul>
                          <li>Uzun vadede maliyet tasarrufu</li>
                          <li>Gayrimenkul yatırımı</li>
                          <li>Sabit maliyet (kira artışı yok)</li>
                        </ul>
                      </div>
                      <div className="cons">
                        <strong>❌ Dezavantajlar:</strong>
                        <ul>
                          <li>Yüksek başlangıç sermaye ihtiyacı</li>
                          <li>Likidite bağlanması</li>
                          <li>Esneklik azlığı</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="next-steps">
                  <strong>📌 Önerilen Adımlar:</strong>
                  <ol>
                    <li>5 yıllık maliyet karşılaştırması yapılmalı</li>
                    <li>Şirket büyüme projeksiyonu değerlendirilmeli</li>
                    <li>Finansman alternatifleri araştırılmalı</li>
                    <li>Nihai karar için CFO onayı alınmalı</li>
                  </ol>
                </div>

                <button className="export-btn">📥 Analiz Raporunu İndir</button>
              </div>
            )}
          </div>
        );

      case 'creative':
        return (
          <div className="demo-modal">
            <h2>💡 Yaratıcı Çalışmalar</h2>
            <div className="demo-input-area">
              <input 
                type="text" 
                defaultValue="Teknoloji şirketi için LinkedIn içerik fikirleri"
                className="demo-text-input"
                readOnly
              />
              <button 
                className="demo-action-btn"
                onClick={() => handleProcess('creative')}
                disabled={isProcessing}
              >
                {isProcessing ? 'Üretiliyor...' : 'Fikirler Üret'}
              </button>
            </div>
            {demoState.creative === 'completed' && (
              <div className="demo-result">
                <h4>✨ İçerik Fikirleri</h4>
                <div className="creative-idea">
                  <strong>1. Haftalık Teknoloji İpuçları Serisi</strong>
                  <p>"#TechTuesday: Verimliliği artıran 5 yapay zeka aracı"</p>
                </div>
                <div className="creative-idea">
                  <strong>2. Ekip Başarı Hikayeleri</strong>
                  <p>"Müşterimiz X şirketi ile 40% verimlilik artışı sağladık"</p>
                </div>
                <div className="creative-idea">
                  <strong>3. Sektör Trendleri Analizleri</strong>
                  <p>"2026'da Dijital Dönüşüm: 3 Önemli Trend"</p>
                </div>
              </div>
            )}
          </div>
        );

      case 'data':
        return (
          <div className="demo-modal">
            <h2>📑 Veri Dönüştürme</h2>
            <div className="demo-input-area">
              <div className="conversion-options">
                <div className="option-btn">📄 PDF → Word</div>
                <div className="option-btn">📝 Word → PDF</div>
                <div className="option-btn">🔗 QR Kod Oluştur</div>
                <div className="option-btn active">📸 Tablo Fotoğrafı → Excel</div>
              </div>

              <div className="file-upload-demo">
                <div className="uploaded-image">
                  <div className="image-placeholder">
                    <div className="hand-drawn-table">
                      <div className="table-title">Aylık Satış Raporu ✏️</div>
                      <div className="table-row header">
                        <span>Ürün</span>
                        <span>Adet</span>
                        <span>Fiyat</span>
                        <span>Toplam</span>
                      </div>
                      <div className="table-row">
                        <span>Ürün A</span>
                        <span>10</span>
                        <span>50₺</span>
                        <span>500₺</span>
                      </div>
                      <div className="table-row">
                        <span>Ürün B</span>
                        <span>25</span>
                        <span>30₺</span>
                        <span>750₺</span>
                      </div>
                      <div className="table-row">
                        <span>Ürün C</span>
                        <span>15</span>
                        <span>40₺</span>
                        <span>600₺</span>
                      </div>
                      <div className="table-row total">
                        <span>Toplam</span>
                        <span></span>
                        <span></span>
                        <span>1850₺</span>
                      </div>
                    </div>
                    <p className="image-label">📱 tablo_fotograf.jpg</p>
                  </div>
                </div>

                <div className="conversion-settings">
                  <label className="action-checkbox">
                    <input type="checkbox" defaultChecked />
                    <span>Formülleri otomatik ekle</span>
                  </label>
                  <label className="action-checkbox">
                    <input type="checkbox" defaultChecked />
                    <span>Başlıkları biçimlendir</span>
                  </label>
                  <label className="action-checkbox">
                    <input type="checkbox" />
                    <span>Grafik ekle</span>
                  </label>
                </div>
              </div>

              <button 
                className="demo-action-btn"
                onClick={() => handleProcess('data')}
                disabled={isProcessing}
              >
                {isProcessing ? 'Tanınıyor ve Dönüştürülüyor...' : 'Excel\'e Dönüştür'}
              </button>
            </div>
            {demoState.data === 'completed' && (
              <div className="demo-result">
                <h4>✅ Excel Tablosu Oluşturuldu</h4>
                
                <div className="excel-preview">
                  <div className="excel-toolbar">
                    <span className="excel-icon">📊</span>
                    <span className="excel-filename">aylik_satis_raporu.xlsx</span>
                  </div>
                  <div className="excel-table">
                    <div className="excel-row header">
                      <div className="cell">A</div>
                      <div className="cell">B</div>
                      <div className="cell">C</div>
                      <div className="cell">D</div>
                    </div>
                    <div className="excel-row">
                      <div className="cell header-cell">1</div>
                      <div className="cell"><strong>Ürün</strong></div>
                      <div className="cell"><strong>Adet</strong></div>
                      <div className="cell"><strong>Fiyat</strong></div>
                      <div className="cell"><strong>Toplam</strong></div>
                    </div>
                    <div className="excel-row">
                      <div className="cell header-cell">2</div>
                      <div className="cell">Ürün A</div>
                      <div className="cell">10</div>
                      <div className="cell">50₺</div>
                      <div className="cell formula">500₺</div>
                    </div>
                    <div className="excel-row">
                      <div className="cell header-cell">3</div>
                      <div className="cell">Ürün B</div>
                      <div className="cell">25</div>
                      <div className="cell">30₺</div>
                      <div className="cell formula">750₺</div>
                    </div>
                    <div className="excel-row">
                      <div className="cell header-cell">4</div>
                      <div className="cell">Ürün C</div>
                      <div className="cell">15</div>
                      <div className="cell">40₺</div>
                      <div className="cell formula">600₺</div>
                    </div>
                    <div className="excel-row total-row">
                      <div className="cell header-cell">5</div>
                      <div className="cell"><strong>Toplam</strong></div>
                      <div className="cell formula">=SUM(B2:B4)</div>
                      <div className="cell"></div>
                      <div className="cell formula">=SUM(D2:D4)</div>
                    </div>
                  </div>
                  <div className="formula-info">
                    <span className="formula-badge">📐 Formül</span>
                    <code>D2 = B2 * C2</code>
                    <code>D5 = SUM(D2:D4)</code>
                  </div>
                </div>

                <div className="conversion-stats">
                  <div className="stat">
                    <strong>✓</strong>
                    <span>4 satır veri tanındı</span>
                  </div>
                  <div className="stat">
                    <strong>✓</strong>
                    <span>Formüller eklendi</span>
                  </div>
                  <div className="stat">
                    <strong>✓</strong>
                    <span>Başlıklar biçimlendirildi</span>
                  </div>
                </div>

                <button className="export-btn">📥 Excel Dosyasını İndir (.xlsx)</button>
              </div>
            )}
          </div>
        );

      case 'travel':
        return (
          <div className="demo-modal">
            <h2>✈️ Seyahat Planlama</h2>
            <div className="demo-input-area">
              <div className="travel-inputs-compact">
                <div className="travel-input-group">
                  <label>Nereden</label>
                  <input type="text" defaultValue="İstanbul" readOnly/>
                </div>
                <span className="arrow-icon">→</span>
                <div className="travel-input-group">
                  <label>Nereye</label>
                  <input type="text" defaultValue="Berlin" readOnly/>
                </div>
              </div>
              <div className="travel-dates">
                <div className="date-input-group">
                  <label>Gidiş</label>
                  <input type="date" defaultValue="2026-01-15" readOnly/>
                </div>
                <div className="date-input-group">
                  <label>Dönüş</label>
                  <input type="date" defaultValue="2026-01-18" readOnly/>
                </div>
              </div>
              <button 
                className="demo-action-btn"
                onClick={() => handleProcess('travel')}
                disabled={isProcessing}
              >
                {isProcessing ? 'Planlanıyor...' : 'Seyahat Planla'}
              </button>
            </div>
            {demoState.travel === 'completed' && (
              <div className="demo-result">
                <h4>🎫 Seyahat Planınız</h4>
                <div className="travel-plan-compact">
                  <div className="plan-item">
                    <span className="plan-icon">✈️</span>
                    <div className="plan-details">
                      <strong>Uçuş</strong>
                      <p>THY TK1234 - 15 Ocak 10:30 → 13:45</p>
                    </div>
                  </div>
                  <div className="plan-item">
                    <span className="plan-icon">🏨</span>
                    <div className="plan-details">
                      <strong>Konaklama</strong>
                      <p>Hilton Berlin - 3 gece (€450)</p>
                    </div>
                  </div>
                  <div className="plan-item">
                    <span className="plan-icon">📍</span>
                    <div className="plan-details">
                      <strong>Toplantı Yeri</strong>
                      <p>WeWork Potsdamer Platz</p>
                    </div>
                  </div>
                  <div className="plan-item">
                    <span className="plan-icon">🌤️</span>
                    <div className="plan-details">
                      <strong>Hava Durumu</strong>
                      <p>2-5°C, Parçalı bulutlu</p>
                    </div>
                  </div>
                </div>
                <button className="export-btn">📥 Seyahat Planını İndir</button>
              </div>
            )}
          </div>
        );

      case 'calendar':
        return (
          <div className="demo-modal">
            <h2>📅 Akıllı Ajanda</h2>
            <div className="demo-input-area">
              <input 
                type="text" 
                defaultValue="Gelecek hafta ekiple proje değerlendirme toplantısı"
                className="demo-text-input"
                readOnly
              />
              <button 
                className="demo-action-btn"
                onClick={() => handleProcess('calendar')}
                disabled={isProcessing}
              >
                {isProcessing ? 'Ekleniyor...' : 'Ajandaya Ekle'}
              </button>
            </div>
            {demoState.calendar === 'completed' && (
              <div className="demo-result">
                <h4>✅ Etkinlik Oluşturuldu</h4>
                <div className="calendar-event">
                  <p><strong>📅 Tarih:</strong> 13 Ocak 2026, Pazartesi</p>
                  <p><strong>🕐 Saat:</strong> 14:00 - 15:00</p>
                  <p><strong>👥 Katılımcılar:</strong> Ekip üyeleri (5 kişi)</p>
                  <p><strong>📍 Konum:</strong> Toplantı Odası A</p>
                  <p><strong>⏰ Hatırlatma:</strong> 30 dakika önce</p>
                </div>
                <button className="export-btn">📧 Davetiye Gönder</button>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="experience">
      <section className="hero">
        <div className="hero-overlay">
          <h1>Merhaba.</h1>
          <h2>Dijital sağ kolunuz.</h2>
          <p className="hero-micro">Profesyonellik. Standart.</p>
        </div>

        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/intro.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="demo-explanation">
        <h3>
          <img src="/assets/info-icon.svg" alt="Info" className="info-icon" />
          Bu Bir Demo Uygulamasıdır
        </h3>
        <p>
          <strong>Önemli Not:</strong> Bu sayfa, Timpro AI asistanımızın yeteneklerini göstermek için hazırlanmış bir <strong>demo/örnek uygulamadır</strong>. 
          Gerçek ürün çok daha kapsamlıdır ve profesyonel kullanım için tasarlanmıştır.
        </p>
      </section>

      <section className="cv-section">
        <div className="cv-card">
          <p className="scroll-hint">
            Aşağıda nasıl çalıştığını görün ↓
          </p>

          <div className="cv-top-line"></div>
          <h3>Timpro AI Asistan</h3>
          <p>
            Kurumsal yazışmalar, planlama ve karar süreçleri için
            masaüstü dijital asistan.
          </p>
        </div>
      </section>

      <section className="mail-demo">
        <img src="/timpro-logo.png" alt="Timpro AI" className="section-logo" />
        <h3 className="section-title">
          Kurumsal Dilin Kusursuz Gücü
        </h3>
        
        <div className={`mail-window ${isEdited ? "edited" : ""}`}>
          <div className="mail-topbar">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="mail-title">Yeni E-posta</span>
          </div>

          <div className="mail-content">
            <div className="mail-to">Kime: ekip@timpro.com.tr</div>
            <div className="mail-subject">Konu: Toplantı Hakkında</div>
            
            <div className="mail-body-text">
              {!isEdited ? (
                <>
                  Merhaba,<br /><br />
                  Geçen hafta konuştuğumuz konu hakkında dönüş yapamadım çünkü 
                  yoğunluktan dolayı gecikme yaşadım. Bu süreçte bazı detayları 
                  toparlamaya çalıştım ancak henüz netleşmeyen noktalar var. 
                  Toplantı için bir şeyler konuşmamız lazım, ne zaman müsait 
                  olursunuz haber verin.<br /><br />
                  İyi çalışmalar.
                </>
              ) : (
                <>
                  Sayın Ekip,<br /><br />
                  Geçtiğimiz haftaki görüşmemizde ele aldığımız konuya ilişkin geri 
                  dönüşümde gecikme yaşadığım için özür dilerim. Söz konusu süreçte 
                  detayları toparlama aşamasındayım, ancak netleştirmemiz gereken 
                  bazı hususlar bulunmaktadır.<br /><br />
                  Bu kapsamda gündem maddelerimizi görüşmek üzere kısa bir toplantı 
                  planlamak istiyorum. Uygun olduğunuz tarih ve saatleri paylaşabilir 
                  misiniz?<br /><br />
                  Saygılarımla.
                </>
              )}
            </div>
          </div>

          {!isEdited && !isEditing && (
            <button
              className="edit-btn"
              onClick={() => {
                setIsEditing(true);
                setTimeout(() => {
                  setIsEdited(true);
                  setIsEditing(false);
                }, 2000);
              }}
            >
              Maili Düzelt
            </button>
          )}

          {isEditing && (
            <div className="mail-overlay">
              Kurumsal ton optimize ediliyor…
            </div>
          )}
        </div>
      </section>

      <section className="features-intro">
        <h2 className="features-title">Daha Fazla Yetenek</h2>
        <p className="features-subtitle">Her gününüzü kolaylaştıran 8 farklı kategori</p>
      </section>

      <section className="features-grid">
        <div 
          className="feature-card"
          onClick={() => setActiveDemo('research')}
        >
          <div className="feature-icon">🔍</div>
          <h3>Bilgi ve Araştırma</h3>
          <p className="feature-desc">Konular hakkında hızlı özet ve analiz</p>
        </div>

        <div 
          className="feature-card"
          onClick={() => setActiveDemo('report')}
        >
          <div className="feature-icon">📊</div>
          <h3>Rapor Hazırlama</h3>
          <p className="feature-desc">Profesyonel kurumsal raporlar ve dokümantasyon</p>
        </div>

        <div 
          className="feature-card"
          onClick={() => setActiveDemo('meeting')}
        >
          <div className="feature-icon">🤝</div>
          <h3>Toplantı ve Karar Desteği</h3>
          <p className="feature-desc">Toplantı notlarını aksiyon planına dönüştür</p>
        </div>

        <div 
          className="feature-card"
          onClick={() => setActiveDemo('creative')}
        >
          <div className="feature-icon">💡</div>
          <h3>Yaratıcı Çalışmalar</h3>
          <p className="feature-desc">Kampanya, slogan ve içerik fikirleri</p>
        </div>

        <div 
          className="feature-card"
          onClick={() => setActiveDemo('data')}
        >
          <div className="feature-icon">📑</div>
          <h3>Veri Dönüştürme</h3>
          <p className="feature-desc">Tablo fotoğrafı, PDF, Word dönüşümleri ve QR kod</p>
        </div>

        <div 
          className="feature-card"
          onClick={() => setActiveDemo('travel')}
        >
          <div className="feature-icon">✈️</div>
          <h3>Seyahat Planlama</h3>
          <p className="feature-desc">İş seyahatlerini kolayca organize et</p>
        </div>

        <div 
          className="feature-card"
          onClick={() => setActiveDemo('calendar')}
        >
          <div className="feature-icon">📅</div>
          <h3>Akıllı Ajanda</h3>
          <p className="feature-desc">Takvim yönetimi ve hatırlatıcılar</p>
        </div>
      </section>

      {activeDemo && (
        <div className="modal-overlay" onClick={() => setActiveDemo(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveDemo(null)}>✕</button>
            {renderDemoContent()}
          </div>
        </div>
      )}

      <section className="cta-section">
        <h2>Kendi Asistanınızla Çalışmaya Başlayın</h2>
        <p>Dijital sağ kolunuz sizinle çalışmaya hazır</p>
        <div className="cta-buttons">
          <a href="mailto:bilgi@turevbilgisistemleri.com.tr?subject=Timpro AI Asistan Hakkında Bilgi Talebi" className="cta-button">
            📧 Hemen İletişime Geçin
          </a>
          <a href="/timpro-katalog.pdf" target="_blank" rel="noopener noreferrer" className="cta-button cta-button-secondary">
            📄 PDF Katalog İndir
          </a>
        </div>
      </section>

      {isPromoVisible && (
        <div className="promo-popup-overlay" onClick={() => setIsPromoVisible(false)}>
          <div className="promo-popup" onClick={(e) => e.stopPropagation()}>
            <button className="promo-close" onClick={() => setIsPromoVisible(false)}>×</button>
            <div className="promo-icon">🎉</div>
            <h2>Seminere Özel Fırsat!</h2>
            <div className="promo-discount">%20 İndirim</div>
            <div className="promo-price">
              <span className="old-price">❌ $625</span>
              <span className="arrow">→</span>
              <span className="new-price">✓ $500</span>
            </div>
            <p>Timpro AI Asistan'ı hemen edinin</p>
            
            <div className="promo-code-section">
              <label>İndirim Kupon Kodu:</label>
              <div className="promo-code-box">
                <span className="promo-code-text">{promoCode}</span>
                <button className="copy-code-btn" onClick={handleCopyCode}>
                  {isCopied ? '✓ Kopyalandı' : '📋 Kopyala'}
                </button>
              </div>
            </div>

            <a href="mailto:bilgi@turevbilgisistemleri.com.tr?subject=Etkinlik İndirimi Hakkında Bilgi" className="promo-cta">
              Hemen İletişime Geçin
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExperiencePage;
