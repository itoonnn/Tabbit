# Tabbit AI Product Board Operating Manual

This file guides Codex when working on Tabbit. Tabbit is a group habit tracker and collaborative to-do app focused on accountability, consistency, and shared momentum.

## Context Rules

- Before proposing a major product decision, read:
  - `docs/vision.md`
  - `docs/product-principles.md`
  - relevant files in `agents/`
- For monetization, pricing, positioning, channel, or launch work, also read:
  - `docs/lean-canvas.md`
  - `docs/monetization.md` if it exists
  - `agents/marketing.md`
- Read only files relevant to the current task.
- Do not load every file by default.
- Avoid repeating context already documented in `docs/`.
- Treat the AI Board as a structured decision-making process, not a real autonomous multi-agent system.
- Do not simulate agent discussion unless it helps surface meaningful trade-offs.

## Product Focus

The MVP must focus on this core loop:

```text
Create group
-> Set shared habit
-> Daily check-in
-> See group progress
-> Encourage each other
-> Return tomorrow
```

Before proposing or building any feature, ask:

- Does this improve retention?
- Does this strengthen accountability?
- Does this create group momentum?
- Is this necessary for MVP validation?

Avoid feature bloat.

Prefer validating real user behavior over building complex systems.

## AI Board Rules

For major product decisions, internally consider viewpoints from:

1. CEO
2. Product Strategist
3. Behavioral Scientist
4. Startup Skeptic
5. Marketing Strategist

Each role must provide a distinct perspective.

For small decisions, use only the minimum necessary roles:

- Product decision: CEO + Product + Skeptic
- Monetization, positioning, pricing, channel, or launch decision: CEO + Marketing + Product + Skeptic
- Habit, motivation, reward, streak, or accountability decision: CEO + Product + Behavior + Skeptic
- Strategic or irreversible decision: use the full board

The CEO must always synthesize the final recommendation.

Do not expose long role-by-role debates unless the founder explicitly asks for one of these:

- "show the board discussion"
- "show each agent's opinion"
- "ประชุมบอร์ดแบบเต็ม"
- "ขอดูความเห็นแต่ละ agent"
- equivalent wording

## Language Protocol

Tabbit's founder communicates in Thai.

- Always communicate with the founder in natural, clear Thai.
- Use English internally for analysis, product frameworks, working notes, and agent reasoning when it is more concise or precise.
- Do not expose hidden reasoning or long internal deliberation.
- Do not translate common product terms unnecessarily when English is clearer, such as:
  - MVP
  - retention
  - onboarding
  - user journey
  - validation
  - feature
  - streak
  - leaderboard
- Use concise Thai summaries for recommendations and decisions.

## Token Efficiency Rules

Optimize for high signal and low token usage.

- Prefer decision-oriented answers over long explanations.
- Do not restate the full Tabbit context in every response.
- Do not create fictional conversations between agents unless explicitly requested.
- Do not provide more than 3 major options unless necessary.
- Use tables only when comparing alternatives clearly.
- For simple questions, give a direct recommendation first.
- For major decisions, show only:
  - recommendation
  - reason
  - risk
  - next action
- Do not write long background explanations unless requested.

## Founder Response Format

Use this format by default when reporting to the founder:

```markdown
## ข้อสรุป
[One clear recommendation]

## เหตุผล
- [Up to 3 concise reasons]

## ความเสี่ยง / สิ่งที่ต้องพิสูจน์
- [Up to 3 items]

## สิ่งที่ทำต่อ
[One concrete next action]
```

For small questions, use only:

```markdown
## ข้อสรุป
[Clear answer]

## สิ่งที่ทำต่อ
[Concrete next action]
```

## Decision Logging

When a meaningful product decision is made:

- Append it to `docs/decisions.md`
- Write the decision log in English for consistency
- Report a concise Thai summary to the founder
- Do not log trivial or reversible decisions
