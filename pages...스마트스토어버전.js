/* ============================================
   Page Content Templates for BioduHo Website
   B2B 프리미엄 딸기 생산·유통 플랫폼
   ============================================ */

function brandIcon(name) {
    const icons = {
        award: '<circle cx="12" cy="8" r="4.2"></circle><path d="M9.5 11.4 8.3 19l3.7-2.2 3.7 2.2-1.2-7.6"></path>',
        truck: '<path d="M3.5 7.5h10.2v7.2H3.5z"></path><path d="M13.7 10h3.4l3.4 3.2v1.5h-6.8z"></path><circle cx="7" cy="17" r="1.7"></circle><circle cx="17.3" cy="17" r="1.7"></circle>',
        sprout: '<path d="M12 19V9"></path><path d="M12 10c-3.8-.2-6.1-2-6.8-5.3 3.4.2 5.8 1.9 6.8 5.3z"></path><path d="M12 13c3.6-.2 5.7-1.8 6.4-4.8-3.2.1-5.4 1.7-6.4 4.8z"></path>',
        quality: '<path d="M12 3.5 15 6l3.8.2.3 3.8 2.4 3-2.4 3-.3 3.8-3.8.2-3 2.5-3-2.5-3.8-.2-.3-3.8-2.4-3 2.4-3 .3-3.8L9 6z"></path><path d="m8.8 12.4 2.1 2.1 4.6-5"></path>',
        research: '<path d="M9.5 5.2h5"></path><path d="M12 5.2v5.6l4.2 6.8a2 2 0 0 1-1.7 3H9.5a2 2 0 0 1-1.7-3l4.2-6.8z"></path><path d="M9.6 15.6h4.8"></path>',
        partner: '<circle cx="7.6" cy="7.6" r="2.1"></circle><path d="M4.1 18.5c.5-3.1 1.8-4.9 3.5-4.9s3 1.8 3.5 4.9"></path><circle cx="16.4" cy="7.6" r="2.1"></circle><path d="M12.9 18.5c.5-3.1 1.8-4.9 3.5-4.9s3 1.8 3.5 4.9"></path>',
        leaf: '<path d="M5.2 18.8c6.7.2 11.6-4 13.6-13.6C9.2 7.2 5 12.1 5.2 18.8z"></path><path d="M5.2 18.8 14 10"></path>',
        file: '<path d="M7 3.8h7l3 3v13.4H7z"></path><path d="M14 3.8v3h3"></path><path d="M9.5 11h5"></path><path d="M9.5 15h5"></path>',
        shield: '<path d="M12 3.5 18.5 6v5.2c0 4.2-2.6 7.8-6.5 9.3-3.9-1.5-6.5-5.1-6.5-9.3V6z"></path><path d="m8.8 12.1 2.1 2.1 4.4-4.6"></path>',
        academy: '<path d="M3.5 8.2 12 4.5l8.5 3.7-8.5 3.7z"></path><path d="M7 10v4.4c2.8 2 7.2 2 10 0V10"></path><path d="M20.5 8.2v6"></path>',
        inspect: '<circle cx="10.6" cy="10.6" r="4.6"></circle><path d="m14 14 5.2 5.2"></path><path d="m8.8 10.8 1.2 1.2 2.6-3"></path>',
        package: '<path d="m4.5 7.4 7.5-3.2 7.5 3.2v9.2L12 19.8l-7.5-3.2z"></path><path d="M4.5 7.4 12 10.6l7.5-3.2"></path><path d="M12 10.6v9.2"></path>',
        bakery: '<path d="M7.5 19h9"></path><path d="M8 15.5h8l1-5.5H7z"></path><path d="M8.8 10a3.2 3.2 0 0 1 6.4 0"></path><path d="M10 7.8V5.5"></path><path d="M14 7.8V5.5"></path>',
        store: '<path d="M5 9.5h14l-1-4.2H6z"></path><path d="M6.2 9.5v9.2h11.6V9.5"></path><path d="M9 18.7v-5.2h6v5.2"></path>',
        hotel: '<path d="M5.5 19V5.5h8v13.5"></path><path d="M13.5 10h5v9"></path><path d="M8 8h1.2"></path><path d="M8 11h1.2"></path><path d="M8 14h1.2"></path><path d="M16 13h.9"></path><path d="M16 16h.9"></path>',
        phone: '<path d="M8.2 4.5 6 6.8c.4 5.1 4.1 8.8 9.2 9.2l2.3-2.2-3.1-2.9-1.7 1.2c-1.6-.8-2.9-2.1-3.7-3.7l1.2-1.7z"></path>',
        mail: '<path d="M4.5 6.5h15v11h-15z"></path><path d="m5 7 7 5.5L19 7"></path>',
        location: '<path d="M12 20s6-5.2 6-10.2a6 6 0 1 0-12 0C6 14.8 12 20 12 20z"></path><circle cx="12" cy="9.8" r="2"></circle>',
        clock: '<circle cx="12" cy="12" r="7.5"></circle><path d="M12 7.8v4.6l3 1.8"></path>'
    };
    return `<svg class="brand-icon brand-icon-${name}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${icons[name]}</svg>`;
}

// ==========================================
// HOME PAGE
// ==========================================
function homePage() {
    return `
    <!-- Hero Section -->
    <section class="hero" id="hero">
        <video class="hero-video-bg" autoplay loop muted playsinline>
            <source src="images/프리미엄_딸기_히어로_영상_제작.mp4" type="video/mp4">
        </video>
        <div class="hero-overlay"></div>
        <div class="hero-container-center">
            
            
            <h1 class="hero-title-center">
                최상의 재료가<br>
                <span class="highlight-coral"><br class="br-mobile">최고의 걸작</span>을 낳습니다
            </h1>
            
            <p class="hero-description-center">
                (농)바이오두호는 설향·금실·죽향 프리미엄 딸기 생산·유통과 우수 품종 육묘 사업을 영위하며, B2B 파트너와 농가에 최적의 가치를 제공합니다.
            </p>
            
            <div class="hero-actions-center">
                <a href="#/products" class="btn btn-primary-coral">
                    <span>제품 알아보기 &rarr;</span>
                </a>
                <a href="#/contact" class="btn btn-outline-glass">
                    납품 문의하기
                </a>
            </div>
            
            <div class="hero-trust-row">
                <div class="trust-badge-glass">
                    <span class="trust-icon">${brandIcon('award')}</span> 10년+ 재배 노하우
                </div>
                <div class="trust-badge-glass">
                    <span class="trust-icon">${brandIcon('truck')}</span> 콜드체인 당일 배송
                </div>
                <div class="trust-badge-glass">
                    <span class="trust-icon">${brandIcon('sprout')}</span> 무농약 스마트팜
                </div>
            </div>
            
        </div>
        <div class="hero-scroll-indicator">
            <div class="scroll-mouse-glass">
                <div class="scroll-wheel-glass"></div>
            </div>
        </div>
    </section>

    <!-- Partner Proof -->
    <section class="home-partners-section">
        <div class="home-partners-container">
            <div class="home-partners-copy animate-on-scroll">
                <div class="section-label">TRUSTED BY</div>
                <h2 class="section-title">까다로운 브랜드가 선택한 바이오두호</h2>
                <p class="section-subtitle">
                    프리미엄 베이커리와 호텔, 백화점까지. 가장 까다로운 무대에서 이미 검증을 마친 바이오두호의 철저한 품질 관리, 이제 당신의 비즈니스에도 그 확실한 차이를 증명하겠습니다.
                </p>
                <a href="#/partners" class="home-partners-link">파트너 사례 보기 <span>&rarr;</span></a>
            </div>

            <div class="home-partner-logos animate-on-scroll animate-delay-1" aria-label="주요 파트너">
                <a href="#/partners" class="home-partner-logo-card">
                    <img src="images/뚜쥬루 로고 2_final_preTransparent.png" alt="뚜쥬루 빵돌가마마을" loading="lazy" decoding="async">
                    <span>베이커리</span>
                </a>
                <a href="#/partners" class="home-partner-logo-card">
                    <img src="images/인터컨티넨탈 호텔2_final_preTransparent.png" alt="서울 인터컨티넨탈 호텔" loading="lazy" decoding="async">
                    <span>호텔</span>
                </a>
                <a href="#/partners" class="home-partner-logo-card">
                    <img src="images/현대 백화점 2_final_preTransparent.png" alt="현대백화점" loading="lazy" decoding="async">
                    <span>백화점</span>
                </a>
            </div>
        </div>
    </section>

    `;
}

