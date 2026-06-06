📓 Part 1 — Reflection Journal
Class 01 — The 2026 Web Ecosystem
Theory

Draw how a browser turns HTML into what you see on screen. Label: DOM Tree, Render Tree, Layout, Paint. Explain why this matters.
HTTP/3 uses QUIC instead of TCP. What problem does QUIC solve and why does it matter?
Identify ONE website that doesn't use semantic HTML properly. What clues tell you this?

Product Thinking

How does semantic HTML help search engines rank a chef's blog? Be specific.
You're designing a real-time multiplayer game. What edge computing benefits matter most?

Engineering Best Practice

A junior dev says "I just use divs everywhere." Write a 150+ word response — touching on accessibility, SEO, maintainability, and collaboration.

Class 02 — Typography & Information Hierarchy
Theory

Difference between <em> and <i>. When would you use each?
List 3 HTML elements with special screen reader behaviour and explain why.
When would you USE an aria-label — and when should you fix your HTML instead?

Accessibility Reflection

Test a public website's accessibility. Can you tab through? Are form labels visible? Do buttons have focus states? Document findings.

Product Thinking

You're designing an API documentation page for developers who need to scan quickly. Describe your heading hierarchy with actual content.

Class 03 — Modern Assets & Linking
Theory

A designer gives you a 5MB PNG for a hero image. How do you optimize it for production? Include formats, tools, reasoning.
Explain srcset and create a scenario where it prevents a problem for mobile users.
Why is rel="noopener" important with target="\_blank"? What vulnerability does it prevent?

Engineering Thinking

You need to display 50 product images. What's your optimization strategy? Consider lazy loading, format, CDN, responsive sizing.

Class 04 — Modern Forms & User Experience
Theory

Client-side-only validation vs server-side-only vs both — describe the user experience flow for each.
Explain the autocomplete attribute. List 5 different values and when you'd use each.

Product Thinking

A user loses internet on step 4 of a 5-step job application form. How do you design for this gracefully?
Native <select> vs custom dropdown — when would you use each?

Engineering Best Practice

Describe a password input with: strength meter, requirements checklist, show/hide toggle. Focus on accessibility.

Class 05 — The CSS Engine — Box Model & Specificity
Theory

Draw and label the box model. Two divs: margin-bottom: 20px and margin-top: 30px — how much space between them and why?
Explain the CSS specificity hierarchy. Which wins: .header nav ul li a / nav a.active / .nav-links a? Show your calculation.
What is the "cascade" in CSS? Describe a situation where understanding it saves you from unnecessary CSS.

Engineering Thinking

You add padding: 10px and the element becomes wider than expected. What's happening? What's the fix?
Create a CSS-only visual showing the difference between content-box and border-box. Add comments.

Class 06 — Flexbox Mastery
Theory

Explain flex-grow, flex-shrink, and flex-basis using a real-world analogy (no code).
When would align-items: stretch not work as expected? Give a specific example with code.

Engineering Thinking

Create a nav bar: logo left, 5 items centered, "Sign In" button right — items stay centered regardless of logo/button width.
Recreate the Instagram header using Flexbox. Make it responsive — hamburger on mobile, full on desktop.

Class 07 — CSS Grid & Layout Complexity
Theory

When would you choose Grid over Flexbox? Give 3 specific scenarios.
Explain grid-template-areas and when it makes more sense than grid-template-columns.

Engineering Thinking

Build a magazine layout: hero full width, 2 secondary side by side, 1 wide article, then 3 small in a row. Sketch in ASCII first, then show Grid code.
Build a responsive dashboard (sidebar + main + right panel) using only CSS Grid — no media queries, only minmax() and auto-fit/auto-fill.

Class 08 — Tailwind CSS Fundamentals
Theory

Explain the "utility-first" philosophy. Why does Tailwind's creator choose utility classes?
What is the JIT compiler in Tailwind? How does it affect CSS file size in production?

Product Thinking

Your teammate complains Tailwind makes HTML "ugly." Write a response covering readability, maintainability, consistency, and performance.

Engineering Thinking

Build a card component: default, hover (lift + shadow), and featured (larger, different border colour). Show your Tailwind solution.

Class 09 — Advanced Tailwind & Responsive Design
Theory

Explain Tailwind's breakpoint system. How does md: work? How do you create a custom breakpoint for 1200px?
What are arbitrary values in Tailwind (e.g., w-[123px])? When would you use them vs extending the config?

Engineering Best Practice

Configure Tailwind's dark mode to support light/dark themes while keeping CSS output minimal.
Build a responsive landing page using only Tailwind: hero, 3-column feature grid, pricing table (3 tiers), footer. Use sm, md, lg. Document your breakpoint strategy.

Class 10 — Memory & Variables
Theory

Difference between let, const, and var — scope, hoisting, reassignment. Why doesn't const prevent object/array mutation?
What is the Temporal Dead Zone? Why does it exist? Give an example where TDZ prevents a bug.
Draw the memory heap vs stack for the provided code snippet.

Product Thinking

Calculator app — should you use const or let for: display value, operator, previous operand? Justify each.

Class 11 — Control Flow & Comparison
Theory

Difference between == and ===. When does == cause a bug? Give a real example.
What is optional chaining (?.)? Show 3 examples where it prevents errors, and one where it might hide a bug.
What is nullish coalescing (??)? How is it different from ||? Give an example where ?? is correct and || would fail.

Engineering Thinking

