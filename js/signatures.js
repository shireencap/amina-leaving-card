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
    name: "Maty",
    message: "Dear Amina,\nI have really enjoyed working with you on the Matalan project, I know that Network Rail is getting a really capable DevOps Engineer, even when Dan was away you helped Shireen and I and you basically ran the team and it was like Dan never left (Dont tell him I said that).\nI wish you the best and I hope you enjoy working at Network Rail!!\n- Maty \u2764\uFE0F",
    role: "Platform team",
    font: "Caveat",
    colour: "#a83279",
  },
  {
    name: "Gita xx",
    message: "Amina, It has been a great pleasure working with you. Wishing you the very best in your future endeavors.",
  },
  {
    name: "Afshin",
    message: "It has been a genuine pleasure working with you. Thank you so much for all the brilliant work you've done on this project \u2014 your talent and dedication have made a real difference. Wishing you all the very best in your next chapter; I've no doubt you'll be a huge success wherever you go.\nAll the best",
    colour: "#40407a",
  },
  {
    name: "Dan Roszkowski",
    message: "*** SEV-1 INCIDENT REPORT \u2014 P1 \u2014 DO NOT ACKNOWLEDGE, IT WON'T HELP ***\n\nSUMMARY: Production has lost its most load-bearing component. No redundancy was configured. The on-call rota is now purely decorative.\n\nIMPACT: 100% of \"just ask Amina\" requests are failing. Shireen is inconsolable. Maty has begun writing things in leaving cards \u2014 yes Maty, I read it, I've put 30 minutes in your diary.\n\nROOT CAUSE: Network Rail ran a terraform import against our best engineer and we did not have prevent_destroy set. That one's on me. I'm taking the action.\n\nMITIGATION ATTEMPTED: Scaled Dan horizontally. Unsuccessful. Dan does not scale.\n\nRESOLUTION: None available. This one does not roll back.\n\nACTION ITEMS:\n1. Amina to go and be unreasonably good at Network Rail. Owner: Amina. Due: immediately. Status: inevitable.\n2. Team to accept that the trains will now, irritatingly, run on time.\n3. Dan to stop filing incident reports about his feelings.\n\nPOST-INCIDENT NOTE: You made the hard stuff look easy AND made the team feel easy. Almost nobody does both. It was a genuine privilege \u2014 go and break things brilliantly over there, and page us occasionally.\n\nClosed as: WON'T FIX. Wouldn't want to.",
    role: "Incident Commander \u00b7 Matalan Ignite",
    font: "Architects Daughter",
    colour: "#c1121f",
    rotate: 2,
    size: 1.3,
  },
  {
    name: "Tahmid",
    message: "Amina, although we have not worked together closely, it is clear how much you have contributed to the team and the wider platform. Your work has had a real impact on the services we rely on, including SCP, and your ability to bring AI into solving complex problems has been genuinely impressive.\n\nYou have been a great member of the team and will be missed. Wishing you every success at Network Rail and in whatever comes next!",
    font: "Kalam",
    colour: "#0f766e",
    rotate: 2,
    size: 1.65,
  },
  {
    name: "Krishnan",
    message: "Wishing you all the very best in your next chapter. Although we didn't get many opportunities to work together closely, it was great being part of the same team. Thank you for your contributions and support. Wishing you success, happiness, and all the best for the future!",
  },
  {
    name: "Shadab",
    message: "Everyone in the project could see how much you grew over the course of the year in terms of handling the responsibilities and standing in for Dan whenever needed. Your contribution to the project was significant and I wish you the best for whatever comes in future !!!",
  },
  {
    name: "Duncan",
    message: "Amina,\nIt's been a pleasure working with you. You, and the other E&ET team members, have been a genuine inspiration throughout the programme. The Friday playback sessions were always a highlight, bringing energy, positivity and a tangible demonstration of what could be achieved.\nBeyond the delivery itself, you've helped prove a new and highly effective approach to developing junior talent in the AI era. Creating a model where people can learn quickly, contribute meaningfully and deliver real outcomes is a fantastic achievement.\nYour Platform Build presentations, both internally and with the client, were exceptional. The quality of the content, confidence of the delivery and clear ownership of the subject matter reflected the significant contribution you've made to the programme.\nThank you for everything you've contributed. You should be incredibly proud of what you've helped create: a best-in-class platform for Matalan, and a practical example of how AI can transform the way engineering teams work and deliver. I have no doubt you'll continue to make a positive impact wherever your career takes you.\nAll the very best,\nDuncan",
  },
  {
    name: "Elamin",
    message: "Dear Amina,\nIt's been great working with you. You've been a wonderful team member, and your contributions to the project and the platform have made a real difference. Thank you for all your hard work and dedication.\nWishing you all the best and every success in your new role!\nElamin",
    font: "Kalam",
    colour: "#6b3d7a",
  },
];
