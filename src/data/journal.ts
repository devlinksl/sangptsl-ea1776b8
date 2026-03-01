import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";
import blog5 from "@/assets/blog-5.jpg";
import blog6 from "@/assets/blog-6.jpg";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
  image?: string;
  content: string[];
}

export const categories = [
  "All",
  "Product Updates",
  "AI Explained",
  "Behind Sangpt",
  "Responsible AI",
  "Guides & Tutorials",
];

export const articles: Article[] = [
  {
    slug: "sangpt-2-0-the-future-of-personal-ai",
    title: "Sangpt 2.0 — Sierra Leone's AI Goes Global",
    excerpt:
      "After two years of development in Freetown and thousands of hours of community feedback, we're thrilled to announce the general availability of Sangpt 2.0 on the App Store and Google Play.",
    category: "Product Updates",
    date: "February 20, 2026",
    readTime: "8 min read",
    featured: true,
    image: blog2,
    content: [
      "Today marks a milestone for the entire Dev-Link team in Freetown, Sierra Leone. Sangpt 2.0 is officially available on the Apple App Store and Google Play Store — and it represents the most ambitious release in our project's history.",
      "When we started building Sangpt in early 2024 from our office in Freetown, we had a simple thesis: Sierra Leone can build world-class AI. Two years later, that thesis has been validated by over 10,000 active users who rely on Sangpt every day.",
      "So what's new in 2.0? Let's break it down.",
      "First, we've completely rebuilt the conversation engine. Sangpt 2.0 features a new context management system that maintains coherence across conversations spanning thousands of messages. Whether you're working on a research project or managing your business, Sangpt keeps track of every detail.",
      "Second, the plugin ecosystem is now live. We've partnered with developers across Africa and beyond to launch integrations for popular tools like Google Calendar, WhatsApp Business, and more.",
      "Third, we've introduced Workflows — a powerful automation system that lets you chain multiple AI actions together. You can create workflows like 'Every morning, summarize my unread messages and draft a daily plan' — all running privately on your device.",
      "Performance has improved dramatically. Response times are 40% faster, and the app runs beautifully on both flagship and budget Android devices — because we know that accessibility matters in Sierra Leone and across Africa.",
      "We're incredibly grateful to our community across Sierra Leone and the diaspora. Your feedback has shaped every aspect of this release. Sangpt 2.0 isn't just our product — it's Sierra Leone's product.",
    ],
  },
  {
    slug: "how-local-ai-models-protect-your-privacy",
    title: "How Sangpt Protects Your Privacy",
    excerpt:
      "Understanding the technical architecture behind Sangpt's privacy-first approach, and why data protection matters for Sierra Leonean users.",
    category: "AI Explained",
    date: "February 12, 2026",
    readTime: "6 min read",
    image: blog3,
    content: [
      "Every time you type a message into a cloud-based AI assistant, your words travel across the internet to a remote server — often in a country far from Sierra Leone. They're processed, logged, and stored. For Sierra Leonean users working with sensitive information, this is a serious concern.",
      "Sangpt takes a fundamentally different approach. Our privacy architecture ensures your conversations are encrypted and protected. We built Sangpt with the understanding that trust is everything — especially in a market where users are putting their faith in homegrown technology.",
      "But how does it work? Let's dive into the architecture.",
      "At the heart of Sangpt is a combination of on-device processing and secure cloud inference. We use model optimization techniques to ensure fast responses even on mid-range smartphones popular across Sierra Leone.",
      "Privacy isn't just a feature we bolt on. It's an architectural decision that influences every aspect of the product. Our encryption uses AES-256 for data at rest and TLS 1.3 for all communications.",
      "We believe this approach is especially important for African users. As AI adoption grows across the continent, the companies building these tools must prioritize data sovereignty and user trust. Dev-Link is committed to setting that standard from Sierra Leone.",
    ],
  },
  {
    slug: "building-sangpt-lessons-from-freetown",
    title: "Building Sangpt: Lessons from Freetown",
    excerpt:
      "A candid look at the challenges and triumphs of building a world-class AI product in Sierra Leone.",
    category: "Behind Sangpt",
    date: "January 28, 2026",
    readTime: "10 min read",
    image: blog4,
    content: [
      "Two years ago, Sangpt was an idea scribbled on a whiteboard in our small office in Freetown. Today, it's a mobile application on the App Store and Google Play used by thousands. The journey between those two points was anything but straightforward.",
      "Building a tech company in Sierra Leone comes with unique challenges. Internet connectivity can be unreliable. Access to cloud computing resources requires creative solutions. Finding talent means competing with opportunities abroad. But these challenges also forced us to innovate in ways we never expected.",
      "Lesson 1: Build for constraints first. Because we knew many of our users would have intermittent internet, we designed Sangpt's core features to work offline from day one. This constraint-driven approach actually made the product better for everyone.",
      "Lesson 2: The Sierra Leonean market is hungry for innovation. When we launched our beta, the response was overwhelming. People were excited not just about the product, but about the fact that it was built here, by Sierra Leoneans.",
      "Lesson 3: Mobile-first isn't optional in Africa. We made the decision early to focus exclusively on mobile. In Sierra Leone, smartphone penetration far exceeds desktop usage. The App Store and Google Play are where our users are.",
      "Lesson 4: Community is everything. Our users aren't just customers — they're partners. From university students in Freetown to business owners in Bo, our community has shaped every major feature in Sangpt.",
      "We're still learning, every day. If you're building a tech product in Africa, know that it's possible, it's rewarding, and the world is watching. Sierra Leone has something to offer the global tech landscape, and Sangpt is proof.",
    ],
  },
  {
    slug: "responsible-ai-our-ethical-framework",
    title: "Responsible AI: Dev-Link's Ethical Framework",
    excerpt:
      "How Dev-Link approaches the ethical challenges of AI development from our base in Sierra Leone.",
    category: "Responsible AI",
    date: "January 15, 2026",
    readTime: "7 min read",
    image: blog5,
    content: [
      "Building AI in Sierra Leone gives us a unique perspective on responsible technology. We're not just building for Silicon Valley — we're building for communities where trust in technology is still being established.",
      "Our ethical framework is built on four pillars: Transparency, Fairness, Privacy, and Accountability.",
      "Transparency means that users should always know when they're interacting with AI and how it arrives at its responses. Sangpt includes features that help users understand and verify the AI's output.",
      "Fairness means actively working to ensure our AI serves all Sierra Leoneans equitably — regardless of education level, language preference, or location. We conduct regular testing across diverse user groups.",
      "Privacy means giving users genuine control over their data. In a country where digital literacy is still growing, we have a special responsibility to protect our users' information by default.",
      "Accountability means taking responsibility for our technology's impact on Sierra Leonean society. We've established an internal ethics review for new features and maintain open communication with our user community.",
      "We don't claim to have all the answers. But building from Sierra Leone gives us a grounded perspective on what responsible AI truly means in practice — not just in theory.",
    ],
  },
  {
    slug: "getting-started-with-sangpt-complete-guide",
    title: "Getting Started with Sangpt: A Complete Guide",
    excerpt:
      "Everything you need to know to download, set up, and start using Sangpt on your iPhone or Android device.",
    category: "Guides & Tutorials",
    date: "February 1, 2026",
    readTime: "12 min read",
    image: blog6,
    content: [
      "Welcome to Sangpt — Sierra Leone's AI companion! Whether you're downloading for the first time or upgrading, this guide will walk you through everything you need to get started.",
      "Step 1: Download the App. Open the Apple App Store (iPhone) or Google Play Store (Android) and search for 'Sangpt'. Tap Install. The download is about 120 MB on iOS and 95 MB on Android.",
      "Step 2: First Launch. When you open Sangpt for the first time, you'll see a setup wizard. Choose your language, theme (light or dark), and privacy settings. All of these can be changed later.",
      "Step 3: Your First Conversation. Tap 'New Chat' and start typing. Sangpt understands natural language, so you can ask questions, give instructions, or just have a conversation. Try asking 'What can you do?' to see a summary of capabilities.",
      "Step 4: Exploring Features. Sangpt includes powerful features beyond chat. The Knowledge Base lets you ask questions about documents. The Task Manager helps you organize to-dos. The Writing Assistant helps you draft and improve text.",
      "Step 5: Offline Mode. Sangpt's core features work without internet — perfect for areas with limited connectivity. Your conversations are stored locally on your device.",
      "Step 6: Customizing the AI. Over time, Sangpt learns your preferences. You can accelerate this by providing feedback (thumbs up/down), setting custom instructions, and configuring your use case.",
      "That's it! You're now ready to use Sangpt. For more help, visit our Journal or reach out to the Dev-Link team. We're here for you — from Freetown, with love. 🇸🇱",
    ],
  },
  {
    slug: "sangpt-plugin-ecosystem-overview",
    title: "The Sangpt Plugin Ecosystem: Built for Africa",
    excerpt:
      "A deep dive into how plugins work in Sangpt 2.0 and how they're designed for the needs of Sierra Leonean and African users.",
    category: "Product Updates",
    date: "February 8, 2026",
    readTime: "9 min read",
    image: blog2,
    content: [
      "One of the most requested features since Sangpt's earliest beta in Freetown has been extensibility. Users wanted to connect Sangpt to the tools they already use. With Sangpt 2.0, we're delivering on that vision.",
      "Plugins in Sangpt are lightweight extensions that add new capabilities. They can integrate with external services, add new UI elements, or extend the AI's abilities. Each plugin runs in a sandboxed environment with granular permission controls.",
      "Installing a plugin is simple. Open the Plugin section in Sangpt, browse or search, and tap 'Install.' Most plugins are ready to use immediately.",
      "We've launched with plugins covering popular integrations including WhatsApp Business, Google Calendar, and productivity tools commonly used across Sierra Leone and West Africa.",
      "We're also seeing exciting community-built plugins for local use cases — mobile money integration helpers, academic research tools for university students, and business management assistants for SMEs across Sierra Leone.",
      "The plugin marketplace includes user reviews and a verification badge for security-reviewed plugins. We take security seriously — every plugin goes through review before publication.",
      "We believe plugins are key to Sangpt's future. By enabling the community to extend the platform, we're ensuring Sangpt can adapt to the unique needs of Sierra Leonean users and beyond.",
    ],
  },
];
