// Sources: KeyFly facts from src/content/product.js (productFootage: the four
// passes, footage privacy), home.js (Revert/Retry, director notes, review
// links, audience prompts), use-cases.js (Talking heads and podcasts
// templates, names, shapes and lengths; template FAQ: @ and / in the chat,
// hand edits use no AI minutes), integrations.js (export presets, timeline
// export, Package for editing), blog.js (export settings post, brand kit
// post, clean-up-talking-head-video), pricing.js, legal.js and the writer
// brief's verified fact list. Recording and caption advice is general craft
// advice, not a KeyFly claim.
// Competitor: Cardboard, talking-head features (filler words, dead air,
// retakes, captions) from https://www.cardboard.ai and
// https://learn.usecardboard.com, checked 19 November 2026.
const post = {
  slug: "edit-talking-head-video-with-ai",
  topic: "guides",
  date: { iso: "2026-11-19", text: "19 November 2026" },
  title: "How to edit a talking-head video with AI: remove filler words, add captions and zooms",
  seoTitle: "Edit a talking-head video with AI: the full guide",
  dek: "Record well, cut silences and filler words, add captions, zooms and callouts, then turn one recording into clips for every platform. A step-by-step guide.",
  cover: { video: "/video/agent-reel.mp4", poster: "/video/agent-reel.webp", alt: "A woman talking into a microphone in a podcast studio" },
  sections: [
    {
      id: "short-answer",
      title: "How do you edit a talking-head video with AI?",
      blocks: [
        "To edit a talking-head video with AI, record yourself with clean sound and steady framing, drop the file into an AI video editor, and let it cut the silences and filler words, add word-by-word captions, and place zooms and callouts on the key moments. Then you review every change, fix what you disagree with, and export a version for each platform.",
        "This guide covers the whole job: what a talking-head edit involves, how to record so the AI has less to fix, each step in KeyFly, caption rules for every frame shape, turning one recording into several clips, and a checklist to run before you publish. If you want the two-minute version, read [From a talking-head recording to a finished clip](/blog/clean-up-talking-head-video) instead.",
        "**In short:**",
        {
          list: [
            "Good recordings make good AI edits: a lav or USB mic close to your mouth, light on your face, the camera at eye level, and a clean pause between thoughts.",
            "KeyFly runs four passes on a recording: silences, filler words, captions, then zooms and callouts. Every pass lands on its own track, so you can change or undo any of it.",
            "Captions need different placement and size for 9:16, 1:1, 4:5 and 16:9. Keep them clear of each app's buttons and keep lines short.",
            "One recording can become a vertical clip, a square LinkedIn post and a 16:9 highlight. The **Talking heads and podcasts** templates give you a starting shape for each.",
            "Export with a preset per platform, or hand the timeline to Premiere Pro, DaVinci Resolve, Final Cut Pro or Avid to finish there.",
          ],
        },
        {
          image: {
            src: "/video/footage-raw.webp",
            alt: "A young man in earphones talking to camera by a window, before editing",
            caption: "A typical raw talking head: one take, natural pauses, a few false starts. Illustrative stock footage.",
            w: 960,
            h: 540,
          },
        },
      ],
    },
    {
      id: "what-the-edit-involves",
      title: "What does a talking-head edit actually involve?",
      blocks: [
        "A talking-head edit is mostly removal and labelling: you take out what slows the viewer down, then add what helps them follow without sound.",
        "Most of the time on a talking-head edit doesn't go on creative choices. It goes on chores: scrubbing for gaps, cutting every \"um\", typing and timing captions, and keyframing punch-ins so a static shot doesn't feel static. These are exactly the parts an AI editor is good at, because they follow rules you can describe.",
        {
          table: {
            head: ["Job", "By hand", "With KeyFly"],
            rows: [
              ["Silences", "Find every gap on the waveform and cut it", "Long pauses closed automatically"],
              ["Filler words", "Listen for each \"um\", \"uh\", \"like\", \"you know\" and cut around it", "Filler words cut from the transcript"],
              ["Captions", "Type every word and time it to the voice", "Captions added, timed word by word"],
              ["Zooms", "Keyframe a punch-in on each key moment", "Zooms on the focus area"],
              ["Callouts", "Build a text or graphic layer for each point", "Callouts added on what matters"],
              ["Versions", "Re-edit for each frame shape", "Pick a template or a shape, and export with a preset"],
            ],
          },
        },
        "What stays with you is judgement: which story to tell, which take sounds most like you, which pause is a deliberate beat and which is dead air. A good AI edit gives you a first cut fast and then gets out of the way while you make those calls.",
      ],
    },
    {
      id: "recording-tips",
      title: "How should you record a talking head so the AI edit works better?",
      blocks: [
        "Record clean audio, light your face from the front, frame yourself at eye level with room to crop, and leave a short silent beat between thoughts.",
        "AI editing works from your audio and your picture. Clear speech gives a cleaner transcript, which gives cleaner cuts and more accurate captions. A well-framed shot gives zooms and crops room to work. None of this needs expensive kit.",
        {
          steps: [
            ["Sound first", "Use a lavalier or USB microphone a hand's width from your mouth, not the camera's built-in mic across the room. Record in a soft room (curtains, a sofa, a rug) to cut echo. Turn off fans, fridges and notifications. Clean audio is the single biggest factor in transcript and caption accuracy."],
            ["Light your face", "Face a window or put a soft light slightly to one side of the camera. Avoid a bright window behind you, which turns you into a silhouette. Even light means the AI's zooms don't magnify noise in dark areas."],
            ["Frame for cropping", "Put the camera at eye level and leave space above your head and to the sides. If you'll post vertical clips, keep your face near the centre of a 16:9 frame so a 9:16 crop still holds your head and shoulders. Shoot at the highest resolution your camera allows so punch-ins stay sharp."],
            ["Lock it off", "Use a tripod or a stack of books. A steady shot makes cuts between sentences feel like intentional jump cuts rather than mistakes."],
            ["Pause between thoughts", "Leave a one-second silence between points and before each new take. Those pauses are where the edit cuts, and clean gaps make the AI's choices easier to read and change."],
            ["Retake cleanly", "If you stumble, stop, pause, and restart the whole sentence rather than patching mid-word. It's far easier to keep the good sentence than to stitch half of one."],
            ["Say the hook twice", "Record your opening line two or three ways. Short clips live or die in the first seconds, and having options costs you nothing."],
          ],
        },
        {
          image: {
            src: "/video/footage-loop.webp",
            alt: "A man talking to camera in a studio, framed at eye level with space around him",
            caption: "Eye-level framing with room around the head leaves space for zooms and for a vertical crop. Illustrative stock footage.",
            w: 1280,
            h: 720,
          },
        },
        "A note on scripts: reading word for word often sounds flat. Bullet points on a card behind the camera tend to give a more natural delivery, and the filler words that come with it are the part the AI removes anyway.",
      ],
    },
    {
      id: "step-by-step",
      title: "How do you edit a talking-head video in KeyFly, step by step?",
      blocks: [
        "Drop the recording in, let KeyFly run its four passes, review each change, and export or hand off the timeline.",
        "You can do this in the desktop app for Mac or Windows, in the web app at app.keyfly.si, or from inside ChatGPT or Claude. The steps below use the desktop app, where your footage stays on your computer unless a cloud AI step needs it.",
        {
          steps: [
            ["Start a project with your footage", "[Sign up free](https://app.keyfly.si/signup?plan=free) or open the app, and drop your recording in. You can also pick a template from **Talking heads and podcasts** first, or describe what you want in a sentence: \"Edit my footage into a 30s video with captions, plus a 9:16 cut\". Scenes are optional for footage edits, so no storyboard is needed."],
            ["Silences are closed", "KeyFly finds the long pauses and closes them, so the talk keeps moving."],
            ["Filler words are cut", "\"Um\", \"uh\", \"like\" and \"you know\" come out. Each cut is a real edit on the timeline, not a hidden filter."],
            ["Captions are added", "Captions appear, timed to every word, in your brand kit's font if you have one."],
            ["Zooms and callouts land", "The shot zooms on the focus area at key moments, and callouts mark the points that matter."],
            ["Read the director's note", "After the edit, the AI director tells you what it chose and why, what else would fit and what it would try next."],
            ["Change anything", "Bring back a pause, move a zoom, rewrite a caption: by hand on the timeline, or by asking in the chat. Type @ to point at a scene and / for a command. Press `Revert` to take back the last change, or `Retry` to have another go."],
            ["Export or hand off", "Pick a shape and a preset, or send the timeline to another editor."],
          ],
        },
        {
          image: {
            src: "/video/footage-cut.webp",
            alt: "The same young man talking to camera by a window, after the cut",
            caption: "The same recording after the cut: pauses closed and filler words gone, ready for captions and zooms. Illustrative stock footage.",
            w: 960,
            h: 540,
          },
        },
        { tip: "Every layer KeyFly adds sits on its own track. That's what makes \"change anything\" real: you're editing a timeline, not regenerating a video and hoping it comes back better." },
      ],
    },
    {
      id: "silences-and-filler-words",
      title: "How does AI remove silences and filler words from a video?",
      blocks: [
        "The AI transcribes your speech, marks the gaps and the filler words, and cuts around them, leaving a timeline you can adjust cut by cut.",
        "Removing silences and filler words is the pass that saves the most time and the one most worth checking. A recording with a handful of pauses and filler words can lose seconds of dead air without losing a single idea, and on a short clip, seconds matter.",
        "Not every pause is dead air, though. Some are doing work:",
        {
          list: [
            "**The beat before a punchline.** A short pause sets up the payoff. Ask for it back: \"keep the pause before the punchline\".",
            "**A breath after a big claim.** Letting a number or a strong line land for half a second helps it stick.",
            "**Thinking on camera.** In interviews and podcasts, a natural pause can show honesty. Cutting every one can make a guest sound rushed.",
            "**\"Like\" as a real word.** \"I like this\" is not filler. Skim the cuts on words that have a second meaning.",
          ],
        },
        "Tight cuts also create jump cuts, where your head shifts slightly between sentences. On vertical clips viewers are used to them. On longer 16:9 pieces, a zoom or a callout over the cut smooths it, which is why KeyFly's zoom pass follows the cutting passes.",
        { tip: "Hand edits use no AI minutes. If you only want to restore two pauses, drag them back on the timeline rather than asking the AI." },
        "For comparison: Cardboard, another chat-driven AI editor, also removes filler words and dead air, and its public pages say it removes retakes too (cardboard.ai, checked 19 November 2026). If automatic retake removal is the feature you need most, it's worth a look. See [KeyFly vs Cardboard](/blog/keyfly-vs-cardboard) for the full comparison.",
      ],
    },
    {
      id: "captions",
      title: "What are the best caption settings for each platform and aspect ratio?",
      blocks: [
        "Keep captions short, high-contrast and away from each app's buttons: low-centre on 16:9, around the middle third on 9:16, and just below centre on 1:1 and 4:5.",
        "Captions are not optional for talking heads. Many people watch social video with the sound off, and even with sound on, captions help people follow accents, jargon and fast speech. They also make your video accessible to viewers who are deaf or hard of hearing.",
        {
          table: {
            head: ["Shape", "Where it plays", "Caption placement", "Style"],
            rows: [
              ["9:16 (vertical)", "TikTok, Reels, Shorts", "Middle third of the frame, above the bottom area where the caption text, username and buttons sit", "Large, bold, two to four words at a time; highlight the word being spoken"],
              ["1:1 (square)", "LinkedIn and feeds", "Lower-middle, clear of your chin", "One or two short lines; medium-large text"],
              ["4:5 (portrait)", "Instagram and Facebook feeds", "Just below centre, clear of the bottom edge", "One or two short lines; bold enough to read at feed size"],
              ["16:9 (landscape)", "YouTube, websites, webinars", "Low-centre, in the traditional subtitle position", "Full sentences across one or two lines; quieter style"],
            ],
          },
        },
        "A few rules hold on every shape:",
        {
          list: [
            "**Contrast first.** White or a light brand colour with a dark outline or a soft box behind it. Test over your brightest frame.",
            "**Short lines.** Break at natural phrases, not mid-phrase. A viewer should read each line in one glance.",
            "**Highlight sparingly.** Colouring the current word or a key word helps; colouring everything doesn't.",
            "**Check names and terms.** Transcription misses brand names, product names and jargon most often. Read every caption once.",
            "**Mind the face.** Never cover the mouth. On a tight zoom, move the captions rather than the face.",
          ],
        },
        {
          gallery: {
            items: [
              { src: "/video/templates/expert-tip.webp", alt: "A frame from the Expert tip template, vertical", label: "Expert tip · 9:16", w: 216, h: 384 },
              { src: "/video/templates/linkedin-talking-head.webp", alt: "A frame from the LinkedIn talking head template, square", label: "LinkedIn talking head · 1:1", w: 300, h: 300 },
              { src: "/video/templates/interview-highlights.webp", alt: "A frame from the Interview highlights template, landscape", label: "Interview highlights · 16:9", w: 384, h: 216 },
            ],
            caption: "Frames from three KeyFly templates in three shapes. Caption size and position change with the frame.",
          },
        },
        { tip: "KeyFly times captions word by word and you can rewrite any of them. Captions and titles use your brand kit's font, so they match your other videos without restyling each one." },
      ],
    },
    {
      id: "zooms-and-callouts",
      title: "When should you add zooms and callouts to a talking head?",
      blocks: [
        "Add a zoom where you make a key point or hide a jump cut, and a callout where a word, number or step deserves to be read as well as heard.",
        "A static talking head can hold attention if the speaker is strong, but most benefit from a little movement. Zooms (punch-ins) change the framing without a second camera. Callouts put the point on screen so it sticks.",
        {
          table: {
            head: ["Use", "Zoom", "Callout"],
            rows: [
              ["Key claim or number", "Gentle punch-in as you say it", "The number on screen"],
              ["A jump cut between sentences", "Alternate between wide and tight framing", "Not needed"],
              ["A list of steps", "Hold the framing steady", "Each step as a short label"],
              ["A product or screen", "Zoom on the focus area", "Point at the button or feature"],
              ["The hook", "A tighter opening frame", "The hook line as large text"],
            ],
          },
        },
        "Restraint wins. A zoom on every sentence feels nervous, and a callout on every point turns a talk into a slide deck. On a 60-second clip, a few well-placed zooms and two or three callouts are usually enough.",
        {
          image: {
            src: "/video/cases/demo.webp",
            alt: "A laptop showing a Spring launch app screen with a Zoom 2x callout",
            caption: "A zoom with a callout points the viewer at one thing. Illustrative graphic in KeyFly's style, not an app screenshot.",
            w: 960,
            h: 540,
          },
        },
        "If KeyFly zooms somewhere you don't want, move or delete the zoom on its track, or ask: \"no zoom in the first five seconds\". The zoom and the callout are separate layers, so you can keep one and drop the other.",
      ],
    },
    {
      id: "one-recording-many-clips",
      title: "How do you turn one recording into several clips?",
      blocks: [
        "Pick the strongest moments, then cut each one to its own shape and length, using a template as the frame for each platform.",
        "One good recording, especially a podcast or interview, holds several clips. The work is choosing moments that stand alone: a clear opening line, one idea, and an ending that doesn't need the next minute to make sense. You can ask for this directly: \"Turn my podcast episode into three vertical clips with the strongest quotes, speaker framing and captions.\"",
        "KeyFly's **Talking heads and podcasts** category has ten templates, each with its own shape and length:",
        {
          table: {
            head: ["Template", "Shape", "Length", "Good for"],
            rows: [
              ["Podcast clip", "9:16", "45s", "A strong quote from an episode, for Reels, TikTok and Shorts"],
              ["Hot take", "9:16", "30s", "One sharp opinion, said fast"],
              ["Expert tip", "9:16", "40s", "A single piece of advice"],
              ["Podcast audiogram", "1:1", "30s", "Audio-led clips for feeds"],
              ["LinkedIn talking head", "1:1", "45s", "A point of view for a professional feed"],
              ["Founder update", "16:9", "60s", "News for customers, team or investors"],
              ["Podcast guest intro", "16:9", "20s", "Introducing a guest before an episode"],
              ["Webinar highlight", "16:9", "60s", "The best minute of a webinar"],
              ["Interview highlights", "16:9", "60s", "A run of the best answers"],
              ["Long talk with chapters", "16:9", "90s", "A longer talk, split into chapters"],
            ],
          },
        },
        {
          gallery: {
            items: [
              { src: "/video/templates/podcast-clip.webp", alt: "A frame from the Podcast clip template", label: "Podcast clip", w: 216, h: 384 },
              { src: "/video/templates/hot-take.webp", alt: "A frame from the Hot take template", label: "Hot take", w: 216, h: 384 },
              { src: "/video/templates/podcast-audiogram.webp", alt: "A frame from the Podcast audiogram template", label: "Podcast audiogram", w: 300, h: 300 },
              { src: "/video/templates/webinar-highlight.webp", alt: "A frame from the Webinar highlight template", label: "Webinar highlight", w: 384, h: 216 },
            ],
            caption: "Frames from four KeyFly templates in the Talking heads and podcasts category, recorded from the app.",
          },
        },
        "A practical order for a single recording:",
        {
          steps: [
            ["Cut the master first", "Run the clean-up passes on the full recording, so every clip inherits the same tidy edit."],
            ["Mark the moments", "Read the transcript and note three to five passages that make sense alone and open strongly."],
            ["Match moment to template", "A sharp opinion fits Hot take; a how-to fits Expert tip; a story fits Interview highlights."],
            ["Rewrite the hook", "The first line of a clip is often the middle of a sentence in the full talk. Trim to a clean start or add a title card."],
            ["Export each with its preset", "Vertical clips with the TikTok, Reels or Shorts preset; square with LinkedIn; landscape with YouTube."],
          ],
        },
        "Browse the whole category on [use cases](/use-cases#talking-heads-and-podcasts). The app marks each template Free or Premium, and your plan sets which you can use; see [the plans](/pricing#compare).",
      ],
    },
    {
      id: "voice-over-and-brand-kit",
      title: "Can you add voice-over, music and your brand to a talking head?",
      blocks: [
        "Yes: a brand kit puts your logo, colours, font and tone on every clip, and you can add an AI or cloned voice-over, a music bed and sound effects on their own tracks.",
        "A talking head is mostly your own voice, but there are still places for more audio and branding:",
        {
          list: [
            "**Intros and outros.** A short voice-over line over a title card (\"Three things I learnt this week\") or an end card with a call to action.",
            "**Fixing a fluffed line.** If one sentence is unusable, a voice-over in a voice that matches can cover a cutaway. Only clone a voice that's yours, or that you have clear permission to use.",
            "**Music beds.** KeyFly makes a bed to a mood, genre and tempo, licensed for you. Keep it low under speech, or drop it for interviews.",
            "**Sound effects.** From the library, on their own track. A soft whoosh under a zoom or a click under a callout can help; more than a few gets distracting.",
          ],
        },
        "The brand kit is what makes a run of clips look like one channel. It holds your logo (plus its versions and banners), five colours, a font, a tone of voice and a voice-over, either an AI voice or a clone of your own on higher plans. Paste your website's address and press `Analyze with AI` to fill it, then check each part. Mark a kit `Default` and every new video starts with it. The full walkthrough is in [Fill a brand kit from your website](/blog/brand-kit-from-your-website).",
        {
          image: {
            src: "/video/brand/podcast.webp",
            alt: "A woman in headphones speaking into a studio microphone, square frame",
            caption: "A square podcast frame like this is where a brand kit earns its keep: the same font, colours and logo on every clip. Illustrative stock footage.",
            w: 480,
            h: 480,
          },
        },
        { tip: "Captions and titles use your kit's font, and new videos pick up your default kit automatically, so ten clips from one recording all match without restyling." },
      ],
    },
    {
      id: "export-per-platform",
      title: "How should you export a talking-head video for each platform?",
      blocks: [
        "Choose the frame shape for where it will play, use the matching preset, and keep MP4 (H.264) unless someone asks for something else.",
        "KeyFly's export sheet has presets for **TikTok, Instagram Reels, YouTube, YouTube Shorts, LinkedIn and X**, plus `Custom`. You can export at 720p, 1080p or up to 4K, at 23.976 to 60 fps, as MP4, MOV, WebM, MKV or GIF, in H.264 or HEVC. Sound can go out as WAV and frames as pictures.",
        {
          table: {
            head: ["Where", "Shape", "Preset", "Notes"],
            rows: [
              ["TikTok", "9:16", "TikTok", "Captions in the middle third; hook in the first seconds"],
              ["Instagram Reels", "9:16", "Instagram Reels", "Check the cover frame; avoid text at the very bottom"],
              ["YouTube Shorts", "9:16", "YouTube Shorts", "Keep it short and self-contained"],
              ["YouTube", "16:9", "YouTube", "Classic subtitle placement; longer edits work"],
              ["LinkedIn", "1:1 or 4:5", "LinkedIn", "Captions on, since many people watch muted at work"],
              ["X", "16:9 or 1:1", "X", "A strong first frame; keep it brief"],
            ],
          },
        },
        "Exports are encoded on your device, so nothing is uploaded and exporting uses no AI minutes. The Free plan exports in 1080p with a small KeyFly mark; paid plans export up to 4K without it. Every setting is explained in [Video export settings for every platform](/blog/video-export-settings-every-platform).",
        {
          image: {
            src: "/video/format-loop.webp",
            alt: "A creator filming herself on a city street",
            caption: "The same speaker, many screens: shape and preset decide how a clip fits each one. Illustrative stock footage.",
            w: 960,
            h: 540,
          },
        },
        "Before you post, send a review link if someone else needs to sign off. Anyone with the link can watch, comment at a moment, and approve or ask for changes, without being able to edit.",
      ],
    },
    {
      id: "hand-off",
      title: "Can you finish a talking-head edit in Premiere Pro or DaVinci Resolve?",
      blocks: [
        "Yes: export the timeline as FCPXML, EDL or OpenTimelineIO, or use Package for editing to send it with every file it uses.",
        "Sometimes the AI edit is the rough cut and the finish happens elsewhere: a colourist grades it, an editor adds a multicam angle, or a client's team wants the project in their own tool. KeyFly hands the timeline over rather than a flattened video, so every cut stays a cut.",
        {
          table: {
            head: ["Format", "Opens in"],
            rows: [
              ["FCPXML", "Final Cut Pro, DaVinci Resolve"],
              ["EDL (CMX 3600)", "Premiere Pro, DaVinci Resolve, Avid"],
              ["OpenTimelineIO", "DaVinci Resolve and pipelines"],
            ],
          },
        },
        "`Package for editing` makes a .zip with a folder per editor: the timeline plus every file it uses (footage, voice-over, music, pictures), linked by relative paths so it opens with its media. You can include graphics, titles and captions as 1080p PNG sequences with transparency, which is useful when the captions need to come along to the other editor. Timeline export depends on your plan. The step-by-step is in [Export a timeline to Final Cut, Resolve, Premiere or Avid](/blog/export-timeline-to-final-cut-resolve-premiere-avid).",
        "If you'd rather edit with an AI agent you already pay for, connect Claude Code, Codex, Cursor, Antigravity or any ACP agent. It edits your KeyFly timeline on your own plan, without AI minutes. See [Edit video with Claude Code, Codex or Cursor](/blog/edit-video-with-claude-code-codex-cursor).",
      ],
    },
    {
      id: "qa-checklist",
      title: "What should you check before publishing a talking-head video?",
      blocks: [
        "Watch it once with sound and once without, then check the hook, captions, cuts, framing and end against a short list.",
        "An AI first cut is fast, and that's the reason to review it properly. Run this before every upload:",
        {
          list: [
            "**The first three seconds.** Does it open on a full thought, not mid-sentence? Would you keep watching?",
            "**Muted watch.** With the sound off, can you follow the point from captions and callouts alone?",
            "**Caption spelling.** Names, products, places and jargon are spelt right; no word is stranded alone on a line.",
            "**Caption placement.** Nothing hides behind the platform's buttons, and nothing covers the mouth.",
            "**Cuts.** No clipped first or last syllables; no pause removed that was a deliberate beat.",
            "**Filler removal.** No real word cut because it looked like filler (\"I like this\", \"you know the answer\").",
            "**Zooms.** Sharp, not soft or noisy; no zoom on a moment that doesn't need it.",
            "**Audio levels.** Speech is clear over any music; no sudden jumps between cuts.",
            "**Brand.** The right logo, colours and font; the default kit is the one you meant.",
            "**Shape and preset.** Each version matches its platform, with the right length.",
            "**The end.** A clean last line or end card, and a call to action if you want one.",
            "**Sign-off.** If anyone else needs to approve it, a review link has been sent and answered.",
          ],
        },
        { quote: "Watch it once with sound and once without. Most caption and pacing problems show up on the muted pass." },
      ],
    },
    {
      id: "cost-and-privacy",
      title: "What does AI editing cost, and where does your footage go?",
      blocks: [
        "AI work in KeyFly is measured in AI minutes, shown before each action runs; hand edits and exports use none, and desktop footage stays on your computer unless an AI step needs it.",
        "An AI minute is the one unit for the AI's work, whether that's building a cut, making a change you ask for, or adding captions. Each action shows its cost before it runs, and failed AI work is refunded automatically. Unused plan minutes roll over one period, up to one period's allowance, and packs don't expire while your account is open. How it all adds up is explained in [What is an AI minute?](/blog/what-is-an-ai-minute), and current plan prices are on [pricing](/pricing).",
        "The Free plan never expires, projects never expire, and every new account gets a 7-day Creator trial with no card. Teams can use the self-serve Team plan, priced per seat, with shared brand kits.",
        "On privacy: KeyFly doesn't train AI models on your content. In the desktop app, your footage stays on your computer and is uploaded only when a cloud AI step needs it. Your projects stay yours, and you can always export them. The desktop apps run on macOS 13 and later (Apple silicon and Intel) and on Windows 10 and 11 (64-bit); there's more on the Windows side in [AI video editor for Windows](/blog/ai-video-editor-for-windows).",
        "Ready to try it on your own recording? [Start free](https://app.keyfly.si/signup?plan=free), or [download the desktop app](/#download). Questions go to help@keyfly.si.",
      ],
    },
  ],
  faq: [
    {
      q: "How do I remove filler words from a video automatically?",
      a: "Use an AI editor that transcribes your speech and cuts the filler words from the timeline. In KeyFly, drop your recording in and it removes \"um\", \"uh\", \"like\" and \"you know\" as one of four passes, alongside silences, captions and zooms. Each cut is a real edit on the timeline, so you can restore any word by hand or by asking in the chat.",
    },
    {
      q: "Can AI remove silences from a video?",
      a: "Yes. AI editors detect long pauses in the audio and close them so the talk keeps moving. KeyFly does this automatically when you add a talking-head recording. Some pauses are worth keeping, such as the beat before a punchline, so review the result and bring back any pause you liked, either on the timeline or by asking (\"keep the pause before the punchline\").",
    },
    {
      q: "How do I add auto captions to a video?",
      a: "Drop the video into an editor that transcribes speech and places captions timed to each word. KeyFly adds word-by-word captions to talking-head footage and uses your brand kit's font for them. Read every caption once, since names and jargon are the most common errors, and place them to suit the frame shape and the platform's on-screen buttons.",
    },
    {
      q: "Where should captions go on a 9:16 vertical video?",
      a: "Around the middle third of the frame. On TikTok, Reels and Shorts, the bottom of the screen holds the post's text, username and buttons, and the right edge holds the like and share icons, so captions placed low get covered. Keep two to four words on screen at a time, use bold, high-contrast text, and never cover the speaker's mouth.",
    },
    {
      q: "How do I turn a podcast into short video clips?",
      a: "Clean up the full recording first, then pick three to five moments that stand alone with a strong opening line. Cut each to its own shape and length: vertical for TikTok and Reels, square for LinkedIn, landscape for YouTube. In KeyFly, templates such as Podcast clip, Podcast audiogram and Interview highlights give each clip a starting frame, and you can ask for several clips in one sentence.",
    },
    {
      q: "Can I edit a talking-head video with AI on Windows?",
      a: "Yes. KeyFly has a desktop app for Windows 10 and 11 (64-bit) as well as macOS 13 and later on Apple silicon and Intel Macs, and a web app at app.keyfly.si. The talking-head passes (silences, filler words, captions, zooms and callouts) work the same on every platform, and exports are encoded on your own device.",
    },
    {
      q: "Can I export my AI edit to Premiere Pro or DaVinci Resolve?",
      a: "Yes. KeyFly exports the timeline as FCPXML for Final Cut Pro and Resolve, EDL (CMX 3600) for Premiere Pro, Resolve and Avid, and OpenTimelineIO. Package for editing zips the timeline with every file it uses, and can include graphics, titles and captions as transparent PNG sequences. Timeline export depends on your plan; check the plans page for what each includes.",
    },
    {
      q: "Is my footage used to train AI models?",
      a: "Not with KeyFly. KeyFly doesn't train AI models on your content. In the desktop app your footage stays on your computer and is uploaded only when a cloud AI step needs it, and exports are encoded on your device. Your projects stay yours and you can always export them, even if you cancel.",
    },
  ],
};

export default post;
