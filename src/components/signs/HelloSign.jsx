"use client";

import { Card } from "@/components/ui/card";

// ASL Hand Gesture Components with more realistic illustrations
const ASLHand = ({ letter, className = "" }) => {
  const getHandSVG = (letter) => {
    switch (letter.toUpperCase()) {
      case 'H':
        return (
          <svg viewBox="0 0 120 140" className={`w-16 h-20 ${className}`}>
            {/* Hand outline - more realistic shape */}
            <path d="M25 120 L25 60 Q25 35 45 35 L75 35 Q95 35 95 60 L95 120 Q95 130 85 130 L35 130 Q25 130 25 120 Z" 
                  fill="none" stroke="currentColor" strokeWidth="2"/>
            {/* Palm details */}
            <path d="M35 80 Q45 85 55 80 Q65 85 75 80" stroke="currentColor" strokeWidth="1" fill="none"/>
            {/* H gesture: index and middle fingers extended straight */}
            <path d="M40 35 L40 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            <path d="M60 35 L60 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            {/* Ring and pinky fingers curled naturally */}
            <path d="M80 35 Q85 30 80 25 Q75 20 70 25" stroke="currentColor" strokeWidth="3" fill="none"/>
            <path d="M90 40 Q95 35 90 30 Q85 25 80 30" stroke="currentColor" strokeWidth="3" fill="none"/>
            {/* Thumb positioned naturally */}
            <path d="M30 50 Q25 45 30 40 Q35 35 40 40" stroke="currentColor" strokeWidth="3" fill="none"/>
            {/* Finger joints for realism */}
            <circle cx="40" cy="25" r="2" fill="currentColor"/>
            <circle cx="60" cy="25" r="2" fill="currentColor"/>
          </svg>
        );
      case 'E':
        return (
          <svg viewBox="0 0 120 140" className={`w-16 h-20 ${className}`}>
            {/* Hand outline - more realistic shape */}
            <path d="M25 120 L25 60 Q25 35 45 35 L75 35 Q95 35 95 60 L95 120 Q95 130 85 130 L35 130 Q25 130 25 120 Z" 
                  fill="none" stroke="currentColor" strokeWidth="2"/>
            {/* Palm details */}
            <path d="M35 80 Q45 85 55 80 Q65 85 75 80" stroke="currentColor" strokeWidth="1" fill="none"/>
            {/* E gesture: all fingers curled naturally */}
            <path d="M40 35 Q35 30 40 25 Q45 20 50 25" stroke="currentColor" strokeWidth="3" fill="none"/>
            <path d="M60 35 Q55 30 60 25 Q65 20 70 25" stroke="currentColor" strokeWidth="3" fill="none"/>
            <path d="M80 35 Q75 30 80 25 Q85 20 90 25" stroke="currentColor" strokeWidth="3" fill="none"/>
            <path d="M90 40 Q85 35 90 30 Q95 25 100 30" stroke="currentColor" strokeWidth="3" fill="none"/>
            {/* Thumb on palm - more realistic position */}
            <circle cx="45" cy="85" r="4" fill="currentColor"/>
            {/* Finger tips showing curled position */}
            <circle cx="45" cy="30" r="2" fill="currentColor"/>
            <circle cx="65" cy="30" r="2" fill="currentColor"/>
            <circle cx="85" cy="30" r="2" fill="currentColor"/>
            <circle cx="95" cy="35" r="2" fill="currentColor"/>
          </svg>
        );
      case 'L':
        return (
          <svg viewBox="0 0 120 140" className={`w-16 h-20 ${className}`}>
            {/* Hand outline - more realistic shape */}
            <path d="M25 120 L25 60 Q25 35 45 35 L75 35 Q95 35 95 60 L95 120 Q95 130 85 130 L35 130 Q25 130 25 120 Z" 
                  fill="none" stroke="currentColor" strokeWidth="2"/>
            {/* Palm details */}
            <path d="M35 80 Q45 85 55 80 Q65 85 75 80" stroke="currentColor" strokeWidth="1" fill="none"/>
            {/* L gesture: thumb and index extended upward */}
            <path d="M35 50 L35 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            <path d="M50 35 L50 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            {/* Middle, ring, and pinky fingers curled */}
            <path d="M70 35 Q65 30 70 25 Q75 20 80 25" stroke="currentColor" strokeWidth="3" fill="none"/>
            <path d="M80 35 Q75 30 80 25 Q85 20 90 25" stroke="currentColor" strokeWidth="3" fill="none"/>
            <path d="M90 40 Q85 35 90 30 Q95 25 100 30" stroke="currentColor" strokeWidth="3" fill="none"/>
            {/* Finger joints for realism */}
            <circle cx="35" cy="25" r="2" fill="currentColor"/>
            <circle cx="50" cy="20" r="2" fill="currentColor"/>
            <circle cx="75" cy="30" r="2" fill="currentColor"/>
            <circle cx="85" cy="30" r="2" fill="currentColor"/>
            <circle cx="95" cy="35" r="2" fill="currentColor"/>
          </svg>
        );
      case 'O':
        return (
          <svg viewBox="0 0 120 140" className={`w-16 h-20 ${className}`}>
            {/* Hand outline - more realistic shape */}
            <path d="M25 120 L25 60 Q25 35 45 35 L75 35 Q95 35 95 60 L95 120 Q95 130 85 130 L35 130 Q25 130 25 120 Z" 
                  fill="none" stroke="currentColor" strokeWidth="2"/>
            {/* Palm details */}
            <path d="M35 80 Q45 85 55 80 Q65 85 75 80" stroke="currentColor" strokeWidth="1" fill="none"/>
            {/* O gesture: all fingers curled to form circle */}
            <ellipse cx="60" cy="40" rx="20" ry="15" 
                     fill="none" stroke="currentColor" strokeWidth="3"/>
            {/* Individual finger curves showing the O shape */}
            <path d="M40 40 Q35 35 40 30 Q45 25 50 30" stroke="currentColor" strokeWidth="3" fill="none"/>
            <path d="M80 40 Q85 35 80 30 Q75 25 70 30" stroke="currentColor" strokeWidth="3" fill="none"/>
            <path d="M50 35 Q45 30 50 25 Q55 20 60 25" stroke="currentColor" strokeWidth="3" fill="none"/>
            <path d="M70 35 Q75 30 70 25 Q65 20 60 25" stroke="currentColor" strokeWidth="3" fill="none"/>
            {/* Thumb positioned to complete the circle */}
            <path d="M35 50 Q30 45 35 40 Q40 35 45 40" stroke="currentColor" strokeWidth="3" fill="none"/>
            {/* Finger tips showing the O formation */}
            <circle cx="45" cy="30" r="2" fill="currentColor"/>
            <circle cx="55" cy="25" r="2" fill="currentColor"/>
            <circle cx="65" cy="25" r="2" fill="currentColor"/>
            <circle cx="75" cy="30" r="2" fill="currentColor"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center">
      {getHandSVG(letter)}
      <span className="text-sm font-medium mt-1">{letter}</span>
    </div>
  );
};

export default function HelloSign() {
  return (
    <Card className="w-full p-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-primary mb-2">HELLO</h3>
        <p className="text-muted-foreground">American Sign Language (ASL)</p>
      </div>
      
      <div className="flex justify-center items-center gap-4 mb-6">
        <ASLHand letter="H" />
        <ASLHand letter="E" />
        <ASLHand letter="L" />
        <ASLHand letter="L" />
        <ASLHand letter="O" />
      </div>
      
      <div className="text-center text-sm text-muted-foreground">
        <p>Each hand shows the ASL finger spelling for the letters in "HELLO"</p>
        <p className="mt-2">
          <strong>H:</strong> Index and middle fingers extended together<br/>
          <strong>E:</strong> All fingers curled toward palm<br/>
          <strong>L:</strong> Thumb and index finger extended upward<br/>
          <strong>O:</strong> All fingers and thumb curled to form a circle
        </p>
      </div>
    </Card>
  );
}
