# Product Decisions

## 2026-06-26 - Focus on group habits before broad productivity

### Decision

Tabbit will focus on group habits before becoming a broad productivity tool.

### Context

Tabbit needs a clear starting wedge and should not compete as a generic to-do list or productivity suite.

### Why

Group accountability is the core differentiated belief. A narrow focus makes validation easier and keeps the MVP small.

### Alternatives Considered

- Build a personal habit tracker first
- Build a collaborative to-do app with many task-management features

### Risks

- The group habit use case may not be painful enough
- Users may expect personal productivity features early

### What Would Change This Decision

Evidence that users strongly prefer individual habit tracking first, or that group habits do not drive repeat behavior.

## 2026-06-26 - Start with a 21-day group reading challenge

### Decision

The first MVP use case is a 21-day group reading challenge.

### Context

The product needs one concrete scenario to guide validation, scope, copy, and user flow.

### Why

Reading 20 pages per day for 21 days is simple, measurable, socially understandable, and suitable for manual validation in a LINE group.

### Alternatives Considered

- Fitness challenge
- Meditation challenge

### Risks

- Reading may not be the highest-frequency or most emotionally urgent habit
- The use case may overfit to students or book-focused groups

### What Would Change This Decision

Interview or experiment data showing another habit has stronger group demand, easier check-ins, or better day-7 retention.

## 2026-06-26 - Prioritize accountability and check-ins over advanced gamification

### Decision

The MVP should prioritize accountability and check-ins over advanced gamification.

### Context

Points, rewards, badges, and complex streak mechanics can add scope before the core behavior is proven.

### Why

The core risk is whether users return daily because of group commitment. Advanced gamification should not hide weak accountability.

### Alternatives Considered

- Include points and rewards in the initial MVP
- Build leaderboards as a primary engagement mechanic

### Risks

- The MVP may feel too plain without rewards
- Some users may need stronger feedback loops to stay engaged

### What Would Change This Decision

Manual experiments showing check-ins alone are not enough, and lightweight rewards measurably improve return rate without discouraging users.

## 2026-06-26 - Treat leaderboards as optional, not automatic

### Decision

Leaderboards are not automatically included in MVP unless they improve motivation without creating unhealthy pressure.

### Context

Leaderboards can increase engagement for some users but may create shame, comparison, or drop-off for others.

### Why

Tabbit should feel supportive. Competition should only be added if it strengthens group momentum and does not punish imperfect consistency.

### Alternatives Considered

- Include leaderboard in the first MVP
- Reject leaderboard permanently

### Risks

- Without ranking, some groups may lack excitement
- With ranking, less consistent users may disengage

### What Would Change This Decision

Evidence from user tests that a leaderboard increases check-ins and encouragement while maintaining a supportive group tone.

## 2026-06-26 - Validate manually in LINE before building software

### Decision

The first validation should happen manually through a LINE group before building software.

### Context

Tabbit initially targets LINE users in Thailand and the core behavior can be tested without a full application.

### Why

Manual validation is faster, cheaper, and better suited to learning whether group check-ins and encouragement actually drive consistency.

### Alternatives Considered

- Build a clickable prototype first
- Build a small MVP app immediately

### Risks

- Manual operations may not represent product behavior perfectly
- Participants may behave differently because the founder is actively involved

### What Would Change This Decision

Evidence that manual validation cannot capture the key behavior, or that a lightweight prototype is required to test the core loop.

## 2026-06-26 - Add Marketing Strategist to the AI Product Board

### Decision

Tabbit will add a Marketing Strategist role to the AI Product Board.

### Context

The founder wants help thinking through realistic monetization, clear communication, and offers that make sense for Thai users.

### Why

Monetization and positioning require a distinct perspective from product strategy. The Marketing role helps identify who pays, why they pay, what message is easy to understand, and how pricing can be validated manually.

### Alternatives Considered

- Keep monetization under CEO and Product only
- Add a broader Growth role instead of a Marketing role

### Risks

- The board may become too broad and slow for small decisions
- Monetization ideas may distract from retention validation

### What Would Change This Decision

If Marketing input creates feature bloat or weakens MVP focus, use the role only for explicit pricing, positioning, launch, and channel decisions.

## 2026-06-26 - Validate monetization through manual challenge offers first

### Decision

Tabbit should validate monetization through manual Paid Challenge Pack offers before building billing or subscription features.

### Context

The product has not yet proven retention, and the clearest early payer is likely the group leader or organizer rather than every individual member.

### Why

A one-time challenge package is easy for Thai users to understand, can be paid through familiar manual payment methods, and tests willingness-to-pay without adding software complexity.

