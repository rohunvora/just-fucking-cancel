# just-fucking-cancel - Skill Plan

## Step 1: Concrete Examples

**User triggers:**
- "Help me cancel subscriptions"
- "Audit my subscriptions"
- "Find recurring charges in my transactions"
- "What subscriptions am I paying for?"

**Workflow:**
1. User provides transaction CSVs (Apple Card, Chase, etc.)
2. Claude analyzes for recurring patterns (no script needed - Claude excels at this)
3. Claude asks questions to categorize (cancel vs keep)
4. Generates interactive HTML audit from template
5. User checks items to cancel, copies list via floating button
6. Claude executes cancellations via browser automation

## Step 2: Reusable Skill Contents

| Type | File | Purpose |
|------|------|---------|
| **assets/** | `template.html` | HTML audit template with floating copy button, privacy toggle |
| **references/** | `common-services.md` | Cancellation URLs, dark patterns, phone numbers |

**Removed** (Claude already handles these well):
- ~~`parse_transactions.py`~~ - Claude parses CSVs natively
- ~~`detect_subscriptions.py`~~ - Pattern detection is Claude's strength
- ~~`csv-formats.md`~~ - Claude knows bank CSV formats

## Step 3: Skill Structure

```
just-fucking-cancel/
├── SKILL.md
├── assets/
│   └── template.html          # Interactive HTML audit template
└── references/
    └── common-services.md     # Cancellation URLs + dark pattern warnings
```

## Key Design Decisions

1. **No scripts**: Claude handles CSV parsing and pattern detection natively
2. **Privacy-first**: All data stays local, never uploaded
3. **Interactive output**: HTML with checkboxes, floating copy button, privacy toggle
4. **Browser automation**: Leverage Claude Code's MCP tools for cancellations

## Status

- [x] Plan created
- [x] HTML template finalized
- [x] Documentation created (README.md, GETTING_STARTED.md)
- [x] Skill initialized
- [x] References written (common-services.md)
- [x] SKILL.md written
- [x] Skill packaged → `just-fucking-cancel.skill`
