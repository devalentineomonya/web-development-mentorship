# CSS Classes Challenge: Units, Display and Position

Take-home assignment. Builds on today's session and on your research on rem, em, display and position.

## Overview

Style the hero page in `index.html` using CSS classes. You will use variables, classes, rem and em, display and position in one small project. Work part by part and refresh the browser after every task.

| | |
| --- | --- |
| Time | 2 to 3 hours |
| Files | `index.html` and `css/styles.css` (you may add classes and a few tags to the HTML) |
| Tools | VS Code and a browser |
| Marks | 100 |

Ground rules:

- Style with classes. Do not use `style=""` in the HTML and do not style with ids.
- Use rem or em for sizes unless a task says px. Borders and thin lines can stay in px.
- Type the CSS yourself. You may use your notes from the session.
- Write short comments in your CSS to explain the tricky lines.

## Recap: what you should already know

Classes

- A class is a reusable label. Write it in HTML as `class="box"` and in CSS as `.box { }`.
- One class can go on many elements. One element can have many classes: `class="box box-one"`. The shared look goes in `.box`, the differences go in `.box-one`.
- An id (`#home`) must be unique on the page. Use classes for styling and ids for links like `href="#home"`.

Variables (already in your `:root`)

- Define once: `--accent: #ff5b36;`
- Use anywhere: `color: var(--accent);`

rem and em

| Unit | Relative to | Use it for |
| --- | --- | --- |
| px | Nothing. A fixed size | Thin borders, shadows |
| rem | The font size of the root (html), usually 16px | Font sizes, spacing, gaps, widths that should scale with the user's settings |
| em | The font size of the element itself (for font-size: the parent) | Padding and margins that should grow with the element's own text, such as buttons |

em compounds. A child with `font-size: 1.2em` inside a parent with `font-size: 1.2em` is 1.44 times the base size. rem does not compound.

display

| Value | Behaviour |
| --- | --- |
| block | New line, full width. Width and height work |
| inline | Stays in the line of text. Width and height are ignored |
| inline-block | Stays in the line, and width, height and vertical padding work |
| flex | Children sit in a row by default. Use `gap`, `justify-content`, `align-items` |
| none | Removed from the page |

position

| Value | Behaviour |
| --- | --- |
| static | Default. Normal flow. top, left, right, bottom do nothing |
| relative | Stays in flow, can be nudged with top and left. Becomes the anchor for absolute children |
| absolute | Leaves the flow. Placed against the nearest positioned parent |
| fixed | Leaves the flow. Placed against the browser window and stays while scrolling |
| sticky | Scrolls normally until it reaches an offset such as `top: 70px`, then sticks |

`z-index` decides which positioned element is on top. It only works on elements that are positioned.

## The target

Recreate this page. Labels name the classes and the CSS each part needs. You choose colours, words and the photo.

```
+--------------------------------------------------------------+
| header   position: fixed; top, left, right: 0; z-index: 100  |
| nav      display: flex; justify-content: space-between       |
| [logo]   Home  About  Projects  Blogs  Contact  [Let's Talk] |
+--------------------------------------------------------------+
| section#home   .container: max-width, margin: 0 auto         |
| .hero   display: flex; gap: 4rem; align-items: center        |
|                                                              |
|  +-------------------------+  +---------------------------+  |
|  | .hero-text              |  | .hero-photo               |  |
|  | p.tag                   |  | position: relative        |  |
|  | h1  I build / fast      |  | +-----------------------+ |  |
|  |     digital / products  |  | | img.hero-img          | |  |
|  | p.lead                  |  | |        span.badge --> | |  |
|  | a.btn.btn-primary       |  | |  position: absolute   | |  |
|  | a.btn.btn-outline       |  | +-----------------------+ |  |
|  | (display: flex, gap)    |  | p.name   p.role           |  |
|  +-------------------------+  +---------------------------+  |
|                                                              |
+--------------------------------------------------------------+
| section#lab   Box lab                                        |
| .box .box-one    .box .box-two    .box .box-three            |
+--------------------------------------------------------------+
```

Read it top to bottom. The header is fixed and sits over the page. Inside `#home`, the text column and the photo column sit side by side. The badge sits on top of the photo. The box lab at the bottom is for the position experiments in Part 4.

## Part 1: Variables, reset and classes

- [ ] Keep the reset (`* { margin: 0; padding: 0; box-sizing: border-box; }`) and the `:root` variables from class. Add `--radius: 0.5rem;` and use it later.
- [ ] Add a `.container` class with `max-width: var(--max-width);` and `margin: 0 auto;`. Put it on a div inside `#home`.
- [ ] Add the classes `hero`, `hero-text`, `hero-photo`, `hero-img`, `tag`, `lead`, `name`, `role` to the matching tags in the HTML.
- [ ] Style `.tag` with the `--accent` colour and `.lead` with the `--muted` colour.
- [ ] Make a button with two classes. Give both hero links `class="btn"`. Add `btn-primary` to the first (accent background, dark text) and `btn-outline` to the second (transparent background, 1px border). Shared styles live in `.btn`.
- [ ] Add the class `badge` to a new `span` in the photo column that says Open to work. Style it with a background colour, padding and `--radius`.

Checkpoint: the two buttons share one shape and differ only in colour. Changing `.btn` changes both.

## Part 2: Sizing with rem and em

