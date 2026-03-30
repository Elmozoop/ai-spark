export type Language = 'en' | 'hi';

export const translations = {
  en: {
    navbar: {
      products: 'Products',
      useCases: 'Use Cases',
      customers: 'Customers',
      resources: 'Resources',
      company: 'Company',
      bookDemo: 'Book a demo',
      startFree: 'Try it Now',
    },
    hero: {
      badge: 'Next-Gen Document Intelligence Layer',
      headline: 'The operating system for',
      headlineAccent: 'modern Indian KYC',
      headlineSuffix: '& Fraud Detection',
      subheadline: 'SATYA KYC centralizes document verification, forgery detection, and multi-agent cross-validation in one seamless pipeline. Replace manual checks with instant, intelligent certainty.',
      ctaPrimary: 'Book a demo',
      ctaSecondary: 'Watch Demo',
      stats: [
        { label: '3x', text: 'faster processing' },
        { label: '90%', text: 'accuracy increase' },
        { label: '5s', text: 'per document scan' },
      ]
    },
    features: {
      badge: 'Platform Capabilities',
      title: 'Everything you need to secure onboarding, out of the box.',
      description: 'Replace disjointed APIs and manual reviews with a unified intelligence engine.',
      items: [
        {
          title: 'Integrity Validation',
          description: 'Acts as a computational shield. Immediately rejects corrupted, blurry, or low-res images.'
        },
        {
          title: 'Type & Layout Detection',
          description: 'Routes document to correct ML pipelines via OCR, aspect ratios, and spatial layout.'
        },
        {
          title: 'Multi-Agent Forgery Engine',
          description: 'Parallel checks for pixel tampering, ELA, EXIF metadata, and font splicing.'
        },
        {
          title: 'Cross-Validation Layer',
          description: 'Correlates OCR printed fields against embedded QR datasets and EXIF timestamps.'
        },
        {
          title: 'Predictive Fraud Scoring',
          description: 'Aggregates multi-lateral signals into a standardized 0-100 risk score.'
        },
        {
          title: 'Explainable Auditing',
          description: 'Returns rich payloads, visual heatmaps, and clear categorization (Genuine, Suspicious, Fake).'
        }
      ]
    }
  },
  hi: {
    navbar: {
      products: 'उत्पाद',
      useCases: 'उपयोग के मामले',
      customers: 'ग्राहक',
      resources: 'संसाधन',
      company: 'कंपनी',
      bookDemo: 'डेमो बुक करें',
      startFree: 'मुफ्त शुरू करें',
    },
    hero: {
      badge: 'अगली पीढ़ी की दस्तावेज़ इंटेलिजेंस लेयर',
      headline: 'आधुनिक ',
      headlineAccent: 'भारतीय KYC',
      headlineSuffix: ' और धोखाधड़ी की पहचान के लिए ऑपरेटिंग सिस्टम',
      subheadline: 'SATYA KYC दस्तावेज़ सत्यापन, जालसाजी का पता लगाने और मल्टी-एजेंट क्रॉस-वैलिडेशन को एक सहज पाइपलाइन में केंद्रीकृत करता है। मैन्युअल जांच को तत्काल, बुद्धिमान निश्चितता के साथ बदलें।',
      ctaPrimary: 'डेमो बुक करें',
      ctaSecondary: 'डेमो देखें',
      stats: [
        { label: '3x', text: 'तेज़ प्रसंस्करण' },
        { label: '90%', text: 'सटीकता में वृद्धि' },
        { label: '5s', text: 'प्रति दस्तावेज़ स्कैन' },
      ]
    },
    features: {
      badge: 'प्लेटफॉर्म की क्षमताएं',
      title: 'ऑनबोर्डिंग सुरक्षित करने के लिए वह सब कुछ जो आपको चाहिए।',
      description: 'एक एकीकृत इंटेलिजेंस इंजन के साथ अलग-थलग API और मैन्युअल समीक्षाओं को बदलें।',
      items: [
        {
          title: 'अखंडता सत्यापन',
          description: 'कंप्यूटेशनल शील्ड के रूप में कार्य करता है। तुरंत भ्रष्ट, धुंधली या कम-रिज़ॉल्यूशन छवियों को रोकता है।'
        },
        {
          title: 'प्रकार और लेआउट पहचान',
          description: 'OCR, पहलू अनुपात और स्थानिक लेआउट के माध्यम से दस्तावेज़ को सही ML पाइपलाइनों पर भेजता है।'
        },
        {
          title: 'मल्टी-एजेंट जालसाजी इंजन',
          description: 'पिक्सेल छेड़छाड़, ELA, EXIF मेटाडेटा और फ़ॉन्ट स्प्लिसिंग के लिए समानांतर जांच।'
        },
        {
          title: 'क्रॉस-वैलिडेशन लेयर',
          description: 'एम्बेडेड QR डेटासेट और EXIF टाइमस्टैम्प के साथ OCR मुद्रित फ़ील्ड को सहसंबद्ध करता है।'
        },
        {
          title: 'पूर्वानुमानित धोखाधड़ी स्कोरिंग',
          description: 'बहुपक्षीय संकेतों को एक मानकीकृत 0-100 जोखिम स्कोर में एकत्रित करता है।'
        },
        {
          title: 'व्याख्या योग्य ऑडिटिंग',
          description: 'समृद्ध पेलोड, विज़ुअल हीटमैप और स्पष्ट श्रेणीकरण (असली, संदिग्ध, नकली) देता है।'
        }
      ]
    }
  }
};