Validate: name (required), age (18-99), email (valid format), preferences (optional nested object). Use typeof, optional chaining, and nullish coalescing.
Build a grade calculator: multiple scores, weighted percentages, minimum passing grade. Determine pass/fail, letter grade, and Distinction (avg ≥ 90). Handle all edge cases.

Class 12 — Functions & Functional Programming
Theory

Difference between function declaration and function expression. Why does hoisting behave differently?
What is a pure function? Why do developers value them? Give an example of an impure function and explain why.
Explain callbacks and higher-order functions. Why are they fundamental to JavaScript?

Product Thinking

List 5 pure functions for a calculator utility library. For each: what it does, inputs, output, and why pure makes it better.

Engineering Thinking

Create a compose function: compose(f, g, h)(x) returns f(g(h(x))). Explain your implementation. Show how reduce could replace a loop.

Class 13 — Data Structures — Arrays & Objects
Theory

When would you choose an array over an object? Give a real example where an object is clearly better.
Explain destructuring with nested objects. Show how you'd extract deeply nested values from a complex API response.

Engineering Thinking

Given the orders array: find all orders by "Alice"; calculate total spent by Alice; get all unique food items; group orders by status.
Build a product search/filter: search by name (case-insensitive), filter by price range, filter by category, sort by price (asc/desc), combine multiple filters. Use map, filter, reduce, sort.

Class 14 — DOM Manipulation & Events
Theory

Difference between event bubbling and event capturing. When would you choose one over the other?
What is event delegation? Show a scenario where it's clearly better than attaching listeners to each child.
Security concern with innerHTML vs createElement/textContent when creating elements dynamically.

Engineering Thinking

Build a todo list: input + Add button, edit and delete per todo, localStorage persistence. Handle: empty input, XSS injection, very long text.

Product Thinking

You're adding real-time collaboration to a todo app. What DOM updates happen? How do you handle conflicting edits?

Class 15 — Personal Dashboard Project
Personal Reflection

What was the hardest part? What did you learn about your own debugging process?
When you got stuck, how did you get unstuck? What worked best?
How would you rate your code organisation? What would you do differently?
Where did you implement localStorage? Why there? What other persistence options could you have used?

Engineering Best Practice

Review your code. Identify 3 things you did well and 3 things you'd improve — be specific about actual code locations.

Class 16 — The Event Loop & Promises
Theory

Explain the JavaScript event loop: call stack, task queue, microtask queue. Why does this matter for async code?
Difference between microtasks and macrotasks. Give examples of each. Why does Promise.resolve().then() run before setTimeout?
What gets logged first, second, third, fourth from the provided code snippet? Explain why.

Engineering Thinking

3 async operations: B depends on A's result, C can run parallel with B but only needed if B succeeds. Structure this with Promises.
Build a "Pizza Delivery" tracker using Promises: Order → Prepared → Baked → Out for delivery → Delivered. Allow cancellation. Handle errors like "kitchen fire."

Class 17 — Async/Await & Fetch API
Theory

What is async/await? How does it make async code easier than .then() chains?
When would you use try/catch with async/await? What happens without it when there's an error?

Product Thinking

You're building a crypto price tracker with a rate-limited API. Design a strategy: cache 30 seconds, loading state, API errors, no internet.

Engineering Thinking

Build a fetch wrapper: auto-adds headers, handles 401 (redirect to login), handles 429 (retry after delay), normalises errors, returns parsed JSON.
Using a movie API, build a movie search app: search input, debounce (500ms), loading state, results with poster/title/year, "no results found," API error handling, pagination.

Class 18 — Intermediate Project — Movie Finder
Personal Reflection

Compare this project to Class 15. What did you do better? What's still hard?
How did you handle the API integration? Walk through your code structure and why you organised it that way.
What was your debugging strategy when the API didn't work or data wasn't displaying?
Rate yourself on: error handling, code organisation, UX, and API handling. For each, name one specific thing to improve.

Product Thinking

40% of users leave on the search page, 30% on results, 30% after clicking a movie. Design specific improvements for each drop-off point.
If you were adding a "Watchlist" feature, how would you design the data model? What would you store? How would you handle localStorage limits?

Engineering Best Practice

List: 3 best practices you followed, 3 anti-patterns you may have used, 3 things you learned that you didn't know at the start.
Peer review a classmate's project covering: structure, readability, error handling, and at least one constructive suggestion.

💻 Part 2 — Code Portfolio
Set A — Functions & Logic (Classes 10–12)

A1: Calculator — basic + scientific operations, pure functions, HOFs, error handling
A2: Validation Library — email, phone, password, URL, date validators returning { valid, error }
A3: Array Utility Library — custom myMap, myFilter, myReduce, myFlat, myDebounce, myThrottle

Set B — DOM & Events (Classes 13–14)

B1: Interactive Quiz — 10 questions, progress bar, score tracking, localStorage best score
B2: Drag-and-Drop Kanban Board — 3 columns, cards with priority/due date, localStorage
B3: Dynamic Table — sortable columns, search filter, pagination (10/page), inline row editing

Set C — Async & API (Classes 15–18)

C1: Personal Dashboard Enhancement — weather widget, quote API, drag-and-drop todos, localStorage, 3+ animations
C2: Promise Chain Debugger — complex async operation with logging, comments explaining call stack and microtask queue at each point
C3: Movie Finder Full Project — debounced search, detail view, error handling, loading states, pagination, favourites, responsive

📋 Part 3 — Self-Assessment Template

Before this break, I knew… (3 things)
During this break, I learned… (3 things)
I'm still confused about… (2 things)
My growth areas… (3 specific things)
One thing I'll do differently in the next project… (1 specific thing)
