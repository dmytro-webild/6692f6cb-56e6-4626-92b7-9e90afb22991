"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="largeSmallSizeLargeTitles"
        background="none"
        cardStyle="glass-elevated"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Holââ Coffee House"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "plain",
      }}
      title="Evinizdeki Kahve Huzuru"
      description="Bayrampaşa'nın en sıcak, en samimi kafe deneyimi. Ev yapımı lezzetler, artisan kahveler ve huzur dolu bir atmosfer sizi bekliyor."
      buttons={[
        {
          text: "Menüyü Keşfet",
          href: "#menu",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/young-woman-drinking-tea-cafe_1303-25721.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Holââ Coffee House Hakkında"
      description="Bir kadının elinin değdiği her nesnede hissedilen o özel dokunuşla, 2022'den beri Bayrampaşa'da eviniz gibi hissedeceğiniz bir mekan tasarladık. Amacımız, sadece kahve sunmak değil, bir huzur noktası olmak."
      bulletPoints={[
        {
          title: "Ev Yapımı Tatlılar",
          description: "Her biri el yapımı ve günlük taze.",
        },
        {
          title: "Artisan Kahve Deneyimi",
          description: "Özenle seçilmiş çekirdekler, profesyonel dokunuş.",
        },
        {
          title: "Çalışmaya Uygun Alan",
          description: "Bol priz ve hızlı WiFi ile verimli bir ortam.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/coffee-shop-employee-making-coffee_23-2148366517.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "San Sebastian Cheesecake",
          price: "Günün Fiyatı",
          imageSrc: "http://img.b2bpic.net/free-photo/cinnamon-roll-with-blueberries-high-angle_23-2148904723.jpg",
        },
        {
          id: "p2",
          name: "Artisan Filtre Kahve",
          price: "Günün Fiyatı",
          imageSrc: "http://img.b2bpic.net/free-photo/high-view-cup-coffee-with-wooden-background_23-2148251677.jpg",
        },
        {
          id: "p3",
          name: "Geleneksel Alman Pastası",
          price: "Günün Fiyatı",
          imageSrc: "http://img.b2bpic.net/free-photo/slice-chocolate-cake-with-dry-orange-slices-around_114579-31577.jpg",
        },
        {
          id: "p4",
          name: "Ev Yapımı Kurabiye Tabağı",
          price: "Günün Fiyatı",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-creamy-cake-with-chocolate-raisins-light-dark-floor_140725-136347.jpg",
        },
        {
          id: "p5",
          name: "Özel Tarif Brownie",
          price: "Günün Fiyatı",
          imageSrc: "http://img.b2bpic.net/free-photo/chocolate-pie-with-cinnamon-wooden-tray_23-2147957906.jpg",
        },
        {
          id: "p6",
          name: "Ev Yapımı Limonata",
          price: "Günün Fiyatı",
          imageSrc: "http://img.b2bpic.net/free-photo/two-glass-cups-fresh-lemon-juice-wooden-board_114579-53428.jpg",
        },
      ]}
      title="En Sevilen Lezzetlerimiz"
      description="Herkesin tadına doyamadığı, ev yapımı pastalarımız ve özel kahvelerimiz."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Muzaffer Erbaş",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-asian-woman-apron-barista-giving-you-cup-coffee-working-cafe-serving_1258-199258.jpg",
        },
        {
          id: "t2",
          name: "Kadir Selvi",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-brunette-woman-drinks-morning-coffee-cafe_613910-12128.jpg",
        },
        {
          id: "t3",
          name: "Ilayda Bassezer",
          imageSrc: "http://img.b2bpic.net/free-photo/friends-having-fun-their-reunion_23-2149144379.jpg",
        },
        {
          id: "t4",
          name: "Hilal Ünal",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-asian-barista-girl-giving-takeaway-coffee-cup-prepare-takeout-order-guest-cafe-wearing_1258-199322.jpg",
        },
        {
          id: "t5",
          name: "Yeşim Uzun",
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-blonde-woman-sitting-cafe_273609-6753.jpg",
        },
      ]}
      cardTitle="Misafirlerimizin Kaleminden"
      cardAnimation="slide-up"
      cardTag="Yorumlar"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Ders çalışmak için uygun mu?",
          content: "Evet, bol priz ve hızlı WiFi ile çalışmak için oldukça ideal.",
        },
        {
          id: "f2",
          title: "Tuvalet var mı?",
          content: "Evet, mekanımızın alt katında lavabomuz mevcuttur.",
        },
        {
          id: "f3",
          title: "Otopark imkanınız var mı?",
          content: "Evet, çevremizde ücretsiz otopark alanı mevcuttur.",
        },
        {
          id: "f4",
          title: "Paket servisiniz var mı?",
          content: "Evet, paket servisimiz mevcuttur.",
        },
      ]}
      title="Sıkça Sorulan Sorular"
      description="Kafe deneyiminizle ilgili merak ettikleriniz."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Google Reviews Top Rated",
        "Coffee Artisan Guild",
        "Bayrampaşa Cafe Community",
        "Home-Made Standards Verified",
        "Artisan Coffee Certified",
        "Local Business Excellence",
        "Best of Bayrampaşa 2024",
      ]}
      title="Sertifikalı Güler Yüz"
      description="Mahallemizin en sevilen kahve durağı."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="İletişim"
      title="Bize Ulaşın"
      description="Yıldırım, Rize Sk. No:1 D:A, Bayrampaşa/İstanbul adresinde sizi bekliyoruz. Rezervasyon ve sorularınız için bizimle iletişime geçin."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Holââ Coffee House"
      leftLink={{
        text: "Gizlilik Politikası",
        href: "#",
      }}
      rightLink={{
        text: "Instagram @holaacoffee",
        href: "https://instagram.com",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
