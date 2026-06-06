# IOTBTECH 2026 — Eid Break Assignment

note that : i created this using googledocs and then downloaded MD file

## Reflection Journal : Classes 1–18

---

## Class 01 : The 2026 Web Ecosystem

When a browser loads a page, it builds the DOM from HTML, the CSSOM from CSS, combines them into a Render Tree, then figures out layout and finally paints pixels. The reason this matters practically: touching layout properties like `width` or `margin` in JS forces the whole pipeline to re-run, which is expensive. Changing only `opacity` or `transform` is much cheaper because the GPU handles it.

HTTP/3 switched from TCP to QUIC, mainly to fix the "head-of-line blocking" problem where one dropped packet stalls everything else waiting behind it.

On semantic HTML: many older government sites use `<div>` for everything. You can tell because tabbing through the page feels broken, and a screen reader just reads it as a wall of text with no landmarks. Using `<nav>`, `<main>`, `<article>` etc. fixes this, not just for accessibility, but also because search engines use that structure to understand and rank your content.

---

## Class 02 : Typography & Information Hierarchy

`<em>` carries actual meaning, it tells screen readers to stress that word. `<i>` just makes text italic visually, no semantic weight. Use `<i>` for things like book titles or foreign terms.

Three elements screen readers treat specially: `<button>` (announced as interactive, works with keyboard), `<label>` (when linked to an input, the reader announces it on focus), and `<table>` with `<th>` headers (gives each cell context, otherwise it's just a stream of numbers).

Use `aria-label` when there's no visible text to go off — like an icon-only close button. But if you're reaching for `aria-label` because your element isn't semantic in the first place, that's a sign to fix the HTML instead.

---

## Class 03 : Modern Assets & Linking

To optimise a 5MB PNG: resize it to the actual display width first, convert to WebP (or AVIF), compress to around 75–85% quality, then use `<picture>` with `srcset` to serve different sizes to different screens. Add `loading="lazy"` for below-fold images. A 5MB PNG can realistically become ~200KB this way.

`srcset` lets the browser pick the right image size for the screen. A phone on a 390px viewport has no business downloading a 1920px image, `srcset` prevents that.

Always add `rel="noopener"` when using `target="_blank"`. Without it, the new tab can access `window.opener` and silently redirect your original tab to a phishing page.

---

## Class 04 : Modern Forms & UX

Client-side validation gives instant feedback but can be bypassed entirely (disable JS, send raw requests). Server-side validation is the real safety net but feels slow on its own. The right answer is both, fast UX + secure backend.

The `autocomplete` attribute matters more than people think. `autocomplete="new-password"` on a registration form tells password managers to offer to generate and save a password. Small thing, big UX difference.

For a multi-step form losing internet on step 4: save progress to `localStorage` on every field change, show an offline banner when the `offline` event fires, retry on reconnect. Don't lose the user's work.

---

## Class 05 : The CSS Engine

Box model layers inside-out: content, padding , border , margin.

Margin collapsing: two adjacent elements with `margin-bottom: 20px` and `margin-top: 30px` produce 30px of space between them, not 50px. CSS takes the larger of the two, not the sum. This is intentional, prevents double-spacing between paragraphs.

Specificity: `.header nav ul li a` beats `nav a.active` because it has more elements and a class. IDs beat classes, inline styles beat IDs.

`box-sizing: border-box` is something you just put on everything globally from day one. Without it, adding padding to an element makes it wider than its set `width`, which constantly surprises people.

---

## Class 06 : Flexbox

`flex-basis` is the default size a child claims. `flex-grow` controls how remaining space is shared. `flex-shrink` controls how space is given up when things are tight.

`align-items: stretch` stops working the moment you explicitly set a height on the child, the explicit value wins.

Centering a nav between a logo and a sign-in button: give both the logo and the button `flex: 1`. They take equal space on both sides, which mathematically pushes the nav to the center regardless of their individual widths.

---

## Class 07 : CSS Grid

Grid is for 2D layouts; things that need to span rows and columns simultaneously. Flexbox is one axis at a time. A magazine hero image spanning two columns and two rows needs Grid.

`grid-template-areas` is essentially drawing your layout as ASCII art in CSS. It's way more readable than coordinates when layouts get complex, and rearranging for mobile just means changing the template string.

---

## Class 08 : Tailwind CSS

Utility-first means you stop writing custom CSS classes for every component and instead compose styles directly in HTML. The tradeoff is longer class lists in HTML, but the upside is your CSS file barely grows as the project scales, and deleting a component automatically deletes its styles.

The JIT compiler only generates CSS for classes you actually use. Production output is typically under 10KB. Before JIT it was several MB that had to be purged.

On the "it makes HTML ugly" complaint: yes, the class strings are long. But you never have to open a CSS file to understand what something looks like. After a week of using it, you read utility classes as fast as English.

---

## Class 09 : Responsive Design with Tailwind

Tailwind is mobile-first. Unprefixed classes apply everywhere. `md:flex` means "flex from 768px and up." Below that, it has no effect.

Arbitrary values like `w-[123px]` exist for one-off specs that don't fit the scale. Use them occasionally, if you're writing the same arbitrary value repeatedly, move it into `tailwind.config.js`.

---

## Class 10 : Memory & Variables

`var` is function-scoped and hoists with a value of `undefined`. `let` and `const` are block-scoped and throw a `ReferenceError` if you try to use them before their declaration (the Temporal Dead Zone). The TDZ is intentional, it turns a silent `undefined` bug into a loud error.

`const` prevents rebinding a variable, not mutating what it points to. You can't do `const x = 1; x = 2`, but you can absolutely do `const user = {}; user.name = "Fatima"`.

Primitives live on the stack. Objects and arrays live on the heap, the stack holds a reference (pointer) to them. This is why passing an array to a function and modifying it inside the function affects the original.

---

## Class 11 : Control Flow & Comparison

Always use `===`. The `==` operator coerces types before comparing, which produces bugs like `"5" == 5` being `true`. Fine if intentional, terrible if not.

Optional chaining (`?.`) lets you safely access nested properties without a chain of `if` checks. The risk: it can silently return `undefined` when you actually expected a value to exist — masking bugs rather than surfacing them.

`??` vs `||`: use `??` when `0`, `""`, or `false` are valid values. `||` treats all of those as falsy and replaces them, which breaks things like quantity fields where 0 is a real input.

---

## Class 12 : Functions & Functional Programming

Function declarations are fully hoisted, you can call them before the line they're defined on. Function expressions aren't the variable exists but calling it before the assignment throws a TypeError.

A pure function always returns the same output for the same input and has no side effects. No API calls, no DOM writes, no modifying external state. Pure functions are easy to test because there's nothing to mock.

Higher-order functions take or return other functions. They're central to JavaScript because JS is event-driven, `addEventListener`, `.then()`, `setTimeout` all work by you handing them a function to call later.

---

## Class 13 : Data Structures

Arrays when order matters or you need to iterate. Objects when you need fast lookup by key, `usersById[id]` is O(1), finding something in an unsorted array is O(n).

Destructuring deeply nested objects is cleaner than chaining dot notation everywhere, but it can get hard to read if you go too deep in one line. Break it up.

---

## Class 14 : DOM & Events

Event bubbling: click a button, the event fires on the button, then bubbles up through every parent to the window. Capturing is the reverse, top down. Most listeners use bubbling by default.

Event delegation: instead of attaching a listener to each of 100 list items, attach one to the parent. The event bubbles up, you check `event.target` to know which item was clicked. More efficient and works for dynamically added elements.

Never use `innerHTML` with user-provided content — it parses as HTML and opens you to XSS. Use `createElement` and `textContent` instead.

---

## Class 15 : Personal Dashboard Project

The trickiest part was localStorage sync across widgets, independent saves were overwriting each other. Fixed it by using a single top-level object in localStorage keyed by widget name.

For drag-and-drop, breaking it into three separate problems (get the events firing , handle reorder logic , persist) made it manageable. Trying to solve all three at once was where I kept getting stuck.

Code organisation: 6/10. Files were separate, but JS was procedural and not grouped by concern. Would group related functions into modules next time.

---

## Class 16 : The Event Loop

JavaScript is single-threaded. The event loop is how it handles async without freezing.

Call stack runs synchronous code. When it's empty, the engine drains the microtask queue (Promise callbacks) completely before picking the next macrotask (setTimeout, setInterval, I/O).

```javascript
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
```

`3` logs before `2` even though setTimeout has a 0ms delay, because Promise callbacks are microtasks and get priority.

---

## Class 17 : Async/Await & Fetch

`async/await` is syntactic sugar over Promises. It makes asynchronous code read top-to-bottom instead of as nested `.then()` chains. An `async` function always returns a Promise.

Always wrap `await` calls in `try/catch`. An unhandled rejection in Node can crash the process; in the browser it fails silently and is hard to debug.

For the crypto price tracker exercise: cache responses with a TTL, show a loading state, handle offline with a user-friendly message, and always clean up in `finally`.

---

## Class 18 : Movie Finder Project

More complex than the dashboard. External API with rate limits, authentication, pagination, and nested data structures. Separated concerns into `api.js`, `ui.js`, and `app.js` from the start — made it easier to debug because I could isolate which layer the problem was in.

Debugging flow: Network tab first, did the request go out? What came back? If the call worked but UI is wrong, `console.log` right before the render. If the call failed, check for CORS errors or API key issues.

Anti-patterns I used that I'd fix: `innerHTML` in one place for building result cards (should be `createElement`), no cancellation of stale requests (old results could overwrite new ones if they arrived late), and inline event handlers in dynamically built HTML strings.

---

## Self-Assessment

**What I knew before:** Basic HTML/CSS, simple JS, how to use `fetch`.

**What I actually learned:** How the CSS cascade and box model really work (not just what to type), why async code runs in the order it does, and how to structure a real project by concern rather than dumping everything in one file. before i find it difficult and challenging if i am giving a correction on the task i am assgined to do at the office, and sometimes i had to discard and start again, but now i can be able to see the error from mare looking at the code.

**Still fuzzy on:** Promises vs async/await in non-linear multi-dependency scenarios. `auto-fit` vs `auto-fill` in Grid, I understand the concept but don't reach for the right one instinctively yet. i stiil find it confusing all the time.

**One thing I'll do differently:** Plan the data model and component structure before writing any code. I spent too much time refactoring in both projects because I started coding before I understood the full shape of the problem. but for now, the stucture is what will matter the most to me.
