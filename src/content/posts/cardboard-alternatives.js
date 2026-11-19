// Sources (KeyFly): src/content/home.js, product.js, integrations.js, pricing.js,
// use-cases.js, legal.js, blog.js. No KeyFly prices typed; links go to /pricing.
// Sources (competitors), all checked 19 Nov 2026:
// - Cardboard: cardboard.ai, cardboard.ai/desktop, cardboard.ai/pricing, cardboard.ai/mcp,
//   cardboard.ai/privacy, learn.usecardboard.com/export/export-your-video.md
// - Descript: descript.com, descript.com/pricing, descript.com/download,
//   help.descript.com/export-and-share/timeline-exports.md, help.descript.com/api-and-mcp/mcp-claude.md,
//   help.descript.com/account-and-app-settings/data-privacy
// - CapCut: capcut.com/tools/desktop-video-editor, capcut.com/help/how-much-does-capcut-pro-cost,
//   capcut.com/help/no-2k-or-4k-option-for-export
// - VEED: veed.io/pricing, veed.io/pricing/llms.txt, veed.io/pricing/plans.md, veed.io/pricing/features.md
// - Kapwing: kapwing.com, kapwing.com/pricing, kapwing.com/mcp, kapwing.com/help/timeline-tutorial/
// - Runway: runway.com, runway.com/pricing, runway.com/product/aleph-2
// - OpusClip: opus.pro, opus.pro/pricing, help.opus.pro/docs/article/import-to-adobe-premiere,
//   help.opus.pro/api-reference/agent-setup
// Competitor products and prices change often; re-check before editing this post.

