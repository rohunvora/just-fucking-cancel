---
name: just-fucking-cancel
description: Analyze bank transaction CSVs to find recurring charges, categorize subscriptions, and cancel what you don't need. Use when user says "cancel subscriptions", "audit subscriptions", "find recurring charges", or "what am I paying for". Supports Apple Card, Chase, Mint, and generic CSV formats. Outputs interactive HTML audit with copy-to-cancel workflow.
---

# just-fucking-cancel

Analyze transactions, categorize subscriptions, generate HTML audit, help cancel.

## Supported Languages

The template supports 6 languages: **English (en), Spanish (es), French (fr), Hindi (hi), Somali (so), German (de)**

The report generates ALL content in ALL 6 languages. Users can switch languages via dropdown without regenerating.

## Workflow

### 1. Get Transaction CSV
Ask user for bank/card CSV export. Common sources:
- Apple Card: Wallet → Card Balance → Export
- Chase: Accounts → Download activity → CSV
- Mint: Transactions → Export

### 2. Analyze Recurring Charges
Read CSV, identify recurring patterns:
- Same merchant, similar amounts, monthly/annual frequency
- Flag subscription-like charges (streaming, SaaS, memberships)
- Note charge frequency and total annual cost

### 3. Categorize with User
For each subscription, ask user to categorize:
- **Cancel** - Stop immediately
- **Investigate** - Needs decision (unsure, trapped in contract)
- **Keep** - Intentional, continue paying

Ask in batches of 5-10 to avoid overwhelming.

### 4. Generate HTML Audit
Copy [template.html](assets/template.html) and populate:
- Update header summary:
  - Scope line: "found N subscriptions · N transactions"
  - Breakdown: "Cancelled N · Keeping N"
  - Savings: yearly amount big, monthly in parentheses
  - Timestamp: current date (formatted for user's language)
- Add rows to appropriate sections (cancelled/investigate/keep)
- Include notes from user responses

**Multi-Language Generation (ALL 6 languages):**

Generate every data cell with translations in ALL 6 languages using data attributes:

```html
<!-- Status cells -->
<td class="status-cell" 
    data-en="Cancelled via chat Jan 3" 
    data-es="Cancelado por chat 3 de enero" 
    data-fr="Annulé par chat le 3 janvier" 
    data-hi="चैट द्वारा रद्द 3 जनवरी" 
    data-so="Laga joojiyay chat Jan 3" 
    data-de="Per Chat gekündigt 3. Januar">Cancelled via chat Jan 3</td>

<!-- Issue/Reason cells -->
<td class="note" 
    data-en="Haven't watched in 47 days" 
    data-es="Sin ver hace 47 días" 
    data-fr="Pas regardé depuis 47 jours"
    data-hi="47 दिनों से नहीं देखा"
    data-so="47 maalmood ayaan daawin"
    data-de="Seit 47 Tagen nicht geschaut">Haven't watched in 47 days</td>

<!-- Category headers -->
<tr class="category-header">
  <td colspan="3" 
      data-en="Essential Services" 
      data-es="Servicios Esenciales" 
      data-fr="Services Essentiels"
      data-hi="आवश्यक सेवाएं"
      data-so="Adeegyada Muhiimka"
      data-de="Wesentliche Dienste">Essential Services</td>
</tr>
```

**Important:**
- The visible text content should be English (default)
- Include `data-en`, `data-es`, `data-fr`, `data-hi`, `data-so`, `data-de` attributes on EVERY translatable cell
- JavaScript automatically swaps content when user changes language dropdown
- See sample data in template.html for complete examples

### 5. Cancel Subscriptions
When user checks items and copies from floating button, they'll paste:
`Cancel these: Service1 ($XX), Service2 ($XX)...`

For each service:
1. Check [common-services.md](references/common-services.md) for cancel URL
2. Use browser automation to navigate and cancel
3. Update HTML row to cancelled status with date

## HTML Structure

Three sections, auto-hide when empty:
- **Cancelled** (green badge, strikethrough) - Done items, the win
- **Needs Decision** (orange badge) - Has checkboxes for cancel selection
- **Keeping** (grey badge) - No checkboxes, just reference

Features:
- Floating copy button appears when items checked
- Privacy toggle blurs service names
- Collapsible sections via header click
- Dark/light mode toggle (persists in localStorage)
- **Multi-language support**: All content generated in 6 languages, switchable via dropdown without regenerating

## Cancellation Tips

For difficult services, see [common-services.md](references/common-services.md):
- Direct cancel URLs for 50+ services
- Dark pattern warnings (gym contracts, phone-only)
- Retention script responses
- Credit card dispute backup

## Privacy

All data stays local. Transaction CSVs are analyzed in-session only.
