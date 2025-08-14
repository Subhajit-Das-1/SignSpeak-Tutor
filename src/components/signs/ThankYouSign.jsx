"use client";

import { Card } from "@/components/ui/card";

export default function ThankYouSign() {
  return (
    <Card className="w-full p-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-primary mb-2">THANK YOU</h3>
        <p className="text-muted-foreground">American Sign Language (ASL)</p>
      </div>
      
      <div className="flex justify-center items-center mb-6">
        <div className="text-center">
          <div className="relative w-40 h-40 mx-auto mb-4">
            {/* More realistic hand illustration */}
            <svg viewBox="0 0 140 160" className="w-full h-full">
              {/* Hand outline - more realistic shape */}
              <path d="M30 140 L30 70 Q30 40 50 40 L90 40 Q110 40 110 70 L110 140 Q110 150 100 150 L40 150 Q30 150 30 140 Z" 
                    fill="none" stroke="currentColor" strokeWidth="2"/>
              
              {/* Palm details and creases */}
              <path d="M40 90 Q50 95 60 90 Q70 95 80 90" stroke="currentColor" strokeWidth="1" fill="none"/>
              <path d="M45 100 Q55 105 65 100 Q75 105 85 100" stroke="currentColor" strokeWidth="1" fill="none"/>
              
              {/* Fingers extended forward with natural curves */}
              <path d="M45 40 L45 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              <path d="M65 40 L65 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              <path d="M85 40 L85 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              <path d="M105 40 L105 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              
              {/* Thumb extended naturally */}
              <path d="M35 60 Q30 55 35 50 Q40 45 45 50" stroke="currentColor" strokeWidth="4" fill="none"/>
              
              {/* Finger joints for realism */}
              <circle cx="45" cy="25" r="2" fill="currentColor"/>
              <circle cx="65" cy="25" r="2" fill="currentColor"/>
              <circle cx="85" cy="25" r="2" fill="currentColor"/>
              <circle cx="105" cy="25" r="2" fill="currentColor"/>
              
              {/* Knuckle details */}
              <circle cx="45" cy="35" r="1.5" fill="currentColor"/>
              <circle cx="65" cy="35" r="1.5" fill="currentColor"/>
              <circle cx="85" cy="35" r="1.5" fill="currentColor"/>
              <circle cx="105" cy="35" r="1.5" fill="currentColor"/>
              
              {/* Movement arrow showing forward motion */}
              <path d="M120 80 L130 80 L125 75 M130 80 L125 85" 
                    stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-sm font-medium">Hand extended forward from chin</p>
          <p className="text-xs text-muted-foreground mt-1">Touch chin, then move forward and down</p>
        </div>
      </div>
      
      <div className="text-center text-sm text-muted-foreground">
        <p><strong>THANK YOU:</strong> Touch your chin with your fingertips, then move your hand forward and down.</p>
        <p className="mt-2">This is one of the most common and important signs in ASL!</p>
      </div>
    </Card>
  );
}