- [ ] Set `html { font-size: 100%; }` and keep body text at `1rem`.
- [ ] Set `h1` to `3.5rem` and `.tag` to `0.875rem`. Do not use px for either.
- [ ] Use rem for `gap`, section padding and `margin` between the text elements.
- [ ] Write the button padding in em: `padding: 0.75em 1.5em;`. Use `font-size: 1rem` on `.btn`.
- [ ] Experiment: change `.btn` to `font-size: 1.25rem`. The padding grows with it. Then change the padding to rem and repeat. Write down what happened in each case.
- [ ] Experiment: add `.parent { font-size: 1.2em; }` and `.child { font-size: 1.2em; }`, put a child inside a parent in the HTML, and measure the child in the browser's inspector. Repeat with rem. Delete the experiment when you are done.
- [ ] Change the browser's default font size in its settings and refresh. Notice which parts of your page scale. Put the setting back.

Checkpoint: nothing in your CSS uses px except borders and the odd thin line.

## Part 3: Display

- [ ] Keep `header nav` as a flex row with the logo, the links and the button spread apart.
- [ ] Make `header nav ul` a flex row with `gap: 2rem`. Check that `li` has no bullets.
- [ ] Make `.hero` a flex row with `gap: 4rem` and `align-items: center`. The two columns sit side by side.
- [ ] Make the div holding the two hero buttons a flex row with `gap: 1rem`.
- [ ] Make `.tag` `display: inline-block` with `padding: 0.25em 0.75em` and a border so the padding is visible.
- [ ] Hide the mobile menu div in the header with `display: none`. Add a class `mobile-menu` to it first.
- [ ] Show the difference: change `.tag` to `display: inline` and see that vertical padding stops pushing other lines. Change it back.

Checkpoint: the hero has two columns, the nav is one row, the mobile menu is gone from view.

## Part 4: Position

Header and badge

- [ ] The header is `position: fixed` at the top. Add `padding-top` to `#home` equal to the header height in rem, so the hero is not hidden behind it.
- [ ] Give `.hero-photo` `position: relative`.
- [ ] Give `.badge` `position: absolute; top: 1rem; right: 1rem;`. It now sits on the corner of the photo.
- [ ] Remove `position: relative` from `.hero-photo` and see where the badge goes. Put it back.
- [ ] Give the badge `z-index: 2` and make sure it appears over the image.

Box lab

Add a section with `id="lab"` and three `div` tags with `class="box box-one"`, `class="box box-two"` and `class="box box-three"`. Give `.box` a height of `4rem`, full width and different background colours per box.

- [ ] Static: leave `.box-one` alone. Try `top: 2rem;` on it and note that nothing happens.
- [ ] Relative: set `.box-two { position: relative; top: 1rem; left: 2rem; }`. The box moves, and the space where it started stays empty.
- [ ] Absolute: set `.box-three { position: absolute; right: 0; bottom: 0; }`. Find out what it is placed against. Then put `position: relative` on the section `#lab` and see what changes.
- [ ] Fixed: temporarily set `.box-one { position: fixed; top: 0; left: 0; }`. Scroll. Note what happens to the boxes below it. Remove it.
- [ ] Sticky: set `.box-two { position: sticky; top: 5rem; }` and scroll. Note when it sticks and when it stops.
- [ ] Add a comment next to each experiment saying what you saw.

Checkpoint: you can say, for each of static, relative, absolute, fixed and sticky, whether the element stays in the flow and what it is positioned against.

## Questions to answer in writing

Answer each in two or three sentences, in a text file called `answers.md` in your folder.

1. When do you choose rem over em, and em over rem? Give one example of each from your page.
2. Why can nesting em values make text too large, and how does rem avoid it?
3. What is the difference between `display: none` and making something invisible with `opacity: 0`?
4. Why did your badge need its parent to have `position: relative`?
5. Why does a fixed header need space reserved below it?
6. When would you give an element two classes instead of one?

## Challenge and stretch

- [ ] (Challenge) Make `.btn` change colour when hovered, using `.btn:hover`, and add `transition: background-color 0.2s;`.
- [ ] (Challenge) Make the header sticky instead of fixed. List what changes in how the page behaves.
- [ ] (Challenge) Use `display: grid; grid-template-columns: 1fr 1fr;` for the hero instead of flex, and compare.
- [ ] (Challenge) Add a media query `@media (max-width: 768px)` that stacks the hero in a column (`flex-direction: column`) and hides the nav links.
- [ ] (Challenge) Show the Menu button only on small screens and make it open the mobile menu. The click behaviour needs JavaScript, so do only the visual part.
- [ ] Replace every colour in your CSS with a `var(--...)` variable.

## Marking and hand in

| Area | What we look for | Marks |
| --- | --- | --- |
| Classes and variables | Reusable classes, two classes on one element, no inline styles, variables used for colours | 20 |
| rem and em | rem for fonts and spacing, em for button padding, no px except borders, experiments noted | 20 |
| Display | Flex nav, flex hero, flex button row, inline-block tag, hidden mobile menu | 20 |
| Position | Fixed header with space under it, relative and absolute badge, z-index, all five box lab experiments | 25 |
| Written answers | Clear, in your own words, six answers | 10 |
| Tidiness | Indented CSS, helpful comments, no unused rules | 5 |

Hand in:

1. Zip the whole project folder, including `answers.md`.
2. Send a screenshot of the finished page, with your browser window at full width.
3. Send both to your mentor by the deadline you were given.
4. Unfinished work is fine. Send what you have and say which part you got stuck on.
