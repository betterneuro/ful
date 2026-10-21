/*
  FUL WEBSITE CONTENT
  Edit this file to change what's on the website. Save ("Commit changes") and the site updates in 1–2 minutes.

  RULES THAT KEEP IT WORKING
  - Every entry sits inside { } and is followed by a comma, except the last one in its list.
  - Text goes inside "double quotes". Dates are "YYYY-MM-DD". Times are 24-hour "HH:MM" (6pm = "18:00").
  - Leave a field as "" if you don't need it.

  TO ADD SOMEONE TO THE CIRCLE, copy this line into the circle list below:
    {"name": "Their Name", "business": "What they do", "offering": "One sentence about them.", "link": "https://their-site.com", "logo": ""}
  For a logo, paste a link to their logo image (right-click their logo on their website > Copy Image Address), or leave "".

  TO ADD AN EVENT, copy this line into the events list:
    {"title": "Sound Bath", "date": "2026-11-08", "start": "19:00", "end": "20:30", "price": "$25", "kind": "sound", "description": "One or two sentences.", "location": "Better Neuro Solutions, 3572 Saint Augustine Rd, Jacksonville, FL 32207"}
  "kind" sets the color: "sound", "circle", "workshop" or "community".

  OPEN BOOKING DAYS: list each date people can request to book the space.
*/
window.FUL_DATA = {
  circle: [
    {"name": "Better Neuro Solutions", "business": "Our host and partner", "offering": "The home of every Ful gathering.", "link": "https://better-neuro.com", "logo": "logos/better-neuro-solutions.svg"},
    {"name": "Mammoth Broth Co.", "business": "Primal nourishment", "offering": "Small-batch, slow-simmered broth from pasture-raised ingredients. Find them at the Atlantic Beach Farmers Market on Sundays.", "link": "https://mammothbroth.com/", "logo": "logos/mammoth-broth-co.webp"}
  ],

  events: [
    {"title": "Women's Group", "date": "2026-10-23", "start": "18:00", "kind": "circle", "location": "Better Neuro Solutions, 3572 Saint Augustine Rd, Jacksonville, FL 32207", "description": "A space to connect, reflect, grow and support one another as we rise together and change the world. Real connection, deep growth, powerful sisterhood. Come as you are. You are welcome here."}
  ],

  openDates: [
    "2026-11-01", "2026-11-06", "2026-11-07", "2026-11-08", "2026-11-13", "2026-11-14", "2026-11-15", "2026-11-20", "2026-11-21", "2026-11-22", "2026-11-27", "2026-11-28", "2026-11-29",
    "2026-12-04", "2026-12-05", "2026-12-06", "2026-12-11", "2026-12-12", "2026-12-13", "2026-12-18", "2026-12-19", "2026-12-20", "2026-12-25", "2026-12-26", "2026-12-27",
    "2027-01-01", "2027-01-02", "2027-01-03", "2027-01-08", "2027-01-09", "2027-01-10", "2027-01-15", "2027-01-16", "2027-01-17", "2027-01-22", "2027-01-23", "2027-01-24", "2027-01-29", "2027-01-30", "2027-01-31"
  ]
};
