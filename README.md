# 🔐 Satya AI

### Multi-Layer Document Fraud Detection System 🚀

---

## 🧠 Overview

AuthentiScan AI is a **multi-layer forensic document verification system** designed to detect **tampered or forged identity documents before KYC verification**.

Unlike traditional systems that only verify identity, our solution ensures the **authenticity of the document itself** using a combination of **image forensics, cross-validation, and explainable AI**.

---

## 🎯 Problem Statement

Fraudulent documents (edited IDs, fake photos, mismatched data) are a major entry point for:

* 💳 Financial fraud
* 🏦 Fake KYC onboarding
* ⚠️ Identity theft

Most systems assume documents are genuine — we challenge that assumption.

---

## 💡 Solution

We built a **real-time fraud detection pipeline** that:

* Validates document integrity
* Cross-checks multiple signals
* Generates a fraud score
* Provides a clear explanation

---

## ⚙️ Key Features

### 🔍 Multi-Signal Verification

* OCR Text Extraction 📄
* QR Code Validation 🔗
* Image Forensics (ELA Heatmap) 🔬
* Metadata Analysis 🧾
* Optional Face/Voice Checks 🧠

---

### 🔄 Cross-Validation Engine (Core Innovation 🔥)

> Signals verify each other instead of working independently

Example:

* QR → “Ramesh”
* OCR → “Rajesh”
  ➡️ 🚨 Fraud detected instantly

---

### 📊 Fraud Scoring System

* Weighted multi-signal scoring (0–100)
* Dynamic weight redistribution
* Boost for high-confidence mismatches

---

### 🧾 Explainable AI (RAG Layer)

* Human-readable output
* RBI-compliant reasoning
* Example:

  > “QR name does not match printed name — high confidence fraud detected.”

---

### 🛡️ Adversarial Robustness

* Preprocessing defense (denoise, re-encode)
* Multi-layer validation
* No reliance on single model

---

## 🏗️ System Architecture

```
Input → Quality Check → Preprocessing → Multi-Agent Analysis  
      → Cross Validation → Scoring Engine → Explanation → Audit Log
```

---

## 🧠 Tech Stack

### 🔧 Backend

* 🐍 Python
* ⚡ FastAPI (Async API)
* 🚀 Uvicorn
* 🗄️ SQLAlchemy

### 🤖 AI / ML

* 🔍 EasyOCR (Text Extraction)
* 🤗 HuggingFace Models (Deepfake Detection)
* 🔬 OpenCV (Image Processing + ELA)
* 🧠 Gemini API (Explainability)

### 🧩 Other Tools

* QR Decoder (pyzbar)
* Fuzzy Matching (RapidFuzz)
* EXIF Analysis

---

## 🔬 How It Works

1️⃣ Upload Document 📤
2️⃣ Quality Validation (blur, resolution)
3️⃣ OCR + QR Extraction
4️⃣ Image Forensics (ELA)
5️⃣ Cross-validation between signals
6️⃣ Fraud Score Calculation
7️⃣ Explainable Output Generation

---

## 🧪 Example Output

```json
{
  "fraud_score": 82,
  "decision": "REJECTED",
  "reason": "QR name does not match printed name",
  "confidence": 0.94
}
```

---

## 🏆 What Makes Us Different

| Traditional KYC   | AuthentiScan AI                |
| ----------------- | ------------------------------ |
| Verifies identity | Verifies document authenticity |
| Single signal     | Multi-signal fusion            |
| Black-box output  | Explainable reasoning          |
| API dependent     | Works offline                  |

---

## 🚀 Use Cases

* 🏦 Banking & KYC Verification
* 💳 Fintech Onboarding
* 🛂 Identity Fraud Detection
* 📄 Document Authentication Systems

---

## 🔮 Future Scope

* 🔗 Blockchain-based audit logs
* 📈 Learned weight optimization
* 🌐 Real-time API deployment at scale
* 🧠 Advanced deepfake detection

---

## 👥 Team

* 👨‍💻 Shreyash Gupta
* 👩‍💻 Astha Singh
* 👨‍💻 Yash Raj
* 👩‍💻 Neha Jamulla

---

## 🏁 Conclusion

> “We don’t just verify identity —
> we verify whether the document itself can be trusted.”

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and support our work!

---
