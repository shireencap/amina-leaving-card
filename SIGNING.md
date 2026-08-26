# How to sign the card ✍️

This is a digital leaving card. You sign it by opening a pull request that adds
your message. It takes a minute, whether you do it by hand or ask Copilot.

## The quick version

1. Open `js/signatures.js`.
2. Add **one new object** to the end of the `SIGNATURES` array.
3. Open a pull request.

That's it — only ever edit `js/signatures.js`.

## Your entry

```js
  {
    name: "Your Name",
    message: "Your message. Use \\n if you want a line break.",
  },
```

`name` and `message` are all you need. The card will automatically give your
signature its own font, colour, tilt and size so it looks hand signed — wonky
and individual, just like a real card.

### Want to style it yourself? (all optional)

| Field    | What it does                       | Example              |
| -------- | ---------------------------------- | -------------------- |
| `role`   | Short line under your name         | `"Frontend guild"`   |
| `font`   | Pick a handwriting font (see below)| `"Permanent Marker"` |
| `colour` | Any CSS colour                     | `"#0b6e4f"`, `"teal"`|
| `rotate` | Tilt in degrees (about -5 to 5)    | `-3`                 |
| `size`   | Text size in rem (about 1.2 to 2.0)| `1.7`                |

**Fonts you can choose:** `Caveat`, `Shadows Into Light`, `Indie Flower`,
`Patrick Hand`, `Gloria Hallelujah`, `Architects Daughter`, `Kalam`,
`Reenie Beanie`, `Permanent Marker`, `Satisfy`, `Dancing Script`,
`Nanum Pen Script`, `Gochi Hand`, `Just Another Hand`.

A fuller example:

```js
  {
    name: "Priya",
    message: "Who am I going to ask about flexbox now??\nGood luck, you legend.",
    role: "Frontend guild",
    font: "Permanent Marker",
    colour: "#9a031e",
    rotate: 2,
  },
```

## Letting Copilot sign for you

Just ask, for example:

> "Sign the leaving card from me (Jordan, data team) with a warm message and
> use a blue marker font."

Copilot follows the rules in `.github/copilot-instructions.md`: it appends a
single entry to `js/signatures.js` and opens the pull request for you.

## Ground rules

- Add your entry at the **end** of the array; don't change anyone else's.
- Keep the trailing comma after your object.
- Messages are plain text (rendered safely) — no HTML needed.
- Keep it kind and workplace-appropriate.

## Previewing locally

Just open `index.html` in your browser — no build step, no server needed.
