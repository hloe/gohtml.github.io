$(function () {
  var html = $('#quotes').html();


  var quotes = [
    {
      quote: 'I used to be with it. But then they changed what it was.Now what I\'m with isn\'t it, and what\'s it seems scary and wierd. It\'ll happen to you.',
      author: 'Abe Simpson'
    }, {
      quote: 'Dear Mr. President: There are too many states nowadays. Please eliminate three. PS, I am not a crackpot.',
      author: 'Abe Simpson'
    }, {
      quote: 'Well, whenever I\'m confused, I just check my underwear. It holds the answer to all the important questions.',
      author: 'Abe Simpson'
    }, {
      quote: 'Over there\'s the games room. We\'re not allowed in there.',
      author: 'Abe Simpson'
    }, {
      quote: 'Back then Turkeys were called walking birds',
      author: 'Abe Simpson'
    }, {
      quote: 'I was sleeping in the dryer and got caught in your sheets.',
      author: 'Abe Simpson'
    }, {
      quote: 'I don\'t ride side-saddle. I\'m as straight as a submarine',
      author: 'Abe Simpson'
    }, {
      quote: 'I\'m Santa!? Oh, now I\'ll never die.',
      author: 'Abe Simpson'
    }, {
      quote: 'You two look good - open casket good.',
      author: 'Abe Simpson'
    }, {
      quote: 'What can I do for you? Eat something green? Vote for someone brown?',
      author: 'Abe Simpson'
    }, {
      quote: 'In a world of thirty-one flavors, we\'re the cup of water they rinse the scoops in. Grampa out.',
      author: 'Abe Simpson'
    }, {
      quote: 'I\'m gonna smooch her like a mule eating an apple!',
      author: 'Abe Simpson'
    }, {
      quote: 'I\'m in love... no wait, it\'s a stroke.',
      author: 'Abe Simpson'
    }, {
      quote: 'You know, you remind me of a poem I can\'t remember, and a song that may never have existed, and a place I\'m not sure I\'ve ever been to.',
      author: 'Abe Simpson'
    }, {
      quote: 'La... tex... con... dome. Boy I\'d like to live in one of those!',
      author: 'Abe Simpson'
    }, {
      quote: 'Oh, it\'s not a swindle. What you do is, see, you give them all your credit card numbers, and if one of them is lucky, they send you a prize.',
      author: 'Abe Simpson'
    }, {
      quote: 'Let\'s sacrifice him to our god! Come on, we did it all the time in the thirties.',
      author: 'Abe Simpson'
    }, {
      quote: 'Mr. Peterson, you can take this job and... fill it! And one more thing... I never once washed my hands. That\'s your policy, not mine.',
      author: 'Abe Simpson'
    }, {
      quote: 'Do we sell... French... fries?',
      author: 'Abe Simpson'
    }, {
      quote: 'Looking at that tired old freak has made me realize I\'m no spring chicken myself. I can feel death\'s clammy hand on my shoulder. Wait, that\'s my hand.',
      author: 'Abe Simpson'
    }, {
      quote: 'Anyway, about my washtub... I just used it that morning to wash my turkey, which in those days was known as a "walking bird". We\'d always have walking bird on Thanksgiving with all the trimmings: cranberries, Injun eyes, yams stuffed with gunpowder. Then we\'d all watch football, which in those days was called "baseball."',
      author: 'Abe Simpson'
    }, {
      quote: 'Ah, there\'s an interesting story behind this nickel. In 1957, I remember it was, I got up in the morning and made myself a piece of toast. I set the toaster to three - medium brown.',
      author: 'Abe Simpson'
    }, {
      quote: 'I\'m filled with piss and vinegar! At first, I was just filled with vinegar.',
      author: 'Abe Simpson'
    }, {
      quote: 'Movies! What a rip-off! I don\'t have to stand here and take this.I... zzzzzzz.',
      author: 'Abe Simpson'
    }, {
      quote: 'I\'ll take that secret to my grave, or urn, or medical school dissecting table or wherever you\'re dumping me.',
      author: 'Abe Simpson'
    }, {
      quote: 'Our ancestors were kicked out of Australia.',
      author: 'Abe Simpson'
    }, {
      quote: 'Oh, you mean Adam and Eve Simpson. Or as you may know them, Julius and Ethel Rosenberg.',
      author: 'Abe Simpson'
    }, {
      quote: 'Oh, son, don\'t overreach. Go for the dented car, the dead-end job, the less attractive girl. I blame myself. I should have had this talk a long time ago.',
      author: 'Abe Simpson'
    }, {
      quote: 'Let\'s go! If I\'m not back at the home by nine they declare me legally dead and collect my insurance!',
      author: 'Abe Simpson'
    }, {
      quote: 'Dear Advertisers, I am disgusted with the way old people are depicted on television. We are not all vibrant, fun-loving sex maniacs. Many of us are bitter, resentful individuals who remember the good old days when entertainment was bland and inoffensive. The following is a list of words I never want to hear on televison again. Number one: bra. Number two: horny. Number three: family jewels.',
      author: 'Abe Simpson'
    }, {
      quote: 'That\'s how I got my idea for a suitcase with wheels: from a commercial for a suitcase with wheels.',
      author: 'Abe Simpson'
    }, {
      quote: 'You\'re in the newspaper business? Something that\'s going to die before I do.',
      author: 'Abe Simpson'
    }, {
      quote: 'Let\'s see... Farmer Billy\'s smoke-fed bacon, Farmer Billy\'s bacon-fed bacon, Farmer Billy\'s travel bacon... Mr. Simpson, if you really want to kill yourself, I also sell handguns!',
      author: 'Apu'
    }, {
      quote: 'Silly customer, you cannot hurt a Twinkie.',
      author: 'Apu'
    }, {
      quote: 'I won\'t lie to you: on this job, you will be shot at. ',
      author: 'Apu'
    }, {
      quote: 'Unless I redeem myself, I will be reincarnated as a sea cucumber. Or worse, a land cucumber! ',
      author: 'Apu'
    }, {
      quote: 'I am a lean, mean, vindaloo machine! ',
      author: 'Apu'
    }, {
      quote: 'Oh, my! Radioactive squishees! ',
      author: 'Apu'
    }, {
      quote: 'Yes, yes, I am familiar with the standard hold-up procedure. ',
      author: 'Apu'
    }, {
      quote: 'Your speediness will be rewarded in the next life. ',
      author: 'Apu'
    }, {
      quote: 'Mrs. Simpson, bathroom is not for customers. Please use the crack house across the street. ',
      author: 'Apu'
    }, {
      quote: 'I\'m gonna party like its on sale for $19.99 ',
      author: 'Apu'
    }, {
      quote: 'Oh dear, you\'ve ruined my work! You flying fat man! ',
      author: 'Apu'
    }, {
      quote: 'The fact that I cannot bowl wreaks havoc with my self-esteem too, hey, but who am I to complain?',
      author: 'Apu'
    }, {
      quote: 'Get bent',
      author: 'Bart Simpson'
    }, {
      quote: 'I\'ll die before I surrender, Tim.',
      author: 'Bart Simpson'
    }, {
      quote: 'I didn\'t do it',
      author: 'Bart Simpson'
    }, {
      quote: 'Hi Homer, wanna eat my shorts?',
      author: 'Bart Simpson'
    }, {
      quote: 'Ay caramba!',
      author: 'Bart Simpson'
    }, {
      quote: 'I\'m Bart Simpson. Who the hell are you?',
      author: 'Bart Simpson'
    }, {
      quote: 'Hey Homer, mom says get your fat a** over to the Flanders',
      author: 'Bart Simpson'
    }, {
      quote: 'I didn\'t do it nobody saw me do it you can\'t prove anything',
      author: 'Bart Simpson'
    }, {
      quote: 'Eat My Shorts!',
      author: 'Bart Simpson'
    }, {
      quote: 'Don\'t have a cow, Man!',
      author: 'Bart Simpson'
    }, {
      quote: 'Ow! Quit it!',
      author: 'Bart Simpson'
    }, {
      quote: '(To Lisa) You got the brains and talent to go as far as you want and when you do I\'ll be right there to borrow money.',
      author: 'Bart Simpson'
    }, {
      quote: 'I\'ve done a lot of bad stuff through the years. Now I\'m paying the price but there\'s so many things I\'ll never get a chance to do: smoke a cigarette, use a fake I.D., shave a swear word in my hair... ',
      author: 'Bart Simpson'
    }, {
      quote: 'Doh',
      author: 'Homer Simpson'
    }, {
      quote: 'I like my beer cold, my TV loud and my homosexuals flaming.',
      author: 'Homer Simpson'
    }, {
      quote: 'Just once I\'d like someone to call me \'Sir\' without adding \'You\'re making a scene.\'',
      author: 'Homer Simpson'
    }, {
      quote: '"Owww look at me Marge, I\'m making people Happy! I\'m the magical man, from Happy Land, who lives in a gumdrop house on Lolly Pop Lane!!!!... ... By the way I was being sarcastic... "',
      author: 'Homer Simpson'
    }, {
      quote: 'Hello, my name is mister Burns, I believe you have a letter for me. (P.O. Worker: Ok Mr. Burns, what\'s your first name?) I don\'t know…',
      author: 'Homer Simpson'
    }, {
      quote: 'You\'ll have to speak up, I\'m wearing a towel.',
      author: 'Homer Simpson'
    }, {
      quote: 'I don\'t hate your mother, Marge. I just wouldn\'t be sad if she died.',
      author: 'Homer Simpson'
    }, {
      quote: 'To alcohol! The cause of - and the solution to - all life\'s problems!',
      author: 'Homer Simpson'
    }, {
      quote: 'We are just slowly dying.',
      author: 'Homer Simpson'
    }, {
      quote: 'English, who needs that? I\'m never going to England.',
      author: 'Homer Simpson'
    }, {
      quote: 'How come things that happen to stupid people keep happening to me?',
      author: 'Homer Simpson'
    }, {
      quote: 'Oh, people can come up with statistics to prove anything, Kent. 14% of people know that.',
      author: 'Homer Simpson'
    }, {
      quote: 'I\'m normally not a praying man, but if you\'re up there, please save me Superman.',
      author: 'Homer Simpson'
    }, {
      quote: 'If you don\'t like your job you don\'t strike, you just go in every day and do it really half assed, that\'s the american way.',
      author: 'Homer Simpson'
    }, {
      quote: 'What do you think, Marge? All I need is a title. I was thinking something like No TV and No Beer Make Homer Something Something. (Marge: Go Crazy?) Don\'t mind if I do! (goes crazy)',
      author: 'Homer Simpson'
    }, {
      quote: 'I\'m trying to be a sensitive father, you unwanted moron!',
      author: 'Homer Simpson'
    }, {
      quote: 'I am so smart, I am so smart, S-M-R-T! I mean S-M-A-R-T!',
      author: 'Homer Simpson'
    }, {
      quote: 'Gah, Stupid sexy Flanders!',
      author: 'Homer Simpson'
    }, {
      quote: 'I Call the Big One Bitey',
      author: 'Homer Simpson'
    }, {
      quote: 'What\'s a wedding? Webster\'s dictionary describes it as the act of removing weeds from one\'s garden.',
      author: 'Homer Simpson'
    }, {
      quote: 'OK, OK, I won\'t go stalk Lenny and Carl. Now... . I\'m Going Out... .to ... . Stalk... . (laughs) he he he DOH.',
      author: 'Homer Simpson'
    }, {
      quote: 'Why does everything I whip leave me?',
      author: 'Homer Simpson'
    }, {
      quote: 'I am evil Homer! I am evil Homer!',
      author: 'Homer Simpson'
    }, {
      quote: 'I\'m going to the back seat of my car, with the woman I love, and I won\'t be back for ten minutes!',
      author: 'Homer Simpson'
    }, {
      quote: 'Alright, Brain. I don\'t like you and you don\'t like me. But let\'s just do this and I can get back to killing you with beer.',
      author: 'Homer Simpson'
    }, {
      quote: 'She knew my one weakness, that I\'m weak!',
      author: 'Homer Simpson'
    }, {
      quote: 'Just because I don\'t care doesn\'t mean I don\'t understand',
      author: 'Homer Simpson'
    }, {
      quote: 'Oh, so they have Internet on computers now!',
      author: 'Homer Simpson'
    }, {
      quote: 'Aah! Hey, get off my sugar. Bad bees! Bad! Ow! Oww!! Oh, they\'re defending themselves somehow.',
      author: 'Homer Simpson'
    }, {
      quote: 'Why you little!',
      author: 'Homer Simpson'
    }, {
      quote: 'Lisa, I thought I told you not to listen to Captain What\'s His Name at church!',
      author: 'Homer Simpson'
    }, {
      quote: 'Oh, everything looks bad if you remember it.',
      author: 'Homer Simpson'
    }, {
      quote: 'In this house, we obey the laws of thermodynamics! ',
      author: 'Homer Simpson'
    }, {
      quote: 'Aww, look at him. He\'s like a little angel that killed 50 million people',
      author: 'Homer Simpson'
    }, {
      quote: 'Trying is the first step to failure',
      author: 'Homer Simpson'
    }, {
      quote: 'I\'m sorry I lied to you, Marge. But this gun had a hold on me. I felt this incredible surge of power, like God must feel when he\'s holding a gun.',
      author: 'Homer Simpson'
    }, {
      quote: 'I hope I didn’t brain my damage.',
      author: 'Homer Simpson'
    }, {
      quote: 'Lisa, vampires are make-believe, like elves, gremlins, and Eskimos.',
      author: 'Homer Simpson'
    }, {
      quote: 'How could you? Haven\'t you learned anything from that guy that gives those sermons in church? Captain What\'s-his-name. We live in a society of laws, why do you think I took you to see all those Police Academy movies? For fun?',
      author: 'Homer Simpson'
    }, {
      quote: 'When will I learn? The answers to life’s problems aren’t at the bottom of a bottle - they’re on TV!',
      author: 'Homer Simpson'
    }, {
      quote: 'Oh boy, buffalo testicles!',
      author: 'Homer Simpson'
    }, {
      quote: 'Son, if you really want something in this life, you have to work for it. Now quiet, they\'re about to announce the lottery numbers.',
      author: 'Homer Simpson'
    }, {
      quote: 'I don\'t apologize Lisa, I\'m sorry that\'s just one thing I don\'t do.',
      author: 'Homer Simpson'
    }, {
      quote: 'First you get the sugar. Then you get the power. Then you get the women.',
      author: 'Homer Simpson'
    }, {
      quote: 'Spider poison is people poison?',
      author: 'Homer Simpson'
    }, {
      quote: 'See Marge I told you they could deep fry my shirt... . I didn\'t say THEY couldn\'t; I said YOU shouldn\'t!',
      author: 'Homer Simpson'
    }, {
      quote: 'Our Beatles are way better than your Rolling Stones! ',
      author: 'Homer Simpson'
    }, {
      quote: 'You\'ll be a snake that lives in Paris, it\'s a children\'s book that practically writes itself',
      author: 'Homer Simpson'
    }, {
      quote: 'Donuts is there anything they can\'t do.',
      author: 'Homer Simpson'
    }, {
      quote: 'Facts are meaningless. You could use facts to prove anything that’s even remotely true',
      author: 'Homer Simpson'
    }, {
      quote: 'Let\'s just agree that on this day a million years ago a dude was born who lots of people think was magical. And some people don\'t think so, and that\'s cool too. But we\'re probably right.',
      author: 'Homer Simpson'
    }, {
      quote: 'Operator! Give me the number for 911!',
      author: 'Homer Simpson'
    }, {
      quote: 'Bart, with $10,000, we\'d be millionaires! We could buy all kinds of useful things like... love!',
      author: 'Homer Simpson'
    }, {
      quote: 'Just because I don\'t care doesn\'t mean I don\'t understand.',
      author: 'Homer Simpson'
    }, {
      quote: 'Son, if you really want something in this life, you have to work for it. Now quiet! They\'re about to announce the lottery numbers.',
      author: 'Homer Simpson'
    }, {
      quote: 'Well, it\'s 1 a.m. Better go home and spend some quality time with the kids.',
      author: 'Homer Simpson'
    }, {
      quote: 'Maybe, just once, someone will call me \'Sir\' without adding, \'You\'re making a scene.\'',
      author: 'Homer Simpson'
    }, {
      quote: 'Marge, don\'t discourage the boy! Weaseling out of things is important to learn. It\'s what separates us from the animals! Except the weasel.',
      author: 'Homer Simpson'
    }, {
      quote: 'Donuts. Is there anything they can\'t do?',
      author: 'Homer Simpson'
    }, {
      quote: 'You know, boys, a nuclear reactor is a lot like a woman. You just have to read the manual and press the right buttons. ',
      author: 'Homer Simpson'
    }, {
      quote: 'Lisa, if you don\'t like your job you don\'t strike. You just go in every day and do it really half-assed. That\'s the American way. ',
      author: 'Homer Simpson'
    }, {
      quote: 'When will I learn? The answer to life\'s problems aren\'t at the bottom of a bottle, they\'re on TV! ',
      author: 'Homer Simpson'
    }, {
      quote: 'Son, when you participate in sporting events, it\'s not whether you win or lose: it\'s how drunk you get. ',
      author: 'Homer Simpson'
    }, {
      quote: 'I\'m going to the back seat of my car, with the woman I love, and I won\'t be back for ten minutes! ',
      author: 'Homer Simpson'
    }, {
      quote: '(Meeting Aliens) Please don\'t eat me! I have a wife and kids. Eat them!',
      author: 'Homer Simpson'
    }, {
      quote: 'What do we need a psychiatrist for? We know our kid is nuts.',
      author: 'Homer Simpson'
    }, {
      quote: 'Marriage is like a coffin and each kid is another nail.',
      author: 'Homer Simpson'
    }, {
      quote: 'Kids, you tried your best and you failed miserably. The lesson is, never try.',
      author: 'Homer Simpson'
    }, {
      quote: 'The only monster here is the gambling monster that has enslaved your mother! I call him Gamblor, and it\'s time to snatch your mother from his neon claws!',
      author: 'Homer Simpson'
    }, {
      quote: 'When I look at the smiles on all the children\'s faces, I just know they\'re about to jab me with something.',
      author: 'Homer Simpson'
    }, {
      quote: 'I\'m having the best day of my life, and I owe it all to not going to Church!',
      author: 'Homer Simpson'
    }, {
      quote: 'Lisa, if the Bible has taught us nothing else, and it hasn\'t, it\'s that girls should stick to girls sports, such as hot oil wrestling and foxy boxing and such and such.',
      author: 'Homer Simpson'
    }, {
      quote: 'I\'m not a bad guy! I work hard, and I love my kids. So why should I spend half my Sunday hearing about how I\'m going to Hell?',
      author: 'Homer Simpson'
    }, {
      quote: 'Getting out of jury duty is easy. The trick is to say you\'re prejudiced against all races.',
      author: 'Homer Simpson'
    }, {
      quote: 'It\'s not easy to juggle a pregnant wife and a troubled child, but somehow I managed to fit in eight hours of TV a day.',
      author: 'Homer Simpson'
    }, {
      quote: 'I want to share something with you: The three little sentences that will get you through life. Number 1: Cover for me. Number 2: Oh, good idea, Boss! Number 3: It was like that when I got here.',
      author: 'Homer Simpson'
    }, {
      quote: 'Remember that postcard Grandpa sent us from Florida of that Alligator biting that woman\'s bottom? That\'s right, we all thought it was hilarious. But, it turns out we were wrong. That alligator was sexually harrassing that woman.',
      author: 'Homer Simpson'
    }, {
      quote: 'Old people don\'t need companionship. They need to be isolated and studied so it can be determined what nutrients they have that might be extracted for our personal use.',
      author: 'Homer Simpson'
    }, {
      quote: 'How is education supposed to make me feel smarter? Besides, every time I learn something new, it pushes some old stuff out of my brain. Remember when I took that home winemaking course, and I forgot how to drive?',
      author: 'Homer Simpson'
    }, {
      quote: 'Television! Teacher, mother, secret lover.',
      author: 'Homer Simpson'
    }, {
      quote: 'Homer no function beer well without.',
      author: 'Homer Simpson'
    }, {
      quote: 'I\'ve always wondered if there was a god. And now I know there is -- and it\'s me.',
      author: 'Homer Simpson'
    }, {
      quote: 'Kill my boss? Do I dare live out the American dream?',
      author: 'Homer Simpson'
    }, {
      quote: 'If something goes wrong at the plant, blame the guy who can\'t speak English.',
      author: 'Homer Simpson'
    }, {
      quote: 'I\'m never going to be disabled. I\'m sick of being so healthy.',
      author: 'Homer Simpson'
    }, {
      quote: 'Alcohol is a way of life, alcohol is my way of life, and I aim to keep it.',
      author: 'Homer Simpson'
    }, {
      quote: 'All my life I\'ve had one dream, to achieve my many goals.',
      author: 'Homer Simpson'
    }, {
      quote: 'Dad, you\'ve done a lot of great things, but you\'re a very old man, and old people are useless.',
      author: 'Homer Simpson'
    }, {
      quote: 'But Marge, what if we chose the wrong religion? Each week we just make God madder and madder.',
      author: 'Homer Simpson'
    }, {
      quote: 'I think Smithers picked me because of my motivational skills. Everyone says they have to work a lot harder when I\'m around.',
      author: 'Homer Simpson'
    }, {
      quote: 'Dear Lord... The gods have been good to me. For the first time in my life, everything is absolutely perfect just the way it is. So here\'s the deal: You freeze everything the way it is, and I won\'t ask for anything more. If that is OK, please give me absolutely no sign. OK, deal.',
      author: 'Homer Simpson'
    }, {
      quote: 'That\'s it! You people have stood in my way long enough. I\'m going to clown college!',
      author: 'Homer Simpson'
    }, {
      quote: 'Beer: The cause of, and solution to, all of life\'s problems.',
      author: 'Homer Simpson'
    }, {
      quote: 'If something\'s hard to do, then it\'s not worth doing.',
      author: 'Homer Simpson'
    }, {
      quote: 'I\'m in no condition to drive... wait! I shouldn\'t listen to myself, I\'m drunk!',
      author: 'Homer Simpson'
    }, {
      quote: 'To Start Press Any Key\'. Where\'s the ANY key? ',
      author: 'Homer Simpson'
    }, {
      quote: 'I am the lizard queen!',
      author: 'Lisa Simpson'
    }, {
      quote: 'If cartoons were meant for adults, they\'d put them on in prime time.',
      author: 'Lisa Simpson'
    }, {
      quote: 'Prayer. The last refuge of a scoundrel.',
      author: 'Lisa Simpson'
    }, {
      quote: 'We’re simple people with simple values. Capitol City is too big, too complex. Everyone in Springfield knows us. And has forgiven us.',
      author: 'Lisa Simpson'
    }, {
      quote: 'Why do I get the feeling that someday I’ll be describing this to a psychiatrist?',
      author: 'Lisa Simpson'
    }, {
      quote: 'All the years I’ve wanted to be treated like an adult have blown up in my face.',
      author: 'Lisa Simpson'
    }, {
      quote: 'So we’ll march day and night by the big cooling tower. They have the plants but we have the power.',
      author: 'Lisa Simpson'
    }, {
      quote: 'Mom, romance is dead. It was acquired in a hostile takeover by Hallmark and Disney, homogenized, and sold off piece by piece.',
      author: 'Lisa Simpson'
    }, {
      quote: 'Shut up, brain! I’ve got friends now. I don’t need you anymore.',
      author: 'Lisa Simpson'
    }, {
      quote: 'But you know Bart, some philosophers believe that nobody is born with a soul. That you have to earn one through suffering and thought and prayer. Like you did last night.',
      author: 'Lisa Simpson'
    }, {
      quote: 'I don’t get. Straight A’s, perfect attendance, bathroom timer. I should be the most popular girl in school.',
      author: 'Lisa Simpson'
    }, {
      quote: 'Wait. One of them is nailing something to the door of the cathedral. I’ve created Lutherans!',
      author: 'Lisa Simpson'
    }, {
      quote: 'Stupid bus that can’t even go to the stupid place it’s supposed to stupid go.',
      author: 'Lisa Simpson'
    }, {
      quote: 'Dad, women won’t like being shot in the face.',
      author: 'Lisa Simpson'
    }, {
      quote: 'What do aliens have to do with Halloween?',
      author: 'Lisa Simpson'
    }, {
      quote: 'Wow, it’s got every Nancy Drew. Even the controversial Clue in the Clock. Tsk tsk tsk. So many swears.',
      author: 'Lisa Simpson'
    }, {
      quote: 'Stupid selfish Bart. Like he’s ever gonna do another nice thing for me. Oh! He’s building a me! Well, I mean it’s a little American Primitive, but who am I to dismiss outsider art.',
      author: 'Lisa Simpson'
    }, {
      quote: 'I learned that beneath my goody two shoes lies some very dark socks.',
      author: 'Lisa Simpson'
    }, {
      quote: 'Arrrrrrrrrrr my hairstyle',
      author: 'Marge Simpson'
    }, {
      quote: 'Time for a head count pointy, pointy, spiky, stylist arrrrrrrr where\'s baldy',
      author: 'Marge Simpson'
    }, {
      quote: 'I\'m sleeping in the bath tub ',
      author: 'Marge Simpson'
    }, {
      quote: 'This family has had its differences and we’ve squabbled, but we’ve never had knife fights before. And I blame this house.',
      author: 'Marge Simpson'
    }, {
      quote: 'For a superior race, they really rub it in.',
      author: 'Marge Simpson'
    }, {
      quote: 'Lisa, you’re learning many lessons tonight. And one of them is to always give your mother the benefit of the doubt.',
      author: 'Marge Simpson'
    }, {
      quote: 'I guess one person can make a difference. But most of the time, they probably shouldn’t.',
      author: 'Marge Simpson'
    }, {
      quote: 'Bart! You’re no longer in Sunday School. Don’t swear.',
      author: 'Marge Simpson'
    }, {
      quote: 'Homer, there’s something I don’t like about that severed hand.',
      author: 'Marge Simpson'
    }, {
      quote: 'Hello, room service? This is Marge Simpson. I’d like a hot fudge sundae. With whipped cream. And some chocolate chip cheesecake. And a bottle of tequila!',
      author: 'Marge Simpson'
    }, {
      quote: '“Third notice.” “Final notice.” “Some guys are coming.”',
      author: 'Marge Simpson'
    }, {
      quote: 'Bart! Stop pestering Satan.',
      author: 'Marge Simpson'
    }, {
      quote: 'Homer, we have to do something. Today he’s drinking people’s blood. Tomorrow he could be smoking.',
      author: 'Marge Simpson'
    }, {
      quote: 'Maybe we should spend more time with Bart. He’s becoming isolated and weird.',
      author: 'Marge Simpson'
    }, {
      quote: 'I want us to deal with the issues raised by this book. {Homer seems thoughtful, then tosses it into the fire}. I knew we shouldn’t have put a fireplace in the bedroom.',
      author: 'Marge Simpson'
    }, {
      quote: 'Homer don’t start stalking people again! It’s so… illegal.',
      author: 'Marge Simpson'
    }, {
      quote: 'You went into the attic? I’m very disappointed and terrified.',
      author: 'Marge Simpson'
    }, {
      quote: 'Listen to your mother, kids. Aim low. Aim so low no one will even care if you succeed. Dinner’s in the oven. If you want some butter it’s under my face.',
      author: 'Marge Simpson'
    }, {
      quote: 'Lisa, I made you some homemade Pepsi for the dance. It’s a little thick, but the price is right!',
      author: 'Marge Simpson'
    }, {
      quote: 'I brought you a tuna sandwich. They say it’s brain food. I guess because there’s so much dolphin in there.',
      author: 'Marge Simpson'
    }, {
      quote: 'Only your father could take a part-time job at a small town paper and wind up the target of international assassins.',
      author: 'Marge Simpson'
    }, {
      quote: 'Homer, these people are professional roasters. Don’t give them fodder.',
      author: 'Marge Simpson'
    }, {
      quote: 'Can’t beat a skybox. All the excitement of being in the sky with the security of being in a box.',
      author: 'Marge Simpson'
    }, {
      quote: 'We are not staying at Moe’s! Maggie’s already drunk on the fumes. And she’s a mean drunk.',
      author: 'Marge Simpson'
    }, {
      quote: 'These are Homer’s friends and family. They don’t want him dead. They just want him to suffer.',
      author: 'Marge Simpson'
    }, {
      quote: 'I didn’t sacrifice my period for second place!',
      author: 'Marge Simpson'
    }, {
      quote: 'I really shouldn’t be here. I have a problem with games of chance. I played Candyland with Maggie and ended up throwing vodka in her face.',
      author: 'Marge Simpson'
    }, {
      quote: 'Honey, you could be popular. You’ve just got to be yourself. In a whole new way.',
      author: 'Marge Simpson'
    }, {
      quote: 'I guess it’s just to much for me to ask for one vacation where we don’t go to jail or to a condo sales pitch.',
      author: 'Marge Simpson'
    }, {
      quote: 'Bart, don’t make fun of grad students. They just made a terrible life choice.',
      author: 'Marge Simpson'
    }, {
      quote: 'Homer, you’ve been out all night. And you look like you’ve accepted someone as your personal something.',
      author: 'Marge Simpson'
    }, {
      quote: 'Oh boy, I’m beat. If you want to return a melon to the grocery store, clear your day.',
      author: 'Marge Simpson'
    }, {
      quote: 'And all this time I thought “Googling yourself” meant the other thing.',
      author: 'Marge Simpson'
    }, {
      quote: 'If someone did eat Bart’s shorts they’d have a tummy-full of pocket garbage.',
      author: 'Marge Simpson'
    }, {
      quote: 'I don\'t deserve this kind of shabby treatment! *buzz* ',
      author: 'Moe Szyslak'
    }, {
      quote: 'Hello Moe\'s, home of the largest small screen T.V.',
      author: 'Moe Szyslak'
    }, {
      quote: 'When I catch you, I\'m gonna pull out your eyes and stick \'em down your pants so you can watch me kick the crap outta you okay? Next I\'m gonna use your tongue to paint my boat!',
      author: 'Moe Szyslak'
    }, {
      quote: 'Well, I\'m better than dirt. Well, most kinds of dirt. I mean not that fancy store bought dirt. That stuffs loaded with nutrients. I... I can\'t compete with that stuff.',
      author: 'Moe Szyslak'
    }, {
      quote: 'Four guys, a chick and a noose. Just like the kind of movies I like.',
      author: 'Moe Szyslak'
    }, {
      quote: 'I love Valentines Day. Just mix a couple of drops of Jagermeister with some pink lemonade, add some cherry chapstick, call it Cupid\'s Ambrosia and charge it up the wazoo. ',
      author: 'Moe Szyslak'
    }, {
      quote: 'I\'m better than dirt. Well, most kinds of dirt, not that fancy store-bought dirt... I can\'t compete with that stuff. ',
      author: 'Moe Szyslak'
    }, {
      quote: 'Man, you go through life, you try to be nice to people, you struggle to resist the urge to punch \'em in the face, and for what? ',
      author: 'Moe Szyslak'
    }, {
      quote: 'They think they\'re so high and mighty, just because they never got caught driving without pants.',
      author: 'Moe Szyslak'
    }, {
      quote: 'Call this an unfair generalization if you must, but old people are no good at everything. ',
      author: 'Moe Szyslak'
    }, {
      quote: 'Fun\'s over, fellas! If you\'re gonna beat up my friend in my bar, there\'s a two-drink minimum.',
      author: 'Moe Szyslak'
    }, {
      quote: 'Hey, Homer came up with the drink, but I came up with the idea of charging $6.95 for it. ',
      author: 'Moe Szyslak'
    }, {
      quote: 'People today are healthier and drinking less. You know, if it wasn\'t for the junior high school next door, no one would even use the cigarette machine. ',
      author: 'Moe Szyslak'
    }, {
      quote: 'Thanks, guys, for getting me this job after destroying my bar. I\'ll never forget or forgive what you did for and to me. So thanks a lot. Also, thanks a lot! ',
      author: 'Moe Szyslak'
    }, {
      quote: 'Ooh, you have clear water! Swanky!',
      author: 'Moe Szyslak'
    }, {
      quote: 'Here I am all depressed, when I\'m surrounded by the happiest people in the world, writers. ',
      author: 'Moe Szyslak'
    }, {
      quote: 'Take a break from your dreary lives and listen to Americans lecture you. ',
      author: 'Moe Szyslak'
    }, {
      quote: 'They love me for my bile, and I\'ve got a spleen full. ',
      author: 'Moe Szyslak'
    }, {
      quote: 'All right, I guess I might as well come clean. I\'m not real good with women, and I really wanted to do ya, so I brought along the love tester to help me. As you may have guessed, it\'s possessed by the dead spirit of my best friend\'s father. ',
      author: 'Moe Szyslak'
    }, {
      quote: 'My mother\'s wedding ring. She gave it to me in her death bed. She also acquired it in her death bed. That was a very busy death bed. ',
      author: 'Moe Szyslak'
    }, {
      quote: 'A little more hemoglobin, and your wife will be disrobin\'',
      author: 'Moe Szyslak'
    }, {
      quote: 'It\'s like my dad always said: eventually, everybody gets shot. ',
      author: 'Moe Szyslak'
    }, {
      quote: 'Enough chit-chat, let\'s see how you like flaming garbage! ',
      author: 'Moe Szyslak'
    }, {
      quote: 'Homer\'s right! We\'re gettin\' the Joan Collins special! ',
      author: 'Moe Szyslak'
    }, {
      quote: '"Hello Smithers. You\'re quite good at turning me on!" ',
      author: 'Mr. Burns'
    }, {
      quote: 'My country \'tis of thee, Austria-Hungary, obey your king.',
      author: 'Mr. Burns'
    }, {
      quote: 'I’ll keep it short and sweet - Family. Religion. Friendship. These are the three demons you must slay if you wish to succeed in business.',
      author: 'Mr. Burns'
    }, {
      quote: 'My name Oatmeal?',
      author: 'Mr. Burns'
    }, {
      quote: 'My nine all-stars fall victim to nine separate misfortunes and are unable to play tomorrow. But that will never happen. Three misfortunes, that\'s possible. Seven misfortunes, there\'s an outside chance. But nine misfortunes? I\'d like to see that',
      author: 'Mr. Burns'
    }, {
      quote: 'Good bye, insufficiently cruel world!',
      author: 'Mr. Burns'
    }, {
      quote: 'Whoop-de-do, Tarantula Town!',
      author: 'Mr. Burns'
    }, {
      quote: 'So, Smithers, what are you doing this weekend. Something gay, I expect?',
      author: 'Mr. Burns'
    }, {
      quote: 'Release the Hounds!',
      author: 'Mr. Burns'
    }, {
      quote: '(after you avoid Mr. Burns while chasing you) Steal my passengers, will you? We\'ll see about that! ',
      author: 'Mr. Burns'
    }, {
      quote: 'Steal any of my passengers and you\'ll pay for it my friend! You\'ll pay dearly! ',
      author: 'Mr. Burns'
    }, {
      quote: 'Another defiant motorist? You\'ll soon learn your lesson friend! ',
      author: 'Mr. Burns'
    }, {
      quote: 'Another driver on the road? Blast your hide to Hades you meddling fool! ',
      author: 'Mr. Burns'
    }, {
      quote: 'Well thank you very much Mr. \'I\'m too good to ride the bus\'! I hope you asphyxiate on your exhaust fumes and die a horrible death!',
      author: 'Mr. Burns'
    }, {
      quote: 'A shiny new donkey to the man who brings me the head of Homer Simpson! ',
      author: 'Mr. Burns'
    }, {
      quote: 'Soapbox racers, electric cars. This is a transit town! Not the 1967 World\'s Fair! ',
      author: 'Mr. Burns'
    }, {
      quote: 'You\'ll rue the day you crossed C. Montgomery Burns! ',
      author: 'Mr. Burns'
    }, {
      quote: 'Let the fools have their automobiles, I say! ',
      author: 'Mr. Burns'
    }, {
      quote: 'I\'ve seen circus chimps who drive faster than you do! ',
      author: 'Mr. Burns'
    }, {
      quote: '(after ramming the player) I haven\'t had this much pep since the night I cold-called Calvin Coolidge! ',
      author: 'Mr. Burns'
    }, {
      quote: 'Smithers! Sound the alarm! Summon the shire-reeve! Wake the beadle! ',
      author: 'Mr. Burns'
    }, {
      quote: 'Donuts? I told you I don\'t like ethnic food! ',
      author: 'Mr. Burns'
    }, {
      quote: 'Since the beginning of time, man has yearned to destroy the sun. I shall do the next best thing: block it out.',
      author: 'Mr. Burns'
    }, {
      quote: 'Oh, so mother nature needs a favor? Well, maybe she should have thought of that when she was besetting us with droughts and floods and poison monkeys. ',
      author: 'Mr. Burns'
    }, {
      quote: 'Smithers, for attempting to kill me, I\'m giving you a five percent pay cut.',
      author: 'Mr. Burns'
    }, {
      quote: 'Smithers had thwarted my earlier attempt to take candy from a baby, but with him out of the picture, I was free to wallow in my own crapulence. ',
      author: 'Mr. Burns'
    }, {
      quote: 'A lifetime of working with nuclear power has left me with a healthy green glow... and left me as impotent as a Nevada boxing commissioner.',
      author: 'Mr. Burns'
    }, {
      quote: 'Damn it, Smithers! This isn\'t rocket science, it\'s brain surgery!',
      author: 'Mr. Burns'
    }, {
      quote: 'That\'s odd. Usually the blood gets off at the second floor.',
      author: 'Mr. Burns'
    }, {
      quote: 'Smithers, this monkey is going to need most of your skin.',
      author: 'Mr. Burns'
    }, {
      quote: 'I could crush him like an ant, but it would be too easy. No, revenge is a dish best served cold. I\'ll bide my time until... oh, what the hell, I\'ll just crush him like an ant.',
      author: 'Mr. Burns'
    }, {
      quote: 'Smithers, you could learn a thing or two from this braying moron.',
      author: 'Mr. Burns'
    }, {
      quote: 'I can\'t be responsible for what my goons are ordered to do.',
      author: 'Mr. Burns'
    }, {
      quote: 'Congratulations, I dub thee king of the morons, also known as supervisor for sector 7-G. ',
      author: 'Mr. Burns'
    }, {
      quote: 'Eternal happiness for one dollar? I\'d be happier with the dollar. ',
      author: 'Mr. Burns'
    }, {
      quote: 'What are you doing, Godfrey? You\'re a villain, not a bullet-brained rail-splitter! ',
      author: 'Mr. Burns'
    }, {
      quote: 'Do a little dance while wearing no clothes. Bad grammar. Good advice. ',
      author: 'Mr. Burns'
    }, {
      quote: 'I love children, particularly their young supple organs. ',
      author: 'Mr. Burns'
    }, {
      quote: 'My first job! Tonight, I\'m having peanut butter *and* jelly. No more PB or J for me. ',
      author: ' Nelson Muntz'
    }, {
      quote: 'Yeah, I\'ve been held back more times than I can count, which is probably why I got held back so many times. ',
      author: ' Nelson Muntz'
    }, {
      quote: 'Running away rules! ',
      author: ' Nelson Muntz'
    }, {
      quote: 'I like to sit up here and make fun of the sunset. Hey, gas ball! You suck! ',
      author: ' Nelson Muntz'
    }, {
      quote: 'Haw-haw! I touched your heart! ',
      author: ' Nelson Muntz'
    }, {
      quote: 'Haw haw, your position has been usurped. ',
      author: ' Nelson Muntz'
    }, {
      quote: 'Dad didn\'t leave... he went to the store, and when he comes back I\'ll wave those Pop Tarts right in your face! ',
      author: ' Nelson Muntz'
    }, {
      quote: 'Hey, I\'m on TV. Fart. ',
      author: ' Nelson Muntz'
    }, {
      quote: 'You wrecked Hitler\'s car! What\'d he ever do to you? ',
      author: ' Nelson Muntz'
    }, {
      quote: 'Shoplifting is victimless crime. Like punching someone in the dark. ',
      author: ' Nelson Muntz'
    }, {
      quote: 'Chew through my ball sack.',
      author: 'Principal Skinner'
    }, {
      quote: 'Justice is not a frivolous thing, Simpson. It has little, if anything, to do with a disobedient whale. Now let\'s vote. ',
      author: 'Principal Skinner'
    }, {
      quote: 'Order! Order! Do you kids wanna be like the real U.N., or do you just wanna squabble and waste time? ',
      author: 'Principal Skinner'
    }, {
      quote: 'Okay, kids. Otto\'s in charge! Remember, Otto. We\'re trusting you with our greatest natural resource... the school bus.',
      author: 'Principal Skinner'
    }, {
      quote: 'Fire can be our friend; whether it\'s toasting marshmellows, or raining down on Charlie.',
      author: 'Principal Skinner'
    }, {
      quote: 'Curse the man who invented helium! Curse Pierre Jules Cesar Janssen! ',
      author: 'Principal Skinner'
    }, {
      quote: 'Hello, Edna. I know we had dinner plans tonight, but instead I\'m leaving town forever. ',
      author: 'Principal Skinner'
    }, {
      quote: 'Hello, Simpson. I\'m riding the bus today because Mother hid my car keys to punish me for talking to a woman on the phone. She was right to do it. ',
      author: 'Principal Skinner'
    }, {
      quote: 'Now, I\'ve got the word that a child is using his imagination and I\'ve come to put a stop to it. ',
      author: 'Principal Skinner'
    }, {
      quote: 'Young man, I\'m going to be on you like a numerator on a denominator. ',
      author: 'Principal Skinner'
    }, {
      quote: 'You\'re like egg salad at a picnic, Bart Simpson. Even when you look good, you know you\'re going bad. ',
      author: 'Principal Skinner'
    }, {
      quote: 'I have broken a ten-year-old\'s spirit. Time to reward myself with a fruit-on-the-bottom yogurt. Plain, plain, plain, plain... ooh, fruit. ',
      author: 'Principal Skinner'
    }, {
      quote: 'Children, I couldn\'t help monitoring your conversation. There\'s no mystery about Willy. Why, he simply disappeared. Now, let\'s have no more curiosity about this bizarre cover-up. ',
      author: 'Principal Skinner'
    }, {
      quote: 'You can\'t hide from me. I\'m a very patient man. I once waited an hour and a half for a haircut.',
      author: 'Principal Skinner'
    }, {
      quote: 'I\'m going to enjoy devouring you, Bart Simpson. Yes... I believe I\'ll start, as you\'ve so often suggested, by eating your shorts. ',
      author: 'Principal Skinner'
    }, {
      quote: 'Principal Seymour Skinner: Due to education cutbacks, the following presidents will not be taught: Buchanan, Pierce, Carter, Bush, Bush... ',
      author: 'Principal Skinner'
    }, {
      quote: '(Bart is creating a diversion) Bart, stop creating a diversion and get out of here! ',
      author: 'Principal Skinner'
    }, {
      quote: 'Bart, you\'ve told the truth, and you shall be rewarded... with a severe punishment. ',
      author: 'Principal Skinner'
    }, {
      quote: 'Uh-oh looks like one of my former students on a quest for truth. ',
      author: 'Principal Skinner'
    }, {
      quote: 'Now I\'m going to sit under that tree and think about all the women I could\'ve talked to but didn\'t. ',
      author: 'Principal Skinner'
    }, {
      quote: 'Gentlemen, according to my sources, you are planning to simultaneously drop your pencils at 2: 15 this afternoon.Do so, and you will be suspended.',
      author: 'Principal Skinner'
    }, {
      quote: 'Skate, skate as fast as you can. You can\'t outrun me, I\'m the principal man. That\'s the kind of thing you could be learning right now.',
      author: 'Principal Skinner'
      }, {
      quote: 'Lisa Simpson in detention? My horoscope said I would see something interesting today, but I thought that would be the horoscope itself.',
      author: 'Principal Skinner'
    }, {
      quote: 'Lisa, your outburst was either a sign of deep emotional imbalance, or a passionate response to a sobering truth. Luckily the treatment for both is intensive therapy. ',
      author: 'Principal Skinner'
    }, {
      quote: 'Attempted murder? Now honestly, what is that? Do they give a Nobel Prize for attempted chemistry?',
      author: 'Sideshow Bob'
    }, {
      quote: 'He\'s just a little shy because I\'ve tried to kill him so many times.',
      author: 'Sideshow Bob'
    }, {
      quote: 'Come on, Wikipedia, you unwieldy behemoth!',
      author: 'Sideshow Bob'
    }
    ]

  var content = tmpl(html, {
    data: quotes
  });
  $('body').append(content);

});