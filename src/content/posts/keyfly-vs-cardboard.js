// Sources:
// KeyFly: src/content/home.js, product.js, integrations.js, pricing.js, use-cases.js, legal.js and blog.js
// (platforms, templates, brand kit, talking heads, timeline export and Package for editing, own agents
// through the desktop app, AI minutes, Free/BYO/Team/Enterprise, review links, privacy).
// Cardboard (public pages, checked 19 Nov 2026):
//   https://www.cardboard.ai (product, YC W26, chat-driven editing, Recipes, share links)
//   https://www.cardboard.ai/desktop (Mac app Apple silicon only; Intel Macs and Windows use the browser; Windows app in development)
//   https://www.cardboard.ai/pricing (Lite, Starter, Creator, Pro; monthly and yearly prices; Lite free in the Mac app; export limits; teams via sales; top-ups)
//   https://www.cardboard.ai/mcp (ChatGPT and Claude plugins on every plan, using Cardboard credits)
//   https://www.cardboard.ai/changelog (own Claude or ChatGPT/Codex subscription in the Mac app, including Lite, since 28 Sep 2026)
//   https://www.cardboard.ai/privacy (content may be used to train, test and improve its technology; Mac app data sharing on by default)
//   https://learn.usecardboard.com/export/export-your-video.md (FCPXML and Premiere XML, web editor only, Starter and up, 30 fps; MP4, WebM, MOV, MKV up to 4K)
//   https://learn.usecardboard.com (features: .prproj import on Mac, captions, reframing, filler words, voice-over, cloning, B-roll, 3D scenes)
const post = {
  slug: "keyfly-vs-cardboard",
  topic: "compare",
  date: { iso: "2026-11-19", text: "19 November 2026" },
  title: "KeyFly vs Cardboard: an honest comparison for Cardboard users thinking of switching",
  seoTitle: "KeyFly vs Cardboard: AI video editor comparison (2026)",
  dek: "KeyFly vs Cardboard for people already on Cardboard: Windows, your own AI agent, Avid and EDL hand-off, brand kits, teams, privacy, and how to move across.",
  cover: { video: "/video/edit-after.mp4", poster: "/video/edit-after.webp", alt: "A crowd in front of a lit concert stage" },
  sections: [
    {
      id: "short",
      title: "Is KeyFly or Cardboard the better AI video editor?",
      blocks: [
        "KeyFly and Cardboard do the same core job: you describe a video or drop in footage, an AI builds an editable first cut, and you change it in words or on a timeline. KeyFly is the better fit if you work on Windows or an Intel Mac, want your own AI agent to edit, hand cuts to Avid or Premiere, or need a brand kit and a self-serve Team plan. Cardboard is the better fit if you open Premiere .prproj files on a Mac, want 3D scenes, or rely on web-sourced B-roll.",
        "This guide is written for people who already use [Cardboard](https://www.cardboard.ai) and are weighing a move. Everything about Cardboard comes from its own public pages and help centre, checked on 19 November 2026. Everything about KeyFly comes from KeyFly's own site and app.",
        "In short:",
        {
          list: [
            "**Platforms.** KeyFly has desktop apps for Windows 10 and 11 and for Macs with Apple silicon or Intel (macOS 13 or later), plus a web app. Cardboard's Mac app needs Apple silicon, and its Windows app is listed as in development.",
            "**Your own AI.** Both let you bring an AI subscription. KeyFly works with Claude Code, Codex, Cursor, Antigravity or any ACP agent, without using AI minutes.",
            "**Hand-off.** KeyFly exports FCPXML, EDL (CMX 3600) and OpenTimelineIO, packaged with every file, from desktop or web. That covers Avid. Cardboard exports FCPXML and Premiere XML from its web editor.",
            "**On brand.** KeyFly has a brand kit filled from your website, and 91 templates. Cardboard has Recipes to remix; we found no brand kit in its docs.",
            "**Teams and data.** KeyFly's Team plan is self-serve and priced per seat, and KeyFly doesn't train AI models on your content. Cardboard handles teams through sales, and its privacy policy allows content to be used to train and improve its technology.",
            "**Where Cardboard wins.** Opening Premiere .prproj projects, 3D scenes, and web-sourced B-roll.",
          ],
        },
      ],
    },
    {
      id: "table",
      title: "How do KeyFly and Cardboard compare side by side?",
      blocks: [
        "The table below is the quick version; each row has its own section further down. Cardboard's column reflects its website, help centre and privacy policy on 19 November 2026. Products change quickly, so check their pages before you decide.",
        {
          table: {
            head: ["", "KeyFly", "Cardboard"],
            rows: [
              ["Desktop apps", "macOS 13+ (Apple silicon and Intel), Windows 10 and 11 (64-bit)", "Mac with Apple silicon (M1 or later); Windows app in development"],
              ["Web app", "Yes, at app.keyfly.si", "Yes, in Chrome"],
              ["Inside ChatGPT and Claude", "Yes", "Yes, plugins on every plan, using Cardboard credits"],
              ["Your own AI agent", "Claude Code, Codex, Cursor, Antigravity or any ACP agent, without AI minutes", "A Claude or ChatGPT/Codex subscription, in the Mac app"],
              ["Timeline export", "FCPXML, EDL and OpenTimelineIO, from desktop or web", "FCPXML and Premiere XML, web editor only, Starter and up, 30 fps"],
              ["Opens in", "Final Cut Pro, DaVinci Resolve, Premiere Pro, Avid", "Final Cut Pro, DaVinci Resolve, Premiere Pro"],
              ["Media packaged with the timeline", "Yes, Package for editing", "Not described in its export docs"],
              ["Import a Premiere project", "Not offered", "Yes, .prproj in the Mac app"],
              ["Brand kit", "Logo, five colours, font, tone, voice; filled from your website", "Not found in its docs"],
              ["Starting points", "91 templates, 10 categories, four shapes", "Recipes: finished edits to remix"],
              ["Talking heads", "Silences and filler words cut, captions, zooms, callouts", "Filler words, dead air and retakes removed, captions, reframing"],
              ["Voice", "AI voice-over or your cloned voice", "AI voice-over from Starter, cloning from Creator"],
              ["Generated extras", "AI images, music beds, sound effects, motion graphics", "Generated video, images, music, SFX, motion graphics, 3D scenes, web-sourced B-roll"],
              ["Free to start", "Free plan that never expires, plus a 7-day Creator trial, no card", "Lite, free in the Mac app with one-time credits and 3 exports"],
              ["Teams", "Self-serve Team plan, per seat", "Through sales"],
              ["Training on your content", "No", "Its privacy policy allows it"],
            ],
          },
        },
      ],
    },
    {
      id: "platforms",
      title: "Does Cardboard work on Windows or Intel Macs?",
      blocks: [
        "Only in the browser, for now: Cardboard's Mac app needs an Apple silicon Mac, and its desktop page asks Windows and Intel Mac users to use the web editor in Chrome while a Windows app is in development. KeyFly has native desktop apps for both.",
        "On an M-series Mac you won't notice a difference. On a Windows PC or an Intel Mac, Cardboard keeps you in a browser tab, which matters for three reasons.",
        {
          list: [
            "**Features that live in the Mac app.** On Cardboard, opening Premiere .prproj files and connecting your own Claude or ChatGPT subscription are described as Mac app features. A Windows user can't reach them yet.",
            "**Your footage.** In KeyFly's desktop app, footage stays on your computer and is uploaded only when a cloud AI step needs it. A browser-only workflow means working with whatever the web editor needs uploaded.",
            "**Exports.** KeyFly encodes exports on your device, on Mac and Windows alike, and exporting never uses AI minutes.",
          ],
        },
        "KeyFly's desktop app runs on macOS 13 or later on both Apple silicon and Intel, and on 64-bit Windows 10 and 11. When you're away from your own machine, the same projects open in the web app at [app.keyfly.si](https://app.keyfly.si). There's more on the Windows side in [the best AI video editor for Windows](/blog/ai-video-editor-for-windows).",
        {
          image: {
            src: "/video/footage-loop.webp",
            alt: "A man talking to camera in a studio",
            caption: "Illustrative footage. A typical talking-head shoot: on KeyFly it can be edited in the desktop app on Windows, an Intel Mac or Apple silicon, without uploading the whole recording.",
            w: 1280,
            h: 720,
          },
        },
        { tip: "Download the desktop app from [the download section](/#download). It's the same account and the same projects as the web app, so you can start on one machine and finish on another." },
      ],
    },
    {
      id: "agents",
      title: "Can I use my own AI agent instead of paying for credits?",
      blocks: [
        "Yes, on both, but in different ways: Cardboard's Mac app connects a Claude or ChatGPT/Codex subscription, while KeyFly works with Claude Code, Codex, Cursor, Antigravity or any agent that speaks ACP, and your agent's work never uses KeyFly's AI minutes.",
        "Cardboard added the option to connect your own Claude or ChatGPT/Codex subscription in its Mac app (under Settings, then Agents), and since 28 September 2026 that works on its Lite plan too. Its ChatGPT and Claude plugins, which are on every plan, use Cardboard credits.",
        "KeyFly's approach is aimed at people who already work in coding agents. You turn on `Use agents on this computer` in the desktop app's Settings → Agents, then choose `Your agents` in the editor's AI picker. The agent edits your timeline on your own plan with its provider. If it reaches its limit, KeyFly tells you when it resets and offers another agent that still has capacity, or KeyFly Cloud if your plan includes it. If the connection doesn't pick up on its own, you can pair with a code.",
        {
          table: {
            head: ["", "KeyFly", "Cardboard"],
            rows: [
              ["Agents", "Claude Code, Codex, Cursor, Antigravity, any ACP agent", "Claude or ChatGPT/Codex subscription"],
              ["Where it connects", "Desktop app, Mac or Windows", "Mac app (Apple silicon)"],
              ["Uses the editor's own credits", "No AI minutes", "Own subscription: no; plugins: Cardboard credits"],
              ["Free plan", "Yes, with a daily limit; BYO plan removes the limits", "Yes, on Lite"],
            ],
          },
        },
        "Two things follow. First, a Windows user can bring their own agent on KeyFly today. Second, if you already pay for Claude, ChatGPT or Cursor, KeyFly's BYO plan is built around that: it takes the Free plan's limits off while your agent does the AI work. The detail, including what to type and how edits show up, is in [edit video with Claude Code, Codex or Cursor](/blog/edit-video-with-claude-code-codex-cursor), and the agent list is on [Integrations](/integrations).",
        {
          image: {
            src: "/video/agent-reel.webp",
            alt: "A woman talking into a microphone in a podcast studio",
            caption: "Illustrative footage. A podcast recording like this is the kind of job people hand to their own agent: cut the silences, add captions, then review the result in KeyFly's timeline.",
            w: 1280,
            h: 720,
          },
        },
      ],
    },
    {
      id: "handoff",
      title: "Can I export a Cardboard or KeyFly edit to Premiere, Resolve, Final Cut or Avid?",
      blocks: [
        "Both export timelines, but KeyFly covers more editors and formats: FCPXML, EDL (CMX 3600) and OpenTimelineIO, from the desktop or the web, with an option to package every file. Cardboard exports FCPXML and Premiere XML from its web editor only.",
        "According to Cardboard's help centre, timeline export is available in the web editor on the Starter plan and above, as FCPXML or Premiere XML, at 30 fps. That opens in Final Cut Pro, DaVinci Resolve and Premiere Pro. There's no EDL or OpenTimelineIO, so an Avid suite has no direct route in.",
        "KeyFly writes three formats, and each one opens in the editors that read it best:",
        {
          table: {
            head: ["Your editor", "KeyFly format", "Cardboard format"],
            rows: [
              ["Final Cut Pro", "FCPXML", "FCPXML"],
              ["DaVinci Resolve", "FCPXML, EDL or OpenTimelineIO", "FCPXML or Premiere XML"],
              ["Premiere Pro", "EDL", "Premiere XML"],
              ["Avid Media Composer", "EDL", "Not listed"],
            ],
          },
        },
        "To be fair to Cardboard, Premiere XML can carry more of a sequence into Premiere than an EDL, which is a cut list (which clip, where it starts and ends). If you live in Premiere and want the richest possible round trip, test both on a real project before you choose.",
        "The bigger practical difference is media. A timeline file on its own points at footage your editor may not have. KeyFly's **Package for editing** makes a .zip with a folder per editor, each holding the timeline and every file it uses (footage, voice-over, music, pictures), linked by relative paths so it opens with its media. You can also include graphics, titles and captions as 1080p PNG sequences with transparency. Each folder has its own copy of the media, so pick one editor for a smaller download.",
        {
          steps: [
            ["Open the export sheet", "In the editor, open export and choose `Package for editing`."],
            ["Pick your editor", "Final Cut Pro, DaVinci Resolve, Premiere Pro or Avid. Choose one to keep the download small."],
            ["Choose graphics", "Switch on `Include graphics, titles and captions` if you want them as transparent PNG sequences."],
            ["Unzip and open", "Open the timeline file from its folder; the media links up by relative path."],
          ],
        },
        "Which plans include timeline export is on the [plan comparison](/pricing#compare). Every format and editor is covered in [hand off a KeyFly cut to Final Cut, Resolve, Premiere or Avid](/blog/export-timeline-to-final-cut-resolve-premiere-avid).",
        {
          image: {
            src: "/video/edit-before.webp",
            alt: "A crowd in front of a concert stage before colour grading",
            caption: "Illustrative footage, before the grade. A packaged timeline lets a colourist pick the cut up in Resolve with the original media, rather than working from a flattened export.",
            w: 960,
            h: 600,
          },
        },
      ],
    },
    {
      id: "brand",
      title: "Does Cardboard have a brand kit?",
      blocks: [
        "We couldn't find one in Cardboard's help centre on 19 November 2026; KeyFly has a brand kit that you can fill from your website in one step.",
        "KeyFly's brand kit holds your logo (plus versions and banners), five colours, a font, a tone of voice and a voice-over, either an AI voice or your own cloned voice. Paste your website's address, press `Analyze with AI`, and KeyFly reads your public pages and fills in the logo, colours, font and tone it finds. You check it, change anything that's off, and every new video starts on brand.",
        "For an agency or a marketing team juggling several brands, it means not briefing the AI on colours and logos every time. On a Team plan, brand kits and the library are shared.",
        "If you've been getting consistency on Cardboard by remixing the same Recipe or repeating your colours in every prompt, the brand kit replaces that habit. The walkthrough is in [fill a brand kit from your website](/blog/brand-kit-from-your-website).",
        {
          image: {
            src: "/video/cases/launch.webp",
            alt: "Hands opening a box, with the words \"is here.\"",
            caption: "Illustrative, made in a KeyFly style. Launch graphics like this pick up the logo, colours and font from the brand kit instead of from the prompt.",
            w: 960,
            h: 540,
          },
        },
      ],
    },
    {
      id: "templates",
      title: "How do KeyFly templates compare with Cardboard Recipes?",
      blocks: [
        "They solve the same problem from different ends: a Cardboard Recipe is a finished edit you remix with your own footage, while a KeyFly template is a designed starting point in a fixed shape and length that the AI director fills with your story.",
        "KeyFly has 91 templates in 10 categories, in 16:9, 9:16, 1:1 and 4:5, from 4 to 90 seconds. They range from logo reveals and end cards to talking heads, product demos and podcast clips; browse them on [Use cases](/use-cases). Or skip templates and start from a sentence or your own footage.",
        "Whichever you start from, KeyFly's AI director writes the storyboard, voice-over and motion graphics, and leaves a note on every call it makes. Each note has `Revert` and `Retry`, so you can undo a single decision without starting over. If you're used to remixing a Recipe and then fixing it in chat, that's the closest equivalent.",
        {
          gallery: {
            items: [
              { src: "/video/templates/linkedin-talking-head.webp", alt: "A frame from the LinkedIn talking head template", label: "LinkedIn talking head · 1:1", w: 300, h: 300 },
              { src: "/video/templates/founder-update.webp", alt: "A frame from the Founder update template", label: "Founder update · 16:9", w: 384, h: 216 },
              { src: "/video/templates/feature-tour.webp", alt: "A frame from the Feature tour template", label: "Feature tour · 16:9", w: 384, h: 216 },
              { src: "/video/templates/brand-story.webp", alt: "A frame from the Brand story template", label: "Brand story · 16:9", w: 384, h: 216 },
            ],
            caption: "Frames from four KeyFly templates, recorded in the app: LinkedIn talking head, Founder update, Feature tour and Brand story. Browse all 91 on the Use cases page.",
          },
        },
        "A fair note: if a particular Cardboard Recipe is the reason you use Cardboard, there's no way to bring it across as-is. Pick the nearest template, or describe the edit in a sentence, and adjust from there. [Text to video with AI](/blog/text-to-video-ai) covers how to write that first sentence well.",
      ],
    },
    {
      id: "talking-heads",
      title: "Which is better for talking heads, podcasts and voice-over?",
      blocks: [
        "Both handle the basics well: removing filler words and dead air and adding captions. Cardboard also lists retake removal and reframing; KeyFly adds zooms and callouts, and leaves every change open to edit.",
        "On KeyFly, drop in a recording and the AI cuts silences and filler words, adds captions, and adds zooms and callouts where they help. Every cut is on the timeline, so you can restore a pause that was there for effect, or take out a zoom you don't like. Ten of the templates are built for talking heads and podcasts, including Podcast clip, Hot take, Expert tip, Interview highlights and Long talk with chapters.",
        "Cardboard's help centre lists removing filler words, dead air and retakes, plus captions and reframing for other shapes. If retake detection (keeping the last good take of a repeated line) is central to how you record, try it on both with the same file. KeyFly exports every shape you're likely to need (16:9, 9:16, 1:1 and 4:5), so one recording can become a YouTube video and a set of vertical clips.",
        {
          image: {
            src: "/video/footage-raw.webp",
            alt: "A young man in earphones talking to camera by a window, raw take",
            caption: "Illustrative footage, the raw take. The cut version below is the same recording after silences and filler words come out.",
            w: 960,
            h: 540,
          },
        },
        {
          image: {
            src: "/video/footage-cut.webp",
            alt: "The same young man talking to camera, after the edit",
            caption: "Illustrative footage, the cut. On KeyFly every removed pause stays on the timeline, so you can bring one back.",
            w: 960,
            h: 540,
          },
        },
        "Step-by-step guides: [clean up a talking-head video](/blog/clean-up-talking-head-video) and [edit talking-head video with AI](/blog/edit-talking-head-video-with-ai).",
        "**Voice-over and voice cloning.** Both have them. Cardboard puts AI voice-over on Starter and above and voice cloning on Creator and above; KeyFly offers AI voice-overs and a cloned voice on the plans that include cloning.",
        "In KeyFly, the voice is part of the brand kit, so a chosen AI voice or your cloned voice is used by default in every new video. Voice-overs use AI minutes, and each action shows its cost before it runs. KeyFly's privacy policy says voice samples are used only to make your cloned voice, never to train shared or other people's voices, and you can delete them at any time.",
        "If you've already cloned your voice on Cardboard, you'll need to record a sample again in KeyFly: voice clones don't move between products. Which KeyFly plans include cloning is on the [pricing page](/pricing).",
      ],
    },
    {
      id: "pricing",
      title: "How much does Cardboard cost compared with KeyFly?",
      blocks: [
        "On 19 November 2026, Cardboard listed four plans from $10 to $250 a month; KeyFly's current prices are always on its [pricing page](/pricing), because they're kept current there. The structures differ more than the headline numbers.",
        "Cardboard's [pricing page](https://www.cardboard.ai/pricing) on that date listed Lite, Starter, Creator and Pro at $10, $40, $100 and $250 a month, or $8, $29, $59 and $175 a month billed yearly, with first-month launch offers. Lite can be used free in the Mac app with one-time credits and three lifetime exports at 1080p with a watermark. Starter adds unlimited 1080p exports, and Creator and Pro export in 4K. Top-ups on Starter and above don't expire. Team plans go through sales. These numbers change often, so treat them as a snapshot.",
        "KeyFly's structure:",
        {
          list: [
            "**Free**, which never expires: 1080p exports with a small KeyFly mark, and your own agent with a daily limit. Projects never expire either.",
            "**A 7-day Creator trial** on every new account, with no card.",
            "**BYO**, for people whose own agent does the AI work, with the Free plan's limits taken off.",
            "**Starter, Creator and Pro**, with KeyFly's AI and exports up to 4K without the mark.",
            "**Team**, self-serve and priced per seat, and **Enterprise** by arrangement.",
          ],
        },
        "KeyFly's AI work is counted in AI minutes, one unit for everything its cloud AI does, measured by the AI's actual work rather than time on the clock. Editing by hand, exporting and your own agent never count. Every action shows its cost before it runs, failed AI work is refunded automatically, unused plan minutes roll over one period (up to one period's allowance), and AI-minute packs don't expire while the account is open. The full explanation is in [what is an AI minute](/blog/what-is-an-ai-minute).",
        { tip: "To compare like for like, list what you actually used on Cardboard last month (exports, 4K, voice cloning, team members), then match those lines on [KeyFly's plan comparison](/pricing#compare)." },
      ],
    },
    {
      id: "teams",
      title: "Which is better for teams and agencies?",
      blocks: [
        "KeyFly, if you want to set a team up yourself today: its Team plan is self-serve and priced per seat, while Cardboard's pricing page sends teams to sales.",
        "KeyFly's Team plan gives every seat KeyFly's AI and shares brand kits and the library, with roles, comments and one bill. Seats you add are charged straight away for the rest of the billing period; seats you remove come off at the next renewal. Enterprise adds single sign-on and SCIM, a data processing agreement and data residency.",
        "For reviews, both have share links. Cardboard's share links take timecoded comments. KeyFly's review links let anyone with the link watch the video, comment at a moment, and approve it or ask for changes, without being able to edit it. Comments show up in the project's Feedback.",
        {
          image: {
            src: "/video/audience/marketers.webp",
            alt: "A man in a suit standing by a whiteboard",
            caption: "Illustrative. On a Team plan, a marketing lead can approve a cut from a review link without a seat or an editor open.",
            w: 960,
            h: 540,
          },
        },
      ],
    },
    {
      id: "data",
      title: "Does Cardboard or KeyFly train AI on your videos?",
      blocks: [
        "KeyFly doesn't use your content to train AI models. Cardboard's privacy policy, as of 19 November 2026, says it may use information, including your content, to train, test and improve its technology, and its Mac app shares data to improve Cardboard by default.",
        "If your footage includes clients, unreleased products or people who haven't agreed to more than the video itself, this difference is worth reading in full on both sides. On Cardboard, you can switch off data sharing in the Mac app's settings; check its [privacy policy](https://www.cardboard.ai/privacy) for what that covers.",
        "On KeyFly:",
        {
          list: [
            "Your content is never used to train AI models.",
            "Each AI step sends a provider only what that step needs.",
            "In the desktop app, footage stays on your computer and is uploaded only when a cloud AI step needs it. Exports are made on your device.",
            "Usage data never includes your videos, prompts or files, and you can switch it off in Settings.",
            "You can see, export, correct or delete your data by asking.",
          ],
        },
        "The details are in KeyFly's [Privacy Policy](/privacy).",
      ],
    },
    {
      id: "cardboard-better",
      title: "When is Cardboard the better choice?",
      blocks: [
        "Cardboard is the better pick if you need to open Premiere .prproj projects, want 3D scenes or web-sourced B-roll, or are happy on an Apple silicon Mac with its Recipes.",
        {
          list: [
            "**You start from Premiere projects.** Cardboard's Mac app can open a Premiere .prproj file and work on it. KeyFly doesn't import Premiere projects; it starts from your footage, a sentence or a template.",
            "**You want 3D scenes.** Cardboard lists 3D scenes among the things it generates from a prompt. KeyFly doesn't list them.",
            "**You lean on web-sourced B-roll.** Cardboard's Creator plan and above include stock and web-sourced B-roll. KeyFly's generated extras are AI images, music beds and sound effects, alongside your own footage.",
            "**A Recipe is your workflow.** If one Cardboard Recipe does exactly the job, it may be quicker to stay than to rebuild it from a KeyFly template.",
            "**Premiere XML matters to you.** If your finishing editor wants Premiere XML rather than an EDL, Cardboard exports it; KeyFly sends Premiere an EDL.",
          ],
        },
        "Neither product is wrong for everyone. Plenty of people will keep a tool for the one thing it does best. If that's you, KeyFly's Free plan never expires, so you can keep it alongside Cardboard without paying twice. For a wider view of the field, see [Cardboard alternatives](/blog/cardboard-alternatives).",
      ],
    },
    {
      id: "switch",
      title: "How do I move from Cardboard to KeyFly?",
      blocks: [
        "Export what you want to keep from Cardboard, start a free KeyFly account, set up your brand kit and voice, then rebuild active projects from their source footage. You can be working in KeyFly the same day.",
        "Cardboard projects don't open in KeyFly, so the aim is to bring across your finished videos, your source files and your settings, not the project files themselves.",
        {
          steps: [
            ["Export finished videos from Cardboard", "Download anything you want to keep as a video file. Cardboard exports MP4, WebM, MOV or MKV, up to 4K on Creator and Pro."],
            ["Keep a timeline of work in progress", "On Starter or above, export an FCPXML or Premiere XML of any half-finished cut from Cardboard's web editor. It's a record of your edit decisions you can open in Final Cut, Resolve or Premiere."],
            ["Collect your original footage", "Gather the raw recordings, logos, music and voice-over files in one folder. KeyFly works from your originals, so this is the important step."],
            ["Start free", "[Sign up](https://app.keyfly.si/signup?plan=free) on the web, or [download the desktop app](/#download) for Mac or Windows. Your 7-day Creator trial starts with no card."],
            ["Fill your brand kit", "Paste your website's address and press `Analyze with AI`, then check the logo, five colours, font and tone it found."],
            ["Set your voice", "Pick an AI voice for the brand kit, or record a sample to clone your voice on a plan that includes cloning."],
            ["Rebuild one active project", "Drop the footage in and describe the edit in a sentence, or pick the template nearest your old Recipe. Read the AI director's notes and use `Revert` or `Retry` on anything you'd do differently."],
            ["Connect your agent (optional)", "In the desktop app, turn on `Use agents on this computer` in Settings → Agents, then choose `Your agents` in the AI picker to edit with Claude Code, Codex, Cursor or Antigravity."],
            ["Re-share for review", "Send a KeyFly review link to anyone who reviewed on Cardboard. They can comment at a moment and approve or ask for changes."],
            ["Export and check", "Export a test in each shape you publish. Settings per platform are in [video export settings for every platform](/blog/video-export-settings-every-platform)."],
            ["Wind down Cardboard", "Once your active work is across, check Cardboard's terms for what happens to unused top-ups and credits before you cancel, and switch off data sharing in its Mac app if you'll keep it installed."],
          ],
        },
        { tip: "Run the trial on a real project rather than a test clip. A week is enough to rebuild one video, try your own agent, and send one cut through Package for editing to the editor you finish in." },
      ],
    },
    {
      id: "choose",
      title: "Which should you choose: KeyFly or Cardboard?",
      blocks: [
        "Choose by how you work: your computer, where your cuts finish, and who else touches them. The table matches common Cardboard users to the better fit.",
        {
          table: {
            head: ["If you are…", "Better fit", "Why"],
            rows: [
              ["On Windows", "KeyFly", "Native app on Windows 10 and 11; Cardboard is browser-only on Windows for now"],
              ["On an Intel Mac", "KeyFly", "Native app on Intel Macs; Cardboard's Mac app needs Apple silicon"],
              ["A developer using Claude Code, Codex or Cursor", "KeyFly", "Any ACP agent edits on your own plan, without AI minutes"],
              ["An Avid or broadcast editor", "KeyFly", "EDL export with media packaged; Cardboard has no Avid route"],
              ["A Resolve or Final Cut finisher", "Either; KeyFly if you want media packaged", "Both export FCPXML; KeyFly adds OTIO and Package for editing"],
              ["A Premiere editor starting from .prproj files", "Cardboard", "It opens Premiere projects in its Mac app"],
              ["A marketing team with brand rules", "KeyFly", "Brand kit filled from your website, shared on Team"],
              ["An agency with several clients", "KeyFly", "Self-serve per-seat Team plan, shared kits, review links with approval"],
              ["A creator who wants 3D scenes or web B-roll", "Cardboard", "It lists both; KeyFly doesn't"],
              ["Working with sensitive or client footage", "KeyFly", "No training on your content; desktop footage stays local unless an AI step needs it"],
              ["Happy on Apple silicon with a Recipe that works", "Stay on Cardboard", "Switching costs time; KeyFly's Free plan is there to try alongside"],
            ],
          },
        },
        "If you're still unsure, the cheapest test is to run both on the same footage for a week. KeyFly's Free plan never expires and the Creator trial needs no card, so it costs you nothing to find out. See what KeyFly does on the [product page](/product), or [start free](https://app.keyfly.si/signup?plan=free).",
        "Cardboard is a trademark of its owner. This page compares public information and isn't endorsed by Cardboard. Spot something out of date? Write to [help@keyfly.si](mailto:help@keyfly.si) and we'll fix it.",
      ],
    },
  ],
  faq: [
    {
      q: "Is KeyFly a good Cardboard alternative?",
      a: "Yes, especially if you work on Windows or an Intel Mac, want your own AI agent to edit, or finish in Avid. KeyFly does the same core job as Cardboard, turning a sentence or footage into an editable first cut, and adds a brand kit, 91 templates, EDL and OpenTimelineIO export and a self-serve Team plan. Cardboard remains stronger for Premiere .prproj import, 3D scenes and web-sourced B-roll.",
    },
    {
      q: "Does Cardboard have a Windows app?",
      a: "Not yet. On 19 November 2026, Cardboard's desktop page described its Mac app as Apple silicon only and listed a Windows app as in development. Windows and Intel Mac users are asked to use the web editor in Chrome. KeyFly has native desktop apps for Windows 10 and 11 (64-bit) and for macOS 13 or later on both Apple silicon and Intel, plus a web app.",
    },
    {
      q: "Can I export a Cardboard edit to Avid?",
      a: "Not directly, based on Cardboard's help centre on 19 November 2026. Cardboard exports timelines as FCPXML or Premiere XML from its web editor, on Starter and above, at 30 fps, with no EDL or OpenTimelineIO. KeyFly exports EDL (CMX 3600), which Avid reads, and its Package for editing option zips the timeline with every file it uses so it opens with its media.",
    },
    {
      q: "Can I import my Cardboard projects into KeyFly?",
      a: "No. Cardboard projects don't open in KeyFly. To move across, export your finished videos from Cardboard, keep an FCPXML or Premiere XML of any work in progress as a record, and gather your original footage. Then rebuild active projects in KeyFly from the source files, using a template or a one-sentence description. A brand kit filled from your website gets new videos on brand straight away.",
    },
    {
      q: "Does Cardboard use my videos to train AI?",
      a: "Cardboard's privacy policy, as read on 19 November 2026, says it may use information, including content, to train, test and improve its technology, and its Mac app shares data to improve Cardboard by default, which you can switch off. KeyFly doesn't use your content to train AI models, and in its desktop app footage stays on your computer unless a cloud AI step needs it.",
    },
    {
      q: "Can I use my ChatGPT or Claude subscription to edit video?",
      a: "Yes, with either product. Cardboard's Mac app connects a Claude or ChatGPT/Codex subscription. KeyFly's desktop app, on Mac or Windows, works with Claude Code, Codex, Cursor, Antigravity or any ACP agent, and your agent's work uses no KeyFly AI minutes. KeyFly's Free plan allows this with a daily limit, and the BYO plan removes the limits.",
    },
    {
      q: "Is KeyFly cheaper than Cardboard?",
      a: "It depends on what you use. Cardboard listed plans from $10 to $250 a month on 19 November 2026. KeyFly's prices are on its pricing page, which is always current. KeyFly has a Free plan that never expires, a BYO plan for people bringing their own AI, and a per-seat Team plan, so compare the features you actually use rather than headline prices.",
    },
    {
      q: "Does KeyFly have a free plan like Cardboard Lite?",
      a: "Yes. KeyFly's Free plan never expires and works on the web and on desktop. It exports at 1080p with a small KeyFly mark, and lets your own agent edit with a daily limit. Every new account also gets a 7-day Creator trial with no card. Cardboard's Lite is free in its Mac app with one-time credits and three lifetime exports at 1080p with a watermark.",
    },
  ],
};

export default post;
