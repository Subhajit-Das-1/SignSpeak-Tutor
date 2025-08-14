"use client";

import { Card } from "@/components/ui/card";

export default function PleaseSign() {
  return (
    <Card className="w-full p-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-primary mb-2">PLEASE</h3>
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
              
              {/* Flat hand with fingers together and slightly curved */}
              <path d="M35 40 Q30 35 35 30 Q40 25 45 30" stroke="currentColor" strokeWidth="3" fill="none"/>
              <path d="M55 40 Q50 35 55 30 Q60 25 65 30" stroke="currentColor" strokeWidth="3" fill="none"/>
              <path d="M75 40 Q70 35 75 30 Q80 25 85 30" stroke="currentColor" strokeWidth="3" fill="none"/>
              <path d="M95 40 Q90 35 95 30 Q100 25 105 30" stroke="currentColor" strokeWidth="3" fill="none"/>
              
              {/* Thumb extended naturally */}
              <path d="M35 60 Q30 55 35 50 Q40 45 45 50" stroke="currentColor" strokeWidth="4" fill="none"/>
              
              {/* Finger joints for realism */}
              <circle cx="40" cy="30" r="2" fill="currentColor"/>
              <circle cx="60" cy="30" r="2" fill="currentColor"/>
              <circle cx="80" cy="30" r="2" fill="currentColor"/>
              <circle cx="100" cy="30" r="2" fill="currentColor"/>
              
              {/* Knuckle details */}
              <circle cx="40" cy="35" r="1.5" fill="currentColor"/>
              <circle cx="60" cy="35" r="1.5" fill="currentColor"/>
              <circle cx="80" cy="35" r="1.5" fill="currentColor"/>
              <circle cx="100" cy="35" r="1.5" fill="currentColor"/>
              
              {/* Circular motion indicator */}
              <path d="M70 70 Q80 60 90 70 Q80 80 70 70" 
                    stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
              <path d="M85 70 L90 65 M90 70 L85 75" 
                    stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-sm font-medium">Flat hand moving in circular motion</p>
          <p className="text-xs text-muted-foreground mt-1">Place on chest, move in circles</p>
        </div>
      </div>
      
      <div className="text-center text-sm text-muted-foreground">
        <p><strong>PLEASE:</strong> Place your flat hand on your chest and move it in a circular motion.</p>
        <p className="mt-2">This polite gesture is essential for respectful communication!</p>
      </div>
    </Card>
  );
}