const post = {
  slug: "cardboard-alternatives",
  topic: "compare",
  date: { iso: "2026-11-19", text: "19 November 2026" },
  title: "The best Cardboard alternatives for AI video editing in 2026",
  seoTitle: "Cardboard alternatives: 7 AI video editors for 2026",
  dek: "Seven Cardboard alternatives compared from their own public pages: KeyFly, Descript, CapCut, VEED, Kapwing, Runway and OpusClip, with platforms, AI and prices.",
  cover: { video: "/video/road-reel.mp4", poster: "/video/road-reel.webp", alt: "An aerial view of a road at sunset" },
  sections: [
    {
      id: "short",
      title: "What is the best Cardboard alternative?",
      blocks: [
        "The best Cardboard alternative depends on what you need it for. If you want the same chat-driven, first-cut-from-a-sentence way of working on Windows, Intel Macs or the web, with your own AI agent and a handoff to any pro editor, KeyFly is the closest match. If you edit mostly by transcript, Descript is the strongest pick; for short social clips from long videos, OpusClip; for generating and restyling footage, Runway.",
        "We make KeyFly, so we've put it first. Everything we say about the other six comes from their own websites, pricing pages and help centres as they stood on **19 November 2026**, and we say plainly where each one is the better choice.",
        "In short:",
        {
          list: [
            "**Closest like-for-like:** KeyFly. A conversation and a timeline, desktop apps for Mac and Windows, a web app, and timeline export to Final Cut Pro, Resolve, Premiere and Avid.",
            "**Best for transcript editing and podcasts:** Descript.",
            "**Best free, all-round social editor:** CapCut.",
            "**Best for quick browser edits with subtitles:** VEED or Kapwing.",
            "**Best for AI-generated footage and visual effects:** Runway.",
            "**Best for turning long videos into short clips:** OpusClip.",
          ],
        },
      ],
    },
    {
      id: "why-look",
      title: "Why do people look for a Cardboard alternative?",
      blocks: [
        "Most people look elsewhere because of their computer, their budget or the way they finish a video, not because Cardboard edits badly.",
        "[Cardboard](https://www.cardboard.ai) is an AI video editor from Cardboard Inc., a Y Combinator Winter 2026 company. You chat with it, and it turns your footage or a prompt into an editable first cut. Its public pages, checked on 19 November 2026, describe a strong set of features: prompt to video with generated video, images, music, sound effects, motion graphics and 3D scenes; captions and reframing; removing filler words, dead air and retakes; AI voice-over and voice cloning on higher plans; share links with timecoded comments; and \"Recipes\" you can remix with your own footage.",
        "The reasons people give for looking around tend to be these:",
        {
          list: [
            "**Platform.** Cardboard's site says \"Browser and Mac\". The [Mac app](https://www.cardboard.ai/desktop) is for Apple silicon (M1 and later); Intel Mac users work in the browser, and the Windows app is listed as in development, so Windows users use Chrome for now.",
            "**Handing off.** Timeline export goes out as FCPXML or Premiere XML, from the web editor only, on Starter and above, at 30 fps ([Cardboard help](https://learn.usecardboard.com/export/export-your-video.md)). There's no EDL, OpenTimelineIO or Avid route listed.",
            "**Price and the free tier.** [Cardboard's pricing](https://www.cardboard.ai/pricing) lists Lite, Starter, Creator and Pro at $10, $40, $100 and $250 a month, or $8, $29, $59 and $175 a month billed yearly. Lite is free in the Mac app with one-time credits and three lifetime exports at 1080p with a watermark. Teams go through sales.",
            "**Data.** [Cardboard's privacy policy](https://www.cardboard.ai/privacy) says it may use information, including content, to train, test and improve its technology, and the Mac app's \"share data to improve\" setting is on by default.",
          ],
        },
        "If none of those matter to you, Cardboard may be the right tool already. If one does, the rest of this guide is for you. For a closer, two-way look, read [KeyFly vs Cardboard](/blog/keyfly-vs-cardboard).",
      ],
    },
    {
      id: "how-we-chose",
      title: "How did we choose and compare these tools?",
      blocks: [
        "We picked tools that people searching for a Cardboard alternative actually weigh up, and we compared them on the same seven questions.",
        "Not every tool here is a direct copy of Cardboard. Some are all-round editors with AI added, some are AI clip makers, and one is mainly a generative video lab. That's deliberate: \"AI video editor\" covers very different jobs, and the right alternative is the one that fits your job.",
        {
          steps: [
            ["Platforms", "Which desktop apps, web app and mobile apps exist, and on which operating systems."],
            ["What it's best at", "The job the product is clearly built around, from its own homepage."],
            ["AI features", "Generating video, cutting talking heads, captions, voices, clipping."],
            ["Timeline export", "Whether you can hand the edit to Final Cut Pro, DaVinci Resolve, Premiere Pro or Avid as a timeline, not just a rendered file."],
            ["Your own AI", "Whether Claude, ChatGPT, Claude Code, Codex, Cursor or another agent can drive it, and whose credits that uses."],
            ["Price and free plan", "The starting price and what the free tier really allows, as listed on 19 November 2026."],
            ["Data", "What the company says about training AI on your content, where it says anything at all."],
          ],
        },
        "Where a fact wasn't stated on the company's own pages, we left it out rather than guess. Prices are in US dollars as shown to us; your region may differ.",
      ],
    },
    {
      id: "comparison-table",
      title: "How do the Cardboard alternatives compare?",
      blocks: [
        "The table puts the seven alternatives and Cardboard side by side; each row comes from the company's own pages, checked 19 November 2026.",
        {
          table: {
            head: ["Tool", "Best for", "Platforms", "Timeline export to pro editors", "Your own AI or agents", "Free plan"],
            rows: [
              ["KeyFly", "Chat-driven first cuts, templates, brand kits, handoff", "Mac (Apple silicon and Intel), Windows 10 and 11, web, inside ChatGPT and Claude", "FCPXML, EDL, OpenTimelineIO, packaged with media: Final Cut Pro, Resolve, Premiere, Avid", "Claude Code, Codex, Cursor, Antigravity or any ACP agent, without AI minutes", "Yes, never expires; 1080p with a small mark"],
              ["Cardboard", "Chat-driven first cuts", "Apple silicon Mac, browser", "FCPXML and Premiere XML, web editor, Starter and up", "Claude or ChatGPT/Codex subscription in the Mac app; ChatGPT and Claude plugins on Cardboard credits", "Lite in the Mac app: one-time credits, 3 exports"],
              ["Descript", "Editing by transcript, podcasts", "macOS 14+ and Windows 11 desktop apps; sign-in on the web", "Premiere XML or .prproj (beta), Resolve XML, FCPXML, plus Reaper, Audition, Pro Tools/Logic; Creator and up", "Claude connector, custom MCP for Claude Code; uses Descript minutes and credits", "Yes: 720p with watermark, 60 media minutes a month"],
              ["CapCut", "Free all-round social editing", "Windows, macOS, web, iOS, Android", "Not listed", "Not listed", "Yes"],
              ["VEED", "Browser editing, subtitles", "Browser; iOS app on paid plans", "Not listed", "Not listed", "Yes: 720p with watermark, 10-minute exports"],
              ["Kapwing", "Browser editing for teams, subtitles, dubbing", "Browser", "Not listed (exports MP4, GIF, JPEG, MP3)", "MCP for Claude, Claude Code, Cowork and ChatGPT, all plans; uses Kapwing credits", "Yes: 720p with watermark, 4-minute exports"],
              ["Runway", "Generating and restyling footage", "Web, iOS, Android", "Not listed", "API with plugins for Claude Code, Codex and Cursor", "Yes: 125 one-time credits"],
              ["OpusClip", "Long video into short clips", "Web", "XML for Premiere Pro (and Resolve), Pro and up", "MCP for Claude Code, ChatGPT/Codex and Cursor; tool calls need a paid tier", "Yes: watermark, media kept 3 days"],
            ],
          },
        },
        "\"Not listed\" means we didn't find it on the company's own pages on that date, not that it can never exist. If you rely on one of these rows, check the vendor's site before you buy.",
      ],
    },
    {
      id: "keyfly",
      title: "KeyFly: the closest match to how Cardboard works",
      blocks: [
        "KeyFly is the best fit if you like Cardboard's conversation-first way of editing but need Windows or an Intel Mac, your own AI agent, or a timeline that opens in any professional editor.",
        "**Best for:** creators, marketers and small teams who want a finished, on-brand first cut from a sentence, their own footage or a template, and the freedom to finish it anywhere.",
        "**Strengths:**",
        {
          list: [
            "**Runs where you work.** Desktop apps for macOS 13 and later (Apple silicon and Intel) and Windows 10 and 11 (64-bit), a web app at [app.keyfly.si](https://app.keyfly.si), and KeyFly inside ChatGPT and Claude. If you're on Windows, see [the best AI video editor for Windows](/blog/ai-video-editor-for-windows).",
            "**Three ways to start.** A sentence ([text to video](/blog/text-to-video-ai)), your own footage, or one of 91 templates across 10 categories, in 16:9, 9:16, 1:1 and 4:5, from 4 to 90 seconds.",
            "**An AI director that explains itself.** It writes the storyboard, voice-over and motion graphics, and leaves a note on every call it makes, with `Revert` and `Retry` on each.",
            "**Talking heads done for you.** Silences and filler words cut, captions, zooms and callouts added, and every one of them is a track you can change. More in [Edit talking-head video with AI](/blog/edit-talking-head-video-with-ai).",
            "**A brand kit.** Logo (with versions and banners), five colours, a font, tone of voice and a voice-over voice, AI or cloned. Paste your website and press `Analyze with AI` to fill it.",
            "**Finish anywhere.** FCPXML for Final Cut Pro and Resolve, EDL (CMX 3600) for Premiere Pro, Resolve and Avid, and OpenTimelineIO. `Package for editing` zips the timeline with every file it uses.",
            "**Your own agent.** Claude Code, Codex, Cursor, Antigravity or any ACP agent edits your timeline on your own plan, without AI minutes.",
          ],
        },
        { image: { src: "/video/keyfly-film.webp", alt: "A title card reading \"Describe a video.\" on a dark background", caption: "Illustrative: KeyFly starts from a sentence, your footage or a template, and the AI director builds the first cut.", w: 1280, h: 720 } },
        "**Limits, honestly:** KeyFly is a newer product than most on this list. It doesn't try to be a generative video lab like Runway or an automatic long-to-short clipper like OpusClip, and if you mostly edit long podcasts word by word in a transcript, Descript is built around that. The Free plan exports at 1080p with a small KeyFly mark; paid plans go up to 4K without it.",
        "**Pricing (checked 19 November 2026):** a Free plan that never expires, and every new account gets a 7-day Creator trial with no card. Paid plans are BYO (for people who bring their own agent), Starter, Creator, Pro and a self-serve Team plan priced per seat. Current prices are on the [pricing page](/pricing), and the [plan comparison](/pricing#compare) shows what each includes. The AI's work is measured in AI minutes, and each action shows its cost before it runs ([what an AI minute is](/blog/what-is-an-ai-minute)). Exports are encoded on your device and use no AI minutes.",
        "**Data:** KeyFly doesn't train AI models on your content, and in the desktop app your footage stays on your computer unless an AI step needs it.",
        {
          gallery: {
            items: [
              { src: "/video/templates/us-vs-them.webp", alt: "A frame from the Us vs. them template", label: "Us vs. them · 16:9", w: 384, h: 216 },
              { src: "/video/templates/feature-tour.webp", alt: "A frame from the Feature tour template", label: "Feature tour · 16:9", w: 384, h: 216 },
              { src: "/video/templates/podcast-clip.webp", alt: "A frame from the Podcast clip template", label: "Podcast clip · 9:16", w: 216, h: 384 },
              { src: "/video/templates/ugc-product-review.webp", alt: "A frame from the UGC product review template", label: "UGC product review · 9:16", w: 216, h: 384 },
              { src: "/video/templates/linkedin-talking-head.webp", alt: "A frame from the LinkedIn talking head template", label: "LinkedIn talking head · 1:1", w: 300, h: 300 },
            ],
            caption: "Frames from five of KeyFly's 91 templates, recorded in the app. Each is filled with your brand kit when you start.",
          },
        },
        { tip: "In KeyFly, start with a template if you know the format you need, or with a single sentence if you don't. Either way you get a timeline you can change in words or by hand." },
      ],
    },
    {
      id: "descript",
      title: "Descript: best for editing by transcript",
      blocks: [
        "Descript is the best Cardboard alternative if your videos are mostly people talking and you'd rather edit the words than the waveform.",
        "**Best for:** podcasters, YouTubers and teams who record interviews, tutorials and talking-head videos.",
        "**Strengths:** [Descript's homepage](https://www.descript.com) puts text-based editing at the centre: you edit the video by editing its transcript. Around that it lists Underlord, its AI editing agent that turns a raw recording into a tight cut; one-click filler-word removal; Studio Sound for cleaning up audio; eye-contact correction; clips from longer videos; stock AI voices and voice cloning; translation; and Brand Studio.",
        "Its timeline export is the widest of the six competitors. On Creator, Business and Enterprise plans, [its help centre](https://help.descript.com/export-and-share/timeline-exports.md) lists Premiere XML, a Premiere project file (beta, not on every account), DaVinci Resolve XML, Final Cut Pro FCPXML, and audio formats for Reaper, Audition and Pro Tools or Logic. It doesn't list Avid Media Composer or OpenTimelineIO.",
        "Descript also works with your own assistant: there's a Claude connector for the web and desktop apps and a custom MCP setup for Claude Code and other clients. Its [help page](https://help.descript.com/api-and-mcp/mcp-claude.md) notes that imports and Underlord edits through MCP use your Descript media minutes and AI credits.",
        { image: { src: "/video/footage-raw.webp", alt: "A young man in earphones talking to camera by a window", caption: "Illustrative stock footage: a raw talking-head take. Transcript editors like Descript are built for recordings like this.", w: 960, h: 540 } },
        "**Limits:** the [download page](https://www.descript.com/download) lists macOS 14 (Sonoma) or Windows 11 and newer, so older systems are out. The free plan exports at 720p with a watermark. It isn't built around generating a whole video from one sentence or around ready-made templates the way Cardboard and KeyFly are.",
        "**Pricing (checked 19 November 2026):** from [descript.com/pricing](https://www.descript.com/pricing), per person per month: Hobbyist $16 billed yearly or $24 monthly, Creator $24 or $35, Business $50 or $65, and Enterprise on request. Free gets 720p exports with a watermark, 60 media minutes a month and 100 one-time AI credits. Hobbyist goes to 1080p; Creator and Business to 4K.",
        "**Data:** Descript's [privacy help page](https://help.descript.com/account-and-app-settings/data-privacy) says its production AI models use no user data, and that only data from people who opt in to data sharing is used for internal research.",
      ],
    },
    {
      id: "capcut",
      title: "CapCut: best free all-round editor for social video",
      blocks: [
        "CapCut is the best choice if you want a full editor on every device, with plenty of AI tools, and you mainly post to social platforms.",
        "**Best for:** creators making short vertical videos who want desktop, web and phone in one product.",
        "**Strengths:** CapCut comes as a desktop app, CapCut Online in the browser, a mobile app and a tablet app. Its [desktop page](https://www.capcut.com/tools/desktop-video-editor) lists Windows 7 or later (Windows 10 recommended) and macOS 10.14 or later, which is the widest operating-system support here. The AI tools it lists include script to video, an AI writer, auto captions, AI video generation with its sister product Dreamina, background removal, video and voice enhancement, noise removal and text to speech. Its [help centre](https://www.capcut.com/help/no-2k-or-4k-option-for-export) says the desktop app exports up to 4K at 60 fps when your footage supports it.",
        { image: { src: "/video/format-loop.webp", alt: "A creator filming herself on a city street", caption: "Illustrative stock footage: phone-first social video is where CapCut, VEED and Kapwing focus.", w: 960, h: 540 } },
        "**Limits:** CapCut is a traditional editor with AI tools added, not a chat-first editor, so you still assemble most of the cut yourself. Its pages we checked don't list a timeline export to Premiere, Final Cut, Resolve or Avid, and they don't mention connecting Claude, ChatGPT or a coding agent.",
        "**Pricing (checked 19 November 2026):** CapCut has a free tier and a paid Pro plan, with monthly and yearly options. Its [help page on Pro pricing](https://www.capcut.com/help/how-much-does-capcut-pro-cost) says there's no fixed global price: it varies by region, device and promotion, and you see yours by pressing Upgrade on the web, the subscription button on desktop, or Join CapCut Pro on mobile.",
      ],
    },
    {
      id: "veed",
      title: "VEED: best for quick browser edits with subtitles",
      blocks: [
        "VEED is a good Cardboard alternative if you want to edit in the browser with no install, and subtitles and quick social edits are most of your work.",
        "**Best for:** marketers and teams making short, captioned videos in a browser.",
        "**Strengths:** VEED is an online editor. Its [pricing pages](https://www.veed.io/pricing) list unlimited subtitle generation on paid plans (with a 50-hour monthly fair-use limit), translation, removing long pauses and silences, eye-contact correction, voice cloning, AI credits for its generative tools, a brand kit (limited on Creator, multiple brands on Pro), and an iOS app on paid plans.",
        "**Limits:** the [feature list](https://www.veed.io/pricing/features.md) doesn't mention timeline export to other editors, or any way to connect your own AI agent. Creator exports are capped at 1080p; 4K needs Pro or Enterprise. AI credits refresh at renewal and don't carry over.",
        "**Pricing (checked 19 November 2026):** from [VEED's plans page](https://www.veed.io/pricing/plans.md), per editor seat: Free, with 50 AI credits a month, 720p exports, a watermark and a 10-minute export limit; Creator at $25 a month, or $147 a year (about $12.25 a month); Pro at $45 a month, or $265 a year (about $22.08 a month); and Enterprise on a quote, with a free trial for teams of at least three. Prices are in US dollars and may vary by region.",
      ],
    },
    {
      id: "kapwing",
      title: "Kapwing: best for browser-based team editing and dubbing",
      blocks: [
        "Kapwing is the right alternative if your team edits together in the browser and needs subtitles, translation and dubbing as much as editing.",
        "**Best for:** creative and marketing teams who share a workspace and repurpose content into many languages.",
        "**Strengths:** [Kapwing's homepage](https://www.kapwing.com) describes a browser platform with no install. Its AI tools include a video generator that turns a prompt into a video with voice-over, visuals, subtitles and music; a script generator; a B-roll generator; a clip maker; text to speech and dubbing; audio clean-up; Smart Cut, which removes silences; and editing by transcript. Pro adds a shared workspace, a brand kit, custom fonts and 4K export.",
        "Kapwing also has one of the most open agent set-ups here. Its [MCP page](https://www.kapwing.com/mcp) says Claude (web and desktop), Claude Code, Cowork and ChatGPT can upload footage, edit and generate video, add and translate subtitles, dub, and assemble footage, on every Kapwing plan including free accounts. It uses your workspace credits, with no separate MCP fee.",
        "**Limits:** Kapwing's [timeline help](https://www.kapwing.com/help/timeline-tutorial/) lists MP4, GIF, JPEG and MP3 as export options, so there's no timeline handoff to a pro editor. It's browser-only, with no desktop app listed. Cursor isn't listed as an MCP client.",
        "**Pricing (checked 19 November 2026):** from [kapwing.com/pricing](https://www.kapwing.com/pricing): Free, with exports up to 4 minutes at 720p with a watermark, 30 export minutes a month and media kept for 3 days; Pro at $16 a month with 1,000 credits; Business at $50 a month with 4,000 credits, adding voice clones and lip sync; and Enterprise on request. Yearly billing saves up to 33%.",
      ],
    },
    {
      id: "runway",
      title: "Runway: best for generating and restyling footage",
      blocks: [
        "Runway is the better choice than Cardboard if your main need is generating new shots or changing what's inside existing ones, rather than cutting a video together.",
        "**Best for:** filmmakers, designers and agencies making AI-generated scenes, visual effects and stylised footage.",
        "**Strengths:** [Runway's homepage](https://runway.com) lists its own models, including Gen-4.5 for video generation and Aleph 2.0 for editing footage. [Aleph 2.0](https://runway.com/product/aleph-2) lets you change one frame (a product colour, clothing, a hairstyle) and carries the change through the clip while the background and lighting stay put, across multiple shots, on clips up to 30 seconds at 1080p. Runway runs on the web with iOS and Android apps, and Runway Dev offers an API with plugins for Claude Code, Codex and Cursor.",
        { image: { src: "/video/edit-after.webp", alt: "A crowd in front of a lit concert stage", caption: "Illustrative stock footage: restyling the look of a shot is generative work, Runway's speciality, not cutting a story together.", w: 960, h: 600 } },
        "**Limits:** Runway isn't a talking-head editor or a story-first editor; it's a generation and effects workspace you'd usually pair with another editor. Its pages we checked don't list a timeline export to Premiere, Final Cut, Resolve or Avid. Generation is credit-based, so heavy use costs more.",
        "**Pricing (checked 19 November 2026):** from [runway.com/pricing](https://runway.com/pricing): Free, with 125 one-time credits and 5 GB of storage; Standard at $15 a month ($12 billed yearly) with 625 credits a month; Pro at $35 ($28 yearly) with 2,250 credits; Max at $95 ($76 yearly) with 9,500 credits, where unused credits roll over for a month; and Enterprise through sales.",
      ],
    },
    {
      id: "opusclip",
      title: "OpusClip: best for turning long videos into short clips",
      blocks: [
        "OpusClip is the best alternative if your real job is cutting podcasts, webinars and streams into many short clips for social, rather than editing one video from scratch.",
        "**Best for:** podcasters, streamers and social teams repurposing long recordings.",
        "**Strengths:** [OpusClip's homepage](https://www.opus.pro) centres on ClipAnything, which finds clips in many kinds of long video; ReframeAnything, which resizes for each platform and tracks moving subjects; editable automatic captions; an AI editor you can run by hand or fully automatically; and brand templates and a shared workspace for teams. It also has an API.",
        "It hands off to pro editors, too. Its [help centre](https://help.opus.pro/docs/article/import-to-adobe-premiere) says XML export (Pro plan) gives you the original video, an XML file with the clip, captions and reframe, and an SRT caption file, for videos up to 1.5 hours; Premiere Pro is recommended, and the pricing page also names DaVinci Resolve. Captions arrive as overlays you can't restyle in Premiere unless you use the SRT.",
        "Its [MCP server](https://help.opus.pro/api-reference/agent-setup) connects Claude Code, ChatGPT or Codex, and Cursor, with a separate Claude.ai connector. Anyone can sign in and see the tools, but calling them needs a higher paid tier, and the work uses OpusClip credits.",
        { image: { src: "/video/cases/podcast.webp", alt: "A vertical frame from a podcast clip", caption: "Illustrative: a vertical podcast clip. Long-to-short clipping is OpusClip's core job; KeyFly's Podcast clip template covers single clips.", w: 432, h: 768 } },
        "**Limits:** OpusClip is built around clipping existing footage, so it isn't the tool for making a launch film or an explainer from a sentence. On the free plan, media and exports are kept for three days and exports carry a watermark.",
        "**Pricing (checked 19 November 2026):** from [opus.pro/pricing](https://www.opus.pro/pricing): Free; Starter at $15 a month; Pro at $29 a month; and Business on a custom quote. Export to Premiere Pro and DaVinci Resolve is on Pro and Business.",
      ],
    },
    {
      id: "which-to-pick",
      title: "Which Cardboard alternative should you pick?",
      blocks: [
        "Pick by the job you do most often and the computer you do it on; the table below maps common situations to the tool that fits best.",
        {
          table: {
            head: ["If you are…", "Pick", "Why"],
            rows: [
              ["On Windows or an Intel Mac and like Cardboard's chat-first editing", "KeyFly", "Native desktop apps for both, plus the web, with the same sentence-to-first-cut flow"],
              ["A developer who lives in Claude Code, Codex or Cursor", "KeyFly", "Your own agent edits the timeline on your own plan, without AI minutes"],
              ["An editor who finishes in Avid, or wants OpenTimelineIO", "KeyFly", "EDL and OTIO alongside FCPXML, packaged with every file"],
              ["A brand or agency team that needs every video on brand", "KeyFly", "Brand kit filled from your website, 91 templates, self-serve Team plan"],
              ["A podcaster who edits by reading the transcript", "Descript", "Text-based editing, Studio Sound, and wide timeline export on Creator and up"],
              ["A creator who wants a free editor on phone, web and desktop", "CapCut", "Every platform, many AI tools, a free tier"],
              ["A marketer who needs captioned clips in a browser, fast", "VEED", "Browser editor, unlimited subtitles on paid plans"],
              ["A team dubbing and translating content in a shared browser workspace", "Kapwing", "Dubbing, translation and an MCP that works on every plan"],
              ["A filmmaker generating shots or changing what's in them", "Runway", "Its own generation and editing models, Aleph 2.0"],
              ["A podcaster or streamer cutting long videos into many shorts", "OpusClip", "ClipAnything, ReframeAnything and XML to Premiere on Pro"],
            ],
          },
        },
        "Many people use two of these together: a generator or clipper for raw material, and an editor for the finished cut. KeyFly's timeline export and its `Package for editing` option are made for that kind of mixed workflow ([how the handoff works](/blog/export-timeline-to-final-cut-resolve-premiere-avid)).",
        { image: { src: "/video/cases/explainer.webp", alt: "A tablet showing a \"How it works: Describe, Edit, Share\" diagram", caption: "Illustrative: describe, edit, share. The question is which tool handles each step for you.", w: 960, h: 540 } },
      ],
    },
    {
      id: "how-to-switch",
      title: "How do you switch from Cardboard to another AI video editor?",
      blocks: [
        "Switching takes an afternoon: export what you want to keep, then rebuild your brand and your starting points in the new tool.",
        {
          steps: [
            ["Export your finished videos", "Download the final files you want to keep from Cardboard. Cardboard exports MP4, WebM, MOV and MKV up to 4K, depending on your plan."],
            ["Export timelines you'll keep editing", "On Starter and above, Cardboard's web editor exports FCPXML or Premiere XML at 30 fps. Open those in Final Cut Pro, Resolve or Premiere and keep going there, or re-import the footage into your new tool."],
            ["Gather your raw footage", "Keep the original recordings in a folder you control. Every tool here can start from your own footage."],
            ["Set up your brand", "In KeyFly, paste your website and press `Analyze with AI` to fill the brand kit: see [Fill a brand kit from your website](/blog/brand-kit-from-your-website). Descript, VEED, Kapwing and OpusClip have their own brand features on some plans."],
            ["Try it on a real project", "Rebuild one recent video. It's the fastest way to see whether the new tool fits. KeyFly's [Free plan](https://app.keyfly.si/signup?plan=free) never expires, and new accounts get a 7-day Creator trial with no card."],
            ["Connect your AI", "If you used Cardboard's agent settings, point Claude Code, Codex, Cursor or another ACP agent at KeyFly instead: see [Edit video with your own AI agent](/blog/edit-video-with-claude-code-codex-cursor)."],
            ["Set your export presets", "Check sizes for each platform with [video export settings for every platform](/blog/video-export-settings-every-platform)."],
          ],
        },
        { image: { src: "/video/call-hook-2.webp", alt: "A person at a desk in an open office with a video on screen", caption: "Illustrative stock footage: rebuild one real project in the new tool before moving everything over.", w: 960, h: 540 } },
        "KeyFly runs on Mac, Windows and the web: [download it](/#download) or start in the browser. See what it can do on the [product page](/product) and the [use cases](/use-cases), and how it connects to the tools you already use on [integrations](/integrations).",
        "Cardboard, Descript, CapCut, VEED, Kapwing, Runway and OpusClip are trademarks of their owners. This guide compares public information as it stood on 19 November 2026 and isn't endorsed by any of them. Spot something out of date? Write to [help@keyfly.si](mailto:help@keyfly.si) and we'll fix it.",
      ],
    },
  ],
  faq: [
    {
      q: "What is the best free alternative to Cardboard?",
      a: "It depends on how you work. KeyFly has a Free plan that never expires, runs on Mac, Windows and the web, and exports at 1080p with a small mark. CapCut has a free tier across desktop, web and mobile. Descript, VEED and Kapwing all have free plans that export at 720p with a watermark. Runway's free plan gives 125 one-time credits for generation.",
    },
    {
      q: "Is there a Cardboard alternative for Windows?",
      a: "Yes. As of 19 November 2026, Cardboard's Windows app was listed as in development, with Windows users working in the browser. KeyFly has a desktop app for Windows 10 and 11 (64-bit), Descript has one for Windows 11 and newer, and CapCut's desktop app runs on Windows too. VEED, Kapwing, Runway and OpusClip run in the browser.",
    },
    {
      q: "Which AI video editors export timelines to Premiere Pro, Final Cut Pro or DaVinci Resolve?",
      a: "Of the tools in this guide, KeyFly exports FCPXML, EDL and OpenTimelineIO for Final Cut Pro, Resolve, Premiere Pro and Avid. Descript exports Premiere, Resolve and Final Cut timelines on Creator and up. OpusClip exports XML for Premiere Pro on Pro. Cardboard exports FCPXML and Premiere XML from its web editor on Starter and up, at 30 fps.",
    },
    {
      q: "Can I use Claude or ChatGPT to edit video?",
      a: "Yes, with several tools. KeyFly runs inside ChatGPT and Claude, and Claude Code, Codex, Cursor, Antigravity or any ACP agent can edit your KeyFly timeline on your own plan without AI minutes. Descript, Kapwing and OpusClip offer MCP connections that use their own credits. Cardboard connects a Claude or ChatGPT subscription in its Mac app.",
    },
    {
      q: "Is Descript better than Cardboard?",
      a: "For editing talking-head and podcast recordings by transcript, Descript is very strong: text-based editing, filler-word removal, Studio Sound and wide timeline export. Cardboard is closer to a chat-first editor that builds a first cut from a prompt or footage. If you want that chat-first approach on Windows or with your own agent, KeyFly is the closer match.",
    },
    {
      q: "What is the best AI video editor in 2026?",
      a: "There isn't one best for everyone. For chat-driven first cuts with templates, brand kits and handoff to pro editors, KeyFly. For transcript editing, Descript. For free social editing on every device, CapCut. For AI-generated shots, Runway. For long videos into short clips, OpusClip. Choose by your main job, your computer and how you finish your videos.",
    },
    {
      q: "Do these AI video editors train on my videos?",
      a: "Policies differ, so read each one. KeyFly doesn't train AI models on your content. Descript's help centre says its production models use no user data and research uses only opted-in data. Cardboard's privacy policy allows it to use content to train and improve its technology, with data sharing on by default in its Mac app. We didn't find a clear statement for the others.",
    },
    {
      q: "How much does Cardboard cost compared with the alternatives?",
      a: "On 19 November 2026, Cardboard listed Lite, Starter, Creator and Pro from $10 to $250 a month, lower billed yearly. Descript started at $16 a month yearly, VEED's Creator at $25 a month, Kapwing Pro at $16, Runway Standard at $15 and OpusClip Starter at $15. KeyFly's current prices are on its pricing page, and its Free plan never expires.",
    },
  ],
};

export default post;
