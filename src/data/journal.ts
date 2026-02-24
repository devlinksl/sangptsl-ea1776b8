export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
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
    title: "Sangpt 2.0 — The Future of Personal AI Is Here",
    excerpt:
      "After two years of development and thousands of hours of community feedback, we're thrilled to announce the general availability of Sangpt 2.0. Here's everything that's new.",
    category: "Product Updates",
    date: "February 20, 2026",
    readTime: "8 min read",
    featured: true,
    content: [
      "Today marks a milestone for the entire Dev-Link team. Sangpt 2.0 is officially available for Windows, macOS, and Linux — and it represents the most ambitious release in our project's history.",
      "When we started building Sangpt in early 2024, we had a simple thesis: AI assistants shouldn't require you to sacrifice your privacy for intelligence. Two years later, that thesis has been validated by over 10,000 active users who rely on Sangpt every day for tasks ranging from academic research to enterprise workflow automation.",
      "So what's new in 2.0? Let's break it down.",
      "First, we've completely rebuilt the conversation engine. Sangpt 2.0 features a new context management system that maintains coherence across conversations spanning thousands of messages. Whether you're working on a research project over several weeks or debugging a complex codebase in a single session, Sangpt keeps track of every detail.",
      "Second, the plugin ecosystem is now live. We've partnered with over 40 developers to launch integrations for popular tools like Google Calendar, Notion, GitHub, Slack, and Obsidian. Installing a plugin takes seconds, and each one is vetted for security and performance before it's published to the marketplace.",
      "Third, we've introduced Workflows — a powerful automation system that lets you chain multiple AI actions together. Think of it as Zapier, but local-first and AI-native. You can create workflows like 'Every morning, summarize my unread emails, check my calendar, and draft a daily plan' — all running privately on your device.",
      "Performance has improved dramatically as well. Response times are 40% faster than 1.x, memory usage is down 30%, and we've added support for Apple Silicon and ARM-based Linux devices. Sangpt 2.0 runs beautifully on everything from a MacBook Air to a Raspberry Pi.",
      "Finally, we've redesigned the entire interface. The new UI is cleaner, faster, and more intuitive. We've adopted a glassmorphism design language that feels modern without sacrificing readability. Every pixel has been considered.",
      "We're incredibly grateful to our community. Your feedback, bug reports, feature requests, and encouragement have shaped every aspect of this release. Sangpt 2.0 isn't just our product — it's yours.",
    ],
  },
  {
    slug: "how-local-ai-models-protect-your-privacy",
    title: "How Local AI Models Protect Your Privacy",
    excerpt:
      "Understanding the technical architecture behind Sangpt's privacy-first approach, and why running AI locally matters more than ever.",
    category: "AI Explained",
    date: "February 12, 2026",
    readTime: "6 min read",
    content: [
      "Every time you type a message into a cloud-based AI assistant, your words travel across the internet to a remote server. They're processed, logged, and stored — sometimes indefinitely. For many users, this trade-off is invisible. But for anyone working with sensitive information — lawyers, doctors, journalists, executives — it's a serious concern.",
      "Sangpt takes a fundamentally different approach. Our core AI engine runs locally on your device, meaning your conversations never leave your computer. There's no server to hack, no database to breach, no third party to trust.",
      "But how does local AI actually work? Let's dive into the architecture.",
      "At the heart of Sangpt is a family of optimized language models designed to run efficiently on consumer hardware. We use a combination of model quantization (reducing the precision of neural network weights), knowledge distillation (training smaller models to mimic larger ones), and hardware-specific optimizations (leveraging GPU acceleration, Apple Neural Engine, and ARM NEON instructions).",
      "The result is an AI that's fast enough for real-time conversation, smart enough for complex tasks, and small enough to fit on a laptop. Our smallest model requires just 2GB of RAM, while our largest model — which rivals cloud-based alternatives in capability — runs comfortably on a system with 16GB of RAM and a modern GPU.",
      "Privacy isn't just a feature we bolt on. It's an architectural decision that influences every aspect of the product. Our encryption system uses AES-256 for data at rest and TLS 1.3 for any optional cloud sync. Even our analytics are designed to be privacy-preserving: we collect aggregated, anonymized metrics that tell us which features are popular without revealing anything about individual users.",
      "We believe this approach represents the future of AI. As models become smaller and more efficient, the argument for sending your data to the cloud weakens. Sangpt is proof that you don't have to choose between intelligence and privacy.",
    ],
  },
  {
    slug: "building-sangpt-lessons-from-two-years",
    title: "Building Sangpt: Lessons from Two Years of Development",
    excerpt:
      "A candid look at the technical decisions, design philosophy, and community dynamics that shaped Sangpt from prototype to product.",
    category: "Behind Sangpt",
    date: "January 28, 2026",
    readTime: "10 min read",
    content: [
      "Two years ago, Sangpt was a Python script running in a terminal. Today, it's a cross-platform desktop application used by thousands. The journey between those two points was anything but straightforward.",
      "In this post, I want to share some of the most important lessons we learned along the way — the technical decisions that paid off, the ones we regret, and the unexpected challenges that nearly derailed the project.",
      "Lesson 1: Start with the hardest problem. For us, that was running large language models efficiently on consumer hardware. We spent the first six months solely focused on inference optimization — long before we had a UI, a plugin system, or even a proper name. This decision was controversial internally, but it meant that by the time we built the user-facing product, we had a rock-solid foundation.",
      "Lesson 2: Design for trust. Privacy-first isn't just a technical architecture — it's a design philosophy. Every feature we build goes through a 'privacy review' where we ask: Does this feature require data to leave the user's device? If so, is there a way to achieve the same result locally? If data must be transmitted, how do we minimize it and encrypt it?",
      "Lesson 3: Community feedback is gold, but you have to be strategic about how you incorporate it. In our alpha phase, we received over 500 feature requests in the first month. Trying to build all of them would have been impossible. We developed a prioritization framework based on three criteria: How many users requested it? How well does it align with our mission? How feasible is it with our current architecture?",
      "Lesson 4: Cross-platform development is hard. Really hard. We chose Electron initially for speed of development, then migrated to Tauri for performance and smaller bundle size. The migration took three months and was one of the most challenging engineering efforts we've undertaken. But the result — a 60% reduction in app size and 40% improvement in startup time — was worth it.",
      "Lesson 5: Open source is a superpower, but it requires intentional community management. Simply putting code on GitHub isn't enough. You need clear contribution guidelines, responsive maintainers, inclusive communication, and a welcoming culture. We've invested heavily in this, and it's paid dividends in the form of high-quality contributions, bug reports, and evangelism.",
      "We're still learning, every day. If you're building a developer tool or an open-source project, I hope these lessons are useful. And if you want to join us on this journey, check out our GitHub — we'd love your contributions.",
    ],
  },
  {
    slug: "responsible-ai-our-ethical-framework",
    title: "Responsible AI: Our Ethical Framework",
    excerpt:
      "How Dev-Link approaches the ethical challenges of AI development, from bias mitigation to transparency and accountability.",
    category: "Responsible AI",
    date: "January 15, 2026",
    readTime: "7 min read",
    content: [
      "Building AI isn't just a technical challenge — it's an ethical one. Every decision we make, from model training to feature design, has implications for how our technology affects people's lives. At Dev-Link, we take this responsibility seriously.",
      "Our ethical framework is built on four pillars: Transparency, Fairness, Privacy, and Accountability.",
      "Transparency means that users should always know when they're interacting with AI, how the AI arrived at its response, and what data was used. Sangpt includes an 'explain' feature that breaks down the reasoning behind any response, helping users understand and verify the AI's output.",
      "Fairness means actively working to identify and mitigate bias in our models. We conduct regular bias audits using standardized benchmarks and real-world testing scenarios. When we discover biases, we document them publicly and work to address them in subsequent model updates.",
      "Privacy, as we've discussed extensively, is foundational. But ethical privacy goes beyond encryption — it means giving users genuine control over their data, being transparent about what we collect and why, and designing systems that minimize data collection by default.",
      "Accountability means taking responsibility for our technology's impact. We've established an internal ethics review board that evaluates new features and capabilities before they're released. We also publish an annual transparency report detailing our data practices, security incidents (if any), and the steps we've taken to address ethical concerns.",
      "We don't claim to have all the answers. AI ethics is a rapidly evolving field, and we're constantly learning from researchers, ethicists, and our own community. But we're committed to getting it right — even when that means slowing down development or saying no to features that could compromise our values.",
    ],
  },
  {
    slug: "getting-started-with-sangpt-complete-guide",
    title: "Getting Started with Sangpt: A Complete Guide",
    excerpt:
      "Everything you need to know to install, configure, and start using Sangpt productively — from first launch to advanced workflows.",
    category: "Guides & Tutorials",
    date: "February 1, 2026",
    readTime: "12 min read",
    content: [
      "Welcome to Sangpt! Whether you're a first-time user or upgrading from a previous version, this guide will walk you through everything you need to get started.",
      "Step 1: Installation. Head to our Download page and choose the installer for your operating system. Sangpt supports Windows 10+, macOS 12+, and Ubuntu 20.04+. The installer is a standard executable — no command-line tools or package managers required. The entire installation process takes about two minutes.",
      "Step 2: First Launch. When you open Sangpt for the first time, you'll be greeted by a setup wizard. This wizard helps you configure your preferences: language, theme (light or dark), default AI model, and privacy settings. All of these can be changed later in Settings.",
      "Step 3: Your First Conversation. Click the 'New Chat' button and start typing. Sangpt understands natural language, so you can ask questions, give instructions, or just have a conversation. Try asking 'What can you do?' to see a summary of capabilities.",
      "Step 4: Exploring Features. Sangpt includes several powerful features beyond chat. The Knowledge Base lets you upload documents and ask questions about them. The Task Manager helps you organize to-dos with AI-powered prioritization. The Writing Assistant helps you draft, edit, and improve text.",
      "Step 5: Installing Plugins. Visit the Plugin Marketplace (accessible from the sidebar) to browse available integrations. Popular plugins include Google Calendar sync, GitHub issue tracker, and Obsidian note-taking integration. Each plugin includes a description, permissions list, and user reviews.",
      "Step 6: Creating Workflows. Workflows let you automate multi-step processes. For example, you can create a workflow that runs every morning and generates a daily briefing based on your calendar, emails, and task list. The workflow editor uses a visual drag-and-drop interface that makes automation accessible to non-technical users.",
      "Step 7: Customizing the AI. Over time, Sangpt learns your preferences and communication style. You can accelerate this process by providing feedback (thumbs up/down on responses), setting custom instructions (e.g., 'Always respond concisely'), and configuring domain-specific knowledge (e.g., 'I'm a software engineer working with Python and TypeScript').",
      "That's it! You're now equipped to use Sangpt productively. For more advanced topics, check out our Documentation page or join our community forum.",
    ],
  },
  {
    slug: "sangpt-plugin-ecosystem-overview",
    title: "The Sangpt Plugin Ecosystem: Build, Share, Extend",
    excerpt:
      "A deep dive into how plugins work in Sangpt 2.0, how to install them, and how to build your own.",
    category: "Product Updates",
    date: "February 8, 2026",
    readTime: "9 min read",
    content: [
      "One of the most requested features since Sangpt's earliest alpha builds has been extensibility. Users wanted to connect Sangpt to the tools they already use — calendars, note-taking apps, code editors, and more. With Sangpt 2.0, we're delivering on that vision with a full plugin ecosystem.",
      "Plugins in Sangpt are lightweight extensions that add new capabilities to the core application. They can integrate with external services, add new UI elements, or extend the AI's abilities in specific domains. Each plugin runs in a sandboxed environment for security, with granular permission controls that let you decide exactly what data each plugin can access.",
      "Installing a plugin is simple. Open the Plugin Marketplace from the sidebar, browse or search for the plugin you want, and click 'Install.' The plugin downloads in seconds, and most are ready to use immediately — no configuration required.",
      "For developers, building a plugin is equally straightforward. Our Plugin SDK provides a clean API for interacting with Sangpt's core features: conversation context, user preferences, knowledge base, and UI components. Plugins are written in TypeScript and can be developed, tested, and published using our CLI tools.",
      "We've launched with over 40 plugins covering the most popular integrations: Google Calendar, GitHub, Slack, Notion, Obsidian, Todoist, and many more. We're also seeing exciting community-built plugins for niche use cases — academic citation management, recipe planning, language learning, and even music composition.",
      "The marketplace includes user reviews, download counts, and a verification badge for plugins that have passed our security review. We take plugin security seriously: every plugin submitted to the marketplace goes through automated static analysis and manual code review before it's published.",
      "We believe plugins are key to Sangpt's future. By enabling the community to extend the platform, we're ensuring that Sangpt can adapt to use cases we haven't even imagined yet. If you have an idea for a plugin, we'd love to see it — check out our developer documentation to get started.",
    ],
  },
];
