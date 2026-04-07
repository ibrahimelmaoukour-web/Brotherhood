const STAGES = {
    1: { id: 1, name: 'Paleolithic Era', period: '2.5 Ma – 12,000 BCE', icon: '🔥', description: 'Hunter-gatherers master fire, stone tools, bone needles, and the first symbolic art. Every technique invented here becomes the foundation of all civilization.' },
    2: { id: 2, name: 'Neolithic Revolution', period: '12,000 BCE – 4,000 BCE', icon: '🌾', description: 'Humans stop chasing food and start growing it. Settled agriculture, pottery, weaving, and permanent mud-brick villages transform nomadic bands into communities.' },
    3: { id: 3, name: 'Rise of Cities & Bronze Age', period: '4,000 BCE – 1,200 BCE', icon: '🏛️', description: 'Copper and tin are combined to forge bronze — harder than any stone. The wheel is invented, writing is born, cities emerge, and trade networks span continents.' },
    4: { id: 4, name: 'The Classical Age', period: '1,200 BCE – 500 CE', icon: '⚔️', description: 'Iron replaces bronze. Rome builds roads, aqueducts, and concrete that survives 2,000 years. Greek philosophy births science. The foundations of engineering are laid.' },
    5: { id: 5, name: 'Post-Classical & Middle Ages', period: '500 CE – 1,500 CE', icon: '⚙️', description: 'Windmills harness wind, mechanical clocks track time, the compass enables ocean navigation, gunpowder changes warfare, and Gutenberg\'s printing press makes knowledge cheap.' },
    6: { id: 6, name: 'The Industrial Revolution', period: '1,760 CE – 1,840 CE', icon: '🏭', description: 'James Watt\'s steam engine converts heat into mechanical power. Coal drives factories. Bessemer steel revolutionizes construction. Railways connect nations. Faraday discovers electromagnetism.' },
    7: { id: 7, name: 'The Atomic & Space Age', period: '1,945 CE – Present', icon: '🚀', description: 'Fission splits the atom. Transistors shrink computers from rooms to chips. The internet connects humanity. Satellites orbit Earth. Rockets escape gravity. Solar cells harvest the sun.' }
};

const blueprints = [
    // === STAGE 1: PALEOLITHIC ERA ===
    // === RESOURCES — Lithic Resources ===
    {
        id: 'flint-chert',
        name: 'Flint & Chert',
        stage: 1,
        icon: '🪨',
        category: 'resource',
        subcategory: 'Lithic Resources',
        objective: 'Source and identify high-quality flint and chert for stone tool production.',
        evolution: 'Flint and chert were the most critical raw materials in human history — enabling every stone tool from hand axes to arrowheads.',
        requirements: [
            { name: 'Chalk deposits', value: 'Where flint nodules form' },
            { name: 'River gravels', value: 'Secondary flint sources' }
        ],
        steps: [
            { text: 'Search chalk cliffs and river gravels for flint nodules — dark, glassy, conchoidal-fracturing.' },
            { text: 'Test each nodule by striking — good flint produces a clear, ringing sound.' },
            { text: 'Collect nodules free of cracks. Size from fist to basketball.' },
            { text: 'Store dry. Flint improves with aging and stores indefinitely.' },
            { text: 'Use for knapping blades, scrapers, arrowheads, and all stone tools.' }
        ],
        videoUrl: 'https://youtu.be/d6N9TNeVYfw?si=MiningStone'
    },
    {
        id: 'obsidian',
        name: 'Obsidian',
        stage: 1,
        icon: '⬛',
        category: 'resource',
        subcategory: 'Lithic Resources',
        objective: 'Locate and extract volcanic glass for razor-sharp cutting tools.',
        evolution: 'Obsidian produces the sharpest natural cutting edge known — sharper than surgical steel. It was traded across continents.',
        requirements: [
            { name: 'Volcanic region access', value: 'Near lava flows or domes' },
            { name: 'Mining tools', value: 'Antler picks, stone hammers' }
        ],
        steps: [
            { text: 'Locate volcanic obsidian flows — glassy black volcanic rock.' },
            { text: 'Identify quality obsidian: deep black, glassy, free of bubbles.' },
            { text: 'Extract with antler picks. Obsidian fractures easily — work carefully.' },
            { text: 'Pad each piece in basket grass. Edges are dangerously sharp.' },
            { text: 'Trade obsidian over long distances — worth far more than local stone.' }
        ],
        videoUrl: 'https://youtu.be/d6N9TNeVYfw?si=MiningStone'
    },
    {
        id: 'quartzite',
        name: 'Quartzite',
        stage: 1,
        icon: '🪨',
        category: 'resource',
        subcategory: 'Lithic Resources',
        objective: 'Source quartzite for heavy-duty cutting tools and hammerstones.',
        evolution: 'Quartzite is harder and more durable than flint, ideal for heavy tools that must withstand repeated impact.',
        requirements: [
            { name: 'Metamorphic rock formations', value: 'Mountain or river sources' },
            { name: 'Stone hammers', value: 'For extraction' }
        ],
        steps: [
            { text: 'Locate quartzite outcrops — metamorphosed sandstone, extremely hard.' },
            { text: 'Test by striking — quartzite rings loudly and resists breaking.' },
            { text: 'Extract blocks with stone hammers and wooden levers.' },
            { text: 'Shape into heavy tools: choppers, hand axes, hammerstones.' },
            { text: 'Quartzite tools last longer than flint for heavy-duty tasks.' }
        ],
        videoUrl: 'https://youtu.be/d6N9TNeVYfw?si=MiningStone'
    },
    {
        id: 'basalt',
        name: 'Basalt',
        stage: 1,
        icon: '🖤',
        category: 'resource',
        subcategory: 'Lithic Resources',
        objective: 'Source basalt for grinding stones, querns, and mortars.',
        evolution: 'Basalt is extremely hard and durable — the ideal material for grinding stones. Every agricultural society depended on basalt querns.',
        requirements: [
            { name: 'Volcanic rock formations', value: 'Basalt flows or boulders' },
            { name: 'Stone hammers', value: 'For extraction' }
        ],
        steps: [
            { text: 'Locate basalt deposits — dark, dense volcanic rock near lava flows.' },
            { text: 'Select large, flat blocks for querns and saddle stones.' },
            { text: 'Shape by pecking with a harder stone, then grinding with sand and water.' },
            { text: 'Create a slightly concave grinding surface on the base stone.' },
            { text: 'Use for grinding grain, nuts, seeds, and pigments.' }
        ],
        videoUrl: 'https://youtu.be/d6N9TNeVYfw?si=MiningStone'
    },
    {
        id: 'sandstone',
        name: 'Sandstone',
        stage: 1,
        icon: '🟤',
        category: 'resource',
        subcategory: 'Lithic Resources',
        objective: 'Source sandstone for abrasive polishing, sharpening, and construction.',
        evolution: 'Sandstone enabled the transition from rough chipped tools to finely polished Neolithic implements — the hallmark of advanced stone technology.',
        requirements: [
            { name: 'Sedimentary rock layers', value: 'River cliffs or quarries' },
            { name: 'Water', value: 'For wet grinding' }
        ],
        steps: [
            { text: 'Locate sandstone — layered sedimentary rock with visible grains.' },
            { text: 'Select fine-grained for sharpening, coarse for shaping.' },
            { text: 'Extract with wedges. Sandstone splits along bedding planes.' },
            { text: 'Use wet for sharpening — water carries away stone dust.' },
            { text: 'Use for polishing axes, grinding pigments, and construction.' }
        ],
        videoUrl: 'https://youtu.be/d6N9TNeVYfw?si=MiningStone'
    },
    {
        id: 'limestone',
        name: 'Limestone',
        stage: 1,
        icon: '⬜',
        category: 'resource',
        subcategory: 'Lithic Resources',
        objective: 'Source limestone for construction, plaster, and mortar production.',
        evolution: 'Limestone is the foundation of all construction — from Neolithic plaster floors to Roman concrete.',
        requirements: [
            { name: 'Sedimentary rock formations', value: 'Cliffs or quarries' },
            { name: 'Fuel wood', value: 'For burning into quicklime' }
        ],
        steps: [
            { text: 'Locate limestone — soft sedimentary rock, often with fossils.' },
            { text: 'Extract with wedges. Limestone is relatively soft to quarry.' },
            { text: 'Use blocks directly as building stone.' },
            { text: 'For plaster: burn limestone in a kiln to produce quicklime, then slake with water.' },
            { text: 'Mix slaked lime with sand to create mortar for binding stones.' }
        ],
        videoUrl: 'https://youtu.be/d6N9TNeVYfw?si=MiningStone'
    },
    {
        id: 'gypsum',
        name: 'Gypsum',
        stage: 1,
        icon: '⚪',
        category: 'resource',
        subcategory: 'Lithic Resources',
        objective: 'Source gypsum for plaster, mortar, and decorative finishes.',
        evolution: 'Gypsum plaster was used in Neolithic settlements for smooth floors and wall finishes.',
        requirements: [
            { name: 'Evaporite deposits', value: 'Dried lake beds or caves' },
            { name: 'Fire', value: 'For calcining' }
        ],
        steps: [
            { text: 'Locate gypsum — soft, white-to-translucent mineral in evaporite layers.' },
            { text: 'Extract with stone picks. Gypsum is soft enough to scratch with a fingernail.' },
            { text: 'Crush and heat gently to drive off water (calcining).' },
            { text: 'Mix with water to create plaster — sets quickly as it rehydrates.' },
            { text: 'Use for smooth floors, wall finishes, and decorative sculpture.' }
        ],
        videoUrl: 'https://youtu.be/d6N9TNeVYfw?si=MiningStone'
    },
    {
        id: 'hematite-ochre',
        name: 'Hematite & Ochre',
        stage: 1,
        icon: '🔴',
        category: 'resource',
        subcategory: 'Lithic Resources',
        objective: 'Source iron oxide pigments for paint, ritual, and hide preservation.',
        evolution: 'Ochre is the oldest known pigment — used for body paint, cave art, and ritual burial. It appears in sites dating back 300,000 years.',
        requirements: [
            { name: 'Iron-rich soil or rock', value: 'Red/yellow earth deposits' },
            { name: 'Grinding stone', value: 'For processing pigment' }
        ],
        steps: [
            { text: 'Locate ochre deposits — red, yellow, or brown earth rich in iron oxide.' },
            { text: 'Mine with digging sticks. Ochre is soft and easy to extract.' },
            { text: 'Grind on a flat stone to produce fine powder pigment.' },
            { text: 'Mix with water for paint, fat for body paint, or egg for adhesive.' },
            { text: 'Use for cave paintings, body decoration, ritual burial, and hide preservation.' }
        ],
        videoUrl: 'https://youtu.be/d6N9TNeVYfw?si=MiningStone'
    },
    {
        id: 'manganese-dioxide',
        name: 'Manganese Dioxide',
        stage: 1,
        icon: '⚫',
        category: 'resource',
        subcategory: 'Lithic Resources',
        objective: 'Source manganese dioxide for black pigment and fire-starting.',
        evolution: 'Manganese dioxide provides the darkest natural pigment and accelerates fire-starting when added to tinder.',
        requirements: [
            { name: 'Mineral deposits', value: 'Dark earth or rock formations' },
            { name: 'Grinding stone', value: 'For powder production' }
        ],
        steps: [
            { text: 'Locate manganese deposits — very dark, heavy mineral with metallic luster.' },
            { text: 'Extract with stone tools. Often found near iron deposits.' },
            { text: 'Grind to fine powder for the darkest natural black pigment.' },
            { text: 'Mix small amounts into tinder — manganese lowers ignition temperature.' },
            { text: 'Use for black cave paintings, body paint, and fire acceleration.' }
        ],
        videoUrl: 'https://youtu.be/d6N9TNeVYfw?si=MiningStone'
    },
    {
        id: 'malachite',
        name: 'Malachite',
        stage: 1,
        icon: '🟢',
        category: 'resource',
        subcategory: 'Lithic Resources',
        objective: 'Source malachite for green pigment and later copper smelting.',
        evolution: 'Malachite provided the only green pigment available to early humans and later became the primary ore for copper smelting.',
        requirements: [
            { name: 'Copper ore deposits', value: 'Oxidized copper zones' },
            { name: 'Grinding stone', value: 'For pigment production' }
        ],
        steps: [
            { text: 'Locate malachite — bright green mineral near copper ore bodies.' },
            { text: 'Extract with stone picks. Forms botryoidal (grape-like) masses.' },
            { text: 'Grind to powder for vibrant green pigment — the only green available.' },
            { text: 'Mix with binder for paint on cave walls, pottery, or body.' },
            { text: 'Later: smelt malachite with charcoal to produce metallic copper.' }
        ],
        videoUrl: 'https://youtu.be/d6N9TNeVYfw?si=MiningStone'
    },
    {
        id: 'chalk',
        name: 'Chalk',
        stage: 1,
        icon: '🤍',
        category: 'resource',
        subcategory: 'Lithic Resources',
        objective: 'Source chalk for marking, pigment, and construction filler.',
        evolution: 'Chalk provided the first white pigment and marking material, enabling symbolic communication and construction filling.',
        requirements: [
            { name: 'Chalk cliffs or deposits', value: 'Sedimentary formations' },
            { name: 'Digging tools', value: 'Wooden picks, stone tools' }
        ],
        steps: [
            { text: 'Locate chalk deposits — soft white limestone, easily scratched.' },
            { text: 'Extract by hand or with simple digging tools. Chalk crumbles easily.' },
            { text: 'Use as white marking material on dark surfaces.' },
            { text: 'Grind into powder for white pigment in paint.' },
            { text: 'Use as construction filler between stones and as soil amendment.' }
        ],
        videoUrl: 'https://youtu.be/d6N9TNeVYfw?si=MiningStone'
    },
    {
        id: 'pumice',
        name: 'Pumice',
        stage: 1,
        icon: '🪨',
        category: 'resource',
        subcategory: 'Lithic Resources',
        objective: 'Source pumice for abrasive polishing, smoothing, and cleaning.',
        evolution: 'Pumice is a natural abrasive that enabled smoothing of wood, bone, and stone surfaces.',
        requirements: [
            { name: 'Volcanic deposits', value: 'Near volcanic regions' },
            { name: 'Water', value: 'For wet polishing' }
        ],
        steps: [
            { text: 'Locate pumice — lightweight, porous volcanic rock. Often floats on water.' },
            { text: 'Collect pieces — pumice floats, making it easy to find.' },
            { text: 'Use wet for smoothing wood surfaces — rub in circular motions.' },
            { text: 'Use for polishing bone tools, shell ornaments, and stone vessels.' },
            { text: 'Use as a cleaning abrasive for pottery and personal hygiene.' }
        ],
        videoUrl: 'https://youtu.be/d6N9TNeVYfw?si=MiningStone'
    },
    {
        id: 'clay-deposits',
        name: 'Clay Deposits',
        stage: 1,
        icon: '🟫',
        category: 'resource',
        subcategory: 'Lithic Resources',
        objective: 'Locate and extract quality clay for pottery, construction, and adhesive.',
        evolution: 'Clay is the foundation of ceramics — the defining technology of the Neolithic.',
        requirements: [
            { name: 'River banks', value: 'Primary clay sources' },
            { name: 'Digging tools', value: 'Wooden picks, stone tools' }
        ],
        steps: [
            { text: 'Locate clay — sticky, fine-grained soil near rivers and streams.' },
            { text: 'Test: wet clay should be plastic, hold shape, and not crumble when dry.' },
            { text: 'Extract with digging tools. Remove rocks and organic matter.' },
            { text: 'Knead with water to uniform consistency — remove air bubbles.' },
            { text: 'Use for pottery, daub (wall plaster), figurines, and adhesive.' }
        ],
        videoUrl: 'https://youtu.be/d6N9TNeVYfw?si=MiningStone'
    },
    {
        id: 'salt-deposits',
        name: 'Salt Deposits',
        stage: 1,
        icon: '🧂',
        category: 'resource',
        subcategory: 'Lithic Resources',
        objective: 'Source natural salt for food preservation, trade, and dietary needs.',
        evolution: 'Salt is essential for human biology and food preservation. Salt deposits became centers of trade and wealth.',
        requirements: [
            { name: 'Salt springs or rock salt', value: 'Natural salt sources' },
            { name: 'Containers', value: 'For collecting brine' }
        ],
        steps: [
            { text: 'Locate salt — salt springs, rock salt deposits, or coastal evaporation ponds.' },
            { text: 'For springs: collect brine and boil to evaporate water, leaving salt crystals.' },
            { text: 'For rock salt: mine with stone tools and crush into usable pieces.' },
            { text: 'For coastal: fill shallow pans with seawater and let sun evaporate.' },
            { text: 'Use for preserving meat and fish, dietary needs, and trade.' }
        ],
        videoUrl: 'https://youtu.be/d6N9TNeVYfw?si=MiningStone'
    },
    {
        id: 'peat',
        name: 'Peat',
        stage: 1,
        icon: '🟤',
        category: 'resource',
        subcategory: 'Lithic Resources',
        objective: 'Harvest peat for fuel, insulation, and construction.',
        evolution: 'Peat bogs provided renewable fuel in treeless regions and preserved organic materials for thousands of years.',
        requirements: [
            { name: 'Bog or marsh area', value: 'Peat-forming wetlands' },
            { name: 'Cutting tools', value: 'Stone or bone knives' }
        ],
        steps: [
            { text: 'Locate peat bogs — waterlogged areas with accumulated dead plant matter.' },
            { text: 'Cut peat into blocks with a knife. Peat cuts like soft earth.' },
            { text: 'Stack blocks in sun and wind to dry for several weeks.' },
            { text: 'Dry peat burns slowly and steadily — excellent fuel for hearths.' },
            { text: 'Use peat for insulation in walls and as a preservative medium.' }
        ],
        videoUrl: 'https://youtu.be/d6N9TNeVYfw?si=MiningStone'
    },
    // === RESOURCES — Organic Animal Resources ===
    {
        id: 'deer-antler',
        name: 'Deer Antler',
        stage: 1,
        icon: '🦌',
        category: 'resource',
        subcategory: 'Organic Animal Resources',
        objective: 'Collect and work deer antler for pressure flakers, harpoons, and tool handles.',
        evolution: 'Antler is tougher than bone yet workable when fresh — the ideal material for pressure flakers and tool handles.',
        requirements: [
            { name: 'Deer population', value: 'For shedding or hunting' },
            { name: 'Saw or sharp stone', value: 'For cutting antler' }
        ],
        steps: [
            { text: 'Collect shed antlers in early spring — deer naturally drop them annually.' },
            { text: 'Soak dry antler in water to soften before working.' },
            { text: 'Shape tine ends for pressure flakers. Carve grooves for harpoon barbs.' },
            { text: 'Use antler handles for tools — they absorb shock and provide secure grip.' },
            { text: 'Antler was also used for mining picks in Neolithic flint mines.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'animal-bone',
        name: 'Animal Bone (Long Bones)',
        stage: 1,
        icon: '🦴',
        category: 'resource',
        subcategory: 'Organic Animal Resources',
        objective: 'Process animal long bones into needles, awls, fishhooks, and flutes.',
        evolution: 'Bone tools provided the flexibility and toughness that stone could not — enabling sewing, drilling, and music.',
        requirements: [
            { name: 'Animal long bones', value: 'Femur, tibia from large animals' },
            { name: 'Stone tools', value: 'For cutting and shaping' }
        ],
        steps: [
            { text: 'Collect long bones from hunted animals — femurs and tibias are best.' },
            { text: 'Remove marrow and clean thoroughly.' },
            { text: 'Split bone lengthwise with a wedge.' },
            { text: 'Shape with stone tools into needles, awls, fishhooks, or flute blanks.' },
            { text: 'Polish on sandstone for smooth finish.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'mammoth-ivory',
        name: 'Mammoth Ivory',
        stage: 1,
        icon: '🦣',
        category: 'resource',
        subcategory: 'Organic Animal Resources',
        objective: 'Source and carve mammoth ivory for figurines, spear points, and ornaments.',
        evolution: 'Mammoth ivory was the premier carving material of the Upper Paleolithic — used for Venus figurines and personal ornaments.',
        requirements: [
            { name: 'Mammoth tusks', value: 'From hunted or scavenged mammoths' },
            { name: 'Stone saws', value: 'For cutting ivory' }
        ],
        steps: [
            { text: 'Obtain mammoth tusks from hunted animals or river deposits.' },
            { text: 'Cut tusk into manageable sections with a stone saw and water.' },
            { text: 'Shape with stone tools — ivory carves more easily than bone.' },
            { text: 'Carve figurines, spear points, beads, and decorative items.' },
            { text: 'Polish with fine abrasive. Ivory takes a beautiful natural sheen.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'animal-sinew',
        name: 'Animal Sinew',
        stage: 1,
        icon: '🧵',
        category: 'resource',
        subcategory: 'Organic Animal Resources',
        objective: 'Process animal sinew (tendon) into thread, bowstring, and cordage.',
        evolution: 'Sinew is the strongest natural fiber available — essential for sewing, bowstrings, and binding tool heads.',
        requirements: [
            { name: 'Animal tendons', value: 'From legs and back of large animals' },
            { name: 'Sharp stone', value: 'For cutting' }
        ],
        steps: [
            { text: 'Extract tendons from hunted animals — leg and back sinews are longest.' },
            { text: 'Remove outer sheath and separate into individual fibers.' },
            { text: 'Dry sinew fibers thoroughly — they become hard and brittle.' },
            { text: 'Soak in water to soften. Sinew shrinks as it dries, tightening bindings.' },
            { text: 'Twist into thread for sewing or bowstring.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'animal-hides',
        name: 'Animal Hides',
        stage: 1,
        icon: '🐄',
        category: 'resource',
        subcategory: 'Organic Animal Resources',
        objective: 'Process animal hides into clothing, shelter covering, and containers.',
        evolution: 'Hides enabled humans to survive in cold climates. Without hides, human expansion into northern latitudes would have been impossible.',
        requirements: [
            { name: 'Fresh animal hides', value: 'From hunted animals' },
            { name: 'Stone scrapers', value: 'For fleshing and thinning' }
        ],
        steps: [
            { text: 'Skin hunted animal carefully with a sharp stone knife.' },
            { text: 'Stretch hide on a frame. Scrape off flesh and fat with a stone scraper.' },
            { text: 'Remove hair by soaking in water and scraping.' },
            { text: 'Tan the hide — rub with animal brain and smoke over fire.' },
            { text: 'Use for clothing, shelter covering, bags, and containers.' }
        ],
        videoUrl: 'https://youtu.be/kCsy7iNnG84?si=HideTanning'
    },
    {
        id: 'animal-fat',
        name: 'Animal Fat & Blubber',
        stage: 1,
        icon: '🫗',
        category: 'resource',
        subcategory: 'Organic Animal Resources',
        objective: 'Render animal fat for lamp fuel, food, lubricant, and waterproofing.',
        evolution: 'Animal fat powered lamps for night activity — doubling productive hours.',
        requirements: [
            { name: 'Animal fat deposits', value: 'From hunted animals' },
            { name: 'Container', value: 'For rendering' }
        ],
        steps: [
            { text: 'Collect fat from hunted animals — abdominal and kidney fat are richest.' },
            { text: 'Cut into small pieces and place in a container with a small amount of water.' },
            { text: 'Heat gently over fire. Fat melts and separates from connective tissue.' },
            { text: 'Strain through cloth. Clean fat stores indefinitely in cool places.' },
            { text: 'Use for lamp fuel, cooking, lubricant, and waterproofing.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'marine-shells',
        name: 'Marine Shells',
        stage: 1,
        icon: '🐚',
        category: 'resource',
        subcategory: 'Organic Animal Resources',
        objective: 'Collect marine shells for containers, ornaments, and cutting edges.',
        evolution: 'Shell beads are among the oldest known personal ornaments, indicating symbolic thinking and social identity.',
        requirements: [
            { name: 'Coastal access', value: 'Beach or shoreline' },
            { name: 'Collection bag', value: 'Basket or net bag' }
        ],
        steps: [
            { text: 'Collect shells from beaches — large ones for containers, small for ornaments.' },
            { text: 'Clean shells by soaking and scraping.' },
            { text: 'Large shells serve as ready-made bowls and containers.' },
            { text: 'Drill holes in small shells for stringing into necklaces.' },
            { text: 'Sharp shell edges can be used as cutting tools and scrapers.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    {
        id: 'freshwater-shells',
        name: 'Freshwater Shells',
        stage: 1,
        icon: '🐚',
        category: 'resource',
        subcategory: 'Organic Animal Resources',
        objective: 'Collect freshwater shells from rivers and lakes for tools and ornaments.',
        evolution: 'Freshwater shells provided similar utility to marine shells but were available inland.',
        requirements: [
            { name: 'River or lake access', value: 'Freshwater mollusk habitat' },
            { name: 'Collection container', value: 'Basket or bag' }
        ],
        steps: [
            { text: 'Search river and lake bottoms for freshwater mussels and snails.' },
            { text: 'Collect live or empty shells.' },
            { text: 'Clean and dry shells.' },
            { text: 'Use as containers, cutting edges, and ornaments.' },
            { text: 'Freshwater mussel shells were also used as scrapers.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    {
        id: 'bird-feathers',
        name: 'Bird Feathers',
        stage: 1,
        icon: '🪶',
        category: 'resource',
        subcategory: 'Organic Animal Resources',
        objective: 'Collect bird feathers for fletching arrows, insulation, and ornament.',
        evolution: 'Feathers enabled the arrow (fletching for flight stability) and provided lightweight insulation.',
        requirements: [
            { name: 'Bird populations', value: 'Waterfowl for flight feathers' },
            { name: 'Collection timing', value: 'During molting or after hunting' }
        ],
        steps: [
            { text: 'Collect feathers during molting season or from hunted birds.' },
            { text: 'Flight feathers (wing and tail) are best for arrow fletching.' },
            { text: 'Down feathers provide excellent insulation for clothing and bedding.' },
            { text: 'Decorative feathers for headdresses and social ornaments.' },
            { text: 'Split feathers for fletching: attach three feathers to arrow shaft with sinew and resin.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    {
        id: 'beeswax-honey',
        name: 'Beeswax & Honey',
        stage: 1,
        icon: '🍯',
        category: 'resource',
        subcategory: 'Organic Animal Resources',
        objective: 'Harvest wild honey and beeswax for food, adhesive, and medicine.',
        evolution: 'Honey was the only concentrated sweetener available. Beeswax served as adhesive and waterproofing.',
        requirements: [
            { name: 'Wild bee nests', value: 'Tree hollows or rock crevices' },
            { name: 'Smoke source', value: 'To calm bees' }
        ],
        steps: [
            { text: 'Locate wild bee nests — look for bees entering tree hollows or rock cracks.' },
            { text: 'Use smoke to calm bees before approaching the nest.' },
            { text: 'Extract honeycomb carefully. Honey is a dense, storable calorie source.' },
            { text: 'Collect beeswax — the honeycomb structure itself.' },
            { text: 'Use honey as food and medicine. Use beeswax as adhesive for hafting and waterproofing.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    {
        id: 'tree-resin',
        name: 'Tree Resin & Sap',
        stage: 1,
        icon: '🌲',
        category: 'resource',
        subcategory: 'Organic Animal Resources',
        objective: 'Collect tree resin for adhesive, waterproofing, and fire-starting.',
        evolution: 'Tree resin was the primary adhesive of the Stone Age — used for hafting stone tools to handles.',
        requirements: [
            { name: 'Resinous trees', value: 'Birch, pine, spruce, maple' },
            { name: 'Collection containers', value: 'Shells or bark cups' }
        ],
        steps: [
            { text: 'Collect fresh resin from tree wounds — birch, pine, and spruce produce abundant resin.' },
            { text: 'Use resin directly as adhesive for hafting tools and waterproofing seams.' },
            { text: 'For birch tar: heat birch bark in a sealed container to distill tar.' },
            { text: 'Resin is also an excellent fire starter — highly flammable when dry.' },
            { text: 'Mix resin with charcoal or ochre for stronger, colored adhesive.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    {
        id: 'animal-gut',
        name: 'Animal Gut & Intestines',
        stage: 1,
        icon: '🫁',
        category: 'resource',
        subcategory: 'Organic Animal Resources',
        objective: 'Process animal intestines into waterproof containers and cordage.',
        evolution: 'Animal gut provided the first waterproof containers — essential for carrying water and storing food.',
        requirements: [
            { name: 'Animal intestines', value: 'From hunted animals' },
            { name: 'Sharp tool', value: 'For cleaning' }
        ],
        steps: [
            { text: 'Remove intestines from hunted animals carefully — keep them intact.' },
            { text: 'Clean thoroughly by flushing with water and scraping inner surface.' },
            { text: 'Inflate with air and dry — creates a waterproof bladder for carrying water.' },
            { text: 'Cut into strips and dry for gut cordage — strong and waterproof.' },
            { text: 'Use gut containers for water transport and gut cordage for waterproof binding.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    {
        id: 'hooves-horns',
        name: 'Hooves & Horns',
        stage: 1,
        icon: '🐂',
        category: 'resource',
        subcategory: 'Organic Animal Resources',
        objective: 'Process hooves and horns into glue, tools, and ornaments.',
        evolution: 'Hooves and horns provided keratin-based materials for glue, tool handles, and drinking vessels.',
        requirements: [
            { name: 'Animal hooves/horns', value: 'From hunted animals' },
            { name: 'Fire', value: 'For boiling glue' }
        ],
        steps: [
            { text: 'Collect hooves and horns from hunted animals.' },
            { text: 'Boil hooves for hours to extract gelatin — animal glue for woodworking.' },
            { text: 'Shape horns by heating and bending — they become pliable when hot.' },
            { text: 'Use horn as drinking vessels, tool handles, and powder containers.' },
            { text: 'Hoof glue is the strongest natural adhesive for wood and bone joints.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    // === RESOURCES — Plant Resources ===
    {
        id: 'willow-bark',
        name: 'Willow Bark',
        stage: 1,
        icon: '🌿',
        category: 'resource',
        subcategory: 'Plant Resources',
        objective: 'Harvest willow bark for cordage, basketry, and pain-relieving medicine.',
        evolution: 'Willow bark contains salicin (natural aspirin) — one of the oldest known medicines.',
        requirements: [
            { name: 'Willow trees', value: 'Near water sources' },
            { name: 'Sharp stone', value: 'For cutting bark' }
        ],
        steps: [
            { text: 'Locate willow trees near rivers and streams.' },
            { text: 'Cut branches in spring when sap flows — bark peels more easily.' },
            { text: 'Strip the inner bark (bast) from branches.' },
            { text: 'Soak bark in water for several days to soften fibers.' },
            { text: 'Twist fibers into cordage or weave into baskets and rope. Chew bark for pain relief.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    {
        id: 'grapevine',
        name: 'Grapevine',
        stage: 1,
        icon: '🍇',
        category: 'resource',
        subcategory: 'Plant Resources',
        objective: 'Harvest grapevine for strong, flexible cordage and basketry material.',
        evolution: 'Grapevine is one of the strongest natural cordage materials — its rope rivals hemp.',
        requirements: [
            { name: 'Wild grapevines', value: 'Climbing on trees' },
            { name: 'Cutting tool', value: 'Stone knife or axe' }
        ],
        steps: [
            { text: 'Locate wild grapevines climbing on trees — thick, woody vines.' },
            { text: 'Cut long sections of vine. Select vines 1-3 cm thick.' },
            { text: 'Soak vines in water for flexibility — dry vines become brittle.' },
            { text: 'Split vines lengthwise for thinner cordage strands.' },
            { text: 'Twist or braid into rope, lashing, and basket material.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    {
        id: 'wild-flax',
        name: 'Wild Flax',
        stage: 1,
        icon: '🌱',
        category: 'resource',
        subcategory: 'Plant Resources',
        objective: 'Harvest wild flax stalks for fiber — the ancestor of linen textile.',
        evolution: 'Wild flax was gathered long before it was cultivated. Its fibers produce strong thread for sewing and weaving.',
        requirements: [
            { name: 'Wild flax plants', value: 'In meadows and field edges' },
            { name: 'Water', value: 'For retting fibers' }
        ],
        steps: [
            { text: 'Locate wild flax — tall plant with blue flowers.' },
            { text: 'Pull entire plants by the roots when seeds are mature.' },
            { text: 'Ret (soak) stalks in water for 1-2 weeks — bacteria break down pectin.' },
            { text: 'Dry and beat stalks to separate fibers from woody core.' },
            { text: 'Hackle (comb) fibers to align them. Spin into thread for sewing and weaving.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    {
        id: 'wild-hemp',
        name: 'Wild Hemp',
        stage: 1,
        icon: '🌿',
        category: 'resource',
        subcategory: 'Plant Resources',
        objective: 'Harvest wild hemp for the strongest natural cordage fiber available.',
        evolution: 'Wild hemp produces the strongest plant fiber known — used for rope, nets, and early textiles.',
        requirements: [
            { name: 'Wild hemp plants', value: 'In disturbed ground and riverbanks' },
            { name: 'Water', value: 'For retting' }
        ],
        steps: [
            { text: 'Locate wild hemp — tall, stalky plant with palmate leaves.' },
            { text: 'Harvest stalks when plants flower — fiber is strongest at this stage.' },
            { text: 'Ret stalks in water for 1-2 weeks to separate fibers.' },
            { text: 'Dry, break, and hackle (comb) fibers to remove woody material.' },
            { text: 'Twist fibers into exceptionally strong rope and cordage.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    {
        id: 'reeds-cattails',
        name: 'Reeds & Cattails',
        stage: 1,
        icon: '🌾',
        category: 'resource',
        subcategory: 'Plant Resources',
        objective: 'Harvest reeds and cattails for thatching, matting, baskets, and food.',
        evolution: 'Reeds and cattails were the multipurpose plants of wetlands — providing thatch, mats, and edible shoots.',
        requirements: [
            { name: 'Wetland access', value: 'Marsh, lake edge, or riverbank' },
            { name: 'Cutting tool', value: 'Stone knife or sickle' }
        ],
        steps: [
            { text: 'Locate reed and cattail beds in wetlands.' },
            { text: 'Cut reeds in late summer when mature and dry.' },
            { text: 'Bundle and dry for thatching — layer overlapping for waterproof roof.' },
            { text: 'Weave reeds into mats for flooring, wall coverings, and sleeping surfaces.' },
            { text: 'Cattail fluff provides insulation. Shoots and pollen are edible.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    {
        id: 'rushes-grasses',
        name: 'Rushes & Grasses',
        stage: 1,
        icon: '🌱',
        category: 'resource',
        subcategory: 'Plant Resources',
        objective: 'Harvest rushes and grasses for thatching, rope, bedding, and mat weaving.',
        evolution: 'Grasses and rushes provided the most abundant plant material for everyday uses.',
        requirements: [
            { name: 'Grassland or meadow', value: 'Abundant grass and rush growth' },
            { name: 'Cutting tool', value: 'Stone knife or sickle' }
        ],
        steps: [
            { text: 'Harvest long grasses and rushes in late summer when mature.' },
            { text: 'Bundle and dry for thatching — grass thatch lasts 10-20 years.' },
            { text: 'Weave into mats for flooring and wall insulation.' },
            { text: 'Twist into rope for light-duty lashing and tying.' },
            { text: 'Use as bedding material — thick layers provide insulation from cold ground.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    {
        id: 'nettle-fiber',
        name: 'Nettle Fiber',
        stage: 1,
        icon: '🌿',
        category: 'resource',
        subcategory: 'Plant Resources',
        objective: 'Process stinging nettle stalks into strong textile fiber.',
        evolution: 'Nettle fiber produces a linen-like textile used for clothing, sacks, and fishing nets.',
        requirements: [
            { name: 'Stinging nettle plants', value: 'In disturbed ground and edges' },
            { name: 'Hand protection', value: 'Nettles sting' }
        ],
        steps: [
            { text: 'Harvest nettle stalks in late summer — wear protection.' },
            { text: 'Ret stalks in water for 1-2 weeks to soften fibers.' },
            { text: 'Break and hackle to separate fibers from woody stem.' },
            { text: 'Spin into thread — nettle fiber is strong and lustrous.' },
            { text: 'Weave into cloth for clothing, sacks, and fishing nets.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    {
        id: 'linden-bast',
        name: 'Linden (Lime) Bast',
        stage: 1,
        icon: '🌳',
        category: 'resource',
        subcategory: 'Plant Resources',
        objective: 'Strip linden tree inner bark for cordage, sandals, and basketry.',
        evolution: 'Linden bast produced some of the strongest cordage available — the primary cordage material in northern Europe.',
        requirements: [
            { name: 'Linden trees', value: 'In temperate forests' },
            { name: 'Cutting tool', value: 'Stone axe or knife' }
        ],
        steps: [
            { text: 'Locate linden trees — large deciduous trees with heart-shaped leaves.' },
            { text: 'Cut branches in spring when sap flows. Score bark lengthwise.' },
            { text: 'Peel bark strips. Inner bark (bast) separates from outer.' },
            { text: 'Soak bast in water for several days to soften.' },
            { text: 'Separate into fine fibers. Twist into exceptionally strong cordage for sandals and rope.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    {
        id: 'birch-bark',
        name: 'Birch Bark',
        stage: 1,
        icon: '🌳',
        category: 'resource',
        subcategory: 'Plant Resources',
        objective: 'Harvest birch bark for waterproof containers, roofing, and torches.',
        evolution: 'Birch bark is naturally waterproof — the primary container material before pottery.',
        requirements: [
            { name: 'Birch trees', value: 'In northern temperate forests' },
            { name: 'Sharp knife', value: 'For cutting bark' }
        ],
        steps: [
            { text: 'Locate birch trees — white-barked trees in northern forests.' },
            { text: 'Cut bark in spring when sap flows — peels easily in large sheets.' },
            { text: 'Fold and stitch bark with sinew for waterproof containers.' },
            { text: 'Layer bark for roofing — naturally waterproof and insulating.' },
            { text: 'Birch bark burns even when wet — excellent torch and fire-starting material.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    {
        id: 'pine-resin-pitch',
        name: 'Pine Resin & Pitch',
        stage: 1,
        icon: '🌲',
        category: 'resource',
        subcategory: 'Plant Resources',
        objective: 'Collect and process pine resin into pitch for adhesive and waterproofing.',
        evolution: 'Pine pitch was the universal adhesive and waterproofing compound of the ancient world.',
        requirements: [
            { name: 'Pine trees', value: 'For resin collection' },
            { name: 'Container', value: 'For heating resin' }
        ],
        steps: [
            { text: 'Collect fresh pine resin from tree wounds.' },
            { text: 'Heat resin gently in a container over fire. Stir constantly.' },
            { text: 'Add charcoal dust or beeswax to strengthen the pitch.' },
            { text: 'Apply hot pitch to tool hafts, boat seams, and container joints.' },
            { text: 'Pitch hardens as it cools — creating a waterproof, durable seal.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    {
        id: 'oak-bark',
        name: 'Oak Bark',
        stage: 1,
        icon: '🌳',
        category: 'resource',
        subcategory: 'Plant Resources',
        objective: 'Harvest oak bark for leather tanning — the source of tannin.',
        evolution: 'Oak bark contains high levels of tannin — the chemical that converts raw hide into durable leather.',
        requirements: [
            { name: 'Oak trees', value: 'For bark harvesting' },
            { name: 'Cutting tool', value: 'For stripping bark' }
        ],
        steps: [
            { text: 'Strip bark from oak branches — inner bark is richest in tannin.' },
            { text: 'Crush or chop bark into small pieces.' },
            { text: 'Soak bark in water for several days to create tannin solution.' },
            { text: 'Place prepared hides in the tannin solution for weeks to months.' },
            { text: 'Tannin binds to hide proteins, creating soft, durable, water-resistant leather.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    {
        id: 'moss-lichen',
        name: 'Moss & Lichen',
        stage: 1,
        icon: '🟢',
        category: 'resource',
        subcategory: 'Plant Resources',
        objective: 'Harvest moss and lichen for insulation, tinder, medicine, and dye.',
        evolution: 'Moss and lichen were critical survival materials — providing insulation, tinder, dyes, and medicinal treatments.',
        requirements: [
            { name: 'Forest floor', value: 'Moss-covered ground' },
            { name: 'Rock surfaces', value: 'Lichen-covered rocks' }
        ],
        steps: [
            { text: 'Collect sphagnum moss from bogs — highly absorbent, antiseptic.' },
            { text: 'Use moss as wound dressing — it is naturally antibacterial.' },
            { text: 'Collect lichen from rocks and trees for dye.' },
            { text: 'Use dry moss and lichen as tinder — catches spark easily.' },
            { text: 'Use moss as insulation in walls, bedding, and clothing.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'tree-gums',
        name: 'Tree Gums (Birch, Maple, Spruce)',
        stage: 1,
        icon: '🌲',
        category: 'resource',
        subcategory: 'Plant Resources',
        objective: 'Collect tree gums and saps for adhesive, food, and medicine.',
        evolution: 'Tree gums served as the universal adhesive before synthetic glues.',
        requirements: [
            { name: 'Birch, maple, or spruce trees', value: 'For sap collection' },
            { name: 'Containers', value: 'Birch bark cups' }
        ],
        steps: [
            { text: 'Tap trees in spring when sap flows — cut a V-shape in the bark.' },
            { text: 'Collect dripping sap in containers. Maple sap can be boiled into syrup.' },
            { text: 'Collect resin from wounds and branch stubs.' },
            { text: 'Use sap/gum as adhesive, chewing gum, and medicine.' },
            { text: 'For birch tar: distill birch bark in a sealed container to produce pitch.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    {
        id: 'walnut-hulls',
        name: 'Walnut Hulls',
        stage: 1,
        icon: '🌰',
        category: 'resource',
        subcategory: 'Plant Resources',
        objective: 'Process walnut hulls for brown dye and medicinal applications.',
        evolution: 'Walnut hulls produce one of the richest natural brown dyes and contain antibacterial juglone.',
        requirements: [
            { name: 'Walnut trees', value: 'For nut collection' },
            { name: 'Water', value: 'For dye extraction' }
        ],
        steps: [
            { text: 'Collect green walnut hulls (the outer green covering) in autumn.' },
            { text: 'Crush hulls and soak in water to extract brown dye.' },
            { text: 'Boil hulls in water for concentrated dye bath.' },
            { text: 'Soak fibers, leather, or wood in dye bath for rich brown color.' },
            { text: 'Use walnut hull extract medicinally — treats skin conditions and parasites.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    {
        id: 'acorns',
        name: 'Acorns',
        stage: 1,
        icon: '🌰',
        category: 'resource',
        subcategory: 'Plant Resources',
        objective: 'Harvest and process acorns into edible food by removing tannins.',
        evolution: 'Acorns were a staple food for many peoples — high in calories and fats.',
        requirements: [
            { name: 'Oak trees', value: 'For acorn collection' },
            { name: 'Water source', value: 'For leaching tannins' }
        ],
        steps: [
            { text: 'Collect acorns in autumn — select large, undamaged nuts.' },
            { text: 'Shell acorns and grind into coarse meal on a stone.' },
            { text: 'Place meal in a porous container and run water through it for hours — leaches bitter tannins.' },
            { text: 'Taste to confirm bitterness is gone. Dry the leached meal.' },
            { text: 'Cook as porridge, bread, or add to soups. Acorns are calorie-dense and storable.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    // === RESOURCES — Wild Food Resources ===
    {
        id: 'wild-wheat',
        name: 'Wild Wheat (Einkorn & Emmer)',
        stage: 1,
        icon: '🌾',
        category: 'resource',
        subcategory: 'Wild Food Resources',
        objective: 'Gather wild wheat in the Fertile Crescent — the progenitor of all domesticated wheat.',
        evolution: 'Wild wheat gathering led to deliberate planting — the single event that created agriculture and civilization.',
        requirements: [
            { name: 'Fertile Crescent region', value: 'Modern Syria, Turkey, Iraq' },
            { name: 'Sickle', value: 'Flint-bladed harvesting tool' }
        ],
        steps: [
            { text: 'Locate wild wheat stands — tall grasses with seed heads.' },
            { text: 'Harvest with a flint-bladed sickle — cut seed heads, not stalks.' },
            { text: 'Thresh by beating bundles to separate grain.' },
            { text: 'Winnow by tossing grain in the air — wind blows away chaff.' },
            { text: 'Grind on a quern stone into flour. Store surplus — some deliberately scattered to grow next season.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    {
        id: 'wild-barley',
        name: 'Wild Barley',
        stage: 1,
        icon: '🌾',
        category: 'resource',
        subcategory: 'Wild Food Resources',
        objective: 'Gather wild barley — the hardiest cereal grain and first domesticated crop.',
        evolution: 'Wild barley was likely the first grain deliberately cultivated — grows in harsher conditions than wheat.',
        requirements: [
            { name: 'Steppe or highland regions', value: 'Barley habitat' },
            { name: 'Sickle', value: 'Harvesting tool' }
        ],
        steps: [
            { text: 'Locate wild barley — grows in drier, higher elevations than wheat.' },
            { text: 'Harvest seed heads with a flint sickle.' },
            { text: 'Thresh and winnow to separate grain from chaff.' },
            { text: 'Grind on a quern stone into flour or coarse meal.' },
            { text: 'Store in underground pits. Also used for beer brewing.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    {
        id: 'wild-lentils',
        name: 'Wild Lentils',
        stage: 1,
        icon: '🫘',
        category: 'resource',
        subcategory: 'Wild Food Resources',
        objective: 'Gather wild lentils — a protein-rich legume from the Fertile Crescent.',
        evolution: 'Wild lentils provided crucial plant protein — among the first domesticated crops.',
        requirements: [
            { name: 'Fertile Crescent hillsides', value: 'Lentil habitat' },
            { name: 'Collection baskets', value: 'For gathering' }
        ],
        steps: [
            { text: 'Locate wild lentil plants — low-growing legumes on hillsides.' },
            { text: 'Pull entire plants when pods are mature and dry.' },
            { text: 'Thresh by beating to release lentils from pods.' },
            { text: 'Winnow to separate lentils from pod fragments.' },
            { text: 'Cook by boiling. Store dried lentils — they keep for years.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    {
        id: 'wild-peas',
        name: 'Wild Peas',
        stage: 1,
        icon: '🫛',
        category: 'resource',
        subcategory: 'Wild Food Resources',
        objective: 'Gather wild peas for protein-rich food in the Fertile Crescent.',
        evolution: 'Wild peas were gathered alongside lentils and wheat, providing essential amino acids.',
        requirements: [
            { name: 'Wild pea populations', value: 'In Fertile Crescent hillsides' },
            { name: 'Collection baskets', value: 'For gathering' }
        ],
        steps: [
            { text: 'Locate wild pea plants — climbing or bush-type legumes.' },
            { text: 'Harvest pods when mature and dry on the plant.' },
            { text: 'Shell pods by hand to extract peas.' },
            { text: 'Cook by boiling — wild peas are smaller than domesticated varieties.' },
            { text: 'Store dried peas for year-round protein source.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    {
        id: 'wild-figs',
        name: 'Wild Figs',
        stage: 1,
        icon: '🫐',
        category: 'resource',
        subcategory: 'Wild Food Resources',
        objective: 'Harvest wild figs — one of the earliest domesticated fruit trees.',
        evolution: 'Wild figs may have been cultivated before grain crops — dating back 11,400 years.',
        requirements: [
            { name: 'Wild fig trees', value: 'In Mediterranean woodlands' },
            { name: 'Collection baskets', value: 'For harvesting' }
        ],
        steps: [
            { text: 'Locate wild fig trees in Mediterranean and Near East woodlands.' },
            { text: 'Harvest ripe figs — they soften and darken when ready.' },
            { text: 'Eat fresh or dry for preservation — dried figs store for months.' },
            { text: 'Fig trees can be propagated by planting cuttings — early horticulture.' },
            { text: 'Figs provide quick energy, fiber, and minerals.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    {
        id: 'wild-almonds',
        name: 'Wild Almonds',
        stage: 1,
        icon: '🌰',
        category: 'resource',
        subcategory: 'Wild Food Resources',
        objective: 'Harvest wild almonds — bitter nuts later bred sweet through selection.',
        evolution: 'Through selective breeding, humans created the sweet almond — one of the first tree crop domestications.',
        requirements: [
            { name: 'Wild almond trees', value: 'In Mediterranean hills' },
            { name: 'Collection baskets', value: 'For harvesting' }
        ],
        steps: [
            { text: 'Locate wild almond trees — small trees with pink flowers in spring.' },
            { text: 'Collect nuts when hulls split open naturally.' },
            { text: 'Crack shells with stones to extract kernel.' },
            { text: 'Wild almonds are bitter — eat in small quantities or leach in water.' },
            { text: 'Select the least bitter nuts for planting — beginning of sweet almond breeding.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    {
        id: 'wild-grapes',
        name: 'Wild Grapes',
        stage: 1,
        icon: '🍇',
        category: 'resource',
        subcategory: 'Wild Food Resources',
        objective: 'Harvest wild grapes for food and fermentation into wine.',
        evolution: 'Wild grapes were fermented into the earliest wines — a cultural and trade commodity.',
        requirements: [
            { name: 'Wild grape vines', value: 'In forests and along rivers' },
            { name: 'Collection baskets', value: 'For harvesting' }
        ],
        steps: [
            { text: 'Locate wild grape vines climbing on trees in forests and riverbanks.' },
            { text: 'Harvest ripe grape clusters in late summer.' },
            { text: 'Eat fresh for quick energy and vitamins.' },
            { text: 'Crush grapes in containers and allow natural fermentation — wild yeast on skins.' },
            { text: 'Fermented grape juice becomes wine — storable and caloric.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    {
        id: 'wild-dates',
        name: 'Wild Dates',
        stage: 1,
        icon: '🌴',
        category: 'resource',
        subcategory: 'Wild Food Resources',
        objective: 'Harvest wild date palms for concentrated sugar and long-term food storage.',
        evolution: 'Date palms provided the most concentrated natural sugar available — vital in desert regions.',
        requirements: [
            { name: 'Date palm groves', value: 'In oases and river valleys' },
            { name: 'Climbing ability', value: 'For harvesting high fruit' }
        ],
        steps: [
            { text: 'Locate wild date palms in oases and river valleys of the Near East.' },
            { text: 'Climb trees or use long poles to harvest ripe date clusters.' },
            { text: 'Eat fresh dates for immediate energy.' },
            { text: 'Dry dates in the sun for long-term storage — they last for months.' },
            { text: 'Date palm wood, leaves, and fibers are also useful materials.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    {
        id: 'mushrooms-fungi',
        name: 'Mushrooms & Fungi',
        stage: 1,
        icon: '🍄',
        category: 'resource',
        subcategory: 'Wild Food Resources',
        objective: 'Identify and harvest edible wild mushrooms while avoiding poisonous species.',
        evolution: 'Mushrooms provided essential nutrients, vitamins, and minerals not available from other food sources.',
        requirements: [
            { name: 'Forest knowledge', value: 'Identifying edible vs poisonous' },
            { name: 'Collection basket', value: 'For gathering' }
        ],
        steps: [
            { text: 'Learn to identify edible species — study with experienced gatherers.' },
            { text: 'Harvest mushrooms in wet seasons — they fruit after rain.' },
            { text: 'Cook all mushrooms — many edible species are toxic when raw.' },
            { text: 'Dry excess mushrooms for winter storage.' },
            { text: 'Some fungi enable bread and beer fermentation. Some have medicinal properties.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    {
        id: 'seaweed-kelp',
        name: 'Seaweed & Kelp',
        stage: 1,
        icon: '🌊',
        category: 'resource',
        subcategory: 'Wild Food Resources',
        objective: 'Harvest seaweed and kelp for food, fertilizer, and thatching material.',
        evolution: 'Coastal communities harvested seaweed as a rich source of iodine, minerals, and vitamins.',
        requirements: [
            { name: 'Coastal access', value: 'Rocky shoreline with seaweed beds' },
            { name: 'Collection tools', value: 'Sharp stone or shell for cutting' }
        ],
        steps: [
            { text: 'Harvest seaweed at low tide — cut fronds from rocks with a sharp stone.' },
            { text: 'Collect kelp for food and fertilizer.' },
            { text: 'Dry seaweed for storage — retains nutrients for months.' },
            { text: 'Eat fresh or dried seaweed — rich in iodine, iron, and vitamins.' },
            { text: 'Use seaweed as fertilizer and dry kelp for thatching.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    // === RESOURCES — Water & Environmental Resources ===
    {
        id: 'fresh-water',
        name: 'Fresh Water',
        stage: 1,
        icon: '💧',
        category: 'resource',
        subcategory: 'Water & Environmental Resources',
        objective: 'Locate, access, and manage fresh water sources for drinking, cooking, and irrigation.',
        evolution: 'Access to fresh water determined where humans could settle permanently. Every civilization arose near reliable water.',
        requirements: [
            { name: 'Rivers or springs', value: 'Primary water sources' },
            { name: 'Containers', value: 'Shells, gourds, skin bags' }
        ],
        steps: [
            { text: 'Locate water sources — follow animal trails, bird flight patterns, and vegetation.' },
            { text: 'Rivers and springs are primary sources. Dig wells in dry riverbeds for groundwater.' },
            { text: 'Carry water in containers — skin bags, large shells, or bark vessels.' },
            { text: 'Boil water over fire to kill pathogens when possible.' },
            { text: 'For agriculture: dig irrigation channels from rivers to fields.' }
        ],
        videoUrl: 'https://youtu.be/a5UZaUdb4yU?si=WaterWell'
    },
    {
        id: 'peat-bogs',
        name: 'Peat Bogs',
        stage: 1,
        icon: '🏚️',
        category: 'resource',
        subcategory: 'Water & Environmental Resources',
        objective: 'Harvest peat from bogs for fuel, construction insulation, and preservation.',
        evolution: 'Peat bogs provided renewable fuel in treeless regions and preserved organic materials for millennia.',
        requirements: [
            { name: 'Bog or marsh', value: 'Peat-forming wetland' },
            { name: 'Cutting tool', value: 'Stone or bone knife' }
        ],
        steps: [
            { text: 'Locate peat bogs — waterlogged areas with accumulated dead vegetation.' },
            { text: 'Cut peat into rectangular blocks with a knife.' },
            { text: 'Stack blocks in the sun and wind to dry for 2-4 weeks.' },
            { text: 'Dry peat burns slowly and steadily — excellent hearth fuel.' },
            { text: 'Use wet peat as insulation in shelter walls.' }
        ],
        videoUrl: 'https://youtu.be/d6N9TNeVYfw?si=MiningStone'
    },
    // === SKILLS — Hunting Skills ===
    {
        id: 'pursuit-hunting',
        name: 'Pursuit Hunting',
        stage: 1,
        icon: '🏃',
        category: 'skill',
        subcategory: 'Hunting Skills',
        objective: 'Track and run prey to exhaustion using human endurance.',
        evolution: 'Pursuit hunting exploits humans\' unique ability to sweat and run long distances — wearing down faster animals over hours.',
        requirements: [
            { name: 'Running ability', value: 'Good cardiovascular fitness' },
            { name: 'Water', value: 'For hydration during chase' },
            { name: 'Knowledge of prey', value: 'Understanding animal behavior' }
        ],
        steps: [
            { text: 'Track prey using footprints, droppings, and broken vegetation.' },
            { text: 'Run at a steady pace, following the animal\'s trail.' },
            { text: 'The animal will stop to rest — close the distance each time.' },
            { text: 'Repeat pursuit-rest cycles for hours until the animal collapses from heat exhaustion.' },
            { text: 'Finish the animal with a thrusting weapon.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=HuntingBow'
    },
    {
        id: 'ambush-hunting',
        name: 'Ambush Hunting',
        stage: 1,
        icon: '',
        category: 'skill',
        subcategory: 'Hunting Skills',
        objective: 'Hide and wait at animal trails, waterholes, or feeding areas for close-range attacks.',
        evolution: 'Ambush hunting reduced risk and energy expenditure — striking from concealment at the optimal moment.',
        requirements: [
            { name: 'Camouflage', value: 'Mud, leaves, or hide clothing' },
            { name: 'Weapon', value: 'Spear, bow, or club' },
            { name: 'Patience', value: 'Ability to wait silently' }
        ],
        steps: [
            { text: 'Study animal trails, waterholes, and feeding areas to predict movement.' },
            { text: 'Select a concealed position with good visibility of the approach.' },
            { text: 'Camouflage yourself with mud, leaves, or animal hide.' },
            { text: 'Wait silently for the animal to enter striking range.' },
            { text: 'Strike decisively with spear or arrow. Aim for vital areas.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=HuntingBow'
    },
    {
        id: 'drive-hunting',
        name: 'Drive Hunting',
        stage: 1,
        icon: '🦌',
        category: 'skill',
        subcategory: 'Hunting Skills',
        objective: 'Coordinate group efforts to herd animals into traps, cliffs, or enclosures.',
        evolution: 'Drive hunting enabled mass kills — entire herds could be funneled into traps or over cliffs.',
        requirements: [
            { name: 'Group of hunters', value: 'Minimum 5-10 people' },
            { name: 'Communication signals', value: 'Calls, shouts, or horns' },
            { name: 'Trap or enclosure', value: 'Cliff, pit, or fenced area' }
        ],
        steps: [
            { text: 'Scout the terrain to identify natural funnels (valleys, cliffs, water crossings).' },
            { text: 'Position hunters in a wide line behind the herd.' },
            { text: 'Drive the herd forward using noise, fire, and visual presence.' },
            { text: 'Guide animals toward the trap, cliff, or enclosure.' },
            { text: 'Kill trapped animals at the destination. Distribute meat among the group.' }
        ],
        videoUrl: 'https://youtu.be/57NhfFwyhQE?si=Traps'
    },
    {
        id: 'atlatl-throwing',
        name: 'Atlatl Throwing',
        stage: 1,
        icon: '🏹',
        category: 'skill',
        subcategory: 'Hunting Skills',
        objective: 'Master the spear-thrower for 2x range and power over hand-thrown spears.',
        evolution: 'The atlatl increased spear velocity by 2x, enabling hunting of fast-moving game at safe distances.',
        requirements: [
            { name: 'Atlatl', value: 'Wooden or antler lever' },
            { name: 'Light spear', value: 'Balanced throwing dart' },
            { name: 'Practice targets', value: 'Bundles or logs' }
        ],
        steps: [
            { text: 'Hook the spear into the atlatl spur or cup.' },
            { text: 'Grip the atlatl handle with the spear aligned along your forearm.' },
            { text: 'Draw back and throw with a whip-like motion — the atlatl extends your arm.' },
            { text: 'The spear launches with 2x the velocity of hand-throwing.' },
            { text: 'Practice at stationary targets, then moving targets. Effective range is 20-40 meters.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'bow-arrow-hunting',
        name: 'Bow & Arrow Hunting',
        stage: 1,
        icon: '🎯',
        category: 'skill',
        subcategory: 'Hunting Skills',
        objective: 'Hunt with bow and arrow for silent, accurate ranged attacks.',
        evolution: 'The bow and arrow enabled silent hunting at distance — a revolutionary advantage over spears and atlatls.',
        requirements: [
            { name: 'Bow', value: 'Wooden bow with string' },
            { name: 'Arrows', value: 'With stone or bone points' },
            { name: 'Practice range', value: 'Open area for training' }
        ],
        steps: [
            { text: 'String the bow by attaching cordage to both ends.' },
            { text: 'Nock arrow against the string, hold bow at 45-degree angle.' },
            { text: 'Draw the string back to your cheek, aim, and release.' },
            { text: 'Practice at stationary targets first. Effective range is 30-50 meters.' },
            { text: 'Use for hunting medium to small game silently — animals often don\'t hear the arrow.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'spear-thrusting',
        name: 'Spear Thrusting',
        stage: 1,
        icon: '🔱',
        category: 'skill',
        subcategory: 'Hunting Skills',
        objective: 'Master close-quarters spear combat for large, dangerous game.',
        evolution: 'Spear thrusting was the most dangerous but effective method for large game — requiring courage and skill.',
        requirements: [
            { name: 'Heavy spear', value: 'Stout wooden shaft with stone point' },
            { name: 'Physical strength', value: 'For thrusting power' },
            { name: 'Group backup', value: 'For dangerous animals' }
        ],
        steps: [
            { text: 'Hold spear with both hands — one near the end, one in the middle.' },
            { text: 'Approach the animal carefully, or wait for it to charge.' },
            { text: 'Thrust the spear into vital areas: chest, neck, or abdomen.' },
            { text: 'Hold the spear firmly — the animal may thrash or charge.' },
            { text: 'Group hunting reduces individual risk. Use multiple spearmen on large animals.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'sling-use',
        name: 'Sling Use',
        stage: 1,
        icon: '⚡',
        category: 'skill',
        subcategory: 'Hunting Skills',
        objective: 'Hunt and defend using a sling — throwing stones at high velocity.',
        evolution: 'The sling was one of the fastest projectile weapons ever — stones could be launched at bullet-like speeds.',
        requirements: [
            { name: 'Cordage or leather', value: 'For sling construction' },
            { name: 'Smooth stones', value: 'Fist-sized projectiles' },
            { name: 'Practice area', value: 'Open space for training' }
        ],
        steps: [
            { text: 'Construct a sling from braided cordage with a central pouch.' },
            { text: 'Place a smooth, round stone in the pouch.' },
            { text: 'Hold one end of the cord, swing the sling in a circular motion.' },
            { text: 'Release one end to launch the stone. Speed exceeds 100 km/h.' },
            { text: 'Use for hunting small game, birds, and self-defense.' }
        ],
        videoUrl: 'https://youtu.be/57NhfFwyhQE?si=CompositeCraft'
    },
    {
        id: 'trap-setting',
        name: 'Trap Setting',
        stage: 1,
        icon: '🪤',
        category: 'skill',
        subcategory: 'Hunting Skills',
        objective: 'Build pit traps, snares, and deadfalls for passive food acquisition.',
        evolution: 'Traps enabled passive hunting — food could be acquired while the hunter was doing other tasks.',
        requirements: [
            { name: 'Cordage', value: 'For snares and triggers' },
            { name: 'Wood or stone', value: 'For trap construction' },
            { name: 'Knowledge of trails', value: 'Animal movement patterns' }
        ],
        steps: [
            { text: 'Study animal trails, feeding areas, and water sources.' },
            { text: 'Build pit traps: dig a deep hole, camouflage the top with branches and soil.' },
            { text: 'Set spring snares: use a bent sapling with a noose, triggered by a trip line.' },
            { text: 'Build deadfall traps: balance a heavy rock or log on a trigger mechanism.' },
            { text: 'Check traps regularly. Remove captured animals and reset traps.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'animal-tracking',
        name: 'Animal Tracking',
        stage: 1,
        icon: '👣',
        category: 'skill',
        subcategory: 'Hunting Skills',
        objective: 'Read animal signs, tracks, and trails to locate and follow prey.',
        evolution: 'Tracking was essential for finding food — the ability to read the landscape like a book.',
        requirements: [
            { name: 'Knowledge of species', value: 'Track shapes and sizes' },
            { name: 'Patience', value: 'Careful observation' },
            { name: 'Light conditions', value: 'Early morning or late afternoon for shadows' }
        ],
        steps: [
            { text: 'Study tracks in soft soil, mud, or snow — note size, shape, and depth.' },
            { text: 'Follow broken vegetation, disturbed soil, and droppings.' },
            { text: 'Note the direction of travel — tracks point the way.' },
            { text: 'Look for bedding areas, feeding sites, and water access points.' },
            { text: 'Track in groups when possible — multiple sets of eyes find signs faster.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=HuntingBow'
    },
    {
        id: 'camouflage',
        name: 'Camouflage',
        stage: 1,
        icon: '🎭',
        category: 'skill',
        subcategory: 'Hunting Skills',
        objective: 'Blend into the environment using natural materials to approach prey undetected.',
        evolution: 'Camouflage enabled hunters to get within striking range of wary animals.',
        requirements: [
            { name: 'Mud or clay', value: 'For skin coverage' },
            { name: 'Local vegetation', value: 'Leaves, grass, branches' },
            { name: 'Animal hides', value: 'For clothing' }
        ],
        steps: [
            { text: 'Study the environment — colors, textures, and patterns of the terrain.' },
            { text: 'Cover exposed skin with mud or clay matching the ground color.' },
            { text: 'Attach local vegetation to clothing — leaves, grass, branches.' },
            { text: 'Move slowly and quietly, staying low to the ground.' },
            { text: 'Use natural cover (bushes, rocks, trees) to break up your silhouette.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=HuntingBow'
    },
    // === SKILLS — Gathering Skills ===
    {
        id: 'plant-identification',
        name: 'Plant Identification',
        stage: 1,
        icon: '🌿',
        category: 'skill',
        subcategory: 'Gathering Skills',
        objective: 'Identify edible, medicinal, and poisonous plants in the wild.',
        evolution: 'Plant knowledge was essential for survival — knowing what to eat and what to avoid could mean life or death.',
        requirements: [
            { name: 'Experienced teacher', value: 'Elder or knowledgeable gatherer' },
            { name: 'Reference plants', value: 'Known edible species to learn from' },
            { time: 'Time', value: 'Seasons of observation' }
        ],
        steps: [
            { text: 'Learn from experienced gatherers — plant knowledge is passed down through generations.' },
            { text: 'Memorize leaf shapes, flower colors, fruit characteristics, and growth habits.' },
            { text: 'Test unknown plants cautiously: rub on skin, then lips, then tongue, then swallow tiny amount.' },
            { text: 'Wait several hours for any reaction before consuming more.' },
            { text: 'Create mental maps of where useful plants grow throughout the year.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'seasonal-foraging',
        name: 'Seasonal Foraging',
        stage: 1,
        icon: '📅',
        category: 'skill',
        subcategory: 'Gathering Skills',
        objective: 'Follow seasonal availability of plant foods throughout the year.',
        evolution: 'Seasonal foraging ensured year-round food security by exploiting different resources at their peak.',
        requirements: [
            { name: 'Knowledge of seasons', value: 'Plant cycle timing' },
            { name: 'Diverse territory', value: 'Access to multiple habitats' },
            { name: 'Collection tools', value: 'Baskets, digging sticks' }
        ],
        steps: [
            { text: 'Spring: gather young shoots, leaves, flowers, and early greens.' },
            { text: 'Summer: harvest berries, fruits, seeds, and nuts.' },
            { text: 'Autumn: collect roots, tubers, nuts, and late fruits.' },
            { text: 'Winter: rely on stored foods, bark, lichens, and evergreen plants.' },
            { text: 'Plan movements to follow seasonal abundance across the landscape.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'nut-processing',
        name: 'Nut Processing',
        stage: 1,
        icon: '🌰',
        category: 'skill',
        subcategory: 'Gathering Skills',
        objective: 'Process nuts — leaching acorns, cracking hard shells — into edible food.',
        evolution: 'Nut processing unlocked dense, storable calorie sources — acorns and nuts were staple foods for many peoples.',
        requirements: [
            { name: 'Nuts', value: 'Acorns, walnuts, chestnuts' },
            { name: 'Water source', value: 'For leaching tannins' },
            { name: 'Grinding stone', value: 'For crushing' }
        ],
        steps: [
            { text: 'Collect nuts in autumn — select large, undamaged specimens.' },
            { text: 'Shell nuts using stones or wooden hammers.' },
            { text: 'For acorns: grind into meal and leach in water to remove bitter tannins.' },
            { text: 'Roast nuts for improved flavor and easier digestion.' },
            { text: 'Store shelled nuts in dry containers for winter food security.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'root-digging',
        name: 'Root Digging',
        stage: 1,
        icon: '🥕',
        category: 'skill',
        subcategory: 'Gathering Skills',
        objective: 'Dig up edible roots and tubers using digging sticks.',
        evolution: 'Root digging provided reliable carbohydrates — often more predictable than hunting.',
        requirements: [
            { name: 'Digging stick', value: 'Hardened wooden stick' },
            { name: 'Knowledge of species', value: 'Identifying edible roots' },
            { name: 'Container', value: 'Basket for collection' }
        ],
        steps: [
            { text: 'Identify edible root plants by leaf shape and growth habit.' },
            { text: 'Loosen soil around the plant with a digging stick.' },
            { text: 'Carefully extract the root to avoid breaking it.' },
            { text: 'Some roots are edible raw; others must be cooked to remove toxins.' },
            { text: 'Replant the crown so the plant regrows — sustainable harvesting.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'shellfish-gathering',
        name: 'Shellfish Gathering',
        stage: 1,
        icon: '🦪',
        category: 'skill',
        subcategory: 'Gathering Skills',
        objective: 'Collect shellfish from coastal and freshwater environments.',
        evolution: 'Shellfish were a reliable, year-round protein source — coastal middens show continuous use for millennia.',
        requirements: [
            { name: 'Coastal or river access', value: 'Shellfish habitat' },
            { time: 'Low tide', value: 'For coastal gathering' },
            { name: 'Container', value: 'Basket or bag' }
        ],
        steps: [
            { text: 'Gather shellfish at low tide on rocky shores and mudflats.' },
            { text: 'Collect clams, mussels, oysters, and periwinkles.' },
            { text: 'In rivers, collect freshwater mussels from sandy bottoms.' },
            { text: 'Cook shellfish over fire — opens shells and kills pathogens.' },
            { text: 'Shell middens (waste piles) show continuous coastal use for thousands of years.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'egg-collecting',
        name: 'Egg Collecting',
        stage: 1,
        icon: '🥚',
        category: 'skill',
        subcategory: 'Gathering Skills',
        objective: 'Find and collect bird eggs for protein-rich food.',
        evolution: 'Egg collecting provided concentrated nutrition — a seasonal bonanza of protein and fat.',
        requirements: [
            { name: 'Knowledge of nesting sites', value: 'Cliffs, trees, ground nests' },
            { name: 'Climbing ability', value: 'For cliff and tree nests' },
            { name: 'Container', value: 'Soft-lined basket' }
        ],
        steps: [
            { text: 'Locate bird nesting areas — cliffs, dense bushes, tree cavities, ground nests.' },
            { text: 'Approach quietly to avoid alerting the birds.' },
            { text: 'Collect eggs carefully — leave some in the nest so birds continue laying.' },
            { text: 'Transport eggs in soft-lined baskets to prevent cracking.' },
            { text: 'Cook eggs by boiling or roasting in fire.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'honey-gathering',
        name: 'Wild Honey Gathering',
        stage: 1,
        icon: '🍯',
        category: 'skill',
        subcategory: 'Gathering Skills',
        objective: 'Locate and harvest wild honey from bee nests.',
        evolution: 'Honey was the most prized food of the Stone Age — concentrated calories with no processing required.',
        requirements: [
            { name: 'Smoke source', value: 'To calm bees' },
            { name: 'Climbing tools', value: 'Vines or rope for tree nests' },
            { name: 'Container', value: 'For honey collection' }
        ],
        steps: [
            { text: 'Follow bees back to their nest — look for bees entering tree hollows or rock cracks.' },
            { text: 'Build a smoky fire below the nest to calm bees.' },
            { text: 'Climb to the nest using vines or wooden pegs.' },
            { text: 'Extract honeycomb, brushing bees away with smoke.' },
            { text: 'Eat honey and larvae immediately. Beeswax is saved for adhesive and waterproofing.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    {
        id: 'medicinal-plant-id',
        name: 'Medicinal Plant Identification',
        stage: 1,
        icon: '⚕️',
        category: 'skill',
        subcategory: 'Gathering Skills',
        objective: 'Identify healing plants for treating illness, wounds, and disease.',
        evolution: 'Medicinal plant knowledge reduced mortality — the foundation of all later medical science.',
        requirements: [
            { name: 'Teacher or elder', value: 'Knowledge keeper' },
            { name: 'Plant samples', value: 'For practice identification' },
            { time: 'Years of study', value: 'Knowledge is cumulative' }
        ],
        steps: [
            { text: 'Learn from healers and elders — knowledge is passed through apprenticeship.' },
            { text: 'Willow bark: pain relief (salicin/aspirin). Yarrow: stops bleeding. Plantain: wound healing.' },
            { text: 'Garlic: antibacterial. Mint: digestive aid. Pine resin: antiseptic.' },
            { text: 'Prepare remedies: teas, poultices, chewed raw, or applied as paste.' },
            { text: 'Document plants through oral tradition — songs, stories, and direct teaching.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    // === SKILLS — Fishing Skills ===
    {
        id: 'spearfishing',
        name: 'Spearfishing',
        stage: 1,
        icon: '🐟',
        category: 'skill',
        subcategory: 'Fishing Skills',
        objective: 'Hunt fish by hand-thrown spear in shallow water.',
        evolution: 'Spearfishing was one of the oldest fishing methods — direct, visual, and effective in clear water.',
        requirements: [
            { name: 'Fishing spear', value: 'Long shaft with barbed point' },
            { name: 'Clear shallow water', value: 'Rivers, lakes, tidal pools' },
            { name: 'Stealth', value: 'Slow, quiet movement' }
        ],
        steps: [
            { text: 'Wade quietly into shallow, clear water.' },
            { text: 'Spot fish visually — look for movement and shadows.' },
            { text: 'Aim below the fish (light refraction makes fish appear higher than they are).' },
            { text: 'Throw spear decisively. Barbed points prevent fish from slipping off.' },
            { text: 'Retrieve fish and spear. Repeat.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'harpooning',
        name: 'Harpooning',
        stage: 1,
        icon: '🔱',
        category: 'skill',
        subcategory: 'Fishing Skills',
        objective: 'Hunt large fish and marine mammals with a barbed, retrievable harpoon.',
        evolution: 'Harpoons enabled hunting of large, dangerous sea creatures — expanding human food sources dramatically.',
        requirements: [
            { name: 'Harpoon', value: 'Barbed point with detachable head' },
            { name: 'Line', value: 'Strong cordage attached to harpoon' },
            { name: 'Boat or shore position', value: 'For reaching water' }
        ],
        steps: [
            { text: 'Construct a harpoon with a barbed, detachable head attached to a line.' },
            { text: 'Spot large fish or marine mammals from a boat or shore.' },
            { text: 'Throw the harpoon, driving the barbed head into the animal.' },
            { text: 'The head detaches from the shaft but remains attached to the line.' },
            { text: 'Pull in the line to retrieve the catch. The barbed head prevents escape.' }
        ],
        videoUrl: 'https://youtu.be/yre-QdiEPGs?si=Fishing'
    },
    {
        id: 'hook-line-fishing',
        name: 'Hook & Line Fishing',
        stage: 1,
        icon: '',
        category: 'skill',
        subcategory: 'Fishing Skills',
        objective: 'Catch fish using bone or shell hooks on cordage lines.',
        evolution: 'Hook and line fishing enabled selective, passive fishing — lines could be left unattended.',
        requirements: [
            { name: 'Bone or shell hook', value: 'Carved from animal bone' },
            { name: 'Cordage line', value: 'Plant fiber or sinew' },
            { name: 'Bait', value: 'Worms, insects, or small fish' }
        ],
        steps: [
            { text: 'Carve a hook from bone or shell — curve it sharply with a barb.' },
            { text: 'Attach to a cordage line. Add a stone sinker if needed.' },
            { text: 'Bait the hook with worms, insects, or small fish pieces.' },
            { text: 'Cast the line into water. Hold it or leave it on a stake.' },
            { text: 'Feel for a tug — pull up quickly to set the hook in the fish\'s mouth.' }
        ],
        videoUrl: 'https://youtu.be/yre-QdiEPGs?si=Fishing'
    },
    {
        id: 'net-fishing',
        name: 'Net Fishing',
        stage: 1,
        icon: '🥅',
        category: 'skill',
        subcategory: 'Fishing Skills',
        objective: 'Catch multiple fish simultaneously using woven fiber nets.',
        evolution: 'Net fishing multiplied catch rates — a single net could catch dozens of fish at once.',
        requirements: [
            { name: 'Woven net', value: 'Plant fiber mesh' },
            { name: 'Net sinkers', value: 'Grooved stones' },
            { name: 'Floats', value: 'Wood or cork pieces' }
        ],
        steps: [
            { text: 'Weave a net from plant fiber cordage — diamond-shaped mesh.' },
            { text: 'Attach stone sinkers to the bottom edge and floats to the top.' },
            { text: 'Stretch the net across a stream, river, or tidal area.' },
            { text: 'Fish swim into the net and become entangled.' },
            { text: 'Check nets regularly and remove caught fish.' }
        ],
        videoUrl: 'https://youtu.be/b8YHxToejsc?si=WeavingBasket'
    },
    {
        id: 'fish-trapping',
        name: 'Fish Trapping',
        stage: 1,
        icon: '🪤',
        category: 'skill',
        subcategory: 'Fishing Skills',
        objective: 'Build funnel traps and weirs for passive fish capture.',
        evolution: 'Fish traps provided continuous food with minimal effort — a passive, reliable protein source.',
        requirements: [
            { name: 'Woven basket or wooden stakes', value: 'Trap construction' },
            { name: 'Stream or tidal area', value: 'Fish passage point' },
            { name: 'Cordage', value: 'For binding' }
        ],
        steps: [
            { text: 'Build a funnel-shaped trap from woven reeds or wooden stakes.' },
            { text: 'Place the trap in a stream where fish naturally pass.' },
            { text: 'Fish swim through the wide opening but cannot find the small exit.' },
            { text: 'For weirs: build a fence of stakes across a stream with a gap.' },
            { text: 'Place a basket trap in the gap. Check traps daily.' }
        ],
        videoUrl: 'https://youtu.be/57NhfFwyhQE?si=CompositeCraft'
    },
    {
        id: 'poison-fishing',
        name: 'Poison Fishing',
        stage: 1,
        icon: '☠️',
        category: 'skill',
        subcategory: 'Fishing Skills',
        objective: 'Use plant toxins to stun fish in enclosed pools for easy collection.',
        evolution: 'Poison fishing enabled mass catches in enclosed pools — an efficient but localized method.',
        requirements: [
            { name: 'Toxic plants', value: 'Vine toxins, crushed seeds' },
            { name: 'Enclosed pool', value: 'Tidal pool or dammed stream' },
            { name: 'Baskets', value: 'For collecting stunned fish' }
        ],
        steps: [
            { text: 'Identify fish-poison plants — vines, seeds, or bark containing rotenone-like compounds.' },
            { text: 'Crush plant material and release into an enclosed pool or dammed stream.' },
            { text: 'The toxin stuns fish by interfering with oxygen uptake — they float to the surface.' },
            { text: 'Collect stunned fish quickly with baskets.' },
            { text: 'The poison is not harmful to humans when eaten — only stuns fish.' }
        ],
        videoUrl: 'https://youtu.be/yre-QdiEPGs?si=Fishing'
    },
    {
        id: 'fish-weir-construction',
        name: 'Fish Weir Construction',
        stage: 1,
        icon: '🏗️',
        category: 'skill',
        subcategory: 'Fishing Skills',
        objective: 'Build permanent wooden fish weirs in rivers and tidal areas.',
        evolution: 'Fish weirs were permanent fishing installations — some lasted for generations and could catch fish continuously.',
        requirements: [
            { name: 'Wooden stakes', value: 'For weir fence' },
            { name: 'Woven panels', value: 'Reed or branch panels' },
            { name: 'Stone hammer', value: 'For driving stakes' }
        ],
        steps: [
            { text: 'Select a river section with consistent fish migration.' },
            { text: 'Drive wooden stakes into the riverbed in a V-shape pointing downstream.' },
            { text: 'Weave panels between stakes to create a fence that guides fish.' },
            { text: 'Place a basket trap at the narrow end of the V.' },
            { text: 'Fish swimming downstream are guided into the trap. Check daily.' }
        ],
        videoUrl: 'https://youtu.be/57NhfFwyhQE?si=CompositeCraft'
    },
    {
        id: 'ice-fishing',
        name: 'Ice Fishing',
        stage: 1,
        icon: '🧊',
        category: 'skill',
        subcategory: 'Fishing Skills',
        objective: 'Fish through ice holes during winter for year-round protein.',
        evolution: 'Ice fishing enabled year-round food security in cold climates — a critical survival skill.',
        requirements: [
            { name: 'Ice auger or chisel', value: 'For cutting holes' },
            { name: 'Fishing line and hook', value: 'Bone hook on cordage' },
            { name: 'Bait', value: 'Stored insects or small fish' }
        ],
        steps: [
            { text: 'Verify ice thickness — at least 10 cm for safe walking.' },
            { text: 'Cut a hole through the ice with a chisel or auger.' },
            { text: 'Lower a baited line into the hole.' },
            { text: 'Use a tip-up device or check the line regularly.' },
            { text: 'Pull fish up through the hole. Keep holes from refreezing.' }
        ],
        videoUrl: 'https://youtu.be/yre-QdiEPGs?si=Fishing'
    },
    // === SKILLS — Fire & Energy Skills ===
    {
        id: 'natural-fire-capture',
        name: 'Natural Fire Capture',
        stage: 1,
        icon: '🔥',
        category: 'skill',
        subcategory: 'Fire & Energy Skills',
        objective: 'Capture and maintain fire from natural sources like lightning strikes.',
        evolution: 'The first humans didn\'t make fire — they captured it from lightning wildfires and kept it alive.',
        requirements: [
            { name: 'Lightning-struck fire', value: 'Or volcanic fire source' },
            { name: 'Fuel wood', value: 'Dry branches and kindling' },
            { name: 'Transport container', value: 'Shell or bark cup for coals' }
        ],
        steps: [
            { text: 'When lightning strikes a tree, approach carefully — the fire is already lit.' },
            { text: 'Build a fire ring with stones. Add dry kindling and small twigs.' },
            { text: 'Feed the fire continuously — it must never go out.' },
            { text: 'Bank coals at night by covering with ash — they smolder until morning.' },
            { text: 'Carry coals in shells when traveling to establish new fires.' }
        ],
        videoUrl: 'https://youtu.be/cdwOIdQ4VuI?si=NaturalFire'
    },
    {
        id: 'hand-drill-fire',
        name: 'Hand Drill Fire-Making',
        stage: 1,
        icon: '🔥',
        category: 'skill',
        subcategory: 'Fire & Energy Skills',
        objective: 'Create fire by spinning a wooden stick against a fireboard using only hand power.',
        evolution: 'Hand drill fire-making liberated humans from natural fire — they could create flame anywhere, anytime.',
        requirements: [
            { name: 'Fireboard', value: 'Soft wood (willow, cedar) with notch' },
            { name: 'Spindle', value: 'Straight hardwood stick' },
            { name: 'Tinder bundle', value: 'Dry grass, bark, or moss' }
        ],
        steps: [
            { text: 'Carve a V-shaped notch in a soft wood fireboard.' },
            { text: 'Place the spindle in the notch. Hold fireboard steady with one foot.' },
            { text: 'Rub spindle between palms, spinning rapidly — create friction and heat.' },
            { text: 'When smoke appears, increase speed. A glowing ember forms in the notch.' },
            { text: 'Transfer ember to tinder bundle. Blow gently until flame appears.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'bow-drill-fire',
        name: 'Bow Drill Fire-Making',
        stage: 1,
        icon: '🔥',
        category: 'skill',
        subcategory: 'Fire & Energy Skills',
        objective: 'Create fire using a bow-driven spindle for more efficient friction fire-making.',
        evolution: 'The bow drill was more efficient than the hand drill — enabling faster, more reliable fire production.',
        requirements: [
            { name: 'Bow', value: 'Curved stick with cordage' },
            { name: 'Fireboard and spindle', value: 'Soft wood board, hardwood spindle' },
            { name: 'Tinder bundle', value: 'Dry grass, bark, or moss' }
        ],
        steps: [
            { text: 'Construct a bow from a curved stick with cordage wrapped around the spindle.' },
            { text: 'Place the spindle in the fireboard notch. Hold steady with a handhold.' },
            { text: 'Move the bow back and forth to spin the spindle rapidly.' },
            { text: 'Friction creates heat and smoke. A glowing ember forms.' },
            { text: 'Transfer ember to tinder. Blow gently until flame ignites.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'fire-plough-technique',
        name: 'Fire Plough Technique',
        stage: 1,
        icon: '🔥',
        category: 'skill',
        subcategory: 'Fire & Energy Skills',
        objective: 'Create fire by rubbing a wooden stick back and forth in a fireboard groove.',
        evolution: 'The fire plough was an alternative friction method — simpler than the bow drill but requiring more effort.',
        requirements: [
            { name: 'Fireboard', value: 'Soft wood with carved groove' },
            { name: 'Plough stick', value: 'Hardwood stick' },
            { name: 'Tinder bundle', value: 'Dry grass or bark' }
        ],
        steps: [
            { text: 'Carve a groove along a soft wood fireboard.' },
            { text: 'Press the plough stick into the groove and rub back and forth vigorously.' },
            { text: 'Friction creates heat and wood dust accumulates at the groove end.' },
            { text: 'Continue until the dust ignites into a glowing ember.' },
            { text: 'Transfer to tinder and blow into flame.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'flint-pyrite-fire',
        name: 'Flint & Pyrite Fire',
        stage: 1,
        icon: '⚡',
        category: 'skill',
        subcategory: 'Fire & Energy Skills',
        objective: 'Create sparks by striking flint against iron pyrite to ignite tinder.',
        evolution: 'Flint and pyrite sparking was faster than friction methods — the preferred fire-making technique when minerals were available.',
        requirements: [
            { name: 'Flint', value: 'Hard, sharp-edged stone' },
            { name: 'Iron pyrite', value: 'Fool\'s gold — spark-producing mineral' },
            { name: 'Tinder bundle', value: 'Char cloth or dry fungus' }
        ],
        steps: [
            { text: 'Hold pyrite in one hand, flint in the other.' },
            { text: 'Strike the pyrite sharply with the flint edge — sparks fly.' },
            { text: 'Direct sparks into a tinder bundle (char cloth catches sparks best).' },
            { text: 'When an ember forms, blow gently to grow it.' },
            { text: 'Add fine kindling and build into a sustaining fire.' }
        ],
        videoUrl: 'https://youtu.be/d6N9TNeVYfw?si=MiningStone'
    },
    {
        id: 'fire-maintenance',
        name: 'Fire Maintenance',
        stage: 1,
        icon: '🔥',
        category: 'skill',
        subcategory: 'Fire & Energy Skills',
        objective: 'Keep fire burning continuously through banking, feeding, and protection.',
        evolution: 'Fire maintenance was critical — losing fire meant losing warmth, cooking, and protection until a new fire was made.',
        requirements: [
            { name: 'Firewood', value: 'Various sizes — kindling to logs' },
            { name: 'Ash', value: 'For banking coals' },
            { name: 'Windbreak', value: 'Stones or earth around fire' }
        ],
        steps: [
            { text: 'Feed fire with progressively larger wood — twigs to branches to logs.' },
            { text: 'At night, bank coals by covering with ash — they smolder until morning.' },
            { text: 'Build a windbreak of stones around the fire to protect from weather.' },
            { text: 'Keep dry wood stored nearby for quick feeding.' },
            { text: 'Assign someone to tend the fire during sleep — never let it die.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=FireGeneral'
    },
    {
        id: 'fire-transportation',
        name: 'Fire Transportation',
        stage: 1,
        icon: '🔥',
        category: 'skill',
        subcategory: 'Fire & Energy Skills',
        objective: 'Carry live coals to establish new fires at distant locations.',
        evolution: 'Fire transportation enabled camp relocation without losing the precious flame.',
        requirements: [
            { name: 'Container', value: 'Large shell, bark vessel, or clay pot' },
            { name: 'Insulation', value: 'Moss, grass, or earth' },
            { name: 'Live coals', value: 'From the existing fire' }
        ],
        steps: [
            { text: 'Fill a large shell or bark vessel with live coals from the fire.' },
            { text: 'Cover with damp moss or earth to slow burning during transport.' },
            { text: 'Carry carefully — coals stay hot for hours if insulated.' },
            { text: 'At the new site, unpack coals onto tinder.' },
            { text: 'Blow and add kindling to establish the new fire.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=FireGeneral'
    },
    {
        id: 'hearth-construction',
        name: 'Hearth Construction',
        stage: 1,
        icon: '🏠',
        category: 'skill',
        subcategory: 'Fire & Energy Skills',
        objective: 'Build a permanent stone-ringed hearth for safe, sustained cooking and warmth.',
        evolution: 'Hearths became the social center of human life — cooking, warmth, storytelling, and safety all revolved around them.',
        requirements: [
            { name: 'Stones', value: 'For fire ring' },
            { name: 'Level ground', value: 'Flat, non-flammable surface' },
            { name: 'Fuel wood', value: 'For sustained burning' }
        ],
        steps: [
            { text: 'Select a sheltered location near water and wood.' },
            { text: 'Clear ground of vegetation. Dig a shallow pit for drainage.' },
            { text: 'Arrange stones in a circle to contain the fire.' },
            { text: 'Build up sides with larger stones for wind protection.' },
            { text: 'The hearth becomes a permanent feature — used for cooking, warmth, and social gathering.' }
        ],
        videoUrl: 'https://youtu.be/aRIDKBF77Ak?si=CaveArt'
    },
    {
        id: 'cooking-with-fire',
        name: 'Cooking with Fire',
        stage: 1,
        icon: '',
        category: 'skill',
        subcategory: 'Fire & Energy Skills',
        objective: 'Roast, boil, and bake food over fire for improved nutrition and safety.',
        evolution: 'Cooking killed pathogens, made meat tender, and unlocked more calories — enabling brain growth and social gathering.',
        requirements: [
            { name: 'Fire', value: 'Sustained flame or coals' },
            { name: 'Food', value: 'Meat, roots, or grains' },
            { name: 'Cooking tools', value: 'Stones, sticks, or containers' }
        ],
        steps: [
            { text: 'Roasting: place food directly on hot coals or on a stone above flames.' },
            { text: 'Stone boiling: heat stones in fire, then drop into water-filled container with food.' },
            { text: 'Baking: bury food in hot ash and coals for slow, even cooking.' },
            { text: 'Cooking kills pathogens and makes food more digestible.' },
            { text: 'Cooked food provides more calories — enabling larger brains and smaller guts.' }
        ],
        videoUrl: 'https://youtu.be/9Ekk4JCb6OM?si=BreadGrain'
    },
    {
        id: 'stone-boiling',
        name: 'Stone Boiling',
        stage: 1,
        icon: '♨️',
        category: 'skill',
        subcategory: 'Fire & Energy Skills',
        objective: 'Boil water and cook food by dropping fire-heated stones into containers.',
        evolution: 'Stone boiling enabled cooking before pottery existed — hot stones in water containers transferred heat efficiently.',
        requirements: [
            { name: 'Cooking stones', value: 'Dense stones that don\'t explode when heated' },
            { name: 'Container', value: 'Watertight basket, hide bag, or natural hollow' },
            { name: 'Water', value: 'For boiling' }
        ],
        steps: [
            { text: 'Select dense, non-porous stones (avoid waterlogged stones — they can explode).' },
            { text: 'Heat stones in fire until red-hot.' },
            { text: 'Transfer hot stones into water-filled container using green sticks.' },
            { text: 'Water boils as stones release heat. Add food to cook.' },
            { text: 'Replace stones as they cool. Continue until food is cooked.' }
        ],
        videoUrl: 'https://youtu.be/9Ekk4JCb6OM?si=BreadGrain'
    },
    {
        id: 'smoke-signal',
        name: 'Smoke Signal',
        stage: 1,
        icon: '💨',
        category: 'skill',
        subcategory: 'Fire & Energy Skills',
        objective: 'Send long-distance messages using colored smoke from controlled fires.',
        evolution: 'Smoke signals enabled communication across vast distances — the first long-distance messaging system.',
        requirements: [
            { name: 'Fire', value: 'Controlled flame' },
            { name: 'Green vegetation', value: 'For white smoke' },
            { name: 'Dry vegetation', value: 'For dark smoke' }
        ],
        steps: [
            { text: 'Build a fire with dry wood for dark smoke, or add green vegetation for white smoke.' },
            { text: 'Create signal patterns: short puffs, long streams, or alternating colors.' },
            { text: 'Pre-agree on signal meanings with distant groups.' },
            { text: 'Use blankets or hides to control smoke release — creating puffs.' },
            { text: 'Smoke signals can be seen for miles in clear weather.' }
        ],
        videoUrl: 'https://youtu.be/kCsy7iNnG84?si=HideTanning'
    },
    {
        id: 'torch-making',
        name: 'Torch Making',
        stage: 1,
        icon: '🔦',
        category: 'skill',
        subcategory: 'Fire & Energy Skills',
        objective: 'Create portable light sources for night activity and cave exploration.',
        evolution: 'Torches enabled night activity, cave painting, and exploration — doubling productive hours.',
        requirements: [
            { name: 'Wooden stick', value: 'For torch handle' },
            { name: 'Resin or pitch', value: 'Flammable coating' },
            { name: 'Dry plant fibers', value: 'For wrapping' }
        ],
        steps: [
            { text: 'Select a dry wooden stick about 1 meter long.' },
            { text: 'Wrap one end tightly with dry plant fibers or bark strips.' },
            { text: 'Soak the wrapping in resin, pitch, or animal fat.' },
            { text: 'Light the torch — it burns for 30-60 minutes.' },
            { text: 'Use for night travel, cave exploration, and extended work hours.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    // === SKILLS — Tool-Making Skills ===
    {
        id: 'percussion-knapping',
        name: 'Percussion Flint Knapping',
        stage: 1,
        icon: '⚒️',
        category: 'skill',
        subcategory: 'Tool-Making Skills',
        objective: 'Strike stone cores with a hammer to produce sharp flakes and rough tools.',
        evolution: 'Percussion knapping was the foundation of all stone technology — every tool began with a struck flake.',
        requirements: [
            { name: 'Flint core', value: 'Quality knapping stone' },
            { name: 'Hammerstone', value: 'Hard, rounded stone' },
            { name: 'Anvil stone', value: 'Stable working surface' }
        ],
        steps: [
            { text: 'Place the flint core on an anvil stone or hold in hand.' },
            { text: 'Strike the core\'s edge with a hammerstone at a 45-degree angle.' },
            { text: 'A sharp flake detaches with a conchoidal fracture pattern.' },
            { text: 'Rotate the core and strike again to produce more flakes.' },
            { text: 'Select flakes with sharp edges for cutting tools. Resharpen by striking new flakes.' }
        ],
        videoUrl: 'https://youtu.be/d6N9TNeVYfw?si=MiningStone'
    },
    {
        id: 'pressure-flaking',
        name: 'Pressure Flaking',
        stage: 1,
        icon: '⚒️',
        category: 'skill',
        subcategory: 'Tool-Making Skills',
        objective: 'Use an antler tine to apply controlled pressure for fine tool shaping.',
        evolution: 'Pressure flaking enabled precision shaping — producing sharp, symmetrical tools that percussion alone couldn\'t achieve.',
        requirements: [
            { name: 'Stone tool blank', value: 'Rough-shaped flake or blade' },
            { name: 'Pressure flaker', value: 'Antler tine or copper tip' },
            { name: 'Leather pad', value: 'To protect hand' }
        ],
        steps: [
            { text: 'Hold the stone tool blank on a leather pad for stability.' },
            { text: 'Press the antler tine firmly against the edge — don\'t strike.' },
            { text: 'Small, controlled flakes pop off as pressure builds.' },
            { text: 'Work around the perimeter to refine the shape.' },
            { text: 'Pressure flaking produces razor-sharp, symmetrical edges.' }
        ],
        videoUrl: 'https://youtu.be/BN-34JfUrHY?si=Knapping'
    },
    {
        id: 'heat-treatment-flint',
        name: 'Heat Treatment of Flint',
        stage: 1,
        icon: '🔥',
        category: 'skill',
        subcategory: 'Tool-Making Skills',
        objective: 'Bake flint in fire to improve its knapping quality.',
        evolution: 'Heat treatment transforms dull, hard-to-work flint into material that flakes more predictably and produces sharper edges.',
        requirements: [
            { name: 'Raw flint', value: 'Unworked nodules' },
            { name: 'Fire', value: 'Sustained, controlled heat' },
            { name: 'Sand or ash', value: 'For insulation' }
        ],
        steps: [
            { text: 'Bury flint nodules in sand or ash near a fire.' },
            { text: 'Heat slowly to 250-350°C over several hours — rapid heating cracks the stone.' },
            { text: 'Allow to cool slowly. Heat-treated flint changes color (often darker or redder).' },
            { text: 'Test by striking — treated flint flakes more easily and predictably.' },
            { text: 'Knapped tools from heat-treated flint have sharper, more durable edges.' }
        ],
        videoUrl: 'https://youtu.be/d6N9TNeVYfw?si=MiningStone'
    },
    {
        id: 'levallois-technique',
        name: 'Levallois Technique',
        stage: 1,
        icon: '⚒️',
        category: 'skill',
        subcategory: 'Tool-Making Skills',
        objective: 'Prepare a stone core to produce flakes of predetermined size and shape.',
        evolution: 'The Levallois technique was a cognitive leap — planning the final flake shape before striking, showing advanced spatial reasoning.',
        requirements: [
            { name: 'Flint nodule', value: 'Large, quality stone' },
            { name: 'Hammerstone', value: 'For core preparation' },
            { name: 'Soft hammer', value: 'Antler for final strike' }
        ],
        steps: [
            { text: 'Shape the core into a tortoise-shell form — convex on top, flat on bottom.' },
            { text: 'Prepare a striking platform on one edge.' },
            { text: 'Remove small flakes around the perimeter to shape the core.' },
            { text: 'The final strike removes a large, predetermined flake — the Levallois flake.' },
            { text: 'The Levallois flake is thin, sharp, and ready to use as a tool with minimal retouching.' }
        ],
        videoUrl: 'https://youtu.be/BN-34JfUrHY?si=Knapping'
    },
    {
        id: 'blade-production',
        name: 'Blade Production',
        stage: 1,
        icon: '🗡️',
        category: 'skill',
        subcategory: 'Tool-Making Skills',
        objective: 'Produce long, parallel-sided blades from a prepared cylindrical core.',
        evolution: 'Blade production was the most efficient stone technology — one core produced dozens of sharp cutting edges.',
        requirements: [
            { name: 'Cylindrical core', value: 'Prepared flint core' },
            { name: 'Soft hammer or punch', value: 'Antler for controlled strikes' },
            { name: 'Anvil', value: 'Stable working surface' }
        ],
        steps: [
            { text: 'Prepare a cylindrical or prismatic core with a flat striking platform.' },
            { text: 'Strike the platform with a soft hammer to detach long, thin blades.' },
            { text: 'Each blade should be at least twice as long as wide, with parallel sides.' },
            { text: 'Rotate the core after each strike to maintain the cylindrical shape.' },
            { text: 'One core produces 20-50 blades — far more efficient than individual flakes.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    {
        id: 'microlith-production',
        name: 'Microlith Production',
        stage: 1,
        icon: '⚒️',
        category: 'skill',
        subcategory: 'Tool-Making Skills',
        objective: 'Produce tiny standardized stone inserts for composite tools.',
        evolution: 'Microliths were the interchangeable parts of the Stone Age — modular, replaceable, and efficient.',
        requirements: [
            { name: 'Small blade or flake', value: 'Starting material' },
            { name: 'Pressure flaker', value: 'Antler tine' },
            { name: 'Anvil', value: 'Working surface' }
        ],
        steps: [
            { text: 'Start with a small blade or flake — about 2-3 cm long.' },
            { text: 'Use a pressure flaker to retouch edges into geometric shapes.' },
            { text: 'Produce triangles, trapezoids, or crescents depending on the intended tool.' },
            { text: 'Make multiple microliths of the same shape for one composite tool.' },
            { text: 'Insert microliths into wooden or bone slots with resin adhesive.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    {
        id: 'bone-tool-carving',
        name: 'Bone Tool Carving',
        stage: 1,
        icon: '🦴',
        category: 'skill',
        subcategory: 'Tool-Making Skills',
        objective: 'Carve animal bone into needles, awls, fishhooks, and other tools.',
        evolution: 'Bone tools provided flexibility and toughness that stone couldn\'t — enabling sewing, drilling, and fishing.',
        requirements: [
            { name: 'Animal bone', value: 'Long bones from large animals' },
            { name: 'Stone tools', value: 'For cutting and shaping' },
            { name: 'Sandstone', value: 'For smoothing' }
        ],
        steps: [
            { text: 'Split a long bone lengthwise with a stone wedge.' },
            { text: 'Select a straight, thick-walled section.' },
            { text: 'Shape with stone tools into needles, awls, or fishhooks.' },
            { text: 'Smooth on sandstone for a fine finish.' },
            { text: 'Drill eyes in needles with a flint drill and bow.' }
        ],
        videoUrl: 'https://youtu.be/enoPn1X3-oE?si=BoneAntler'
    },
    {
        id: 'antler-working',
        name: 'Antler Working',
        stage: 1,
        icon: '🦌',
        category: 'skill',
        subcategory: 'Tool-Making Skills',
        objective: 'Soften and shape deer antler into pressure flakers, harpoons, and tool handles.',
        evolution: 'Antler was the most versatile tool material — tough, elastic, and workable when fresh.',
        requirements: [
            { name: 'Deer antler', value: 'Fresh or soaked' },
            { name: 'Stone saw', value: 'For cutting' },
            { name: 'Fire', value: 'For softening dry antler' }
        ],
        steps: [
            { text: 'Collect shed antlers or harvest from hunted deer.' },
            { text: 'Soak dry antler in water to soften before working.' },
            { text: 'Cut to size with a stone saw. Shape with stone tools.' },
            { text: 'Carve tine ends for pressure flakers. Add barbs for harpoons.' },
            { text: 'Antler absorbs shock — ideal for tool handles and hammers.' }
        ],
        videoUrl: 'https://youtu.be/enoPn1X3-oE?si=BoneAntler'
    },
    {
        id: 'wood-shaping',
        name: 'Wood Shaping',
        stage: 1,
        icon: '🪵',
        category: 'skill',
        subcategory: 'Tool-Making Skills',
        objective: 'Chop, split, and burn wood into shelters, weapons, and tools.',
        evolution: 'Wood shaping enabled shelters, spears, bows, and composite tools — the most versatile material available.',
        requirements: [
            { name: 'Stone axe', value: 'For felling and shaping' },
            { name: 'Wooden wedges', value: 'For splitting' },
            { name: 'Fire', value: 'For hollowing and shaping' }
        ],
        steps: [
            { text: 'Select appropriate wood species — hardwood for tools, softwood for quick projects.' },
            { text: 'Fell trees with stone axes. Remove branches and bark.' },
            { text: 'Split logs with wooden wedges for planks and shafts.' },
            { text: 'Shape with stone adzes and scrapers.' },
            { text: 'Use fire to hollow logs for canoes or to harden spear tips.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'stone-polishing',
        name: 'Stone Polishing',
        stage: 1,
        icon: '✨',
        category: 'skill',
        subcategory: 'Tool-Making Skills',
        objective: 'Grind and polish stone tools for sharper, more durable cutting edges.',
        evolution: 'Polished stone tools were far more efficient than chipped ones — the hallmark of Neolithic technology.',
        requirements: [
            { name: 'Rough stone tool', value: 'Axe, celt, or adze' },
            { name: 'Sandstone', value: 'Coarse and fine grit' },
            { name: 'Water', value: 'For wet grinding' }
        ],
        steps: [
            { text: 'Start with a roughly shaped stone tool.' },
            { text: 'Grind on coarse sandstone with water to establish the basic form.' },
            { text: 'Progress to finer sandstone for smoothing.' },
            { text: 'Polish the cutting edge until it is smooth and sharp.' },
            { text: 'Polished tools cut more efficiently and resist breaking better.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'hafting',
        name: 'Hafting',
        stage: 1,
        icon: '🔩',
        category: 'skill',
        subcategory: 'Tool-Making Skills',
        objective: 'Bind stone tool heads to wooden handles using sinew and resin.',
        evolution: 'Hafting multiplied the force and reach of stone tools — transforming small flakes into powerful axes and spears.',
        requirements: [
            { name: 'Stone tool head', value: 'Axe, adze, or spear point' },
            { name: 'Wooden handle', value: 'Shaped shaft' },
            { name: 'Sinew and resin', value: 'For binding' }
        ],
        steps: [
            { text: 'Shape a wooden handle with a groove or socket for the stone head.' },
            { text: 'Place the stone head in the groove or socket.' },
            { text: 'Wrap tightly with wet sinew — it shrinks as it dries, creating a tight bind.' },
            { text: 'Apply resin adhesive over the binding for waterproofing.' },
            { text: 'Allow to dry completely before use. The hafted tool is far more effective than the stone alone.' }
        ],
        videoUrl: 'https://youtu.be/BN-34JfUrHY?si=Knapping'
    },
    {
        id: 'tool-resharpening',
        name: 'Tool Resharpening',
        stage: 1,
        icon: '⚒️',
        category: 'skill',
        subcategory: 'Tool-Making Skills',
        objective: 'Maintain and resharpen stone tools to extend their useful life.',
        evolution: 'Tool maintenance was essential — a resharpened tool was as good as new, conserving precious raw materials.',
        requirements: [
            { name: 'Dull tool', value: 'Stone blade, scraper, or axe' },
            { name: 'Hammerstone', value: 'For removing dull edge' },
            { name: 'Sandstone', value: 'For sharpening' }
        ],
        steps: [
            { text: 'Inspect the tool edge — identify dull or damaged areas.' },
            { text: 'Strike small flakes along the dull edge with a hammerstone to create a new edge.' },
            { text: 'For fine tools: use pressure flaking to refine the edge.' },
            { text: 'Polish on sandstone for a sharp finish.' },
            { text: 'A single tool can be resharpened dozens of times before the stone is too small.' }
        ],
        videoUrl: 'https://youtu.be/BN-34JfUrHY?si=Knapping'
    },
    // === SKILLS — Shelter & Construction Skills ===
    {
        id: 'cave-selection',
        name: 'Cave Selection',
        stage: 1,
        icon: '🕳️',
        category: 'skill',
        subcategory: 'Shelter & Construction Skills',
        objective: 'Find and evaluate natural caves for shelter safety and suitability.',
        evolution: 'Caves provided the first weatherproof shelter — protecting humans from predators, rain, and extreme temperatures.',
        requirements: [
            { name: 'Limestone cliffs', value: 'Most common cave-forming rock' },
            { name: 'Inspection tools', value: 'Torches for cave exploration' },
            { name: 'Floor material', value: 'Dry grass or hides for bedding' }
        ],
        steps: [
            { text: 'Search limestone cliffs and rock faces for cave entrances.' },
            { text: 'Inspect for: dry floor, good drainage, protection from wind, distance from water (flood risk).' },
            { text: 'Check for animal dens — caves may be occupied by bears or other predators.' },
            { text: 'Clear the entrance and floor of debris.' },
            { text: 'Build a fire ring inside for warmth and cooking. Lay bedding on the floor.' }
        ],
        videoUrl: 'https://youtu.be/lQQ5etGGRiA?si=Shelter'
    },
    {
        id: 'windbreak-construction',
        name: 'Windbreak Construction',
        stage: 1,
        icon: '🏚️',
        category: 'skill',
        subcategory: 'Shelter & Construction Skills',
        objective: 'Build a simple branch and brush barrier to block wind and rain.',
        evolution: 'Windbreaks were the simplest shelters — quick to build and effective at blocking wind from one direction.',
        requirements: [
            { name: 'Branches', value: 'Large, leafy branches' },
            { name: 'Rocks', value: 'For weighting down' },
            { name: 'Cordage', value: 'For tying' }
        ],
        steps: [
            { text: 'Select a location with the wind at your back.' },
            { text: 'Lean large branches against a tree, rock, or angled pole.' },
            { text: 'Layer smaller branches and brush on top for density.' },
            { text: 'The windbreak blocks wind from one direction — sleep with your back to it.' },
            { text: 'Windbreaks can be built in under an hour and are ideal for temporary camps.' }
        ],
        videoUrl: 'https://youtu.be/lQQ5etGGRiA?si=Shelter'
    },
    {
        id: 'lean-to-shelter',
        name: 'Lean-to Shelter',
        stage: 1,
        icon: '🏚️',
        category: 'skill',
        subcategory: 'Shelter & Construction Skills',
        objective: 'Build an angled branch shelter with thatch roof for rain protection.',
        evolution: 'Lean-to shelters provided overhead rain protection — a significant improvement over simple windbreaks.',
        requirements: [
            { name: 'Poles', value: 'Two sturdy branches for frame' },
            { name: 'Thatch material', value: 'Grass, leaves, or branches' },
            { name: 'Cordage', value: 'For tying joints' }
        ],
        steps: [
            { text: 'Lash two poles together at the top to form an A-frame.' },
            { text: 'Lean the frame against a tree or prop with a central pole.' },
            { text: 'Layer branches across the frame for a roof structure.' },
            { text: 'Cover with thatch — grass, leaves, or bark — overlapping from bottom to top.' },
            { text: 'The angled roof sheds rain. Sleep underneath with a fire in front for warmth.' }
        ],
        videoUrl: 'https://youtu.be/lQQ5etGGRiA?si=Shelter'
    },
    {
        id: 'pit-house-building',
        name: 'Pit House Building',
        stage: 1,
        icon: '🏠',
        category: 'skill',
        subcategory: 'Shelter & Construction Skills',
        objective: 'Dig a semi-subterranean dwelling for year-round temperature regulation.',
        evolution: 'Pit houses used earth insulation for natural temperature control — warm in winter, cool in summer.',
        requirements: [
            { name: 'Digging tools', value: 'Antler picks, stone tools' },
            { name: 'Wood poles', value: 'For roof support' },
            { name: 'Thatch and hides', value: 'For roofing' }
        ],
        steps: [
            { text: 'Dig a circular or rectangular pit 1-2 meters deep.' },
            { text: 'Set wooden poles around the perimeter as wall supports.' },
            { text: 'Build a roof frame from poles lashed together at the center.' },
            { text: 'Cover the roof with branches, thatch, and earth.' },
            { text: 'Add a central fire pit and smoke hole. The pit house stays warm year-round.' }
        ],
        videoUrl: 'https://youtu.be/lQQ5etGGRiA?si=Shelter'
    },
    {
        id: 'mammoth-bone-hut',
        name: 'Mammoth Bone Hut',
        stage: 1,
        icon: '🦣',
        category: 'skill',
        subcategory: 'Shelter & Construction Skills',
        objective: 'Construct a dwelling frame from mammoth bones covered with hides.',
        evolution: 'Mammoth bone huts were built on the treeless steppe — using the only large structural material available.',
        requirements: [
            { name: 'Mammoth bones', value: 'Skulls, tusks, leg bones, ribs' },
            { name: 'Hides', value: 'For wall and roof covering' },
            { name: 'Cordage', value: 'For lashing bones together' }
        ],
        steps: [
            { text: 'Collect mammoth bones from carcasses or river deposits.' },
            { text: 'Arrange leg bones vertically as wall supports. Use skulls as base weights.' },
            { text: 'Create an arched roof from ribs and tusks.' },
            { text: 'Cover with animal hides — secure with cordage and bone weights.' },
            { text: 'Build a fire ring inside. Mammoth bone huts survived the Ice Age on the Eurasian steppe.' }
        ],
        videoUrl: 'https://youtu.be/lQQ5etGGRiA?si=Shelter'
    },
    {
        id: 'wooden-frame-hut',
        name: 'Wooden Frame Hut',
        stage: 1,
        icon: '🏠',
        category: 'skill',
        subcategory: 'Shelter & Construction Skills',
        objective: 'Build a timber-framed hut with hide or thatch covering.',
        evolution: 'Wooden frame huts were the standard shelter where timber was available — sturdy, spacious, and durable.',
        requirements: [
            { name: 'Wood poles', value: 'For frame structure' },
            { name: 'Cordage', value: 'For lashing joints' },
            { name: 'Covering', value: 'Hides, thatch, or bark' }
        ],
        steps: [
            { text: 'Set vertical poles in a circle or rectangle — dig holes and set firmly.' },
            { text: 'Lash horizontal poles between verticals to create a frame.' },
            { text: 'Build a conical or pitched roof from poles meeting at the center.' },
            { text: 'Cover with hides (stitched together) or thatch (layered overlapping).' },
            { text: 'Add a door flap and central fire pit. The hut provides full weather protection.' }
        ],
        videoUrl: 'https://youtu.be/lQQ5etGGRiA?si=Shelter'
    },
    {
        id: 'thatch-roofing',
        name: 'Thatch Roofing',
        stage: 1,
        icon: '🏠',
        category: 'skill',
        subcategory: 'Shelter & Construction Skills',
        objective: 'Layer grass, reeds, or straw to create a waterproof roof.',
        evolution: 'Thatch roofing shed rain completely and insulated against heat and cold — lasting 15-30 years.',
        requirements: [
            { name: 'Thatch material', value: 'Grass, reeds, or straw' },
            { name: 'Roof frame', value: 'Wooden poles' },
            { name: 'Cordage', value: 'For securing thatch' }
        ],
        steps: [
            { text: 'Bundle thatch material into handfuls.' },
            { text: 'Layer from bottom to top — each layer overlaps the one below like shingles.' },
            { text: 'Make the roof steep (45+ degrees) for effective water shedding.' },
            { text: 'Apply thatch at least 30cm thick for complete waterproofing.' },
            { text: 'Secure with cordage or wooden pegs. A good thatch roof lasts 15-30 years.' }
        ],
        videoUrl: 'https://youtu.be/lQQ5etGGRiA?si=Shelter'
    },
    {
        id: 'mud-brick-making',
        name: 'Mud Brick Making',
        stage: 1,
        icon: '🧱',
        category: 'skill',
        subcategory: 'Shelter & Construction Skills',
        objective: 'Form and sun-dry clay bricks for permanent building construction.',
        evolution: 'Mud bricks enabled permanent, multi-room buildings — the foundation of urban architecture.',
        requirements: [
            { name: 'Clay', value: 'Fine, plastic clay' },
            { name: 'Straw or chaff', value: 'For strengthening' },
            { name: 'Wooden mold', value: 'Brick-shaped form' }
        ],
        steps: [
            { text: 'Mix clay with water to a stiff paste consistency.' },
            { text: 'Add chopped straw or chaff — fibers strengthen the brick.' },
            { text: 'Press the mixture into a wooden brick mold.' },
            { text: 'Remove the brick and let it dry in the sun for several days.' },
            { text: 'Stack dried bricks with clay mortar to build walls. Mud brick buildings last for centuries in dry climates.' }
        ],
        videoUrl: 'https://youtu.be/lQQ5etGGRiA?si=Shelter'
    },
    {
        id: 'wattle-daub',
        name: 'Wattle & Daub',
        stage: 1,
        icon: '🏠',
        category: 'skill',
        subcategory: 'Shelter & Construction Skills',
        objective: 'Weave flexible branches and coat with clay to create solid walls.',
        evolution: 'Wattle-and-daub was the standard wall construction for thousands of years — fast, cheap, and durable.',
        requirements: [
            { name: 'Flexible branches', value: 'Willow, hazel, or ash' },
            { name: 'Clay daub', value: 'Clay + straw mix' },
            { name: 'Vertical stakes', value: 'For the frame' }
        ],
        steps: [
            { text: 'Drive vertical stakes into the ground at 15-20cm intervals.' },
            { text: 'Weave flexible branches horizontally between stakes in an over-under pattern.' },
            { text: 'Mix clay daub: 3 parts clay, 1 part sand, add chopped straw.' },
            { text: 'Press daub onto both sides of the wattle, filling all gaps.' },
            { text: 'Smooth with wet hands and let dry. Paint with lime wash for a clean finish.' }
        ],
        videoUrl: 'https://youtu.be/lQQ5etGGRiA?si=Shelter'
    },
    {
        id: 'posthole-construction',
        name: 'Posthole Construction',
        stage: 1,
        icon: '🏗️',
        category: 'skill',
        subcategory: 'Shelter & Construction Skills',
        objective: 'Set wooden posts in deep holes for permanent structural frames.',
        evolution: 'Posthole construction enabled large, permanent buildings — the framework of early cities.',
        requirements: [
            { name: 'Wood posts', value: 'Thick, rot-resistant logs' },
            { name: 'Digging tools', value: 'For post holes' },
            { name: 'Tamping tool', value: 'For compacting fill' }
        ],
        steps: [
            { text: 'Dig post holes 60-100cm deep — deeper for larger buildings.' },
            { text: 'Place treated wooden posts (charred ends resist rot) in the holes.' },
            { text: 'Backfill with soil and tamp firmly to hold the post upright.' },
            { text: 'Lash horizontal beams between posts to create the building frame.' },
            { text: 'Fill walls with wattle-and-daub, mud brick, or planks.' }
        ],
        videoUrl: 'https://youtu.be/lQQ5etGGRiA?si=Shelter'
    },
    {
        id: 'lime-plaster-making',
        name: 'Lime Plaster Making',
        stage: 1,
        icon: '⬜',
        category: 'skill',
        subcategory: 'Shelter & Construction Skills',
        objective: 'Burn limestone to create lime plaster for smooth, waterproof wall coatings.',
        evolution: 'Lime plaster transformed mud walls into clean, waterproof surfaces — a major quality-of-life improvement.',
        requirements: [
            { name: 'Limestone', value: 'For burning into quicklime' },
            { name: 'Kiln', value: 'For high-temperature firing' },
            { name: 'Sand', value: 'For mixing plaster' }
        ],
        steps: [
            { text: 'Burn limestone in a kiln at 900°C+ to produce quicklime.' },
            { text: 'Slake quicklime with water — it reacts violently, producing slaked lime.' },
            { text: 'Mix slaked lime with sand to create plaster.' },
            { text: 'Apply to walls in layers — each layer must dry before the next.' },
            { text: 'Lime plaster is waterproof, clean, and can be painted.' }
        ],
        videoUrl: 'https://youtu.be/lQQ5etGGRiA?si=Shelter'
    },
    {
        id: 'stone-foundation',
        name: 'Stone Foundation',
        stage: 1,
        icon: '🪨',
        category: 'skill',
        subcategory: 'Shelter & Construction Skills',
        objective: 'Build a stone foundation to support walls and prevent moisture damage.',
        evolution: 'Stone foundations protected buildings from ground moisture and settling — essential for permanent structures.',
        requirements: [
            { name: 'Field stones', value: 'Various sizes' },
            { name: 'Mortar', value: 'Clay or lime mortar' },
            { name: 'Level ground', value: 'Prepared building site' }
        ],
        steps: [
            { text: 'Excavate a trench around the building perimeter.' },
            { text: 'Place the largest stones at the bottom — they bear the most weight.' },
            { text: 'Build up with progressively smaller stones, filling gaps with mortar.' },
            { text: 'Level the top course for wall construction.' },
            { text: 'Stone foundations keep buildings dry and stable for generations.' }
        ],
        videoUrl: 'https://youtu.be/lQQ5etGGRiA?si=Shelter'
    },
    {
        id: 'granary-building',
        name: 'Granary Building',
        stage: 1,
        icon: '🏗️',
        category: 'skill',
        subcategory: 'Shelter & Construction Skills',
        objective: 'Build elevated grain storage structures to protect food from pests and moisture.',
        evolution: 'Granaries enabled food surplus storage — the foundation of social complexity and trade.',
        requirements: [
            { name: 'Wood or mud brick', value: 'Building materials' },
            { name: 'Elevated supports', value: 'Posts or stone pillars' },
            { name: 'Plaster', value: 'For interior coating' }
        ],
        steps: [
            { text: 'Build on elevated stone or wooden pillars — keeps grain off the ground.' },
            { text: 'Construct walls from mud brick, wattle-and-daub, or wood.' },
            { text: 'Add a raised floor of wooden planks or packed clay.' },
            { text: 'Coat interior with lime plaster to keep grain dry.' },
            { text: 'Add a tight-fitting door and roof to keep out pests and rain.' }
        ],
        videoUrl: 'https://youtu.be/lQQ5etGGRiA?si=Shelter'
    },
    {
        id: 'kiln-firing-pit',
        name: 'Kiln & Firing Pit',
        stage: 1,
        icon: '🔥',
        category: 'skill',
        subcategory: 'Shelter & Construction Skills',
        objective: 'Build a controlled firing structure for pottery, lime, and metal smelting.',
        evolution: 'Kilns enabled controlled high-temperature firing — essential for pottery, lime production, and later metallurgy.',
        requirements: [
            { name: 'Clay or stone', value: 'For kiln walls' },
            { name: 'Fuel', value: 'Wood or charcoal' },
            { name: 'Ventilation', value: 'Air holes for combustion' }
        ],
        steps: [
            { text: 'Build a circular or rectangular chamber from clay or stone.' },
            { text: 'Add air holes at the bottom and a chimney at the top.' },
            { text: 'Load pottery or materials inside.' },
            { text: 'Fire slowly, gradually increasing temperature.' },
            { text: 'Maintain target temperature (600-1000°C for pottery, 900°C+ for lime) for several hours.' }
        ],
        videoUrl: 'https://youtu.be/lQQ5etGGRiA?si=Shelter'
    },
    // === SKILLS — Textile & Fiber Skills ===
    {
        id: 'cordage-twisting',
        name: 'Cordage Twisting',
        stage: 1,
        icon: '🧵',
        category: 'skill',
        subcategory: 'Textile & Fiber Skills',
        objective: 'Twist plant fibers into strong rope and cordage for binding and construction.',
        evolution: 'Cordage was the foundation of all binding technology — without it, no shelters, bows, or composite tools.',
        requirements: [
            { name: 'Plant fibers', value: 'Willow, hemp, nettle, or grass' },
            { name: 'Water', value: 'For soaking fibers' }
        ],
        steps: [
            { text: 'Harvest and dry plant fibers. Soak to increase pliability.' },
            { text: 'Split fibers into thin strands of uniform thickness.' },
            { text: 'Twist two strands together in one direction (clockwise).' },
            { text: 'Add a third strand and continue twisting — the more strands, the stronger the rope.' },
            { text: 'Cordage is used for lashing, bowstrings, fishing lines, and sewing.' }
        ],
        videoUrl: 'https://youtu.be/b8YHxToejsc?si=WeavingBasket'
    },
    {
        id: 'basket-weaving',
        name: 'Basket Weaving',
        stage: 1,
        icon: '🧺',
        category: 'skill',
        subcategory: 'Textile & Fiber Skills',
        objective: 'Weave plant fibers into containers for storage, transport, and carrying.',
        evolution: 'Basketry enabled food storage and transport — the foundation for agriculture and trade.',
        requirements: [
            { name: 'Flexible fibers', value: 'Willow, reeds, or grass' },
            { name: 'Sharp tool', value: 'For cutting and trimming' },
            { name: 'Water', value: 'For soaking fibers' }
        ],
        steps: [
            { text: 'Soak fibers in water for flexibility.' },
            { text: 'Create a base by crossing thick fibers in a star pattern.' },
            { text: 'Weave thin fibers around the base in a spiral (coil) or over-under pattern.' },
            { text: 'Build up the sides by adding new coils or rows.' },
            { text: 'Finish the rim by folding and tucking fibers. Baskets can be waterproofed with pitch.' }
        ],
        videoUrl: 'https://youtu.be/b8YHxToejsc?si=WeavingBasket'
    },
    {
        id: 'net-making',
        name: 'Net Making',
        stage: 1,
        icon: '🥅',
        category: 'skill',
        subcategory: 'Textile & Fiber Skills',
        objective: 'Knot cordage into mesh nets for fishing, bird catching, and carrying.',
        evolution: 'Nets multiplied food procurement — a single net could catch dozens of fish or birds at once.',
        requirements: [
            { name: 'Cordage', value: 'Plant fiber rope' },
            { name: 'Net gauge', value: 'Wooden stick for uniform mesh size' }
        ],
        steps: [
            { text: 'Create a foundation line of cordage stretched between two points.' },
            { text: 'Tie knots at regular intervals using a net gauge (wooden stick) for uniform mesh.' },
            { text: 'Work row by row, tying each new knot to the one above.' },
            { text: 'Continue until the desired net size is achieved.' },
            { text: 'Attach stone sinkers and wood floats. Nets are used for fishing, bird catching, and carrying loads.' }
        ],
        videoUrl: 'https://youtu.be/b8YHxToejsc?si=WeavingBasket'
    },
    {
        id: 'mat-weaving',
        name: 'Mat Weaving',
        stage: 1,
        icon: '🧺',
        category: 'skill',
        subcategory: 'Textile & Fiber Skills',
        objective: 'Weave flat mats from grasses and reeds for flooring, wall covering, and sleeping.',
        evolution: 'Mats provided clean, insulated surfaces — transforming dirt floors into comfortable living spaces.',
        requirements: [
            { name: 'Long grasses or reeds', value: 'Dried and flexible' },
            { name: 'Cordage', value: 'For binding edges' }
        ],
        steps: [
            { text: 'Lay long grasses or reeds parallel on a flat surface.' },
            { text: 'Weave thinner strands over and under the parallel fibers.' },
            { text: 'Pack the weave tightly for a solid surface.' },
            { text: 'Bind edges with cordage to prevent fraying.' },
            { text: 'Mats are used for flooring, wall insulation, sleeping surfaces, and wrapping goods.' }
        ],
        videoUrl: 'https://youtu.be/b8YHxToejsc?si=WeavingBasket'
    },
    {
        id: 'hide-sewing',
        name: 'Hide Sewing',
        stage: 1,
        icon: '🧵',
        category: 'skill',
        subcategory: 'Textile & Fiber Skills',
        objective: 'Sew animal hides into clothing, bags, and containers using bone needles and sinew thread.',
        evolution: 'Sewn hide clothing enabled human survival in cold climates — the foundation of tailored garments.',
        requirements: [
            { name: 'Prepared hides', value: 'Tanned and softened' },
            { name: 'Bone needle', value: 'Eyed needle for threading' },
            { name: 'Sinew thread', value: 'Animal tendon fiber' }
        ],
        steps: [
            { text: 'Cut hide into pattern pieces for the garment or bag.' },
            { text: 'Thread sinew through the bone needle eye.' },
            { text: 'Pierce holes through both hide pieces with an awl.' },
            { text: 'Sew pieces together using a running stitch or whip stitch.' },
            { text: 'Sinew shrinks as it dries, creating a tight, waterproof seam.' }
        ],
        videoUrl: 'https://youtu.be/b8YHxToejsc?si=WeavingBasket'
    },
    {
        id: 'brain-tanning',
        name: 'Brain Tanning',
        stage: 1,
        icon: '🧠',
        category: 'skill',
        subcategory: 'Textile & Fiber Skills',
        objective: 'Use animal brains to tan hides into soft, supple leather.',
        evolution: 'Brain tanning produces the softest leather — the emulsifying oils in brains chemically preserve the hide fibers.',
        requirements: [
            { name: 'Animal hide', value: 'Fresh, fleshed and scraped' },
            { name: 'Animal brains', value: 'One brain per hide' },
            { name: 'Smoke source', value: 'For smoking the hide' }
        ],
        steps: [
            { text: 'Scrape hide clean — remove all flesh, fat, and hair.' },
            { text: 'Mash animal brains with warm water to create a tanning solution.' },
            { text: 'Soak the hide in the brain solution for several hours.' },
            { text: 'Wring out and stretch the hide continuously as it dries — this softens the fibers.' },
            { text: 'Smoke the hide over a cool fire — smoking makes the leather water-resistant.' }
        ],
        videoUrl: 'https://youtu.be/b8YHxToejsc?si=WeavingBasket'
    },
    {
        id: 'smoke-tanning',
        name: 'Smoke Tanning',
        stage: 1,
        icon: '💨',
        category: 'skill',
        subcategory: 'Textile & Fiber Skills',
        objective: 'Cure leather with smoke for water resistance and preservation.',
        evolution: 'Smoke tanning preserved hides against moisture and decay — essential for clothing and shelter covers.',
        requirements: [
            { name: 'Prepared hide', value: 'Scraped and brain-tanned' },
            { name: 'Smoke source', value: 'Cool, smoky fire' }
        ],
        steps: [
            { text: 'Build a smoky fire using rotten wood or green leaves — cool smoke is essential.' },
            { text: 'Stretch the hide over a frame above the fire.' },
            { text: 'Expose to smoke for several hours, turning periodically.' },
            { text: 'The smoke bonds with hide proteins, creating water-resistant leather.' },
            { text: 'Smoke-tanned leather repels water and resists hardening when wet.' }
        ],
        videoUrl: 'https://youtu.be/b8YHxToejsc?si=WeavingBasket'
    },
    {
        id: 'hide-scraping',
        name: 'Hide Scraping',
        stage: 1,
        icon: '🔪',
        category: 'skill',
        subcategory: 'Textile & Fiber Skills',
        objective: 'Remove flesh, fat, and hair from animal hides to prepare them for tanning.',
        evolution: 'Hide scraping was the essential first step in leather production — without it, hides would rot.',
        requirements: [
            { name: 'Fresh hide', value: 'From hunted animal' },
            { name: 'Fleshing tool', value: 'Stone scraper or bone tool' },
            { name: 'Scraping beam', value: 'Log or curved surface' }
        ],
        steps: [
            { text: 'Stretch the fresh hide over a curved beam or log.' },
            { text: 'Use a stone or bone scraper to remove flesh and fat from the inner side.' },
            { text: 'Scrape the outer side to remove hair and grain layer.' },
            { text: 'Work systematically across the entire hide.' },
            { text: 'The cleaned hide is now ready for tanning. Fresh hides must be processed within hours or they rot.' }
        ],
        videoUrl: 'https://youtu.be/b8YHxToejsc?si=WeavingBasket'
    },
    {
        id: 'fiber-spinning',
        name: 'Fiber Spinning',
        stage: 1,
        icon: '🧵',
        category: 'skill',
        subcategory: 'Textile & Fiber Skills',
        objective: 'Twist plant or animal fibers into continuous thread for weaving and sewing.',
        evolution: 'Spinning created the first true thread — enabling fine textiles and strong cordage.',
        requirements: [
            { name: 'Prepared fibers', value: 'Flax, hemp, nettle, or wool' },
            { name: 'Spindle or hand', value: 'For twisting' }
        ],
        steps: [
            { text: 'Prepare fibers by combing or hackling to align them.' },
            { text: 'Attach a small bundle of fibers to a spindle or twist by hand.' },
            { text: 'Twist continuously while drawing out more fibers.' },
            { text: 'The twist locks the fibers together into a continuous thread.' },
            { text: 'Wind the finished thread onto a spool or into a ball.' }
        ],
        videoUrl: 'https://youtu.be/b8YHxToejsc?si=WeavingBasket'
    },
    {
        id: 'drop-spindle-use',
        name: 'Drop Spindle Use',
        stage: 1,
        icon: '🧵',
        category: 'skill',
        subcategory: 'Textile & Fiber Skills',
        objective: 'Use a weighted drop spindle for efficient, continuous thread production.',
        evolution: 'The drop spindle multiplied spinning speed and produced more uniform thread than hand-spinning.',
        requirements: [
            { name: 'Spindle shaft', value: 'Straight wooden stick' },
            { name: 'Whorl', value: 'Weight (stone, clay, or wood)' },
            { name: 'Fibers', value: 'Flax, wool, or hemp' }
        ],
        steps: [
            { text: 'Attach a whorl (weight) to the bottom of a wooden spindle shaft.' },
            { text: 'Attach prepared fibers to the top of the spindle.' },
            { text: 'Spin the spindle — the weight keeps it turning while you draw out more fibers.' },
            { text: 'The continuous twist produces uniform, strong thread.' },
            { text: 'Wind finished thread onto the spindle shaft. One spindle produces thread all day.' }
        ],
        videoUrl: 'https://youtu.be/b8YHxToejsc?si=WeavingBasket'
    },
    {
        id: 'loom-weaving',
        name: 'Loom Weaving',
        stage: 1,
        icon: '🧶',
        category: 'skill',
        subcategory: 'Textile & Fiber Skills',
        objective: 'Weave thread into cloth using a warp and weft on a loom.',
        evolution: 'Loom weaving produced wide, uniform fabric — transforming clothing, trade, and social status.',
        requirements: [
            { name: 'Thread', value: 'Spun flax, hemp, or wool' },
            { name: 'Loom frame', value: 'Wooden frame or loom weights' },
            { name: 'Shed stick', value: 'For separating warp threads' }
        ],
        steps: [
            { text: 'Set up the warp: stretch parallel threads vertically on the loom frame.' },
            { text: 'Use a shed stick to separate alternating warp threads.' },
            { text: 'Pass the weft (horizontal thread) through the shed.' },
            { text: 'Beat the weft into place with a sword beater or comb.' },
            { text: 'Repeat — lifting alternate warp threads and passing weft. The woven cloth grows row by row.' }
        ],
        videoUrl: 'https://youtu.be/b8YHxToejsc?si=WeavingBasket'
    },
    {
        id: 'felt-making',
        name: 'Felt Making',
        stage: 1,
        icon: '🧤',
        category: 'skill',
        subcategory: 'Textile & Fiber Skills',
        objective: 'Mat wool or hair fibers together using moisture, heat, and pressure to create felt.',
        evolution: 'Felt was the first non-woven textile — waterproof, windproof, and requiring no loom or spinning.',
        requirements: [
            { name: 'Wool or animal hair', value: 'Carded and clean' },
            { name: 'Hot water', value: 'For matting' },
            { name: 'Pressure', value: 'Rolling or pressing' }
        ],
        steps: [
            { text: 'Card wool or hair to align the fibers.' },
            { text: 'Layer fibers in alternating directions to build up thickness.' },
            { text: 'Soak with hot, soapy water (ash lye works as soap).' },
            { text: 'Roll and press the fibers — friction and moisture cause them to mat together.' },
            { text: 'Continue until fibers are permanently interlocked. Felt is waterproof and windproof.' }
        ],
        videoUrl: 'https://youtu.be/b8YHxToejsc?si=WeavingBasket'
    },
    {
        id: 'fabric-dyeing',
        name: 'Fabric Dyeing',
        stage: 1,
        icon: '🎨',
        category: 'skill',
        subcategory: 'Textile & Fiber Skills',
        objective: 'Apply natural plant and mineral dyes to textiles for color and identity.',
        evolution: 'Dyed textiles created cultural identity — specific colors identified tribes, status, and roles.',
        requirements: [
            { name: 'Dye materials', value: 'Ochre, walnut, woad, madder' },
            { name: 'Mordant', value: 'Alum, urine, or wood ash' },
            { name: 'Dye pot', value: 'Clay or stone container' }
        ],
        steps: [
            { text: 'Prepare dye by boiling plant material or minerals in water.' },
            { text: 'Treat fabric with mordant (alum, urine, or ash) to help dye bind.' },
            { text: 'Soak fabric in the hot dye bath for several hours.' },
            { text: 'Rinse and dry. The mordant ensures colorfastness.' },
            { text: 'Dyed textiles identify social status, tribe, and role within the community.' }
        ],
        videoUrl: 'https://youtu.be/b8YHxToejsc?si=WeavingBasket'
    },
    // === SKILLS — Food Processing & Preservation ===
    {
        id: 'animal-butchering',
        name: 'Animal Butchering',
        stage: 1,
        icon: '🔪',
        category: 'skill',
        subcategory: 'Food Processing & Preservation',
        objective: 'Dismember hunted animals efficiently to maximize meat, hide, and bone recovery.',
        evolution: 'Efficient butchering maximized every part of the animal — nothing was wasted.',
        requirements: [
            { name: 'Sharp stone knives', value: 'Flint blades' },
            { name: 'Clean surface', value: 'Flat rock or clean ground' },
            { name: 'Containers', value: 'For organ collection' }
        ],
        steps: [
            { text: 'Bleed the animal immediately after the kill for cleaner meat.' },
            { text: 'Skin the animal carefully — the hide is valuable for clothing and shelter.' },
            { text: 'Remove organs first — liver, heart, and kidneys are nutrient-dense and should be eaten fresh.' },
            { text: 'Separate meat from bone along natural muscle seams.' },
            { text: 'Crack bones for marrow — a concentrated fat and calorie source. Save bones for tools.' }
        ],
        videoUrl: 'https://youtu.be/ILqJy0KuCtg?si=CookingMeat'
    },
    {
        id: 'meat-drying',
        name: 'Meat Drying',
        stage: 1,
        icon: '🥩',
        category: 'skill',
        subcategory: 'Food Processing & Preservation',
        objective: 'Preserve meat by air-drying into jerky for long-term storage.',
        evolution: 'Dried meat stored for months — enabling food security during lean seasons.',
        requirements: [
            { name: 'Fresh meat', value: 'Lean cuts work best' },
            { name: 'Drying rack', value: 'Wooden frame or branches' },
            { name: 'Sun and wind', value: 'For drying' }
        ],
        steps: [
            { text: 'Slice meat into thin strips against the grain.' },
            { text: 'Hang strips on a drying rack in full sun and wind.' },
            { text: 'Turn strips periodically for even drying.' },
            { text: 'Meat is done when it is hard, dark, and bends without breaking.' },
            { text: 'Store dried meat in dry containers. It lasts for months and is lightweight for travel.' }
        ],
        videoUrl: 'https://youtu.be/ILqJy0KuCtg?si=CookingMeat'
    },
    {
        id: 'meat-smoking',
        name: 'Meat Smoking',
        stage: 1,
        icon: '💨',
        category: 'skill',
        subcategory: 'Food Processing & Preservation',
        objective: 'Preserve meat with smoke for extended storage and improved flavor.',
        evolution: 'Smoking preserved meat longer than drying alone and added antimicrobial compounds from the smoke.',
        requirements: [
            { name: 'Fresh meat', value: 'Cut into strips or chunks' },
            { name: 'Smoking rack', value: 'Above a fire' },
            { name: 'Green wood', value: 'For cool, smoky fire' }
        ],
        steps: [
            { text: 'Slice meat and hang on a smoking rack above a fire.' },
            { text: 'Use green or damp wood to produce cool, thick smoke — not flames.' },
            { text: 'Smoke for several hours to days depending on meat thickness.' },
            { text: 'The smoke deposits antimicrobial compounds and creates a protective surface.' },
            { text: 'Smoked meat stores longer than dried meat and has improved flavor.' }
        ],
        videoUrl: 'https://youtu.be/ILqJy0KuCtg?si=CookingMeat'
    },
    {
        id: 'fat-rendering',
        name: 'Fat Rendering',
        stage: 1,
        icon: '🫗',
        category: 'skill',
        subcategory: 'Food Processing & Preservation',
        objective: 'Extract and purify animal fat for cooking, lamp fuel, and leather care.',
        evolution: 'Rendered fat (tallow) was a concentrated calorie source and the primary lamp fuel before plant oils.',
        requirements: [
            { name: 'Animal fat', value: 'Kidney, abdominal, or bone marrow' },
            { name: 'Container', value: 'Clay pot or hide bag' },
            { name: 'Heat source', value: 'Fire' }
        ],
        steps: [
            { text: 'Collect fat deposits from hunted animals.' },
            { text: 'Cut into small pieces and place in a container with a little water.' },
            { text: 'Heat gently over fire. Fat melts and separates from connective tissue.' },
            { text: 'Strain through cloth. Clean tallow solidifies when cool.' },
            { text: 'Use for cooking, lamp fuel, leather conditioning, and waterproofing.' }
        ],
        videoUrl: 'https://youtu.be/ILqJy0KuCtg?si=CookingMeat'
    },
    {
        id: 'grain-grinding',
        name: 'Grain Grinding',
        stage: 1,
        icon: '⚙️',
        category: 'skill',
        subcategory: 'Food Processing & Preservation',
        objective: 'Grind harvested grain into flour using quern stones.',
        evolution: 'Grain grinding converted harvested grain into edible flour — the daily task of every household.',
        requirements: [
            { name: 'Saddle quern or mortar', value: 'Stone grinding tool' },
            { name: 'Harvested grain', value: 'Wheat, barley, or other cereals' },
            { name: 'Sieve', value: 'Woven basket for sifting' }
        ],
        steps: [
            { text: 'Place grain on the grinding stone surface.' },
            { text: 'Rub the hand stone back and forth in a grinding motion.' },
            { text: 'The grain breaks down into flour between the stones.' },
            { text: 'Sift flour through a woven sieve to remove large particles.' },
            { text: 'Re-grind coarse particles. Fresh flour is used for bread, porridge, or stored dry.' }
        ],
        videoUrl: 'https://youtu.be/9Ekk4JCb6OM?si=BreadGrain'
    },
    {
        id: 'grain-storage',
        name: 'Grain Storage',
        stage: 1,
        icon: '🏺',
        category: 'skill',
        subcategory: 'Food Processing & Preservation',
        objective: 'Store surplus grain in dry, sealed containers for year-round food security.',
        evolution: 'Grain storage enabled food surplus — the foundation of trade, specialization, and social complexity.',
        requirements: [
            { name: 'Dry grain', value: 'Threshed and winnowed' },
            { name: 'Storage containers', value: 'Clay pots, baskets, or underground pits' },
            { name: 'Dry location', value: 'Elevated, ventilated area' }
        ],
        steps: [
            { text: 'Ensure grain is thoroughly dried before storage — moisture causes sprouting and mold.' },
            { text: 'Store in clay pots, lined baskets, or underground pits with clay lining.' },
            { text: 'Keep storage areas elevated and ventilated to prevent moisture.' },
            { text: 'Check stored grain periodically for pests and mold.' },
            { text: 'Grain surplus enables trade, supports non-farming specialists, and feeds populations through winter.' }
        ],
        videoUrl: 'https://youtu.be/9Ekk4JCb6OM?si=BreadGrain'
    },
    {
        id: 'fermentation',
        name: 'Fermentation',
        stage: 1,
        icon: '🍺',
        category: 'skill',
        subcategory: 'Food Processing & Preservation',
        objective: 'Use natural yeast to ferment grain and fruit into beer, wine, and preserved foods.',
        evolution: 'Fermentation preserved food, created safe drinking water alternatives, and enabled social gatherings.',
        requirements: [
            { name: 'Grain or fruit', value: 'Barley, wheat, or grapes' },
            { name: 'Water', value: 'Clean water for fermentation' },
            { name: 'Container', value: 'Clay pot or skin bag' }
        ],
        steps: [
            { text: 'Crush or grind grain/fruit to release sugars.' },
            { text: 'Mix with water in a container. Wild yeast on fruit skins or in the air starts fermentation.' },
            { text: 'Cover loosely and let sit for several days. Bubbles indicate active fermentation.' },
            { text: 'Strain and drink. Fermented beverages are safer than untreated water.' },
            { text: 'Fermentation also preserves vegetables (sauerkraut) and dairy (yogurt, cheese).' }
        ],
        videoUrl: 'https://youtu.be/9Ekk4JCb6OM?si=BreadGrain'
    },
    {
        id: 'bread-making',
        name: 'Bread Making',
        stage: 1,
        icon: '🍞',
        category: 'skill',
        subcategory: 'Food Processing & Preservation',
        objective: 'Mix grain flour with water and bake into bread for a staple food.',
        evolution: 'Bread was the staple food of settled societies — nutritious, storable, and the foundation of daily diet.',
        requirements: [
            { name: 'Ground grain flour', value: 'Wheat, barley, or other cereals' },
            { name: 'Water', value: 'For dough' },
            { name: 'Hot stones or oven', value: 'For baking' }
        ],
        steps: [
            { text: 'Mix flour with water to form a stiff dough.' },
            { text: 'Knead the dough to develop gluten (for wheat-based dough).' },
            { text: 'Let dough rest — wild yeast may cause it to rise (leavened bread).' },
            { text: 'Shape into flat loaves or balls.' },
            { text: 'Bake on hot stones, in hot ash, or in a clay oven. Bread provides concentrated, storable calories.' }
        ],
        videoUrl: 'https://youtu.be/9Ekk4JCb6OM?si=BreadGrain'
    },
    {
        id: 'beer-brewing',
        name: 'Beer Brewing',
        stage: 1,
        icon: '🍺',
        category: 'skill',
        subcategory: 'Food Processing & Preservation',
        objective: 'Brew grain-based beer for nutrition, hydration, and social bonding.',
        evolution: 'Beer was a daily nutritional beverage — safer than water and rich in B vitamins from yeast.',
        requirements: [
            { name: 'Grain', value: 'Barley or wheat' },
            { name: 'Water', value: 'For mashing and fermentation' },
            { name: 'Fermentation vessel', value: 'Clay pot' }
        ],
        steps: [
            { text: 'Malt grain by soaking and allowing it to sprout — this converts starch to sugar.' },
            { text: 'Dry and crush the malted grain.' },
            { text: 'Mix with hot water to create a mash — sugars dissolve into the water.' },
            { text: 'Strain the liquid (wort) into a fermentation vessel.' },
            { text: 'Let wild yeast ferment for several days. Beer is nutritious, safe, and social.' }
        ],
        videoUrl: 'https://youtu.be/9Ekk4JCb6OM?si=BreadGrain'
    },
    {
        id: 'salt-curing',
        name: 'Salt Curing',
        stage: 1,
        icon: '🧂',
        category: 'skill',
        subcategory: 'Food Processing & Preservation',
        objective: 'Preserve meat and fish with salt for long-term storage.',
        evolution: 'Salt curing preserved food for months without refrigeration — enabling food security and long-distance trade.',
        requirements: [
            { name: 'Salt', value: 'From springs, rock deposits, or evaporation' },
            { name: 'Meat or fish', value: 'Fresh catch' },
            { name: 'Container', value: 'For storage' }
        ],
        steps: [
            { text: 'Cut meat or fish into strips or portions.' },
            { text: 'Pack generously with salt — salt draws out moisture and inhibits bacteria.' },
            { text: 'Layer salted meat in a container with more salt between layers.' },
            { text: 'Store in a cool, dry place. Salt-cured meat lasts for months.' },
            { text: 'Soak in water before cooking to remove excess salt.' }
        ],
        videoUrl: 'https://youtu.be/d6N9TNeVYfw?si=MiningStone'
    },
    {
        id: 'seed-saving',
        name: 'Seed Saving',
        stage: 1,
        icon: '🌱',
        category: 'skill',
        subcategory: 'Food Processing & Preservation',
        objective: 'Select and save the best seeds for planting next season.',
        evolution: 'Seed saving was the foundation of agriculture — deliberate selection drove crop domestication.',
        requirements: [
            { name: 'Mature plants', value: 'For seed collection' },
            { name: 'Storage containers', value: 'Dry, sealed pots' },
            { name: 'Selection criteria', value: 'Largest, healthiest seeds' }
        ],
        steps: [
            { text: 'Select the largest, healthiest plants in the field.' },
            { text: 'Allow seeds to fully mature and dry on the plant.' },
            { text: 'Harvest seed heads and thresh to separate seeds.' },
            { text: 'Store seeds in dry, sealed containers away from moisture and pests.' },
            { text: 'Plant saved seeds next season — each generation becomes better adapted to local conditions.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=Domestication'
    },
    {
        id: 'selective-breeding',
        name: 'Selective Breeding',
        stage: 1,
        icon: '🧬',
        category: 'skill',
        subcategory: 'Food Processing & Preservation',
        objective: 'Breed plants and animals for desirable traits over generations.',
        evolution: 'Selective breeding transformed wild species into domesticated crops and livestock — the foundation of agriculture.',
        requirements: [
            { name: 'Plants or animals', value: 'With variable traits' },
            { name: 'Observation', value: 'Tracking traits across generations' },
            { name: 'Time', value: 'Multiple growing seasons' }
        ],
        steps: [
            { text: 'Observe variation in wild populations — some plants are larger, sweeter, or more productive.' },
            { text: 'Save seeds from the best plants or breed the best animals together.' },
            { text: 'Plant or raise the next generation from selected parents.' },
            { text: 'Repeat selection each generation — desirable traits accumulate.' },
            { text: 'Over many generations, wild species become domesticated — larger, more productive, and dependent on humans.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=Domestication'
    },
    // === SKILLS — Art, Communication & Cognitive ===
    {
        id: 'pigment-preparation',
        name: 'Pigment Preparation',
        stage: 1,
        icon: '🎨',
        category: 'skill',
        subcategory: 'Art, Communication & Cognitive',
        objective: 'Grind minerals and organic materials into paint for art and body decoration.',
        evolution: 'Pigment preparation enabled the first art — cave paintings, body decoration, and ritual objects.',
        requirements: [
            { name: 'Mineral pigments', value: 'Ochre, charcoal, manganese' },
            { name: 'Grinding stone', value: 'Flat surface for grinding' },
            { name: 'Binder', value: 'Water, fat, or egg' }
        ],
        steps: [
            { text: 'Collect colored minerals — red ochre, black charcoal, white chalk, yellow ochre.' },
            { text: 'Grind minerals to fine powder on a flat stone.' },
            { text: 'Mix powder with water for paint, fat for body paint, or egg for adhesive paint.' },
            { text: 'Test color on a test surface before applying to art.' },
            { text: 'Store dry pigment in shells or containers. Wet paint must be used immediately.' }
        ],
        videoUrl: 'https://youtu.be/aRIDKBF77Ak?si=CaveArt'
    },
    {
        id: 'cave-painting',
        name: 'Cave Painting',
        stage: 1,
        icon: '🖼️',
        category: 'skill',
        subcategory: 'Art, Communication & Cognitive',
        objective: 'Create paintings on cave walls using natural pigments.',
        evolution: 'Cave paintings are the oldest surviving art — some dating back 40,000 years, showing symbolic thinking.',
        requirements: [
            { name: 'Prepared pigments', value: 'Ochre, charcoal, manganese' },
            { name: 'Drawing tools', value: 'Bone sticks, brushes, or hands' },
            { name: 'Light source', value: 'Torches or fat lamps' }
        ],
        steps: [
            { text: 'Prepare pigments by grinding minerals and mixing with binder.' },
            { text: 'Use bone sticks, brushes, or fingers to apply paint to cave walls.' },
            { text: 'Blow pigment through a hollow bone for spray effects (hand stencils).' },
            { text: 'Paint animals, human figures, hand stencils, and abstract symbols.' },
            { text: 'Cave paintings may have served as hunting magic, storytelling, or ritual communication.' }
        ],
        videoUrl: 'https://youtu.be/aRIDKBF77Ak?si=CaveArt'
    },
    {
        id: 'petroglyph-carving',
        name: 'Petroglyph Carving',
        stage: 1,
        icon: '⛏️',
        category: 'skill',
        subcategory: 'Art, Communication & Cognitive',
        objective: 'Engrave images into rock surfaces using stone tools.',
        evolution: 'Petroglyphs are permanent rock art — surviving for thousands of years as records of human presence.',
        requirements: [
            { name: 'Rock surface', value: 'Smooth, suitable stone face' },
            { name: 'Engraving tool', value: 'Sharp stone or metal point' },
            { name: 'Hammer stone', value: 'For pecking' }
        ],
        steps: [
            { text: 'Select a smooth rock surface suitable for engraving.' },
            { text: 'Peck the rock surface with a harder stone to create a rough outline.' },
            { text: 'Engrave details with a sharp stone point.' },
            { text: 'Carve animals, human figures, symbols, and maps.' },
            { text: 'Petroglyphs survive for millennia — permanent records of human presence and belief.' }
        ],
        videoUrl: 'https://youtu.be/aRIDKBF77Ak?si=CaveArt'
    },
    {
        id: 'figurine-carving',
        name: 'Figurine Carving',
        stage: 1,
        icon: '🗿',
        category: 'skill',
        subcategory: 'Art, Communication & Cognitive',
        objective: 'Carve small figurines from bone, ivory, stone, or clay.',
        evolution: 'Figurines represent the first three-dimensional art — religious icons, fertility symbols, and personal objects.',
        requirements: [
            { name: 'Carving material', value: 'Bone, ivory, stone, or clay' },
            { name: 'Carving tools', value: 'Burins, scrapers, drills' },
            { name: 'Abrasives', value: 'Sandstone for smoothing' }
        ],
        steps: [
            { text: 'Select material — bone, ivory, soapstone, or clay.' },
            { text: 'Rough-shape the figure with a burin or scraper.' },
            { text: 'Carve details — facial features, limbs, clothing.' },
            { text: 'Smooth with sandstone abrasive.' },
            { text: 'Figurines may represent deities, ancestors, fertility symbols, or personal art.' }
        ],
        videoUrl: 'https://youtu.be/aRIDKBF77Ak?si=CaveArt'
    },
    {
        id: 'jewelry-making',
        name: 'Jewelry Making',
        stage: 1,
        icon: '💎',
        category: 'skill',
        subcategory: 'Art, Communication & Cognitive',
        objective: 'Create personal ornaments from shells, bones, teeth, and stones.',
        evolution: 'Jewelry indicated social status, group identity, and personal achievement — the first fashion.',
        requirements: [
            { name: 'Ornament materials', value: 'Shells, bones, teeth, stones, amber' },
            { name: 'Drilling tool', value: 'Flint drill or antler' },
            { name: 'Cordage', value: 'For stringing' }
        ],
        steps: [
            { text: 'Select decorative materials — shells, bones, teeth, stones, amber.' },
            { text: 'Shape materials with stone tools. Drill holes for stringing.' },
            { text: 'Polish with fine abrasive for a smooth, attractive finish.' },
            { text: 'String beads onto cordage for necklaces, bracelets, and headbands.' },
            { text: 'Jewelry indicates social status, group membership, and personal achievement.' }
        ],
        videoUrl: 'https://youtu.be/aRIDKBF77Ak?si=CaveArt'
    },
    {
        id: 'bone-flute-making',
        name: 'Bone Flute Making',
        stage: 1,
        icon: '🎵',
        category: 'skill',
        subcategory: 'Art, Communication & Cognitive',
        objective: 'Carve musical flutes from hollow bird bones for music and ritual.',
        evolution: 'Bone flutes are the oldest known musical instruments — music predates agriculture and was central to social life.',
        requirements: [
            { name: 'Hollow bird bone', value: 'Wing bone of large bird' },
            { name: 'Carving tools', value: 'Burin, drill' },
            { name: 'Measuring tool', value: 'For finger hole spacing' }
        ],
        steps: [
            { text: 'Select a hollow bird wing bone — clean and dry.' },
            { text: 'Carve a mouthpiece notch at one end.' },
            { text: 'Drill finger holes along the bone at measured intervals.' },
            { text: 'Tune by adjusting hole size and position.' },
            { text: 'Play by blowing across the mouthpiece and covering holes. Music is central to ritual and social bonding.' }
        ],
        videoUrl: 'https://youtu.be/enoPn1X3-oE?si=BoneAntler'
    },
    {
        id: 'body-painting',
        name: 'Body Painting',
        stage: 1,
        icon: '🎨',
        category: 'skill',
        subcategory: 'Art, Communication & Cognitive',
        objective: 'Apply natural pigments to skin for decoration, ritual, and camouflage.',
        evolution: 'Body painting was the first form of personal adornment — indicating status, group identity, and spiritual state.',
        requirements: [
            { name: 'Pigments', value: 'Ochre, charcoal, chalk' },
            { name: 'Binder', value: 'Animal fat or water' },
            { name: 'Application tool', value: 'Fingers, bone stick, or brush' }
        ],
        steps: [
            { text: 'Mix pigment with fat or water to create paint.' },
            { text: 'Apply to skin with fingers, sticks, or brushes.' },
            { text: 'Create patterns that indicate status, group membership, or spiritual state.' },
            { text: 'Red ochre was most common — symbolizing life, blood, and power.' },
            { text: 'Body painting was used for ritual, warfare, courtship, and daily decoration.' }
        ],
        videoUrl: 'https://youtu.be/aRIDKBF77Ak?si=CaveArt'
    },
    {
        id: 'tattooing',
        name: 'Tattooing',
        stage: 1,
        icon: '✒️',
        category: 'skill',
        subcategory: 'Art, Communication & Cognitive',
        objective: 'Insert pigment under the skin for permanent body decoration.',
        evolution: 'Tattoos are permanent body art — some of the oldest known tattoos date back 5,300 years (Ötzi the Iceman).',
        requirements: [
            { name: 'Pigment', value: 'Charcoal or soot' },
            { name: 'Needle', value: 'Bone or thorn' },
            { name: 'Mallet', value: 'For tapping needle' }
        ],
        steps: [
            { text: 'Mix charcoal or soot with water to create ink.' },
            { text: 'Dip needle in ink and tap into the skin with a mallet.' },
            { text: 'Create lines and patterns by repeated puncturing.' },
            { text: 'The ink stays under the skin permanently.' },
            { text: 'Tattoos indicate status, achievement, group membership, and spiritual protection.' }
        ],
        videoUrl: 'https://youtu.be/aRIDKBF77Ak?si=CaveArt'
    },
    {
        id: 'lunar-timekeeping',
        name: 'Lunar Timekeeping',
        stage: 1,
        icon: '🌙',
        category: 'skill',
        subcategory: 'Art, Communication & Cognitive',
        objective: 'Track time by observing and recording lunar phases.',
        evolution: 'Lunar timekeeping was the first calendar — enabling prediction of seasons, migrations, and harvest times.',
        requirements: [
            { name: 'Recording surface', value: 'Bone, wood, or cave wall' },
            { name: 'Engraving tool', value: 'Burin or sharp stone' },
            { name: 'Observation', value: 'Night sky watching' }
        ],
        steps: [
            { text: 'Observe the moon each night — note its phase and position.' },
            { text: 'Make a mark on bone or wood for each lunar phase.' },
            { text: 'After one full cycle (29.5 days), start a new set of marks.' },
            { text: 'Track patterns over months and years — predict seasons and events.' },
            { text: 'Lunar calendars enabled planning for migration, planting, and hunting.' }
        ],
        videoUrl: 'https://youtu.be/cdwOIdQ4VuI?si=SocialCognitive'
    },
    {
        id: 'star-tracking',
        name: 'Star Tracking',
        stage: 1,
        icon: '⭐',
        category: 'skill',
        subcategory: 'Art, Communication & Cognitive',
        objective: 'Navigate and tell time by observing star positions.',
        evolution: 'Star tracking enabled night navigation and seasonal prediction — expanding human range and food security.',
        requirements: [
            { name: 'Clear night sky', value: 'For observation' },
            { name: 'Memory', value: 'Star patterns and positions' },
            { name: 'Reference points', value: 'Horizon markers' }
        ],
        steps: [
            { text: 'Observe star positions each night — note which stars rise and set.' },
            { text: 'Identify key constellations and the North Star.' },
            { text: 'Use star positions to determine direction at night.' },
            { text: 'Track seasonal star movements — certain stars signal planting or migration time.' },
            { text: 'Star knowledge enabled long-distance travel and seasonal planning.' }
        ],
        videoUrl: 'https://youtu.be/cdwOIdQ4VuI?si=SocialCognitive'
    },
    {
        id: 'symbolic-marking',
        name: 'Symbolic Marking',
        stage: 1,
        icon: '✏️',
        category: 'skill',
        subcategory: 'Art, Communication & Cognitive',
        objective: 'Create abstract symbols for communication and record-keeping.',
        evolution: 'Abstract symbols were the precursor to writing — enabling complex communication and record-keeping.',
        requirements: [
            { name: 'Marking surface', value: 'Rock, bone, or wood' },
            { name: 'Marking tool', value: 'Charcoal, ochre, or engraving tool' }
        ],
        steps: [
            { text: 'Create abstract marks — lines, dots, crosses, and geometric shapes.' },
            { text: 'Agree on meanings within the group — symbols must be shared to be useful.' },
            { text: 'Use symbols for counting, ownership, directions, and warnings.' },
            { text: 'Symbol systems evolved into proto-writing and eventually full writing systems.' },
            { text: 'Symbolic marking enabled complex communication beyond spoken language.' }
        ],
        videoUrl: 'https://youtu.be/aRIDKBF77Ak?si=CaveArt'
    },
    {
        id: 'oral-tradition',
        name: 'Oral Tradition',
        stage: 1,
        icon: '🗣️',
        category: 'skill',
        subcategory: 'Art, Communication & Cognitive',
        objective: 'Pass knowledge through stories, songs, and direct teaching.',
        evolution: 'Oral tradition preserved all human knowledge before writing — stories, techniques, history, and law.',
        requirements: [
            { name: 'Teacher or elder', value: 'Knowledge keeper' },
            { name: 'Learner', value: 'Attentive listener' },
            { time: 'Time', value: 'Repeated teaching and practice' }
        ],
        steps: [
            { text: 'Elders teach through stories — embedding knowledge in memorable narratives.' },
            { text: 'Songs and chants aid memory — rhythm and rhyme make information sticky.' },
            { text: 'Direct demonstration — showing techniques by doing.' },
            { text: 'Apprenticeship — learners practice under supervision.' },
            { text: 'Oral tradition preserved all knowledge before writing — a living library passed generation to generation.' }
        ],
        videoUrl: 'https://youtu.be/cdwOIdQ4VuI?si=SocialCognitive'
    },
    {
        id: 'sign-language',
        name: 'Sign Language',
        stage: 1,
        icon: '🤟',
        category: 'skill',
        subcategory: 'Art, Communication & Cognitive',
        objective: 'Communicate using hand gestures for silent or long-distance communication.',
        evolution: 'Sign language enabled silent hunting communication and long-distance signaling across barriers.',
        requirements: [
            { name: 'Shared vocabulary', value: 'Agreed gesture meanings' },
            { name: 'Visibility', value: 'Line of sight between communicators' }
        ],
        steps: [
            { text: 'Develop a shared set of gestures for common concepts.' },
            { text: 'Practice gestures until they are quick and recognizable.' },
            { text: 'Use for silent hunting communication — hand signals don\'t alert prey.' },
            { text: 'Use for long-distance communication across valleys or rivers.' },
            { text: 'Sign language enabled complex communication without sound.' }
        ],
        videoUrl: 'https://youtu.be/cdwOIdQ4VuI?si=SocialCognitive'
    },
    // === SKILLS — Medical & Healing ===
    {
        id: 'herbal-medicine',
        name: 'Herbal Medicine',
        stage: 1,
        icon: '🌿',
        category: 'skill',
        subcategory: 'Medical & Healing',
        objective: 'Use plant-based remedies to treat illness, wounds, and disease.',
        evolution: 'Herbal medicine was the foundation of all medical science — reducing mortality and enabling population growth.',
        requirements: [
            { name: 'Medicinal plants', value: 'Willow, yarrow, plantain, garlic' },
            { name: 'Preparation tools', value: 'Mortar, pestle, boiling pot' },
            { name: 'Knowledge', value: 'Passed down from healers' }
        ],
        steps: [
            { text: 'Learn medicinal plants from healers — willow bark (pain), yarrow (bleeding), plantain (wounds).' },
            { text: 'Prepare remedies: teas (boil leaves), poultices (crush and apply), or chew raw.' },
            { text: 'Garlic for antibacterial treatment. Mint for digestive issues. Pine resin as antiseptic.' },
            { text: 'Apply treatments and monitor for improvement.' },
            { text: 'Herbal medicine reduced mortality from infection, pain, and digestive illness.' }
        ],
        videoUrl: 'https://youtu.be/qSlsiNVbP4U?si=Medicine'
    },
    {
        id: 'wound-treatment',
        name: 'Wound Treatment',
        stage: 1,
        icon: '🩹',
        category: 'skill',
        subcategory: 'Medical & Healing',
        objective: 'Clean, dress, and heal wounds using natural materials.',
        evolution: 'Wound treatment reduced death from infection — critical for survival in a world without antibiotics.',
        requirements: [
            { name: 'Clean water', value: 'For wound cleaning' },
            { name: 'Dressing material', value: 'Moss, honey, or clean cloth' },
            { name: 'Binding', value: 'Cordage or cloth strips' }
        ],
        steps: [
            { text: 'Clean the wound with clean water — remove dirt and debris.' },
            { text: 'Apply honey (antibacterial) or sphagnum moss (antiseptic) to the wound.' },
            { text: 'Cover with clean cloth or moss. Change dressing regularly.' },
            { text: 'Monitor for signs of infection — redness, swelling, fever.' },
            { text: 'Maggot therapy: allow fly larvae to clean dead tissue from wounds — a natural debridement.' }
        ],
        videoUrl: 'https://youtu.be/qSlsiNVbP4U?si=Medicine'
    },
    {
        id: 'bone-setting',
        name: 'Bone Setting',
        stage: 1,
        icon: '🦴',
        category: 'skill',
        subcategory: 'Medical & Healing',
        objective: 'Realign and splint broken bones for proper healing.',
        evolution: 'Bone setting enabled fracture recovery — allowing injured individuals to return to productive life.',
        requirements: [
            { name: 'Splint material', value: 'Wooden sticks or bark' },
            { name: 'Binding', value: 'Cordage or cloth strips' },
            { name: 'Padding', value: 'Moss or soft cloth' }
        ],
        steps: [
            { text: 'Realign the broken bone by gentle traction and manipulation.' },
            { text: 'Pad the area with moss or soft cloth.' },
            { text: 'Apply wooden splints on both sides of the broken bone.' },
            { text: 'Bind splints firmly but not so tight as to cut circulation.' },
            { text: 'Keep the splint in place for weeks until the bone heals. Check regularly for proper alignment.' }
        ],
        videoUrl: 'https://youtu.be/qSlsiNVbP4U?si=Medicine'
    },
    {
        id: 'trepanation',
        name: 'Trepanation',
        stage: 1,
        icon: '🔩',
        category: 'skill',
        subcategory: 'Medical & Healing',
        objective: 'Drill or scrape a hole in the skull to treat head injuries or spiritual conditions.',
        evolution: 'Trepanation is the oldest known surgery — evidence of survival shows remarkable medical skill.',
        requirements: [
            { name: 'Cutting tool', value: 'Flint scraper or drill' },
            { name: 'Patient', value: 'Restraint and pain management' },
            { name: 'Aftercare', value: 'Clean dressing and protection' }
        ],
        steps: [
            { text: 'Shave the area and clean the scalp.' },
            { text: 'Use a flint scraper or drill to carefully remove a circular piece of skull.' },
            { text: 'Stop before damaging the brain membrane (dura mater).' },
            { text: 'Cover with clean dressing. Many trepanation patients survived — bone healing is visible.' },
            { text: 'Trepanation may have treated head injuries, headaches, epilepsy, or spiritual conditions.' }
        ],
        videoUrl: 'https://youtu.be/qSlsiNVbP4U?si=Medicine'
    },
    {
        id: 'shamanic-healing',
        name: 'Shamanic Healing',
        stage: 1,
        icon: '🔮',
        category: 'skill',
        subcategory: 'Medical & Healing',
        objective: 'Use ritual, trance, and plant medicine to treat spiritual and physical illness.',
        evolution: 'Shamanic healing addressed the spiritual dimension of illness — providing psychological comfort and community support.',
        requirements: [
            { name: 'Ritual space', value: 'Fire, drums, chanting' },
            { name: 'Entheogenic plants', value: 'Optional — for trance induction' },
            { name: 'Community', value: 'For group participation' }
        ],
        steps: [
            { text: 'Create a ritual space with fire, music, and community participation.' },
            { text: 'Enter trance state through drumming, dancing, or plant medicine.' },
            { text: 'Diagnose the spiritual cause of illness — often attributed to spirit intrusion or soul loss.' },
            { text: 'Perform healing ritual — extraction, soul retrieval, or spiritual cleansing.' },
            { text: 'Shamanic healing combined herbal medicine with ritual — addressing both physical and spiritual causes.' }
        ],
        videoUrl: 'https://youtu.be/qSlsiNVbP4U?si=Medicine'
    },
    {
        id: 'willow-bark-medicine',
        name: 'Willow Bark Medicine',
        stage: 1,
        icon: '🌿',
        category: 'skill',
        subcategory: 'Medical & Healing',
        objective: 'Use willow bark as a natural pain reliever and anti-inflammatory.',
        evolution: 'Willow bark contains salicin — the natural precursor to aspirin. It was used for pain relief for thousands of years.',
        requirements: [
            { name: 'Willow bark', value: 'From willow trees' },
            { name: 'Water', value: 'For tea preparation' },
            { name: 'Container', value: 'For boiling' }
        ],
        steps: [
            { text: 'Harvest inner bark from willow branches.' },
            { text: 'Chew raw bark for immediate pain relief.' },
            { text: 'Or boil bark in water to make tea.' },
            { text: 'Drink tea for pain relief, fever reduction, and anti-inflammatory effects.' },
            { text: 'Willow bark is the natural precursor to aspirin — one of the oldest known medicines.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=FarmingForaging'
    },
    {
        id: 'poultice-making',
        name: 'Poultice Making',
        stage: 1,
        icon: '🌿',
        category: 'skill',
        subcategory: 'Medical & Healing',
        objective: 'Crush and apply medicinal plants directly to wounds and inflamed areas.',
        evolution: 'Poultices delivered concentrated plant medicine directly to the affected area — one of the oldest medical treatments.',
        requirements: [
            { name: 'Medicinal plant', value: 'Plantain, comfrey, or other healing herb' },
            { name: 'Mortar or stone', value: 'For crushing' },
            { name: 'Binding', value: 'Cloth strip or leaves' }
        ],
        steps: [
            { text: 'Collect fresh medicinal leaves — plantain, comfrey, or yarrow.' },
            { text: 'Crush leaves with a stone or in a mortar to release juices.' },
            { text: 'Apply the crushed plant material directly to the wound or inflamed area.' },
            { text: 'Bind with cloth strip or large leaves to hold in place.' },
            { text: 'Change poultice regularly. Poultices draw out infection and promote healing.' }
        ],
        videoUrl: 'https://youtu.be/qSlsiNVbP4U?si=Medicine'
    },
    // === SKILLS — Navigation & Environmental ===
    {
        id: 'star-navigation',
        name: 'Star Navigation',
        stage: 1,
        icon: '🧭',
        category: 'skill',
        subcategory: 'Navigation & Environmental',
        objective: 'Navigate long distances at night using star positions.',
        evolution: 'Star navigation enabled travel in darkness and across featureless terrain — expanding human range dramatically.',
        requirements: [
            { name: 'Clear night sky', value: 'For star observation' },
            { name: 'Knowledge of constellations', value: 'Key navigation stars' },
            { name: 'Compass direction', value: 'North Star or Southern Cross' }
        ],
        steps: [
            { text: 'Identify the North Star (Polaris) or Southern Cross depending on hemisphere.' },
            { text: 'Use key constellations as reference points for direction.' },
            { text: 'Navigate by keeping specific stars at a constant bearing.' },
            { text: 'Track star movement across the night — stars rise in the east and set in the west.' },
            { text: 'Star navigation enabled ocean voyages, desert crossings, and long-distance trade.' }
        ],
        videoUrl: 'https://youtu.be/cdwOIdQ4VuI?si=SocialCognitive'
    },
    {
        id: 'sun-position-tracking',
        name: 'Sun Position Tracking',
        stage: 1,
        icon: '☀️',
        category: 'skill',
        subcategory: 'Navigation & Environmental',
        objective: 'Determine direction and time of day from the sun\'s position.',
        evolution: 'Sun tracking was the most basic navigation skill — enabling daytime orientation without tools.',
        requirements: [
            { name: 'Clear sky', value: 'For sun observation' },
            { name: 'Stick or marker', value: 'For shadow measurement' }
        ],
        steps: [
            { text: 'The sun rises in the east and sets in the west — use this for basic orientation.' },
            { text: 'At noon, the sun is due south (northern hemisphere) or due north (southern hemisphere).' },
            { text: 'Use a stick and its shadow: shadow points north at noon (northern hemisphere).' },
            { text: 'Track shadow length throughout the day — shortest shadow is noon.' },
            { text: 'Sun position tells both direction and approximate time of day.' }
        ],
        videoUrl: 'https://youtu.be/cdwOIdQ4VuI?si=SocialCognitive'
    },
    {
        id: 'seasonal-prediction',
        name: 'Seasonal Prediction',
        stage: 1,
        icon: '📅',
        category: 'skill',
        subcategory: 'Navigation & Environmental',
        objective: 'Predict seasonal changes from environmental cues.',
        evolution: 'Seasonal prediction enabled planning for migration, planting, and food storage — critical for survival.',
        requirements: [
            { name: 'Environmental observation', value: 'Plants, animals, weather' },
            { name: 'Memory', value: 'Past seasonal patterns' },
            { name: 'Calendar system', value: 'Lunar or solar markers' }
        ],
        steps: [
            { text: 'Observe plant flowering and leafing — these signal seasonal change.' },
            { text: 'Watch animal behavior — migration, breeding, and hibernation patterns.' },
            { text: 'Note weather patterns — wind direction, cloud types, and temperature trends.' },
            { text: 'Use lunar calendar to track seasonal progression.' },
            { text: 'Predict seasons weeks in advance — plan planting, migration, and storage accordingly.' }
        ],
        videoUrl: 'https://youtu.be/cdwOIdQ4VuI?si=SocialCognitive'
    },
    {
        id: 'terrain-mapping',
        name: 'Terrain Mapping',
        stage: 1,
        icon: '🗺️',
        category: 'skill',
        subcategory: 'Navigation & Environmental',
        objective: 'Create mental and physical maps of the territory for navigation.',
        evolution: 'Terrain mapping enabled efficient travel, resource location, and territorial defense.',
        requirements: [
            { name: 'Travel experience', value: 'Knowledge of the landscape' },
            { name: 'Marking materials', value: 'Stones, sticks, or charcoal' }
        ],
        steps: [
            { text: 'Travel the territory and note key landmarks — rivers, mountains, caves, and resources.' },
            { text: 'Create mental maps — visualize the landscape from above.' },
            { text: 'Mark trails with cairns (stone piles), notches on trees, or painted rocks.' },
            { text: 'Draw physical maps on cave walls, bark, or sand when needed.' },
            { text: 'Share maps through oral description and demonstration with group members.' }
        ],
        videoUrl: 'https://youtu.be/cdwOIdQ4VuI?si=SocialCognitive'
    },
    {
        id: 'water-source-finding',
        name: 'Water Source Finding',
        stage: 1,
        icon: '💧',
        category: 'skill',
        subcategory: 'Navigation & Environmental',
        objective: 'Locate fresh water sources in the landscape.',
        evolution: 'Finding water was the most critical survival skill — humans can only survive 3 days without it.',
        requirements: [
            { name: 'Knowledge of terrain', value: 'Where water collects' },
            { name: 'Animal observation', value: 'Following animal trails' },
            { name: 'Digging tools', value: 'For well digging' }
        ],
        steps: [
            { text: 'Follow animal trails — they lead to water sources.' },
            { text: 'Look for green vegetation in dry areas — indicates underground water.' },
            { text: 'Search valley bottoms and canyon floors — water flows downhill.' },
            { text: 'Dig in dry riverbeds — groundwater often lies just below the surface.' },
            { text: 'Collect dew from plants and condensation from rocks in the early morning.' }
        ],
        videoUrl: 'https://youtu.be/cdwOIdQ4VuI?si=SocialCognitive'
    },
    {
        id: 'animal-migration-tracking',
        name: 'Animal Migration Tracking',
        stage: 1,
        icon: '🦌',
        category: 'skill',
        subcategory: 'Navigation & Environmental',
        objective: 'Predict and follow animal migration patterns for hunting.',
        evolution: 'Migration tracking enabled reliable food procurement — timing hunts to coincide with animal movements.',
        requirements: [
            { name: 'Observation', value: 'Seasonal animal patterns' },
            { name: 'Knowledge of routes', value: 'Traditional migration paths' },
            { name: 'Timing', value: 'Calendar or seasonal markers' }
        ],
        steps: [
            { text: 'Observe animal movements over multiple seasons — note patterns.' },
            { text: 'Identify migration routes — animals follow consistent paths year after year.' },
            { text: 'Set up hunting camps along migration routes at predicted times.' },
            { text: 'Coordinate group hunts at choke points — river crossings, mountain passes.' },
            { text: 'Migration tracking provided predictable, large-scale food procurement.' }
        ],
        videoUrl: 'https://youtu.be/cdwOIdQ4VuI?si=SocialCognitive'
    },
    {
        id: 'plant-cycle-timing',
        name: 'Plant Cycle Timing',
        stage: 1,
        icon: '🌱',
        category: 'skill',
        subcategory: 'Navigation & Environmental',
        objective: 'Know when each plant species fruits, flowers, and goes dormant.',
        evolution: 'Plant cycle timing maximized food gathering efficiency — arriving at the right place at the right time.',
        requirements: [
            { name: 'Knowledge of species', value: 'Plant life cycles' },
            { name: 'Seasonal calendar', value: 'Tracking time' },
            { name: 'Memory', value: 'Year-to-year patterns' }
        ],
        steps: [
            { text: 'Observe each plant species through all four seasons.' },
            { text: 'Note when each plant flowers, fruits, and goes dormant.' },
            { text: 'Correlate plant cycles with lunar calendar and weather patterns.' },
            { text: 'Plan gathering trips to coincide with peak availability.' },
            { text: 'Plant cycle timing maximized food gathering and enabled predictable nutrition.' }
        ],
        videoUrl: 'https://youtu.be/cdwOIdQ4VuI?si=SocialCognitive'
    },
    {
        id: 'coastal-foraging',
        name: 'Coastal Foraging',
        stage: 1,
        icon: '🏖️',
        category: 'skill',
        subcategory: 'Navigation & Environmental',
        objective: 'Exploit coastal resources based on tidal patterns.',
        evolution: 'Coastal foraging provided reliable, year-round food — shellfish, seaweed, and stranded marine animals.',
        requirements: [
            { name: 'Coastal access', value: 'Rocky shore or sandy beach' },
            { name: 'Tide knowledge', value: 'Understanding tidal cycles' },
            { name: 'Collection tools', value: 'Basket, sharp stone' }
        ],
        steps: [
            { text: 'Learn tidal patterns — low tide exposes the most resources.' },
            { text: 'Gather shellfish, seaweed, and stranded fish at low tide.' },
            { text: 'Search tide pools for crabs, octopus, and small fish.' },
            { text: 'Collect seaweed for food, fertilizer, and thatching.' },
            { text: 'Coastal foraging provided reliable protein and minerals year-round.' }
        ],
        videoUrl: 'https://youtu.be/cdwOIdQ4VuI?si=SocialCognitive'
    },
    // === SKILLS — Social & Economic ===
    {
        id: 'barter-trade',
        name: 'Barter & Trade',
        stage: 1,
        icon: '🤝',
        category: 'skill',
        subcategory: 'Social & Economic',
        objective: 'Exchange goods and services directly with other groups.',
        evolution: 'Barter trade enabled access to resources not available locally — the foundation of economic exchange.',
        requirements: [
            { name: 'Trade goods', value: 'Surplus food, tools, or materials' },
            { name: 'Trading partner', value: 'Another group with different resources' },
            { name: 'Meeting place', value: 'Neutral territory' }
        ],
        steps: [
            { text: 'Identify surplus goods that your group can trade — tools, food, or raw materials.' },
            { text: 'Establish contact with neighboring groups at neutral meeting places.' },
            { text: 'Negotiate exchanges — goods for goods, no money involved.' },
            { text: 'Common trades: obsidian for food, pottery for furs, salt for grain.' },
            { text: 'Trade built relationships between groups and spread technology and ideas.' }
        ],
        videoUrl: 'https://youtu.be/cdwOIdQ4VuI?si=SocialCognitive'
    },
    {
        id: 'obsidian-trade-networks',
        name: 'Obsidian Trade Networks',
        stage: 1,
        icon: '⬛',
        category: 'skill',
        subcategory: 'Social & Economic',
        objective: 'Participate in long-distance obsidian trade — the first global commodity.',
        evolution: 'Obsidian was traded hundreds of kilometers from its source — creating the first long-distance trade networks.',
        requirements: [
            { name: 'Obsidian source or access', value: 'Volcanic region or trade partner' },
            { name: 'Trade goods', value: 'Food, tools, or other materials' },
            { name: 'Trade routes', value: 'Established paths between groups' }
        ],
        steps: [
            { text: 'If near a volcanic source: mine and shape obsidian into tools or blades.' },
            { text: 'If far from source: trade local goods for obsidian with intermediate groups.' },
            { text: 'Obsidian traveled hundreds of kilometers through chains of trade partners.' },
            { text: 'Trade routes connected distant communities and spread technology.' },
            { text: 'Obsidian trade was the first evidence of long-distance economic networks.' }
        ],
        videoUrl: 'https://youtu.be/cdwOIdQ4VuI?si=SocialCognitive'
    },
    {
        id: 'craft-specialization',
        name: 'Craft Specialization',
        stage: 1,
        icon: '⚒️',
        category: 'skill',
        subcategory: 'Social & Economic',
        objective: 'Focus on one craft to develop expertise and trade surplus production.',
        evolution: 'Craft specialization enabled higher quality products and economic interdependence — the foundation of complex society.',
        requirements: [
            { name: 'Food surplus', value: 'So not everyone must farm' },
            { name: 'Raw materials', value: 'For craft production' },
            { name: 'Trade partners', value: 'To exchange crafted goods for food' }
        ],
        steps: [
            { text: 'Identify a craft you excel at — knapping, pottery, weaving, or tool-making.' },
            { text: 'Focus on mastering that craft — produce higher quality than generalists.' },
            { text: 'Produce surplus beyond personal need.' },
            { text: 'Trade surplus crafts for food and other goods.' },
            { text: 'Craft specialization created interdependence — no group was self-sufficient, driving trade and cooperation.' }
        ],
        videoUrl: 'https://youtu.be/cdwOIdQ4VuI?si=SocialCognitive'
    },
    {
        id: 'group-coordination',
        name: 'Group Coordination',
        stage: 1,
        icon: '👥',
        category: 'skill',
        subcategory: 'Social & Economic',
        objective: 'Organize group activities — hunting drives, construction, and defense.',
        evolution: 'Group coordination multiplied human capability — large projects were impossible for individuals alone.',
        requirements: [
            { name: 'Communication', value: 'Spoken language and signals' },
            { name: 'Leadership', value: 'Coordinator or chief' },
            { name: 'Shared goal', value: 'Hunt, build, or defend' }
        ],
        steps: [
            { text: 'Define the group goal — a hunt, building project, or defense.' },
            { text: 'Assign roles based on individual strengths.' },
            { text: 'Coordinate timing and position — use signals for synchronization.' },
            { text: 'Execute the plan together — communication is key.' },
            { text: 'Group coordination enabled mass hunts, large buildings, and territorial defense.' }
        ],
        videoUrl: 'https://youtu.be/cdwOIdQ4VuI?si=SocialCognitive'
    },
    {
        id: 'emergent-leadership',
        name: 'Emergent Leadership',
        stage: 1,
        icon: '👑',
        category: 'skill',
        subcategory: 'Social & Economic',
        objective: 'Develop leadership through skill, charisma, or demonstrated ability.',
        evolution: 'Leadership emerged naturally — the best hunter, wisest elder, or most skilled crafter gained influence.',
        requirements: [
            { name: 'Demonstrated skill', value: 'Hunting, healing, or crafting' },
            { name: 'Social intelligence', value: 'Understanding group dynamics' },
            { name: 'Trust', value: 'Earned through consistent contribution' }
        ],
        steps: [
            { text: 'Demonstrate value through skill — hunting success, healing ability, or craft expertise.' },
            { text: 'Contribute fairly to the group — share food, knowledge, and labor.' },
            { text: 'Resolve conflicts and make decisions that benefit the group.' },
            { text: 'Leadership is earned, not inherited — it can be lost if trust is broken.' },
            { text: 'Emergent leadership created social hierarchy — the foundation of governance.' }
        ],
        videoUrl: 'https://youtu.be/cdwOIdQ4VuI?si=SocialCognitive'
    },
    {
        id: 'conflict-resolution',
        name: 'Conflict Resolution',
        stage: 1,
        icon: '⚖️',
        category: 'skill',
        subcategory: 'Social & Economic',
        objective: 'Mediate disputes and maintain group harmony.',
        evolution: 'Conflict resolution prevented group fragmentation — essential for survival in a dangerous world.',
        requirements: [
            { name: 'Mediator', value: 'Respected elder or leader' },
            { name: 'Communication', value: 'Open dialogue' },
            { name: 'Shared values', value: 'Group norms and expectations' }
        ],
        steps: [
            { text: 'Identify the source of conflict — resource dispute, personal grievance, or misunderstanding.' },
            { text: 'Bring parties together for open discussion.' },
            { text: 'Mediator facilitates dialogue — each side explains their position.' },
            { text: 'Find a compromise that both sides can accept.' },
            { text: 'Enforce the agreement through social pressure. Repeat offenders may be exiled.' }
        ],
        videoUrl: 'https://youtu.be/cdwOIdQ4VuI?si=SocialCognitive'
    },
    {
        id: 'burial-customs',
        name: 'Burial Customs',
        stage: 1,
        icon: '⚰️',
        category: 'skill',
        subcategory: 'Social & Economic',
        objective: 'Conduct burial rituals with grave goods for the deceased.',
        evolution: 'Burial customs indicate belief in afterlife and social complexity — grave goods show personal identity and status.',
        requirements: [
            { name: 'Digging tools', value: 'Wooden picks, stone tools' },
            { name: 'Grave goods', value: 'Tools, ornaments, or food' },
            { name: 'Pigments', value: 'Ochre for decoration' }
        ],
        steps: [
            { text: 'Dig a grave pit of appropriate depth.' },
            { text: 'Place the body in a specific position — curled, extended, or seated.' },
            { text: 'Add grave goods — tools, ornaments, food, or pigments.' },
            { text: 'Cover with earth and stones. Mark the grave with a cairn or stone.' },
            { text: 'Burial customs reflect belief in afterlife and social identity.' }
        ],
        videoUrl: 'https://youtu.be/cdwOIdQ4VuI?si=SocialCognitive'
    },
    {
        id: 'ceremonial-fires',
        name: 'Ceremonial Fires',
        stage: 1,
        icon: '🔥',
        category: 'skill',
        subcategory: 'Social & Economic',
        objective: 'Build and maintain ritual fires for ceremonies and gatherings.',
        evolution: 'Ceremonial fires were the center of community life — rituals, storytelling, and social bonding revolved around them.',
        requirements: [
            { name: 'Firewood', value: 'Abundant fuel' },
            { name: 'Fire ring', value: 'Stone circle' },
            { name: 'Participants', value: 'Community members' }
        ],
        steps: [
            { text: 'Build a large fire ring in a central location.' },
            { text: 'Gather the community around the fire.' },
            { text: 'Conduct rituals — dancing, singing, storytelling, and offerings.' },
            { text: 'Ceremonial fires mark important events — births, deaths, hunts, and seasons.' },
            { text: 'The fire is the center of community — bringing people together for shared experience.' }
        ],
        videoUrl: 'https://youtu.be/cdwOIdQ4VuI?si=SocialCognitive'
    },
    // === SKILLS — Agriculture & Domestication ===
    {
        id: 'wild-grain-harvesting',
        name: 'Wild Grain Harvesting',
        stage: 1,
        icon: '🌾',
        category: 'skill',
        subcategory: 'Agriculture & Domestication',
        objective: 'Harvest wild grain stands with flint sickles before seeds shatter.',
        evolution: 'Wild grain harvesting was the first step toward agriculture — deliberate collection led to deliberate planting.',
        requirements: [
            { name: 'Wild grain stands', value: 'Wheat, barley, or rice' },
            { name: 'Flint sickle', value: 'Blade in wooden handle' },
            { name: 'Collection baskets', value: 'For gathering' }
        ],
        steps: [
            { text: 'Locate wild grain stands in open grasslands and river valleys.' },
            { text: 'Harvest with a flint sickle — grasp stalks and cut below the seed head.' },
            { text: 'Collect before seeds shatter — timing is critical.' },
            { text: 'Thresh and winnow to separate grain from chaff.' },
            { text: 'Some harvested grain is eaten; some is stored; some is deliberately scattered to grow.' }
        ],
        videoUrl: 'https://youtu.be/9Ekk4JCb6OM?si=BreadGrain'
    },
    {
        id: 'grain-cultivation',
        name: 'Grain Cultivation',
        stage: 1,
        icon: '🌾',
        category: 'skill',
        subcategory: 'Agriculture & Domestication',
        objective: 'Deliberately plant and tend grain for reliable food production.',
        evolution: 'Grain cultivation was the Neolithic Revolution — humans stopped chasing food and started growing it.',
        requirements: [
            { name: 'Saved seeds', value: 'From previous harvest' },
            { name: 'Prepared soil', value: 'Cleared and loosened' },
            { name: 'Water access', value: 'For irrigation' }
        ],
        steps: [
            { text: 'Clear land of vegetation — cut and burn trees and brush.' },
            { text: 'Loosen soil with digging sticks or early plows.' },
            { text: 'Scatter seeds in prepared soil at the start of the growing season.' },
            { text: 'Protect seedlings from pests and weeds.' },
            { text: 'Harvest when grain is mature. Save the best seeds for next year\'s planting.' }
        ],
        videoUrl: 'https://youtu.be/9Ekk4JCb6OM?si=BreadGrain'
    },
    {
        id: 'irrigation',
        name: 'Irrigation',
        stage: 1,
        icon: '💧',
        category: 'skill',
        subcategory: 'Agriculture & Domestication',
        objective: 'Divert water from rivers to fields for reliable crop growth.',
        evolution: 'Irrigation enabled farming in dry regions — multiplying crop yields and supporting larger populations.',
        requirements: [
            { name: 'Water source', value: 'River or stream' },
            { name: 'Digging tools', value: 'For channel excavation' },
            { name: 'Level ground', value: 'For even water distribution' }
        ],
        steps: [
            { text: 'Dig channels from the river to the fields.' },
            { text: 'Create a gentle slope — water flows downhill but not too fast.' },
            { text: 'Open channels during dry periods to water crops.' },
            { text: 'Close channels when enough water has been applied.' },
            { text: 'Irrigation enabled farming in dry regions and multiplied crop yields.' }
        ],
        videoUrl: 'https://youtu.be/QcwFHG-aH_k?si=Irrigation'
    },
    {
        id: 'crop-rotation',
        name: 'Crop Rotation',
        stage: 1,
        icon: '🔄',
        category: 'skill',
        subcategory: 'Agriculture & Domestication',
        objective: 'Rotate different crops on the same land to maintain soil fertility.',
        evolution: 'Crop rotation prevented soil exhaustion — alternating grains with legumes replenished nitrogen naturally.',
        requirements: [
            { name: 'Multiple crop types', value: 'Grains and legumes' },
            { name: 'Field division', value: 'Separate plots' },
            { name: 'Knowledge', value: 'Which crops benefit soil' }
        ],
        steps: [
            { text: 'Divide farmland into separate plots.' },
            { text: 'Plant grains (wheat, barley) in one plot and legumes (lentils, peas) in another.' },
            { text: 'Next season, swap — plant legumes where grains grew and vice versa.' },
            { text: 'Legumes fix nitrogen in soil — replenishing nutrients that grains deplete.' },
            { text: 'Crop rotation maintains soil fertility and prevents crop failure.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=Domestication'
    },
    {
        id: 'goat-domestication',
        name: 'Goat Domestication',
        stage: 1,
        icon: '🐐',
        category: 'skill',
        subcategory: 'Agriculture & Domestication',
        objective: 'Tame and breed wild goats for milk, meat, wool, and leather.',
        evolution: 'Goats were among the first domesticated animals (~9,500 BCE) — providing milk, meat, and fiber.',
        requirements: [
            { name: 'Wild goats', value: 'From mountain regions' },
            { name: 'Enclosure', value: 'Pen or fenced area' },
            { name: 'Feed', value: 'Grain, forage, or grazing land' }
        ],
        steps: [
            { text: 'Capture young wild goats — they are more easily tamed than adults.' },
            { text: 'Raise them in enclosures near camp. Provide food, water, and protection.' },
            { text: 'Select for docile traits — keep calmest animals and breed them together.' },
            { text: 'Over generations, goats become domesticated — smaller horns, more milk, calmer temperament.' },
            { text: 'Domesticated goats provide milk, meat, wool, leather, and manure for fertilizer.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=Domestication'
    },
    {
        id: 'sheep-domestication',
        name: 'Sheep Domestication',
        stage: 1,
        icon: '🐑',
        category: 'skill',
        subcategory: 'Agriculture & Domestication',
        objective: 'Tame and breed wild sheep for wool, milk, and meat.',
        evolution: 'Sheep were domesticated ~11,000 years ago — wool became the primary textile fiber for millennia.',
        requirements: [
            { name: 'Wild sheep', value: 'Mouflon or similar species' },
            { name: 'Enclosure', value: 'Pen or fenced area' },
            { name: 'Feed', value: 'Grazing land or forage' }
        ],
        steps: [
            { text: 'Capture young wild sheep (mouflon) — the ancestor of domestic sheep.' },
            { text: 'Raise in enclosures with food, water, and protection from predators.' },
            { text: 'Select for wool production — sheep with thicker fleece are bred together.' },
            { text: 'Over generations, sheep produce more wool and become more docile.' },
            { text: 'Domesticated sheep provide wool for textiles, milk, meat, and leather.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=Domestication'
    },
    {
        id: 'pig-domestication',
        name: 'Pig Domestication',
        stage: 1,
        icon: '🐖',
        category: 'skill',
        subcategory: 'Agriculture & Domestication',
        objective: 'Tame and breed wild boar for efficient meat production.',
        evolution: 'Pigs were domesticated for their efficient feed-to-meat conversion — the most efficient meat source.',
        requirements: [
            { name: 'Wild boar', value: 'Young piglets' },
            { name: 'Enclosure', value: 'Sturdy pen — pigs are strong' },
            { name: 'Feed', value: 'Scraps, grain, or forage' }
        ],
        steps: [
            { text: 'Capture young wild boar piglets — they adapt to captivity more easily.' },
            { text: 'Raise in sturdy enclosures — pigs are strong and escape-prone.' },
            { text: 'Feed kitchen scraps, grain, and forage — pigs eat almost anything.' },
            { text: 'Select for docile traits and meat quality.' },
            { text: 'Domesticated pigs convert waste into high-quality meat efficiently.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=Domestication'
    },
    {
        id: 'cattle-domestication',
        name: 'Cattle Domestication',
        stage: 1,
        icon: '🐂',
        category: 'skill',
        subcategory: 'Agriculture & Domestication',
        objective: 'Tame and breed wild aurochs for milk, meat, leather, and traction power.',
        evolution: 'Cattle domestication provided milk, meat, leather, and plowing power — transforming agriculture.',
        requirements: [
            { name: 'Wild aurochs', value: 'Ancestor of cattle' },
            { name: 'Large enclosure', value: 'Cattle need space' },
            { name: 'Feed', value: 'Grazing land and grain' }
        ],
        steps: [
            { text: 'Capture young wild aurochs — the large wild ancestor of cattle.' },
            { text: 'Raise in large enclosures with grazing land.' },
            { text: 'Select for docile traits, milk production, and size.' },
            { text: 'Over generations, aurochs become domesticated cattle — smaller, calmer, more productive.' },
            { text: 'Cattle provide milk, meat, leather, and traction power for plowing and transport.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=Domestication'
    },
    {
        id: 'dog-domestication',
        name: 'Dog Domestication',
        stage: 1,
        icon: '🐕',
        category: 'skill',
        subcategory: 'Agriculture & Domestication',
        objective: 'Tame wolves into loyal hunting companions and guardians.',
        evolution: 'Dogs were the first domesticated animal (~35,000-14,000 BCE) — aiding hunting, guarding, and companionship.',
        requirements: [
            { name: 'Wolf pups', value: 'Young wolves are most tameable' },
            { name: 'Food', value: 'To build trust' },
            { time: 'Generations', value: 'Selective breeding' }
        ],
        steps: [
            { text: 'Capture wolf pups — young wolves are more easily socialized with humans.' },
            { text: 'Raise pups near camp — they bond with humans as pack members.' },
            { text: 'Select for helpful traits — hunting ability, guarding, and tameness.' },
            { text: 'Over generations, wolves become dogs — smaller jaws, varied sizes, and loyal temperament.' },
            { text: 'Dogs aid hunting, guard camps, herd animals, and provide companionship.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=Domestication'
    },
    {
        id: 'cat-domestication',
        name: 'Cat Domestication',
        stage: 1,
        icon: '🐈',
        category: 'skill',
        subcategory: 'Agriculture & Domestication',
        objective: 'Encourage wild cats to live near settlements for rodent control.',
        evolution: 'Cats domesticated themselves — they were attracted to grain stores full of mice, providing mutual benefit.',
        requirements: [
            { name: 'Grain stores', value: 'Attract rodents, which attract cats' },
            { name: 'Food scraps', value: 'To encourage cats to stay' },
            { time: 'Generations', value: 'Natural selection for tameness' }
        ],
        steps: [
            { text: 'Wild cats are attracted to grain stores — full of mice and rats.' },
            { text: 'Allow cats to hunt rodents in and around grain stores.' },
            { text: 'Leave food scraps to encourage cats to stay near settlements.' },
            { text: 'Over generations, cats become more tame and dependent on humans.' },
            { text: 'Cats control rodent populations — protecting stored grain from destruction.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=Domestication'
    },
    {
        id: 'flint-mining',
        name: 'Flint Mining',
        stage: 1,
        icon: '⛏️',
        category: 'skill',
        subcategory: 'Agriculture & Domestication',
        objective: 'Dig deep shafts to extract high-quality flint from underground deposits.',
        evolution: 'Flint mining was the first large-scale mining operation — producing tools for entire regions.',
        requirements: [
            { name: 'Flint deposit', value: 'Underground chalk or limestone layers' },
            { name: 'Mining tools', value: 'Antler picks, stone hammers' },
            { name: 'Shoring materials', value: 'Wood for shaft support' }
        ],
        steps: [
            { text: 'Locate flint-bearing chalk or limestone deposits.' },
            { text: 'Dig shafts down to the flint layer — up to 12 meters deep.' },
            { text: 'Support shaft walls with wooden shoring to prevent collapse.' },
            { text: 'Extract flint nodules with antler picks and stone hammers.' },
            { text: 'Mine sites like Grimes Graves (England) and Spiennes (Belgium) produced flint for entire regions.' }
        ],
        videoUrl: 'https://youtu.be/d6N9TNeVYfw?si=MiningStone'
    },
    {
        id: 'pottery-making',
        name: 'Pottery Making',
        stage: 1,
        icon: '🏺',
        category: 'skill',
        subcategory: 'Agriculture & Domestication',
        objective: 'Shape clay into vessels and fire them for durable containers.',
        evolution: 'Pottery was the defining technology of the Neolithic — enabling storage, cooking, and trade.',
        requirements: [
            { name: 'Clay', value: 'Fine, plastic clay' },
            { name: 'Temper', value: 'Sand, crushed pottery, or plant fiber' },
            { name: 'Kiln or fire pit', value: 'For firing' }
        ],
        steps: [
            { text: 'Prepare clay by kneading to remove air bubbles.' },
            { text: 'Add temper (sand or crushed pottery) to reduce cracking during firing.' },
            { text: 'Shape by hand — coiling, pinching, or slab building (no wheel yet).' },
            { text: 'Let the vessel dry completely before firing.' },
            { text: 'Fire in a kiln or open pit at 600-900°C. The clay hardens into durable ceramic.' }
        ],
        videoUrl: 'https://youtu.be/NHgUMUk3YwY?si=PotteryKiln'
    },
    {
        id: 'loom-weaving-skill',
        name: 'Loom Weaving',
        stage: 1,
        icon: '🧶',
        category: 'skill',
        subcategory: 'Agriculture & Domestication',
        objective: 'Weave textiles on a loom for clothing, trade, and cultural expression.',
        evolution: 'Loom weaving produced fine textiles — transforming clothing quality and creating valuable trade goods.',
        requirements: [
            { name: 'Thread', value: 'Spun flax, hemp, or wool' },
            { name: 'Loom', value: 'Vertical or horizontal frame' },
            { name: 'Shed stick and beater', value: 'For weaving tools' }
        ],
        steps: [
            { text: 'Set up the warp — stretch parallel threads on the loom frame.' },
            { text: 'Use a shed stick to separate alternating warp threads.' },
            { text: 'Pass the weft thread through the shed and beat into place.' },
            { text: 'Create patterns by alternating colors and weave structures.' },
            { text: 'Loom-woven textiles are finer and more uniform than hand-woven — creating valuable trade goods.' }
        ],
        videoUrl: 'https://youtu.be/b8YHxToejsc?si=WeavingBasket'
    },
    // === TOOLS — Core & Flake Stone Tools ===
    {
        id: 'hand-axe',
        name: 'Hand Axe',
        stage: 1,
        icon: '🪓',
        category: 'tool',
        subcategory: 'Core & Flake Stone Tools',
        objective: 'Create a bifacial hand axe — the most versatile multipurpose tool of the Paleolithic.',
        evolution: 'The hand axe was the Swiss Army knife of early humans — used for cutting, chopping, digging, and butchering.',
        requirements: [
            { name: 'Flint nodule', value: 'Fist to basketball-sized' },
            { name: 'Hammerstone', value: 'For striking flakes' },
            { name: 'Antler soft hammer', value: 'For fine shaping' }
        ],
        steps: [
            { text: 'Select a large, symmetrical flint nodule.' },
            { text: 'Strike off large flakes from both sides to establish the teardrop shape.' },
            { text: 'Continue removing flakes alternately from each face to thin the tool.' },
            { text: 'Use an antler soft hammer for fine shaping — produce a sharp, continuous cutting edge.' },
            { text: 'Use for butchering, woodworking, digging, scraping hides, and as a thrown weapon.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    {
        id: 'chopper',
        name: 'Chopper',
        stage: 1,
        icon: '🔨',
        category: 'tool',
        subcategory: 'Core & Flake Stone Tools',
        objective: 'Create a unifacial chopper — the oldest known stone tool type (Oldowan, 2.6 Ma).',
        evolution: 'The chopper is humanity\'s oldest recognizable tool — a simple stone with one sharp edge.',
        requirements: [
            { name: 'River cobble', value: 'Rounded stone' },
            { name: 'Hammerstone', value: 'For striking flakes' }
        ],
        steps: [
            { text: 'Select a rounded river cobble.' },
            { text: 'Strike one side with a hammerstone to remove several flakes.' },
            { text: 'The unworked portion serves as a handle; the flaked edge is the cutting edge.' },
            { text: 'Resharpen by striking new flakes along the edge when it dulls.' },
            { text: 'Use for smashing bones, cutting meat, chopping wood, and digging.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    {
        id: 'cleaver',
        name: 'Cleaver',
        stage: 1,
        icon: '🔪',
        category: 'tool',
        subcategory: 'Core & Flake Stone Tools',
        objective: 'Create a cleaver — a wide cutting-edge stone tool for butchering large game.',
        evolution: 'Cleavers were specialized butchering tools with broad, straight cutting edges for splitting large carcasses.',
        requirements: [
            { name: 'Large flint nodule', value: 'Wide and thick' },
            { name: 'Hammerstone', value: 'For initial shaping' }
        ],
        steps: [
            { text: 'Select a large, wide flint nodule.' },
            { text: 'Strike a large flake from the top to create a wide, straight cutting edge.' },
            { text: 'Thin the body by removing flakes from both faces.' },
            { text: 'Refine the cutting edge with an antler hammer — keep it wide and straight.' },
            { text: 'Use for butchering large animals, splitting carcasses, and heavy chopping.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    {
        id: 'flake-tool',
        name: 'Flake Tool',
        stage: 1,
        icon: '🔶',
        category: 'tool',
        subcategory: 'Core & Flake Stone Tools',
        objective: 'Use a sharp stone flake as a general-purpose cutting tool.',
        evolution: 'The simple flake was the most common tool of the Stone Age — minimal effort, maximum utility.',
        requirements: [
            { name: 'Stone core', value: 'Flint, chert, or obsidian' },
            { name: 'Hammerstone', value: 'For striking flakes' }
        ],
        steps: [
            { text: 'Prepare a core by creating a flat striking platform.' },
            { text: 'Strike the core with a hammerstone to detach sharp flakes.' },
            { text: 'Select flakes with sharp, straight edges for cutting tasks.' },
            { text: 'Use flakes directly as knives — no further shaping needed.' },
            { text: 'Retouch edges with a hammerstone if a specific shape is needed.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    {
        id: 'blade',
        name: 'Blade',
        stage: 1,
        icon: '🗡️',
        category: 'tool',
        subcategory: 'Core & Flake Stone Tools',
        objective: 'Produce long, parallel-sided blades from a prepared core — Upper Paleolithic hallmark.',
        evolution: 'Blades represented a quantum leap — one core produced dozens of standardized, sharp cutting edges.',
        requirements: [
            { name: 'Cylindrical flint core', value: 'Prepared core' },
            { name: 'Soft hammer or punch', value: 'Antler for controlled strikes' }
        ],
        steps: [
            { text: 'Prepare a cylindrical core with a flat striking platform.' },
            { text: 'Strike the platform with a soft hammer to detach long, thin blades.' },
            { text: 'Each blade should be at least twice as long as wide, with parallel sides.' },
            { text: 'Use blades directly as knives or retouch into specialized tools.' },
            { text: 'One core produces 20-50 blades — far more efficient than individual flakes.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    {
        id: 'microlith',
        name: 'Microlith',
        stage: 1,
        icon: '',
        category: 'tool',
        subcategory: 'Core & Flake Stone Tools',
        objective: 'Produce tiny standardized stone flakes for composite tools and weapons.',
        evolution: 'Microliths were the interchangeable parts of the Stone Age — modular, replaceable, and efficient.',
        requirements: [
            { name: 'Small blade or flake', value: 'Starting material' },
            { name: 'Pressure flaker', value: 'Antler tine' }
        ],
        steps: [
            { text: 'Start with a small blade or flake — about 2-3 cm long.' },
            { text: 'Use a pressure flaker to retouch edges into geometric shapes.' },
            { text: 'Produce triangles, trapezoids, or crescents depending on the intended tool.' },
            { text: 'Make multiple microliths of the same shape for one composite tool.' },
            { text: 'Insert microliths into wooden or bone slots with resin adhesive.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    {
        id: 'core',
        name: 'Core (Stone Tool Factory)',
        stage: 1,
        icon: '🪨',
        category: 'tool',
        subcategory: 'Core & Flake Stone Tools',
        objective: 'Prepare and maintain a stone core for producing multiple flakes or blades.',
        evolution: 'The core is a tool-making factory — a single piece of stone that produces dozens of cutting edges.',
        requirements: [
            { name: 'Quality stone nodule', value: 'Flint, chert, or obsidian' },
            { name: 'Hammerstone', value: 'For initial shaping' }
        ],
        steps: [
            { text: 'Select a stone nodule free of cracks and impurities.' },
            { text: 'Remove small flakes to create a flat striking platform.' },
            { text: 'Shape the core to control the direction of flake removal.' },
            { text: 'Strike flakes sequentially, rotating the core to maintain shape.' },
            { text: 'Discard the core when it becomes too small for useful flakes.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    {
        id: 'biface',
        name: 'Biface',
        stage: 1,
        icon: '🔷',
        category: 'tool',
        subcategory: 'Core & Flake Stone Tools',
        objective: 'Create a bifacial tool — flaked on both faces for a thin, sharp, symmetrical implement.',
        evolution: 'Bifacial tools represent a major advance — thinning both faces creates sharper, more efficient cutting edges.',
        requirements: [
            { name: 'Flint nodule', value: 'Medium to large' },
            { name: 'Hammerstone', value: 'For initial thinning' },
            { name: 'Antler hammer', value: 'For final shaping' }
        ],
        steps: [
            { text: 'Select a suitable flint nodule. Remove large flakes from one face.' },
            { text: 'Flip and remove flakes from the opposite face — establish symmetry.' },
            { text: 'Continue alternating faces, thinning the tool progressively.' },
            { text: 'Use an antler hammer for final thinning and edge refinement.' },
            { text: 'The finished biface is thin, symmetrical, and sharp on both edges.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    // === TOOLS — Polished Stone Tools ===
    {
        id: 'polished-stone-axe',
        name: 'Polished Stone Axe',
        stage: 1,
        icon: '🪓',
        category: 'tool',
        subcategory: 'Polished Stone Tools',
        objective: 'Create a ground and polished stone axe — the defining tool of the Neolithic.',
        evolution: 'The polished stone axe enabled efficient forest clearance for agriculture — transforming landscapes.',
        requirements: [
            { name: 'Tough stone', value: 'Basalt, jadeite, or greenstone' },
            { name: 'Sandstone abrasive', value: 'For grinding and polishing' },
            { name: 'Wooden handle', value: 'For hafting' }
        ],
        steps: [
            { text: 'Select a tough stone — it must withstand grinding.' },
            { text: 'Rough-shape the axe head with a hammerstone.' },
            { text: 'Grind the cutting edge on sandstone with water — create a beveled edge.' },
            { text: 'Polish the entire surface on fine sandstone for a smooth finish.' },
            { text: 'Haft to a wooden handle. The polished axe is far more efficient than chipped axes.' }
        ],
        videoUrl: 'https://youtu.be/BN-34JfUrHY?si=StoneAxe'
    },
    {
        id: 'celt',
        name: 'Celt',
        stage: 1,
        icon: '🔨',
        category: 'tool',
        subcategory: 'Polished Stone Tools',
        objective: 'Create a celt — a rectangular ground-stone tool for wood splitting and land clearance.',
        evolution: 'Celts were the heavy-duty wood splitting tools of the Neolithic — force-concentrating edges.',
        requirements: [
            { name: 'Tough stone block', value: 'Basalt or greenstone' },
            { name: 'Sandstone', value: 'For grinding' }
        ],
        steps: [
            { text: 'Select a rectangular stone block of tough material.' },
            { text: 'Shape into a rectangular or trapezoidal form with a hammerstone.' },
            { text: 'Grind one end to a narrow cutting edge on sandstone.' },
            { text: 'Polish the cutting edge for efficiency.' },
            { text: 'Use for splitting logs, clearing land, and heavy woodworking.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    {
        id: 'adze',
        name: 'Adze',
        stage: 1,
        icon: '🪓',
        category: 'tool',
        subcategory: 'Polished Stone Tools',
        objective: 'Create an adze — a cutting tool with blade mounted perpendicular to the handle.',
        evolution: 'The adze was the premier woodworking tool — used for shaping beams, hollowing canoes, and smoothing.',
        requirements: [
            { name: 'Stone blade', value: 'Ground or chipped stone' },
            { name: 'Wooden handle', value: 'Angled handle' },
            { name: 'Binding material', value: 'Sinew, resin, or cordage' }
        ],
        steps: [
            { text: 'Create or select a stone blade with a cutting edge.' },
            { text: 'Fashion a wooden handle with a bend — the blade mounts perpendicular.' },
            { text: 'Bind the stone blade to the handle with sinew and resin.' },
            { text: 'The cutting edge faces downward, perpendicular to the handle.' },
            { text: 'Use with a chopping motion — remove thin slices of wood with each strike.' }
        ],
        videoUrl: 'https://youtu.be/0yp1A170PAo?si=StoneAdze'
    },
    {
        id: 'stone-chisel',
        name: 'Stone Chisel',
        stage: 1,
        icon: '🔧',
        category: 'tool',
        subcategory: 'Polished Stone Tools',
        objective: 'Create a stone chisel for precision woodworking and stone carving.',
        evolution: 'The stone chisel enabled precision work — carving joints, detailed woodwork, and stone sculpture.',
        requirements: [
            { name: 'Tough stone rod', value: 'Basalt or jadeite' },
            { name: 'Grinding stone', value: 'For shaping' }
        ],
        steps: [
            { text: 'Select a tough stone and shape into a rod with grinding.' },
            { text: 'Grind one end to a narrow, flat cutting edge.' },
            { text: 'The opposite end is struck with a mallet or hammerstone.' },
            { text: 'Use for carving wood joints, stone sculpture, and precision cutting.' },
            { text: 'Stone chisels enabled mortise-and-tenon joints in woodworking.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    {
        id: 'polishing-stone',
        name: 'Polishing Stone',
        stage: 1,
        icon: '✨',
        category: 'tool',
        subcategory: 'Polished Stone Tools',
        objective: 'Create a polishing stone for finishing and sharpening other stone tools.',
        evolution: 'Polishing stones enabled the transition from rough chipped tools to finely finished Neolithic implements.',
        requirements: [
            { name: 'Fine sandstone', value: 'Smooth, even-grained' },
            { name: 'Water', value: 'For wet polishing' }
        ],
        steps: [
            { text: 'Select a fine-grained sandstone block — smooth and even-textured.' },
            { text: 'Wet the sandstone surface with water.' },
            { text: 'Rub the stone tool back and forth on the wet sandstone.' },
            { text: 'Continue until the desired smoothness and sharpness is achieved.' },
            { text: 'Polished tools cut more efficiently and resist breaking better than rough tools.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    // === TOOLS — Specialized Stone Tools ===
    {
        id: 'end-scraper',
        name: 'End Scraper',
        stage: 1,
        icon: '🔶',
        category: 'tool',
        subcategory: 'Specialized Stone Tools',
        objective: 'Create an end scraper — a thick stone tool with working edge at one end for hide processing.',
        evolution: 'End scrapers were the primary hide-working tools — their thick edges removed flesh without cutting through.',
        requirements: [
            { name: 'Thick flake', value: 'From a flint core' },
            { name: 'Hammerstone', value: 'For retouching' }
        ],
        steps: [
            { text: 'Select a thick, sturdy flake from a flint core.' },
            { text: 'Retouch one end to create a steep, curved working edge.' },
            { text: 'The working edge should be thick enough to resist breaking.' },
            { text: 'Use for removing flesh and fat from animal hides.' },
            { text: 'Also used for woodworking — smoothing and shaping wooden surfaces.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    {
        id: 'side-scraper',
        name: 'Side Scraper',
        stage: 1,
        icon: '🔶',
        category: 'tool',
        subcategory: 'Specialized Stone Tools',
        objective: 'Create a side scraper — a stone tool with working edge along one side for hide processing.',
        evolution: 'Side scrapers complemented end scrapers by providing a longer working edge for large hides.',
        requirements: [
            { name: 'Stone flake', value: 'Medium to large' },
            { name: 'Hammerstone', value: 'For edge retouching' }
        ],
        steps: [
            { text: 'Select a medium to large stone flake.' },
            { text: 'Retouch one long edge to create a durable working edge.' },
            { text: 'The working edge runs along the side, providing a long scraping surface.' },
            { text: 'Use for scraping large areas of hide — removing flesh, fat, and hair.' },
            { text: 'Side scrapers were also used for working wood and bone.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    {
        id: 'notched-flake',
        name: 'Notched Flake',
        stage: 1,
        icon: '🔶',
        category: 'tool',
        subcategory: 'Specialized Stone Tools',
        objective: 'Create a notched flake — a stone flake with a carved notch for stripping and shaping.',
        evolution: 'The notched flake was specialized for stripping bark, deboning meat, and shaping shafts.',
        requirements: [
            { name: 'Stone flake', value: 'Medium size' },
            { name: 'Hammerstone', value: 'For creating the notch' }
        ],
        steps: [
            { text: 'Select a medium stone flake with a straight edge.' },
            { text: 'Create a notch by striking into the edge with a hammerstone at an angle.' },
            { text: 'The notch should be curved and sharp-edged.' },
            { text: 'Use for stripping bark, deboning meat, and shaping shafts.' },
            { text: 'Notched flakes were essential for making arrows, spears, and tool handles.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    {
        id: 'burin',
        name: 'Burin',
        stage: 1,
        icon: '🔶',
        category: 'tool',
        subcategory: 'Specialized Stone Tools',
        objective: 'Create a burin — a chisel-like engraving tool for bone, antler, and wood.',
        evolution: 'The burin was the engraving tool of the Upper Paleolithic — enabling detailed carving and groove cutting.',
        requirements: [
            { name: 'Blade or thick flake', value: 'Flint or chert' },
            { name: 'Hammerstone', value: 'For creating the burin spall' }
        ],
        steps: [
            { text: 'Select a blade or thick flake of quality flint.' },
            { text: 'Strike the edge at an angle to remove a small spall — creating a chisel-like edge.' },
            { text: 'The burin edge is narrow, strong, and resharpenable.' },
            { text: 'Use for engraving bone and antler, cutting grooves, and detailed carving.' },
            { text: 'Burins enabled barbed harpoons, needles, and decorative art.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    {
        id: 'awl',
        name: 'Awl',
        stage: 1,
        icon: '📍',
        category: 'tool',
        subcategory: 'Specialized Stone Tools',
        objective: 'Create an awl — a pointed tool for piercing holes in hide, wood, and basketry.',
        evolution: 'The awl was essential for sewing, basketry, and leatherwork — piercing holes for thread and lashing.',
        requirements: [
            { name: 'Bone or stone', value: 'For the awl point' },
            { name: 'Grinding stone', value: 'For shaping' }
        ],
        steps: [
            { text: 'Select a bone splinter or stone flake for the awl body.' },
            { text: 'Grind one end to a sharp, sturdy point on sandstone.' },
            { text: 'The point should be strong enough to pierce hide without breaking.' },
            { text: 'Use for piercing holes in leather, basketry, and wood.' },
            { text: 'Awls enabled sewing tailored clothing and constructing woven baskets.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    {
        id: 'punch',
        name: 'Punch',
        stage: 1,
        icon: '🔩',
        category: 'tool',
        subcategory: 'Specialized Stone Tools',
        objective: 'Create a punch — a blunt-pointed tool for indirect percussion stone knapping.',
        evolution: 'The punch enabled controlled, precise flake removal — producing longer, straighter blades.',
        requirements: [
            { name: 'Antler tine or hardwood', value: 'For the punch body' },
            { name: 'Stone core', value: 'To work on' }
        ],
        steps: [
            { text: 'Select an antler tine or hardwood rod about 15-20 cm long.' },
            { text: 'Shape one end to a blunt, rounded point.' },
            { text: 'Place the punch tip against the stone core at the desired removal point.' },
            { text: 'Strike the opposite end with a hammerstone.' },
            { text: 'The punch transfers force precisely, producing long, controlled blades.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    {
        id: 'hammerstone',
        name: 'Hammerstone',
        stage: 1,
        icon: '🔨',
        category: 'tool',
        subcategory: 'Specialized Stone Tools',
        objective: 'Select and prepare a hammerstone — the most fundamental tool in stone technology.',
        evolution: 'The hammerstone is humanity\'s oldest tool — every stone tool begins with a hammerstone.',
        requirements: [
            { name: 'Hard rounded stone', value: 'Quartzite, basalt, or granite' },
            { name: 'Comfortable size', value: 'Fits in hand, 200-500g' }
        ],
        steps: [
            { text: 'Select a hard, dense, rounded stone — river cobbles are ideal.' },
            { text: 'The stone should fit comfortably and weigh 200-500 grams.' },
            { text: 'Use for striking flakes, crushing materials, and breaking bones.' },
            { text: 'A good hammerstone can be used for months before needing replacement.' },
            { text: 'Keep several hammerstones of different sizes for different tasks.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    {
        id: 'sickle-blade',
        name: 'Sickle Blade',
        stage: 1,
        icon: '🌾',
        category: 'tool',
        subcategory: 'Specialized Stone Tools',
        objective: 'Create a serrated sickle blade for harvesting wild and domesticated grain.',
        evolution: 'Sickle blades enabled efficient grain harvesting — the critical technology that made agriculture productive.',
        requirements: [
            { name: 'Flint blades', value: 'Multiple long, thin blades' },
            { name: 'Wooden handle', value: 'Curved sickle body' },
            { name: 'Resin adhesive', value: 'For mounting' }
        ],
        steps: [
            { text: 'Produce multiple long, thin flint blades from a prepared core.' },
            { text: 'Retouch one edge of each blade to create a serrated cutting edge.' },
            { text: 'Create a curved wooden handle — the sickle body.' },
            { text: 'Insert blades into a groove with resin adhesive — serrated edges facing inward.' },
            { text: 'Use with a slicing motion to cut grain stalks at the base.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    {
        id: 'arrowhead',
        name: 'Arrowhead',
        stage: 1,
        icon: '🏹',
        category: 'tool',
        subcategory: 'Specialized Stone Tools',
        objective: 'Create a small, pointed stone arrowhead for bow-and-arrow hunting.',
        evolution: 'The arrowhead enabled silent, accurate ranged hunting — transforming human hunting efficiency.',
        requirements: [
            { name: 'Flint or obsidian', value: 'Small, thin piece' },
            { name: 'Pressure flaker', value: 'Antler tine' },
            { name: 'Arrow shaft', value: 'Straight wooden shaft' }
        ],
        steps: [
            { text: 'Select a small, thin flint or obsidian flake.' },
            { text: 'Use a pressure flaker to shape into a pointed triangle or leaf shape.' },
            { text: 'Create a notch or stem at the base for attaching to the arrow shaft.' },
            { text: 'The arrowhead should be symmetrical, thin, and razor-sharp.' },
            { text: 'Attach to arrow shaft with sinew and resin. Enables silent, accurate hunting.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    {
        id: 'spear-point',
        name: 'Spear Point',
        stage: 1,
        icon: '🔱',
        category: 'tool',
        subcategory: 'Specialized Stone Tools',
        objective: 'Create a large stone spear point for thrusting and throwing spears.',
        evolution: 'Spear points were the primary hunting weapon for most of human history.',
        requirements: [
            { name: 'Flint or quartzite', value: 'Large, thick piece' },
            { name: 'Spear shaft', value: 'Straight hardwood' }
        ],
        steps: [
            { text: 'Select a large piece of flint or quartzite.' },
            { text: 'Shape into a pointed leaf or lanceolate form with a hammerstone.' },
            { text: 'Create a stem or tang at the base for hafting.' },
            { text: 'Thin the edges with pressure flaking for sharpness.' },
            { text: 'Haft to a hardwood shaft with sinew and resin.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    {
        id: 'projectile-point',
        name: 'Projectile Point',
        stage: 1,
        icon: '🎯',
        category: 'tool',
        subcategory: 'Specialized Stone Tools',
        objective: 'Create a general-purpose stone projectile point for spears, darts, and arrows.',
        evolution: 'Projectile points are the most common artifact type in the archaeological record — millions found worldwide.',
        requirements: [
            { name: 'Flint, chert, or obsidian', value: 'Quality knapping stone' },
            { name: 'Shaft', value: 'Wood or bone' }
        ],
        steps: [
            { text: 'Select quality knapping stone appropriate for the intended weapon size.' },
            { text: 'Shape by percussion flaking, then pressure flaking for fine detail.' },
            { text: 'Create hafting element: stem, tang, or notches for attachment.' },
            { text: 'Ensure symmetry for accurate flight.' },
            { text: 'Haft to shaft with sinew and resin adhesive.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    {
        id: 'saddle-quern',
        name: 'Saddle Quern',
        stage: 1,
        icon: '⚙️',
        category: 'tool',
        subcategory: 'Specialized Stone Tools',
        objective: 'Create a saddle quern — a stone grinding tool for processing grain into flour.',
        evolution: 'The saddle quern was the primary grain-processing tool for thousands of years.',
        requirements: [
            { name: 'Flat stone slab', value: 'Basalt or sandstone, 40-60 cm' },
            { name: 'Hand stone (mano)', value: 'Oval grinding stone' }
        ],
        steps: [
            { text: 'Select a flat stone slab 40-60 cm long — basalt is ideal.' },
            { text: 'Create a slightly concave grinding surface by pecking with a harder stone.' },
            { text: 'Select or shape an oval hand stone that fits comfortably in both hands.' },
            { text: 'Place grain on the base stone and rub with the hand stone back and forth.' },
            { text: 'The saddle quern converts grain into flour — the foundation of bread and porridge.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    {
        id: 'mortar',
        name: 'Mortar',
        stage: 1,
        icon: '🥣',
        category: 'tool',
        subcategory: 'Specialized Stone Tools',
        objective: 'Create a stone mortar for pounding and crushing food, pigments, and materials.',
        evolution: 'The mortar and pestle enabled pounding tasks that grinding alone could not accomplish.',
        requirements: [
            { name: 'Large stone block', value: 'Basalt or granite' },
            { name: 'Pestle', value: 'Cylindrical grinding stone' }
        ],
        steps: [
            { text: 'Select a large, sturdy stone block.' },
            { text: 'Peck a bowl-shaped depression in the center using a hammerstone.' },
            { text: 'Deepen the depression progressively — walls should be thick.' },
            { text: 'Smooth the interior with a grinding stone.' },
            { text: 'Use with a pestle for pounding grain, nuts, pigments, and medicinal herbs.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    {
        id: 'pestle',
        name: 'Pestle',
        stage: 1,
        icon: '🔩',
        category: 'tool',
        subcategory: 'Specialized Stone Tools',
        objective: 'Create a stone pestle for use with a mortar in pounding and crushing.',
        evolution: 'The pestle is the active grinding element — its shape and weight determine pounding efficiency.',
        requirements: [
            { name: 'Tough stone', value: 'Basalt or granite' },
            { name: 'Grinding stone', value: 'For shaping' }
        ],
        steps: [
            { text: 'Select a tough, dense stone — basalt or granite works best.' },
            { text: 'Shape into a cylindrical form about 20-30 cm long.' },
            { text: 'Round one end for pounding. The other end serves as a handle.' },
            { text: 'Smooth the surface on sandstone to prevent material contamination.' },
            { text: 'Use with a mortar for pounding grain, nuts, pigments, and medicinal plants.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    {
        id: 'rotary-quern',
        name: 'Rotary Quern',
        stage: 1,
        icon: '⚙️',
        category: 'tool',
        subcategory: 'Specialized Stone Tools',
        objective: 'Create a rotary quern — two circular grinding stones for efficient grain milling.',
        evolution: 'The rotary quern was more efficient than the saddle quern — producing finer flour for larger-scale processing.',
        requirements: [
            { name: 'Two stone discs', value: 'Basalt, 30-50 cm diameter' },
            { name: 'Central pivot', value: 'Wooden or stone peg' }
        ],
        steps: [
            { text: 'Create two circular stone discs — lower (stationary) and upper (rotating).' },
            { text: 'Carve grinding surfaces on the facing sides of both stones.' },
            { text: 'Create a central hole in the upper stone for feeding grain.' },
            { text: 'Install a pivot to align the two stones. Add a handle to the upper stone.' },
            { text: 'Feed grain through the hole while rotating — flour exits from the edges.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    {
        id: 'net-sinker',
        name: 'Net Sinker',
        stage: 1,
        icon: '⚓',
        category: 'tool',
        subcategory: 'Specialized Stone Tools',
        objective: 'Create grooved stone weights for fishing nets.',
        evolution: 'Net sinkers enabled weighted fishing nets — catching multiple fish simultaneously.',
        requirements: [
            { name: 'Small rounded stones', value: 'River cobbles' },
            { name: 'Hammerstone', value: 'For grooving' }
        ],
        steps: [
            { text: 'Select small, rounded river stones — fist-sized.' },
            { text: 'Peck a groove around the middle of each stone.' },
            { text: 'The groove should be deep enough to hold cordage securely.' },
            { text: 'Attach sinkers to the bottom edge of a woven fishing net.' },
            { text: 'The weighted net sinks and hangs vertically, trapping fish.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    {
        id: 'loom-weight',
        name: 'Loom Weight',
        stage: 1,
        icon: '⚖️',
        category: 'tool',
        subcategory: 'Specialized Stone Tools',
        objective: 'Create perforated weights for vertical loom warp tension.',
        evolution: 'Loom weights enabled the vertical loom — allowing wider, longer fabric production.',
        requirements: [
            { name: 'Clay or stone', value: 'For weight body' },
            { name: 'Drilling tool', value: 'Flint drill' }
        ],
        steps: [
            { text: 'Shape clay or stone into pyramidal or disc weights — 200-500 grams each.' },
            { text: 'Drill a hole through the top for hanging.' },
            { text: 'Fire clay weights for durability.' },
            { text: 'Hang weights from warp threads on a vertical loom.' },
            { text: 'More weights allow wider fabric production.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    {
        id: 'abrader',
        name: 'Abrader / Grinder',
        stage: 1,
        icon: '🪨',
        category: 'tool',
        subcategory: 'Specialized Stone Tools',
        objective: 'Create an abrader for sharpening tools and grinding pigments.',
        evolution: 'Abraders were the sharpening stones of the Stone Age — essential for maintaining tool edges.',
        requirements: [
            { name: 'Sandstone block', value: 'Coarse to fine grain' },
            { name: 'Water', value: 'For wet grinding' }
        ],
        steps: [
            { text: 'Select a sandstone block — coarse for shaping, fine for finishing.' },
            { text: 'Use coarse side for initial sharpening of dull tools.' },
            { text: 'Use fine side for polishing and finishing.' },
            { text: 'Wet grinding is more efficient — water carries away stone dust.' },
            { text: 'Also use for grinding pigments into fine powder for paint.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    // === TOOLS — Bone & Antler Tools ===
    {
        id: 'bone-needle-eyed',
        name: 'Bone Needle (Eyed)',
        stage: 1,
        icon: '🪡',
        category: 'tool',
        subcategory: 'Bone & Antler Tools',
        objective: 'Create an eyed bone needle for sewing tailored clothing.',
        evolution: 'The eyed bone needle enabled tailored, fitted clothing — critical for survival in cold climates.',
        requirements: [
            { name: 'Bird bone or splinter', value: 'Hollow or flat bone' },
            { name: 'Flint drill', value: 'For making the eye' },
            { name: 'Sandstone', value: 'For smoothing' }
        ],
        steps: [
            { text: 'Select a thin bird bone or split a larger bone into a sliver.' },
            { text: 'Shape into a needle form — pointed at one end, blunt at the other.' },
            { text: 'Drill a small eye near the blunt end with a flint drill and bow.' },
            { text: 'Smooth the entire needle on sandstone.' },
            { text: 'Thread sinew or plant fiber through the eye. Use for sewing tailored clothing.' }
        ],
        videoUrl: 'https://youtu.be/2_BBtjwd34c?si=BoneNeedle'
    },
    {
        id: 'bone-awl',
        name: 'Bone Awl',
        stage: 1,
        icon: '📍',
        category: 'tool',
        subcategory: 'Bone & Antler Tools',
        objective: 'Create a bone awl for piercing holes in leather and basketry.',
        evolution: 'Bone awls provided a durable, fine-pointed piercing tool — essential for leatherwork and basketry.',
        requirements: [
            { name: 'Animal bone splinter', value: 'Long, straight piece' },
            { name: 'Grinding stone', value: 'For shaping the point' }
        ],
        steps: [
            { text: 'Select a straight bone splinter from a large animal.' },
            { text: 'Grind one end to a sharp, sturdy point on sandstone.' },
            { text: 'The point should be strong enough to pierce thick hide.' },
            { text: 'Use for piercing holes in leather, basketry, and wood.' },
            { text: 'Bone awls are more durable than stone awls for repeated piercing.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    {
        id: 'bone-fishhook',
        name: 'Bone Fishhook',
        stage: 1,
        icon: '',
        category: 'tool',
        subcategory: 'Bone & Antler Tools',
        objective: 'Carve a fishhook from bone for selective, passive fishing.',
        evolution: 'Bone fishhooks enabled selective fishing — lines could be left unattended for passive food acquisition.',
        requirements: [
            { name: 'Animal bone', value: 'Curved or straight splinter' },
            { name: 'Stone tools', value: 'For carving and sharpening' }
        ],
        steps: [
            { text: 'Select a curved bone splinter or shape a straight piece into a curve.' },
            { text: 'Carve a sharp point and a barb to prevent fish from escaping.' },
            { text: 'Create a groove or hole at the top for attaching cordage.' },
            { text: 'Smooth the hook on sandstone.' },
            { text: 'Attach to cordage line with bait. Use for hook-and-line fishing.' }
        ],
        videoUrl: 'https://youtu.be/enoPn1X3-oE?si=BoneAntler'
    },
    {
        id: 'barbed-harpoon',
        name: 'Barbed Harpoon',
        stage: 1,
        icon: '🔱',
        category: 'tool',
        subcategory: 'Bone & Antler Tools',
        objective: 'Create a barbed harpoon from antler for hunting large fish and marine mammals.',
        evolution: 'Barbed harpoons enabled hunting of large sea creatures — expanding human food sources dramatically.',
        requirements: [
            { name: 'Antler tine', value: 'For the harpoon head' },
            { name: 'Wooden shaft', value: 'For the handle' },
            { name: 'Cordage line', value: 'Attached to harpoon' }
        ],
        steps: [
            { text: 'Carve an antler tine into a barbed point — multiple barbs facing backward.' },
            { text: 'Create a slot or groove for attaching to a wooden shaft.' },
            { text: 'Attach a cordage line to the base of the harpoon head.' },
            { text: 'The barbed head detaches from the shaft but remains attached to the line.' },
            { text: 'Throw at large fish or marine mammals. Pull in the line to retrieve the catch.' }
        ],
        videoUrl: 'https://youtu.be/enoPn1X3-oE?si=BoneAntler'
    },
    {
        id: 'antler-hammer',
        name: 'Antler Hammer',
        stage: 1,
        icon: '🔨',
        category: 'tool',
        subcategory: 'Bone & Antler Tools',
        objective: 'Use an antler as a soft hammer for controlled stone knapping.',
        evolution: 'Antler hammers absorb shock and provide controlled strikes — essential for fine tool shaping.',
        requirements: [
            { name: 'Deer antler', value: 'Thick beam section' },
            { name: 'Handle wrapping', value: 'Leather or cordage for grip' }
        ],
        steps: [
            { text: 'Select a thick section of deer antler beam.' },
            { text: 'Cut to a comfortable length — about 20-30 cm.' },
            { text: 'Wrap the handle end with leather or cordage for grip.' },
            { text: 'Use the antler end for striking stone cores — it absorbs shock.' },
            { text: 'Antler hammers produce longer, straighter flakes than stone hammers.' }
        ],
        videoUrl: 'https://youtu.be/enoPn1X3-oE?si=BoneAntler'
    },
    {
        id: 'antler-pick',
        name: 'Antler Pick',
        stage: 1,
        icon: '⛏️',
        category: 'tool',
        subcategory: 'Bone & Antler Tools',
        objective: 'Use an antler pick for mining flint and digging in hard soil.',
        evolution: 'Antler picks were the primary mining tools of the Neolithic — used in deep flint mines across Europe.',
        requirements: [
            { name: 'Deer antler', value: 'Full beam with tines' },
            { name: 'Handle wrapping', value: 'For grip' }
        ],
        steps: [
            { text: 'Select a full deer antler beam with tines intact.' },
            { text: 'Wrap the base with leather or cordage for grip.' },
            { text: 'Use the tine ends for prying and digging in hard soil or chalk.' },
            { text: 'Antler picks were used in Neolithic flint mines like Grimes Graves.' },
            { text: 'The elastic nature of antler absorbs shock — preventing hand injury during mining.' }
        ],
        videoUrl: 'https://youtu.be/enoPn1X3-oE?si=BoneAntler'
    },
    {
        id: 'bone-flute',
        name: 'Bone Flute',
        stage: 1,
        icon: '🎵',
        category: 'tool',
        subcategory: 'Bone & Antler Tools',
        objective: 'Carve a musical flute from hollow bird bone.',
        evolution: 'Bone flutes are the oldest known musical instruments — music predates agriculture.',
        requirements: [
            { name: 'Hollow bird bone', value: 'Wing bone of large bird' },
            { name: 'Carving tools', value: 'Burin, drill' }
        ],
        steps: [
            { text: 'Select a hollow bird wing bone — clean and dry.' },
            { text: 'Carve a mouthpiece notch at one end.' },
            { text: 'Drill finger holes along the bone at measured intervals.' },
            { text: 'Tune by adjusting hole size and position.' },
            { text: 'Play by blowing across the mouthpiece. Music is central to ritual and social bonding.' }
        ],
        videoUrl: 'https://youtu.be/enoPn1X3-oE?si=BoneAntler'
    },
    {
        id: 'bone-spear-point',
        name: 'Bone Spear Point',
        stage: 1,
        icon: '🔱',
        category: 'tool',
        subcategory: 'Bone & Antler Tools',
        objective: 'Create a spear point from bone for thrusting and throwing.',
        evolution: 'Bone spear points were used when stone was scarce — providing a tough, flexible alternative.',
        requirements: [
            { name: 'Large animal bone', value: 'Leg bone or rib' },
            { name: 'Stone tools', value: 'For shaping' },
            { name: 'Spear shaft', value: 'Hardwood' }
        ],
        steps: [
            { text: 'Split a large bone lengthwise. Select a straight, thick section.' },
            { text: 'Shape into a pointed form with stone tools.' },
            { text: 'Create a tang or groove at the base for hafting.' },
            { text: 'Smooth on sandstone and harden the tip by heating.' },
            { text: 'Haft to a hardwood shaft with sinew and resin.' }
        ],
        videoUrl: 'https://youtu.be/w0MHDB-xRkY?si=StoneToolsGeneral'
    },
    {
        id: 'ivory-figurine',
        name: 'Ivory Figurine',
        stage: 1,
        icon: '🗿',
        category: 'tool',
        subcategory: 'Bone & Antler Tools',
        objective: 'Carve a figurine or ornament from mammoth ivory.',
        evolution: 'Ivory figurines are among the oldest known art — the Venus figurines date back 35,000 years.',
        requirements: [
            { name: 'Mammoth ivory', value: 'Tusk section' },
            { name: 'Carving tools', value: 'Burins, scrapers' }
        ],
        steps: [
            { text: 'Obtain mammoth ivory from hunted animals or river deposits.' },
            { text: 'Cut to manageable size with a stone saw.' },
            { text: 'Rough-shape with a burin or scraper.' },
            { text: 'Carve details — facial features, body form, or decorative patterns.' },
            { text: 'Polish with fine abrasive. Ivory figurines may represent deities or fertility symbols.' }
        ],
        videoUrl: 'https://youtu.be/enoPn1X3-oE?si=BoneAntler'
    },
    {
        id: 'bone-scraper',
        name: 'Bone Scraper',
        stage: 1,
        icon: '🔪',
        category: 'tool',
        subcategory: 'Bone & Antler Tools',
        objective: 'Create a smooth-edged scraper from bone for hide processing.',
        evolution: 'Bone scrapers were gentler on hides than stone scrapers — producing thinner, more flexible leather.',
        requirements: [
            { name: 'Flat bone piece', value: 'Rib or scapula fragment' },
            { name: 'Grinding stone', value: 'For edge shaping' }
        ],
        steps: [
            { text: 'Select a flat piece of bone — rib or scapula works well.' },
            { text: 'Shape one edge to a smooth, curved scraping surface.' },
            { text: 'Smooth the entire tool on sandstone.' },
            { text: 'Use for the final smoothing of hides after initial stone scraping.' },
            { text: 'Bone scrapers produce softer, more flexible leather than stone scrapers.' }
        ],
        videoUrl: 'https://youtu.be/enoPn1X3-oE?si=BoneAntler'
    },
    {
        id: 'bone-spatula',
        name: 'Bone Spatula',
        stage: 1,
        icon: '🥄',
        category: 'tool',
        subcategory: 'Bone & Antler Tools',
        objective: 'Create a flat bone spatula for mixing pigments and food preparation.',
        evolution: 'Bone spatulas were multipurpose tools — used for mixing paint, applying adhesives, and food prep.',
        requirements: [
            { name: 'Flat bone piece', value: 'Rib or flat bone fragment' },
            { name: 'Grinding stone', value: 'For smoothing' }
        ],
        steps: [
            { text: 'Select a flat bone piece — rib or flat bone fragment.' },
            { text: 'Shape into a flat, paddle-like form.' },
            { text: 'Smooth all surfaces on sandstone.' },
            { text: 'Use for mixing pigments, applying resin adhesive, and food preparation.' },
            { text: 'Bone spatulas are non-porous and easy to clean.' }
        ],
        videoUrl: 'https://youtu.be/enoPn1X3-oE?si=BoneAntler'
    },
    {
        id: 'antler-pressure-flaker',
        name: 'Antler Pressure Flaker',
        stage: 1,
        icon: '⚒️',
        category: 'tool',
        subcategory: 'Bone & Antler Tools',
        objective: 'Use an antler tine as a pressure flaker for fine stone tool shaping.',
        evolution: 'Antler pressure flakers enabled precision shaping — producing razor-sharp, symmetrical edges.',
        requirements: [
            { name: 'Antler tine', value: 'Pointed tine end' },
            { name: 'Stone tool blank', value: 'Rough-shaped flake or blade' }
        ],
        steps: [
            { text: 'Select a pointed antler tine — the tip should be sharp but not broken.' },
            { text: 'Hold the stone tool blank on a leather pad for stability.' },
            { text: 'Press the antler tine firmly against the edge — don\'t strike.' },
            { text: 'Small, controlled flakes pop off as pressure builds.' },
            { text: 'Work around the perimeter to refine the shape. Pressure flaking produces razor-sharp edges.' }
        ],
        videoUrl: 'https://youtu.be/enoPn1X3-oE?si=BoneAntler'
    },
    // === TOOLS — Wooden Tools ===
    {
        id: 'digging-stick',
        name: 'Digging Stick',
        stage: 1,
        icon: '🥕',
        category: 'tool',
        subcategory: 'Wooden Tools',
        objective: 'Create a hardened digging stick for harvesting roots and tubers.',
        evolution: 'The digging stick was the primary agricultural tool before the plow — used for thousands of years.',
        requirements: [
            { name: 'Hardwood branch', value: 'Straight, sturdy' },
            { name: 'Fire', value: 'For hardening the tip' }
        ],
        steps: [
            { text: 'Select a straight hardwood branch about 1-1.5 meters long.' },
            { text: 'Sharpen one end to a point with a stone tool.' },
            { text: 'Harden the tip by heating in fire — this makes it more durable.' },
            { text: 'Use for digging up roots, tubers, and bulbs.' },
            { text: 'The digging stick is also used for making planting holes in agriculture.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'wooden-spear',
        name: 'Wooden Spear',
        stage: 1,
        icon: '🔱',
        category: 'tool',
        subcategory: 'Wooden Tools',
        objective: 'Create a pointed wooden spear for hunting and defense.',
        evolution: 'Wooden spears are the oldest weapons — used by early humans for over 400,000 years.',
        requirements: [
            { name: 'Straight hardwood', value: 'Ash, oak, or similar' },
            { name: 'Fire', value: 'For hardening the tip' },
            { name: 'Stone tools', value: 'For shaping' }
        ],
        steps: [
            { text: 'Select a straight hardwood branch 2-3 meters long.' },
            { text: 'Remove bark and branches. Shape to uniform thickness.' },
            { text: 'Sharpen one end to a point with a stone tool.' },
            { text: 'Harden the tip by heating in fire — rotating for even hardening.' },
            { text: 'Use for thrusting or throwing at game. Add a stone point for greater effectiveness.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'bow',
        name: 'Bow',
        stage: 1,
        icon: '🏹',
        category: 'tool',
        subcategory: 'Wooden Tools',
        objective: 'Create a wooden bow with cordage string for ranged hunting.',
        evolution: 'The bow enabled silent, accurate hunting at distance — a revolutionary advantage.',
        requirements: [
            { name: 'Flexible wood', value: 'Yew, ash, or hickory' },
            { name: 'Cordage', value: 'Sinew or plant fiber for string' },
            { name: 'Stone tools', value: 'For shaping' }
        ],
        steps: [
            { text: 'Select a flexible wood branch — yew, ash, or hickory are ideal.' },
            { text: 'Shape into a stave — thicker in the middle (handle), tapering toward the ends.' },
            { text: 'Carve notches at each end for the bowstring.' },
            { text: 'String the bow with sinew or plant fiber cordage.' },
            { text: 'Test the draw — the bow should bend evenly without breaking.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'arrow',
        name: 'Arrow',
        stage: 1,
        icon: '➡️',
        category: 'tool',
        subcategory: 'Wooden Tools',
        objective: 'Create arrows with stone points and feather fletching for the bow.',
        evolution: 'Arrows enabled silent, accurate hunting — the arrowhead is one of the most common archaeological finds.',
        requirements: [
            { name: 'Straight shaft', value: 'Reed or lightweight wood' },
            { name: 'Arrowhead', value: 'Stone or bone point' },
            { name: 'Feathers', value: 'For fletching' }
        ],
        steps: [
            { text: 'Select a straight reed or lightweight wood shaft — about 60-80 cm.' },
            { text: 'Carve a nock (notch) at one end for the bowstring.' },
            { text: 'Attach a stone or bone arrowhead to the other end with sinew and resin.' },
            { text: 'Attach three feathers (fletching) near the nock end with sinew.' },
            { text: 'The fletching stabilizes the arrow in flight for accuracy.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'atlatl',
        name: 'Atlatl',
        stage: 1,
        icon: '🏹',
        category: 'tool',
        subcategory: 'Wooden Tools',
        objective: 'Create a spear-throwing lever for 2x range and power.',
        evolution: 'The atlatl increased spear velocity by 2x — enabling hunting of fast-moving game at safe distances.',
        requirements: [
            { name: 'Wood or antler', value: 'For the lever' },
            { name: 'Light spear', value: 'Balanced throwing dart' }
        ],
        steps: [
            { text: 'Carve a wooden or antler lever about 40-60 cm long.' },
            { text: 'Add a hook or spur at one end for engaging the spear.' },
            { text: 'Balance the atlatl for comfortable throwing.' },
            { text: 'Hook the spear into the atlatl spur. Grip the atlatl handle.' },
            { text: 'Throw with a whip-like motion. The atlatl extends your arm, doubling spear velocity.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'club',
        name: 'Club',
        stage: 1,
        icon: '🏏',
        category: 'tool',
        subcategory: 'Wooden Tools',
        objective: 'Create a wooden club for close-quarters combat and hunting.',
        evolution: 'The club is one of the simplest weapons — a heavy wooden stick for blunt force.',
        requirements: [
            { name: 'Heavy hardwood', value: 'Oak or similar dense wood' },
            { name: 'Stone tools', value: 'For shaping' }
        ],
        steps: [
            { text: 'Select a heavy hardwood branch with a natural knob or swell at one end.' },
            { text: 'Shape the handle for a comfortable grip.' },
            { text: 'Harden the striking end by heating in fire.' },
            { text: 'Use for close-quarters combat, hunting small game, and defense.' },
            { text: 'A heavy club can stun or kill medium-sized animals with a single blow.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'wooden-shield',
        name: 'Wooden Shield',
        stage: 1,
        icon: '🛡️',
        category: 'tool',
        subcategory: 'Wooden Tools',
        objective: 'Create a wooden shield covered with hide for personal defense.',
        evolution: 'Shields enabled personal protection in combat — the first defensive technology.',
        requirements: [
            { name: 'Wooden plank', value: 'Flat, lightweight wood' },
            { name: 'Animal hide', value: 'For covering' },
            { name: 'Handle', value: 'Wooden grip' }
        ],
        steps: [
            { text: 'Shape a wooden plank into a round or rectangular shield form.' },
            { text: 'Attach a wooden handle on the back for gripping.' },
            { text: 'Stretch and attach animal hide over the front surface.' },
            { text: 'Secure the hide with sinew lashing around the edges.' },
            { text: 'The hide-covered shield deflects arrows, spears, and club blows.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'raft',
        name: 'Raft',
        stage: 1,
        icon: '🛶',
        category: 'tool',
        subcategory: 'Wooden Tools',
        objective: 'Build a simple log raft for crossing rivers and lakes.',
        evolution: 'Rafts enabled water crossing and transport — expanding human range across waterways.',
        requirements: [
            { name: 'Logs', value: 'Several straight, buoyant logs' },
            { name: 'Cordage', value: 'For lashing logs together' },
            { name: 'Pole or paddle', value: 'For propulsion' }
        ],
        steps: [
            { text: 'Collect several straight, buoyant logs of similar length.' },
            { text: 'Lash the logs together side by side with cordage.' },
            { text: 'Add cross-braces for stability.' },
            { text: 'Test buoyancy before loading cargo or passengers.' },
            { text: 'Use a pole or paddle for propulsion. Rafts cross rivers and transport goods.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'dugout-canoe',
        name: 'Dugout Canoe',
        stage: 1,
        icon: '🛶',
        category: 'tool',
        subcategory: 'Wooden Tools',
        objective: 'Hollow a tree trunk into a canoe for river and lake travel.',
        evolution: 'Dugout canoes enabled efficient water travel and fishing — some of the oldest known watercraft.',
        requirements: [
            { name: 'Large tree trunk', value: 'Straight, rot-resistant wood' },
            { name: 'Fire', value: 'For hollowing' },
            { name: 'Stone adze', value: 'For shaping' }
        ],
        steps: [
            { text: 'Select a large, straight tree trunk — cedar, oak, or pine.' },
            { text: 'Fell and trim to desired length. Remove bark.' },
            { text: 'Burn/char the interior to hollow — control the fire carefully.' },
            { text: 'Scrape out charred wood with a stone adze.' },
            { text: 'Repeat burning and scraping until the desired depth is achieved.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'fire-plough',
        name: 'Fire Plough',
        stage: 1,
        icon: '🔥',
        category: 'tool',
        subcategory: 'Wooden Tools',
        objective: 'Create a fire plough for friction fire-making.',
        evolution: 'The fire plough was a simple but effective friction fire method — requiring only wood and effort.',
        requirements: [
            { name: 'Fireboard', value: 'Soft wood with carved groove' },
            { name: 'Plough stick', value: 'Hardwood stick' },
            { name: 'Tinder bundle', value: 'Dry grass or bark' }
        ],
        steps: [
            { text: 'Carve a groove along a soft wood fireboard.' },
            { text: 'Press the hardwood plough stick into the groove.' },
            { text: 'Rub back and forth vigorously — friction creates heat.' },
            { text: 'Wood dust accumulates at the groove end and ignites.' },
            { text: 'Transfer the ember to tinder and blow into flame.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'bow-drill',
        name: 'Bow Drill',
        stage: 1,
        icon: '🔥',
        category: 'tool',
        subcategory: 'Wooden Tools',
        objective: 'Create a bow drill for efficient friction fire-making and drilling holes.',
        evolution: 'The bow drill was the most efficient friction fire method — also used for drilling holes in wood and bone.',
        requirements: [
            { name: 'Bow', value: 'Curved stick with cordage' },
            { name: 'Fireboard and spindle', value: 'Soft wood board, hardwood spindle' },
            { name: 'Handhold', value: 'Stone or wood bearing block' }
        ],
        steps: [
            { text: 'Construct a bow from a curved stick with cordage.' },
            { text: 'Wrap the cordage around a hardwood spindle.' },
            { text: 'Place the spindle in the fireboard notch. Hold steady with a handhold.' },
            { text: 'Move the bow back and forth to spin the spindle rapidly.' },
            { text: 'Friction creates heat. A glowing ember forms. Transfer to tinder.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'hand-drill',
        name: 'Hand Drill',
        stage: 1,
        icon: '🔥',
        category: 'tool',
        subcategory: 'Wooden Tools',
        objective: 'Create a hand drill for friction fire-making using only hand power.',
        evolution: 'The hand drill is the simplest fire-making tool — requiring only two pieces of wood and skill.',
        requirements: [
            { name: 'Fireboard', value: 'Soft wood with notch' },
            { name: 'Spindle', value: 'Straight hardwood stick' },
            { name: 'Tinder bundle', value: 'Dry grass, bark, or moss' }
        ],
        steps: [
            { text: 'Carve a V-shaped notch in a soft wood fireboard.' },
            { text: 'Place the spindle in the notch. Hold fireboard steady with one foot.' },
            { text: 'Rub the spindle between palms, spinning rapidly.' },
            { text: 'When smoke appears, increase speed. A glowing ember forms.' },
            { text: 'Transfer ember to tinder. Blow gently until flame appears.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'pump-drill',
        name: 'Pump Drill',
        stage: 1,
        icon: '🔩',
        category: 'tool',
        subcategory: 'Wooden Tools',
        objective: 'Create a pump drill with a flywheel for efficient hole drilling.',
        evolution: 'The pump drill enabled efficient, continuous drilling — used for making beads, pipes, and tool holes.',
        requirements: [
            { name: 'Wooden shaft', value: 'Straight stick' },
            { name: 'Flywheel', value: 'Heavy stone or wood disc' },
            { name: 'Cordage', value: 'For the pump mechanism' }
        ],
        steps: [
            { text: 'Mount a flywheel (heavy stone or wood disc) on a wooden shaft.' },
            { text: 'Attach a crossbar at the top with cordage running to the flywheel.' },
            { text: 'Place the drill bit (stone or bone point) at the bottom of the shaft.' },
            { text: 'Pump the crossbar up and down — the flywheel keeps the shaft spinning.' },
            { text: 'Use for drilling holes in wood, bone, and shell.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'paddle',
        name: 'Paddle',
        stage: 1,
        icon: '🚣',
        category: 'tool',
        subcategory: 'Wooden Tools',
        objective: 'Create a wooden paddle for canoe and raft propulsion.',
        evolution: 'Paddles enabled efficient water propulsion — essential for fishing, trade, and travel.',
        requirements: [
            { name: 'Wooden plank', value: 'Flat, lightweight wood' },
            { name: 'Stone tools', value: 'For shaping' }
        ],
        steps: [
            { text: 'Select a flat wooden plank about 1-1.5 meters long.' },
            { text: 'Shape one end into a wide, flat blade.' },
            { text: 'Shape the other end into a handle.' },
            { text: 'Smooth all surfaces to prevent splinters.' },
            { text: 'Use for propelling canoes and rafts through water.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'lever-pry-bar',
        name: 'Lever / Pry Bar',
        stage: 1,
        icon: '🔧',
        category: 'tool',
        subcategory: 'Wooden Tools',
        objective: 'Create a wooden lever for moving heavy objects and prying.',
        evolution: 'The lever is the simplest machine — enabling humans to move objects far heavier than themselves.',
        requirements: [
            { name: 'Sturdy wooden beam', value: 'Hardwood, 1-2 meters' },
            { name: 'Fulcrum', value: 'Rock or log' }
        ],
        steps: [
            { text: 'Select a sturdy hardwood beam — straight and strong.' },
            { text: 'Sharpen one end to a point for prying.' },
            { text: 'Place the lever under the heavy object with a fulcrum (rock or log) nearby.' },
            { text: 'Push down on the long end — the lever multiplies your force.' },
            { text: 'Use for moving stones, logs, and heavy objects.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'wooden-mallet',
        name: 'Wooden Mallet',
        stage: 1,
        icon: '🔨',
        category: 'tool',
        subcategory: 'Wooden Tools',
        objective: 'Create a wooden mallet for driving wedges and carving.',
        evolution: 'The wooden mallet was used for driving wooden wedges, carving, and construction — softer than stone hammers.',
        requirements: [
            { name: 'Hardwood block', value: 'Dense wood for the head' },
            { name: 'Wooden handle', value: 'For gripping' }
        ],
        steps: [
            { text: 'Shape a dense hardwood block into a rectangular head.' },
            { text: 'Drill a hole through the center for the handle.' },
            { text: 'Insert a wooden handle and wedge it securely.' },
            { text: 'Use for driving wooden wedges, carving, and light construction.' },
            { text: 'Wooden mallets are quieter and less damaging than stone hammers.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'wooden-wedge',
        name: 'Wooden Wedge',
        stage: 1,
        icon: '🔺',
        category: 'tool',
        subcategory: 'Wooden Tools',
        objective: 'Create wooden wedges for splitting logs and stones.',
        evolution: 'Wooden wedges enabled splitting of logs into planks — essential for construction and boat-building.',
        requirements: [
            { name: 'Hardwood', value: 'Dense, straight-grained' },
            { name: 'Stone axe', value: 'For shaping' }
        ],
        steps: [
            { text: 'Select a dense hardwood piece.' },
            { text: 'Shape into a wedge — thick at one end, tapering to a thin edge.' },
            { text: 'Drive the wedge into a crack or cut line with a mallet.' },
            { text: 'The wedge converts downward force into outward splitting force.' },
            { text: 'Use multiple wedges for splitting large logs or stones.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'torch',
        name: 'Torch',
        stage: 1,
        icon: '🔦',
        category: 'tool',
        subcategory: 'Wooden Tools',
        objective: 'Create a portable light source for night activity and cave exploration.',
        evolution: 'Torches enabled night activity, cave painting, and exploration — doubling productive hours.',
        requirements: [
            { name: 'Wooden stick', value: 'For torch handle' },
            { name: 'Resin or pitch', value: 'Flammable coating' },
            { name: 'Dry plant fibers', value: 'For wrapping' }
        ],
        steps: [
            { text: 'Select a dry wooden stick about 1 meter long.' },
            { text: 'Wrap one end tightly with dry plant fibers or bark strips.' },
            { text: 'Soak the wrapping in resin, pitch, or animal fat.' },
            { text: 'Light the torch — it burns for 30-60 minutes.' },
            { text: 'Use for night travel, cave exploration, and extended work hours.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    // === TOOLS — Composite & Craft Tools ===
    {
        id: 'sickle-composite',
        name: 'Sickle (Composite)',
        stage: 1,
        icon: '🌾',
        category: 'tool',
        subcategory: 'Composite & Craft Tools',
        objective: 'Create a composite sickle with multiple microlith blades set in a wooden handle.',
        evolution: 'Composite sickles multiplied harvesting efficiency — the foundation of productive agriculture.',
        requirements: [
            { name: 'Wooden handle', value: 'Curved sickle body' },
            { name: 'Microlith blades', value: 'Multiple small flint blades' },
            { name: 'Resin adhesive', value: 'For mounting' }
        ],
        steps: [
            { text: 'Carve a curved wooden handle with a groove along the inner curve.' },
            { text: 'Produce multiple small flint blades with serrated edges.' },
            { text: 'Insert blades into the groove with resin adhesive — serrated edges facing inward.' },
            { text: 'Allow resin to harden completely.' },
            { text: 'Use with a slicing motion to cut grain stalks efficiently.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'hafted-axe',
        name: 'Hafted Axe',
        stage: 1,
        icon: '🪓',
        category: 'tool',
        subcategory: 'Composite & Craft Tools',
        objective: 'Bind a stone axe head to a wooden handle for multiplied cutting force.',
        evolution: 'Hafting multiplied the force of stone tools — transforming small flakes into powerful axes.',
        requirements: [
            { name: 'Stone axe head', value: 'Ground or chipped stone' },
            { name: 'Wooden handle', value: 'Shaped shaft' },
            { name: 'Sinew and resin', value: 'For binding' }
        ],
        steps: [
            { text: 'Shape a wooden handle with a groove or socket for the stone head.' },
            { text: 'Place the stone head in the groove or socket.' },
            { text: 'Wrap tightly with wet sinew — it shrinks as it dries.' },
            { text: 'Apply resin adhesive over the binding for waterproofing.' },
            { text: 'The hafted axe multiplies cutting force and reach.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'hafted-adze',
        name: 'Hafted Adze',
        stage: 1,
        icon: '🪓',
        category: 'tool',
        subcategory: 'Composite & Craft Tools',
        objective: 'Mount a stone blade perpendicular to a wooden handle for wood shaping.',
        evolution: 'The hafted adze was the premier woodworking tool — shaping beams, hollowing canoes, and smoothing surfaces.',
        requirements: [
            { name: 'Stone blade', value: 'Ground or chipped' },
            { name: 'Angled wooden handle', value: 'Crooked or bent handle' },
            { name: 'Binding material', value: 'Sinew and resin' }
        ],
        steps: [
            { text: 'Fashion a wooden handle with a bend — the blade mounts perpendicular.' },
            { text: 'Place the stone blade against the angled handle end.' },
            { text: 'Bind with wet sinew and resin adhesive.' },
            { text: 'The cutting edge faces downward, perpendicular to the handle.' },
            { text: 'Use with a chopping motion to remove thin slices of wood.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'fish-trap',
        name: 'Fish Trap',
        stage: 1,
        icon: '🪤',
        category: 'tool',
        subcategory: 'Composite & Craft Tools',
        objective: 'Build a funnel-shaped basket trap for passive fish capture.',
        evolution: 'Fish traps provided continuous food with minimal effort — a passive, reliable protein source.',
        requirements: [
            { name: 'Woven reeds or stakes', value: 'For trap construction' },
            { name: 'Stream location', value: 'Fish passage point' }
        ],
        steps: [
            { text: 'Weave a funnel-shaped basket from reeds or wooden stakes.' },
            { text: 'Place the trap in a stream where fish naturally pass.' },
            { text: 'Fish swim through the wide opening but cannot find the small exit.' },
            { text: 'Check traps daily and remove caught fish.' },
            { text: 'Fish traps work continuously — providing food while you do other tasks.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'fish-weir',
        name: 'Fish Weir',
        stage: 1,
        icon: '🏗️',
        category: 'tool',
        subcategory: 'Composite & Craft Tools',
        objective: 'Build a permanent wooden fish weir in rivers for continuous fish capture.',
        evolution: 'Fish weirs were permanent installations — some lasted for generations and caught fish continuously.',
        requirements: [
            { name: 'Wooden stakes', value: 'For weir fence' },
            { name: 'Woven panels', value: 'Reed or branch panels' }
        ],
        steps: [
            { text: 'Drive wooden stakes into the riverbed in a V-shape pointing downstream.' },
            { text: 'Weave panels between stakes to create a fence that guides fish.' },
            { text: 'Place a basket trap at the narrow end of the V.' },
            { text: 'Fish swimming downstream are guided into the trap.' },
            { text: 'Fish weirs work continuously — some lasted for generations.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'bird-snare',
        name: 'Bird Snare',
        stage: 1,
        icon: '🪤',
        category: 'tool',
        subcategory: 'Composite & Craft Tools',
        objective: 'Set a loop snare on game trails for passive bird capture.',
        evolution: 'Snares enabled passive hunting — catching birds and small game while the hunter was doing other tasks.',
        requirements: [
            { name: 'Cordage', value: 'For the snare loop' },
            { name: 'Flexible sapling', value: 'For spring mechanism' },
            { name: 'Trigger stick', value: 'For the release mechanism' }
        ],
        steps: [
            { text: 'Locate bird trails or feeding areas.' },
            { text: 'Create a noose from cordage and attach to a bent sapling (spring).' },
            { text: 'Set a trigger stick that releases when a bird walks through.' },
            { text: 'The spring pulls the snare tight around the bird\'s leg or neck.' },
            { text: 'Check snares regularly and reset as needed.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'pit-trap',
        name: 'Pit Trap',
        stage: 1,
        icon: '🕳️',
        category: 'tool',
        subcategory: 'Composite & Craft Tools',
        objective: 'Dig a camouflaged pit trap with stakes for large game capture.',
        evolution: 'Pit traps enabled passive hunting of large animals — a dangerous animal could be captured without direct combat.',
        requirements: [
            { name: 'Digging tools', value: 'For pit excavation' },
            { name: 'Sharp stakes', value: 'For the pit bottom' },
            { name: 'Camouflage materials', value: 'Branches, leaves, soil' }
        ],
        steps: [
            { text: 'Dig a pit 2-3 meters deep along an animal trail.' },
            { text: 'Place sharp stakes at the bottom — pointing upward.' },
            { text: 'Cover the pit with branches, leaves, and soil — camouflage carefully.' },
            { text: 'An animal walking along the trail falls through the camouflage.' },
            { text: 'Check traps regularly. The stakes injure or kill the animal.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'deadfall-trap',
        name: 'Deadfall Trap',
        stage: 1,
        icon: '🪨',
        category: 'tool',
        subcategory: 'Composite & Craft Tools',
        objective: 'Build a heavy rock or log trap triggered by animal movement.',
        evolution: 'Deadfall traps enabled passive hunting of small to medium game — simple, effective, and reusable.',
        requirements: [
            { name: 'Heavy rock or log', value: 'For the falling weight' },
            { name: 'Trigger mechanism', value: 'Stick-based trigger' },
            { name: 'Bait', value: 'To attract the animal' }
        ],
        steps: [
            { text: 'Prop up a heavy rock or log with a stick-based trigger mechanism.' },
            { text: 'Place bait under the trapped area to attract the animal.' },
            { text: 'When the animal disturbs the trigger, the weight falls.' },
            { text: 'The falling weight crushes or traps the animal.' },
            { text: 'Reset the trap after each catch.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'spring-snare',
        name: 'Spring Snare',
        stage: 1,
        icon: '🪤',
        category: 'tool',
        subcategory: 'Composite & Craft Tools',
        objective: 'Set a tension-based noose trap using a bent sapling for small game.',
        evolution: 'Spring snares used stored energy for quick, reliable capture — more effective than simple nooses.',
        requirements: [
            { name: 'Flexible sapling', value: 'Bent under tension' },
            { name: 'Cordage noose', value: 'For the snare' },
            { name: 'Trigger mechanism', value: 'Stick-based release' }
        ],
        steps: [
            { text: 'Bend a flexible sapling and secure it under tension.' },
            { text: 'Attach a cordage noose to the sapling tip.' },
            { text: 'Set a trigger mechanism that releases when an animal disturbs it.' },
            { text: 'The sapling springs up, tightening the noose around the animal.' },
            { text: 'Check snares regularly. Spring snares work on trails and feeding areas.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'bolas',
        name: 'Bolas',
        stage: 1,
        icon: '⚡',
        category: 'tool',
        subcategory: 'Composite & Craft Tools',
        objective: 'Create weighted cords for entangling running animals.',
        evolution: 'Bolas entangled the legs of running animals — enabling capture of fast game like birds and guanacos.',
        requirements: [
            { name: 'Cordage', value: 'Strong plant fiber or sinew' },
            { name: 'Weights', value: 'Round stones' },
            { name: 'Central connector', value: 'To join the cords' }
        ],
        steps: [
            { text: 'Create 2-3 cords of equal length from cordage.' },
            { text: 'Attach a round stone weight to the end of each cord.' },
            { text: 'Join the other ends together at a central point.' },
            { text: 'Swing the bolas by the central point and throw at running animals.' },
            { text: 'The weights wrap around the animal\'s legs, entangling it.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'fishing-net',
        name: 'Fishing Net',
        stage: 1,
        icon: '🥅',
        category: 'tool',
        subcategory: 'Composite & Craft Tools',
        objective: 'Weave a fiber net for catching multiple fish simultaneously.',
        evolution: 'Fishing nets multiplied catch rates — a single net could catch dozens of fish at once.',
        requirements: [
            { name: 'Plant fiber cordage', value: 'For the net mesh' },
            { name: 'Net sinkers', value: 'Grooved stones' },
            { name: 'Floats', value: 'Wood or cork pieces' }
        ],
        steps: [
            { text: 'Weave a net from plant fiber cordage — diamond-shaped mesh.' },
            { text: 'Attach stone sinkers to the bottom edge and floats to the top.' },
            { text: 'Stretch the net across a stream, river, or tidal area.' },
            { text: 'Fish swim into the net and become entangled.' },
            { text: 'Check nets regularly and remove caught fish.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'sling',
        name: 'Sling',
        stage: 1,
        icon: '⚡',
        category: 'tool',
        subcategory: 'Composite & Craft Tools',
        objective: 'Create a sling for throwing stones at high velocity.',
        evolution: 'The sling was one of the fastest projectile weapons — stones launched at bullet-like speeds.',
        requirements: [
            { name: 'Cordage or leather', value: 'For sling construction' },
            { name: 'Smooth stones', value: 'Fist-sized projectiles' }
        ],
        steps: [
            { text: 'Construct a sling from braided cordage with a central pouch.' },
            { text: 'Place a smooth, round stone in the pouch.' },
            { text: 'Hold one end of the cord, swing the sling in a circular motion.' },
            { text: 'Release one end to launch the stone. Speed exceeds 100 km/h.' },
            { text: 'Use for hunting small game, birds, and self-defense.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'hide-shield',
        name: 'Hide-Covered Shield',
        stage: 1,
        icon: '🛡️',
        category: 'tool',
        subcategory: 'Composite & Craft Tools',
        objective: 'Create a wooden frame shield covered with animal hide for combat defense.',
        evolution: 'Hide-covered shields provided lightweight, flexible protection — the standard shield of ancient warfare.',
        requirements: [
            { name: 'Wooden frame', value: 'Light wooden planks' },
            { name: 'Animal hide', value: 'For covering' },
            { name: 'Handle', value: 'Wooden grip' }
        ],
        steps: [
            { text: 'Build a wooden frame from light planks — round or rectangular.' },
            { text: 'Stretch and attach animal hide over the front surface.' },
            { text: 'Secure the hide with sinew lashing around the edges.' },
            { text: 'Attach a wooden handle on the back.' },
            { text: 'The hide-covered shield is lightweight and deflects arrows and blows.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'hide-drum',
        name: 'Hide Drum',
        stage: 1,
        icon: '🥁',
        category: 'tool',
        subcategory: 'Composite & Craft Tools',
        objective: 'Stretch animal hide over a wooden frame to create a drum.',
        evolution: 'Hide drums were the primary percussion instruments — used for music, communication, and ritual.',
        requirements: [
            { name: 'Wooden frame', value: 'Hollow log or bent wood hoop' },
            { name: 'Animal hide', value: 'Stretched over frame' },
            { name: 'Cordage', value: 'For tensioning' }
        ],
        steps: [
            { text: 'Create a wooden frame — a hollow log or bent wood hoop.' },
            { text: 'Stretch a prepared animal hide over one end.' },
            { text: 'Secure with cordage lacing — tighten for desired pitch.' },
            { text: 'Strike with hands or a wooden beater.' },
            { text: 'Drums are used for music, long-distance communication, and ritual ceremonies.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    {
        id: 'seed-rattle',
        name: 'Seed Rattle',
        stage: 1,
        icon: '🎵',
        category: 'tool',
        subcategory: 'Composite & Craft Tools',
        objective: 'Create a rattle from a gourd or shell filled with seeds or pebbles.',
        evolution: 'Seed rattles were among the oldest musical instruments — used for rhythm in dance and ritual.',
        requirements: [
            { name: 'Gourd or shell', value: 'Hollow container' },
            { name: 'Seeds or pebbles', value: 'For the rattling sound' },
            { name: 'Handle', value: 'Wooden stick or cordage' }
        ],
        steps: [
            { text: 'Select a dried gourd or large shell as the rattle body.' },
            { text: 'Fill with dry seeds, pebbles, or small bones.' },
            { text: 'Seal the opening with resin or a wooden plug.' },
            { text: 'Attach a handle if desired.' },
            { text: 'Shake to produce rhythmic sound. Rattles accompany dance, music, and ritual.' }
        ],
        videoUrl: 'https://youtu.be/SLoukoBs8TE?si=WoodTools'
    },
    // === STAGE 2: NEOLITHIC REVOLUTION ===
    // === RESOURCES — Domesticated Crops ===
    {
        id: 'emmer-wheat',
        name: 'Emmer Wheat',
        stage: 2,
        icon: '🌾',
        category: 'resource',
        subcategory: 'Domesticated Crops',
        objective: 'Cultivate Emmer wheat, the primary bread grain of the early Neolithic.',
        evolution: 'Emmer wheat was the most important crop in the Fertile Crescent, providing the calories needed for settled civilization.',
        requirements: [
            { name: 'Emmer seeds', value: 'Saved from previous harvest' },
            { name: 'Fertile soil', value: 'River valley or rain-fed plain' },
            { name: 'Sickle', value: 'For harvesting' }
        ],
        steps: [
            { text: 'Prepare the soil by clearing weeds and breaking up the earth with a digging stick or hoe.' },
            { text: 'Scatter Emmer seeds across the field at the start of the planting season (autumn/winter).' },
            { text: 'Protect the field from birds and grazing animals using fences or scare tactics.' },
            { text: 'Harvest when the stalks turn golden and the grain is hard. Cut stalks with a flint sickle.' },
            { text: 'Thresh and winnow to separate grain. Store in sealed pits or clay jars.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=Farming'
    },
    {
        id: 'einkorn-wheat',
        name: 'Einkorn Wheat',
        stage: 2,
        icon: '🌾',
        category: 'resource',
        subcategory: 'Domesticated Crops',
        objective: 'Grow Einkorn wheat, the first domesticated wheat species.',
        evolution: 'Einkorn was the earliest domesticated wheat, easier to grow in poor soils but lower yielding than Emmer.',
        requirements: [
            { name: 'Einkorn seeds', value: 'From wild or domesticated sources' },
            { name: 'Digging stick', value: 'For planting' },
            { name: 'Storage jars', value: 'For grain storage' }
        ],
        steps: [
            { text: 'Select a field with well-drained soil. Einkorn tolerates poorer soils than Emmer.' },
            { text: 'Plant seeds in rows or broadcast them evenly.' },
            { text: 'Weed the field regularly to prevent competition.' },
            { text: 'Harvest when the heads are dry and golden.' },
            { text: 'Thresh carefully as Einkorn grains are tightly enclosed in chaff.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=Farming'
    },
    {
        id: 'barley',
        name: 'Barley',
        stage: 2,
        icon: '🌾',
        category: 'resource',
        subcategory: 'Domesticated Crops',
        objective: 'Cultivate barley, a hardy grain used for bread, beer, and animal fodder.',
        evolution: 'Barley was more drought-resistant than wheat, allowing farming in drier regions of the Neolithic world.',
        requirements: [
            { name: 'Barley seeds', value: 'Hulled or hulled-less variety' },
            { name: 'Irrigation', value: 'Optional, for dry climates' },
            { name: 'Quern stone', value: 'For grinding' }
        ],
        steps: [
            { text: 'Plant barley in late autumn or early spring depending on climate.' },
            { text: 'Barley grows quickly and matures in about 3-4 months.' },
            { text: 'Harvest by cutting stalks with a sickle.' },
            { text: 'Use for bread, porridge, or malting for beer production.' },
            { text: 'Straw is used for thatching roofs and animal bedding.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=Farming'
    },
    {
        id: 'lentils',
        name: 'Lentils',
        stage: 2,
        icon: '🫘',
        category: 'resource',
        subcategory: 'Domesticated Crops',
        objective: 'Grow lentils, a protein-rich legume that fixes nitrogen in the soil.',
        evolution: 'Lentils provided essential protein to complement grain diets and improved soil fertility for subsequent crops.',
        requirements: [
            { name: 'Lentil seeds', value: 'Large-seeded domesticated variety' },
            { name: 'Well-drained soil', value: 'Lentils rot in wet soil' },
            { name: 'Harvest basket', value: 'For collection' }
        ],
        steps: [
            { text: 'Plant lentil seeds in cool weather, as they tolerate frost.' },
            { text: 'Lentils are low-growing plants that suppress weeds naturally.' },
            { text: 'Harvest when pods turn brown and rattle.' },
            { text: 'Dry the pods thoroughly before threshing.' },
            { text: 'Store dried lentils in airtight containers. They last for years.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=Farming'
    },
    {
        id: 'peas',
        name: 'Peas',
        stage: 2,
        icon: '🫛',
        category: 'resource',
        subcategory: 'Domesticated Crops',
        objective: 'Cultivate peas, a climbing legume rich in protein and vitamins.',
        evolution: 'Peas were among the first domesticated legumes, providing fresh food in spring and dried food in winter.',
        requirements: [
            { name: 'Pea seeds', value: 'Domesticated variety' },
            { name: 'Support stakes', value: 'For climbing varieties' },
            { name: 'Trellis or brush', value: 'For support' }
        ],
        steps: [
            { text: 'Plant pea seeds in early spring as soon as soil can be worked.' },
            { text: 'Provide support for climbing varieties using brush or stakes.' },
            { text: 'Harvest green peas for fresh eating or let dry for storage.' },
            { text: 'Dried peas can be stored for winter consumption.' },
            { text: 'Pea vines fix nitrogen, improving soil for next year\'s crops.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=Farming'
    },
    {
        id: 'flax',
        name: 'Flax',
        stage: 2,
        icon: '🌿',
        category: 'resource',
        subcategory: 'Domesticated Crops',
        objective: 'Grow flax for linen fiber and linseed oil.',
        evolution: 'Flax revolutionized clothing with linen and provided oil for cooking and lamps.',
        requirements: [
            { name: 'Flax seeds', value: 'Fiber or oil variety' },
            { name: 'Rippling comb', value: 'For removing seeds' },
            { name: 'Retting pool', value: 'Water for retting' }
        ],
        steps: [
            { text: 'Plant flax densely to encourage tall, straight stems with few branches.' },
            { text: 'Harvest by pulling entire plants to maximize fiber length.' },
            { text: 'Ripple to remove seeds (linseed). Ret stems in water to soften fibers.' },
            { text: 'Break, scutch, and hackle to extract fine linen fibers.' },
            { text: 'Spin into thread and weave into linen cloth.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=Farming'
    },
    {
        id: 'hemp',
        name: 'Hemp',
        stage: 2,
        icon: '🌿',
        category: 'resource',
        subcategory: 'Domesticated Crops',
        objective: 'Cultivate hemp for strong cordage, canvas, and rope.',
        evolution: 'Hemp provided the strongest natural fiber for ropes, nets, and sails, enabling trade and travel.',
        requirements: [
            { name: 'Hemp seeds', value: 'Industrial hemp variety' },
            { name: 'Breaking tool', value: 'For processing stalks' },
            { name: 'Scutcher', value: 'For cleaning fibers' }
        ],
        steps: [
            { text: 'Plant hemp seeds in fertile, well-drained soil.' },
            { text: 'Hemp grows rapidly and suppresses weeds naturally.' },
            { text: 'Harvest when plants flower for best fiber quality.' },
            { text: 'Ret stalks in water or dew to separate fibers from woody core.' },
            { text: 'Break, scutch, and hackle to produce strong hemp cordage.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=Farming'
    },
    {
        id: 'chickpeas',
        name: 'Chickpeas',
        stage: 2,
        icon: '🫘',
        category: 'resource',
        subcategory: 'Domesticated Crops',
        objective: 'Grow chickpeas, a drought-resistant protein source.',
        evolution: 'Chickpeas thrived in dry Mediterranean climates, providing reliable protein where other crops failed.',
        requirements: [
            { name: 'Chickpea seeds', value: 'Desi or Kabuli variety' },
            { name: 'Dry soil', value: 'Chickpeas hate wet feet' },
            { name: 'Harvest basket', value: 'For collection' }
        ],
        steps: [
            { text: 'Plant chickpeas in warm, dry soil after last frost.' },
            { text: 'Chickpeas are drought-tolerant and require little water.' },
            { text: 'Harvest when pods turn yellow and dry.' },
            { text: 'Thresh to remove seeds from pods.' },
            { text: 'Store dried chickpeas for long-term food security.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=Farming'
    },
    {
        id: 'bitter-vetch',
        name: 'Bitter Vetch',
        stage: 2,
        icon: '🫘',
        category: 'resource',
        subcategory: 'Domesticated Crops',
        objective: 'Cultivate bitter vetch for animal fodder and emergency human food.',
        evolution: 'Bitter vetch was a crucial backup crop, feeding livestock and humans during grain failures.',
        requirements: [
            { name: 'Vetch seeds', value: 'Domesticated variety' },
            { name: 'Leaching water', value: 'To remove toxins for human use' },
            { name: 'Storage bin', value: 'For seeds' }
        ],
        steps: [
            { text: 'Plant bitter vetch in poor soils where other crops struggle.' },
            { text: 'Harvest pods when dry.' },
            { text: 'For animal feed: dry and store directly.' },
            { text: 'For human food: soak and boil repeatedly to remove toxic compounds.' },
            { text: 'Use as a famine food or livestock supplement.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=Farming'
    },
    {
        id: 'linseed',
        name: 'Linseed (Flax Seed)',
        stage: 2,
        icon: '🌰',
        category: 'resource',
        subcategory: 'Domesticated Crops',
        objective: 'Harvest linseed from flax plants for oil production.',
        evolution: 'Linseed oil provided light for lamps, waterproofing for wood, and nutrition for humans.',
        requirements: [
            { name: 'Flax plants', value: 'Grown for seed' },
            { name: 'Press', value: 'For extracting oil' },
            { name: 'Container', value: 'For storing oil' }
        ],
        steps: [
            { text: 'Allow flax plants to mature fully until seed pods are brown.' },
            { text: 'Thresh plants to release linseeds.' },
            { text: 'Grind seeds into meal or press for oil.' },
            { text: 'Linseed oil is used for lamps, wood treatment, and cooking.' },
            { text: 'Linseed meal is high-protein animal feed.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=Farming'
    },
    // === STAGE 2: NEOLITHIC REVOLUTION ===
    // === RESOURCES — Metal Ores ===
    {
        id: 'copper-ore',
        name: 'Copper Ore (Malachite)',
        stage: 2,
        icon: '🟢',
        category: 'resource',
        subcategory: 'Metal Ores',
        objective: 'Locate and mine malachite ore, the primary source of copper for early metallurgy.',
        evolution: 'Copper was the first metal used by humans. Mining malachite allowed for the production of superior tools and weapons, marking the transition to the Bronze Age.',
        requirements: [
            { name: 'Malachite deposits', value: 'Green copper carbonate ore' },
            { name: 'Mining tools', value: 'Stone picks, antler tools' }
        ],
        steps: [
            { text: 'Locate green mineral deposits (malachite) in oxidized zones of copper ore bodies.' },
            { text: 'Mine the ore using stone picks and fire-setting to crack the rock.' },
            { text: 'Crush the ore into small pieces using stone hammers and grinding stones.' },
            { text: 'The crushed ore is now ready for smelting. Malachite yields about 50% copper by weight.' },
            { text: 'Trade surplus ore with specialists who have smelting knowledge.' }
        ],
        videoUrl: 'https://youtu.be/d6N9TNeVYfw?si=MiningStone'
    },
    {
        id: 'native-copper',
        name: 'Native Copper',
        stage: 2,
        icon: '🟠',
        category: 'resource',
        subcategory: 'Metal Ores',
        objective: 'Collect native copper nuggets found naturally in the earth.',
        evolution: 'Native copper requires no smelting — it can be hammered directly into tools, teaching early humans the properties of metal.',
        requirements: [
            { name: 'Surface deposits', value: 'Riverbeds or rock outcrops' },
            { name: 'Stone hammer', value: 'For shaping' }
        ],
        steps: [
            { text: 'Search riverbeds and rock outcrops for reddish-brown metal nuggets.' },
            { text: 'Test by hammering — if it dents rather than breaks, it is metal.' },
            { text: 'Clean the nuggets and hammer them into shape (cold working).' },
            { text: 'Heat the metal to anneal (soften) it, preventing cracking.' },
            { text: 'Native copper was the first "metal age" before smelting was invented.' }
        ],
        videoUrl: 'https://youtu.be/d4X8yZ1qW2M?si=Metal'
    },
    {
        id: 'tin-ore',
        name: 'Tin Ore (Cassiterite)',
        stage: 2,
        icon: '⚪',
        category: 'resource',
        subcategory: 'Metal Ores',
        objective: 'Source tin ore to mix with copper for making bronze.',
        evolution: 'Tin is rare. Its discovery and trade with copper created the first international trade networks and the Bronze Age.',
        requirements: [
            { name: 'River gravels', value: 'Tin is often found in stream beds' },
            { name: 'Trade partners', value: 'To exchange for other goods' }
        ],
        steps: [
            { text: 'Search alluvial deposits (river gravels) for heavy, dark tin stones (cassiterite).' },
            { text: 'Tin is much rarer than copper, often requiring long-distance trade.' },
            { text: 'Smelt tin separately or add it to molten copper (10% tin to 90% copper).' },
            { text: 'The resulting alloy is Bronze — harder and more durable than pure copper.' },
            { text: 'Control of tin sources gave civilizations a massive military and economic advantage.' }
        ],
        videoUrl: 'https://youtu.be/d4X8yZ1qW2M?si=Metal'
    },
    {
        id: 'gold-nugget',
        name: 'Gold Nugget',
        stage: 2,
        icon: '🟡',
        category: 'resource',
        subcategory: 'Metal Ores',
        objective: 'Collect gold nuggets for ornamentation and status symbols.',
        evolution: 'Gold was the first metal used purely for decoration and status, as it is too soft for tools.',
        requirements: [
            { name: 'Gold deposits', value: 'River pans or quartz veins' },
            { name: 'Gold panning', value: 'Water and a pan' }
        ],
        steps: [
            { text: 'Pan for gold in river sediments — gold is very heavy and settles at the bottom.' },
            { text: 'Alternatively, mine quartz veins containing visible gold.' },
            { text: 'Gold is easily shaped by hammering (malleable) without melting.' },
            { text: 'Use for jewelry, religious icons, and trade currency.' },
            { text: 'Gold does not corrode, symbolizing eternal life and power.' }
        ],
        videoUrl: 'https://youtu.be/d4X8yZ1qW2M?si=Metal'
    },
    // === RESOURCES — Fuel & Flux ===
    {
        id: 'charcoal',
        name: 'Charcoal',
        stage: 2,
        icon: '⬛',
        category: 'resource',
        subcategory: 'Fuel & Flux',
        objective: 'Produce charcoal for high-temperature smelting of metals.',
        evolution: 'Wood fires are not hot enough to smelt copper. Charcoal burns hotter and is essential for metallurgy.',
        requirements: [
            { name: 'Wood', value: 'Hardwood like oak or charcoal-friendly wood' },
            { name: 'Earth kiln', value: 'Covered pit for oxygen restriction' }
        ],
        steps: [
            { text: 'Build a mound of wood and cover it with earth to restrict oxygen.' },
            { text: 'Light a small fire to start the carbonization process.' },
            { text: 'Let the mound smolder for several days. Do not let it burn with open flame.' },
            { text: 'The result is charcoal — a fuel that burns at 1000°C+.' },
            { text: 'Charcoal is the backbone of all early metal production.' }
        ],
        videoUrl: 'https://youtu.be/d4X8yZ1qW2M?si=Metal'
    },
    {
        id: 'flux',
        name: 'Flux (Limestone/Sand)',
        stage: 2,
        icon: '⚪',
        category: 'resource',
        subcategory: 'Fuel & Flux',
        objective: 'Add flux to the smelt to remove impurities from the metal.',
        evolution: 'Flux binds with the rocky impurities in ore to form slag, allowing pure metal to flow to the bottom.',
        requirements: [
            { name: 'Limestone or sand', value: 'Silica source' },
            { name: 'Knowledge of ratios', value: 'Correct flux-to-ore ratio' }
        ],
        steps: [
            { text: 'Collect limestone or sand.' },
            { text: 'Mix flux with crushed copper ore before smelting.' },
            { text: 'The flux melts and combines with impurities to form liquid slag.' },
            { text: 'Slag floats on top of the molten copper and can be poured off.' },
            { text: 'This technique drastically increases metal purity and quality.' }
        ],
        videoUrl: 'https://youtu.be/d4X8yZ1qW2M?si=Metal'
    },
    // === RESOURCES — Agricultural Surplus ===
    {
        id: 'grain-silo',
        name: 'Grain Silo',
        stage: 2,
        icon: '🏺',
        category: 'resource',
        subcategory: 'Agricultural Surplus',
        objective: 'Build a silo for long-term storage of surplus grain.',
        evolution: 'Surplus grain allowed for population growth and supported non-farming specialists like metalworkers.',
        requirements: [
            { name: 'Clay or stone', value: 'For construction' },
            { name: 'Dry grain', value: 'Stored product' }
        ],
        steps: [
            { text: 'Build a raised, airtight container from mud brick or stone.' },
            { text: 'Ensure the interior is dry and pest-proof.' },
            { text: 'Fill with harvested and dried grain.' },
            { text: 'Seal the top to prevent moisture and rodents.' },
            { text: 'Silos allow communities to survive famines and trade surplus food.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=Farming'
    },
    {
        id: 'wool-fleece',
        name: 'Wool Fleece',
        stage: 2,
        icon: '🐑',
        category: 'resource',
        subcategory: 'Agricultural Surplus',
        objective: 'Harvest wool from domesticated sheep for textiles.',
        evolution: 'Wool replaced plant fibers as the primary textile material, enabling warmer clothing and trade.',
        requirements: [
            { name: 'Sheep', value: 'Domesticated wool breed' },
            { name: 'Shears or knife', value: 'For harvesting' }
        ],
        steps: [
            { text: 'Raise sheep specifically for their thick fleece.' },
            { text: 'Shear the sheep in spring using bronze or flint shears.' },
            { text: 'Clean the wool by washing in water and natural soap.' },
            { text: 'Card the wool to align fibers for spinning.' },
            { text: 'Wool cloth is warmer and more durable than linen.' }
        ],
        videoUrl: 'https://youtu.be/b8YHxToejsc?si=Weaving'
    },
    // === TOOLS — Metallurgy Tools ===
    {
        id: 'crucible',
        name: 'Crucible',
        stage: 2,
        icon: '🥣',
        category: 'tool',
        subcategory: 'Metallurgy Tools',
        objective: 'Create a heat-resistant clay pot for melting metal.',
        evolution: 'The crucible allowed for the melting of copper, enabling casting and alloying.',
        requirements: [
            { name: 'Clay', value: 'High-temperature clay' },
            { name: 'Grog or sand', value: 'To prevent cracking' }
        ],
        steps: [
            { text: 'Mix clay with grog (crushed pottery) for heat resistance.' },
            { text: 'Shape into a thick-walled cup.' },
            { text: 'Dry thoroughly and pre-fire to harden.' },
            { text: 'Place ore or metal inside and heat in a furnace.' },
            { text: 'The crucible withstands temperatures over 1000°C.' }
        ],
        videoUrl: 'https://youtu.be/NHgUMUk3YwY?si=PotteryKiln'
    },
    {
        id: 'bellows',
        name: 'Bellows',
        stage: 2,
        icon: '💨',
        category: 'tool',
        subcategory: 'Metallurgy Tools',
        objective: 'Construct bellows to pump air into the fire for higher temperatures.',
        evolution: 'Bellows forced oxygen into the fire, raising temperatures enough to smelt copper ore.',
        requirements: [
            { name: 'Leather', value: 'For the air bag' },
            { name: 'Wood/Clay', value: 'For the frame' }
        ],
        steps: [
            { text: 'Build a wooden frame with a leather skin that expands and contracts.' },
            { text: 'Attach a nozzle directed at the fire.' },
            { text: 'Operate the bellows rhythmically to pump air into the furnace.' },
            { text: 'The increased oxygen creates a hotter, more efficient fire.' },
            { text: 'Bellows are the heart of the smelting furnace.' }
        ],
        videoUrl: 'https://youtu.be/d4X8yZ1qW2M?si=Metal'
    },
    {
        id: 'casting-mold',
        name: 'Casting Mold',
        stage: 2,
        icon: '🗿',
        category: 'tool',
        subcategory: 'Metallurgy Tools',
        objective: 'Carve a mold to cast molten metal into specific shapes.',
        evolution: 'Casting allowed for mass production of identical, complex metal tools.',
        requirements: [
            { name: 'Stone or clay', value: 'For the mold' },
            { name: 'Carving tools', value: 'For the negative space' }
        ],
        steps: [
            { text: 'Carve the shape of the tool (e.g., axe) into a block of soft stone or clay.' },
            { text: 'Create a channel for pouring molten metal.' },
            { text: 'Close the mold if using two halves.' },
            { text: 'Pour molten copper or bronze into the mold.' },
            { text: 'Allow to cool and break open the mold to retrieve the metal tool.' }
        ],
        videoUrl: 'https://youtu.be/d4X8yZ1qW2M?si=Metal'
    },
    {
        id: 'copper-anvil',
        name: 'Copper Anvil',
        stage: 2,
        icon: '🔨',
        category: 'tool',
        subcategory: 'Metallurgy Tools',
        objective: 'Use a hard stone anvil for hammering hot metal.',
        evolution: 'The anvil provided a solid surface for shaping metal, essential for forging tools.',
        requirements: [
            { name: 'Large stone', value: 'Granite or basalt' }
        ],
        steps: [
            { text: 'Select a large, flat-topped stone.' },
            { text: 'Place it near the furnace for easy access.' },
            { text: 'Use it to hammer hot copper into sheets or to shape cast tools.' },
            { text: 'The anvil absorbs shock and provides a hard surface.' }
        ],
        videoUrl: 'https://youtu.be/d4X8yZ1qW2M?si=Metal'
    },
    // === TOOLS — Advanced Agriculture ===
    {
        id: 'wooden-plow',
        name: 'Wooden Plow (Ard)',
        stage: 2,
        icon: '🚜',
        category: 'tool',
        subcategory: 'Advanced Agriculture',
        objective: 'Build a wooden plow pulled by oxen to turn soil.',
        evolution: 'The plow allowed for deep tillage of heavy soils, vastly increasing crop yields.',
        requirements: [
            { name: 'Timber', value: 'For the plow beam' },
            { name: 'Oxen', value: 'Draft animals' }
        ],
        steps: [
            { text: 'Shape a curved wooden beam and a share (cutting blade).' },
            { text: 'Attach a harness for oxen.' },
            { text: 'Drive the oxen to pull the plow through the field.' },
            { text: 'The plow breaks up the soil, aerating it and burying weeds.' },
            { text: 'Plowing increased the amount of land one family could farm.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=Farming'
    },
    {
        id: 'threshing-sled',
        name: 'Threshing Sled',
        stage: 2,
        icon: '🌾',
        category: 'tool',
        subcategory: 'Advanced Agriculture',
        objective: 'Create a sled with embedded stones for threshing grain.',
        evolution: 'The threshing sled mechanized the separation of grain from stalks, saving labor.',
        requirements: [
            { name: 'Wooden board', value: 'Base of the sled' },
            { name: 'Flint blades', value: 'Embedded in the bottom' }
        ],
        steps: [
            { text: 'Embed sharp flint blades or stones into the bottom of a wooden board.' },
            { text: 'Drag the sled over harvested grain stalks using an animal.' },
            { text: 'The blades cut the stalks and release the grain.' },
            { text: 'Winnow the mixture to separate grain from chaff.' },
            { text: 'Threshing sleds made large-scale grain processing efficient.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=Farming'
    },
    // === TOOLS — Transport & Mechanics ===
    {
        id: 'potter\'s-wheel',
        name: 'Potter\'s Wheel',
        stage: 2,
        icon: '🌀',
        category: 'tool',
        subcategory: 'Transport & Mechanics',
        objective: 'Construct a fast wheel for rapid, symmetrical pottery production.',
        evolution: 'The potter\'s wheel revolutionized ceramic production, enabling mass production of vessels.',
        requirements: [
            { name: 'Stone or wood', value: 'For the wheel head' },
            { name: 'Axle', value: 'For rotation' }
        ],
        steps: [
            { text: 'Build a heavy wheel head mounted on a vertical axle.' },
            { text: 'Spin the wheel using a stick or by hand.' },
            { text: 'Center the clay on the spinning head.' },
            { text: 'Pull the clay up and shape it using centrifugal force.' },
            { text: 'Wheels produce perfectly symmetrical pots much faster than hand-building.' }
        ],
        videoUrl: 'https://youtu.be/J8MLpv_utfM?si=PotteryWheel'
    },
    {
        id: 'cart-wheel',
        name: 'Cart Wheel',
        stage: 2,
        icon: '☸️',
        category: 'tool',
        subcategory: 'Transport & Mechanics',
        objective: 'Build solid wood wheels for carts and wagons.',
        evolution: 'The wheel transformed transport, allowing heavy loads to be moved by animals over long distances.',
        requirements: [
            { name: 'Timber', value: 'Thick logs' },
            { name: 'Axe/Adze', value: 'For shaping' }
        ],
        steps: [
            { text: 'Cut thick planks and join them to form a disc.' },
            { text: 'Carve the disc into a round wheel.' },
            { text: 'Drill a hole in the center for the axle.' },
            { text: 'Mount on a wooden cart frame with a fixed axle.' },
            { text: 'Wheels enabled trade networks and military logistics.' }
        ],
        videoUrl: 'https://youtu.be/2Y0pM2z1x3k?si=Wheel'
    },
    // === SKILLS — Metallurgy ===
    {
        id: 'smelting-copper',
        name: 'Smelting Copper',
        stage: 2,
        icon: '🔥',
        category: 'skill',
        subcategory: 'Metallurgy',
        objective: 'Extract pure copper metal from crushed ore using a furnace and charcoal.',
        evolution: 'Smelting was the defining skill of the Chalcolithic, turning rock into useful metal.',
        requirements: [
            { name: 'Crushed ore', value: 'Malachite or similar' },
            { name: 'Charcoal', value: 'Fuel' },
            { name: 'Furnace', value: 'Clay structure' }
        ],
        steps: [
            { text: 'Build a clay furnace with a tap hole at the bottom.' },
            { text: 'Layer charcoal and crushed ore inside the furnace.' },
            { text: 'Light the fire and use bellows to increase temperature.' },
            { text: 'The copper melts and flows to the bottom as a liquid pool.' },
            { text: 'Tap the hole to pour out the molten copper into a mold.' }
        ],
        videoUrl: 'https://youtu.be/d4X8yZ1qW2M?si=Metal'
    },
    {
        id: 'cold-hammering',
        name: 'Cold Hammering',
        stage: 2,
        icon: '🔨',
        category: 'skill',
        subcategory: 'Metallurgy',
        objective: 'Shape metal by hammering it while cold.',
        evolution: 'Cold hammering hardens copper (work hardening), making tools sharper and more durable.',
        requirements: [
            { name: 'Metal piece', value: 'Copper or bronze' },
            { name: 'Anvil', value: 'Hard surface' }
        ],
        steps: [
            { text: 'Place the metal on the anvil.' },
            { text: 'Hammer the metal to flatten or shape it.' },
            { text: 'Hammering increases hardness but makes the metal brittle.' },
            { text: 'Anneal (heat) the metal to soften it before further shaping.' },
            { text: 'This cycle of hammering and annealing creates strong tools.' }
        ],
        videoUrl: 'https://youtu.be/d4X8yZ1qW2M?si=Metal'
    },
    // === SKILLS — Advanced Farming ===
    {
        id: 'plowing',
        name: 'Plowing',
        stage: 2,
        icon: '🚜',
        category: 'skill',
        subcategory: 'Advanced Farming',
        objective: 'Plow fields using oxen to prepare soil for planting.',
        evolution: 'Plowing allowed cultivation of heavy, fertile soils that were previously unfarmable.',
        requirements: [
            { name: 'Plow', value: 'Wooden ard' },
            { name: 'Oxen', value: 'Draft animals' }
        ],
        steps: [
            { text: 'Hitch oxen to the plow.' },
            { text: 'Guide the plow through the field in straight lines.' },
            { text: 'The plow turns the soil, bringing nutrients to the surface.' },
            { text: 'Plant seeds in the furrows.' },
            { text: 'Plowing dramatically increases crop yields and food security.' }
        ],
        videoUrl: 'https://youtu.be/W2KpP51sPeA?si=Farming'
    },
    {
        id: 'irrigation-management',
        name: 'Irrigation Management',
        stage: 2,
        icon: '💧',
        category: 'skill',
        subcategory: 'Advanced Farming',
        objective: 'Build and maintain canals to water crops in dry regions.',
        evolution: 'Irrigation allowed farming in arid regions, leading to the rise of great river civilizations.',
        requirements: [
            { name: 'River access', value: 'Water source' },
            { name: 'Labor force', value: 'For digging canals' }
        ],
        steps: [
            { text: 'Dig main canals from the river to the fields.' },
            { text: 'Create smaller ditches to distribute water evenly.' },
            { text: 'Build sluice gates to control water flow.' },
            { text: 'Maintain canals by removing silt and weeds.' },
            { text: 'Irrigation systems require social organization to manage water rights.' }
        ],
        videoUrl: 'https://youtu.be/QcwFHG-aH_k?si=Irrigation'
    },
    // === SKILLS — Craft Specialization ===
    {
        id: 'wheel-throwing',
        name: 'Wheel Throwing',
        stage: 2,
        icon: '🌀',
        category: 'skill',
        subcategory: 'Craft Specialization',
        objective: 'Throw pottery on a fast wheel to create uniform vessels.',
        evolution: 'Wheel throwing allowed potters to produce vessels faster and with thinner walls.',
        requirements: [
            { name: 'Potter\'s wheel', value: 'Fast wheel' },
            { name: 'Clay', value: 'Prepared clay' }
        ],
        steps: [
            { text: 'Center a ball of clay on the spinning wheel.' },
            { text: 'Open the center and pull the walls up.' },
            { text: 'Shape the vessel using wet hands.' },
            { text: 'Trim the base and add handles if needed.' },
            { text: 'Wheel-thrown pots are thinner and more symmetrical.' }
        ],
        videoUrl: 'https://youtu.be/J8MLpv_utfM?si=PotteryWheel'
    },
    {
        id: 'weaving-wool',
        name: 'Weaving Wool',
        stage: 2,
        icon: '🧶',
        category: 'skill',
        subcategory: 'Craft Specialization',
        objective: 'Weave wool on a loom to create warm textiles.',
        evolution: 'Wool weaving provided warm, durable clothing suitable for colder climates.',
        requirements: [
            { name: 'Wool yarn', value: 'Spun wool' },
            { name: 'Loom', value: 'Vertical or horizontal' }
        ],
        steps: [
            { text: 'Set up the warp threads on the loom.' },
            { text: 'Weave the wool weft through the warp.' },
            { text: 'Beat the weft tightly to create a dense fabric.' },
            { text: 'Wool cloth is felted slightly during finishing for warmth.' },
            { text: 'Wool became the primary textile material in many regions.' }
        ],
        videoUrl: 'https://youtu.be/b8YHxToejsc?si=Weaving'
    },
    // === SKILLS — Social Organization ===
    {
        id: 'long-distance-trade',
        name: 'Long-Distance Trade',
        stage: 2,
        icon: '🤝',
        category: 'skill',
        subcategory: 'Social Organization',
        objective: 'Organize trade networks to exchange resources over long distances.',
        evolution: 'Trade networks connected distant regions, spreading technology and culture.',
        requirements: [
            { name: 'Surplus goods', value: 'To trade' },
            { name: 'Transport', value: 'Carts or boats' }
        ],
        steps: [
            { text: 'Identify resources not available locally (e.g., tin, lapis lazuli).' },
            { text: 'Organize caravans or ships to transport goods.' },
            { text: 'Establish trade routes and safe stopping points.' },
            { text: 'Exchange goods using a system of value or barter.' },
            { text: 'Trade networks led to the rise of merchant classes and cities.' }
        ],
        videoUrl: 'https://youtu.be/cdwOIdQ4VuI?si=SocialCognitive'
    },
    {
        id: 'record-keeping',
        name: 'Record Keeping',
        stage: 2,
        icon: '📜',
        category: 'skill',
        subcategory: 'Social Organization',
        objective: 'Use clay tokens or proto-writing to track goods and transactions.',
        evolution: 'Record keeping was the precursor to writing, essential for managing complex economies.',
        requirements: [
            { name: 'Clay', value: 'For tokens' },
            { name: 'Storage', value: 'For records' }
        ],
        steps: [
            { text: 'Create small clay tokens representing different goods (e.g., sheep, grain).' },
            { text: 'Store tokens in clay envelopes (bullae) to secure transactions.' },
            { text: 'Press tokens into the clay to create impressions.' },
            { text: 'This system evolved into cuneiform writing.' },
            { text: 'Record keeping enabled taxation and state administration.' }
        ],
        videoUrl: 'https://youtu.be/cdwOIdQ4VuI?si=SocialCognitive'
    },
];

// Persisted user data
const userBlueprints = JSON.parse(localStorage.getItem('forge_user_blueprints') || '[]');
const deletedCoreBlueprints = JSON.parse(localStorage.getItem('forge_deleted_core') || '[]');
const coreBlueprintOverrides = JSON.parse(localStorage.getItem('forge_core_overrides') || '{}');
const blueprintSupplements = JSON.parse(localStorage.getItem('primitive_blueprint_supplements') || '{}');

function initApp() {
    // Reset deleted items and overrides to ensure all blueprints are visible
    localStorage.removeItem('forge_deleted_core');
    localStorage.removeItem('forge_core_overrides');

    showMainApp();

    // Ensure welcome view is shown
    setTimeout(() => {
        goToHome();
    }, 100);
}

// Ensure initApp is called after DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (typeof initApp === 'function') {
            initApp();
        } else {
            console.error("initApp function not found!");
        }
    });
} else {
    if (typeof initApp === 'function') {
        initApp();
    } else {
        console.error("initApp function not found!");
    }
}

function handleLogin() {
    // Login removed temporarily
    showMainApp();
}

function handleLogin() {
    const input = document.getElementById('passphrase-input');
    const errorEl = document.getElementById('auth-error');
    const passphrase = input.value.trim().toUpperCase();

    if (passphrase === 'FORGE') {
        localStorage.setItem('forge_authenticated', 'true');
        showMainApp();
    } else {
        errorEl.style.display = 'block';
        input.value = '';
        input.focus();
        setTimeout(() => { errorEl.style.display = 'none'; }, 3000);
    }
}

function handleGoogleLogin() {
    const btn = document.querySelector('.gmail-btn');
    btn.disabled = true;
    btn.innerHTML = '<span>Connecting...</span>';

    setTimeout(() => {
        localStorage.setItem('forge_authenticated', 'true');
        localStorage.setItem('forge_user_email', 'pioneer@gmail.com');
        showMainApp();
    }, 1500);
}

function handleLogout() {
    // Logout disabled while login is removed
    console.log("Logout disabled.");
    // If you want to reload: window.location.reload();
}

function showMainApp() {
    // Remove login screen immediately
    const authScreen = document.getElementById('auth-screen');
    if (authScreen) authScreen.style.display = 'none';

    const app = document.getElementById('app');
    if (app) app.classList.remove('auth-hidden');

    renderSidebar();
}

function getAllBlueprints() {
    const activeCore = blueprints.map(bp => {
        if (coreBlueprintOverrides[bp.id]) {
            return { ...bp, ...coreBlueprintOverrides[bp.id] };
        }
        return bp;
    }).filter(bp => !deletedCoreBlueprints.includes(bp.id));
    return [...activeCore, ...userBlueprints];
}

function renderIcon(icon) {
    if (icon.startsWith('data:image') || icon.startsWith('blob:') || icon.includes('.') || icon.length > 10) {
        return `<img src="${icon}" class="bp-icon-img" alt="icon">`;
    }
    return `<span>${icon}</span>`;
}

function renderSidebar() {
    const navContainer = document.getElementById('stages-nav');
    if (!navContainer) return;
    navContainer.innerHTML = '';

    const allBlueprints = getAllBlueprints();

    Object.entries(STAGES).forEach(([id, stage]) => {
        const stageGroup = document.createElement('div');
        stageGroup.className = `stage-nav-group stage-${id}`;
        stageGroup.id = `stage-group-${id}`;

        const stageHeader = document.createElement('div');
        stageHeader.className = 'stage-header';
        stageHeader.innerHTML = `
            <span class="stage-icon">${stage.icon}</span>
            <div>
                <h4>Stage ${id}</h4>
                <div style="font-size: 0.65rem; color: var(--text-secondary)">${stage.name}</div>
            </div>
        `;

        stageHeader.onclick = () => {
            const isActive = stageGroup.classList.contains('active');
            document.querySelectorAll('.stage-nav-group').forEach(g => g.classList.remove('active'));
            if (!isActive) {
                stageGroup.classList.add('active');
                renderStageHub(id);
            }
            closeSidebarMobile();
        };

        const stageList = document.createElement('ul');
        stageList.className = 'stage-items';

        const stageBlueprints = allBlueprints.filter(bp => bp.stage == id);
        const tools = stageBlueprints.filter(bp => bp.category === 'tool' || !bp.category);
        const skills = stageBlueprints.filter(bp => bp.category === 'skill');
        const resources = stageBlueprints.filter(bp => bp.category === 'resource');

        function makeCollapsibleSubsection(label, items, icon) {
            if (items.length === 0) return;

            const sectionLi = document.createElement('li');
            sectionLi.style.cssText = 'font-size:0.7rem; text-transform:uppercase; letter-spacing:1px; color:var(--accent-blue); cursor:pointer; padding:0.5rem 0.8rem; font-weight:700; display:flex; align-items:center; gap:0.4rem;';
            sectionLi.innerHTML = `${icon} ${label} <span style="margin-left:auto; font-size:0.6rem;">▼</span>`;

            const subList = document.createElement('ul');
            subList.className = 'sub-items';
            subList.style.cssText = 'display:none; padding-left:0.5rem; list-style:none;';

            items.forEach(bp => {
                const li = document.createElement('li');
                li.innerHTML = `<span style="font-size:0.85rem;">${renderIcon(bp.icon)}</span> ${bp.name}`;
                li.style.cssText = 'font-size:0.8rem; padding:0.4rem 0.8rem;';
                li.onclick = (e) => {
                    e.stopPropagation();
                    selectBlueprint(bp.id);
                    closeSidebarMobile();
                };
                subList.appendChild(li);
            });

            sectionLi.onclick = (e) => {
                e.stopPropagation();
                const isOpen = subList.style.display === 'block';
                subList.style.display = isOpen ? 'none' : 'block';
                sectionLi.querySelector('span').textContent = isOpen ? '▼' : '▲';
            };

            stageList.appendChild(sectionLi);
            stageList.appendChild(subList);
        }

        // For Stage 1, show collapsible Skills, Resources, Tools sub-sections
        if (id == 1 && (resources.length > 0 || tools.length > 0 || skills.length > 0)) {
            makeCollapsibleSubsection(`Skills (${skills.length})`, skills, '🎯');
            makeCollapsibleSubsection(`Resources (${resources.length})`, resources, '');
            makeCollapsibleSubsection(`Tools (${tools.length})`, tools, '🔨');
        } else {
            stageBlueprints.forEach(bp => {
                const li = document.createElement('li');
                li.innerHTML = `${renderIcon(bp.icon)} ${bp.name}`;
                li.onclick = (e) => {
                    e.stopPropagation();
                    selectBlueprint(bp.id);
                    closeSidebarMobile();
                };
                stageList.appendChild(li);
            });
        }

        stageGroup.appendChild(stageHeader);
        stageGroup.appendChild(stageList);
        navContainer.appendChild(stageGroup);
    });

    const statEl = document.getElementById('blueprint-count');
    if (statEl) statEl.textContent = allBlueprints.length;
}

function renderStageHub(stageId) {
    const stage = STAGES[stageId];
    if (!stage) return;

    updateActiveSidebar(`Stage ${stageId}`);
    document.getElementById('welcome-view').classList.remove('active');
    const view = document.getElementById('blueprint-view');
    view.classList.add('active');

    const stageBlueprints = getAllBlueprints().filter(bp => bp.stage == stageId);
    const tools = stageBlueprints.filter(bp => bp.category === 'tool' || !bp.category);
    const skills = stageBlueprints.filter(bp => bp.category === 'skill');
    const resources = stageBlueprints.filter(bp => bp.category === 'resource');

    view.innerHTML = `
        <div class="blueprint-card">
            <div style="border-left: 8px solid var(--stage-${stageId}); padding-left: 1.5rem;">
                <div class="blueprint-category">Technological Advancement</div>
                <div style="display:flex; align-items:center; gap:1rem; margin-top:0.5rem;">
                    <span style="font-size: 3rem;">${stage.icon}</span>
                    <div>
                        <h2 style="margin:0">Stage ${stageId}: ${stage.name}</h2>
                        <div style="color: var(--accent-blue); font-family: 'JetBrains Mono'; font-size: 0.9rem;">Period: ${stage.period}</div>
                    </div>
                </div>
                <p style="margin-top: 1.5rem; max-width: 600px; color: var(--text-secondary);">${stage.description}</p>
            </div>

            ${stageBlueprints.length === 0
            ? `<p style="margin-top:2rem; color: var(--text-secondary); text-align:center;">No blueprints in this stage yet. Use "Add New Blueprint" to create one.</p>`
            : `
                    <!-- CATEGORY SELECTION BUTTONS -->
                    <div style="margin-top:2.5rem; display:grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap:1rem;">
                        
                        <!-- SKILLS BUTTON -->
                        <button class="category-nav-btn" onclick="renderCategoryView(${stageId}, 'skills')" style="background:#1c2128; border:2px solid var(--blueprint-border); padding:1.5rem; border-radius:12px; cursor:pointer; text-align:center; color:var(--text-primary); transition:all 0.3s; position:relative; overflow:hidden;">
                            <div style="position:absolute; top:0; left:0; right:0; height:4px; background:linear-gradient(90deg, #3fb950, #58a6ff);"></div>
                            <span style="font-size:2.5rem; display:block; margin-bottom:0.5rem;">🎯</span>
                            <div style="font-family:'Outfit',sans-serif; font-size:1.1rem; font-weight:700; margin-bottom:0.3rem;">Skills</div>
                            <div style="font-size:0.75rem; color:var(--text-secondary);">${skills.length} blueprints</div>
                        </button>

                        <!-- RESOURCES BUTTON -->
                        <button class="category-nav-btn" onclick="renderCategoryView(${stageId}, 'resources')" style="background:#1c2128; border:2px solid var(--blueprint-border); padding:1.5rem; border-radius:12px; cursor:pointer; text-align:center; color:var(--text-primary); transition:all 0.3s; position:relative; overflow:hidden;">
                            <div style="position:absolute; top:0; left:0; right:0; height:4px; background:linear-gradient(90deg, #fbc02d, #ff7043);"></div>
                            <span style="font-size:2.5rem; display:block; margin-bottom:0.5rem;">📦</span>
                            <div style="font-family:'Outfit',sans-serif; font-size:1.1rem; font-weight:700; margin-bottom:0.3rem;">Resources</div>
                            <div style="font-size:0.75rem; color:var(--text-secondary);">${resources.length} blueprints</div>
                        </button>

                        <!-- TOOLS BUTTON -->
                        <button class="category-nav-btn" onclick="renderCategoryView(${stageId}, 'tools')" style="background:#1c2128; border:2px solid var(--blueprint-border); padding:1.5rem; border-radius:12px; cursor:pointer; text-align:center; color:var(--text-primary); transition:all 0.3s; position:relative; overflow:hidden;">
                            <div style="position:absolute; top:0; left:0; right:0; height:4px; background:linear-gradient(90deg, #4fc3f7, #9d50bb);"></div>
                            <span style="font-size:2.5rem; display:block; margin-bottom:0.5rem;">🔨</span>
                            <div style="font-family:'Outfit',sans-serif; font-size:1.1rem; font-weight:700; margin-bottom:0.3rem;">Tools</div>
                            <div style="font-size:0.75rem; color:var(--text-secondary);">${tools.length} blueprints</div>
                        </button>

                        ${stageId == 2 ? `
                        <!-- TRANSPORT BUTTON (Stage 2 only) -->
                        <button class="category-nav-btn" onclick="renderCategoryView(${stageId}, 'transport')" style="background:#1c2128; border:2px solid var(--blueprint-border); padding:1.5rem; border-radius:12px; cursor:pointer; text-align:center; color:var(--text-primary); transition:all 0.3s; position:relative; overflow:hidden;">
                            <div style="position:absolute; top:0; left:0; right:0; height:4px; background:linear-gradient(90deg, #ff9800, #e91e63);"></div>
                            <span style="font-size:2.5rem; display:block; margin-bottom:0.5rem;">🚛</span>
                            <div style="font-family:'Outfit',sans-serif; font-size:1.1rem; font-weight:700; margin-bottom:0.3rem;">Transport</div>
                            <div style="font-size:0.75rem; color:var(--text-secondary);">${(getAllBlueprints().filter(b => b.stage == 2 && b.category === 'transport').length)} blueprints</div>
                        </button>
                        ` : ''}
                    </div>
                `
        }
        </div>
    `;

    // Add hover effects
    setTimeout(() => {
        document.querySelectorAll('.category-nav-btn').forEach(btn => {
            btn.addEventListener('mouseenter', function () {
                this.style.borderColor = 'var(--accent-blue)';
                this.style.transform = 'translateY(-4px)';
                this.style.boxShadow = '0 8px 25px rgba(88, 166, 255, 0.2)';
            });
            btn.addEventListener('mouseleave', function () {
                this.style.borderColor = 'var(--blueprint-border)';
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
            });
        });
    }, 100);
}

function renderCategoryView(stageId, category, subcategory) {
    const stage = STAGES[stageId];
    if (!stage) return;

    const stageBlueprints = getAllBlueprints().filter(bp => bp.stage == stageId);
    let items = [];
    let categoryTitle = '';
    let categoryIcon = '';

    if (category === 'skills') {
        items = stageBlueprints.filter(bp => bp.category === 'skill');
        categoryTitle = 'Skills';
        categoryIcon = '🎯';
    } else if (category === 'resources') {
        items = stageBlueprints.filter(bp => bp.category === 'resource');
        categoryTitle = 'Resources';
        categoryIcon = '📦';
    } else if (category === 'tools') {
        items = stageBlueprints.filter(bp => bp.category === 'tool' || !bp.category);
        categoryTitle = 'Tools';
        categoryIcon = '🔨';
    }

    updateActiveSidebar(`${categoryTitle} - Stage ${stageId}`);

    const view = document.getElementById('blueprint-view');

    // Extract unique subcategories
    const subcategories = [...new Set(items.filter(bp => bp.subcategory).map(bp => bp.subcategory))];
    const hasSubcategories = subcategories.length > 0;

    function renderCardGrid(items) {
        if (items.length === 0) return '<p style="color:var(--text-secondary); font-style:italic; text-align:center; padding:2rem;">No blueprints yet.</p>';
        return `<div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap:1.5rem;">
            ${items.map(bp => `
                <button class="hub-card" onclick="selectBlueprint('${bp.id}')" style="background:#1c2128; border:1px solid var(--blueprint-border); padding:1.5rem; border-radius:12px; cursor:pointer; text-align:center; color:var(--text-primary); border-bottom:3px solid var(--stage-${stageId}); transition:all 0.3s;">
                    <span style="font-size:2.5rem; display:block; margin-bottom:0.8rem;">${renderIcon(bp.icon)}</span>
                    <div style="font-weight:700; margin-bottom:0.5rem; font-family:'Outfit',sans-serif;">${bp.name}</div>
                    <span style="font-size:0.6rem; color:var(--text-secondary); text-transform:uppercase; font-family:'JetBrains Mono';">REF: ${bp.id.toUpperCase()}</span>
                </button>
            `).join('')}
        </div>`;
    }

    function renderSubcategoryCards(subs, stageId, category) {
        if (subs.length === 0) return renderCardGrid(items);
        return `<div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap:1.5rem;">
            ${subs.map(sub => {
            const count = items.filter(bp => bp.subcategory === sub).length;
            const subIcon = sub.includes('Lithic') ? '🪨' : sub.includes('Animal') ? '🦴' : sub.includes('Plant') ? '🌿' : sub.includes('Food') ? '🌾' : sub.includes('Water') ? '💧' : sub.includes('Core') ? '' : sub.includes('Polished') ? '✨' : sub.includes('Specialized') ? '🔧' : sub.includes('Bone') ? '🦴' : sub.includes('Wooden') ? '🪵' : sub.includes('Composite') ? '🔩' : sub.includes('Hunt') ? '🏹' : sub.includes('Gather') ? '🌿' : sub.includes('Fish') ? '🐟' : sub.includes('Fire') ? '🔥' : sub.includes('Tool-Making') ? '⚒️' : sub.includes('Shelter') ? '🏠' : sub.includes('Textile') ? '🧵' : sub.includes('Food Processing') ? '' : sub.includes('Art') ? '🎨' : sub.includes('Medical') ? '⚕️' : sub.includes('Navigation') ? '🧭' : sub.includes('Social') ? '👥' : sub.includes('Agriculture') ? '🌾' : '📁';
            return `
                    <button class="hub-card" onclick="renderCategoryView(${stageId}, '${category}', '${sub}')" style="background:#1c2128; border:1px solid var(--blueprint-border); padding:2rem; border-radius:12px; cursor:pointer; text-align:center; color:var(--text-primary); transition:all 0.3s; position:relative; overflow:hidden;">
                        <div style="position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg, var(--accent-blue), #9d50bb);"></div>
                        <span style="font-size:2.5rem; display:block; margin-bottom:0.8rem;">${subIcon}</span>
                        <div style="font-weight:700; margin-bottom:0.3rem; font-family:'Outfit',sans-serif; font-size:1rem;">${sub}</div>
                        <div style="font-size:0.7rem; color:var(--text-secondary);">${count} blueprints</div>
                    </button>
                `;
        }).join('')}
        </div>`;
    }

    // Breadcrumb for subcategory view
    let breadcrumbHTML = '';
    if (subcategory) {
        const subItems = items.filter(bp => bp.subcategory === subcategory);
        view.innerHTML = `
        <div class="blueprint-card">
            <!-- BACK BUTTON & HEADER -->
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2rem; padding-bottom:1.5rem; border-bottom:1px solid var(--blueprint-border);">
                <button onclick="renderCategoryView(${stageId}, '${category}')" style="background:transparent; border:1px solid var(--blueprint-border); color:var(--text-secondary); padding:0.5rem 1.2rem; border-radius:8px; cursor:pointer; font-family:'JetBrains Mono',monospace; font-size:0.85rem; transition:all 0.2s; display:flex; align-items:center; gap:0.5rem;">
                    ← Back to ${categoryTitle}
                </button>
                <span style="font-size:0.75rem; color:var(--text-secondary); font-family:'JetBrains Mono';">STAGE ${stageId}</span>
            </div>

            <!-- BREADCRUMB -->
            <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:1.5rem; font-family:'JetBrains Mono'; font-size:0.8rem;">
                <span style="color:var(--text-secondary);">Stage ${stageId}</span>
                <span style="color:var(--text-secondary);">›</span>
                <span style="color:var(--text-secondary);">${categoryTitle}</span>
                <span style="color:var(--text-secondary);">›</span>
                <span style="color:var(--accent-blue);">${subcategory}</span>
            </div>

            <!-- SUBCATEGORY HEADER -->
            <div style="border-left: 8px solid var(--stage-${stageId}); padding-left: 1.5rem; margin-bottom:2.5rem;">
                <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1rem;">
                    <div>
                        <h2 style="margin:0; font-family:'Outfit',sans-serif; font-size:2rem;">${subcategory}</h2>
                        <div style="color: var(--accent-blue); font-family: 'JetBrains Mono'; font-size: 0.9rem;">${stage.name} • ${subItems.length} blueprints</div>
                    </div>
                </div>
            </div>

            <!-- BLUEPRINTS GRID -->
            ${renderCardGrid(subItems)}
        </div>
        `;
    } else if (hasSubcategories) {
        // Show subcategory cards
        view.innerHTML = `
        <div class="blueprint-card">
            <!-- BACK BUTTON & HEADER -->
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2rem; padding-bottom:1.5rem; border-bottom:1px solid var(--blueprint-border);">
                <button onclick="renderStageHub(${stageId})" style="background:transparent; border:1px solid var(--blueprint-border); color:var(--text-secondary); padding:0.5rem 1.2rem; border-radius:8px; cursor:pointer; font-family:'JetBrains Mono',monospace; font-size:0.85rem; transition:all 0.2s; display:flex; align-items:center; gap:0.5rem;">
                    ← Back to Stage ${stageId}
                </button>
                <span style="font-size:0.75rem; color:var(--text-secondary); font-family:'JetBrains Mono';">STAGE ${stageId}</span>
            </div>

            <!-- CATEGORY HEADER -->
            <div style="border-left: 8px solid var(--stage-${stageId}); padding-left: 1.5rem; margin-bottom:2.5rem;">
                <div style="display:flex; align-items:center; gap:1rem; margin-bottom:0.5rem;">
                    <span style="font-size: 3rem;">${categoryIcon}</span>
                    <div>
                        <h2 style="margin:0; font-family:'Outfit',sans-serif; font-size:2rem;">${categoryTitle}</h2>
                        <div style="color: var(--accent-blue); font-family: 'JetBrains Mono'; font-size: 0.9rem;">${stage.name} • ${items.length} total blueprints</div>
                    </div>
                </div>
                <p style="margin-top:1rem; color:var(--text-secondary); font-size:0.9rem;">Select a subcategory below to browse blueprints.</p>
            </div>

            <!-- SUBCATEGORY CARDS -->
            ${renderSubcategoryCards(subcategories, stageId, category)}
        </div>
        `;
    } else {
        // No subcategories — show items directly
        view.innerHTML = `
        <div class="blueprint-card">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2rem; padding-bottom:1.5rem; border-bottom:1px solid var(--blueprint-border);">
                <button onclick="renderStageHub(${stageId})" style="background:transparent; border:1px solid var(--blueprint-border); color:var(--text-secondary); padding:0.5rem 1.2rem; border-radius:8px; cursor:pointer; font-family:'JetBrains Mono',monospace; font-size:0.85rem; transition:all 0.2s; display:flex; align-items:center; gap:0.5rem;">
                    ← Back to Stage ${stageId}
                </button>
                <span style="font-size:0.75rem; color:var(--text-secondary); font-family:'JetBrains Mono';">STAGE ${stageId}</span>
            </div>
            <div style="border-left: 8px solid var(--stage-${stageId}); padding-left: 1.5rem; margin-bottom:2.5rem;">
                <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1rem;">
                    <span style="font-size: 3rem;">${categoryIcon}</span>
                    <div>
                        <h2 style="margin:0; font-family:'Outfit',sans-serif; font-size:2rem;">${categoryTitle}</h2>
                        <div style="color: var(--accent-blue); font-family: 'JetBrains Mono'; font-size: 0.9rem;">${stage.name} • ${items.length} blueprints</div>
                    </div>
                </div>
            </div>
            ${renderCardGrid(items)}
        </div>
        `;
    }

    // Add hover effects to cards
    setTimeout(() => {
        document.querySelectorAll('.hub-card').forEach(card => {
            card.addEventListener('mouseenter', function () {
                this.style.transform = 'translateY(-4px)';
                this.style.boxShadow = '0 8px 25px rgba(88, 166, 255, 0.15)';
                this.style.borderColor = 'var(--accent-blue)';
            });
            card.addEventListener('mouseleave', function () {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
                this.style.borderColor = 'var(--blueprint-border)';
            });
        });
    }, 100);
}

function getYoutubeEmbedUrl(originalUrl) {
    const videoId = originalUrl.split('/').pop().split('?')[0];
    const origin = window.location.origin || 'http://localhost';
    return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&enablejsapi=1&origin=${origin}&widget_referrer=${origin}`;
}

function selectBlueprint(id) {
    const bp = getAllBlueprints().find(b => b.id === id);
    if (!bp) return;

    const supplements = blueprintSupplements[id] || { requirements: [], steps: [] };
    const allRequirements = [...(bp.requirements || []), ...supplements.requirements];
    const allSteps = [...(bp.steps || []), ...supplements.steps];

    updateActiveSidebar(bp.name);
    document.getElementById('welcome-view').classList.remove('active');
    const view = document.getElementById('blueprint-view');
    view.classList.add('active');

    const youtubeId = bp.videoUrl ? bp.videoUrl.split('/').pop() : '';
    const embedUrl = bp.videoUrl ? getYoutubeEmbedUrl(bp.videoUrl) : '';

    view.innerHTML = `
        <div class="blueprint-card">
            <div class="blueprint-header" style="border-left: 8px solid var(--stage-${bp.stage})">
                <div class="blueprint-title">
                    <div class="stage-badge badge-${bp.stage}">Stage ${bp.stage}: ${STAGES[bp.stage].name}</div>
                    <div style="display:flex; align-items:center; gap:0.8rem;">
                        ${renderIcon(bp.icon)}
                        <h2 style="margin:0">${bp.name}</h2>
                    </div>
                </div>
                <div class="blueprint-id">PRM-S${bp.stage}-${bp.id.toUpperCase()}</div>
            </div>

            <div class="blueprint-summary-box">
                <div class="summary-item">
                    <h4>The Objective</h4>
                    <p>${bp.objective || 'No objective defined.'}</p>
                </div>
                <div class="summary-item">
                    <h4>The Evolution</h4>
                    <p>${bp.evolution || 'No evolution defined.'}</p>
                </div>
            </div>

            ${bp.upgrades ? `
            <div class="upgrades-section" style="background:var(--bg-secondary); border-radius:12px; padding:1.5rem; margin:1.5rem 0; border:1px solid var(--blueprint-border);">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
                    <h4 style="margin:0; display:flex; align-items:center; gap:0.5rem;">⬆️ Upgrades & Evolution</h4>
                    <span style="font-size:0.75rem; color:var(--text-secondary);">${bp.upgrades.length} upgrades</span>
                </div>
                <div class="upgrades-grid" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)); gap:0.75rem;">
                    ${bp.upgrades.map((upgrade, index) => `
                        <div class="upgrade-card" style="background:var(--bg-primary); border-radius:8px; padding:1rem; border:1px solid var(--stage-${upgrade.stage}); position:relative; overflow:hidden;">
                            <div style="position:absolute; top:8px; right:8px; font-size:0.7rem; background:var(--stage-${upgrade.stage}); color:#fff; padding:2px 8px; border-radius:12px; font-family:'JetBrains Mono';">S${upgrade.stage}</div>
                            <div style="font-weight:600; margin-bottom:0.3rem; padding-right:40px;">${upgrade.name}</div>
                            <div style="font-size:0.8rem; color:var(--text-secondary);">${upgrade.description}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            ` : ''}

            ${bp.videoUrl ? `
            <div class="video-section">
                <div class="video-header">
                    <h4>Video Guide</h4>
                    <a href="https://www.youtube.com/watch?v=${youtubeId}" target="_blank" class="video-mirror-link">Watch on YouTube ↗</a>
                </div>
                <div class="video-container">
                    <iframe width="100%" height="450" src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                ${renderFeedbackControls(bp.id)}
            </div>
            ` : ''}

            <div class="blueprint-grid">
                <div class="specs-section">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
                        <h4 style="margin:0">Requirements</h4>
                        <button class="contribute-specs-btn" onclick="openContributionModal('${bp.id}')">🛠️ Supplement</button>
                    </div>
                    <div class="requirement-list">
                        ${allRequirements.length === 0
            ? '<p style="color:var(--text-secondary); font-style:italic;">No requirements yet.</p>'
            : allRequirements.map(req => `
                                <div class="req-item">
                                    <span class="req-name">${req.name}</span>
                                    <span class="req-value">${req.value}</span>
                                </div>
                            `).join('')
        }
                    </div>
                </div>

                <div class="specs-section">
                    <h4 style="margin:0 0 1.5rem;">Steps</h4>
                    ${allSteps.length === 0
            ? '<p style="color:var(--text-secondary); font-style:italic;">No steps yet.</p>'
            : `<div class="steps-list">
                            ${allSteps.map(step => `
                                <div class="step-card">
                                    <div class="step-item">${step.text}</div>
                                    ${step.sketch ? `<div class="step-sketch"><img src="${step.sketch}" alt="Guide"></div>` : ''}
                                </div>
                            `).join('')}
                        </div>`
        }
                </div>
            </div>

            ${renderCommunitySection(bp.id)}
        </div>
    `;
}

function renderFeedbackControls(id) {
    const feedback = getFeedback(id);
    return `
        <div class="feedback-controls" id="feedback-${id}">
            <button class="feedback-btn bad ${feedback === 'bad' ? 'active' : ''}" onclick="saveFeedback('${id}', 'bad')">❌ Not helpful</button>
            <button class="feedback-btn great ${feedback === 'great' ? 'active' : ''}" onclick="saveFeedback('${id}', 'great')">✅ Helpful</button>
        </div>
        <p class="training-note">Your feedback helps improve content.</p>
    `;
}

function renderCommunitySection(id) {
    const communityGalleries = JSON.parse(localStorage.getItem('primitive_community_proof') || '{}');
    const uploads = communityGalleries[id] || [];

    return `
        <div class="community-section">
            <div class="community-header">
                <h3>Community Proof</h3>
                <button class="upload-btn" onclick="openUploadModal('${id}')">📤 Upload Progress</button>
            </div>
            <div class="community-gallery" id="gallery-${id}">
                ${uploads.length === 0
            ? `<p class="empty-gallery">No uploads yet. Be the first!</p>`
            : uploads.map(up => `
                        <div class="community-item">
                            ${up.type === 'video' ? `<video src="${up.url}" controls></video>` : `<img src="${up.url}" alt="Proof">`}
                            <div class="item-overlay">By Pioneer</div>
                        </div>
                    `).join('')
        }
            </div>
        </div>
    `;
}

function openUploadModal(id) {
    document.body.insertAdjacentHTML('beforeend', `
        <div class="modal-overlay" id="upload-modal">
            <div class="modal-content">
                <h3>Submit Your Progress</h3>
                <p style="color:var(--text-secondary); margin:1rem 0;">Upload a photo or video of your work.</p>
                <div class="upload-zone" onclick="document.getElementById('file-input').click()">
                    <span>Click to select a file</span>
                    <input type="file" id="file-input" style="display:none" onchange="handleFileUpload(event, '${id}')">
                </div>
                <button class="close-modal" onclick="closeModal()">Cancel</button>
            </div>
        </div>
    `);
}

function handleFileUpload(event, id) {
    const file = event.target.files[0];
    if (!file) return;

    const modalContent = document.querySelector('#upload-modal .modal-content');
    modalContent.innerHTML = `
        <h3>Uploading...</h3>
        <div class="progress-bar-container"><div class="progress-fill"></div></div>
    `;

    setTimeout(() => {
        const communityGalleries = JSON.parse(localStorage.getItem('primitive_community_proof') || '{}');
        if (!communityGalleries[id]) communityGalleries[id] = [];
        communityGalleries[id].push({
            url: URL.createObjectURL(file),
            type: file.type.startsWith('video') ? 'video' : 'image'
        });
        localStorage.setItem('primitive_community_proof', JSON.stringify(communityGalleries));
        closeModal();
        selectBlueprint(id);
    }, 1500);
}

function saveFeedback(id, rating) {
    const data = JSON.parse(localStorage.getItem('primitive_feedback') || '{}');
    data[id] = rating;
    localStorage.setItem('primitive_feedback', JSON.stringify(data));
    const container = document.getElementById(`feedback-${id}`);
    if (container) {
        container.querySelectorAll('.feedback-btn').forEach(b => b.classList.remove('active'));
        const active = container.querySelector(`.${rating}`);
        if (active) active.classList.add('active');
    }
}

function getFeedback(id) {
    return (JSON.parse(localStorage.getItem('primitive_feedback') || '{}'))[id] || null;
}

function updateActiveSidebar(name) {
    document.querySelectorAll('.recipe-nav li').forEach(el => {
        el.classList.remove('active');
        if (el.innerText.includes(name)) el.classList.add('active');
    });
}

function closeModal() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.remove());
}

function openAddCraftModal() {
    document.body.insertAdjacentHTML('beforeend', `
        <div class="modal-overlay" id="craft-modal">
            <div class="modal-content-large">
                <div class="craft-form">
                    <h3>📜 Record New Blueprint</h3>

                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" id="new-bp-name" placeholder="e.g. My Craft">
                    </div>

                    <div class="form-row-multi">
                        <div class="form-group" style="flex:2;">
                            <label>Stage</label>
                            <select id="new-bp-stage">
                                <option value="1">Stage 1</option>
                                <option value="2">Stage 2</option>
                                <option value="3">Stage 3</option>
                                <option value="4">Stage 4</option>
                                <option value="5">Stage 5</option>
                            </select>
                        </div>
                        <div class="form-group" style="flex:1;">
                            <label>Icon (Emoji)</label>
                            <input type="text" id="new-bp-icon" value="🛶">
                        </div>
                    </div>

                    <div class="form-group">
                        <label>YouTube URL</label>
                        <input type="text" id="new-bp-video" placeholder="Full URL or video ID">
                    </div>

                    <div class="form-group">
                        <label>Objective</label>
                        <input type="text" id="new-bp-objective" placeholder="What does this achieve?">
                    </div>

                    <div class="form-group">
                        <label>Evolution</label>
                        <input type="text" id="new-bp-evolution" placeholder="How does this progress the craft?">
                    </div>

                    <div id="requirements-container">
                        <label style="display:block; margin-bottom:0.5rem; color:var(--text-secondary); font-size:0.85rem;">Requirements</label>
                        <div class="form-row-multi">
                            <input type="text" placeholder="Material" class="req-name-in">
                            <input type="text" placeholder="Value" class="req-val-in">
                        </div>
                    </div>
                    <button class="add-row-btn" onclick="addRequirementRow()">+ Add Requirement</button>

                    <div id="steps-container">
                        <label style="display:block; margin-bottom:0.5rem; color:var(--text-secondary); font-size:0.85rem;">Steps</label>
                        <div class="form-group">
                            <textarea placeholder="Step description..." class="step-text-in"></textarea>
                        </div>
                    </div>
                    <button class="add-row-btn" onclick="addStepRow()">+ Add Step</button>

                    <div class="form-actions">
                        <button class="cancel-craft-btn" onclick="closeCraftModal()">Cancel</button>
                        <button class="save-craft-btn" onclick="saveNewCraft()">📜 Save Blueprint</button>
                    </div>
                </div>
            </div>
        </div>
    `);
}

function closeCraftModal() {
    document.getElementById('craft-modal')?.remove();
}

function addRequirementRow() {
    document.getElementById('requirements-container').insertAdjacentHTML('beforeend', `
        <div class="form-row-multi">
            <input type="text" placeholder="Material" class="req-name-in">
            <input type="text" placeholder="Value" class="req-val-in">
        </div>
    `);
}

function addStepRow() {
    document.getElementById('steps-container').insertAdjacentHTML('beforeend', `
        <div class="form-group">
            <textarea placeholder="Step description..." class="step-text-in"></textarea>
        </div>
    `);
}

function saveNewCraft() {
    const name = document.getElementById('new-bp-name').value;
    if (!name) return alert('Name is required');

    const newCraft = {
        id: name.toLowerCase().replace(/\s+/g, '-'),
        name: name,
        stage: parseInt(document.getElementById('new-bp-stage').value),
        icon: document.getElementById('new-bp-icon').value || '📜',
        objective: document.getElementById('new-bp-objective').value || '',
        evolution: document.getElementById('new-bp-evolution').value || '',
        videoUrl: (document.getElementById('new-bp-video').value || '').includes('embed')
            ? document.getElementById('new-bp-video').value
            : `https://www.youtube.com/embed/${(document.getElementById('new-bp-video').value || '').split('v=')[1] || ''}`,
        requirements: Array.from(document.querySelectorAll('#requirements-container .form-row-multi')).map(r => ({
            name: r.querySelector('.req-name-in').value,
            value: r.querySelector('.req-val-in').value
        })).filter(r => r.name),
        steps: Array.from(document.querySelectorAll('#steps-container textarea')).map(t => ({
            text: t.value,
            sketch: 'assets/sketch_mixing.svg'
        })).filter(s => s.text)
    };

    userBlueprints.push(newCraft);
    localStorage.setItem('primitive_user_blueprints', JSON.stringify(userBlueprints));
    closeCraftModal();
    renderSidebar();
    selectBlueprint(newCraft.id);
}

function openContributionModal(id) {
    document.body.insertAdjacentHTML('beforeend', `
        <div class="modal-overlay" id="contribution-modal">
            <div class="modal-content-large">
                <div class="craft-form">
                    <h3>🛠️ Supplement: ${id}</h3>
                    <div id="contribute-req-container">
                        <label style="display:block; margin-bottom:0.5rem; color:var(--text-secondary);">New Requirements</label>
                    </div>
                    <button class="add-row-btn" onclick="addRowSub('contribute-req-container')">+ Add</button>
                    <div id="contribute-step-container">
                        <label style="display:block; margin-bottom:0.5rem; color:var(--text-secondary);">New Steps</label>
                    </div>
                    <button class="add-row-btn" onclick="addStepSub('contribute-step-container')">+ Add</button>
                    <div class="form-actions">
                        <button class="cancel-craft-btn" onclick="document.getElementById('contribution-modal').remove()">Cancel</button>
                        <button class="save-craft-btn" onclick="saveContribution('${id}')">🛠️ Apply</button>
                    </div>
                </div>
            </div>
        </div>
    `);
}

function addRowSub(containerId) {
    document.getElementById(containerId).insertAdjacentHTML('beforeend', `
        <div class="form-row-multi">
            <input type="text" placeholder="Material" class="req-name-in">
            <input type="text" placeholder="Value" class="req-val-in">
        </div>
    `);
}

function addStepSub(containerId) {
    document.getElementById(containerId).insertAdjacentHTML('beforeend', `
        <div class="form-group"><textarea placeholder="Step..." class="step-text-in"></textarea></div>
    `);
}

function saveContribution(id) {
    const reqs = Array.from(document.querySelectorAll('#contribute-req-container .form-row-multi')).map(r => ({
        name: r.querySelector('.req-name-in').value,
        value: r.querySelector('.req-val-in').value
    })).filter(r => r.name);

    const steps = Array.from(document.querySelectorAll('#contribute-step-container textarea')).map(t => ({
        text: t.value,
        sketch: 'assets/sketch_mixing.svg'
    })).filter(s => s.text);

    if (!blueprintSupplements[id]) blueprintSupplements[id] = { requirements: [], steps: [] };
    blueprintSupplements[id].requirements.push(...reqs);
    blueprintSupplements[id].steps.push(...steps);

    localStorage.setItem('primitive_blueprint_supplements', JSON.stringify(blueprintSupplements));
    document.getElementById('contribution-modal').remove();
    selectBlueprint(id);
}

function showAdminPanel() {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('admin-view').classList.add('active');
    renderAdminPanel();
}

function renderAdminPanel() {
    const allCore = blueprints.map(bp => coreBlueprintOverrides[bp.id] ? { ...bp, ...coreBlueprintOverrides[bp.id] } : bp);
    const adminView = document.getElementById('admin-view');

    adminView.innerHTML = `
        <div class="blueprint-card admin-panel">
            <header class="admin-header">
                <div>
                    <div class="blueprint-category">Management</div>
                    <h2>Admin Panel</h2>
                </div>
                <button class="back-btn" onclick="handleAdminLogout()" style="color:#f85149; border-color:rgba(248,81,73,0.4);">🚪 Admin Logout</button>
            </header>

            <h4 style="color:var(--accent-blue); margin-bottom:1rem; text-transform:uppercase; font-size:0.7rem;">Core Blueprints</h4>
            ${allCore.length === 0 ? '<p style="color:var(--text-secondary); font-style:italic;">No core blueprints.</p>' : ''}
            ${allCore.map(bp => {
        const isDeleted = deletedCoreBlueprints.includes(bp.id);
        return `
                    <div class="admin-item" style="margin-bottom:0.5rem;">
                        <div class="admin-item-info">
                            <span>${bp.icon}</span>
                            <div>
                                <div class="admin-item-name">${bp.name} ${isDeleted ? '<span style="color:#f85149;">(Hidden)</span>' : ''}</div>
                                <span class="admin-item-category">Stage ${bp.stage}</span>
                            </div>
                        </div>
                        <div class="admin-actions">
                            <button class="edit-btn" onclick="openEditModal('${bp.id}', true)">✏️</button>
                            ${isDeleted
                ? `<button class="restore-btn" onclick="restoreBlueprint('${bp.id}')">🔄</button>`
                : `<button class="delete-btn" onclick="deleteBlueprint('${bp.id}', true)">🗑️</button>`
            }
                        </div>
                    </div>
                `;
    }).join('')}

            <h4 style="color:var(--accent-green); margin:2rem 0 1rem; text-transform:uppercase; font-size:0.7rem;">User Blueprints</h4>
            ${userBlueprints.length === 0 ? '<p style="color:var(--text-secondary); font-style:italic;">No user blueprints.</p>' : ''}
            ${userBlueprints.map(bp => `
                <div class="admin-item" style="margin-bottom:0.5rem;">
                    <div class="admin-item-info">
                        <span>${bp.icon}</span>
                        <div>
                            <div class="admin-item-name">${bp.name}</div>
                            <span class="admin-item-category">Stage ${bp.stage}</span>
                        </div>
                    </div>
                    <div class="admin-actions">
                        <button class="edit-btn" onclick="openEditModal('${bp.id}', false)">✏️</button>
                        <button class="delete-btn" onclick="deleteBlueprint('${bp.id}', false)">🗑️</button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function openEditModal(id, isCore) {
    const all = isCore ? blueprints : userBlueprints;
    const bp = all.find(b => b.id === id);
    if (!bp) return;

    document.body.insertAdjacentHTML('beforeend', `
        <div class="modal-overlay" id="edit-modal">
            <div class="modal-content-large">
                <div class="craft-form">
                    <h3>✏️ Edit: ${bp.name}</h3>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" id="edit-bp-name" value="${bp.name}">
                    </div>
                    <div class="form-row-multi">
                        <div class="form-group" style="flex:2;">
                            <label>Stage</label>
                            <select id="edit-bp-stage">
                                ${[1, 2, 3, 4, 5].map(s => `<option value="${s}" ${bp.stage == s ? 'selected' : ''}>Stage ${s}</option>`).join('')}
                            </select>
                        </div>
                        <div class="form-group" style="flex:1;">
                            <label>Icon</label>
                            <input type="text" id="edit-bp-icon" value="${bp.icon}">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Video URL</label>
                        <input type="text" id="edit-bp-video" value="${bp.videoUrl || ''}">
                    </div>
                    <div class="form-group">
                        <label>Objective</label>
                        <input type="text" id="edit-bp-objective" value="${bp.objective || ''}">
                    </div>
                    <div class="form-group">
                        <label>Evolution</label>
                        <input type="text" id="edit-bp-evolution" value="${bp.evolution || ''}">
                    </div>
                    <div id="edit-req-container">
                        <label style="display:block; margin-bottom:0.5rem; color:var(--text-secondary);">Requirements</label>
                        ${(bp.requirements || []).map(r => `
                            <div class="form-row-multi">
                                <input type="text" placeholder="Material" class="req-name-in" value="${r.name}">
                                <input type="text" placeholder="Value" class="req-val-in" value="${r.value}">
                            </div>
                        `).join('')}
                    </div>
                    <button class="add-row-btn" onclick="addRequirementRowSub('edit-req-container')">+ Add</button>
                    <div id="edit-step-container">
                        <label style="display:block; margin-bottom:0.5rem; color:var(--text-secondary);">Steps</label>
                        ${(bp.steps || []).map(s => `
                            <div class="form-group"><textarea placeholder="Step..." class="step-text-in">${s.text}</textarea></div>
                        `).join('')}
                    </div>
                    <button class="add-row-btn" onclick="addStepRowSub('edit-step-container')">+ Add</button>
                    <div class="form-actions">
                        <button class="cancel-craft-btn" onclick="document.getElementById('edit-modal').remove()">Cancel</button>
                        <button class="update-btn" onclick="saveEdit('${id}', ${isCore})">💾 Save</button>
                    </div>
                </div>
            </div>
        </div>
    `);
}

function addRequirementRowSub(containerId) {
    document.getElementById(containerId).insertAdjacentHTML('beforeend', `
        <div class="form-row-multi">
            <input type="text" placeholder="Material" class="req-name-in">
            <input type="text" placeholder="Value" class="req-val-in">
        </div>
    `);
}

function addStepRowSub(containerId) {
    document.getElementById(containerId).insertAdjacentHTML('beforeend', `
        <div class="form-group"><textarea placeholder="Step..." class="step-text-in"></textarea></div>
    `);
}

function saveEdit(id, isCore) {
    const updated = {
        name: document.getElementById('edit-bp-name').value,
        stage: parseInt(document.getElementById('edit-bp-stage').value),
        icon: document.getElementById('edit-bp-icon').value,
        objective: document.getElementById('edit-bp-objective').value,
        evolution: document.getElementById('edit-bp-evolution').value,
        videoUrl: document.getElementById('edit-bp-video').value,
        requirements: Array.from(document.querySelectorAll('#edit-req-container .form-row-multi')).map(r => ({
            name: r.querySelector('.req-name-in').value,
            value: r.querySelector('.req-val-in').value
        })).filter(r => r.name),
        steps: Array.from(document.querySelectorAll('#edit-step-container textarea')).map(t => ({
            text: t.value,
            sketch: 'assets/sketch_mixing.svg'
        })).filter(s => s.text)
    };

    if (isCore) {
        coreBlueprintOverrides[id] = updated;
        localStorage.setItem('primitive_core_overrides', JSON.stringify(coreBlueprintOverrides));
    } else {
        const idx = userBlueprints.findIndex(b => b.id === id);
        if (idx !== -1) {
            userBlueprints[idx] = { ...userBlueprints[idx], ...updated };
            localStorage.setItem('primitive_user_blueprints', JSON.stringify(userBlueprints));
        }
    }

    document.getElementById('edit-modal').remove();
    renderSidebar();
    renderAdminPanel();
    alert('Saved.');
}

function deleteBlueprint(id, isCore) {
    if (!confirm(`Delete this blueprint?`)) return;
    if (isCore) {
        if (!deletedCoreBlueprints.includes(id)) {
            deletedCoreBlueprints.push(id);
            localStorage.setItem('primitive_deleted_core_blueprints', JSON.stringify(deletedCoreBlueprints));
        }
    } else {
        userBlueprints = userBlueprints.filter(b => b.id !== id);
        localStorage.setItem('primitive_user_blueprints', JSON.stringify(userBlueprints));
    }
    renderSidebar();
    renderAdminPanel();
}

function restoreBlueprint(id) {
    deletedCoreBlueprints = deletedCoreBlueprints.filter(bid => bid !== id);
    localStorage.setItem('primitive_deleted_core_blueprints', JSON.stringify(deletedCoreBlueprints));
    renderSidebar();
    renderAdminPanel();
}

// ========== ADMIN ==========

// Admin credentials (change these!)
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'forge';

function checkAdminRoute() {
    if (window.location.hash === '#admin') {
        const isAdminAuth = localStorage.getItem('forge_admin_auth') === 'true';
        if (isAdminAuth) {
            showAdminPanel();
        } else {
            showAdminLogin();
        }
        return true;
    }
    return false;
}

function showAdminLogin() {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('admin-login-view').classList.add('active');

    const view = document.getElementById('admin-login-view');
    view.innerHTML = `
        <div class="admin-login-screen">
            <div class="admin-login-card">
                <span class="auth-logo">⚙️</span>
                <h2>Admin Access</h2>
                <p>Restricted area. Enter admin credentials to continue.</p>
                <div class="admin-login-form">
                    <input type="text" id="admin-username" placeholder="Username" autocomplete="off">
                    <input type="password" id="admin-password" placeholder="Password" autocomplete="off">
                    <button onclick="handleAdminLogin()">🔓 Enter Admin Panel</button>
                </div>
                <div id="admin-login-error" class="admin-login-error">⚠️ Invalid credentials.</div>
                <button class="back-to-home" onclick="window.location.hash=''; window.location.reload();">← Back to Forge</button>
            </div>
        </div>
    `;

    document.getElementById('admin-password').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleAdminLogin();
    });
}

function handleAdminLogin() {
    const user = document.getElementById('admin-username').value.trim();
    const pass = document.getElementById('admin-password').value.trim();
    const errorEl = document.getElementById('admin-login-error');

    if (user === ADMIN_USER && pass === ADMIN_PASS) {
        localStorage.setItem('forge_admin_auth', 'true');
        showAdminPanel();
    } else {
        errorEl.style.display = 'block';
        document.getElementById('admin-password').value = '';
        setTimeout(() => { errorEl.style.display = 'none'; }, 3000);
    }
}

function showAdminPanel() {
    if (localStorage.getItem('forge_admin_auth') !== 'true') {
        showAdminLogin();
        return;
    }
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('admin-view').classList.add('active');
    renderAdminPanel();
}

function handleAdminLogout() {
    localStorage.removeItem('forge_admin_auth');
    window.location.hash = '';
    window.location.reload();
}

// ========== MARKET SCANNER ==========

function getMarketCategories() {
    const cats = new Set();
    MATERIALS_DB.forEach(m => cats.add(m.category));
    return ['All', ...Array.from(cats).sort()];
}

// Market materials database
const MATERIALS_DB = [];

function openMarketScanner() {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('market-view').classList.add('active');
    updateActiveSidebar('Market Scanner');
    renderMarketScanner('');
}

function renderMarketScanner(searchTerm) {
    const view = document.getElementById('market-view');
    const term = (searchTerm || '').toLowerCase().trim();

    let filtered = MATERIALS_DB;

    if (currentMarketFilter !== 'All') {
        filtered = filtered.filter(m => m.category === currentMarketFilter);
    }

    if (term) {
        filtered = filtered.filter(m =>
            m.name.toLowerCase().includes(term) ||
            m.category.toLowerCase().includes(term) ||
            m.description.toLowerCase().includes(term)
        );
    }

    const categories = getMarketCategories();

    view.innerHTML = `
        <div class="market-scanner">
            <h2>🔍 Market Scanner</h2>
            <p class="subtitle">Search any material to see its market value per 1kg.</p>

            <div class="market-search-bar">
                <input type="text" id="market-search-input" placeholder="Search materials... (e.g. copper, flax, clay)" value="${searchTerm}" onkeyup="handleMarketSearch(event)">
                <button onclick="handleMarketSearchBtn()">🔍 Scan</button>
            </div>

            <div class="market-categories">
                ${categories.map(c => `
                    <button class="market-cat-btn ${currentMarketFilter === c ? 'active' : ''}" onclick="filterMarketCategory('${c}')">${c}</button>
                `).join('')}
            </div>

            <p style="color:var(--text-secondary); font-size:0.85rem; margin-bottom:1rem;">
                Showing <strong style="color:var(--text-primary);">${filtered.length}</strong> of ${MATERIALS_DB.length} materials
            </p>

            ${filtered.length === 0 ? `
                <div class="market-no-results">
                    <span>🔍</span>
                    <p>No materials found for "<strong>${searchTerm}</strong>"</p>
                    <p style="font-size:0.85rem; margin-top:0.5rem;">Try a different search term or category.</p>
                </div>
            ` : `
                <div class="market-scanner-grid">
                    ${filtered.map(m => `
                        <div class="material-card">
                            <div class="material-card-header">
                                <span class="material-icon">${m.icon}</span>
                                <div>
                                    <div class="material-name">${m.name}</div>
                                    <span class="material-category-tag">${m.category}</span>
                                </div>
                            </div>
                            <div class="material-price">
                                <span class="price-value">$${m.priceUSD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                <span class="price-unit">/ 1 kg &nbsp;|&nbsp; €${m.priceEUR.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                            </div>
                            <div class="material-details">
                                <p>${m.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `}
        </div>
    `;

    // Focus input if it's the initial load
    if (!searchTerm) {
        setTimeout(() => {
            const input = document.getElementById('market-search-input');
            if (input) input.focus();
        }, 100);
    }
}

function handleMarketSearch(event) {
    if (event.key === 'Enter') {
        handleMarketSearchBtn();
    }
}

function handleMarketSearchBtn() {
    const input = document.getElementById('market-search-input');
    renderMarketScanner(input ? input.value : '');
}

function filterMarketCategory(category) {
    currentMarketFilter = category;
    const input = document.getElementById('market-search-input');
    renderMarketScanner(input ? input.value : '');
}

function handleSidebarSearch(query) {
    const term = query.toLowerCase().trim();
    const stageGroups = document.querySelectorAll('.stage-nav-group');

    if (!term) {
        stageGroups.forEach(g => {
            g.style.display = 'block';
            const items = g.querySelectorAll('li');
            items.forEach(li => li.style.display = 'flex');
        });
        return;
    }

    stageGroups.forEach(group => {
        const items = group.querySelectorAll('li');
        let hasMatch = false;

        items.forEach(li => {
            const text = li.textContent.toLowerCase();
            if (text.includes(term)) {
                li.style.display = 'flex';
                hasMatch = true;
            } else {
                li.style.display = 'none';
            }
        });

        group.style.display = hasMatch ? 'block' : 'none';
    });
}

function goToHome() {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('welcome-view').classList.add('active');
    updateActiveSidebar('');
    // Reset sidebar search if exists
    const searchInput = document.getElementById('sidebar-search');
    if (searchInput) searchInput.value = '';
    handleSidebarSearch('');
}

function closeSidebarMobile() {
    // Only applies to mobile - close sidebar and hide overlay
    if (window.innerWidth <= 900) {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.querySelector('.sidebar-overlay');
        if (sidebar) sidebar.classList.remove('sidebar-open');
        if (overlay) overlay.classList.remove('sidebar-overlay-visible');
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    if (sidebar && overlay) {
        sidebar.classList.toggle('sidebar-open');
        overlay.classList.toggle('sidebar-overlay-visible');
    }
} 
