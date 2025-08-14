"use client";

import { Card } from "@/components/ui/card";

export default function GoodBadSign() {
  return (
    <Card className="w-full p-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-primary mb-2">GOOD & BAD</h3>
        <p className="text-muted-foreground">American Sign Language (ASL)</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        {/* GOOD Sign */}
        <div className="text-center">
          <h4 className="text-lg font-semibold mb-4 text-green-600">GOOD</h4>
          <div className="relative w-36 h-36 mx-auto mb-4">
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
              
              {/* Chin position indicator */}
              <circle cx="70" cy="25" r="3" fill="currentColor" opacity="0.3"/>
              <path d="M70 25 L70 15" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2"/>
              
              {/* Downward motion indicator */}
              <path d="M120 60 L120 80 M115 75 L120 80 L125 75" 
                    stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-sm font-medium">Flat hand touching chin</p>
          <p className="text-xs text-muted-foreground mt-1">Move hand down and away</p>
        </div>

        {/* BAD Sign */}
        <div className="text-center">
          <h4 className="text-lg font-semibold mb-4 text-red-600">BAD</h4>
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
              
              {/* Thumb pointing down with natural curve */}
              <path d="M35 60 L35 90" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              
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
              
              {/* Chin position indicator */}
              <circle cx="70" cy="25" r="3" fill="currentColor" opacity="0.3"/>
              <path d="M70 25 L70 15" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2"/>
              
              {/* Downward motion indicator */}
              <path d="M120 60 L120 80 M115 75 L120 80 L125 75" 
                    stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-sm font-medium">Fist with thumb pointing down</p>
          <p className="text-xs text-muted-foreground mt-1">Move fist down and away</p>
        </div>
      </div>
      
      <div className="text-center text-sm text-muted-foreground">
        <p><strong>GOOD:</strong> Touch your chin with your flat hand, then move it down and away.</p>
        <p><strong>BAD:</strong> Make a fist with your thumb pointing down, then move it down and away.</p>
        <p className="mt-2">These signs help express approval and disapproval!</p>
      </div>
    </Card>
  );
}
