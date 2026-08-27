/*
 * Signatures for the leaving card.
 *
 * To sign: add a new object to the END of the SIGNATURES array below, then
 * open a pull request. See SIGNING.md for the full guide.
 *
 * Each entry supports:
 *   name      (required)  Your name, as you want it signed.
 *   message   (required)  Your message. Use \n for a line break.
 *   role      (optional)  A short line under your name, e.g. "Platform team".
 *   font      (optional)  One of the named fonts in SIGNATURE_FONTS (card.js).
 *   colour    (optional)  Any CSS colour, e.g. "#1a3a6b" or "teal".
 *   rotate    (optional)  Tilt in degrees, roughly -5 to 5.
 *   size      (optional)  Text size in rem, roughly 1.2 to 2.0.
 *
 * Leave any optional field out and the card picks a tasteful, consistent
 * style for you automatically. The result is meant to look hand signed:
 * wonky, varied and individual.
 */
window.SIGNATURES = [
  {
    name: "Shireen",
    message: "Dear Amina,\nIts such a bittersweet moment for me to see you moving on. I have thoroughly enjoyed my time at Matalan and you have been a huge part of that experience for me. I have loved working with you, you are so smart, capable and so much more and i know these are qualities your future employer would truly value too.\nI wish you all the best in your new role and i know you will be at the forefront of the teams success and be one of the most valuable platform engineers National Railway could ask for!!\nI will misss youu and 'Matalan Crew' will never be the same again but its time for me to let you go. \nFrom yours truly, Shireen.\n#ShAminaForever \u2764\uFE0F",
    role: "Platform team",
    font: "Caveat",
    colour: "#a83279",
  },
  {
    name: "Martin",
    message: "Awesome working with you Amina, always so impressed with your DevOps and Platform skills and ability to tackle complex problems so quickly with agentic AI. You will be missed on the team, but excited for you to be taking the next step in your career. Good luck and all the best in the future!",
    font: "Permanent Marker",
    colour: "#0f766e",
    rotate: -3,
    size: 1.7,
  },
  {
    name: "Gita xx",
    message: "Amina, It has been a great pleasure working with you. Wishing you the very best in your future endeavors.",
  },
];
