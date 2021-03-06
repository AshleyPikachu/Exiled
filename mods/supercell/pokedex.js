'use strict';

exports.BattlePokedex = {
    barbarian: {
        species: "Barbarian",
        num: -200,
        types: ['Normal'],
        baseStats: {
            hp: 80,
            atk: 110,
            def: 80,
            spa: 50,
            spd: 80,
            spe: 90
        },
        abilities: {
            0: "Adaptability"
        },
        heightm: 1.2,
        weightkg: 38,
    },
    archer: {
        species: "Archer",
        num: -201,
        types: ['Normal'],
        baseStats: {
            hp: 50,
            atk: 40,
            def: 50,
            spa: 105,
            spd: 50,
            spe: 110
        },
        abilities: {
            0: "Sharpshooter"
        },
        heightm: 1.2,
        weightkg: 6.3,
    },
    goblin: {
        species: "Goblin",
        num: -202,
        types: ['Bug'],
        baseStats: {
            hp: 40,
            atk: 80,
            def: 20,
            spa: 40,
            spd: 20,
            spe: 145
        },
        abilities: {
            0: "Theft"
        },
        heightm: 0.6,
        weightkg: 4.2,
    },
    regulargiant: {
        species: "Regular Giant",
        num: -203,
        types: ['Fighting'],
        baseStats: {
            hp: 125,
            atk: 80,
            def: 80,
            spa: 40,
            spd: 80,
            spe: 5
        },
        abilities: {
            0: "Meatshield"
        },
        heightm: 5.7,
        weightkg: 120.0,
    },
    wizard: {
        species: "Wizard",
        num: -204,
        types: ['Psychic'],
        baseStats: {
            hp: 70,
            atk: 40,
            def: 60,
            spa: 125,
            spd: 100,
            spe: 135
        },
        abilities: {
            0: "Wizardry"
        },
        heightm: 1.6,
        weightkg: 6.4,
    },
    balloon: {
        species: "Balloon",
        num: -205,
        types: ['Dark', 'Flying'],
        baseStats: {
            hp: 115,
            atk: 90,
            def: 80,
            spa: 60,
            spd: 80,
            spe: 25
        },
        abilities: {
            0: "I Gotz a Bomb"
        },
        heightm: 4.8,
        weightkg: 0.8,
    },
    minion: {
        species: "Minion",
        num: -206,
        types: ['Dark', 'Flying'],
        baseStats: {
            hp: 50,
            atk: 40,
            def: 50,
            spa: 105,
            spd: 50,
            spe: 145
        },
        abilities: {
            0: "Mayhem"
        },
        heightm: 0.8,
        weightkg: 1.2,
    },
    hogrider: {
        species: "Hog Rider",
        num: -207,
        types: ['Ground', 'Fighting'],
        baseStats: {
            hp: 80,
            atk: 120,
            def: 80,
            spa: 40,
            spd: 60,
            spe: 130
        },
        abilities: {
            0: "HOG RIDDAH"
        },
        heightm: 3.7,
        weightkg: 32.6,
    },
    witch: {
        species: "Witch",
        num: -208,
        types: ['Ghost', 'Psychic'],
        baseStats: {
            hp: 105,
            atk: 40,
            def: 60,
            spa: 70,
            spd: 110,
            spe: 45
        },
        abilities: {
            0: "Witchcraft"
        },
        heightm: 2.2,
        weightkg: 8.7,
    },
    lavahound: {
        num: -209,
        species: "Lava Hound",
        types: ["Fire", "Flying"],
        baseStats: {
            hp: 95,
            atk: 70,
            def: 95,
            spa: 80,
            spd: 95,
            spe: 40
        },
        abilities: {
            0: "Burnout"
        },
        heightm: 4.8,
        weightkg: 46.8,
    },
    lavapup: {
        num: -209,
        species: "Lava Pup",
        types: ["Fire", "Flying"],
        baseStats: {
            hp: 25,
            atk: 30,
            def: 20,
            spa: 60,
            spd: 20,
            spe: 105
        },
        abilities: {
            0: "Burnout"
        },
        heightm: 0.2,
        weightkg: 0.1,
    },
    pekka: {
        num: -210,
        species: "PEKKA",
        types: ["Steel", "Dark"],
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 40,
            spd: 60,
            spe: 5
        },
        abilities: {
            0: "Masked Warrior"
        },
        heightm: 6.7,
        weightkg: 253.8,
    },
    healer: {
        num: -211,
        species: "Healer",
        types: ["Fairy", "Flying"],
        baseStats: {
            hp: 120,
            atk: 30,
            def: 110,
            spa: 45,
            spd: 110,
            spe: 50
        },
        abilities: {
            0: "Pixie Aroma"
        },
        heightm: 2.8,
        weightkg: 6.6,
    },
    dragon: {
        num: -212,
        species: "Dragon",
        types: ["Dragon", "Flying"],
        baseStats: {
            hp: 90,
            atk: 80,
            def: 80,
            spa: 135,
            spd: 80,
            spe: 120
        },
        abilities: {
            0: "Parental Guidance"
        },
        heightm: 8.9,
        weightkg: 40.5,
    },
    babydragon: {
        num: -213,
        species: "Baby Dragon",
        types: ["Dragon", "Flying"],
        baseStats: {
            hp: 120,
            atk: 70,
            def: 90,
            spa: 90,
            spd: 90,
            spe: 60
        },
        abilities: {
            0: "Parental Guidance"
        },
        heightm: 4.5,
        weightkg: 20.3,
    },
    princess: {
        num: -214,
        species: "Princess",
        types: ["Fairy"],
        baseStats: {
            hp: 50,
            atk: 20,
            def: 45,
            spa: 125,
            spd: 45,
            spe: 120
        },
        abilities: {
            0: "Ranged Sniper"
        },
        heightm: 0.7,
        weightkg: 0.7,
    },
    giantskeleton: {
        num: -215,
        species: "Giant Skeleton",
        types: ["Dark", "Fighting"],
        baseStats: {
            hp: 135,
            atk: 85,
            def: 85,
            spa: 45,
            spd: 85,
            spe: 45
        },
        abilities: {
            0: "Giant Bomb"
        },
        heightm: 7.6,
        weightkg: 137.6,
    },
    speargoblin: {
        num: -216,
        species: "Spear Goblin",
        types: ["Bug", "Fighting"],
        baseStats: {
            hp: 60,
            atk: 90,
            def: 60,
            spa: 40,
            spd: 60,
            spe: 145
        },
        abilities: {
            0: "Spear Link"
        },
        heightm: 1.2,
        weightkg: 8.2,
    },
    miner: {
        num: -217,
        species: "Miner",
        types: ["Ground"],
        baseStats: {
            hp: 95,
            atk: 105,
            def: 95,
            spa: 45,
            spd: 85,
            spe: 95
        },
        abilities: {
            0: "Minefield"
        },
        heightm: 1.7,
        weightkg: 23.8,
    },
    sparky: {
        num: -218,
        species: "Sparky",
        types: ["Electric"],
        baseStats: {
            hp: 105,
            atk: 150,
            def: 95,
            spa: 150,
            spd: 90,
            spe: 5
        },
        abilities: {
            0: "Power Cooldown"
        },
        heightm: 2.6,
        weightkg: 163.5,
    },
    icewizard: {
        num: -219,
        species: "Ice Wizard",
        types: ["Ice", "Psychic"],
        baseStats: {
            hp: 75,
            atk: 45,
            def: 75,
            spa: 135,
            spd: 85,
            spe: 125
        },
        abilities: {
            0: "Glacier Wizardry"
        },
        heightm: 1.6,
        weightkg: 6.4,
    },
    knight: {
        num: -220,
        species: "Knight",
        types: ["Normal"],
        baseStats: {
            hp: 80,
            atk: 95,
            def: 65,
            spa: 30,
            spd: 55,
            spe: 60
        },
        abilities: {
            0: "Knightly Honor"
        },
        heightm: 1.6,
        weightkg: 6.8,
    },
    lumberjack: {
        num: -221,
        species: "Lumberjack",
        types: ["Grass", "Fighting"],
        baseStats: {
            hp: 115,
            atk: 105,
            def: 95,
            spa: 45,
            spd: 50,
            spe: 45
        },
        abilities: {
            0: "Timber"
        },
        heightm: 4.7,
        weightkg: 17.4,
    },
    electrowizard: {
        num: -222,
        species: "Electro Wizard",
        types: ["Electric", "Psychic"],
        baseStats: {
            hp: 95,
            atk: 65,
            def: 95,
            spa: 125,
            spd: 115,
            spe: 135
        },
        abilities: {
            0: "Zap Wizardry"
        },
        heightm: 2.5,
        weightkg: 6.6,
    },
    skeleton: {
        num: -223,
        species: "Skeleton",
        types: ["Ghost", "Normal"],
        baseStats: {
            hp: 25,
            atk: 60,
            def: 20,
            spa: 40,
            spd: 20,
            spe: 105
        },
        abilities: {
            0: "Graveyard"
        },
        heightm: 0.2,
        weightkg: 0.1,
    },
    executioner: {
        num: -224,
        species: "Executioner",
        types: ["Dark", "Ghost"],
        baseStats: {
            hp: 85,
            atk: 100,
            def: 65,
            spa: 40,
            spd: 65,
            spe: 45
        },
        abilities: {
            0: "Fatality"
        },
        heightm: 1.6,
        weightkg: 6.4,
    },
    supercellgolem: {
        num: -225,
        species: "Supercell Golem",
        types: ["Rock", "Ground"],
        baseStats: {
            hp: 150,
            atk: 60,
            def: 140,
            spa: 40,
            spd: 80,
            spe: 5
        },
        abilities: {
            0: "Continental Rock"
        },
        heightm: 6.8,
        weightkg: 227.9,
    },
    firespirits: {
        num: -226,
        species: "Fire Spirits",
        types: ["Fire"],
        baseStats: {
            hp: 20,
            atk: 40,
            def: 10,
            spa: 80,
            spd: 10,
            spe: 155
        },
        abilities: {
            0: "Inferno Blaze"
        },
        heightm: 0.3,
        weightkg: 0.2,
    },
    icespirits: {
        num: -226,
        species: "Ice Spirits",
        types: ["Ice"],
        baseStats: {
            hp: 20,
            atk: 40,
            def: 10,
            spa: 80,
            spd: 10,
            spe: 155
        },
        abilities: {
            0: "Subzero Frost"
        },
        heightm: 0.3,
        weightkg: 0.2,
    },
    guard: {
        num: -227,
        species: "Guard",
        types: ["Steel", "Dark"],
        baseStats: {
            hp: 60,
            atk: 85,
            def: 65,
            spa: 45,
            spd: 65,
            spe: 95
        },
        abilities: {
            0: "Steel Enforced Shield"
        },
        heightm: 0.9,
        weightkg: 0.6,
    },
    royalgiant: {
        num: -228,
        species: "Royal Giant",
        types: ["Fighting"],
        baseStats: {
            hp: 115,
            atk: 125,
            def: 120,
            spa: 45,
            spd: 65,
            spe: 55
        },
        abilities: {
            0: "Cannonball"
        },
        heightm: 7.7,
        weightkg: 128.9,
    },
    prince: {
        num: -229,
        species: "Prince",
        types: ["Normal", "Fighting"],
        baseStats: {
            hp: 95,
            atk: 145,
            def: 90,
            spa: 40,
            spd: 65,
            spe: 115
        },
        abilities: {
            0: "Ye Royale Joust"
        },
        heightm: 1.3,
        weightkg: 8.7,
    },
    wallbreaker: {
        num: -230,
        species: "Wallbreaker",
        types: ["Ghost", "Dark"],
        baseStats: {
            hp: 35,
            atk: 145,
            def: 20,
            spa: 10,
            spd: 20,
            spe: 155
        },
        abilities: {
            0: "Allahu Akbar"
        },
        heightm: 0.6,
        weightkg: 2.2,
    },
    valkyrie: {
        num: -231,
        species: "Valkyrie",
        types: ["Fighting"],
        baseStats: {
            hp: 85,
            atk: 95,
            def: 90,
            spa: 45,
            spd: 85,
            spe: 60
        },
        abilities: {
            0: "Bravery"
        },
        heightm: 2.4,
        weightkg: 8.7,
    },
};