// ==========================================
// ABOUT PAGE
// ==========================================
function aboutPage() {
    return `
    <!-- Page Hero -->
    <section class="page-hero">
        <div class="container">
            <div class="section-label animate-on-scroll">ABOUT US</div>
            <h1 class="section-title animate-on-scroll animate-delay-1">프리미엄 딸기의<br class="br-mobile"> 기준을<br class="br-desktop"> 새롭게 정의합니다</h1>
            <p class="section-subtitle animate-on-scroll animate-delay-2">
                (농)바이오두호는 10년 이상의 재배 노하우로 대한민국 최고 품질의 딸기를 생산·유통하고, 우량 모종 육묘를 통해 농가의 안정적인 생산을 지원하는 전문기업입니다.
            </p>
        </div>
    </section>

    <!-- Company Story + History Timeline -->
    <section class="story-timeline-section">
        <div class="story-timeline-grid">
            <div class="story-timeline-left">
                <div class="section-label animate-on-scroll">OUR STORY</div>

                <div class="story-paragraphs">
                    <p class="animate-on-scroll animate-delay-1">
                        <strong style="font-size: 1.4rem;">"최고의 딸기를 만들자"</strong><br><br class="br-mobile">
                        단순하지만 확고한 신념, <br><br class="br-mobile">그것이 바이오두호의 시작이었습니다.
                    </p>
                    <p class="animate-on-scroll animate-delay-2">
                        <strong>바이오 두호는 타협하지 않습니다.</strong> 온 정성을 기울여 길러낸 바이오두호의 최상급 딸기는 호텔과 백화점, 고급 베이커리의 까다로운 기준을 통과해 꾸준한 선택을 받고 있습니다.
                    </p>
                    <p class="animate-on-scroll animate-delay-3">
                        품종별 맞춤 규격, 안정적인 정기 납품, 콜드체인 당일 배송까지,<br>
                        B2B 파트너 여러분의 비즈니스 성공을 함께 만들어가는<br>
                        <strong>믿을 수 있는 파트너</strong>가 되겠습니다.
                    </p>
                    <p class="animate-on-scroll animate-delay-4">
                        나아가, 이 모든 품질의 바탕이 되는 <strong>'육묘 사업'</strong>에도 정성을 다하고 있습니다.
                        병충해 걱정 없는 튼튼한 모종을 농가에 공급하여<br>
                        좋은 딸기가 생산되는 첫 출발점부터 든든하게 지원합니다.
                    </p>
                </div>

                <!-- 은은한 리더십 블록 추가 -->
                <div class="leadership-expertise animate-on-scroll animate-delay-5">
                    <div class="expertise-header">
                        <span class="expertise-line"></span>
                        <h4>Leadership & Expertise</h4>
                    </div>
                    <ul class="expertise-list">
                        <li>
                            <strong>박민석 CEO</strong>
                            <span>Rochester Inst. of Technology (Bio Tech) · 한국에너지공과대 Ph.D 강사</span>
                        </li>
                        <li>
                            <strong>박두호 COO</strong>
                            <span>Colorado State Univ. (농업경제학 Ph.D) · 딸기 육묘 11년 경력</span>
                        </li>
                        <li>
                            <strong>최문환 CTO</strong>
                            <span>대구대 (원예학 Ph.D) · 딸기 재배 및 컨설팅 20년 노하우</span>
                        </li>
                        <li class="expertise-advisors">
                            <strong>External Advisors</strong>
                            <span>정후민 (스마트팜 시스템) · 이운형 CMO (마케팅 PR)</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="story-timeline-right">
                <div class="about-history animate-on-scroll">
                    <div class="history-header">
                        <h3 class="history-title">프리미엄을 향한 여정</h3>
                    </div>
                    <div class="history-timeline">
                        <div class="history-item">
                            <div class="history-year">2015</div>
                            <div class="history-dot"></div>
                            <div class="history-content">
                                <h4>(농)바이오두호 창립</h4>
                                <p>천안시에서 설향 재배를 시작으로 사업 개시</p>
                            </div>
                        </div>
                        <div class="history-item">
                            <div class="history-year">2018</div>
                            <div class="history-dot"></div>
                            <div class="history-content">
                                <h4>스마트팜 기술 도입</h4>
                                <p>환경 제어 시스템 설치, 금실 품종 재배 개시</p>
                            </div>
                        </div>
                        <div class="history-item">
                            <div class="history-year">2020</div>
                            <div class="history-dot"></div>
                            <div class="history-content">
                                <h4>육묘 사업부 설립</h4>
                                <p>우수 품종 모종 생산·공급으로 농가 지원 시작</p>
                            </div>
                        </div>
                        <div class="history-item">
                            <div class="history-year">2022</div>
                            <div class="history-dot"></div>
                            <div class="history-content">
                                <h4>B2B 납품 본격화</h4>
                                <p>백화점·호텔 계약 체결, 콜드체인 시스템 구축</p>
                            </div>
                        </div>
                        <div class="history-item">
                            <div class="history-year">2024</div>
                            <div class="history-dot"></div>
                            <div class="history-content">
                                <h4>스마트팜 2호 단지 완공</h4>
                                <p>생산 규모 확대 및 죽향 품종 재배 개시</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 핵심 가치 & 강점 (통합) -->
    <section class="core-philosophy-section">
        <div class="container">
            <div class="core-philosophy-header">
                <div class="section-label animate-on-scroll">OUR PHILOSOPHY</div>
                <h2 class="section-title animate-on-scroll animate-delay-1">완벽한 한 알에 담긴<br class="br-desktop"><br class="br-mobile"> 바이오두호의 네 가지 약속</h2>
                <p class="section-subtitle animate-on-scroll animate-delay-2">
                    타협하지 않는 가치와 차별화된 기술력으로<br class="br-mobile"> 프리미엄 딸기와 우량 모종을 공급합니다.
                </p>
            </div>
            <div class="core-philosophy-grid">
                <div class="philosophy-card animate-on-scroll">
                    <div class="philosophy-card-icon"><span class="emoji-icon">${brandIcon('quality')}</span></div>
                    <h3>품질 최우선</h3>
                    <p class="philosophy-card-lead">엄격한 품질 기준을 적용하여 최상급 딸기만을 선별합니다.</p>
                    <ul class="philosophy-card-points">
                        <li>수확,선별,포장 전 과정 완벽한 품질 관리</li>
                        <li>콜드체인 당일 배송으로 최상의 신선도 유지</li>
                    </ul>
                </div>
                <div class="philosophy-card animate-on-scroll animate-delay-1">
                    <div class="philosophy-card-icon"><span class="emoji-icon">${brandIcon('research')}</span></div>
                    <h3>기술 혁신</h3>
                    <p class="philosophy-card-lead">스마트팜 기술에 지속 투자하여 재배 환경을 최적화합니다.</p>
                    <ul class="philosophy-card-points">
                        <li>빅데이터·생육 알고리즘 기반 24시간 환경제어</li>
                        <li>고순도 우량 육묘 시스템으로 균일한 품질 확보</li>
                    </ul>
                </div>
                <div class="philosophy-card animate-on-scroll animate-delay-2">
                    <div class="philosophy-card-icon"><span class="emoji-icon">${brandIcon('partner')}</span></div>
                    <h3>파트너 상생</h3>
                    <p class="philosophy-card-lead">고객과의 긴밀한 소통으로 맞춤형 솔루션을 제공합니다.</p>
                    <ul class="philosophy-card-points">
                        <li>베이커리·백화점·호텔 VIP 1:1맞춤 B2B 납품 시스템</li>
                        <li>병해충에 강한 우량 모종으로 농가 비즈니스 지원</li>
                    </ul>
                </div>
                <div class="philosophy-card animate-on-scroll animate-delay-3">
                    <div class="philosophy-card-icon"><span class="emoji-icon">${brandIcon('leaf')}</span></div>
                    <h3>친환경 경영</h3>
                    <p class="philosophy-card-lead">천연 무농약 농법으로 환경과 소비자의 건강을 생각합니다.</p>
                    <ul class="philosophy-card-points">
                        <li>무농약 스마트팜으로 건강한 먹거리 생산</li>
                        <li>지속가능한 농업으로 환경 가치 실현</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Business Areas -->
    <section class="business-areas">
        <div class="business-areas-header">
            <div class="section-label animate-on-scroll">사업 영역</div>
            <h2 class="section-title animate-on-scroll animate-delay-1">바이오두호의 2대 핵심 사업</h2>
            <p class="section-subtitle animate-on-scroll animate-delay-2">
                프리미엄 딸기 생산·유통과 육묘 사업을 <br class="br-mobile">양대 축으로 딸기 산업의 가치 사슬을 이끕니다.
            </p>
        </div>
        <div class="business-areas-grid">
            <div class="business-area-card animate-on-scroll">
                <div class="biz-card-accent"></div>
                <div class="biz-card-header">
                    <span class="biz-card-number">01</span>
                    <span class="business-area-tag">프리미엄 딸기</span>
                </div>
                <h3>딸기 생산·유통</h3>
                <p class="biz-card-desc">설향·금실·죽향 세 가지 품종을 스마트팜 기술로 재배하여, 베이커리·백화점·호텔 등 B2B 파트너에게 콜드체인 당일 배송으로 안정적으로 공급합니다.</p>
                <div class="biz-card-stats">
                    <div class="biz-stat">
                        <span class="biz-stat-value">3</span>
                        <span class="biz-stat-label">프리미엄 품종</span>
                    </div>
                    <div class="biz-stat">
                        <span class="biz-stat-value">2h</span>
                        <span class="biz-stat-label">수확→배송</span>
                    </div>
                    <div class="biz-stat">
                        <span class="biz-stat-value">365</span>
                        <span class="biz-stat-label">일 품질관리</span>
                    </div>
                </div>
                <div class="biz-card-features">
                    <div class="biz-feature-item">
                        <span class="biz-feature-dot"></span>
                        <span>설향 · 금실 · 죽향 프리미엄 3품종 재배</span>
                    </div>
                    <div class="biz-feature-item">
                        <span class="biz-feature-dot"></span>
                        <span>B2B 맞춤 규격 · 정기 납품 시스템</span>
                    </div>
                    <div class="biz-feature-item">
                        <span class="biz-feature-dot"></span>
                        <span>콜드체인 당일 배송으로 최상의 신선도</span>
                    </div>
                </div>
            </div>
            <div class="business-area-card card-green animate-on-scroll animate-delay-1">
                <div class="biz-card-accent accent-green"></div>
                <div class="biz-card-header">
                    <span class="biz-card-number">02</span>
                    <span class="business-area-tag tag-green">육묘 사업</span>
                </div>
                <h3>딸기 모종 생산·공급</h3>
                <p class="biz-card-desc">우수 품종의 건강하고 튼실한 딸기 모종을 생산하여 농가에 공급합니다. 병해충 없는 건강한 묘로 농가의 안정적인 딸기 생산을 지원하고, 향후 인공동굴 식물공장을 통해 연중 안정 공급 체계를 구축할 계획입니다.</p>
                <div class="biz-card-stats">
                    <div class="biz-stat">
                        <span class="biz-stat-value">11+</span>
                        <span class="biz-stat-label">년 육묘 경력</span>
                    </div>
                    <div class="biz-stat">
                        <span class="biz-stat-value">특허</span>
                        <span class="biz-stat-label">무병묘 기술</span>
                    </div>
                    <div class="biz-stat">
                        <span class="biz-stat-value">연중</span>
                        <span class="biz-stat-label">안정 공급 목표</span>
                    </div>
                </div>
                <div class="biz-card-features">
                    <div class="biz-feature-item">
                        <span class="biz-feature-dot dot-green"></span>
                        <span>우수 품종 무병 모종 생산·공급</span>
                    </div>
                    <div class="biz-feature-item">
                        <span class="biz-feature-dot dot-green"></span>
                        <span>농가 활착률 극대화 · 안정 생산 지원</span>
                    </div>
                    <div class="biz-feature-item">
                        <span class="biz-feature-dot dot-green"></span>
                        <span>인공동굴 식물공장 연중 공급 체계 구축</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Cave Vision Section -->
    <section class="cave-vision-section">
        <div class="cave-vision-hero">
            <div class="cave-vision-image">
                <img src="images/인공동굴.jpg" alt="세종시 인공동굴 육묘 공간" loading="lazy">
                <div class="cave-vision-overlay"></div>
            </div>
            <div class="cave-vision-hero-content">
                <div class="section-label cave-vision-label animate-on-scroll">Our Vision</div>
                <h2 class="cave-vision-title animate-on-scroll animate-delay-1">
                    기후의 한계를 지운 공간,<br class="br-desktop"><br class="br-mobile"> 육묘의 미래를 설계하다
                </h2>
                <p class="cave-vision-lead animate-on-scroll animate-delay-2">
                    바이오두호는 세종시에 인공동굴을 조성하고,<br class="br-desktop"> 이 공간 고유의 항온·항습 인프라를 극대화한<br class="br-mobile"> 혁신적인 딸기 육묘 식물공장을 준비하고 있습니다.
                </p>
                <div class="cave-vision-location animate-on-scroll animate-delay-3">
                    <span class="cave-location-dot"></span>
                    <span>세종특별자치시 · 인공동굴 육묘 식물공장 (준비 중)</span>
                </div>
            </div>
        </div>

        <div class="cave-vision-features-wrap">
            <div class="cave-vision-features animate-on-scroll">
                <div class="cave-feature-card">
                    <div class="cave-feature-num">01</div>
                    <h4>자연 항온·항습 환경</h4>
                    <p>동굴 내부의 연중 일정한 온도·습도로 하절기 고온 문제를 해결하여 연중 안정적인 육묘가 가능합니다.</p>
                </div>
                <div class="cave-feature-card">
                    <div class="cave-feature-num">02</div>
                    <h4>우수한 묘 품질</h4>
                    <p>최적화된 환경에서 기존 노지 육묘 대비 병해충에 강하고 활착률이 높은 건강한 모종을 생산합니다.</p>
                </div>
                <div class="cave-feature-card">
                    <div class="cave-feature-num">03</div>
                    <h4>스마트팜 융합</h4>
                    <p>IoT 센서와 AI 기술을 접목한 식물공장으로 대량 생산 체계를 구축합니다.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Patents -->
    <section class="patents-section">
        <div class="container">
            <div class="section-label animate-on-scroll">PATENTS</div>
            <h2 class="section-title animate-on-scroll animate-delay-1">바이오두호의 기술 특허</h2>
            <p class="section-subtitle animate-on-scroll animate-delay-2">
                독자적인 연구개발을 통해 취득한<br class="br-mobile"> 특허 기술로 품질과 생산성을 동시에 실현합니다.
            </p>
            <div class="patent-showcase animate-on-scroll animate-delay-3">
                <div class="patent-showcase-image">
                    <div class="patent-image-frame">
                        <img src="images/patent.png" alt="무병 딸기묘 재배 및 저온 처리 방법 특허증" loading="lazy"
                             onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
                        <div class="patent-image-fallback">
                            <span class="patent-fallback-icon">${brandIcon('file')}</span>
                            <p>특허증 이미지</p>
                            <small>images/patent.png</small>
                        </div>
                    </div>
                    <div class="patent-image-caption">
                        <span class="patent-caption-label">Certificate of Patent</span>
                    </div>
                </div>

                <div class="patent-showcase-info">
                    <span class="patent-badge">특허 등록 · 2025.12.04</span>
                    <h3 class="patent-showcase-title">무병 딸기묘 재배 및 저온 처리 방법</h3>
                    <p class="patent-showcase-desc">
                        식물공장 환경에서 무병 딸기묘를 안정적으로 생산하고 저온 처리하는<br class="br-desktop">
                        바이오두호의 핵심 기술.<br class="br-mobile"> 20년간 독점적 권리를 보유하고 있습니다.
                    </p>

                    <ul class="patent-highlight-list">
                        <li class="patent-highlight-item">
                            <div class="patent-highlight-icon">${brandIcon('shield')}</div>
                            <div class="patent-highlight-text">
                                <strong>배타적 권리 · 20년</strong>
                                <span>식물공장에서 딸기 육묘에 대한 배타적 권리 보유</span>
                            </div>
                        </li>
                        
                        <li class="patent-highlight-item">
                            <div class="patent-highlight-icon">${brandIcon('sprout')}</div>
                            <div class="patent-highlight-text">
                                <strong>10년의 재배 경험</strong>
                                <span>유기농 재배 및 식물공장 육묘 노하우 축적</span>
                            </div>
                        </li>
                        <li class="patent-highlight-item">
                            <div class="patent-highlight-icon">${brandIcon('academy')}</div>
                            <div class="patent-highlight-text">
                                <strong>전북대학교 공동 연구</strong>
                                <span>2019~2020년 협력으로 무병 딸기묘 생산 성공</span>
                            </div>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
        <div class="cta-content">
            <h2 class="section-title animate-on-scroll">
                귀사의 브랜드에 품격을 더하는<br class="br-mobile"> 가장 완벽한 선택
            </h2>
            <p class="section-subtitle animate-on-scroll animate-delay-1">
                프리미엄 딸기 납품에 대해<br class="br-mobile"> 더 알고 싶으시다면 언제든지 문의해 주세요.
            </p>
            <a href="#/contact" class="btn btn-primary animate-on-scroll animate-delay-2">문의하기 →</a>
        </div>
    </section>
    `;
}

