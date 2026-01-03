# JUST FUCKING CANCEL

How it works:

1. `Export credit card statements`
2. `Add exported .csv's to your local folder`
3. `Run claude, say "cancel subscriptions"`

This Claude skill analyzes your credit card transactions, asks you about each recurring charge, and helps you cancel the ones you don't need — including automating the cancellation process in your browser.

![just-fucking-cancel output](cancel-preview.png)

## What is this?

This is a **Claude Code skill** — a set of instructions that teaches Claude how to do a specific task really well. Instead of explaining what you want from scratch, you install the skill once and Claude already knows exactly how to audit your subscriptions.

**Think of it like:** An app that runs on AI instead of your computer. You tell Claude "audit my subscriptions" and it knows exactly what to do.

## Why this is better than a traditional app

| Traditional subscription tracker | This skill |
|----------------------------------|------------|
| Flags everything as "cancel" | **Asks you** about each charge before categorizing |
| Can't understand context | Understands "I share this with family" or "only use during tax season" |
| One-size-fits-all report | Personalized based on YOUR answers |
| Your data goes to their servers | **Everything stays on your computer** |
| Fixed functionality | Claude adapts to any CSV format |

The questions aren't a limitation — they're the product. That's when you realize "wait, I'm still paying for THAT?"

## Quick Start

**Requirements:** [Claude Code](https://docs.anthropic.com/en/docs/claude-code/getting-started) + Claude Pro ($20/month)

```bash
# 1. Clone this repo
git clone https://github.com/rohunvora/just-fucking-cancel.git
cd just-fucking-cancel

# 2. Start Claude Code
claude

# 3. Tell Claude what you want
> Audit my subscriptions
```

Claude will ask you to drop in your bank transaction CSV, then walk you through the audit.

**Never used Claude Code?** See the complete [Getting Started Guide](GETTING_STARTED.md).

## What happens when you run it

1. **You provide transaction data** — Export a CSV from your bank (Apple Card, Chase, etc.)
2. **Claude identifies recurring charges** — Netflix, Spotify, that gym membership, random SaaS tools
3. **Claude asks you questions** — "Do you use Hulu?" "When did you last open Adobe Creative Cloud?"
4. **You answer honestly** — This is where the "oh shit, I forgot about that" moments happen
5. **Claude generates an audit report** — Beautiful HTML with everything categorized
6. **Claude cancels for you (optional)** — Opens Chrome and clicks through cancellation flows

## The audit report

Your audit includes:
- **Cancel** — Things you confirmed you don't use
- **Investigate** — Charges you're unsure about
- **Keep** — Subscriptions you actually use

Features:
- ☑️ **Checkboxes** — Select items to cancel
- 📋 **Copy button** — One click to copy your cancel list
- 🔒 **Privacy toggle** — Blur service names before screenshotting
- 📁 **Collapsible sections** — Clean, organized view

## Browser automation (the magic part)

After your audit, you can tell Claude:

```
Help me cancel the subscriptions I marked for cancellation.
```

Claude will:
- Open Chrome automatically
- Navigate to each service's cancellation page
- Click through the cancellation flow
- Ask for your confirmation before final steps
- Handle dark patterns and "are you sure?" prompts

You watch the whole thing happen. Intervene anytime.

## Privacy

**Your data never leaves your computer.**

- Transaction CSVs stay local — never uploaded anywhere
- The audit report is a local HTML file
- Nothing is shared with the skill author (me)

The only data that reaches Anthropic is your conversation with Claude — not your raw transaction data.

## Cost

- **Claude Pro**: $20/month — [sign up here](https://claude.ai)
- **This skill**: Free

One month of Claude Pro is usually enough to clean up years of subscription bloat. Then cancel Claude Pro too, if you want. (It won't try to stop you.)

---

## Additional Resources

- **Deploying to Vercel?** Check out our [Vercel Web Analytics guide](VERCEL_ANALYTICS.md) to add analytics to your deployed projects.

---

**Questions?** Open an issue. **New to Claude Code?** [Start here](GETTING_STARTED.md).
