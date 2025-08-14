# SignSpeak Tutor 🎯

**AI-powered sign language learning platform with realistic ASL visualizations, multi-language support, and interactive quizzes**

[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC)](https://tailwindcss.com/)

## 🌟 Features

### 🎯 **Core Learning Features**
- **Text-to-Sign Translation**: Convert text input to ASL hand gestures
- **Realistic ASL Visualizations**: SVG-based hand illustrations for accurate learning
- **Interactive Quizzes**: Gamified learning with progress tracking
- **Progress Dashboard**: Track learning journey and achievements

### 🌍 **Internationalization**
- **Multi-Language Support**: English, Hindi, and Gujarati
- **Dynamic Language Switching**: Real-time language changes
- **Localized Content**: All UI elements translated
- **Persistent Language Settings**: Remembers user preferences

### 🎨 **User Experience**
- **Modern UI/UX**: Clean, responsive design with Tailwind CSS
- **Dark/Light Theme**: Toggle between themes
- **Mobile Responsive**: Works seamlessly on all devices
- **Accessible Design**: WCAG compliant interface

### 🤖 **AI-Powered Features**
- **Smart Sign Detection**: Automatic recognition of common words
- **Custom ASL Components**: Specialized visualizations for key words
- **Intelligent Fallbacks**: Graceful handling of unknown words

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/SignSpeak-Tutor.git
   cd SignSpeak-Tutor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:9002](http://localhost:9002)

## 📁 Project Structure

```
SignSpeak-Tutor/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── dashboard/          # User dashboard
│   │   ├── quiz/              # Interactive quiz system
│   │   ├── layout.jsx         # Root layout with providers
│   │   └── page.jsx           # Home page
│   ├── components/
│   │   ├── dashboard/         # Dashboard components
│   │   ├── home/              # Home page components
│   │   ├── layout/            # Layout components
│   │   ├── quiz/              # Quiz components
│   │   ├── signs/             # ASL sign components
│   │   └── ui/                # Reusable UI components
│   ├── contexts/
│   │   └── LanguageContext.jsx # Internationalization context
│   └── lib/                   # Utility functions
├── public/
│   └── signs/                 # Sign language assets
└── docs/                      # Documentation
```

## 🎯 Key Components

### **ASL Sign Components**
- `HelloSign.jsx` - H-E-L-L-O finger spelling visualization
- `ThankYouSign.jsx` - Thank you gesture with realistic hand illustration
- `PleaseSign.jsx` - Please gesture with circular motion indicator
- `YesNoSign.jsx` - Yes & No signs with motion indicators
- `GoodBadSign.jsx` - Good & Bad signs with approval/disapproval gestures

### **Core Features**
- `SignTranslator.jsx` - Main translation engine with smart word detection
- `LanguageContext.jsx` - Multi-language support system
- `QuizClient.jsx` - Interactive quiz interface
- `DashboardPage.jsx` - Progress tracking and statistics

## 🌍 Supported Languages

| Language | Code | Status |
|----------|------|--------|
| English | `en` | ✅ Complete |
| Hindi | `hi` | ✅ Complete |
| Gujarati | `gu` | ✅ Complete |

## 🎮 Interactive Features

### **Text-to-Sign Translation**
- Type any word or phrase
- See realistic ASL hand gestures
- Special handling for common words (hello, thank you, please, etc.)
- Fallback to letter-by-letter spelling

### **Interactive Quizzes**
- AI-generated quiz questions
- Multiple choice answers
- Real-time scoring
- Progress tracking
- Play again functionality

### **Progress Dashboard**
- Learning statistics
- Quiz accuracy tracking
- Favorite signs collection
- Practice recommendations

## 🛠️ Technology Stack

- **Framework**: Next.js 15.3.3
- **Language**: JavaScript/JSX
- **Styling**: Tailwind CSS
- **UI Components**: Custom component library
- **State Management**: React Context API
- **Internationalization**: Custom i18n system
- **Development**: Turbopack for fast builds

## 📱 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Setup signs folder
npm run setup-signs
```

## 🎨 Customization

### **Adding New Signs**
1. Create new component in `src/components/signs/`
2. Add realistic SVG hand illustrations
3. Update `SignTranslator.jsx` with detection logic
4. Add translations to `LanguageContext.jsx`

### **Adding New Languages**
1. Add language code to `LanguageContext.jsx`
2. Provide translations for all UI elements
3. Test language switching functionality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **ASL Community**: For authentic sign language guidance
- **Next.js Team**: For the amazing framework
- **Tailwind CSS**: For the utility-first CSS framework
- **React Community**: For the excellent ecosystem

## 📞 Support

If you have any questions or need help:
- Create an issue in this repository
- Check the documentation in the `docs/` folder
- Review the component examples

---

**Made for the sign language learning community**