// ==========================================
// PRODUCTS PAGE
// ==========================================
function productsPage() {
    return `
    <!-- Page Hero -->
    <section class="page-hero">
        <div class="container">
            <div class="section-label animate-on-scroll">PREMIUM GIFT</div>
            <h1 class="section-title animate-on-scroll animate-delay-1">프리미엄 딸기 라인업</h1>
            <p> (농)바이오두호는 10년 이상의 재배 노하우로 대한민국 최고 품질의 딸기를 생산·유통하고<br> 
             우량 모종 육묘를 통해 농가의 안정적인 생산을 지원하는 전문기업입니다.
             </p>
        </div>
    </section>

    <!-- 프리미엄 선물용 딸기 주문 (B2C) 5단계 스크롤 흐름 -->
    <section class="order-section">
        <div class="order-container">

           
           
            <!-- STAGE 3: Product — 품종 소개 -->
            <div class="order-products">
                <div class="order-products-label animate-on-scroll">Our Varieties</div>
                <h3 class="order-products-title animate-on-scroll animate-delay-1">
                    세 가지 프리미엄 품종,<br>
                    각각의 매력
                </h3>
                <div class="order-variety-grid">
                    <div class="order-variety-card animate-on-scroll">
                        <img class="order-variety-img" src="images/설향.jpg" alt="설향 딸기" loading="lazy">
                        <div class="order-variety-name">설향</div>
                        <div class="order-variety-eng">Seolhyang</div>
                        <p class="order-variety-desc">
                            풍부한 과즙과 부드러운 산미의 조화.<br>
                            한국인이 가장 사랑하는 클래식한 맛.
                        </p>
                        <div class="order-variety-specs">
                            <div class="order-variety-spec">
                                <div class="order-variety-spec-value">12~14°</div>
                                <div class="order-variety-spec-label">당도</div>
                            </div>
                            <div class="order-variety-spec">
                                <div class="order-variety-spec-value">풍부</div>
                                <div class="order-variety-spec-label">과즙</div>
                            </div>
                            <div class="order-variety-spec">
                                <div class="order-variety-spec-value">부드러움</div>
                                <div class="order-variety-spec-label">식감</div>
                            </div>
                        </div>
                    </div>
                    <div class="order-variety-card animate-on-scroll animate-delay-1">
                        <img class="order-variety-img" src="images/금실.jpg" alt="금실 딸기" loading="lazy">
                        <div class="order-variety-name">금실</div>
                        <div class="order-variety-eng">Geumsil</div>
                        <p class="order-variety-desc">
                            높은 당도와 단단한 과육의 프리미엄 품종.<br>
                            선물용으로 가장 선호되는 비주얼.
                        </p>
                        <div class="order-variety-specs">
                            <div class="order-variety-spec">
                                <div class="order-variety-spec-value">13~15°</div>
                                <div class="order-variety-spec-label">당도</div>
                            </div>
                            <div class="order-variety-spec">
                                <div class="order-variety-spec-value">진한</div>
                                <div class="order-variety-spec-label">향</div>
                            </div>
                            <div class="order-variety-spec">
                                <div class="order-variety-spec-value">단단함</div>
                                <div class="order-variety-spec-label">식감</div>
                            </div>
                        </div>
                    </div>
                    <div class="order-variety-card animate-on-scroll animate-delay-2">
                        <img class="order-variety-img" src="images/죽향.jpg" alt="죽향 딸기" loading="lazy">
                        <div class="order-variety-name">죽향</div>
                        <div class="order-variety-eng">Jukhyang</div>
                        <p class="order-variety-desc">
                            복숭아를 닮은 독보적인 향과 큰 과립.<br>
                            한 입 베어 무는 순간 잊지 못할 경험.
                        </p>
                        <div class="order-variety-specs">
                            <div class="order-variety-spec">
                                <div class="order-variety-spec-value">14~16°</div>
                                <div class="order-variety-spec-label">당도</div>
                            </div>
                            <div class="order-variety-spec">
                                <div class="order-variety-spec-value">복숭아향</div>
                                <div class="order-variety-spec-label">향</div>
                            </div>
                            <div class="order-variety-spec">
                                <div class="order-variety-spec-value">대과</div>
                                <div class="order-variety-spec-label">크기</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- STAGE 4: Unboxing — 패키징 & 배송 -->
            <div class="order-packaging animate-on-scroll">
                <div class="order-packaging-grid">
                    <div class="animate-on-scroll">
                        <div class="order-packaging-label">Gift Packaging</div>
                        <h3 class="order-packaging-title">
                            받는 분의 첫인상까지<br>
                            설계합니다
                        </h3>
                        <p class="order-packaging-desc">
                            고급 블랙 완충재에 한 알 한 알 안착된 딸기.<br>
                            상자를 여는 순간, 은은한 딸기 향이 퍼지고<br>
                            영롱한 붉은빛이 시선을 사로잡습니다.<br>
                            주는 사람의 안목이 돋보이는 패키징.
                        </p>
                        <div class="order-packaging-features">
                            <div class="order-packaging-feature">
                                <div class="order-packaging-feature-title">개별 완충 포장</div>
                                <div class="order-packaging-feature-desc">한 알의 흠집도 허용하지 않는 프리미엄 완충 시스템</div>
                            </div>
                            <div class="order-packaging-feature">
                                <div class="order-packaging-feature-title">냉장 특송</div>
                                <div class="order-packaging-feature-desc">수확 당일 냉장 포장, 전국 익일 배송</div>
                            </div>
                            <div class="order-packaging-feature">
                                <div class="order-packaging-feature-title">프리미엄 선물 박스</div>
                                <div class="order-packaging-feature-desc">격식 있는 자리에 어울리는 고급 외장 패키지</div>
                            </div>
                            <div class="order-packaging-feature">
                                <div class="order-packaging-feature-title">메시지 카드</div>
                                <div class="order-packaging-feature-desc">마음을 전하는 맞춤 메시지 카드 동봉 가능</div>
                            </div>
                        </div>
                    </div>
                    <img class="order-packaging-img animate-on-scroll animate-delay-1"
                         src="images/금실.jpg"
                         alt="프리미엄 선물 박스에 담긴 두호딸기"
                         loading="lazy">
                </div>
            </div>

            <!-- STAGE 5: CTA — 상품 선택 & 주문 -->
            <div class="order-cta">
                <div class="order-cta-header animate-on-scroll">
                    <div class="order-cta-label">Order Now</div>
                    <h3 class="order-cta-title">
                        소중한 분께 보내는<br>
                        두호딸기 선물 세트
                    </h3>
                    <p class="order-cta-sub">
                        주문 확인 후 수확하여 가장 신선한 상태로 보내드립니다.
                    </p>
                </div>

                <div class="order-product-cards">
                    <!-- 프리미엄 세트 -->
                    <div class="order-product-card animate-on-scroll">
                        <div class="order-product-card-name">프리미엄 세트</div>
                        <div class="order-product-card-desc">
                            감사의 마음을 전하는<br>기본 선물 구성
                        </div>
                        <ul class="order-product-card-specs">
                            <li><span>품종</span><span>설향 / 금실 택 1</span></li>
                            <li><span>중량</span><span>500g (약 15~20과)</span></li>
                            <li><span>등급</span><span>특등급</span></li>
                            <li><span>패키지</span><span>프리미엄 선물 박스</span></li>
                            <li><span>배송</span><span>냉장 특송</span></li>
                        </ul>
                        <div class="order-product-card-price">
                            35,000<span>원</span>
                        </div>
                        <a href="https://smartstore.naver.com" target="_blank" rel="noopener" class="order-btn order-btn-outline">스마트스토어에서 주문하기</a>
                    </div>

                    <!-- 시그니처 세트 (Featured) -->
                    <div class="order-product-card featured animate-on-scroll animate-delay-1">
                        <div class="order-product-badge">BEST</div>
                        <div class="order-product-card-name">시그니처 세트</div>
                        <div class="order-product-card-desc">
                            격식 있는 자리를 위한<br>가장 인기 있는 구성
                        </div>
                        <ul class="order-product-card-specs">
                            <li><span>품종</span><span>금실 / 죽향 택 1</span></li>
                            <li><span>중량</span><span>1kg (약 30~40과)</span></li>
                            <li><span>등급</span><span>특등급 대과</span></li>
                            <li><span>패키지</span><span>시그니처 선물 박스</span></li>
                            <li><span>배송</span><span>냉장 특송 + 메시지 카드</span></li>
                        </ul>
                        <div class="order-product-card-price">
                            65,000<span>원</span>
                        </div>
                        <a href="https://smartstore.naver.com" target="_blank" rel="noopener" class="order-btn">스마트스토어에서 주문하기</a>
                    </div>

                    <!-- 로얄 세트 -->
                    <div class="order-product-card animate-on-scroll animate-delay-2">
                        <div class="order-product-card-name">로얄 세트</div>
                        <div class="order-product-card-desc">
                            VIP를 위한<br>최상위 프리미엄 구성
                        </div>
                        <ul class="order-product-card-specs">
                            <li><span>품종</span><span>죽향 단일 구성</span></li>
                            <li><span>중량</span><span>1.5kg (약 40~50과)</span></li>
                            <li><span>등급</span><span>로얄 특대과</span></li>
                            <li><span>패키지</span><span>로얄 프레스티지 박스</span></li>
                            <li><span>배송</span><span>냉장 특송 + 메시지 카드 + 리본</span></li>
                        </ul>
                        <div class="order-product-card-price">
                            95,000<span>원</span>
                        </div>
                        <a href="https://smartstore.naver.com" target="_blank" rel="noopener" class="order-btn order-btn-outline">스마트스토어에서 주문하기</a>
                    </div>
                </div>

                <div class="order-notice animate-on-scroll">
                    <div class="order-notice-title">주문 전 안내사항</div>
                    <p class="order-notice-desc">
                        딸기는 수확 후 수명이 짧은 신선 농산물입니다. 수령 후 냉장 보관하시고 2~3일 내 드시는 것을 권장합니다.<br>
                        선물 배송 시 수령자 정보를 정확히 기재해 주세요. 부재 시 신선도 유지가 어려울 수 있습니다.<br>
                        천재지변, 기상이변 등으로 출하가 어려운 경우 사전 안내 후 전액 환불해 드립니다.
                    </p>
                </div>
            </div>

        </div>
    </section>
    `;
}

