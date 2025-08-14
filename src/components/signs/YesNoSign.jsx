"use client";

import { Card } from "@/components/ui/card";

export default function YesNoSign() {
  return (
    <Card className="w-full p-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-primary mb-2">YES & NO</h3>
        <p className="text-muted-foreground">American Sign Language (ASL)</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        {/* YES Sign */}
        <div className="text-center">
          <h4 className="text-lg font-semibold mb-4 text-green-600">YES</h4>
          <div className="relative w-36 h-36 mx-auto mb-4">
            <svg viewBox="0 0 140 160" className="w-full h-full">
              {/* Hand outline - more realistic shape */}
              <path d="M30 140 L30 70 Q30 40 50 40 L90 40 Q110 40 110 70 L110 140 Q110 150 100 150 L40 150 Q30 150 30 140 Z" 
                    fill="none" stroke="currentColor" strokeWidth="2"/>
              
              {/* Palm details and creases */}
              <path d="M40 90 Q50 95 60 90 Q70 95 80 90" stroke="currentColor" strokeWidth="1" fill="none"/>
              
              {/* Fist with fingers curled naturally */}
              <path d="M45 40 Q40 35 45 30 Q50 25 55 30" stroke="currentColor" strokeWidth="3" fill="none"/>
              <path d="M65 40 Q60 35 65 30 Q70 25 75 30" stroke="currentColor" strokeWidth="3" fill="none"/>
              <path d="M85 40 Q80 35 85 30 Q90 25 95 30" stroke="currentColor" strokeWidth="3" fill="none"/>
              <path d="M95 45 Q90 40 95 35 Q100 30 105 35" stroke="currentColor" strokeWidth="3" fill="none"/>
              
              {/* Thumb pointing up with natural curve */}
              <path d="M35 60 L35 30" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              
              {/* Finger joints for realism */}
              <circle cx="50" cy="30" r="2" fill="currentColor"/>
              <circle cx="70" cy="30" r="2" fill="currentColor"/>
              <circle cx="90" cy="30" r="2" fill="currentColor"/>
              <circle cx="100" cy="35" r="2" fill="currentColor"/>
              
              {/* Knuckle details */}
              <circle cx="50" cy="35" r="1.5" fill="currentColor"/>
              <circle cx="70" cy="35" r="1.5" fill="currentColor"/>
              <circle cx="90" cy="35" r="1.5" fill="currentColor"/>
              <circle cx="100" cy="40" r="1.5" fill="currentColor"/>
              
              {/* Up and down motion indicator */}
              <path d="M120 60 L120 40 M115 45 L120 40 L125 45" 
                    stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-sm font-medium">Fist with thumb pointing up</p>
          <p className="text-xs text-muted-foreground mt-1">Move fist up and down</p>
        </div>

        {/* NO Sign */}
        <div className="text-center">
          <h4 className="text-lg font-semibold mb-4 text-red-600">NO</h4>
          <div className="relative w-36 h-36 mx-auto mb-4">
            <svg viewBox="0 0 140 160" className="w-full h-full">
              {/* Hand outline - more realistic shape */}
              <path d="M30 140 L30 70 Q30 40 50 40 L90 40 Q110 40 110 70 L110 140 Q110 150 100 150 L40 150 Q30 150 30 140 Z" 
                    fill="none" stroke="currentColor" strokeWidth="2"/>
              
              {/* Palm details and creases */}
              <path d="M40 90 Q50 95 60 90 Q70 95 80 90" stroke="currentColor" strokeWidth="1" fill="none"/>
              
              {/* Index and middle finger extended with natural curves */}
              <path d="M45 40 L45 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              <path d="M65 40 L65 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              
              {/* Ring and pinky fingers curled naturally */}
              <path d="M85 40 Q80 35 85 30 Q90 25 95 30" stroke="currentColor" strokeWidth="3" fill="none"/>
              <path d="M95 45 Q90 40 95 35 Q100 30 105 35" stroke="currentColor" strokeWidth="3" fill="none"/>
              
              {/* Thumb extended naturally */}
              <path d="M35 60 Q30 55 35 50 Q40 45 45 50" stroke="currentColor" strokeWidth="4" fill="none"/>
              
              {/* Finger joints for realism */}
              <circle cx="45" cy="25" r="2" fill="currentColor"/>
              <circle cx="65" cy="25" r="2" fill="currentColor"/>
              <circle cx="90" cy="30" r="2" fill="currentColor"/>
              <circle cx="100" cy="35" r="2" fill="currentColor"/>
              
              {/* Knuckle details */}
              <circle cx="45" cy="35" r="1.5" fill="currentColor"/>
              <circle cx="65" cy="35" r="1.5" fill="currentColor"/>
              <circle cx="90" cy="35" r="1.5" fill="currentColor"/>
              <circle cx="100" cy="40" r="1.5" fill="currentColor"/>
              
              {/* Side to side motion indicator */}
              <path d="M120 60 L140 60 M135 55 L140 60 L135 65" 
                    stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-sm font-medium">Index and middle finger extended</p>
          <p className="text-xs text-muted-foreground mt-1">Move fingers side to side</p>
        </div>
      </div>
      
      <div className="text-center text-sm text-muted-foreground">
        <p><strong>YES:</strong> Make a fist with your thumb pointing up, then move your hand up and down.</p>
        <p><strong>NO:</strong> Extend your index and middle fingers, then move them side to side.</p>
        <p className="mt-2">These are fundamental signs for basic communication!</p>
      </div>
    </Card>
  );
}