### Alternatives Considered

- Launch with individual subscriptions
- Build premium app features before manual payment tests

### Risks

- Manual service may not scale
- Users may pay for founder support rather than the product itself

### What Would Change This Decision

Evidence that group leaders refuse to pay for challenge setup, or that teams and communities show stronger demand for recurring plans immediately.

## 2026-06-26 - Keep small friend groups free up to five members

### Decision

Tabbit's free tier should support solo use and small friend groups up to five members. Monetization should begin when users need larger groups, multiple active groups, or organizer-level controls.

### Context

Tabbit should remain easy to adopt for personal use and small accountability groups, while still aligning pricing with higher usage costs and larger group coordination needs.

### Why

Small groups are more likely to preserve personal accountability and reduce social loafing. A five-member free limit is easy to understand, matches common small-group research guidance, and creates a natural upgrade point for larger communities or organizers.

### Alternatives Considered

- Limit free groups to three members
- Allow free groups up to ten members
- Charge all group usage from the first member

### Risks

- Five members may be too restrictive for some friend groups
- Users may create multiple free groups to avoid upgrading
- Larger groups may still be valuable for community-led challenges and need a clear paid path

### What Would Change This Decision

Usage data showing that healthy accountability groups frequently need more than five members without organizer-level features, or that five-member groups do not show stronger check-in behavior than larger groups.

## 2026-06-26 - Make organizers the primary paid customer

### Decision

Tabbit should let regular members join groups for free. Paid plans should be purchased primarily by organizers, hosts, or power users who need multiple active groups, larger groups, automation, dashboards, history, or reporting.

### Context

Charging every member would add friction to group formation and weaken the core accountability loop. The person with the clearest paid pain is usually the person coordinating multiple people or multiple groups.

### Why

Members need low-friction participation for the network effect to start. Organizers receive clearer value from coordination tools, and their usage is more closely tied to infrastructure costs such as reminders, history, dashboards, and reporting.

### Alternatives Considered

- Charge every member in paid groups
- Charge per challenge participant
- Keep the app fully free until much later

### Risks

- Most groups may stay small and free
- Users may split groups to avoid paid limits
- Organizer demand may take longer to emerge than member adoption

### What Would Change This Decision

Evidence that individual members have strong willingness to pay without hurting group activation, or that organizer features do not produce meaningful upgrade intent.

## 2026-06-26 - Explore a LINE-first MVP with automatic group updates

### Decision

Tabbit should explore a LINE-first MVP where the LINE bot is the primary daily habit surface and can post automatic group progress updates.

### Context

Thai users already coordinate small groups in LINE. A separate app-first flow may create too much friction for daily check-ins and group accountability.

### Why

LINE can keep the habit loop inside the group chat where social accountability already exists. Automatic updates can make progress visible without requiring members to open a dashboard first.

### Alternatives Considered

- Build a web-app-first MVP and use LINE only for invite links
- Keep all LINE activity manual until much later

### Risks

- LINE bot integration increases technical complexity
- Bot messages may feel noisy if cadence is wrong
- Automatic updates may create pressure instead of support

### What Would Change This Decision

Evidence that LINE group updates do not improve check-in behavior, or that users prefer app-based reminders and dashboards over group chat automation.

## 2026-06-26 - Use a cozy rabbit farm as the MVP progress dashboard

### Decision

The MVP dashboard should visualize group progress as a cozy rabbit farm where each rabbit represents a member and the farm reflects group consistency.

### Context

The founder likes the emotional feel of cozy games such as Cat & Soup, but Tabbit's core should remain group habit accountability rather than idle game mechanics.

### Why

A rabbit farm can make progress visible, supportive, and emotionally rewarding without relying on leaderboards or harsh streak pressure.

### Alternatives Considered

- Show only numeric progress and member status
- Build a pixel-game style dashboard
- Add deeper game systems such as coins, shops, and upgrades

### Risks

- The farm may be visually appealing but not improve retention
- Game-like visuals may distract from the core habit loop
- Users who miss check-ins may feel exposed if rabbit states are handled poorly

### What Would Change This Decision

User tests showing that the farm does not make groups more likely to return, or that a simpler progress dashboard communicates accountability more clearly.

## YYYY-MM-DD - [Decision title]

### Decision

[What was decided]

### Context

[Why this decision was needed]

### Why

[Why this option was selected]

### Alternatives Considered

- [Alternative 1]
- [Alternative 2]

### Risks

- [Risk 1]
- [Risk 2]

### What Would Change This Decision

[Evidence or condition that would make us revisit this decision]