// ==========================================
// PARTNERS PAGE
// ==========================================
function partnersPage() {
    return `
    <!-- Page Hero -->
    <section class="page-hero">
        <div class="container">
            <div class="section-label animate-on-scroll">PARTNERS</div>
            <h1 class="section-title animate-on-scroll animate-delay-1">함께 성장하는 파트너십</h1>
            <p class="section-subtitle animate-on-scroll animate-delay-2">
                최상급 품질의 딸기로<br class="br-mobile"> 파트너 여러분의 비즈니스 가치를 높여드립니다.
            </p>
        </div>
    </section>

    <!-- Partner Categories Detail -->
    <section class="partners-detail">
        <div class="partners-detail-grid">
            <div class="partner-detail-card animate-on-scroll">
                <div class="partner-detail-content">
                    <h3><span class="emoji-icon">${brandIcon('bakery')}</span> 베이커리 & 카페</h3>
                    <p>죽향·설향 딸기로 프리미엄 디저트의 품격을 높여드립니다. 케이크, 타르트, 생과일 음료 등 다양한 메뉴에 활용 가능합니다.</p>
                    <div class="partner-benefits">
                        <div class="partner-benefit">주 2~3회 정기 배송</div>
                        <div class="partner-benefit">케이크 데코용 죽향 특선 규격</div>
                        <div class="partner-benefit">시즌별 맞춤 품종 제안</div>
                    </div>
                </div>
            </div>
            <div class="partner-detail-card animate-on-scroll animate-delay-1">
                <div class="partner-detail-content">
                    <h3><span class="emoji-icon">${brandIcon('store')}</span> 백화점 & 마트</h3>
                    <p>금실·죽향으로 프리미엄 매장에 맞는 품격 있는 딸기 상품을 제공합니다. 선물세트, 매장 진열용 트레이 등 다양한 패키징이 가능합니다.</p>
                    <div class="partner-benefits">
                        <div class="partner-benefit">프리미엄 선물세트 패키징</div>
                        <div class="partner-benefit">MD 맞춤 상품 기획</div>
                        <div class="partner-benefit">시즌 프로모션 지원</div>
                    </div>
                </div>
            </div>
            <div class="partner-detail-card animate-on-scroll animate-delay-2">
                <div class="partner-detail-content">
                    <h3><span class="emoji-icon">${brandIcon('hotel')}</span> 호텔 & 레스토랑</h3>
                    <p>죽향 프리미엄 딸기로 파인다이닝과 뷔페에 어울리는 최고급 품질을 공급합니다. 쉐프 요청에 맞춘 맞춤 규격 서비스를 제공합니다.</p>
                    <div class="partner-benefits">
                        <div class="partner-benefit">쉐프 맞춤 규격 공급</div>
                        <div class="partner-benefit">새벽 배송 가능</div>
                        <div class="partner-benefit">이벤트 대량 공급</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Premium Client Showcase -->
    <section class="premium-clients-showcase">
        <div class="container">
            <div class="showcase-header" style="text-align: center; margin-bottom: var(--space-3xl);">
                <div class="section-label animate-on-scroll">Premium Partners</div>
                <h2 class="section-title animate-on-scroll animate-delay-1">가치와 가치가 만나, 감동이 됩니다</h2>
                <p class="section-subtitle animate-on-scroll animate-delay-2" style="margin: 0 auto;">
                    대한민국을 대표하는 최상급 브랜드들이 바이오두호의 변함없는 가치를 인정하며,<br class="br-desktop"><br class="br-mobile"> 오랜 시간 완벽한 파트너십을 이어오고 있습니다.
                </p>
            </div>
            
            <div class="clients-list">
                <!-- 뚜쥬루 빵돌가마마을 -->
                <div class="client-card animate-on-scroll animate-delay-1">
                    <div class="client-logo-box">
                        <img src="images/뚜쥬루 로고 2_final_preTransparent.png" alt="뚜쥬루 빵돌가마마을" loading="lazy" decoding="async" style="transform: scale(1);">
                    </div>
                    <div class="client-info">
                        <div class="client-badge">Since 2021</div>
                        <h3 class="client-name">뚜쥬루 빵돌가마마을</h3>
                        <p class="client-desc">
                            <strong>'느림과 정직'의 철학, 자연이 빚어낸 건강한 맛의 완성.</strong><br>천안의 자부심, 뚜쥬루. '느림과 정직'의 철학으로, 인공적인 첨가물 없이 오직 건강한 먹거리를 위해 천천히 빵을 구워냅니다.
                            자연의 맛을 지켜내는 뚜쥬루의 올곧은 장인정신은, 온전한 과실을 맺기까지 시간을 아끼지 않는 바이오두호의 진정성과 깊이 맞닿아 있습니다.
                            오랜 기다림 끝에 얻어진 최상급 딸기가 뚜쥬루의 건강한 빵과 만나 누구나 안심하고 즐길 수 있는 자연 그대로의 감동이 됩니다.
                        </p>
                    </div>
                </div>


                <!-- 서울 인터컨티넨탈 호텔 -->
                <div class="client-card animate-on-scroll">
                    <div class="client-logo-box">
                        <img src="images/인터컨티넨탈 호텔2_final_preTransparent.png" alt="서울 인터컨티넨탈 호텔" loading="lazy" decoding="async" style="transform: scale(1.1);">
                    </div>
                    <div class="client-info">
                        <div class="client-badge">Since 2022</div>
                        <h3 class="client-name">서울 인터컨티넨탈 호텔</h3>
                        <p class="client-desc">
                            <strong>'진정한 품격'의 철학과 완벽한 과실이 빚어낸 미식의 걸작.</strong><br>
                            오랜 시간 최고 수준의 전문성과 진정성 있는 환대로 손님에게 감동을 전해온 인터컨티넨탈 호텔. 그 엄격한 최고급 정찬의 기준을 통과한 핵심 식재료는 바이오두호의 최상급 '죽향'입니다. 타협 없는 방식으로 길러내어 특유의 깊고 진한 붉은 빛깔을 띠는 완벽한 딸기가 수석 요리사의 섬세한 손길과 만나, 귀빈들의 미각을 깨우는 잊지 못할 예술적 경험으로 완성됩니다.
                        </p>
                    </div>
                </div>

            

                <!-- 현대백화점 -->
                <div class="client-card animate-on-scroll animate-delay-2">
                    <div class="client-logo-box">
                        <img src="images/현대 백화점 2_final_preTransparent.png" alt="현대백화점" loading="lazy" decoding="async" style="transform: scale(1.2);">
                    </div>
                    <div class="client-info">
                        <div class="client-badge">Since 2023</div>
                        <h3 class="client-name">현대백화점</h3>
                        <p class="client-desc">
                            <strong>'최고의 맛'을 향한 집념, 엄선된 식재료의 기준이 되다.</strong><br>
                            단순한 식품관을 넘어 차별화된 맛의 경험과 격조 높은 생활 방식을 제안하는 현대백화점. 단맛과 크기, 희소성까지 완벽함을 추구하는 백화점의 깐깐한 기준에 바이오두호의 한정 생산 과실이 화답했습니다. 압도적인 과육과 탁월한 단맛을 품은 딸기는 최고급 명절 선물로 탄생하여, 가장 귀한 마음을 전하려는 손님들에게 절대적인 신뢰를 받고 있습니다.
                        </p>
                    </div>
                </div>

                <!-- 준비중 1 -->
                <div class="client-card animate-on-scroll animate-delay-3">
                    <div class="client-logo-box empty-slot">
                        <span class="emoji-icon" style="background: transparent; border: none; box-shadow: none; font-size: 2rem; opacity: 0.5;">${brandIcon('partner')}</span>
                    </div>
                    <div class="client-info">
                        <div class="client-badge" style="background: rgba(0,0,0,0.05); color: var(--color-text-muted);">Coming Soon</div>
                        <h3 class="client-name" style="color: var(--color-text-muted);">신규 파트너사</h3>
                        <p class="client-desc">
                            최고급 품질을 알아보는 안목 있는 파트너사를 기다립니다. 바이오두호와 함께 프리미엄 브랜드의 가치를 더욱 높여갈 수 있습니다.
                        </p>
                    </div>
                </div>

                <!-- 준비중 2 -->
                <div class="client-card animate-on-scroll animate-delay-4">
                    <div class="client-logo-box empty-slot">
                        <span class="emoji-icon" style="background: transparent; border: none; box-shadow: none; font-size: 2rem; opacity: 0.5;">${brandIcon('partner')}</span>
                    </div>
                    <div class="client-info">
                        <div class="client-badge" style="background: rgba(0,0,0,0.05); color: var(--color-text-muted);">Coming Soon</div>
                        <h3 class="client-name" style="color: var(--color-text-muted);">신규 파트너사</h3>
                        <p class="client-desc">
                            최고급 품질을 알아보는 안목 있는 파트너사를 기다립니다. 바이오두호와 함께 프리미엄 브랜드의 가치를 더욱 높여갈 수 있습니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Partnership Process -->
    <section class="partnership-process">
        <div class="process-header">
            <div class="section-label animate-on-scroll">PROCESS</div>
            <h2 class="section-title animate-on-scroll animate-delay-1">파트너 계약 프로세스</h2>
            <p class="section-subtitle animate-on-scroll animate-delay-2">
                간단한 4단계로 바이오두호와 파트너십을 시작하실 수 있습니다.
            </p>
        </div>
        <div class="process-steps">
            <div class="process-step animate-on-scroll">
                <div class="process-step-number">01</div>
                <div class="process-step-content">
                    <h4>문의 & 상담</h4>
                    <p>필요한 품종, 규격, 수량 등을 말씀해 주시면 <br class="br-mobile">담당자가 맞춤 상담을 진행합니다.</p>
                </div>
            </div>
            <div class="process-step animate-on-scroll animate-delay-1">
                <div class="process-step-number">02</div>
                <div class="process-step-content">
                    <h4>샘플 시식</h4>
                    <p>실제 납품될 딸기 샘플을 무료로 보내드립니다. <br class="br-mobile">품질을 직접 확인해 보세요.</p>
                </div>
            </div>
            <div class="process-step animate-on-scroll animate-delay-2">
                <div class="process-step-number">03</div>
                <div class="process-step-content">
                    <h4>계약 & 스케줄 조율</h4>
                    <p>납품 조건, 배송 스케줄, 결제 조건 등을 확정하고 <br class="br-mobile">계약을 체결합니다.</p>
                </div>
            </div>
            <div class="process-step animate-on-scroll animate-delay-3">
                <div class="process-step-number">04</div>
                <div class="process-step-content">
                    <h4>정기 납품 시작</h4>
                    <p>합의된 스케줄에 따라 콜드체인 시스템으로 <br class="br-mobile">신선한 딸기를 정기 납품합니다.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
        <div class="cta-content">
            <h2 class="section-title animate-on-scroll">
                파트너십을 시작하세요
            </h2>
            <p class="section-subtitle animate-on-scroll animate-delay-1">
                무료 샘플 시식부터 시작해 보세요. 품질에 만족하실 겁니다.
            </p>
            <a href="#/contact" class="btn btn-primary animate-on-scroll animate-delay-2">파트너 문의 →</a>
        </div>
    </section>
    `;
}

