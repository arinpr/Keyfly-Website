// Sources: KeyFly facts from src/content/home.js (prompt box: placeholder,
// aspect ratios, motion styles, brand kit picker, Enhance, Blank project,
// the six preset prompts; the AI director's note: hook, voice, music,
// assumed, self-check, next, Revert, Retry), product.js (Make, Direct,
// Footage, Brand, Deliver, AI minutes), use-cases.js (91 templates, ten
// categories, names, shapes and lengths; template stills recorded from the
// app), pricing.js (Free never expires, projects never expire, trial with no
// card) and blog.js (AI minutes, export settings, timeline hand-off, agents).
// Prices are never typed; posts link to /pricing.
// Competitor: Cardboard, from its own public pages, checked 19 November 2026:
// https://www.cardboard.ai (prompt to video incl. generated video, images,
// music, sound effects, motion graphics and 3D scenes; edits footage),
// https://www.cardboard.ai/pricing (stock and web-sourced B-roll on Creator
// and up), https://learn.usecardboard.com/export/export-your-video.md
// (FCPXML and Premiere XML from the web editor).

const post = {
  slug: "text-to-video-ai",
  topic: "guides",
  date: { iso: "2026-11-19", text: "19 November 2026" },
  title: "Text to video with AI: how to make a finished video from one sentence",
  seoTitle: "Text to video AI: a finished video from one sentence",
  dek: "How AI text to video works in an editor: a storyboard, voice-over and motion graphics on a real timeline, prompts that work, templates, brand kits and export.",
  cover: { video: "/video/keyfly-film.mp4", poster: "/video/keyfly-film.webp", alt: "A dark title card that reads \"Describe a video.\"" },
  sections: [
    {
      id: "short-answer",
      title: "What is text to video AI?",
      blocks: [
        "Text to video AI turns a written description into a video. In an AI video editor like KeyFly, one sentence becomes a **finished, editable cut**: the AI director writes a storyboard, records a voice-over, builds the motion graphics and lays in music, each on its own track of a real timeline that you can change by asking or by hand.",
        "That's different from a pure video generator, which hands back a short clip you can only keep or regenerate. This guide covers how the editor approach works, how to write prompts that get a usable first cut, when to start from a template, and how to take the result to any screen or any other editor.",
        "In short:",
        {
          list: [
            "**One sentence is enough to start.** Say what the video is for, who it's for, how long and what shape.",
            "**You get layers, not a flat clip.** Storyboard, voice-over, motion graphics, AI images, music and sound effects, each on its own track.",
            "**Every call is explained.** The AI director leaves a note on the hook, voice, music and look it chose, with `Revert` and `Retry`.",
            "**Templates and a brand kit do half the prompting.** 91 templates give the structure; your brand kit gives the logo, colours, font, tone and voice.",
            "**You see the cost first.** Each AI action shows its AI-minute cost before it runs, and exporting uses none.",
          ],
        },
      ],
    },
    {
      id: "editor-vs-generator",
      title: "Text to video in an editor vs a pure video generator",
      blocks: [
        "The short version: a generator makes footage; an editor makes a video. Both start from text, but what you can do with the result is very different.",
        "A pure generative model takes a prompt and returns a few seconds of moving pictures. That's useful when you need a shot you can't film. But a launch film, an ad or an explainer is more than a shot: it has a script, a voice, titles, a logo, music under the words and an ending that asks people to do something. With a generator alone, you assemble all of that yourself somewhere else.",
        "An AI video editor works one level up. It plans the whole video, makes or finds each part, and puts the parts on a timeline where they stay separate and editable.",
        {
          table: {
            head: ["", "Pure video generator", "Text to video in an AI editor (KeyFly)"],
            rows: [
              ["What you get", "A short generated clip", "A full cut: storyboard, voice-over, motion graphics, music, sound effects"],
              ["Changing one part", "Regenerate the whole clip", "Ask for one change, or edit that one track by hand"],
              ["Text on screen", "Often baked into the pixels", "Titles and callouts as motion graphics you can rewrite"],
              ["Your brand", "Described in each prompt", "A brand kit applied to every new video"],
              ["Your footage", "Usually not the point", "Mix your clips, talking heads and screen recordings with what the AI makes"],
              ["Finishing elsewhere", "Download the clip", "Export to any screen, or hand the timeline to Final Cut Pro, Resolve, Premiere Pro or Avid"],
            ],
          },
        },
        "KeyFly can use generated video too: on higher plans, the AI director can make shots for what you can't film, with their own allowance in seconds (the [plan comparison](/pricing#compare) lists it). The point is that a generated shot becomes one clip on the timeline, not the whole video.",
        "KeyFly isn't the only editor that works this way. [Cardboard](https://www.cardboard.ai) also turns prompts or footage into an editable first cut; its public pages, checked on 19 November 2026, list generated video, images, music, sound effects, motion graphics and 3D scenes, plus stock and web-sourced B-roll on its Creator plan and up. If 3D scenes or sourced stock B-roll are central to your videos, it's worth a look. Our [KeyFly vs Cardboard comparison](/blog/keyfly-vs-cardboard) sets the two side by side.",
      ],
    },
    {
      id: "how-it-works",
      title: "How does KeyFly's AI director turn a sentence into a video?",
      blocks: [
        "It plans first, then builds each layer on its own track, then tells you what it decided. You type the idea into the `Describe your video` box, pick a shape and press `Create`.",
        {
          steps: [
            ["Describe it", "One sentence in the prompt box, such as the app's own example: `A 30s launch film for habitly.io, our habit-tracking app.` Add media if you have it."],
            ["Set the frame", "Choose 16:9, 9:16, 1:1 or 4:5, a motion style (or `AI picks`), and a brand kit."],
            ["Let it plan", "The AI director writes the storyboard, scene by scene, from your sentence."],
            ["Let it build", "It records the voice-over, builds the motion graphics (titles, callouts, kinetic type in your motion style), makes AI images for scenes that need them, and adds a music bed and sound effects."],
            ["Read the note", "It replies with what it chose, what it assumed, a self-check score and ideas for the next pass, with `Revert` and `Retry`."],
          ],
        },
        "The layers land on the timeline in the order they were built, each on its own track:",
        {
          table: {
            head: ["Layer", "What KeyFly makes"],
            rows: [
              ["Storyboard", "Written from your sentence, scene by scene, or a template's structure filled with your product"],
              ["Voice-over", "An AI voice, or a clone of your own on higher plans"],
              ["Motion graphics", "Titles, callouts and kinetic type in your motion style"],
              ["AI images", "Pictures made for the scenes that need them"],
              ["Music bed", "Made to a mood, genre and tempo, licensed for you"],
              ["Sound effects", "From the library, on their own track"],
              ["Generated video", "Shots for what you can't film, on higher plans"],
            ],
          },
        },
        {
          image: {
            src: "/video/cases/explainer.webp",
            alt: "A tablet showing a How it works diagram: Describe, Edit, Share",
            caption: "Describe, edit, share: the whole loop. Illustrative still in KeyFly's style, made with real stock footage.",
            w: 960,
            h: 540,
          },
        },
        "There are three doors into the same editor. A sentence, as above. Your own footage, where KeyFly keeps the best moments and cuts pauses and filler words. Or a template, where the storyboard is the template's proven structure filled with your product. You can also press `Blank project` to start with an empty timeline and build it yourself.",
        { tip: "Not sure your idea is clear enough? Press `Enhance` in the prompt box. It rewrites your idea into a clearer prompt, and it's free." },
      ],
    },
    {
      id: "director-notes",
      title: "What do the AI director's notes tell you?",
      blocks: [
        "They tell you every call it made, so nothing is a black box. After each build or edit, the AI director pins a note to the cut that lists its decisions, names its guesses and suggests a next step.",
        {
          table: {
            head: ["Note", "What it says", "Why it helps"],
            rows: [
              ["Hook", "The opening it chose", "The first seconds decide whether anyone keeps watching. Want another? Ask."],
              ["Voice", "The voice it cast, and others that also fit", "Swap the voice without rewriting the prompt"],
              ["Music", "The bed under the voice", "It sits on its own track, so you can change it or drop it"],
              ["Assumed", "Anything your prompt didn't say, named as a guess", "A wrong guess is easy to spot and correct"],
              ["Self-check", "A score out of five for its own cut", "You see how it rates its own work"],
              ["Next", "A few ideas for the next pass", "Pick one, or ignore them all"],
            ],
          },
        },
        "The reply ends with what the work used, for example `Used 6 AI minutes`, beside `Revert` and `Retry`. `Revert` takes the change back in one click. `Retry` builds it again. Nothing the AI does is final until you say so.",
        "The `Assumed` line is the one to read first. If you didn't say what the video should look like, the director picks a look and tells you. If you didn't name a voice, it casts one and lists the alternatives. Each assumption is a prompt you didn't have to write, and a place to correct course with a single sentence.",
      ],
    },
    {
      id: "prompt-anatomy",
      title: "How do you write a prompt for an AI video?",
      blocks: [
        "Give it six things: the goal, the audience, the length, the shape, the tone and what must be in it. One sentence can carry all six. The more of them you state, the fewer the director has to assume.",
        {
          table: {
            head: ["Part", "What to say", "Example"],
            rows: [
              ["Goal", "What the video is for and what viewers should do after", "\"Launch our app and send people to the App Store\""],
              ["Audience", "Who watches it, and what they already know", "\"for busy parents who've never heard of us\""],
              ["Length", "Seconds, not \"short\"", "\"30 seconds\""],
              ["Shape", "Where it will play", "\"vertical, for Reels\" or pick 9:16"],
              ["Tone", "How it should feel and sound", "\"calm, confident voice; warm, not salesy\""],
              ["Must-include", "Names, numbers, lines, a URL, a date, a call to action", "\"end on habitly.io and 'Start your streak'\""],
            ],
          },
        },
        "Put together, a prompt reads like a brief to a human editor: `A 30-second vertical launch film for Habitly, our habit-tracking app, for busy parents. Calm, confident voice. Show the one-tap check-in, then the streak counter. End on habitly.io and \"Start your streak\".`",
        "A few rules that help:",
        {
          list: [
            "**State facts, don't hope for them.** The director can't know your price, launch date or feature names unless you write them down.",
            "**Say the shape where it plays.** \"For TikTok\" or \"for a LinkedIn post\" tells the director more than a ratio alone, and you can still pick 16:9, 9:16, 1:1 or 4:5 in the box.",
            "**Describe a structure if you have one.** \"Hook, problem, product, proof, call to action\" gives it scenes to fill.",
            "**Leave out what the brand kit already says.** Your logo, colours, font, tone and voice come from the kit, so the prompt can stay about the story.",
            "**Attach what you have.** Footage, a screen recording, a product shot or a voice note: `Add media` puts them in the same prompt.",
          ],
        },
        { quote: "Brief it the way you'd brief an editor." },
      ],
    },
    {
      id: "example-prompts",
      title: "Example prompts for launch films, UGC ads, explainers and more",
      blocks: [
        "Here are ten prompts that work as written. The first six are the starting points on KeyFly's homepage; the rest show other jobs. Replace the product and details with your own.",
        {
          table: {
            head: ["Video", "Prompt"],
            rows: [
              ["Launch film", "A 30-second launch film for our new app: bold title cards, quick cuts on the beat and a clear call to action at the end."],
              ["UGC ad", "A selfie-style UGC ad, vertical, with punchy captions, a hook in the first two seconds and natural jump cuts."],
              ["Explainer", "A 60-second explainer that walks through how our product works, with simple animated callouts and a calm voiceover."],
              ["Event promo", "An event promo from last year's footage: the best moments cut to the music, speed ramps, the date and a sign-up call to action."],
              ["Product demo", "A product demo from my screen recording: zoom into each click, add short captions and trim the pauses."],
              ["Podcast clip", "Turn my podcast episode into three vertical clips with the strongest quotes, speaker framing and captions."],
              ["Founder launch", "A 45-second founder launch film, 16:9: open on me saying why we built it, then three features with titles, and end on our URL."],
              ["Social ad", "A 15-second vertical ad for our spring sale: hook in the first second, 20% off in big type, the end date, and \"Shop now\"."],
              ["Data story", "A 30-second KPI recap for our quarterly all-hands, 16:9, Corporate Blue: revenue, active users and churn, one number per scene."],
              ["Local business", "A 20-second vertical just-listed reel for a two-bed flat: the street, the light in the living room, the price on screen and our phone number."],
            ],
          },
        },
        "The sale, the numbers and the listing are placeholders: swap in your own. Each prompt states a length, a shape or a place to play, a tone or style, and a must-include. That's the anatomy at work.",
        {
          gallery: {
            items: [
              { src: "/video/templates/saas-launch-film.webp", alt: "A frame from the SaaS launch film template", label: "SaaS launch film", w: 384, h: 216 },
              { src: "/video/templates/ugc-product-review.webp", alt: "A frame from the UGC product review template", label: "UGC product review", w: 216, h: 384 },
              { src: "/video/templates/how-it-works-in-3-steps.webp", alt: "A frame from the How it works in 3 steps template", label: "How it works in 3 steps", w: 300, h: 300 },
              { src: "/video/templates/event-countdown.webp", alt: "A frame from the Event countdown template", label: "Event countdown", w: 216, h: 384 },
              { src: "/video/templates/podcast-clip.webp", alt: "A frame from the Podcast clip template", label: "Podcast clip", w: 216, h: 384 },
            ],
            caption: "The same jobs as templates: frames from the SaaS launch film, UGC product review, How it works in 3 steps, Event countdown and Podcast clip templates, recorded from the KeyFly app.",
          },
        },
        { tip: "Writing an \"AI launch video\" prompt? Name the product, one line on what it does, the one feature to show and the call to action. Everything else, the director can propose and you can correct." },
      ],
    },
    {
      id: "template-or-prompt",
      title: "Should you start from a template or a blank prompt?",
      blocks: [
        "Start from a template when the video is a known type; start from a prompt when it isn't. A template gives the director a proven structure (the scenes, the pacing, the shape and the look), and it fills that structure with your product. A blank prompt gives it freedom to plan from scratch.",
        {
          table: {
            head: ["Start from", "Best when", "What you still write"],
            rows: [
              ["A template", "The video is a common type: a launch film, a listicle ad, a KPI recap, a podcast clip", "Your product and anything the template can't know"],
              ["A sentence", "The idea is unusual, or you want the director to propose the structure", "The full brief: goal, audience, length, shape, tone, must-include"],
              ["Your footage", "You already filmed it: a talking head, a screen recording, event clips", "What to keep, what to cut, and the shape"],
              ["Blank project", "You want to build it yourself on an empty timeline", "Nothing; ask the AI when you want help"],
            ],
          },
        },
        "KeyFly has 91 templates in ten categories, in 16:9, 9:16, 1:1 and 4:5, from a 4-second sting to a 90-second tutorial. Each is marked Free or Premium in the app. Its Home also suggests templates picked for your brand, and one click starts a video with your brand kit. Browse them all on [Use cases](/use-cases).",
        {
          gallery: {
            items: [
              { src: "/video/templates/founder-launch-film.webp", alt: "A frame from the Founder launch film template", label: "Founder launch film", w: 384, h: 216 },
              { src: "/video/templates/product-hunt-teaser.webp", alt: "A frame from the Product Hunt teaser template", label: "Product Hunt teaser", w: 384, h: 216 },
              { src: "/video/templates/app-store-launch.webp", alt: "A frame from the App Store launch template", label: "App Store launch", w: 216, h: 384 },
              { src: "/video/templates/app-feature-spotlight.webp", alt: "A frame from the App feature spotlight template", label: "App feature spotlight", w: 272, h: 340 },
            ],
            caption: "Product launches: frames from four of the category's ten templates, recorded from the KeyFly app.",
          },
        },
        {
          gallery: {
            items: [
              { src: "/video/templates/product-walkthrough.webp", alt: "A frame from the Product walkthrough template", label: "Product walkthrough", w: 384, h: 216 },
              { src: "/video/templates/problem-to-solution.webp", alt: "A frame from the Problem to solution template", label: "Problem → solution", w: 384, h: 216 },
              { src: "/video/templates/screen-recording-demo.webp", alt: "A frame from the Screen recording demo template", label: "Screen recording demo", w: 384, h: 216 },
              { src: "/video/templates/checkout-flow-demo.webp", alt: "A frame from the Checkout flow demo template", label: "Checkout flow demo", w: 384, h: 216 },
            ],
            caption: "Explainers, demos and screen recordings: frames from four templates, recorded from the KeyFly app.",
          },
        },
        {
          gallery: {
            items: [
              { src: "/video/templates/scroll-stopping-hook.webp", alt: "A frame from the Scroll-stopping hook template", label: "Scroll-stopping hook", w: 216, h: 384 },
              { src: "/video/templates/5-reasons-listicle.webp", alt: "A frame from the 5 reasons listicle template", label: "5 reasons listicle", w: 216, h: 384 },
              { src: "/video/templates/ugc-ad-problem-to-product.webp", alt: "A frame from the UGC ad: problem to product template", label: "UGC ad: problem → product", w: 216, h: 384 },
              { src: "/video/templates/limited-offer.webp", alt: "A frame from the Limited offer template", label: "Limited offer", w: 272, h: 340 },
              { src: "/video/templates/hot-take.webp", alt: "A frame from the Hot take template", label: "Hot take", w: 216, h: 384 },
            ],
            caption: "Social ads, UGC and talking heads: frames from five templates cut for the feed, recorded from the KeyFly app.",
          },
        },
        {
          gallery: {
            items: [
              { src: "/video/templates/webinar-promo.webp", alt: "A frame from the Webinar promo template", label: "Webinar promo", w: 384, h: 216 },
              { src: "/video/templates/launch-party-invite.webp", alt: "A frame from the Launch party invite template", label: "Launch party invite", w: 272, h: 340 },
              { src: "/video/templates/kpi-recap.webp", alt: "A frame from the KPI recap template", label: "KPI recap", w: 384, h: 216 },
              { src: "/video/templates/podcast-audiogram.webp", alt: "A frame from the Podcast audiogram template", label: "Podcast audiogram", w: 300, h: 300 },
            ],
            caption: "Events, data and podcasts: frames from the Webinar promo, Launch party invite, KPI recap and Podcast audiogram templates, recorded from the KeyFly app.",
          },
        },
        "A template doesn't lock anything in. After the director fills it, every scene, line and layer is yours to change, just as with a cut made from a sentence. And if your video isn't on the list, describe it: the director builds it from scratch.",
      ],
    },
    {
      id: "brand-kit",
      title: "How do you make the first cut on brand?",
      blocks: [
        "Fill a brand kit before your first prompt, and mark it as the default. Every new video then uses your logo, colours, font, tone of voice and voice-over automatically, so the first cut already looks and sounds like you.",
        {
          table: {
            head: ["Part of the kit", "What it does in a text-to-video cut"],
            rows: [
              ["Logo, versions and banners", "Your mark, ready for the video's branded moments"],
              ["Five colours", "Your palette, instead of one the director guesses"],
              ["Font", "Your typeface, instead of a stock one"],
              ["Tone of voice", "Shapes how the script is written"],
              ["Voice-over", "The AI voice it reads with, or a clone of your own"],
            ],
          },
        },
        "You don't have to fill it by hand. Paste your website's address and press `Analyze with AI`: KeyFly reads your public pages and fills in the logo, colours, font and tone it finds. Check each part and fix anything it got wrong. The walkthrough is in [Fill a brand kit from your website](/blog/brand-kit-from-your-website).",
        {
          image: {
            src: "/video/brand/launch.webp",
            alt: "A team gathered round a laptop",
            caption: "A brand kit means every member's first cut starts with the same logo, colours and voice. Illustrative, real stock footage.",
            w: 640,
            h: 360,
          },
        },
        "On a team, everyone shares the same kits. Only clone a voice that's yours, or that you have clear permission to use. How many kits you can keep depends on your plan: see the [plans](/pricing#compare).",
      ],
    },
    {
      id: "edit-the-result",
      title: "How do you edit an AI-made video?",
      blocks: [
        "Three ways, and you can mix them: ask in the chat, change it yourself on the timeline, or revert and retry. Every layer the director made is a real track, so no edit means starting over.",
        {
          steps: [
            ["Ask in words", "Use the chat box (`What should we change?`) like a brief to an editor: \"make the intro faster\", \"warmer voice in scene 3\". Type @ to point at a scene and / for a command."],
            ["Edit on the timeline", "Trim a clip, move a title, swap the music, rewrite a caption or replace a shot with your own footage, by hand, like any editor."],
            ["Revert or retry", "`Revert` undoes the last AI change in one click; `Retry` builds it again."],
            ["Use your own agent", "Connect Claude Code, Codex, Cursor, Antigravity or any ACP agent and it edits the same timeline on your own plan."],
          ],
        },
        "Small, specific asks work best. \"@scene 2 make the headline bigger\" changes one thing and leaves the rest alone. \"Make it better\" leaves the director guessing. When you want a bigger change, say what to keep: \"recut on the beat, keep the voice-over as it is\".",
        "If you have footage, bring it in. A talking head gets its silences and filler words cut, captions added, and zooms and callouts on what matters; a screen recording gets zooms on the focus area and callouts. You can mix that footage with the scenes the director wrote. [From a talking-head recording to a finished clip](/blog/clean-up-talking-head-video) covers the footage side in detail.",
        {
          gallery: {
            items: [
              { src: "/video/footage-raw.webp", alt: "A young man in earphones talking to camera by a window, before the edit", label: "Raw", w: 960, h: 540 },
              { src: "/video/footage-cut.webp", alt: "The same young man talking to camera, after the edit", label: "Cut", w: 960, h: 540 },
            ],
            caption: "Your own footage sits on the same timeline as the AI's scenes: raw on the left, cut on the right. Illustrative, real stock footage.",
          },
        },
        "When the cut is close, send a review link. Anyone with the link can watch, comment at a moment, and approve or ask for changes, but can't edit anything. Their comments show up in the project's Feedback, ready to turn into asks in the chat.",
      ],
    },
    {
      id: "ai-minutes",
      title: "How much does AI text to video cost?",
      blocks: [
        "It costs AI minutes, KeyFly's one unit for the AI's work, and each action shows its cost before it runs. Building the cut, every ask in the chat, AI voice-overs, captions and AI images use them. Editing by hand, your own agent, exporting and waiting never do.",
        {
          table: {
            head: ["Step", "Who does it", "AI minutes"],
            rows: [
              ["Build the first cut from a sentence", "KeyFly's AI", "Shown before it runs"],
              ["\"Make the intro faster\"", "KeyFly's AI", "Shown before it runs"],
              ["Trim and move clips on the timeline", "You", "None"],
              ["Another pass with Claude Code or Codex", "Your own agent", "None"],
              ["Export to MP4", "Your computer", "None"],
            ],
          },
        },
        "If an AI job fails, its minutes come back automatically. Unused plan minutes roll over for one period, up to one period's allowance, and AI-minute packs don't expire while your account is open. Generated video has its own allowance, in seconds, on the plans that include it.",
        "Every new account gets a 7-day Creator trial with no card, and the Free plan never expires; neither do your projects. Plan names run Free, BYO, Starter, Creator, Pro and Team; what each includes and costs is on the [pricing page](/pricing). For how the unit counts, read [What an AI minute is](/blog/what-is-an-ai-minute).",
        { tip: "The cheapest edits are your own. Trim, reorder and retitle by hand, and save the AI for the work only it can do: writing, voicing and building." },
      ],
    },
    {
      id: "formats-export",
      title: "Which formats can you export a text-to-video cut in?",
      blocks: [
        "Any of four shapes, up to 4K, in MP4, MOV, WebM, MKV or GIF, with presets for the main platforms. Make the cut once, then switch its frame shape: the cut, timing, voice-over, music and brand kit carry over.",
        {
          table: {
            head: ["Shape", "Name", "Typical home"],
            rows: [
              ["16:9", "Landscape", "YouTube, websites, presentations"],
              ["9:16", "Vertical", "TikTok, Reels, Shorts"],
              ["1:1", "Square", "Feed posts, LinkedIn, carousels"],
              ["4:5", "Portrait", "Feed ads, Instagram posts"],
            ],
          },
        },
        {
          image: {
            src: "/video/format-loop.webp",
            alt: "A creator filming herself on a city street",
            caption: "One cut, every screen: the same edit goes out in 16:9, 9:16, 1:1 or 4:5. Illustrative, real stock footage.",
            w: 960,
            h: 540,
          },
        },
        "The export sheet has presets for **TikTok, Instagram Reels, YouTube, YouTube Shorts, LinkedIn and X**, plus `Custom`. You can also take the sound as WAV or frames as pictures.",
        "Exports are encoded on your device: nothing is uploaded, and exporting uses no AI minutes. The Free plan exports in 1080p with a small KeyFly mark; paid plans go up to 4K without it. Every setting is explained in [KeyFly's export settings](/blog/video-export-settings-every-platform).",
      ],
    },
    {
      id: "hand-off",
      title: "Can you finish an AI video in Premiere Pro, Final Cut Pro, Resolve or Avid?",
      blocks: [
        "Yes. KeyFly exports the timeline, not just a flat file, so an editor can pick up the cut with its tracks intact.",
        {
          table: {
            head: ["Timeline format", "Opens in"],
            rows: [
              ["FCPXML", "Final Cut Pro, DaVinci Resolve"],
              ["EDL (CMX 3600)", "Premiere Pro, DaVinci Resolve, Avid"],
              ["OpenTimelineIO (.otio)", "DaVinci Resolve, and pipelines that read OTIO"],
            ],
          },
        },
        "**Package for editing** zips the timeline with every file it uses (footage, voice-over, music and pictures) so it opens with its media. You can include the graphics, titles and captions as PNG sequences with transparency. The full steps are in [Hand off a KeyFly cut](/blog/export-timeline-to-final-cut-resolve-premiere-avid), and which plans include timeline export is on the [plan comparison](/pricing#compare).",
        "This is where text to video in an editor pays off. The AI writes the first cut in minutes; a colourist, a motion designer or a client's house editor can finish it in the tool they know.",
        {
          image: {
            src: "/video/cases/demo.webp",
            alt: "A laptop showing a Spring launch app screen with a Zoom 2x callout",
            caption: "Hand the timeline on and graphics, titles and captions can travel as PNG sequences with transparency. Illustrative still in KeyFly's style, made with real stock footage.",
            w: 960,
            h: 540,
          },
        },
      ],
    },
    {
      id: "mistakes",
      title: "Common text-to-video mistakes, and how to avoid them",
      blocks: [
        "Most weak first cuts come from a thin prompt or a skipped setup step, not from the AI. These are the ones we see most:",
        {
          list: [
            "**No length.** \"A short video\" could be 6 seconds or 90. Give seconds.",
            "**No shape.** A 16:9 film cropped for Reels later will never feel native. Pick 9:16 at the start if that's where it plays.",
            "**Facts left to chance.** Names, prices, dates and URLs must be in the prompt. The director can't guess them correctly.",
            "**No brand kit.** Without one, the director picks colours and a voice for you. Fill the kit from your website first.",
            "**Rebuilding instead of editing.** If one scene is wrong, point at it with @ and ask, or fix it by hand. Don't start the whole video again.",
            "**Ignoring the notes.** The `Assumed` line shows where the director guessed. Correct it in one sentence.",
            "**Asking for everything at once.** Five changes in one message are harder to judge. Make one, look, then the next; `Revert` is there if it misses.",
            "**Spending AI minutes on hand work.** Trimming and moving clips is free by hand, or with your own agent.",
            "**Cloning a voice that isn't yours.** Only use your own voice, or one you have clear permission to use.",
          ],
        },
      ],
    },
    {
      id: "get-started",
      title: "How to make your first video from text with KeyFly",
      blocks: [
        "Sign up, fill your brand kit, write one sentence, then edit the result. The whole loop runs on the web, on a Mac or Windows PC, or from inside ChatGPT and Claude.",
        {
          steps: [
            ["Sign up free", "[Create an account](https://app.keyfly.si/signup?plan=free) on the web, or [download KeyFly](/#download) for macOS 13+ (Apple silicon and Intel) or Windows 10 and 11. No card needed."],
            ["Fill the brand kit", "Paste your website and press `Analyze with AI`. Mark the kit `Default`."],
            ["Pick a door", "Write a sentence, open a template from [Use cases](/use-cases), or drop in your footage."],
            ["Write the brief", "Goal, audience, length, shape, tone and must-include. Press `Enhance` if you want it tightened."],
            ["Read the notes", "Check the hook, voice, music and anything `Assumed`. Use `Revert` or `Retry` as needed."],
            ["Edit", "Ask in the chat with @ and /, or change tracks by hand. Share a review link for feedback."],
            ["Export or hand on", "Pick a shape and preset and export, or package the timeline for your editor."],
          ],
        },
        "In the desktop app, your footage stays on your computer unless an AI step needs it, and KeyFly doesn't train AI models on your content. See everything the editor does on the [Product](/product) page. Questions? Write to [help@keyfly.si](mailto:help@keyfly.si).",
      ],
    },
  ],
  faq: [
    {
      q: "What is the best AI to turn text into a video?",
      a: "It depends on what you need back. If you want a short generated shot, a video generation model is enough. If you want a finished video with a script, voice-over, titles, music and your brand, use an AI video editor such as KeyFly, which builds every part on an editable timeline and explains each choice it makes.",
    },
    {
      q: "Can AI make a full video from a script?",
      a: "Yes. Paste your script into KeyFly's prompt box and say how long and what shape the video should be. The AI director turns it into a storyboard, records the voice-over, builds the motion graphics and adds music, each on its own track. You can then change any line, scene or layer by asking in the chat or editing by hand.",
    },
    {
      q: "How long can a text-to-video AI video be?",
      a: "KeyFly's templates run from a 4-second intro sting to a 90-second tutorial, and you set the length in your prompt when you start from a sentence. State it in seconds, such as \"a 30-second launch film\", so the AI director plans the right number of scenes and paces the voice-over to fit.",
    },
    {
      q: "Can I edit a video after the AI makes it?",
      a: "Yes, all of it. In KeyFly every layer is a real track, so you can trim, move or replace anything by hand. You can also ask in the chat, pointing at a scene with @, or use Revert to undo an AI change and Retry to build it again. Your own AI agent can edit the same timeline too.",
    },
    {
      q: "How do I write a good prompt for an AI video?",
      a: "Include six things: the goal, the audience, the length in seconds, the shape or platform, the tone, and anything that must be included, such as a product name, a date or a call to action. Leave out what your brand kit already covers. In KeyFly, the Enhance button can rewrite a rough idea into a clearer prompt for free.",
    },
    {
      q: "Will an AI-made video use my brand colours and logo?",
      a: "In KeyFly, yes, if you set up a brand kit. It holds your logo with its versions and banners, five colours, a font, a tone of voice and a voice-over. New videos use the default kit automatically, and Analyze with AI can fill the kit from your website so you only need to check it.",
    },
    {
      q: "Is text to video free?",
      a: "KeyFly has a Free plan that never expires, and every new account gets a 7-day Creator trial with no card. AI work is measured in AI minutes, and each action shows its cost before it runs. Hand edits, your own agent and exports use none. The pricing page lists what each plan includes.",
    },
    {
      q: "Can I export an AI video to Premiere Pro or Final Cut Pro?",
      a: "Yes. KeyFly exports the timeline as FCPXML for Final Cut Pro and DaVinci Resolve, EDL (CMX 3600) for Premiere Pro, Resolve and Avid, or OpenTimelineIO. Package for editing zips the timeline with every file it uses, so it opens with its media. Which plans include timeline export is on the plan comparison.",
    },
  ],
};

export default post;
