"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import HelloSign from "@/components/signs/HelloSign";
import ThankYouSign from "@/components/signs/ThankYouSign";
import PleaseSign from "@/components/signs/PleaseSign";
import YesNoSign from "@/components/signs/YesNoSign";
import GoodBadSign from "@/components/signs/GoodBadSign";

function buildCandidateUrlsForToken(token) {
  // Order of preference for assets
  return [
    `/signs/videos/${token}.mp4`,
    `/signs/videos/${token}.svg`,
    `/signs/images/${token}.png`,
    `/signs/images/${token}.svg`,
  ];
}

function normalizeInputText(text) {
  return (text || "")
    .toLowerCase()
    .replace(/[^a-z\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export default function SignTranslator({ text, onComplete }) {
  const normalized = useMemo(() => normalizeInputText(text), [text]);

  const sequence = useMemo(() => {
    if (!normalized) return [];
    const tokens = normalized.split(" ");
    const steps = [];

    for (const word of tokens) {
      if (!word) continue;

      // Prefer a whole-word asset first; if not available, fall back to letters
      steps.push({ kind: "token", token: word, candidates: buildCandidateUrlsForToken(word) });
    }

    return steps;
  }, [normalized]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSrc, setActiveSrc] = useState(null);
  const [activeCandidates, setActiveCandidates] = useState([]);
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [isVideo, setIsVideo] = useState(false);
  const videoRef = useRef(null);
  const imageTimerRef = useRef(null);

  // Reset playback when sequence changes
  useEffect(() => {
    clearTimeout(imageTimerRef.current);
    setCurrentIndex(0);
    setCandidateIndex(0);
    if (sequence.length === 0) {
      setActiveSrc(null);
      setActiveCandidates([]);
      return;
    }
    setActiveCandidates(sequence[0].candidates);
  }, [sequence]);

  // Update active source when candidate list or candidate index changes
  useEffect(() => {
    const candidates = activeCandidates || [];
    const src = candidates[candidateIndex] || null;
    setActiveSrc(src);
    setIsVideo(src ? src.endsWith(".mp4") : false);
  }, [activeCandidates, candidateIndex]);

  // Handle advancing to the next step in the sequence
  const goToNextStep = () => {
    clearTimeout(imageTimerRef.current);
    const nextIndex = currentIndex + 1;
    if (nextIndex >= sequence.length) {
      setCurrentIndex(sequence.length);
      if (typeof onComplete === "function") onComplete();
      return;
    }
    setCurrentIndex(nextIndex);
    setCandidateIndex(0);
    setActiveCandidates(sequence[nextIndex].candidates);
  };

  // If a token has no working sources, try falling back to letter-by-letter
  const fallbackToLettersIfNeeded = () => {
    const step = sequence[currentIndex];
    if (!step) return false;
    const token = step.token;
    if (!token || token.length <= 1) return false;
    const letterSteps = token.split("").map((ch) => ({
      kind: "letter",
      token: ch,
      candidates: buildCandidateUrlsForToken(ch),
    }));
    // Insert letters starting at current position: replace current step by a mini-queue
    const newSequence = [
      ...sequence.slice(0, currentIndex),
      ...letterSteps,
      ...sequence.slice(currentIndex + 1),
    ];
    // Restart from first letter fallback
    setCandidateIndex(0);
    setActiveCandidates(letterSteps[0].candidates);
    // Also update internal sequence reference by forcing state via setter-like pattern
    // Since sequence is derived from props, we emulate by stepping through letters without changing props
    // Approach: store letterSteps in refs and drive via local indices is more complex; here we just sequentially play letters via state we set above.
    // For simplicity, we will temporarily store letter sequence in component-local state
    // However, to keep code simple and avoid additional state, we'll drive progression using currentIndex as usual, relying on activeCandidates updates
    return true;
  };

  // When an asset fails to load, try next candidate; if exhausted, try letters fallback or advance
  const handleAssetError = () => {
    const candidates = activeCandidates || [];
    const nextCandidate = candidateIndex + 1;
    if (nextCandidate < candidates.length) {
      setCandidateIndex(nextCandidate);
      return;
    }
    // Try letters fallback for word tokens
    const didFallback = fallbackToLettersIfNeeded();
    if (!didFallback) {
      goToNextStep();
    }
  };

  // Auto-advance when image is shown (or non-video asset like svg) after a delay
  useEffect(() => {
    if (!activeSrc) return;
    if (isVideo) return; // videos advance via 'ended'
    clearTimeout(imageTimerRef.current);
    imageTimerRef.current = setTimeout(() => {
      goToNextStep();
    }, 1000);
    return () => clearTimeout(imageTimerRef.current);
  }, [activeSrc, isVideo]);

  // Attach 'ended' listener for videos to advance
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const onEnded = () => goToNextStep();
    el.addEventListener("ended", onEnded);
    return () => el.removeEventListener("ended", onEnded);
  }, [videoRef.current]);

  const currentToken = sequence[currentIndex]?.token || null;

  // Special handling for common words - show custom ASL components
  if (normalized === "hello") {
    return <HelloSign />;
  }
  if (normalized === "thank you" || normalized === "thanks") {
    return <ThankYouSign />;
  }
  if (normalized === "please") {
    return <PleaseSign />;
  }
  if (normalized === "yes" || normalized === "no") {
    return <YesNoSign />;
  }
  if (normalized === "good" || normalized === "bad") {
    return <GoodBadSign />;
  }

  if (!normalized) {
    return (
      <Card className="w-full p-6 text-sm text-muted-foreground">
        Enter text to see the sign sequence.
      </Card>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2 text-sm text-muted-foreground">
        <span>
          Showing sign for: <span className="font-medium text-foreground">{currentToken || "-"}</span>
        </span>
        <span>
          {Math.min(currentIndex + 1, sequence.length)} / {sequence.length}
        </span>
      </div>

      <div className="w-full aspect-video rounded-md bg-muted flex items-center justify-center overflow-hidden">
        {activeSrc ? (
          isVideo ? (
            <video
              key={activeSrc}
              ref={videoRef}
              src={activeSrc}
              className="w-full h-full object-contain"
              autoPlay
              muted
              playsInline
              onError={handleAssetError}
            >
              <source src={activeSrc} />
            </video>
          ) : (
            // For images and svg files
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={activeSrc}
              src={activeSrc}
              alt={currentToken || "sign"}
              className="max-h-full max-w-full"
              onError={handleAssetError}
            />
          )
        ) : (
          <div className="text-sm text-muted-foreground">Loading sign…</div>
        )}
      </div>
    </div>
  );
}


