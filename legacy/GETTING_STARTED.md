# Getting Started

Never used a terminal before?

## What You're About to Do

1. **Install Claude Code** — An AI tool that works directly on your computer (5 min)
2. **Download this project** — Get the skill onto your machine (2 min)
3. **Export your transactions** — Get a CSV from your bank (3 min)
4. **Run the audit** — Claude analyzes everything and asks what to cancel (5 min)
5. **Watch the magic** — Claude opens Chrome and cancels things for you

No coding required. You'll type a few commands, but I'll tell you exactly what to type.

---

## Step 1: Install Claude Code

Claude Code is a tool that lets Claude (the AI) work directly with files on your computer and control your browser.

### What You Need First

- **A Claude Pro subscription** — $20/month at [claude.ai](https://claude.ai)
- **A computer** — Mac, Windows, or Linux

### Mac

1. **Open Terminal**
   - Press `Cmd + Space` (opens Spotlight)
   - Type `Terminal` and press Enter
   - A window appears with a blinking cursor — this is Terminal

2. **Install Claude Code**
   
   Copy this line, paste it into Terminal, and press Enter:
   ```
   npm install -g @anthropic-ai/claude-code
   ```
   
   Don't have npm? Install Node.js first from [nodejs.org](https://nodejs.org) (choose the LTS version), then run the command above.

3. **Verify it worked**
   ```
   claude --version
   ```
   You should see a version number. If you see "command not found," close Terminal and open it again.

### Windows

1. **Open PowerShell**
   - Press the Windows key
   - Type `PowerShell` and click it

2. **Install Claude Code**
   ```
   npm install -g @anthropic-ai/claude-code
   ```
   
   Don't have npm? Install Node.js first from [nodejs.org](https://nodejs.org) (choose the LTS version), then run the command above.

3. **Verify it worked**
   ```
   claude --version
   ```

✅ **Claude Code is installed.**

---

## Step 2: Download This Project

You need to get this skill onto your computer.

### Option A: Download ZIP (easiest)

1. Go to this project's GitHub page
2. Click the green **Code** button
3. Click **Download ZIP**
4. Unzip it (double-click the downloaded file)
5. Move the folder somewhere easy to find — like your Desktop

### Option B: Clone with Git (if you know Git)

```bash
git clone https://github.com/rohunvora/just-fucking-cancel.git
```

✅ **You have the skill on your computer.**

---

## Step 3: Export Your Bank Transactions

You need a CSV file with your recent transactions. Most banks let you export this.

### Apple Card

1. Open **Wallet** app on your iPhone
2. Tap **Apple Card**
3. Scroll down → tap **Card Balance**
4. Tap the **...** menu → **Export Transactions**
5. Choose **Last 12 Months** and **CSV**
6. Send it to yourself (AirDrop, email, iCloud) and save to your computer

### Chase

1. Log in at [chase.com](https://chase.com)
2. Click your account
3. Find **Download account activity** (usually a download icon)
4. Select date range — last 12 months is ideal
5. Choose **CSV** format

### Other Banks

Look for "Export," "Download," or "Download transactions" in your account settings. Choose CSV format (not PDF or Excel).

**Move your CSV file(s) into the project folder** you downloaded in Step 2.

✅ **Transaction data ready.**

---

## Step 4: Run the Subscription Audit

Now the fun part.

### Navigate to the project folder

**Mac:**
```bash
cd ~/Desktop/just-fucking-cancel-main
```

**Windows:**
```powershell
cd $HOME\Desktop\just-fucking-cancel-main
```

(If you put it somewhere else, type `cd ` then drag the folder into Terminal — it pastes the path)

### Start Claude Code

```bash
claude
```

The first time, it asks you to log in. Follow the prompts.

### Tell Claude what you want

Once Claude is running, type:

```
Audit my subscriptions. I have transaction CSVs in this folder.
```

### What happens next

- Claude reads your transaction files
- Claude finds recurring charges (Netflix, Spotify, random SaaS, that gym...)
- **Claude asks you questions:** "Do you use Hulu?" "When did you last use Adobe?"
- You answer honestly — this is where the "wait, I forgot about that" moments happen
- Claude generates a beautiful HTML report

**To view your report:** Claude creates an HTML file. Double-click it to open in your browser.

✅ **Audit complete.**

---

## Step 5: Let Claude Cancel For You

This is the magic part. Claude can open Chrome and cancel subscriptions for you.

### Enable browser control

In your Claude session, type:
```
/mcp
```

Make sure browser tools are enabled. Then say:

```
Help me cancel the subscriptions I marked for cancellation.
```

### What you'll see

- Chrome opens automatically
- Claude navigates to Netflix (or wherever)
- Claude clicks through the cancellation flow
- Claude asks for your confirmation before final steps
- Moves to the next service

You're watching the whole time. Intervene whenever you want.

### When sites require login

That's normal. Log in yourself, then tell Claude to continue. Claude doesn't know your passwords (and shouldn't).

---

## Privacy

**Your transaction data stays on your computer.**

- CSV files never leave your machine
- The audit report is a local HTML file
- Nothing is uploaded anywhere
- Nothing is shared with the skill author

The only data that goes to Anthropic is your conversation with Claude — not your raw transaction files.

---

## Troubleshooting

### "claude: command not found"
- Close Terminal/PowerShell and reopen it
- Make sure Node.js is installed: run `node --version`
- Try reinstalling: `npm install -g @anthropic-ai/claude-code`

### Claude can't find my CSV
- Make sure it's in the project folder
- Make sure it's a `.csv` file (not `.xlsx` or `.pdf`)

### Browser automation not working
- Make sure Chrome is installed (not just Safari or Firefox)
- Try closing all Chrome windows first
- Check `/mcp` permissions in Claude

### Need to log in when Claude opens a site
- That's expected! Log in yourself, then tell Claude "continue"
- Claude doesn't store or access your passwords

---

## Cost

- **Claude Pro**: $20/month — [claude.ai](https://claude.ai)
- **This skill**: Free

One month is usually enough to audit and clean up everything. Then cancel Claude Pro if you want.

---

## Questions?

- Open an issue on this GitHub repo
- Check the [Claude Code docs](https://docs.anthropic.com/en/docs/claude-code)

---

*Time to stop paying for things you don't use.*
