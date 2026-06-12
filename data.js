/* =============================================================================
   AGENTIC SDLC — CONTENT MODEL
   This is the ONLY file you edit day-to-day. Everything renders from here.

   Node shape (recursive — nest `children` as deep as a thought requires):
     {
       title:    "short label",
       body:     `markdown prose (template literal — multiline is fine)`,
       tags:     { source: "draft" },          // omit = endorsed (your own)
       blocks:   [ { type: "links", items: [{ label, url }] } ],
       children: [ ...more nodes... ]
     }

   Facets per stage: opportunities | risks | feedforward | guardrails
   ========================================================================== */

window.SDLC_DATA = {
  meta: {
    title: "The Agentic SDLC",
    subtitle: "How AI agents improve every stage of software delivery — without giving up engineering discipline",
    org: "Specific-Group Austria",
    version: "0.1",
  },

  /* ---------------------------------------------------------------------------
     PRINCIPLES — the hub of the wheel. These apply to every stage.
     ------------------------------------------------------------------------ */
  principles: [
    {
      id: "single-source",
      title: "Codebase as Single Source of Truth",
      subtitle: "Documentation, architecture, decisions — all in the repo",
      body: `Everything an agent (or a new team member) needs lives alongside the code it describes:

- Documentation as code
- Diagrams as code
- Architecture as code
- Infrastructure as code
- Agent context (rules, skills) versioned in the repository`,
    },
    {
      id: "unified-context",
      title: "Unified Agent Context",
      subtitle: "One agent, enriched by the whole team",
      body: `Senior engineers onboard the agent like a team member. Context files are curated and versioned in the repository. **All roles — PO, BA, developer, architect — use the same project-aware agent**, so requirements, mockups and code share one source of truth. Agent knowledge compounds over time through team feedback.`,
    },
    {
      id: "deterministic-gates",
      title: "Deterministic Over Probabilistic",
      subtitle: "Quality gates must be reproducible, every time",
      body: `A coding agent is non-deterministic by design. The response is not to stop using it — it is to wrap it in machinery that is deterministic: architecture tests, E2E & integration suites, static analysis, type checkers. Same input, same result, every time.

**We never let a probabilistic AI grade its own homework.** Invest in gate quality — agents can help write the gates.`,
    },
    {
      id: "feedback-loops",
      title: "Shorter Feedback Loops, Everywhere",
      subtitle: "Customer ↔ product ↔ developers ↔ architects ↔ operations",
      body: `Speed is not about writing code faster. It is about closing the gap between what users experience and what the team builds next — and between every pair of roles in the project: customer to product team, developers to architects, developers to their own code, production back to planning.

Agents shrink each of these loops: working PoCs in days instead of slides in weeks, feedback items fixed the same day, production signals summarized into the next iteration's requirements.`,
    },
    {
      id: "cultural-shift",
      title: "Cultural Shift, Not a Tool Change",
      subtitle: "A way-of-working change",
      body: `- The team owns the codebase, not the agent
- Same onboarding rigor for agents as for new developers
- High-velocity teams already solved this: strong gates
- AI augments humans — never replaces accountability
- Team structure shifts toward small, cross-functional roles
- Complexity is the enemy, not velocity`,
    },
  ],

  /* ---------------------------------------------------------------------------
     STAGES — the six segments of the circle, in lifecycle order.
     ------------------------------------------------------------------------ */
  stages: [
    /* ======================================================================
       1 — ANALYSIS & REQUIREMENTS
       ===================================================================== */
    {
      id: "analysis",
      name: "Analysis & Requirements",
      short: "Analysis",
      tagline: "Specifications grounded in technical reality from day one",
      principle: "Same agent, same context — POs and devs share one source of truth.",
      outcomes: ["Clearer scope", "Fewer loops", "Implementation-ready"],
      facets: {
        opportunities: [
          {
            title: "Agent-facilitated event storming",
            body: `Use an agent in event-storming workshops — as scribe, as challenger ("which event triggers this?"), and afterwards to turn the board into structured domain events, commands and aggregates that feed straight into the backlog.`,
          },
          {
            title: "Working PoCs instead of slide decks",
            body: `Agents make the cost of a working slice days instead of months. Validate the core hypothesis with software real users can touch within a fortnight — feedback arrives **before** the investment decision, not after launch.`,
          },
          {
            title: "Stories & PRDs drafted from repository context",
            body: `For existing systems, the agent drafts requirements grounded in the actual codebase; for greenfield, from meeting transcripts and stakeholder interviews. Technical constraints surface automatically instead of in sprint 3.`,
          },
          {
            title: "NFR analysis from architecture awareness",
            body: `Non-functional requirements derived from what the architecture can actually deliver — the agent knows the current latency budget, the deployment topology, the data volumes.`,
          },
          {
            title: "Mockups aligned to the existing design system",
            body: `Mockups generated from actual UI components and design patterns, so what stakeholders approve is what the technology can deliver. Feasibility surprises disappear.`,
          },
        ],
        risks: [
          {
            title: "Hallucinated requirements",
            tags: { source: "draft" },
            body: `An agent fills gaps with plausible inventions — stakeholder needs nobody stated, constraints that don't exist. Polished output makes invented requirements *look* validated.`,
          },
          {
            title: "False fluency",
            tags: { source: "draft" },
            body: `A beautifully written PRD is mistaken for a correct one. The document quality no longer signals the thinking quality behind it.`,
          },
          {
            title: "Flattened stakeholder voices",
            tags: { source: "draft" },
            body: `Summarization averages away disagreement. The contentious 10% of a workshop — usually the most important part — reads like consensus in the agent's minutes.`,
          },
        ],
        feedforward: [
          {
            title: "Meeting transcripts & workshop recordings",
            tags: { source: "draft" },
            body: `Raw transcripts are the highest-value input for requirement drafting. Pipe Teams/Zoom transcripts into the agent's context (e.g. via an MCP connector) instead of retyping minutes.`,
          },
          {
            title: "The existing codebase as grounding context",
            tags: { source: "draft" },
            body: `The single best antidote to hallucinated requirements: requirements drafted *against* the repo are grounded in what exists.`,
          },
          {
            title: "Domain glossary & ubiquitous language",
            tags: { source: "draft" },
            body: `A versioned glossary file keeps agent-drafted artifacts using the team's words, not generic synonyms.`,
          },
          {
            title: "Ticket system MCP (Jira / Azure DevOps)",
            tags: { source: "draft" },
            body: `Lets the agent read history ("we rejected this idea twice") and write structured work items directly.`,
          },
        ],
        guardrails: [
          {
            title: "Human approval for scope & value decisions",
            body: `The agent drafts; the product owner decides. Prioritization and value judgements are never delegated.`,
          },
          {
            title: "Traceability: requirements → code → tests",
            body: `Every artifact references repository evidence. A requirement that can't be traced is a candidate hallucination.`,
          },
          {
            title: "Definition of ready, enforced by template",
            body: `Template-driven quality checks before anything enters a sprint — agent-drafted stories pass the same bar as human-written ones.`,
          },
        ],
      },
    },

    /* ======================================================================
       2 — ARCHITECTURE & DESIGN
       ===================================================================== */
    {
      id: "architecture",
      name: "Architecture & Design",
      short: "Architecture",
      tagline: "Decisions become machine-readable policies — enforced, not documented",
      principle: "Architecture decisions become executable: policy-as-code, versioned like application code.",
      outcomes: ["Boundaries that hold", "Early feasibility signals", "Decisions that outlive people"],
      facets: {
        opportunities: [
          {
            title: "Architecture decisions as machine-readable policies",
            body: `ADRs stop being prose that drifts from reality. Each decision is paired with a fitness function or boundary test that enforces it — policy-as-code, versioned like application code.`,
          },
          {
            title: "Catching impossible designs early",
            body: `Agents propose candidate architectures and stress-test them against NFRs before anyone commits — feasibility surprises move from month 6 to week 1.`,
          },
          {
            title: "ADR drafting with full decision context",
            tags: { source: "draft" },
            body: `The agent drafts ADRs from design discussions, linking the alternatives considered, the NFRs affected, and the code the decision touches. The architect edits and signs.`,
          },
          {
            title: "Diagrams as code (C4, sequence, deployment)",
            body: `Generated from the actual codebase and kept in the repo — diagrams that regenerate instead of rotting in a wiki.`,
          },
          {
            title: "Design review against the NFR catalog",
            tags: { source: "draft" },
            body: `Before implementation starts, an agent reviews the proposed design against every recorded NFR and flags the ones it cannot satisfy — a cheap, fast pre-mortem.`,
          },
          {
            title: "Context packaging & distribution across teams",
            body: `The architect's highest-leverage activity shifts: curating the context (rules, skills, patterns) that makes every team's agent effective. Senior engineers become **context architects**.`,
          },
        ],
        risks: [
          {
            title: "Plausible-but-wrong architectures",
            tags: { source: "draft" },
            body: `Agents produce textbook architectures that ignore the organization's actual constraints — team skills, ops maturity, budget. Generic best practice can be specific nonsense.`,
          },
          {
            title: "Status-quo bias from repository context",
            tags: { source: "draft" },
            body: `An agent grounded in the current codebase tends to extend the current architecture, even when the right answer is to break from it. Disruption needs a human.`,
          },
          {
            title: "Decision laundering",
            tags: { source: "draft" },
            body: `"The agent suggested it" becomes a way to avoid owning trade-offs. Every ADR still needs a human name on it.`,
          },
        ],
        feedforward: [
          {
            title: "ADR history & NFR catalog in the repo",
            tags: { source: "draft" },
            body: `The agent can only respect decisions it can read. ADRs and NFRs as versioned markdown are its long-term memory.`,
          },
          {
            title: "Architecture model as code (C4 / Structurizr)",
            tags: { source: "draft" },
            body: `A machine-readable model of containers, components and dependencies gives the agent a map instead of letting it infer one.`,
          },
          {
            title: "Tech radar / preferred-stack file",
            tags: { source: "draft" },
            body: `Adopt / trial / hold lists keep agent proposals inside the organization's strategic choices.`,
          },
        ],
        guardrails: [
          {
            title: "Architecture boundary tests",
            body: `Structural rules enforced automatically in CI (ArchUnit & friends). The agent *cannot* violate a boundary without the build failing — same input, same result.`,
          },
          {
            title: "Agent privileges bounded by permissions",
            body: `Agents operate inside explicit permission boundaries — which repos, which paths, which actions.`,
          },
          {
            title: "Humans own trade-off decisions",
            body: `Agents analyze and propose; the architect decides and is accountable. Roadmap milestones tie to measurable outcomes, not agent output volume.`,
          },
        ],
      },
    },

    /* ======================================================================
       3 — DEVELOPMENT
       ===================================================================== */
    {
      id: "development",
      name: "Development",
      short: "Development",
      tagline: "Agents as team members — onboarded with the same rigor as developers",
      principle: "Onboarding an agent = onboarding a developer. Same rules apply.",
      outcomes: ["Faster delivery", "Less drift", "Consistent quality", "Faster onboarding"],
      facets: {
        opportunities: [
          {
            title: "Unified agent with project architecture context",
            body: `One shared, codebase-aware agent profile instead of every developer prompting from scratch. Solutions align to **your** patterns, not generic Stack Overflow answers.`,
          },
          {
            title: "Senior engineers curate context & reusable skills",
            body: `Seniors invest once in context — rules files, custom skills, architecture docs — and every developer benefits. Tribal knowledge becomes accessible to everyone; junior output matches team standards automatically.`,
          },
          {
            title: "Faster onboarding via codebase Q&A",
            body: `New developers ask questions and get codebase-specific answers. Productive in days, not months.`,
          },
          {
            title: "Agent-assisted review: summaries & architecture diffs",
            body: `The agent produces change summaries, links changes to requirements and risk artifacts, and checks completeness against the requirement — review overhead drops while transparency rises. Code written faster than it can be reviewed line-by-line must be reviewed **in shape**, and the agent prepares that shape.`,
          },
          {
            title: "Safe refactoring & test scaffolding",
            body: `Task-scoped prompts with deterministic gates: the agent proposes refactors and scaffolds tests; CI proves they hold.`,
          },
        ],
        risks: [
          {
            title: "Velocity without review",
            body: `Teams accept agent output faster than they can validate it. Subtle correctness issues accumulate for weeks, then get expensive. The first generation of AI-assisted work shows the pattern: impressive early velocity, then rework rivaling net-new output.`,
          },
          {
            title: "Integration debt at machine speed",
            body: `Agents create the same dynamics as adding 10 developers overnight. Long-lived branches × agent throughput = 10× the merge conflicts. Agents create conflicts; they don't resolve them.`,
          },
          {
            title: "CI saturation",
            body: `A 30-minute pipeline with 20 agent PRs a day is a hard bottleneck that negates every velocity gain.`,
          },
          {
            title: "Cross-expertise edits nobody reviews",
            body: `Agents make it trivially easy to change code outside your expertise — a backend dev modifies frontend code, but who reviews it?`,
          },
          {
            title: "Dependency creep",
            body: `Agents love adding dependencies — they'll install a library for a function that already exists in your codebase.`,
          },
          {
            title: "Context collapse at scale",
            body: `Agents lose effectiveness as codebases grow: context windows fill with irrelevant material. Counter with agents scoped to architectural slices and retrieval tuned per codebase.`,
          },
        ],
        feedforward: [
          {
            title: "Versioned rules files (CLAUDE.md / AGENTS.md)",
            tags: { source: "draft" },
            body: `The agent's onboarding handbook: standards, patterns, what to never do. Reviewed and versioned like code.`,
          },
          {
            title: "Custom skills for repeating tasks",
            tags: { source: "draft" },
            body: `Encapsulate repeatable workflows (migrations, component scaffolding, release notes) as skills the whole team's agents share.`,
          },
          {
            title: "MCP servers: LSP, docs, tickets, design system",
            tags: { source: "draft" },
            body: `Give the agent the same tools a developer has — go-to-definition, current library docs (not training-data memories), the ticket tracker, the design tokens.`,
          },
          {
            title: "Preferred-libraries list",
            tags: { source: "draft" },
            body: `The documented antidote to dependency creep: "for X we use Y" lives in agent context.`,
          },
        ],
        guardrails: [
          {
            title: "No autonomous merge — ever",
            body: `Non-deterministic reviewers never gate. A human engineer owns every merge, even when the diff was machine-authored.`,
          },
          {
            title: "Architecture tests protect boundaries",
            body: `Complexity budgets and boundary checks in CI. Critical checks remain rule-based and reproducible.`,
          },
          {
            title: "Trunk-based development + feature flags",
            body: `Short-lived branches; deploy decoupled from release. The branching strategy is the first thing that breaks under agent velocity.`,
          },
          {
            title: "CODEOWNERS & required reviewers",
            body: `The right experts see changes to critical paths — not to slow down, but to make cross-functional safe instead of cross-contaminating.`,
          },
          {
            title: "Linters, formatters, static analysis — non-negotiable",
            body: `Zero human effort on style; zero stylistic patchwork from different agent sessions.`,
          },
          {
            title: "Test evidence for all code",
            body: `Generated or hand-written — same quality bar, same review process.`,
          },
        ],
      },
    },

    /* ======================================================================
       4 — TESTING & QA
       ===================================================================== */
    {
      id: "testing",
      name: "Testing & QA",
      short: "Testing",
      tagline: "AI suggests — deterministic tooling executes and judges",
      principle: "Tests must be deterministic, not probabilistic. Same input → same result.",
      outcomes: ["Higher confidence", "Broader coverage", "Stable releases"],
      facets: {
        opportunities: [
          {
            title: "Edge-case discovery",
            body: `The agent surfaces scenarios humans overlook — boundary values, concurrency windows, malformed input families — and proposes them as concrete test cases.`,
          },
          {
            title: "Test fixtures from project standards",
            body: `Scaffolded from your conventions and builders, not generic templates.`,
          },
          {
            title: "Risk-based coverage gap analysis",
            body: `Focus on the recent change surface: which changed code paths lack tests, weighted by blast radius.`,
          },
          {
            title: "Incident-to-test mapping",
            body: `Every production incident becomes a regression test, drafted by the agent from the postmortem.`,
          },
        ],
        risks: [
          {
            title: "90% coverage, zero confidence",
            body: `Agents are excellent at producing unit tests that pass and poor at understanding system-level behavior. Individual units work; the system doesn't.`,
          },
          {
            title: "Tests that assert current behavior, not intent",
            tags: { source: "draft" },
            body: `Agent-generated tests written *after* the code freeze bugs in place — they verify what the code does, not what it should do.`,
          },
          {
            title: "Coverage theater",
            tags: { source: "draft" },
            body: `The metric becomes the target. Agent throughput makes it cheap to game coverage without adding confidence.`,
          },
        ],
        feedforward: [
          {
            title: "Testing standards & fixture catalog",
            tags: { source: "draft" },
            body: `Documented patterns (builders, fakes vs mocks policy, naming) so generated tests look like the team wrote them.`,
          },
          {
            title: "Requirements & acceptance criteria links",
            tags: { source: "draft" },
            body: `Tests generated from the requirement, not from the implementation — the antidote to asserting current behavior.`,
          },
          {
            title: "Production incident history",
            tags: { source: "draft" },
            body: `Past failure modes are the best seed corpus for new edge-case generation.`,
          },
        ],
        guardrails: [
          {
            title: "Deterministic pass/fail — always reproducible",
            body: `CI runs the tests; the agent never judges the result. Same input, same result, every time.`,
          },
          {
            title: "Flaky test quarantine workflow",
            body: `Zero tolerated flakiness: quarantine with explicit ownership, or fix. Flaky tests under agent PR volume block everything.`,
          },
          {
            title: "Testing pyramid enforced",
            body: `Integration tests for service boundaries, E2E for critical flows, contract tests for APIs — system-level confidence agents can't fake with unit tests.`,
          },
          {
            title: "Security & performance checks independent of the LLM",
            body: `Dedicated deterministic tooling — never a probabilistic opinion.`,
          },
        ],
      },
    },

    /* ======================================================================
       5 — DELIVERY & RELEASE
       ===================================================================== */
    {
      id: "delivery",
      name: "Delivery & Release",
      short: "Delivery",
      tagline: "Automate the narrative, keep the gates deterministic",
      principle: "Agents draft the story of a release — pipelines decide whether it ships.",
      outcomes: ["Safer releases", "Faster comms", "Predictable flow"],
      facets: {
        opportunities: [
          {
            title: "Release notes drafted from merged changes",
            body: `Auto-drafted from commit history and linked requirements — for engineers, and in a second register for stakeholders.`,
          },
          {
            title: "Blast-radius analysis per rollout",
            body: `Which services, configs and consumers does this release touch? The agent assembles the picture from the diff before the canary starts.`,
          },
          {
            title: "Operational readiness checklists, generated",
            body: `Runbooks, alerts, dashboards, rollback path — checked against what the release actually changes.`,
          },
          {
            title: "Test-failure analysis with proposed fixes",
            body: `When the pipeline fails, the agent reads the results and proposes the fix — turnaround in minutes instead of context-switching a developer.`,
          },
        ],
        risks: [
          {
            title: "Deploy equals release",
            body: `If every merge is a release event, agent velocity forces a choice between slowing deploys and uncontrolled risk. Feature flags break the coupling.`,
          },
          {
            title: "Cadence outruns change management",
            tags: { source: "draft" },
            body: `Daily agent-driven releases meet quarterly CAB processes. Without renegotiating governance, velocity dies in the approval queue — or bypasses it.`,
          },
          {
            title: "AI creeping into the deploy decision",
            tags: { source: "draft" },
            body: `"The agent said the canary looks fine" is a probabilistic gate wearing a deterministic costume.`,
          },
        ],
        feedforward: [
          {
            title: "Commit / PR / requirement linkage",
            tags: { source: "draft" },
            body: `Release narrative quality is a direct function of traceability discipline upstream.`,
          },
          {
            title: "Environment & config inventory",
            tags: { source: "draft" },
            body: `For blast-radius analysis the agent needs to know what runs where — IaC is its map.`,
          },
          {
            title: "Runbooks & past incident reports",
            tags: { source: "draft" },
            body: `Readiness checklists generated against real operational history, not a generic template.`,
          },
        ],
        guardrails: [
          {
            title: "Approval matrices & production safeguards",
            body: `Who may ship what, encoded in the pipeline — not in tribal memory.`,
          },
          {
            title: "Canary progression stays deterministic",
            body: `Promotion and rollback triggers are rule-based metrics thresholds. No AI in the loop.`,
          },
          {
            title: "Feature flag infrastructure",
            body: `Dark launches, canary cohorts — "code is deployed" and "feature is live" are separate decisions.`,
          },
          {
            title: "Deployment quality metrics tracked",
            body: `Change failure rate and MTTR watched per release — the deterministic scoreboard for whether agent velocity is actually safe.`,
          },
        ],
      },
    },

    /* ======================================================================
       6 — OPERATIONS & FEEDBACK
       ===================================================================== */
    {
      id: "operations",
      name: "Operations & Feedback",
      short: "Operations",
      tagline: "Production signals close the loop back into planning",
      principle: "Production signals feed back into agent context — the loop never stops.",
      outcomes: ["Faster root cause", "Reduced MTTR", "Evidence-driven roadmap"],
      facets: {
        opportunities: [
          {
            title: "The feedback engine: bug at 10am, fix by lunch",
            body: `Professional capture tools (**Test & Feedback** for Azure DevOps, **Capture for Jira**) attach annotated screenshots, recordings and environment details to a work item in one click. An agent picks up the item, sees exactly what the user saw, and generates a fix the same day.

1. **Test** — users test in staging
2. **Capture** — annotated screenshot/recording, one click
3. **Create** — work item with full context, automatically
4. **Fix** — agent analyzes artifacts and generates the fix
5. **Deploy** — reviewed, tested, live the same day`,
            blocks: [
              {
                type: "links",
                items: [
                  { label: "Test & Feedback (Azure DevOps)", url: "https://marketplace.visualstudio.com/items?itemName=ms.vss-exploratorytesting-web" },
                  { label: "Capture for Jira", url: "https://marketplace.atlassian.com/apps/1212562/capture-for-jira" },
                ],
              },
            ],
          },
          {
            title: "Log analysis: anomalies & root causes",
            body: `The agent correlates log patterns to surface anomalies and traces errors back to causative code with full context. Root cause in hours, not days.`,
          },
          {
            title: "Monitoring insights feed development priorities",
            body: `Trends detected in real production data become input to the next planning cycle — alert tuning proposals included.`,
          },
          {
            title: "Incident resolution from history",
            body: `Suggested fixes based on similar past incidents and the code changes that resolved them.`,
          },
          {
            title: "Postmortems drafted, learnings fed forward",
            tags: { source: "draft" },
            body: `The agent drafts the postmortem timeline from logs and chat, and — closing the circle — summarizes production learnings into candidate requirements for the Analysis stage.`,
          },
        ],
        risks: [
          {
            title: "Plausible root-cause narratives, unverified",
            tags: { source: "draft" },
            body: `Agents produce convincing causal stories from logs. A narrative that fits the symptoms is not a verified root cause — engineers must reproduce before they believe.`,
          },
          {
            title: "Automation complacency",
            tags: { source: "draft" },
            body: `When the agent triages everything, humans stop reading the signals. The on-call muscle atrophies precisely when you need it for the cases the agent can't handle.`,
          },
          {
            title: "Feedback loop without prioritization",
            tags: { source: "draft" },
            body: `Same-day fixes are seductive: the loudest feedback gets fixed first, the roadmap dissolves into reactive patching. The loop needs a product owner at the valve.`,
          },
        ],
        feedforward: [
          {
            title: "Observability MCP: logs, traces, metrics",
            tags: { source: "draft" },
            body: `Direct agent access to the observability stack (read-only) — the difference between "paste me the stack trace" and an agent that investigates.`,
          },
          {
            title: "Feedback capture tooling",
            body: `Test & Feedback / Capture for Jira artifacts are agent-readable context: annotated, timestamped, linked to the right component. Traditional bug reports lose context at every handoff; captured ones don't.`,
          },
          {
            title: "Incident & resolution history",
            tags: { source: "draft" },
            body: `Past incidents with their fixes, searchable — the agent's case law.`,
          },
        ],
        guardrails: [
          {
            title: "Alert thresholds & escalation stay rule-based",
            body: `The agent proposes tuning; rules decide when humans get woken up.`,
          },
          {
            title: "Debugging conclusions validated by engineers",
            body: `An agent's root-cause hypothesis is an input to investigation, never its end.`,
          },
          {
            title: "Production changes require human approval",
            body: `No agent-initiated change reaches production without a human decision — the same no-autonomous-merge rule, extended to ops.`,
          },
        ],
      },
    },
  ],
};
