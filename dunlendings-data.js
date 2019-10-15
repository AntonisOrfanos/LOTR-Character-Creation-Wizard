const dunlendings = {
    name: "Dunlendings",
    img: img_folder + "Dunlendings.png",
    moto: "…in the hills of Dunland a remnant lingered of an old people…",
    desc: `The wild folk dwelling in the misty fells of Dunland and to 
    the south of the river Isen have many enemies. Since centuries uncounted 
    they have been hunted, betrayed and despoiled, until the coming
    of the accursed Strawheads, horsemen from the North
    who drove them forth from their homes on the plains of
    Calenardhon some five hundred years ago.<p>
    But the passing of the centuries have erased the usurpers’
    memory of the wrong they suffered and left no trace of their
    claims. To everyone, including many among the Wise, the
    Dunlendings are just a dwindling folk of sullen herders and
    hunters, hating the Free Peoples of Middle-earth and holding
    onto long-forgotten grudges. Even so, they endure. Out of
    respect of their noble forefathers and the sorrow they went
    through, the hillmen of Dunland choose not to forget.<p>
    For the hillmen of Dunland are not a lowly folk of poor
    herders and hunters to be looked down upon, but many
    diverse clans united by ancient bonds of kinship. Most
    currently dwell within or close to the western slopes of
    the Misty Mountains, but their ancestors ruled over a
    wide land west and east of the mountain range, and
    many can be still found within the boundaries of the
    Mark of the Riders.<p>
    Saruman, the White Wizard, currently lives in the tower
    of Orthanc, north of the Gap of Rohan. He is known
    to welcome those hillmen who wish to return to live in
    Isengard, where the Dunlendings long dwelt. Whether he
    will remain a friend to the Dunlendings or he will prove
    to be no better than any other lord is a matter yet to be
    settled…`,
    standard_of_living: "Frugal",
    blessing: "Fierce Folk",
    starting_skill_list: {
        body: {
            Awe: 1,
            Athletics: 2,
            Awareness: 2, 
            Explore: 2, 
            Song: 0, 
            Craft: 1
        },
        heart: {
            Inspire: 0,
            Travel: 1,
            Insight: 2,
            Healing: 0,
            Courtesy: 0,
            Battle: 1
        },
        wits: {
            Persuade: 0,     
            Stealth: 2, 
            Search: 1,
            Hunting: 3, 
            Riddle: 2,
            Lore: 0    
        }
    },
    favoured_skill: "Hunting",
    suggested_callings: ["Slayer", "Treasure-hunter"],
    unusual_calling: ["Scholar"],
    specialties: ["Beast-lore", "Fire-making", "Herb-lore", 
                "Misty Mountains Lore", "Story-telling", "Tracking"],
    backgrounds: {
        1: {
            short_desc: "Forest Dweller",
            Basic_Attributes: {
                Body: 3, Heart: 3, Wits: 7
            },
            favoured_skill: "Search",
            Distinctive_Features: ["Bold", "Curious", "Hardy", "Nimble", "Patient",
                "Quick of Hearing", "Wary", "Wild"]
        },
        2: {
            short_desc: "First Among Equals",
            Basic_Attributes: {
                Body: 4, Heart: 4, Wits: 5
            },
            favoured_skill: "Inspire",
            Distinctive_Features: ["Cautious", "Clever", "Hardened", "Hardy", "Swift",
                "Vengeful", "Wild", "Wilful"]
        },
        3: {
            short_desc: "Eye of Isengard",
            Basic_Attributes: {
                Body: 4, Heart: 3, Wits: 6
            },
            favoured_skill: "Lore",
            Distinctive_Features: ["Cunning", "Curious", "Elusive", "Fierce", "Gruff",
                "Secretive", "Wary", "Wild"]
        },
        4: {
            short_desc: "Mountain Savage",
            Basic_Attributes: {
                Body: 4, Heart: 2, Wits: 7
            },
            favoured_skill: "Athletics",
            Distinctive_Features: ["Bold", "Fierce", "Grim", "Hardened", "Suspicious",
                "Vengeful", "Wild", "Wrathful"]
        },
        5: {
            short_desc: "Dwarf Friend",
            Basic_Attributes: {
                Body: 5, Heart: 3, Wits: 5
            },
            favoured_skill: "Craft",
            Distinctive_Features: ["Clever", "Cunning", "Grim", "Nimble", "Quick of Hearing",
                "Secretive", "Wild", "Wrathful"]
        },
        6: {
            short_desc: "Mist Child",
            Basic_Attributes: {
                Body: 5, Heart: 2, Wits: 3
            },
            favoured_skill: "Stealth",
            Distinctive_Features: ["Cautious", "Elusive", "Gruff", "Patient", "Suspicious",
                "Swift", "Wild", "Wilful"]
        }
    }
}