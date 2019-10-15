const rohirim = {
    name: "Riders of Rohan",
    img: img_folder + "Riders of Rohan.png",
    moto: "…Where now is the horse and the rider? Where is the horn that was blowing? Where is the helm and the hauberk, and the bright hair flowing?…",
    desc: `The great plains to the north of the realm of Gondor were once
    known as Calenardhon before the Steward Cirion granted
    them to Eorl the Young as a reward for his aid and valour.
    Its borders stretch from the Fords of Isen in the west to
    the Mouths of the Entwash in the east. Rolling hills and
    golden grain fields are broken to the south only by the
    White Mountains where the fortress of Helm’s Deep
    lies, and to the north by the ancient Entwood where
    even the Riders of the Mark do not go.<p>
    Though vast, this realm had been ravaged by
    plague, invasion and internal strife. In time, the
    Horse-lords have driven back marauding Orcs,
    fierce tribes of Easterlings and Dunlendings, and
    have endured cruel winters and fierce famine.
    From the lowliest farmer to the Lord of the Mark,
    the Rohirrim have learnt to show no fear and expect
    no aid from outsiders — life in the Riddermark has
    made them a hardy folk, warlike and proud.<p>
    Now nearly five hundred years have passed
    since the days of Eorl, and his House still rules
    over Rohan from the Golden Hall of Meduseld in
    Edoras. There sits Thengel King, and the Horselords
    are enjoying days of peace, the helms of
    their knights can be seen gleaming in the rising sun as
    they roam the land, on the arched backs of their magnificent
    steeds.`,
    standard_of_living: "Martial",
    blessing: "Fey Mood",
    starting_skill_list: {
        body: {
            Awe: 2,
            Athletics: 3,
            Awareness: 1, 
            Explore: 1, 
            Song: 2, 
            Craft: 1
        },
        heart: {
            Inspire: 2,
            Travel: 2,
            Insight: 2,
            Healing: 0,
            Courtesy: 1,
            Battle: 2
        },
        wits: {
            Persuade: 0,     
            Stealth: 0, 
            Search: 0,
            Hunting: 1, 
            Riddle: 0,
            Lore: 0    
        }        
    },
    favoured_skill: "Awe",
    suggested_callings: ["Slayer", "Wanderer"],
    unusual_calling: ["Treasure-hunter"],
    specialties: ["Beast-lore", "Minstrelsy", "Riddermark-lore", 
                "Horsemanship,", "Story-telling", "Woodwright"],
    backgrounds: {
        1: {
            short_desc: "Outrider",
            desc: `You have never found greater peace than during those times when the wind was whipping about you and your beloved steed was riding hard across the fields of the Riddermark. As a result, you have become an  rider even amongst your peers. You can travel at a swift pace over long distances and without rest and you are often tasked with scouting ahead of a force of Riders and with carrying messages between distant settlements.`,
            Basic_Attributes: {
                Body: 6, Heart: 4, Wits: 4
            },
            favoured_skill: "Travel",
            Distinctive_Features: ["Adventurous,", "Proud,", "Keen-eyed", "Reckless,", "Robust,",
                "Steadfast,", "Stern,", "Swift"]
        },
        2: {
            short_desc: "The Greatest Hunter",
            desc: `You have always been fascinated by the story of King Folca, the slayer of the Great Boar of Everholt. He was killed by the beast, but his glory is still remembered today. You dream of surpassing his deed, and becoming known as the greatest hunter of the Riddermark. Whether you will achieve your ambition by chasing wild beasts or Orcs, you do not know nor care.`,
            Basic_Attributes: {
                Body: 6, Heart: 5, Wits: 3
            },
            favoured_skill: "Hunting",
            Distinctive_Features: ["Curious,", "Fair,", "Forthright,", "Reckless,", "Secretive,",
                "True-Hearted", "Wary,", "Wilful"]
        },
        3: {
            short_desc: "Wandering Outcast",
            desc: `Whether by brutal truth or twisted falsehood, your father was branded a liar and an oath-breaker, and you and your family were cast from your village for his crimes. The Golden Hall is a place you have only ever seen from afar and you have never heard the minstrels sing the songs of your ancestors. You drifted between the hills and fields of grain, shying away from the gaze of farmers and wanderers, and have learnt not to leave traces or signs of your passage.`,
            Basic_Attributes: {
                Body: 7, Heart: 5, Wits: 2
            },
            favoured_skill: "Stealth",
            Distinctive_Features: ["Fierce", "Grim", "Proud", "Reckless", "Secretive",
                "Vengeful", "Wary", "Wrathful"]
        },
        4: {
            short_desc: "Minstrel of the Golden Hall",
            desc: `The history of Rohan is not written in any book or tome. Instead it is secreted in the verses of those songs you were taught by your mother and father. You have sung for the living and the dead, and your voice has filled even the Golden Hall of Meduseld. But new deeds worthy of song occur each day as a darkness gathers and you would be there to witness them first-hand and weave them into legend.`,
            Basic_Attributes: {
                Body: 5, Heart: 5, Wits: 4
            },
            favoured_skill: "Song",
            Distinctive_Features: ["Adventurous", "Bold", "Fair", "Forthright", "Reckless",
                "Robust", "Stern", "True-Hearted"]
        },
        5: {
            short_desc: "Fey and Dangerous",
            desc: `It is said that a battle-fury comes upon the warriors of the Mark that makes them fierce and fell beyond the valour of other men. You yearn to feel that fey mood overtake you, and gain renown slaying those who threaten your beloved homeland. You do not fear death, for you know that for all heroes of the Mark the end will come only when songs no longer fill the halls of Edoras.`,
            Basic_Attributes: {
                Body: 7, Heart: 4, Wits: 3
            },
            favoured_skill: "Battle",
            Distinctive_Features: ["Bold", "Fierce", "Generous", "Reckless", "Tall",
                "Swift", "Vengeful", "Wrathful"]
        },
        6: {
            short_desc: "Grandson of the Doorward",
            desc: `Your grandfather’s duty was to guard over the gates of Fengel King, and to question everyone who would come and seek admittance to his hall. His was a position of great importance, as it was his own responsibility to judge whoever came to see the King, and he often had to trust to his own wisdom. From him you have learned that a man of worth must be able to perceive a man’s purpose, even when it is hidden behind a veil of crooked words.`,
            Basic_Attributes: {
                Body: 6, Heart: 6, Wits: 2
            },
            favoured_skill: "Insight",
            Distinctive_Features: ["Curious", "Generous", "Grim", "Keen-eyed", "Reckless",
                "Steadfast", "Tall", "Wilful"]
        }
    }
}