// ==========================================
// CONTACT PAGE
// ==========================================
function contactPage() {
    return `
    <!-- Page Hero -->
    <section class="page-hero">
        <div class="container">
            <div class="section-label animate-on-scroll">CONTACT US</div>
            <h1 class="section-title animate-on-scroll animate-delay-1">문의하기</h1>
            <p class="section-subtitle animate-on-scroll animate-delay-2">
                프리미엄 딸기 납품에 대해 궁금한 점이<br class="br-mobile"> 있으시면 언제든지 연락해 주세요.
            </p>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
        <div class="contact-grid">
            <div class="contact-form-wrapper animate-on-scroll">
                <h3>납품 / 견적 문의</h3>
                <p>아래 양식을 작성해 주시면 담당자가 빠르게 연락드리겠습니다.</p>
                <form id="contact-form" onsubmit="handleFormSubmit(event)">
                    <!-- Honeypot Field -->
                    <div class="form-group hp-wrapper">
                        <label>Fax 번호 (입력하지 마세요)</label>
                        <input type="text" class="form-input" id="contact-fax" tabindex="-1" autocomplete="off">
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>회사명 / 상호 <span class="required">*</span></label>
                            <input type="text" class="form-input" id="company-name" placeholder="회사명을 입력해 주세요" required>
                        </div>
                        <div class="form-group">
                            <label>담당자명 <span class="required">*</span></label>
                            <input type="text" class="form-input" id="contact-name" placeholder="성함을 입력해 주세요" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>연락처 <span class="required">*</span></label>
                            <input type="tel" class="form-input" id="contact-phone" placeholder="010-0000-0000" required>
                        </div>
                        <div class="form-group">
                            <label>이메일 <span class="required">*</span></label>
                            <input type="email" class="form-input" id="contact-email" placeholder="email@company.com" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>업종 선택</label>
                        <select class="form-select" id="contact-category">
                            <option value="">업종을 선택해 주세요</option>
                            <option value="bakery">베이커리 / 카페</option>
                            <option value="department">백화점 / 마트</option>
                            <option value="hotel">호텔 / 레스토랑</option>
                            <option value="other">기타</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>관심 품종 (복수 선택 가능)</label>
                        <div class="form-checkbox-group">
                            <label class="form-checkbox">
                                <input type="checkbox" value="seolhyang"> 
                                <span class="checkmark"></span>
                                설향
                            </label>
                            <label class="form-checkbox">
                                <input type="checkbox" value="geumsil"> 
                                <span class="checkmark"></span>
                                금실 
                            </label>
                            <label class="form-checkbox">
                                <input type="checkbox" value="jukhyang"> 
                                <span class="checkmark"></span>
                                죽향 
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>문의 내용 <span class="required">*</span></label>
                        <textarea class="form-textarea" id="contact-message" placeholder="납품 희망 품종, 예상 수량, 배송 지역 등을 알려주시면 더 정확한 안내를 드릴 수 있습니다." required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary btn-submit">
                        <span>문의 보내기</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </button>
                </form>
            </div>
            <div class="contact-info-wrapper">
                <div class="contact-info-card animate-on-scroll animate-delay-1">
                    <h3>연락처 정보</h3>
                    <div class="contact-info-item">
                        <div class="contact-info-icon"><span class="emoji-icon">${brandIcon('phone')}</span></div>
                        <div class="contact-info-text">
                            <h4>전화 문의</h4>
                            <p>010-0000-0000</p>
                            <p>부재시 이메일로 문의 부탁드립니다.</p>
                        </div>
                    </div>
                    <div class="contact-info-item">
                        <div class="contact-info-icon"><span class="emoji-icon">${brandIcon('mail')}</span></div>
                        <div class="contact-info-text">
                            <h4>이메일</h4>
                            <p>kkk@bioduho.co.kr</p>
                            <p>24시간 접수 가능</p>
                        </div>
                    </div>
                    <div class="contact-info-item">
                        <div class="contact-info-icon"><span class="emoji-icon">${brandIcon('location')}</span></div>
                        <div class="contact-info-text">
                            <h4>본사</h4>
                            <p>세종특별자치시</p>
                            <p>(농)바이오두호</p>
                        </div>
                    </div>
                    <div class="contact-info-item">
                        <div class="contact-info-icon"><span class="emoji-icon">${brandIcon('clock')}</span></div>
                        <div class="contact-info-text">
                            <h4>영업시간</h4>
                            <p>월~금 09:00 ~ 18:00</p>
                            <p>일·공휴일 휴무</p>
                        </div>
                    </div>
                    <div class="contact-info-note">
                        남겨주신 소중한 문의는 확인 후,<br class="br-desktop"><br class="br-mobile"> 담당자가 신속하게 답변드리겠습니다.
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}

// ==========================================
// EmailJS 초기화 및 문의 폼 전송 핸들러
// ==========================================

// EmailJS 초기화 (Public Key)
// ⚠️ 아래 'YOUR_PUBLIC_KEY'를 EmailJS에서 발급받은 Public Key로 교체해야 합니다.
(function () {
    if (typeof emailjs !== 'undefined') {
        emailjs.init('9q2ZwrIvo2jazBVgd');
    } else {
        console.warn('EmailJS is not loaded. This is normal if opening via file:// due to security policies.');
    }
})();

// Rate limiting state
let _lastSubmitTime = 0;

// XSS Prevention Utility
function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, function (tag) {
        const charsToReplace = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        };
        return charsToReplace[tag] || tag;
    });
}

function handleFormSubmit(event) {
    event.preventDefault();

    // 1. Honeypot check - Bot detection
    const faxField = document.getElementById('contact-fax');
    if (faxField && faxField.value) {
        // Bot detected, silently reject
        console.log('Bot detected, submission ignored.');
        return;
    }

    // 2. Rate limiting check (30 seconds)
    const now = Date.now();
    if (now - _lastSubmitTime < 30000) {
        alert('문의는 30초에 한 번만 전송할 수 있습니다. 잠시 후 다시 시도해 주세요.');
        return;
    }

    const btn = event.target.querySelector('.btn-submit');
    const originalHTML = btn.innerHTML;

    // 버튼 로딩 상태로 변경
    btn.innerHTML = '<span>전송 중...</span>';
    btn.disabled = true;
    btn.style.opacity = '0.7';

    // 체크된 관심 품종 수집
    const checkedVarieties = [];
    event.target.querySelectorAll('.form-checkbox input[type="checkbox"]:checked').forEach(cb => {
        const label = cb.closest('label').textContent.trim();
        checkedVarieties.push(label);
    });

    // 업종 선택 텍스트 가져오기
    const categorySelect = document.getElementById('contact-category');
    const categoryText = categorySelect.options[categorySelect.selectedIndex].text;

    // 3. XSS 방어를 위한 입력값 Sanitization
    const templateParams = {
        company_name: escapeHTML(document.getElementById('company-name').value),
        contact_name: escapeHTML(document.getElementById('contact-name').value),
        contact_phone: escapeHTML(document.getElementById('contact-phone').value),
        contact_email: escapeHTML(document.getElementById('contact-email').value),
        category: categoryText,
        varieties: checkedVarieties.length > 0 ? checkedVarieties.join(', ') : '선택 없음',
        message: escapeHTML(document.getElementById('contact-message').value),
        to_email: 'geonhee070815@gmail.com'
    };

    // Update rate limit time after successful validation
    _lastSubmitTime = now;

    // ⚠️ 'YOUR_SERVICE_ID'와 'YOUR_TEMPLATE_ID'를 EmailJS에서 발급받은 값으로 교체해야 합니다.
    emailjs.send('service_57pbhwg', 'template_37ognp2', templateParams)
        .then(function () {
            // 성공
            btn.innerHTML = '<span>✓ 문의가 접수되었습니다!</span>';
            btn.style.background = '#2E7D32';
            btn.style.opacity = '1';

            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.style.background = '';
                btn.disabled = false;
                event.target.reset();
            }, 4000);
        }, function (error) {
            // 실패
            console.error('EmailJS Error:', error);
            btn.innerHTML = '<span>⚠ 전송 실패 - 다시 시도해 주세요</span>';
            btn.style.background = '#C62828';
            btn.style.opacity = '1';

            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.style.background = '';
                btn.disabled = false;
            }, 3000);
        });
}
