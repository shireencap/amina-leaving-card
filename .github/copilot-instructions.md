# Copilot instructions — signing the leaving card

This repository is a **digital leaving card**. People sign it by opening a pull
request that adds their message. When a user asks you to "sign the card" or
"add my message", follow these steps exactly.

## What to change

**Only edit `js/signatures.js`.** Do not touch any other file. Do not edit
`js/config.js`, `js/card.js`, the CSS or the HTML.

`js/signatures.js` defines a single array, `window.SIGNATURES`. To sign, append
**one new object** to the **end** of that array (after the last entry, before
the closing `];`). Never edit, reorder or delete anyone else's entry.

## The signature object

```js
{
  name: "Their Name",            // required
  message: "Their message here", // required — use \n for line breaks
  role: "Their team",            // optional — short line under the name
  font: "Caveat",                // optional — see allowed fonts below
  colour: "#1a3a6b",             // optional — any CSS colour
  rotate: -3,                    // optional — tilt in degrees, about -5 to 5
  size: 1.6,                     // optional — text size in rem, about 1.2 to 2.0
}
```

Only `name` and `message` are required. **Prefer leaving the styling fields
out** unless the person asks for a specific look — when they are omitted the
card automatically gives each signature a varied, hand-signed appearance
(font, colour, tilt and size derived from the name). Set styling fields only
when the signer asks for something particular (for example "make it red", "use
a marker font", "make it big").

### Allowed `font` values

Use one of these exact strings (anything else is ignored and a font is chosen
automatically):

`Caveat`, `Shadows Into Light`, `Indie Flower`, `Patrick Hand`,
`Gloria Hallelujah`, `Architects Daughter`, `Kalam`, `Reenie Beanie`,
`Permanent Marker`, `Satisfy`, `Dancing Script`, `Nanum Pen Script`,
`Gochi Hand`, `Just Another Hand`.

## Rules

- Add exactly one new entry per person, at the end of the array.
- Keep the existing trailing comma style; end your object with a comma.
- Messages are plain text — they are rendered with `textContent`, so HTML and
  scripts will not run. Do not try to embed markup.
- Keep messages warm, kind and workplace-appropriate.
- Use British English spelling. Both `colour` and `color` keys are accepted.
- Do not reformat the rest of the file or change unrelated lines, so the diff
  stays small and merges cleanly.

## Worked example

Given the user: *"Sign it from Alex on the platform team — something like
'Thanks for mentoring me, good luck!' and make it teal."*

Append:

```js
  {
    name: "Alex",
    message: "Thanks for mentoring me. Good luck — you'll be brilliant!",
    role: "Platform team",
    colour: "teal",
  },
```

## Pull request

- Branch name: `sign/<name>` (for example `sign/alex`).
- Commit message (Conventional Commits): `feat(card): add signature from Alex`.
- PR title: `Sign the card — Alex`.
- Keep the PR to the single-file change in `js/signatures.js`.
