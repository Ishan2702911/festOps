// Sample event (TechNova 2026) loaded on first visit and by "Reset to sample".
window.FESTOPS_DEMO = {
"events":[{"id":"technova26","name":"TechNova 2026","tagline":"Annual inter-college tech fest","date":"2026-12-12","venue":"Main Auditorium & Lab Block","totalBudget":500000,"joinCode":"TN26-8HF","demo":true,"createdBy":"seed","createdAt":"2026-10-01T09:00:00Z"}],
"committees":[
{"id":"c-core","eventId":"technova26","name":"Core","code":"CORE-7QX","color":"#a08bff","allocated":40000,"isCore":true,"order":0},
{"id":"c-tech","eventId":"technova26","name":"Technical","code":"TECH-4KD","color":"#3fd0ff","allocated":120000,"isCore":false,"order":1},
{"id":"c-mkt","eventId":"technova26","name":"Marketing","code":"MKT-9PL","color":"#ff6b8b","allocated":70000,"isCore":false,"order":2},
{"id":"c-des","eventId":"technova26","name":"Design","code":"DSN-2VR","color":"#ffb547","allocated":30000,"isCore":false,"order":3},
{"id":"c-log","eventId":"technova26","name":"Logistics","code":"LOG-6TM","color":"#45e39b","allocated":140000,"isCore":false,"order":4},
{"id":"c-hos","eventId":"technova26","name":"Hospitality","code":"HSP-3WB","color":"#5eead4","allocated":60000,"isCore":false,"order":5}
],
"tasks":[
{"id":"t01","eventId":"technova26","committeeId":"c-core","title":"Finalise event schedule","assignee":"Aarav","due":"2026-11-05","weight":3,"status":"done","doneAt":"2026-11-04"},
{"id":"t02","eventId":"technova26","committeeId":"c-core","title":"Permission letter from the Dean","assignee":"Aarav","due":"2026-10-25","weight":2,"status":"done","doneAt":"2026-10-24"},
{"id":"t03","eventId":"technova26","committeeId":"c-core","title":"Weekly heads meeting notes","assignee":"Ishita","due":"2026-12-10","weight":1,"status":"doing"},
{"id":"t04","eventId":"technova26","committeeId":"c-core","title":"Final event report template","assignee":"Ishita","due":"2026-12-15","weight":2,"status":"todo"},
{"id":"t05","eventId":"technova26","committeeId":"c-tech","title":"Hackathon problem statements","assignee":"Rohan","due":"2026-11-10","weight":4,"status":"done","doneAt":"2026-11-12"},
{"id":"t06","eventId":"technova26","committeeId":"c-tech","title":"Registration portal live","assignee":"Neha","due":"2026-11-08","weight":5,"status":"done","doneAt":"2026-11-07"},
{"id":"t07","eventId":"technova26","committeeId":"c-tech","title":"Set up 60 lab machines","assignee":"Rohan","due":"2026-12-05","weight":4,"status":"doing"},
{"id":"t08","eventId":"technova26","committeeId":"c-tech","title":"Confirm judges panel","assignee":"Neha","due":"2026-11-25","weight":3,"status":"todo"},
{"id":"t09","eventId":"technova26","committeeId":"c-tech","title":"Wi-Fi capacity test","assignee":"Kabir","due":"2026-11-15","weight":2,"status":"todo"},
{"id":"t10","eventId":"technova26","committeeId":"c-mkt","title":"Instagram teaser campaign","assignee":"Sana","due":"2026-11-01","weight":3,"status":"done","doneAt":"2026-10-30"},
{"id":"t11","eventId":"technova26","committeeId":"c-mkt","title":"Outreach to 20 colleges","assignee":"Vivaan","due":"2026-11-20","weight":4,"status":"doing"},
{"id":"t12","eventId":"technova26","committeeId":"c-mkt","title":"Influencer collab posts","assignee":"Sana","due":"2026-11-28","weight":2,"status":"todo"},
{"id":"t13","eventId":"technova26","committeeId":"c-mkt","title":"Press release","assignee":"Vivaan","due":"2026-12-01","weight":2,"status":"todo"},
{"id":"t14","eventId":"technova26","committeeId":"c-des","title":"Logo and brand kit","assignee":"Meera","due":"2026-10-20","weight":3,"status":"done","doneAt":"2026-10-19"},
{"id":"t15","eventId":"technova26","committeeId":"c-des","title":"10 A3 poster designs","assignee":"Meera","due":"2026-11-05","weight":3,"status":"done","doneAt":"2026-11-06"},
{"id":"t16","eventId":"technova26","committeeId":"c-des","title":"Stage backdrop design","assignee":"Dev","due":"2026-11-22","weight":4,"status":"doing"},
{"id":"t17","eventId":"technova26","committeeId":"c-des","title":"Certificate template","assignee":"Dev","due":"2026-12-01","weight":2,"status":"todo"},
{"id":"t18","eventId":"technova26","committeeId":"c-log","title":"Book auditorium and labs","assignee":"Arjun","due":"2026-10-15","weight":3,"status":"done","doneAt":"2026-10-14"},
{"id":"t19","eventId":"technova26","committeeId":"c-log","title":"Sound and lighting vendor","assignee":"Arjun","due":"2026-11-12","weight":4,"status":"done","doneAt":"2026-11-11"},
{"id":"t20","eventId":"technova26","committeeId":"c-log","title":"Stalls layout plan","assignee":"Priya","due":"2026-11-14","weight":3,"status":"doing"},
{"id":"t21","eventId":"technova26","committeeId":"c-log","title":"Transport for guest speakers","assignee":"Priya","due":"2026-12-08","weight":2,"status":"todo"},
{"id":"t22","eventId":"technova26","committeeId":"c-hos","title":"Food vendor shortlist","assignee":"Tanvi","due":"2026-11-10","weight":3,"status":"done","doneAt":"2026-11-09"},
{"id":"t23","eventId":"technova26","committeeId":"c-hos","title":"Guest accommodation","assignee":"Tanvi","due":"2026-11-30","weight":3,"status":"doing"},
{"id":"t24","eventId":"technova26","committeeId":"c-hos","title":"100 volunteer kits","assignee":"Yash","due":"2026-12-05","weight":2,"status":"todo"}
],
"expenses":[
{"id":"x01","eventId":"technova26","committeeId":"c-core","title":"Stationery and files","vendor":"Om Stationers","amount":1850,"category":"Misc","date":"2026-10-08","status":"recorded","requestedBy":"Ishita","aiRead":true,"createdAt":"2026-10-07T10:00:00Z"},
{"id":"x02","eventId":"technova26","committeeId":"c-tech","title":"Hackathon domain and hosting","vendor":"Hostinger","amount":4200,"category":"Software","date":"2026-10-12","status":"recorded","requestedBy":"Neha","aiRead":true,"createdAt":"2026-10-11T10:00:00Z"},
{"id":"x03","eventId":"technova26","committeeId":"c-log","title":"Auditorium booking fee","vendor":"College Estate Office","amount":25000,"category":"Venue","date":"2026-10-15","status":"recorded","requestedBy":"Arjun","aiRead":true,"createdAt":"2026-10-14T10:00:00Z"},
{"id":"x04","eventId":"technova26","committeeId":"c-mkt","title":"Instagram ads boost","vendor":"Meta Ads","amount":15000,"category":"Marketing","date":"2026-10-28","status":"recorded","requestedBy":"Sana","aiRead":true,"createdAt":"2026-10-27T10:00:00Z"},
{"id":"x05","eventId":"technova26","committeeId":"c-mkt","title":"Six roll-up standees","vendor":"Sai Prints","amount":7200,"category":"Printing","date":"2026-11-03","status":"recorded","requestedBy":"Vivaan","aiRead":true,"createdAt":"2026-11-02T10:00:00Z"},
{"id":"x06","eventId":"technova26","committeeId":"c-des","title":"A3 poster printing (300)","vendor":"Sai Prints","amount":9600,"category":"Printing","date":"2026-11-06","status":"recorded","requestedBy":"Meera","aiRead":true,"createdAt":"2026-11-05T10:00:00Z"},
{"id":"x07","eventId":"technova26","committeeId":"c-hos","title":"Caterer tasting session","vendor":"Annapurna Caterers","amount":3800,"category":"Food","date":"2026-11-09","status":"recorded","requestedBy":"Tanvi","aiRead":true,"createdAt":"2026-11-08T10:00:00Z"},
{"id":"x08","eventId":"technova26","committeeId":"c-log","title":"Sound and lighting advance","vendor":"Pulse Audio","amount":45000,"category":"Equipment","date":"2026-11-11","status":"recorded","requestedBy":"Arjun","aiRead":true,"createdAt":"2026-11-10T10:00:00Z"},
{"id":"x09","eventId":"technova26","committeeId":"c-hos","title":"Welcome kit samples","vendor":"Craftbox","amount":2400,"category":"Misc","date":"2026-11-13","status":"recorded","requestedBy":"Yash","aiRead":true,"createdAt":"2026-11-12T10:00:00Z"},
{"id":"x10","eventId":"technova26","committeeId":"c-tech","title":"Extension boards and LAN cables","vendor":"Lamington Electronics","amount":12400,"category":"Equipment","date":"2026-11-14","status":"recorded","requestedBy":"Kabir","aiRead":true,"createdAt":"2026-11-13T10:00:00Z"},
{"id":"x11","eventId":"technova26","committeeId":"c-tech","title":"Trophies and medals (advance)","vendor":"Victory Trophies","amount":18000,"category":"Prizes","status":"approved","requestedBy":"Neha","note":"50% advance, balance on delivery","createdAt":"2026-11-15T10:00:00Z"},
{"id":"x12","eventId":"technova26","committeeId":"c-log","title":"Stall tents (20)","vendor":"Shamiana House","amount":32000,"category":"Decor","status":"requested","requestedBy":"Priya","note":"Quote shared in Logistics chat","createdAt":"2026-11-16T10:00:00Z"},
{"id":"x13","eventId":"technova26","committeeId":"c-mkt","title":"College outreach travel","vendor":"","amount":6500,"category":"Travel","status":"requested","requestedBy":"Vivaan","note":"Visits to 8 colleges","createdAt":"2026-11-16T12:00:00Z"}
],
"sponsors":[
{"id":"sp1","eventId":"technova26","name":"ByteForge Software","industry":"Developer tools","why":"Wants hiring visibility with final-year CS students","ask":50000,"stage":"paid","committeeId":"c-tech","source":"manual"},
{"id":"sp2","eventId":"technova26","name":"Nimbus Cloud","industry":"Cloud hosting","why":"Free credits for hackathon teams, title sponsor slot","ask":75000,"stage":"confirmed","committeeId":"c-tech","source":"ai"},
{"id":"sp3","eventId":"technova26","name":"Brewline Coffee","industry":"Food and beverage","why":"Stall at the food court and branded cups","ask":20000,"stage":"talks","committeeId":"c-hos","source":"ai"},
{"id":"sp4","eventId":"technova26","name":"PrintPoint","industry":"Printing","why":"Discounted printing in exchange for logo on posters","ask":15000,"stage":"contacted","committeeId":"c-des","source":"manual"},
{"id":"sp5","eventId":"technova26","name":"SkillUp Academy","industry":"Ed-tech","why":"Course vouchers as prizes, workshop slot","ask":40000,"stage":"found","committeeId":"c-mkt","source":"ai"},
{"id":"sp6","eventId":"technova26","name":"Voltride EV","industry":"Electric mobility","why":"EV display near entry, test rides for students","ask":30000,"stage":"found","committeeId":"c-log","source":"ai"}
],
"recruitments":[
{"id":"r1","eventId":"technova26","committeeId":"c-mkt","role":"Marketing associate (2027 team)","seats":2,"skills":["Communication","Creativity","Social media strategy","Teamwork"],"questions":["Our teaser reel got 18k views but only 300 registrations. What would you change in the next two weeks, and why?","Write a 40-word Instagram caption announcing the hackathon to first-year students.","You have ₹5,000 to promote the fest in 8 nearby colleges. How would you split it?","A teammate keeps missing posting deadlines. How would you handle it?"],"status":"open","createdAt":"2026-11-10T10:00:00Z","recommendation":{"picks":[{"id":"a3","reason":"Highest score with a data-led plan and a strong, specific caption."},{"id":"a1","reason":"Clear communicator with a realistic budget split; complements Fatima's strategy focus."}],"note":"Two strong candidates; Karan needs more depth on strategy.","at":"2026-11-15T10:00:00Z"}}
],
"applications":[
{"id":"a1","eventId":"technova26","recruitmentId":"r1","name":"Riya Sharma","answers":["Shift from reach to conversion: add a registration link sticker in every story, run a 48-hour early-bird and track clicks per post so we double down on what converts.","Think you can build something in 24 hours? TechNova's hackathon is open to first-years too. Free food, mentors, ₹50k in prizes. Team up and register before 30 Nov. Link in bio.","₹2,500 on printed standees for the 3 biggest colleges, ₹1,500 on campus ambassador snacks, ₹1,000 boosting posts targeted to those colleges.","Talk privately first to understand why, then split the calendar so they own fewer but fixed slots, and check in twice a week."],"decision":"pending","eval":{"scores":{"Communication":8,"Creativity":7,"Social media strategy":8,"Teamwork":8},"total":78,"summary":"Concrete, conversion-focused answers with a sensible budget. Caption is clear but conventional.","strengths":"Clear plans, people skills","gaps":"Caption creativity","flags":[]}},
{"id":"a2","eventId":"technova26","recruitmentId":"r1","name":"Aditya Rao","answers":["Post more often.","Join the hackathon, it will be fun.","Spend it on ads.","Tell the head."],"decision":"rejected","eval":{"scores":{"Communication":3,"Creativity":2,"Social media strategy":2,"Teamwork":3},"total":25,"summary":"Very short answers with little reasoning or detail.","strengths":"Brevity","gaps":"Depth across all skills","flags":["Answers too short to judge"]}},
{"id":"a3","eventId":"technova26","recruitmentId":"r1","name":"Fatima Khan","answers":["Views came from a trending audio, not intent. I'd run 3 short reels showing real past projects, add a 'register in 60 seconds' walkthrough, and A/B test two CTAs in stories while tracking sign-ups per link.","First hackathon? Perfect. 24 hours, real mentors, zero experience needed, just curiosity. Grab two friends, pick a problem, ship something you're proud of. TechNova, 12 Dec. Seats are filling fast.","Most goes to people, not ads: ₹3,000 for 8 campus ambassadors (₹375 each for printouts and snacks), ₹2,000 to boost the best-performing reel only in those colleges' locations.","Ask what's blocking them, offer to pair on the next two posts, and agree on a shared tracker. If it continues, raise it with the head with the tracker as evidence."],"decision":"selected","eval":{"scores":{"Communication":9,"Creativity":9,"Social media strategy":9,"Teamwork":8},"total":88,"summary":"Strong, specific and data-aware answers with an energetic caption. Handles team issues maturely.","strengths":"Strategy and copywriting","gaps":"None significant","flags":[]}},
{"id":"a4","eventId":"technova26","recruitmentId":"r1","name":"Karan Mehta","answers":["Make the reels shorter and add memes that students relate to, plus a giveaway for people who register.","Code. Eat. Sleep. Repeat. TechNova Hackathon is here! Register now and win big prizes!!","Half on posters, half on Instagram ads.","I'd do their posts myself so we don't miss deadlines."],"decision":"pending","eval":{"scores":{"Communication":6,"Creativity":7,"Social media strategy":5,"Teamwork":4},"total":55,"summary":"Creative instincts but plans lack measurement and detail. Taking over a teammate's work avoids the real issue.","strengths":"Playful tone","gaps":"Strategy, delegation","flags":[]}}
],
"messages":[
{"id":"m01","eventId":"technova26","channel":"announce","userId":"seed-aarav","name":"Aarav","text":"Heads meeting moved to Thursday 5 PM, Seminar Hall 2. Bring your committee's task list.","ts":"2026-11-14T08:30:00Z"},
{"id":"m02","eventId":"technova26","channel":"core","userId":"seed-arjun","name":"Arjun","text":"Sound and lighting advance is paid, receipt uploaded to the ledger.","ts":"2026-11-11T12:05:00Z"},
{"id":"m03","eventId":"technova26","channel":"core","userId":"seed-ishita","name":"Ishita","text":"Nimbus Cloud confirmed ₹75k as title sponsor. Payment expected next week.","ts":"2026-11-15T10:40:00Z"},
{"id":"m04","eventId":"technova26","channel":"c-tech","userId":"seed-rohan","name":"Rohan","text":"Lab 3 has 12 PCs without LAN. We need about 15 more cables.","ts":"2026-11-12T09:15:00Z"},
{"id":"m05","eventId":"technova26","channel":"c-tech","userId":"seed-kabir","name":"Kabir","text":"Bought them, receipt is in. Wi-Fi test is next on my list.","ts":"2026-11-14T16:20:00Z"},
{"id":"m06","eventId":"technova26","channel":"c-mkt","userId":"seed-sana","name":"Sana","text":"Teaser reel crossed 18k views. Registrations are lagging, so let's push the early-bird.","ts":"2026-11-13T18:00:00Z"},
{"id":"m07","eventId":"technova26","channel":"c-log","userId":"seed-priya","name":"Priya","text":"Tent vendor quote is ₹32,000 for 20 stalls. Raised the spend request.","ts":"2026-11-16T10:05:00Z"},
{"id":"m08","eventId":"technova26","channel":"c-hos","userId":"seed-tanvi","name":"Tanvi","text":"Tasting went well. Going with Annapurna Caterers.","ts":"2026-11-09T14:30:00Z"}
],
"members":[],
"reports":[]
};
