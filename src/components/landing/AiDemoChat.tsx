import { useState, useEffect, useRef } from "react";
import { Bot, User } from "lucide-react";

interface Message {
  role: "user" | "ai";
  text: string;
}

const conversations: Message[][] = [
  [
    { role: "user", text: "What's the capital of Sierra Leone?" },
    { role: "ai", text: "The capital of Sierra Leone is Freetown — a vibrant coastal city founded in 1792, known for its rich history and cultural diversity." },
  ],
  [
    { role: "user", text: "Help me write an email to my team" },
    { role: "ai", text: "Sure! Here's a draft:\n\nHi team, I wanted to share a quick update on our progress this week. We've completed the key milestones and are on track for launch..." },
  ],
  [
    { role: "user", text: "Summarize this article for me" },
    { role: "ai", text: "This article discusses how AI is transforming education across West Africa, highlighting initiatives in Sierra Leone that bring intelligent tutoring to underserved communities." },
  ],
];

export function AiDemoChat() {
  const [convoIndex, setConvoIndex] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [typingText, setTypingText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [phase, setPhase] = useState<"idle" | "user" | "typing" | "done">("idle");
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const convo = conversations[convoIndex];
    
    // Phase: show user message
    timeoutRef.current = setTimeout(() => {
      setVisibleMessages([convo[0]]);
      setPhase("user");
    }, 800);

    return () => clearTimeout(timeoutRef.current);
  }, [convoIndex]);

  useEffect(() => {
    if (phase !== "user") return;
    const convo = conversations[convoIndex];
    const aiText = convo[1].text;

    // Start typing after a pause
    const t = setTimeout(() => {
      setIsTyping(true);
      setPhase("typing");
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setTypingText(aiText.slice(0, i));
        if (i >= aiText.length) {
          clearInterval(interval);
          setIsTyping(false);
          setPhase("done");
        }
      }, 22);
      return () => clearInterval(interval);
    }, 1000);

    return () => clearTimeout(t);
  }, [phase, convoIndex]);

  useEffect(() => {
    if (phase !== "done") return;
    const t = setTimeout(() => {
      setVisibleMessages([]);
      setTypingText("");
      setPhase("idle");
      setConvoIndex((prev) => (prev + 1) % conversations.length);
    }, 3500);
    return () => clearTimeout(t);
  }, [phase]);

  return (
    <div className="w-full rounded-2xl overflow-hidden" style={{
      background: "hsla(0, 0%, 100%, 0.03)",
      border: "1px solid hsla(0, 0%, 100%, 0.06)",
      backdropFilter: "blur(12px)",
    }}>
      {/* Window bar */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b" style={{ borderColor: "hsla(0, 0%, 100%, 0.06)" }}>
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: "hsla(0, 70%, 55%, 0.7)" }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: "hsla(45, 70%, 55%, 0.7)" }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: "hsla(120, 50%, 45%, 0.7)" }} />
        <span className="ml-2 text-[10px] text-white/30 font-medium tracking-wider uppercase">Sangpt AI</span>
      </div>

      {/* Chat area */}
      <div className="p-4 space-y-3 min-h-[160px]">
        {visibleMessages.map((msg, i) => (
          <div key={i} className={`flex items-start gap-2.5 ai-msg-enter ${msg.role === "user" ? "justify-end" : ""}`}>
            {msg.role === "ai" && (
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "hsla(250, 60%, 50%, 0.2)" }}>
                <Bot className="w-3.5 h-3.5 text-white/60" />
              </div>
            )}
            <div className={`rounded-xl px-3 py-2 text-xs leading-relaxed max-w-[85%] ${
              msg.role === "user"
                ? "text-white/90"
                : "text-white/70"
            }`} style={{
              background: msg.role === "user" ? "hsla(0, 0%, 100%, 0.1)" : "hsla(0, 0%, 100%, 0.04)",
              border: `1px solid hsla(0, 0%, 100%, ${msg.role === "user" ? "0.12" : "0.05"})`,
            }}>
              {msg.text}
            </div>
            {msg.role === "user" && (
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "hsla(0, 0%, 100%, 0.1)" }}>
                <User className="w-3.5 h-3.5 text-white/60" />
              </div>
            )}
          </div>
        ))}

        {/* AI typing response */}
        {(isTyping || typingText) && phase === "typing" && (
          <div className="flex items-start gap-2.5 ai-msg-enter">
            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "hsla(250, 60%, 50%, 0.2)" }}>
              <Bot className="w-3.5 h-3.5 text-white/60" />
            </div>
            <div className="rounded-xl px-3 py-2 text-xs leading-relaxed text-white/70 max-w-[85%]" style={{
              background: "hsla(0, 0%, 100%, 0.04)",
              border: "1px solid hsla(0, 0%, 100%, 0.05)",
            }}>
              {typingText}
              <span className="typing-cursor" />
            </div>
          </div>
        )}

        {/* Done state - show full AI message */}
        {phase === "done" && (
          <div className="flex items-start gap-2.5">
            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "hsla(250, 60%, 50%, 0.2)" }}>
              <Bot className="w-3.5 h-3.5 text-white/60" />
            </div>
            <div className="rounded-xl px-3 py-2 text-xs leading-relaxed text-white/70 max-w-[85%]" style={{
              background: "hsla(0, 0%, 100%, 0.04)",
              border: "1px solid hsla(0, 0%, 100%, 0.05)",
            }}>
              {typingText}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
