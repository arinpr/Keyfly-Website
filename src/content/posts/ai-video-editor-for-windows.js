// Sources: KeyFly facts from src/content/home.js (download section: Windows 10
// and 11, 64-bit, app.keyfly.si/download/windows, "Run the installer. Windows
// asks once before KeyFly first opens."), product.js, integrations.js,
// pricing.js, use-cases.js (template names and shapes), legal.js and the
// existing posts in blog.js (AI minutes, timeline export, own agents,
// talking heads, brand kit, export settings).
// Cardboard: https://cardboard.ai/desktop (Mac app needs Apple silicon, M1 or
// later; Intel Macs and Windows use the browser; Windows app not out yet),
// https://learn.usecardboard.com/export/export-your-video.md (timeline export
// as FCPXML and Premiere XML from the web editor, Starter and up, 30 fps),
// https://cardboard.ai/mcp and https://cardboard.ai/changelog (own Claude or
// ChatGPT/Codex subscription connects in the Mac app). All checked 19 Nov 2026.
const post = {
  slug: "ai-video-editor-for-windows",
  topic: "guides",
  date: { iso: "2026-11-19", text: "19 November 2026" },
  title: "The AI video editor for Windows: a complete guide to editing with AI on Windows 10 and 11",
  seoTitle: "AI video editor for Windows 10 and 11: a full guide",
  dek: "What an AI video editor does, why Windows users get left out, and how to install KeyFly on Windows 10 or 11, edit with AI and hand off to Premiere or Resolve.",
  cover: { video: "/video/call-hook-2.mp4", poster: "/video/call-hook-2.webp", alt: "A person at a desk in an open office with a video on screen" },
  sections: [
    {
      id: "answer",
      title: "Is there a proper AI video editor for Windows?",
      blocks: [
        "Yes. KeyFly is an AI video editor with a native desktop app for Windows 10 and 11 (64-bit), as well as for macOS and the web. You describe a video or drop in your own footage, and its AI director builds an editable first cut on a real timeline, which you then change by hand or by asking in the chat.",
        "Many AI video editors are browser-only, or ship a desktop app for Mac first and ask Windows users to wait. This guide covers what an AI video editor actually does, what you need to run one on a PC, how to install KeyFly on Windows, and how to go from a sentence or a folder of clips to a finished export, or to a timeline you finish in Premiere Pro, DaVinci Resolve or Avid.",
        "**In short:**",
        {
          list: [
            "KeyFly runs natively on Windows 10 and 11 (64-bit), on Macs with Apple silicon or Intel, and in the browser at app.keyfly.si.",
            "Start from a sentence, your own footage, or one of 91 templates in 16:9, 9:16, 1:1 or 4:5.",
            "Talking heads get their silences and filler words cut, plus captions, zooms and callouts, all editable.",
            "Exports are encoded on your own PC and use no AI minutes.",
            "Timelines go to Premiere Pro, Resolve and Avid as EDL, FCPXML or OpenTimelineIO, with every file packed alongside.",
            "Claude Code, Codex, Cursor and other ACP agents on your PC can edit your timeline on your own plan.",
          ],
        },
        "You can [start free](https://app.keyfly.si/signup?plan=free) without a card, or go straight to the [Windows download](/#download).",
      ],
    },
    {
      id: "what-it-does",
      title: "What does an AI video editor actually do?",
      blocks: [
        "An AI video editor takes the slow, repetitive parts of editing off your hands and leaves you with an editable timeline, not a sealed-up video file.",
        "That last point is the one that separates a useful tool from a toy. Plenty of AI tools will turn a prompt into a clip. An AI video editor is different: it produces a project you can open, inspect and change, with every scene, voice-over line, caption and music bed on its own track. If the AI gets one thing wrong, you fix that one thing, rather than starting again.",
        "In KeyFly, the work is split like this:",
        {
          table: {
            head: ["Job", "What the AI does", "What you control"],
            rows: [
              ["Storyboard", "Writes the scenes and their order from your sentence or footage", "Reorder, rewrite or delete any scene"],
              ["Voice-over", "Writes the script and records it with an AI voice, or your cloned voice on higher plans", "Change the words, the voice or the timing"],
              ["Motion graphics", "Builds titles, callouts and on-screen text in a motion style", "Edit text, move or remove any graphic"],
              ["Music and sound", "Lays in a licensed music bed and sound effects", "Swap, trim or drop them"],
              ["Footage chores", "Cuts silences and filler words, adds captions, zooms and callouts", "Bring back a pause, rewrite a caption, move a zoom"],
              ["Images", "Generates AI images where a scene needs one", "Replace with your own pictures"],
            ],
          },
        },
        "The AI director also leaves a note on every call it makes: what it chose, why, what else would fit and what it would try next. Each change comes with `Revert` and `Retry`, so nothing it does is final until you say so. That makes the editor feel less like a black box and more like a first assistant who explains their cut.",
        { tip: "Every AI action shows its cost in AI minutes before it runs, and failed AI work is refunded automatically. [What an AI minute is](/blog/what-is-an-ai-minute)." },
      ],
    },
    {
      id: "windows-gap",
      title: "Why are Windows users underserved by AI video editors?",
      blocks: [
        "Because a lot of new AI video tools launch as a web app, a Mac app, or both, and treat Windows as a later job.",
        "There are understandable reasons. Small teams often build on Macs, and a browser app reaches every computer at once. But a browser tab is not the same as a desktop app when you edit video. Your footage has to be uploaded before anything happens, exports are usually rendered somewhere else and downloaded back, and agents and tools that live on your computer can't easily reach a tab.",
        "Cardboard, a well-known AI video editor driven by chat, is a fair example. Its own desktop page (checked 19 November 2026) says the Mac app needs Apple silicon (M1 or later), that Intel Mac users should use Cardboard in the browser, and that its Windows app isn't out yet, so Windows users also work in the browser for now. Its help centre also says timeline export to other editors happens from its web editor, and its own-AI connection (a Claude or ChatGPT/Codex subscription) is set up in the Mac app.",
        "None of that makes Cardboard a bad tool. If you edit on an Apple silicon Mac and like its chat-first workflow, it's a reasonable pick, and we compare the two fairly in [KeyFly vs Cardboard](/blog/keyfly-vs-cardboard). The point is narrower: if your main machine is a Windows PC, check whether a tool's desktop app actually runs on it before you build a workflow around it. For a wider look at the field, see [Cardboard alternatives](/blog/cardboard-alternatives).",
        {
          table: {
            head: ["What Windows users need", "Browser-only tool", "KeyFly on Windows"],
            rows: [
              ["Footage stays on your PC", "Uploaded first", "Stays on your computer unless an AI step needs it"],
              ["Exports", "Usually rendered remotely", "Encoded on your PC, no AI minutes"],
              ["Your own agent (Claude Code, Codex, Cursor)", "Hard to connect to a tab", "Connects through the desktop app"],
              ["Works away from your PC", "Yes", "Yes, at app.keyfly.si"],
            ],
          },
        },
        {
          image: {
            src: "/video/call-hook-2.webp",
            alt: "A person at a desk in an open office with a video on screen",
            caption: "Most office desks run Windows. Illustrative stock footage, not a KeyFly screenshot.",
            w: 960,
            h: 540,
          },
        },
      ],
    },
    {
      id: "requirements",
      title: "What do you need, and how do you install KeyFly on Windows?",
      blocks: [
        "KeyFly's desktop app needs Windows 10 or Windows 11, 64-bit; to install it, you download the installer, run it and sign in.",
        "That's the requirement the download page states. Beyond it, the practical needs are the same as for any video work on a PC: enough free disk space for your footage and exports, and an internet connection for the AI steps, signing in and syncing projects.",
        {
          table: {
            head: ["Platform", "Requirement", "Download"],
            rows: [
              ["Windows", "Windows 10 or 11, 64-bit", "app.keyfly.si/download/windows"],
              ["macOS (Apple silicon)", "macOS 13 Ventura or later", "app.keyfly.si/download/mac"],
              ["macOS (Intel)", "macOS 13 Ventura or later", "app.keyfly.si/download/mac-intel"],
              ["Web", "A current browser", "app.keyfly.si"],
            ],
          },
        },
        "Not sure whether your Windows is 64-bit? Open Settings, go to System, then About, and look at \"System type\". Almost every PC sold in the last decade runs 64-bit Windows, but it's worth checking on an older machine before you download.",
        "On a phone or a Chromebook? There's no desktop app for those, but KeyFly runs in the browser, so you can still open and edit projects there.",
        "Once you know your PC qualifies, setup takes three steps: download the Windows installer, run it, and sign in. There's nothing to configure before your first video.",
        {
          steps: [
            ["Download", "Go to the download section on keyfly.si and choose Windows, or open app.keyfly.si/download/windows directly. The link always serves the latest build."],
            ["Run the installer", "Open the file you downloaded. Windows asks once before KeyFly first opens; confirm, and it won't ask again."],
            ["Sign in", "Sign in with your KeyFly account, or create one. A new account starts on the Free plan with a 7-day Creator trial, and no card is needed."],
            ["Make something", "Type a sentence, drop in a clip, or pick a template, and press Create."],
          ],
        },
        "If you already have an account from the web app, sign in with the same one: your projects are there on the desktop too.",
        { tip: "The Free plan never expires, and neither do your projects. If you stop paying for a plan later, your work stays yours and you can still export it." },
      ],
    },
    {
      id: "first-video",
      title: "How do you make your first video from a sentence?",
      blocks: [
        "Type the video you have in mind in a sentence, pick a shape, and press Create; KeyFly's AI director writes the storyboard, voice-over and motion graphics and lays them out on the timeline.",
        "A sentence is genuinely enough to start. Something like \"a 30-second launch video for our habit-tracking app, upbeat, for Instagram\" gives the AI director the subject, the length, the mood and the platform. If you're not sure how to phrase it, press `Enhance` and KeyFly rewrites your idea into a clearer prompt, free.",
        "Before you press Create, choose:",
        {
          list: [
            "**A shape**: 16:9 for YouTube and websites, 9:16 for TikTok, Reels and Shorts, 1:1 or 4:5 for feeds.",
            "**A motion style**: the look of the titles and graphics.",
            "**A brand kit**, if you have one, so the colours, font, logo and voice are yours from the first frame.",
          ],
        },
        "When the first cut appears, read the AI director's note. It tells you which calls it made for you (the hook, the pacing, the voice) and what it assumed. Change what you disagree with by hand on the timeline, or ask in the chat: \"make the second scene shorter\", \"use a calmer voice\", \"swap the music for something warmer\".",
        {
          image: {
            src: "/video/keyfly-film.webp",
            alt: "A title card reading \"Describe a video.\" on a dark background",
            caption: "The whole brief can be one sentence. Illustrative title card from the KeyFly site, not an app screenshot.",
            w: 1280,
            h: 720,
          },
        },
        "Prefer a proven structure? Start from one of the 91 templates instead. They come in ten categories, four shapes and lengths from a 4-second sting to a 90-second tutorial, and the AI director fills one with your product: script, voice-over, motion graphics and music. [Browse them by category](/use-cases).",
        {
          gallery: {
            items: [
              { src: "/video/templates/saas-launch-film.webp", alt: "A frame from the SaaS launch film template", label: "SaaS launch film · 16:9", w: 384, h: 216 },
              { src: "/video/templates/product-walkthrough.webp", alt: "A frame from the Product walkthrough template", label: "Product walkthrough · 16:9", w: 384, h: 216 },
              { src: "/video/templates/60-second-how-to.webp", alt: "A frame from the 60-second how-to template", label: "60-second how-to · 9:16", w: 216, h: 384 },
            ],
            caption: "Frames from three KeyFly templates, recorded from the app: a launch film, a product walkthrough and a vertical how-to.",
          },
        },
        "For more on prompting and what to expect from a sentence, read [text to video with AI](/blog/text-to-video-ai).",
      ],
    },
    {
      id: "own-footage",
      title: "How do you edit your own footage with AI on Windows?",
      blocks: [
        "Drop your video, images or audio into KeyFly, say what you want, and the AI edits it into a first cut on the timeline.",
        "This is where a desktop app on Windows earns its place. Your clips live on your PC, often on a big internal drive or an external one, and in the desktop app they stay there. Footage is uploaded only when a cloud AI step needs it, such as transcribing speech so filler words can be found.",
        "A practical workflow for a folder of clips:",
        {
          steps: [
            ["Gather", "Put the clips for one video in one folder, so it's easy to find them again later."],
            ["Drop them in", "Drag the files into KeyFly, or click to choose them."],
            ["Say what you want", "\"Cut this into a 45-second recap of the event, best moments first, with captions.\""],
            ["Review the cut", "Read the AI director's note, then change any scene, trim or caption by hand or in the chat."],
            ["Export or hand off", "Export the finished video, or send the timeline to your usual editor."],
          ],
        },
        "Screen recordings work the same way. A product demo recorded on your PC can come back with the dead air removed, zooms on the parts of the screen that matter and callouts that point at them.",
        {
          image: {
            src: "/video/cases/demo.webp",
            alt: "A laptop showing a Spring launch app screen with a Zoom 2x callout",
            caption: "Zooms and callouts on a product demo. Illustrative graphic in KeyFly's style, not an app screenshot.",
            w: 960,
            h: 540,
          },
        },
        { tip: "KeyFly doesn't train AI models on your content. Your projects stay yours, and you can always export them." },
      ],
    },
    {
      id: "talking-heads",
      title: "How do you clean up a talking-head video with AI?",
      blocks: [
        "Drop the recording in and KeyFly cuts the silences and filler words, adds word-by-word captions, and zooms and adds callouts where they help.",
        "Talking heads are the classic Windows-desk video: a webcam or a camera on a tripod, someone explaining a product, a lesson or an update. They're also the most tedious to edit by hand, because the work is hundreds of tiny cuts. KeyFly does those chores for you:",
        {
          list: [
            "**Silences** come out, so the talk keeps moving.",
            "**Filler words** (\"um\", \"uh\", \"like\", \"you know\") are removed.",
            "**Captions** are added, word by word.",
            "**Zooms and callouts** land on the focus area and on what matters.",
          ],
        },
        "Every one of those layers is a real track. If a pause before a punchline was doing work, bring it back. If a caption mishears a product name, rewrite it. If a zoom feels too much, move it or delete it. Or ask: \"keep the pause before the punchline\". The step-by-step version is in [clean up a talking-head video](/blog/clean-up-talking-head-video), and the wider workflow in our guide to editing talking-head video with AI.",
        {
          image: {
            src: "/video/footage-raw.webp",
            alt: "A young man in earphones talking to camera by a window, raw recording",
            caption: "Before: a raw talking-head recording. Illustrative stock footage.",
            w: 960,
            h: 540,
          },
        },
        {
          image: {
            src: "/video/footage-cut.webp",
            alt: "The same young man talking to camera, after the cut",
            caption: "After: the same recording as a cut. Illustrative stock footage, showing the kind of result, not a KeyFly screenshot.",
            w: 960,
            h: 540,
          },
        },
        "The **Talking heads and podcasts** category has ten templates at their own shapes and lengths, from a square LinkedIn clip to a 90-second talk with chapters.",
        {
          gallery: {
            items: [
              { src: "/video/templates/linkedin-talking-head.webp", alt: "A frame from the LinkedIn talking head template", label: "LinkedIn talking head · 1:1", w: 300, h: 300 },
              { src: "/video/templates/hot-take.webp", alt: "A frame from the Hot take template", label: "Hot take · 9:16", w: 216, h: 384 },
              { src: "/video/templates/founder-update.webp", alt: "A frame from the Founder update template", label: "Founder update · 16:9", w: 384, h: 216 },
            ],
            caption: "Frames from three Talking heads and podcasts templates, recorded from the KeyFly app, in three shapes.",
          },
        },
      ],
    },
    {
      id: "brand-kit",
      title: "How do you keep every video on brand?",
      blocks: [
        "Set up a brand kit once, ideally by letting KeyFly read your website, and every new video starts with your logo, colours, font, tone and voice.",
        "A brand kit holds your logo (plus its versions and banners), five colours, your font, your tone of voice for scripts, and a voice-over: one of KeyFly's AI voices, or a clone of your own voice on higher plans. Only clone a voice that's yours, or that you have clear permission to use.",
        {
          steps: [
            ["Paste your website", "Enter your site's address in the brand kit."],
            ["Analyze with AI", "Press `Analyze with AI`. KeyFly reads your public pages and fills in the logo, colours, font and tone it finds."],
            ["Check each part", "Correct anything it got wrong, such as a secondary colour or an old logo."],
            ["Make it the default", "Mark the kit as `Default` and new videos use it automatically."],
          ],
        },
        "Once a default kit is set, Home suggests templates picked for your brand. On a team, everyone shares the same kits, so every member's video starts on brand. The full walkthrough is in [fill a brand kit from your website](/blog/brand-kit-from-your-website). How many kits you can keep depends on your plan.",
        {
          gallery: {
            items: [
              { src: "/video/templates/logo-reveal.webp", alt: "A frame from the Logo reveal template", label: "Logo reveal · 16:9", w: 384, h: 216 },
              { src: "/video/templates/brand-story.webp", alt: "A frame from the Brand story template", label: "Brand story · 16:9", w: 384, h: 216 },
              { src: "/video/templates/expert-tip.webp", alt: "A frame from the Expert tip template", label: "Expert tip · 9:16", w: 216, h: 384 },
            ],
            caption: "Frames from the Logo reveal, Brand story and Expert tip templates, recorded from the KeyFly app. A brand kit restyles any of them.",
          },
        },
      ],
    },
    {
      id: "export",
      title: "How does exporting work on a Windows PC?",
      blocks: [
        "Exports are encoded on your own PC: nothing is uploaded, and exporting uses no AI minutes.",
        "This matters more than it sounds. Exporting is the step people repeat most: a 16:9 cut for YouTube, a 9:16 cut for Shorts, a square one for a feed, then again after a client's notes. Because the encode runs on your machine, you can export as many versions as you need without spending AI minutes on it.",
        {
          table: {
            head: ["Setting", "Options"],
            rows: [
              ["Shape", "16:9, 9:16, 1:1, 4:5"],
              ["Format", "MP4, MOV, WebM, MKV, GIF"],
              ["Codec", "H.264, HEVC (H.265)"],
              ["Size", "720p, 1080p, up to 4K"],
              ["Frame rate", "23.976 to 60"],
              ["Presets", "TikTok, Instagram Reels, YouTube, YouTube Shorts, LinkedIn, X, or Custom"],
              ["Also", "Sound as WAV, frames as pictures"],
            ],
          },
        },
        "MP4 with H.264 is the safe default: it plays almost everywhere, including Windows' own media players. Choose HEVC for smaller files where the destination supports it, and MOV when an editor or client asks for it.",
        "Export size and the small KeyFly mark depend on your plan: the Free plan exports at 1080p with a small KeyFly mark, and paid plans go up to 4K without it. Every setting is explained in our guide to video export settings for every platform.",
        { tip: "Long 4K exports work your PC hard. Plug a laptop into power before you start one, and keep enough free space on the drive you're exporting to." },
      ],
    },
    {
      id: "hand-off",
      title: "How do you hand off to Premiere Pro, Resolve or Avid on a PC?",
      blocks: [
        "Export the timeline as EDL, FCPXML or OpenTimelineIO, or use `Package for editing` to get the timeline and every file it uses in one .zip.",
        "Windows is home to a lot of professional finishing: Premiere Pro, DaVinci Resolve and Avid all run there. KeyFly is built to get you to a strong first cut fast, then hand over to the editor you already know for grading, mixing and the last details.",
        {
          table: {
            head: ["Your editor on Windows", "Format to choose"],
            rows: [
              ["Premiere Pro", "EDL (CMX 3600)"],
              ["DaVinci Resolve", "FCPXML, EDL or OpenTimelineIO"],
              ["Avid", "EDL (CMX 3600)"],
              ["Pipelines that read OTIO", "OpenTimelineIO (.otio)"],
            ],
          },
        },
        "A timeline on its own points at media your editor doesn't have. `Package for editing` fixes that:",
        {
          steps: [
            ["Open the export sheet", "Choose `Package for editing`."],
            ["Pick your editor", "Choose the format. Each format's folder has its own copy of the media, so pick just one for a smaller file."],
            ["Choose graphics", "Switch on `Include graphics, titles and captions` to get them rendered at 1080p as PNG sequences with transparency. It makes a bigger download."],
            ["Download and unzip", "Press `Download package (.zip)`, unzip it on your PC, and open the timeline in your editor. The files are linked by relative paths, so it opens with its media."],
          ],
        },
        "Timeline export depends on your plan; the [plan comparison](/pricing#compare) shows which plans include it. More detail, editor by editor, is in [export a timeline to Final Cut, Resolve, Premiere or Avid](/blog/export-timeline-to-final-cut-resolve-premiere-avid).",
        { tip: "Unzip packages to a fast local drive rather than a network share or a synced cloud folder, so your editor can read the media quickly." },
      ],
    },
    {
      id: "own-agent",
      title: "Can you use Claude Code, Codex or Cursor to edit video on Windows?",
      blocks: [
        "Yes. Claude Code, Codex, Cursor, Antigravity and other ACP agents on your PC can edit your KeyFly timeline through the desktop app, on your own plan with their provider, without using AI minutes.",
        "If you write code on Windows, there's a good chance one of these agents is already on your machine. KeyFly lets it act as your video editor too. It connects through the KeyFly desktop app on your computer, and opens the app for you if it's closed.",
        {
          steps: [
            ["Get the desktop app", "Install KeyFly for Windows, as described above."],
            ["Turn on agents", "In `Settings → Agents`, press `Use agents on this computer`."],
            ["Pick your agent", "In the AI picker, choose it under `Your agents`."],
          ],
        },
        "You talk to your agent in the same chat as KeyFly's own AI. Its edits land on the timeline as real tracks, so you can keep changing them by hand, or go back with `Revert`. You can switch between your agent and KeyFly Cloud at any time: KeyFly Cloud picks a model for each step and uses AI minutes; your own agent uses neither.",
        "Agents have their own usage limits. When yours reaches one, KeyFly tells you when it resets and offers another agent that still has capacity, or KeyFly Cloud if your plan includes it.",
        "The Free plan lets you edit with your own agent with a daily limit, and the BYO plan takes the limits off. Compare them on the pricing page, or read the full guide to [editing video with Claude Code, Codex or Cursor](/blog/edit-video-with-claude-code-codex-cursor).",
        { tip: "Can't connect? Use a pairing code: it's offered right under `Use agents on this computer`." },
      ],
    },
    {
      id: "web-app",
      title: "What if you're away from your Windows PC?",
      blocks: [
        "Open KeyFly in any browser at app.keyfly.si, with the same account and the same projects.",
        "The web app is for the times you're not at your desk: on a borrowed laptop, a work machine where you can't install software, or a phone between meetings. You can make and edit videos there, and timeline export and `Package for editing` work from the web as well as the desktop.",
        "Some things are desktop-only by nature. Your own agent (Claude Code, Codex, Cursor and the rest) connects through the desktop app, because it runs on your computer. And footage that lives on your PC's drives is easiest to work with from the PC itself.",
        "You can also start in ChatGPT or Claude, where KeyFly is available as an app, and continue in KeyFly when you want the full editor.",
        "For teams, a review link lets a client or colleague comment and approve without installing anything; their comments show up in the project's Feedback. A self-serve Team plan is priced per seat.",
        {
          image: {
            src: "/video/call-hook-3.webp",
            alt: "A woman scrolling a phone on a sofa",
            caption: "Away from the PC, KeyFly runs in the browser, phones included. Illustrative stock footage.",
            w: 960,
            h: 540,
          },
        },
      ],
    },
    {
      id: "tips",
      title: "Tips for a smooth AI video editing setup on Windows",
      blocks: [
        "Most problems with video on a PC come down to disk space, drivers and where files live, so sort those out first.",
        "None of these are KeyFly settings; they're general habits that make any video work on Windows smoother.",
        {
          list: [
            "**Leave room on your drive.** Footage, especially 4K, fills disks quickly, and exports need space to be written. Keep a healthy margin free on the drive you work from.",
            "**Work from a local drive.** Keep active projects on an internal or fast external drive rather than a network share. Move finished work to an archive drive afterwards.",
            "**Be careful with synced folders.** Cloud-sync tools that move files offline to save space can leave a clip as a placeholder just when you need it. Keep active footage fully downloaded.",
            "**Keep Windows and your graphics drivers up to date.** Driver updates often fix video playback and encoding problems, and Windows updates keep codecs and security current.",
            "**Plug in for long jobs.** Laptops on battery may slow down to save power. Plug in for long exports.",
            "**Name things clearly.** A folder per video and readable file names make it easy to find clips again, for you and for any agent you ask to help.",
            "**Use a decent microphone for talking heads.** AI can cut filler words and silences, but it can't fix muddy sound as well as a better mic placed closer to the speaker.",
            "**Record in the shape you'll publish.** If a video is mainly for Reels or Shorts, framing for 9:16 when you shoot saves reframing later.",
          ],
        },
        {
          image: {
            src: "/video/how-shot-1.webp",
            alt: "A young man with headphones looking at a phone",
            caption: "Good sound and a sensible folder structure do more for the final video than any setting. Illustrative stock footage.",
            w: 960,
            h: 540,
          },
        },
      ],
    },
    {
      id: "plans",
      title: "Which KeyFly plan should a Windows user pick?",
      blocks: [
        "The same plans apply on Windows, Mac and the web, so pick by what you make, not by your operating system.",
        {
          table: {
            head: ["If you...", "Look at"],
            rows: [
              ["Want to try KeyFly with no commitment", "Free (never expires; 1080p exports with a small KeyFly mark)"],
              ["Already pay for Claude Code, Codex or Cursor", "BYO, which takes the limits off your own agent"],
              ["Make videos regularly with KeyFly's own AI", "Starter, Creator or Pro, depending on volume"],
              ["Work with colleagues on shared brand kits", "Team, priced per seat"],
            ],
          },
        },
        "Every new account gets a 7-day Creator trial with no card, which is a good way to test the paid features and the AI director on your own footage before you choose. Unused plan AI minutes roll over for one period, up to one period's allowance, and AI-minute packs don't expire while your account is open. Prices and what each plan includes are on the [pricing page](/pricing), with a full side-by-side in the [plan comparison](/pricing#compare).",
        "Questions about Windows setup? Write to help@keyfly.si.",
      ],
    },
  ],
  faq: [
    {
      q: "What is the best AI video editor for Windows 11?",
      a: "It depends on how you work, but check first that the tool has a real Windows app rather than only a browser version. KeyFly runs natively on Windows 10 and 11 (64-bit), edits from a sentence or your own footage onto an editable timeline, encodes exports on your PC without AI minutes, and hands timelines to Premiere Pro, Resolve and Avid.",
    },
    {
      q: "Does KeyFly work on Windows 10?",
      a: "Yes. The KeyFly desktop app supports Windows 10 and Windows 11, 64-bit. Download it from the download section on keyfly.si or from app.keyfly.si/download/windows, run the installer and sign in. Windows asks once before KeyFly first opens. If your PC runs a 32-bit edition of Windows, use KeyFly in the browser at app.keyfly.si instead.",
    },
    {
      q: "Does Cardboard have a Windows app?",
      a: "Not as of 19 November 2026. Cardboard's own desktop page says its Mac app needs Apple silicon (M1 or later) and that a Windows app isn't available yet, so Windows users work in its browser version. If you want an AI video editor with a native Windows desktop app today, KeyFly runs on Windows 10 and 11.",
    },
    {
      q: "Can I use an AI video editor on Windows for free?",
      a: "Yes. KeyFly's Free plan never expires and needs no card. It exports at 1080p with a small KeyFly mark, and lets you edit with your own Claude Code, Codex or Cursor with a daily limit. Every new account also gets a 7-day Creator trial, so you can try paid features such as 4K exports before deciding.",
    },
    {
      q: "Do exports on Windows use AI minutes?",
      a: "No. KeyFly encodes exports on your own PC, so nothing is uploaded and exporting uses no AI minutes. You can export the same project in 16:9, 9:16, 1:1 and 4:5, in MP4, MOV, WebM, MKV or GIF, as many times as you need. Export size depends on your plan: up to 1080p on Free, up to 4K on paid plans.",
    },
    {
      q: "Can I send a KeyFly edit to Premiere Pro or DaVinci Resolve on Windows?",
      a: "Yes. Export the timeline as EDL (CMX 3600) for Premiere Pro or Avid, or as FCPXML, EDL or OpenTimelineIO for DaVinci Resolve. Package for editing puts the timeline and every file it uses in one .zip, linked by relative paths, so it opens with its media. Timeline export depends on your plan.",
    },
    {
      q: "Can Claude Code or Cursor edit video on Windows?",
      a: "Yes, through KeyFly. Install the KeyFly desktop app on Windows, open Settings → Agents and press Use agents on this computer, then pick your agent in the AI picker. Claude Code, Codex, Cursor, Antigravity and other ACP agents then edit your timeline on your own plan, without using KeyFly's AI minutes.",
    },
    {
      q: "Does my footage get uploaded when I edit on Windows?",
      a: "Not by default. In the KeyFly desktop app your footage stays on your computer, and it's uploaded only when a cloud AI step needs it, such as finding filler words in speech. Exports are made on your PC. KeyFly doesn't train AI models on your content, and you can always export your projects.",
    },
  ],
};

export default post;
