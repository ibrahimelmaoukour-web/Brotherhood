const STAGES = {
    1: { id: 1, name: 'Sacred Water & Soil', period: 'The Survival Dawn', icon: '🚰', description: 'Locating groundwater in dry regions and establishing the first primitive harvests to anchor the Brotherhood.' },
    2: { id: 2, name: 'The Foundation of Fire', period: 'The Thermal Age', icon: '🔥', description: 'Mastering fire and ceramic vessels to unlock nourishment and advanced material processing.' },
    3: { id: 3, name: 'The Pyrotechnic Age', period: 'The Dawn of Smelting', icon: '⚒️', description: 'Reaching temperatures high enough to smelt and refine metals from the raw earth.' },
    4: { id: 4, name: 'The Mechanical Bridge', period: 'The Machine Age', icon: '⚙️', description: 'Converting natural forces into kinetic energy to automate labor and power precision devices.' },
    5: { id: 5, name: 'The Electromagnetic Leap', period: 'The Electric Age', icon: '⚡', description: 'Crafting the raw components to harness the electron and power the modern world.' }
};

const blueprints = [
    // EPOCH 1: Sacred Water & Soil
    {
        id: 'water-discovery',
        name: 'Groundwater Discovery',
        stage: 1,
        icon: '🌿',
        objective: 'Identify underground aquifers in non-river areas using environmental indicators.',
        evolution: 'Securing a water source allows for a permanent campsite and the start of agriculture.',
        requirements: [
            { name: 'Phreatophyte Observation (Willows/Reeds)', value: 'Verified' },
            { name: 'Topographical Low-point', value: 'Basin/Ravine' }
        ],
        steps: [
            { text: 'Look for lush green patches or trees (Willows, Cottonwoods) that indicate deep roots reaching water.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Identify the lowest point in a valley or dry riverbed where groundwater naturally settles.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Dig a shallow test pit during early dawn to check for moisture accumulation (frost/dew).', sketch: 'assets/sketch_mixing.svg' }
        ],
        videoUrl: 'https://www.youtube.com/embed/ZEl-Y1NvBVI'
    },
    {
        id: 'well-driller',
        name: 'Percussion Tripod Drill',
        stage: 1,
        icon: '🏗️',
        objective: 'Dig consistent, safe wells through hard soil to reach the water table.',
        evolution: 'Reliable well-water enables consistent irrigation for the first crops.',
        requirements: [
            { name: 'Weighted Sharp Rock', value: '15 kg' },
            { name: 'Tripod Poles (Hardwood)', value: '3 x 3m' },
            { name: 'Hand-woven Rope', value: '25 m' }
        ],
        steps: [
            { text: 'Lash three 3-meter poles together at the top to form a stable tripod frame.', sketch: 'assets/sketch_tripod.svg' },
            { text: 'Secure the 15kg rock to the center rope and suspend it from the apex.', sketch: 'assets/sketch_tripod.svg' },
            { text: 'Repeatedly lift and drop the rock into the soil to break through hard layers (Percussion digging).', sketch: 'assets/sketch_tripod.svg' },
            { text: 'Shore the well walls with stonework or clay to prevent cave-ins.', sketch: 'assets/sketch_mixing.svg' }
        ],
        videoUrl: 'https://www.youtube.com/embed/32qN1k_9L3g'
    },
    {
        id: 'zai-pits',
        name: 'Zai Pits & Micro-Catchment',
        stage: 1,
        icon: '🌱',
        objective: 'Establish agriculture in dry soil by capturing every drop of rainfall and organic matter.',
        evolution: 'Permanent agriculture provides the food surplus needed to specialize in metallurgy and machines.',
        requirements: [
            { name: 'Digging Stick/Stone Hoe', value: '1 unit' },
            { name: 'Compost/Organic Mulch', value: '20 kg' },
            { name: 'Seeds (Ancestral grains)', value: '500 g' }
        ],
        steps: [
            { text: 'Dig regular pits (30cm diameter) and fill them with dried leaves, manure, and mulch.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'The pits attract termites which aerate the soil and create irrigation tunnels.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Plant seeds in the center of the pit to concentrate rare rainwater at the root zone.', sketch: 'assets/sketch_mixing.svg' }
        ],
        videoUrl: 'https://www.youtube.com/embed/L8zE5l46_u0'
    },
    {
        id: 'fire-plough',
        name: 'Fire Plough & Hand Drill',
        stage: 1,
        icon: '🔥',
        objective: 'Generate sustained flame using friction — the foundation of all thermal processing.',
        evolution: 'Fire enables cooking, water purification, warmth, predator defense, and future pottery/metalworking.',
        requirements: [
            { name: 'Dry Softwood Hearth Board', value: '30 cm (Cedar/Yucca)' },
            { name: 'Hardwood Spindle', value: '25 cm (Cottonwood/Willow)' },
            { name: 'Dry Tinder Bundle', value: 'Large (Dead grass, bark fibers)' },
            { name: 'Flat Stone/Leaf (Ember transfer)', value: '1 unit' }
        ],
        steps: [
            { text: 'Carve a shallow groove into the hearth board and notch one end for coal collection.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Place the spindle in the groove and rapidly rotate with downward pressure using palms (hand drill) or bow (bow drill).', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Continue until dark smoke and fine black powder (coal) accumulates in the notch.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Transfer the coal to the tinder bundle and blow gently with steady breath until flame erupts.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Feed small twigs and dry material to establish a sustainable fire.', sketch: 'assets/sketch_mixing.svg' }
        ],
        videoUrl: 'https://www.youtube.com/embed/ZEl-Y1NvBVI'
    },
    {
        id: 'lean-to-shelter',
        name: 'Lean-To & Debris Hut',
        stage: 1,
        icon: '🏕️',
        objective: 'Build immediate weather protection using natural materials and simple geometry.',
        evolution: 'Shelter enables overnight survival, rest quality, and a base camp for all other crafts.',
        requirements: [
            { name: 'Long Sturdy Branch (Ridgepole)', value: '2-3m' },
            { name: 'Rib Branches', value: '15-20 pieces' },
            { name: 'Insulation Material (Leaves/Grass)', value: '3x body volume' },
            { name: 'Support Tree/Rock', value: '1 unit' }
        ],
        steps: [
            { text: 'Find a sturdy support (tree fork, rock, or Y-stick planted in ground) at waist height.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Rest the ridgepole (2-3m branch) against the support at a 30-45 degree angle.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Lean rib branches along both sides of the ridgepole to form an A-frame skeleton.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Pile insulation material (leaves, grass, bark) 60cm thick on all sides and the top.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Create a thick debris bedding floor inside — insulation from cold ground is critical.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Build a fire reflector wall opposite the shelter entrance using stacked logs or rocks.', sketch: 'assets/sketch_mixing.svg' }
        ],
        videoUrl: 'https://www.youtube.com/embed/ZEl-Y1NvBVI'
    },
    {
        id: 'stone-collection',
        name: 'Stone Identification & Collection',
        stage: 1,
        icon: '🪨',
        objective: 'Recognize, gather, and classify the stones needed for all future tool-making.',
        evolution: 'Stone tools are the foundation for cutting, scraping, digging, drilling, and fire-starting.',
        requirements: [
            { name: 'Hammerstone (Basalt/Quartzite)', value: '1-2 kg, rounded' },
            { name: 'Raw Flint/Chert Nodules', value: '2-3 pieces, fist-sized' },
            { name: 'Collection Bag/Container', value: '1 unit' }
        ],
        steps: [
            { text: 'Search riverbeds, exposed cliffs, and dry washes for knappable stone deposits.', sketch: 'assets/sketch_mountain.svg' },
            { text: 'Test stones by striking with a hammerstone — look for conchoidal (shell-like) fracture patterns.', sketch: 'assets/sketch_knapping.svg' },
            { text: 'Collect basalt or quartzite hammerstones — they must be harder than the stone you want to shape.', sketch: 'assets/sketch_mountain.svg' },
            { text: 'Identify limestone formations where flint/chert nodules form inside.', sketch: 'assets/sketch_mountain.svg' },
            { text: 'Classify stones by purpose: cutting (flint/obsidian), hammering (basalt), grinding (sandstone).', sketch: 'assets/sketch_knapping.svg' }
        ],
        videoUrl: 'https://www.youtube.com/embed/k9pL5m4zN8Q'
    },
    {
        id: 'fiber-gathering',
        name: 'Fiber Gathering & Cordage',
        stage: 1,
        icon: '🪢',
        objective: 'Identify, harvest, and twist plant fibers into basic rope and binding material.',
        evolution: 'Cordage enables tool hafting, shelter lashing, snares, nets, and well-drilling tripod construction.',
        requirements: [
            { name: 'Inner Bark (Cedar/Willow/Basswood)', value: 'Long strips' },
            { name: 'Tall Dried Grass/Reeds', value: 'Large bundles' },
            { name: 'Plant Vines', value: 'Flexible, long pieces' }
        ],
        steps: [
            { text: 'Identify trees with flexible inner bark — score and peel long strips from fallen branches.', sketch: 'assets/sketch_forest.svg' },
            { text: 'Soak bark strips in water for 1-2 hours to increase flexibility.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Use the reverse-wrap technique: twist two fiber bundles in opposite directions to create strong cordage.', sketch: 'assets/sketch_binding.svg' },
            { text: 'Add new fiber bundles by overlapping ends and twisting them into the existing cord.', sketch: 'assets/sketch_binding.svg' },
            { text: 'Test cordage strength by hanging weight — aim for 5kg minimum before trusting it for tools.', sketch: 'assets/sketch_mixing.svg' }
        ],
        videoUrl: 'https://www.youtube.com/embed/ZEl-Y1NvBVI'
    },
    {
        id: 'camp-site',
        name: 'Camp Site Selection & Layout',
        stage: 1,
        icon: '📍',
        objective: 'Choose and organize an optimal location for a permanent survival base camp.',
        evolution: 'A well-placed camp reduces daily labor, maximizes resource access, and enables craft specialization.',
        requirements: [
            { name: 'Water Source (Located)', value: 'Within 200m' },
            { name: 'Sheltered Ground', value: 'Elevated, well-drained' },
            { name: 'Timber/Fuel Supply', value: 'Within 500m' }
        ],
        steps: [
            { text: 'Choose elevated ground near water but above flood level — avoid dry riverbeds and valley bottoms.', sketch: 'assets/sketch_river.svg' },
            { text: 'Ensure the site has morning sun exposure for warmth and fire-starting advantage.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Position shelter with back to prevailing wind — use terrain (rock face, hill) as natural windbreak.', sketch: 'assets/sketch_mountain.svg' },
            { text: 'Organize camp zones: fire pit (center), sleeping area (sheltered), food prep (downwind), tool workshop (covered).', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Mark resource paths: water trail, fuel wood area, foraging zone, stone collection area.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Establish a latrine area at least 60m downhill and downstream from water source.', sketch: 'assets/sketch_mixing.svg' }
        ],
        videoUrl: 'https://www.youtube.com/embed/ZEl-Y1NvBVI'
    },
    {
        id: 'food-foraging',
        name: 'Wild Food Foraging & Identification',
        stage: 1,
        icon: '🫐',
        objective: 'Identify, gather, and safely process wild edibles while avoiding toxic plants.',
        evolution: 'Reliable foraging bridges the gap between arrival and the first agriculture harvest.',
        requirements: [
            { name: 'Knowledge of Local Flora', value: 'Critical' },
            { name: 'Foraging Container (Basket)', value: '1 unit' },
            { name: 'Cutting Tool (Sharp stone)', value: '1 unit' }
        ],
        steps: [
            { text: 'Learn the Universal Edibility Test: separate plant parts, test on skin, then lips, then tongue, then small swallow.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Prioritize known-safe staples: dandelion (all parts), cattail (roots/shoots), acorns (leached), berries (aggregate types).', sketch: 'assets/sketch_forest.svg' },
            { text: 'Avoid the "big three" dangerous families: Apiaceae (umbrella flowers — many are deadly), nightshades, and toxic mushrooms.', sketch: 'assets/sketch_forest.svg' },
            { text: 'Collect insects, grubs, and small game — they provide protein when plant food is scarce.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Process acorns by crushing, soaking in running water for 24-48 hours to remove bitter tannins.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Dry and store surplus food on flat rocks in the sun — preservation prevents daily foraging pressure.', sketch: 'assets/sketch_mixing.svg' }
        ],
        videoUrl: 'https://www.youtube.com/embed/ZEl-Y1NvBVI'
    },
    // EPOCH 2: The Foundation of Fire
    {
        id: 'bow-drill',
        name: 'Double-Bearing Bow Drill',
        stage: 2,
        icon: '🏹',
        objective: 'Harness thermal energy for nourishment and future high-heat processing.',
        evolution: 'Thermal control allows for the transition into Stage 3 Smelting.',
        requirements: [
            { name: 'Dry Cedar Hearth', value: '30 cm' },
            { name: 'Hardwood Spindle', value: '25 cm' },
            { name: 'Resin-lubricated Bearing', value: '1 unit' }
        ],
        steps: [
            { text: 'Generate friction sparks using the bow-sawing motion.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Transfer the coal to a dried grass tinder-nest and blow to create flame.', sketch: 'assets/sketch_mixing.svg' }
        ],
        videoUrl: 'https://www.youtube.com/embed/ZEl-Y1NvBVI'
    },
    {
        id: 'clay-pottery',
        name: 'Vessel Firing',
        stage: 2,
        icon: '🏺',
        objective: 'Create containers for water transport and chemical storage.',
        evolution: 'Kiln logic leads directly to the Forge furnaces in Stage 3.',
        requirements: [
            { name: 'Red River Clay', value: '10 kg' },
            { name: 'Crushed Shell Temper', value: '1 kg' }
        ],
        steps: [
            { text: 'Coil the tempered clay and burnish with a smooth river stone.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Bury in a fire-pit for 12 hours for thermal hardening.', sketch: 'assets/sketch_mixing.svg' }
        ],
        videoUrl: 'https://www.youtube.com/embed/L8zE5l46_u0'
    },
    {
        id: 'stone-axe',
        name: 'Flint-Knapped Axe',
        stage: 2,
        icon: '🪓',
        objective: 'Efficiency in timber harvesting for shelters and fuel.',
        evolution: 'Better harvesting tools enable the building of Stage 4 Machines.',
        requirements: [
            { name: 'Flint Core', value: '1.2 kg' },
            { name: 'Antler Driller', value: '15 cm' }
        ],
        steps: [
            { text: 'Percussion strike the core to create a sharp, bifacial edge.', sketch: 'assets/sketch_knapping.svg' },
            { text: 'Pressure flaking to refine the blade depth.', sketch: 'assets/sketch_knapping.svg' }
        ],
        videoUrl: 'https://www.youtube.com/embed/b817-P9n-6Q'
    },
    // EPOCH 3: The Pyrotechnic Age
    {
        id: 'smelter-kiln',
        name: 'Forced-Air Smelter',
        stage: 3,
        icon: '🌋',
        objective: 'Smelt copper and prepare for the Iron Age.',
        evolution: 'Metal tools are the prerequisite for precision machine building.',
        requirements: [
            { name: 'Clay Bellows', value: '2 units' },
            { name: 'Charcoal', value: '20 kg' },
            { name: 'Copper Ore (Malachite)', value: '5 kg' },
            { name: 'Clay Tuyere Pipes', value: '4 units' }
        ],
        steps: [
            { text: 'Construct a tapering chimney from clay and stone, 1.5m tall with a base diameter of 60cm.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Insert clay tuyere pipes at the base, angled upward to direct air into the center of the furnace.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Layer charcoal and crushed copper ore alternately inside the furnace.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Operate bellows continuously for 4-6 hours to reach 1084°C (copper melting point).', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Tap the molten copper from the bottom into a stone mold to form an ingot.', sketch: 'assets/sketch_mixing.svg' }
        ],
        videoUrl: 'https://www.youtube.com/embed/E2V_v1186r4'
    },
    {
        id: 'iron-smelting',
        name: 'Bloomery Iron Smelting',
        stage: 3,
        icon: '⚔️',
        objective: 'Extract usable iron from bog iron or hematite ore using a bloomery furnace.',
        evolution: 'Iron tools enable durable construction, advanced agriculture, and mechanical engineering.',
        requirements: [
            { name: 'Bog Iron Ore', value: '10 kg' },
            { name: 'Charcoal (Hardwood)', value: '40 kg' },
            { name: 'Clay Bloomery Furnace', value: '1.2m tall' },
            { name: 'Double Bellows System', value: '2 units' },
            { name: 'Wooden Hammer/Tongs', value: '1 set' }
        ],
        steps: [
            { text: 'Build a bloomery furnace 1.2m tall with a tap arch at the bottom for slag removal.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Pre-heat the furnace with a small charcoal fire for 2 hours to prevent thermal cracking.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Layer crushed bog iron and charcoal in alternating 5cm layers.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Operate bellows continuously for 6-8 hours, maintaining 1200-1300°C.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Extract the spongy iron bloom (not fully molten) and hammer repeatedly to remove slag.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Fold and re-heat the bloom multiple times to create wrought iron bars.', sketch: 'assets/sketch_mixing.svg' }
        ],
        videoUrl: 'https://www.youtube.com/embed/OOWnR_5dJjw'
    },
    {
        id: 'charcoal-production',
        name: 'Charcoal Production (Earth Kiln)',
        stage: 3,
        icon: '⬛',
        objective: 'Convert wood into high-carbon charcoal for metallurgical fuel.',
        evolution: 'Charcoal burns hotter and cleaner than wood — essential for smelting metals.',
        requirements: [
            { name: 'Hardwood Logs (Oak/Beech)', value: '200 kg' },
            { name: 'Soil/Grass Cover', value: 'Sufficient for mound' },
            { name: 'Ignition Source', value: 'Fire established' }
        ],
        steps: [
            { text: 'Stack hardwood logs in a dome-shaped mound (1.5m diameter, 1m tall).', sketch: 'assets/sketch_mountain.svg' },
            { text: 'Cover the entire mound with a 5cm layer of soil and grass, leaving a central chimney hole.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Light a fire at the center top and allow it to spread downward through the mound.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Seal holes as smoke turns from white (water vapor) to blue (pyrolysis gases).', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Allow 48-72 hours for complete carbonization, then open and cool the charcoal.', sketch: 'assets/sketch_mixing.svg' }
        ],
        videoUrl: 'https://www.youtube.com/embed/xvCjJqCRNzA'
    },
    // EPOCH 4: The Mechanical Bridge
    {
        id: 'water-wheel',
        name: 'Flow-Converter Wheel',
        stage: 4,
        icon: '🎡',
        objective: 'Automate mechanical labor via water power.',
        evolution: 'Required for high-speed electromagnetic generation in Stage 5.',
        requirements: [
            { name: 'Iron-tipped Axle', value: '1 unit' },
            { name: 'Bucket Lashing', value: '16 units' },
            { name: 'Timber (Oak for Wheel)', value: '200 kg' },
            { name: 'Stone Sluice Channel', value: '5m length' }
        ],
        steps: [
            { text: 'Construct the wheel frame from oak timber with 16 evenly spaced buckets/paddles.', sketch: 'assets/sketch_binding.svg' },
            { text: 'Mount the wheel on an iron-tipped axle set in stone bearing blocks.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Build a stone or timber sluice channel to direct stream water onto the wheel.', sketch: 'assets/sketch_river.svg' },
            { text: 'Align the axle with the machinery to be powered (millstone, hammer, generator).', sketch: 'assets/sketch_binding.svg' },
            { text: 'Regulate water flow with a gate valve to control rotational speed.', sketch: 'assets/sketch_mixing.svg' }
        ],
        videoUrl: 'https://www.youtube.com/embed/7V8nZf_f90o'
    },
    {
        id: 'trip-hammer',
        name: 'Water-Powered Trip Hammer',
        stage: 4,
        icon: '🔨',
        objective: 'Automate repetitive hammering for metal forging and grain pounding.',
        evolution: 'Mechanical forging enables mass production of tools and weapons.',
        requirements: [
            { name: 'Water Wheel (Operational)', value: '1 unit' },
            { name: 'Cam Shaft', value: '1 iron shaft' },
            { name: 'Hammer Head (Iron)', value: '15 kg' },
            { name: 'Timber Frame', value: '3x3m structure' }
        ],
        steps: [
            { text: 'Install a cam shaft on the water wheel axle — the cam should protrude 10cm.', sketch: 'assets/sketch_binding.svg' },
            { text: 'Build a timber frame to hold the hammer lever (3m hardwood beam).', sketch: 'assets/sketch_mountain.svg' },
            { text: 'Position the hammer so the cam lifts the lever end, then drops the hammer.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Place an anvil or forge directly beneath the hammer strike point.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Adjust cam position and hammer weight for optimal striking rhythm (60-80 BPM).', sketch: 'assets/sketch_mixing.svg' }
        ],
        videoUrl: 'https://www.youtube.com/embed/NhS3FNjMaLk'
    },
    {
        id: 'gear-cutting',
        name: 'Gear Cutting & Transmission',
        stage: 4,
        icon: '⚙️',
        objective: 'Create meshing gears to transfer and modify rotational force.',
        evolution: 'Gears are essential for generators, clocks, and precision machinery.',
        requirements: [
            { name: 'Hardwood Blocks (Maple/Oak)', value: '4 pieces, 20cm diameter' },
            { name: 'Iron Chisels', value: 'Set of 3' },
            { name: 'Dividers/Compass', value: '1 unit' },
            { name: 'Template Pattern', value: 'Calculated tooth profile' }
        ],
        steps: [
            { text: 'Calculate gear ratio: Driver teeth / Driven teeth = Speed reduction ratio.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Mark tooth positions on hardwood blank using dividers for even spacing.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Cut teeth using chisels — each tooth should be triangular with flat engagement face.', sketch: 'assets/sketch_knapping.svg' },
            { text: 'Test mesh two gears together — teeth should engage smoothly without binding.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Harden gear faces with heat treatment (charcoal fire, quench in oil).', sketch: 'assets/sketch_mixing.svg' }
        ],
        videoUrl: 'https://www.youtube.com/embed/vjT4yXAKXEQ'
    },
    // EPOCH 5: The Electromagnetic Leap
    {
        id: 'the-coil',
        name: 'Electromagnetic Stator',
        stage: 5,
        icon: '🌀',
        objective: 'Harness magnetic flux to create flowing electricity.',
        evolution: 'The final bridge to modern power.',
        requirements: [
            { name: 'Insulated Copper Wire', value: '200 m' },
            { name: 'Iron Lamination', value: '10 layers' },
            { name: 'Permanent Magnets', value: '4 units (Neodymium or crafted)' },
            { name: 'Winding Jig', value: '1 wooden frame' }
        ],
        steps: [
            { text: 'Wind the copper wire uniformly around the iron lamination core (200+ turns).', sketch: 'assets/sketch_binding.svg' },
            { text: 'Secure the coil ends with enamel or resin insulation to prevent shorting.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Mount permanent magnets on a rotating rotor, aligned with the stator poles.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Bridge the coil to the work circuit with rectifier diodes (AC to DC conversion).', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Spin the rotor at 1500-3000 RPM using water wheel or wind turbine.', sketch: 'assets/sketch_binding.svg' }
        ],
        videoUrl: 'https://www.youtube.com/embed/_k6hL-I5e_k'
    },
    {
        id: 'battery-construction',
        name: 'Voltaic Pile Battery',
        stage: 5,
        icon: '🔋',
        objective: 'Store and deliver direct current electricity for experiments and tools.',
        evolution: 'Portable power enables electroplating, arc lighting, and telegraphy.',
        requirements: [
            { name: 'Copper Discs', value: '10 units, 5cm diameter' },
            { name: 'Zinc Discs', value: '10 units, 5cm diameter' },
            { name: 'Cardboard/Cloth Spacers', value: '10 units' },
            { name: 'Salt Water / Vinegar', value: '500 ml electrolyte' }
        ],
        steps: [
            { text: 'Stack alternating layers: copper disc → soaked spacer → zinc disc → repeat.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Soak cardboard spacers in salt water or vinegar (electrolyte solution).', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Each cell produces ~0.76V — stack 10+ cells for 7.6V output.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Connect top (zinc) and bottom (copper) terminals to your circuit.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Re-soak spacers every few hours as the electrolyte dries out.', sketch: 'assets/sketch_mixing.svg' }
        ],
        videoUrl: 'https://www.youtube.com/embed/fbWjAMwVl_E'
    },
    {
        id: 'telegraph-system',
        name: 'Electromagnetic Telegraph',
        stage: 5,
        icon: '📡',
        objective: 'Transmit coded messages over long distances using electrical pulses.',
        evolution: 'Long-distance communication transforms civilization — the first information age.',
        requirements: [
            { name: 'Electromagnet (Coil + Iron Core)', value: '2 units' },
            { name: 'Battery (Voltaic Pile)', value: '7-12V supply' },
            { name: 'Copper Wire (Conductor)', value: '500m+ for distance' },
            { name: 'Morse Code Key', value: '1 spring-loaded switch' },
            { name: 'Sounder (Metal Plate)', value: '1 unit' }
        ],
        steps: [
            { text: 'Run insulated copper wire between two stations (keep it off the ground using wooden poles).', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Connect the wire to an electromagnet coil at the receiving station.', sketch: 'assets/sketch_binding.svg' },
            { text: 'Position a metal sounder plate beneath the electromagnet armature.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Complete the circuit with a battery and Morse code key (spring switch) at the sending station.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Press the key to create clicks — short (dot) and long (dash) pulses encode letters.', sketch: 'assets/sketch_mixing.svg' },
            { text: 'Train operators in Morse code: A=·−, B=−···, C=−·−·, etc.', sketch: 'assets/sketch_mixing.svg' }
        ],
        videoUrl: 'https://www.youtube.com/embed/V8KB4z4f1qA'
    }
];

const materials = [
    {
        id: 'obsidian',
        name: 'Obsidian',
        category: 'Stone',
        icon: '🖤',
        habitat: 'Volcanic fields and areas with high history of cooling lava.',
        properties: 'Conchoidal fracture, glass-like edge sharper than any steel.',
        commonUses: ['Knives', 'Arrowheads', 'Fine surgery tools'],
        sketch: 'assets/sketch_mountain.svg',
        videoUrl: 'https://www.youtube.com/embed/k9pL5m4zN8Q'
    },
    {
        id: 'flint',
        name: 'Flint / Chert',
        category: 'Stone',
        icon: '🐚',
        habitat: 'Found as nodules inside limestone or in chalk cliffs.',
        properties: 'Consistent fracture, durable, creates sparks when struck by iron.',
        commonUses: ['Hand axes', 'Scrapers', 'Fire starting'],
        sketch: 'assets/sketch_mountain.svg',
        videoUrl: 'https://www.youtube.com/embed/W5u4ttosEmM'
    },
    {
        id: 'basalt',
        name: 'Basalt',
        category: 'Stone',
        icon: '🗿',
        habitat: 'Exposed bedrock in mountains and dry riverbeds.',
        properties: 'High density, extreme durability, resistant to shock.',
        commonUses: ['Hammerstones', 'Ground stone axes', 'Grinding slabs'],
        sketch: 'assets/sketch_mountain.svg',
        videoUrl: 'https://www.youtube.com/embed/jB58f7I0sL4'
    },
    {
        id: 'bog-iron',
        name: 'Bog Iron',
        category: 'Ore',
        icon: '🕳️',
        habitat: 'Swamps and bogs where iron-rich bacteria aggregate minerals.',
        properties: 'Crumbly, pea-sized nodules, low purity but easy to gather.',
        commonUses: ['Primitive smelting', 'Natural pigment (Ochre)'],
        sketch: 'assets/sketch_river.svg',
        videoUrl: 'https://www.youtube.com/embed/E2V_v1186r4'
    },
    {
        id: 'copper',
        name: 'Native Copper',
        category: 'Ore',
        icon: '🧡',
        habitat: 'Rare surface outcrops in basaltic formations or river panning.',
        properties: 'Malleable (can be cold-hammered), high thermal conductivity.',
        commonUses: ['Primitive jewelry', 'First-stage metal tools'],
        sketch: 'assets/sketch_river.svg',
        videoUrl: 'https://www.youtube.com/embed/_k6hL-I5e_k'
    },
    {
        id: 'hematite',
        name: 'Hematite',
        category: 'Ore',
        icon: '🔴',
        habitat: 'Sedimentary rock formations, banded iron deposits, and clay beds.',
        properties: 'High iron content (up to 70%), reddish streak, metallic to earthy luster.',
        commonUses: ['Iron smelting', 'Red pigment (ochre)', 'Polishing abrasive'],
        sketch: 'assets/sketch_mountain.svg',
        videoUrl: 'https://www.youtube.com/embed/E2V_v1186r4'
    },
    {
        id: 'malachite',
        name: 'Malachite (Copper Ore)',
        category: 'Ore',
        icon: '💚',
        habitat: 'Oxidized zones of copper deposits, often near surface in limestone.',
        properties: 'Bright green color, carbonate mineral, 57% copper content.',
        commonUses: ['Copper smelting', 'Green pigment', 'Decorative stone'],
        sketch: 'assets/sketch_mountain.svg',
        videoUrl: 'https://www.youtube.com/embed/E2V_v1186r4'
    },
    {
        id: 'cedar-bark',
        name: 'Cedar Inner Bark',
        category: 'Fiber',
        icon: '🌲',
        habitat: 'Western red cedar trees in moist temperate forests.',
        properties: 'Long flexible fibers, water-resistant, naturally antimicrobial.',
        commonUses: ['Cordage', 'Basketry', 'Roofing material', 'Tinder'],
        sketch: 'assets/sketch_forest.svg',
        videoUrl: 'https://www.youtube.com/embed/ZEl-Y1NvBVI'
    },
    {
        id: 'river-clay',
        name: 'River Clay Deposit',
        category: 'Earth',
        icon: '🟤',
        habitat: 'Riverbanks, floodplains, and dried lake beds.',
        properties: 'Plastic when wet, hardens when dried and fired, fine particle size.',
        commonUses: ['Pottery', 'Construction mortar', 'Kiln lining', 'Water filtration'],
        sketch: 'assets/sketch_river.svg',
        videoUrl: 'https://www.youtube.com/embed/L8zE5l46_u0'
    },
    {
        id: 'beeswax',
        name: 'Beeswax',
        category: 'Organic',
        icon: '🐝',
        habitat: 'Wild bee hives in hollow trees or rock crevices.',
        properties: 'Waterproof, low melting point (62°C), molds easily, burns cleanly.',
        commonUses: ['Lost-wax casting', 'Waterproofing', 'Candles', 'Adhesive'],
        sketch: 'assets/sketch_forest.svg',
        videoUrl: 'https://www.youtube.com/embed/ZEl-Y1NvBVI'
    }
];

const CRAFT_ROADMAPS = {
    water: {
        id: 'water',
        name: 'Water & Agriculture',
        icon: '💧',
        description: 'Master the discovery and management of water resources, from finding groundwater to building hydraulic systems.',
        stages: [
            {
                level: 1,
                title: 'Water Source Discovery',
                subtitle: 'Reading the Land',
                icon: '🌿',
                objective: 'Identify underground aquifers using environmental indicators like phreatophyte trees, topographical low points, and morning dew patterns.',
                details: [
                    'Observe willow and cottonwood trees — their presence indicates shallow groundwater within 3-5m.',
                    'Look for lush green vegetation patches in otherwise dry terrain.',
                    'Identify valley bottoms and dry riverbeds where water naturally collects.',
                    'Test soil moisture at dawn — frost/dew accumulation indicates rising water table.',
                    'Listen for underground water sounds (hollow echoes when stomping on ground).',
                    'Use dowsing rods (controversial but historically documented) as a secondary method.'
                ],
                resources: [
                    { name: 'Observation Knowledge', value: 'Critical' },
                    { name: 'Digging Stick', value: '1 unit' },
                    { name: 'Test Pit Markers', value: '5 stakes' }
                ],
                techniques: ['Terrain Reading', 'Indicator Plant Identification', 'Soil Moisture Testing'],
                outputs: ['Located Water Source', 'Water Table Depth Estimate'],
                unlocks: ['Well Construction', 'Basic Camp Placement'],
                dependencies: []
            },
            {
                level: 2,
                title: 'Well Construction',
                subtitle: 'Percussion Drilling',
                icon: '🏗️',
                objective: 'Dig consistent, safe wells through hard soil using a tripod-mounted percussion drill system.',
                details: [
                    'Build a stable tripod from three 3m hardwood poles lashed at the apex.',
                    'Suspend a 15-20kg sharpened rock from the center rope.',
                    'Use repeated lift-and-drop motion to break through soil layers.',
                    'Remove loosened soil manually with a bucket or shell.',
                    'Shore well walls with stones or clay to prevent cave-ins.',
                    'Dig 1-3m deep until consistent water accumulation is observed.'
                ],
                resources: [
                    { name: 'Tripod Poles', value: '3 x 3m hardwood' },
                    { name: 'Weighted Rock', value: '15-20 kg' },
                    { name: 'Hand-woven Rope', value: '25 m' },
                    { name: 'Stone Wall Material', value: '50 kg' }
                ],
                techniques: ['Tripod Lashing', 'Percussion Digging', 'Well Shoring'],
                outputs: ['Functional Well (1-3m)', 'Reliable Water Access'],
                unlocks: ['Irrigation Systems', 'Permanent Settlement'],
                dependencies: ['Fiber Gathering S1 (Rope)', 'Stone Tools S1 (Digging)']
            },
            {
                level: 3,
                title: 'Irrigation & Zai Pits',
                subtitle: 'Micro-Catchment Agriculture',
                icon: '🌱',
                objective: 'Establish agriculture in dry soil by capturing rainfall and directing water to crop root zones.',
                details: [
                    'Dig regular pits (30cm diameter, 20cm deep) in a grid pattern.',
                    'Fill pits with dried leaves, manure, and organic mulch.',
                    'Termites create underground tunnels that aerate soil and channel water.',
                    'Plant seeds in pit centers to concentrate rainwater at root zones.',
                    'Build small berms between pits to capture and direct runoff.',
                    'Harvest 2-3x more grain than dry-land planting methods.'
                ],
                resources: [
                    { name: 'Digging Tool', value: '1 unit' },
                    { name: 'Compost/Mulch', value: '20 kg' },
                    { name: 'Seeds', value: '500 g' }
                ],
                techniques: ['Zai Pit Construction', 'Rainwater Harvesting', 'Termite Symbiosis'],
                outputs: ['Productive Dry-Land Farm', 'Food Surplus'],
                unlocks: ['Permanent Agriculture', 'Craft Specialization'],
                dependencies: ['Stone Tools S2 (Hoe)', 'Well Construction S2']
            },
            {
                level: 4,
                title: 'Aqueduct Engineering',
                subtitle: 'Gravity Water Transport',
                icon: '🏛️',
                objective: 'Build channels to transport water from source to fields and settlements over long distances.',
                details: [
                    'Survey a continuous downhill gradient from water source to destination.',
                    'Dig a trench 30-50cm deep with a 1:100 slope ratio.',
                    'Line the channel with clay or flat stones to prevent seepage.',
                    'Build siphon sections using hollowed logs for valley crossings.',
                    'Install settling basins at intervals to trap sediment.',
                    'Maintain flow rate of 0.5-1 m/s for optimal delivery.'
                ],
                resources: [
                    { name: 'Clay/Stone Lining', value: '200 kg' },
                    { name: 'Hollowed Logs (Siphons)', value: '10 units' },
                    { name: 'Surveying Stakes', value: '50 pieces' }
                ],
                techniques: ['Gradient Surveying', 'Channel Lining', 'Siphon Construction'],
                outputs: ['Irrigation Aqueduct', 'Settlement Water Supply'],
                unlocks: ['Hydraulic Power', 'Urban Development'],
                dependencies: ['Irrigation S3', 'Construction S3 (Stone Working)']
            },
            {
                level: 5,
                title: 'Hydraulic Power Systems',
                subtitle: 'Water as Energy Source',
                icon: '⚡',
                objective: 'Convert flowing water into mechanical power for mills, hammers, and electricity generation.',
                details: [
                    'Build a dam or weir to create consistent water head (2-5m drop).',
                    'Construct a water wheel (overshot for high head, undershot for flow).',
                    'Connect wheel axle to machinery via cam shaft or belt drive.',
                    'Calculate power output: P = ρ × g × Q × H × efficiency (typically 60-80%).',
                    'Install a turbine for higher efficiency (Pelton wheel for high head).',
                    'Use generated power for grinding, forging, or electricity production.'
                ],
                resources: [
                    { name: 'Dam Materials', value: 'Earth/Stone/Timber' },
                    { name: 'Water Wheel', value: '3m diameter' },
                    { name: 'Turbine (Optional)', value: 'Pelton/Crossflow' }
                ],
                techniques: ['Dam Building', 'Wheel/Turbine Design', 'Power Transmission'],
                outputs: ['Mechanical Power (1-10 HP)', 'Electricity Generation Capability'],
                unlocks: ['Generator Drive', 'Mass Production'],
                dependencies: ['Water Wheel S4', 'Gear Cutting S4', 'Construction S4']
            }
        ]
    },
    pottery: {
        id: 'pottery',
        name: 'Pottery & Ceramics',
        icon: '🏺',
        description: 'From identifying raw clay to firing refractory ceramics capable of withstanding metal-smelting temperatures.',
        stages: [
            {
                level: 1,
                title: 'Clay Identification',
                subtitle: 'Reading the Earth',
                icon: '🔍',
                objective: 'Locate and test clay deposits for plasticity, shrinkage, and firing suitability.',
                details: [
                    'Search riverbanks, road cuts, and excavated pits for exposed clay layers.',
                    'Perform the ribbon test: roll clay into a cylinder and bend it — good clay cracks minimally.',
                    'Test shrinkage: make a 5cm ball, dry it, measure — under 10% shrinkage is ideal.',
                    'Fire a small sample — it should harden, not crumble or explode.',
                    'Identify temper materials: crushed shell, sand, grog (crushed old pottery).',
                    'Dig and sun-dry clay, then slake in water and screen for impurities.'
                ],
                resources: [
                    { name: 'Clay Sample Sites', value: '3+ locations' },
                    { name: 'Tempers (Sand/Shell/Grog)', value: '5 kg' },
                    { name: 'Water for Slaking', value: '20 L' }
                ],
                techniques: ['Ribbon Test', 'Shrinkage Testing', 'Clay Processing'],
                outputs: ['Processed Clay Supply', 'Temper Material'],
                unlocks: ['Coil Pottery', 'Pit Firing'],
                dependencies: []
            },
            {
                level: 2,
                title: 'Coil Pottery & Pit Firing',
                subtitle: 'First Vessels',
                icon: '🫙',
                objective: 'Create functional water-tight vessels using coil-building and pit-firing techniques.',
                details: [
                    'Roll clay into long coils (2-3cm diameter) using a flat stone surface.',
                    'Stack coils in a spiral, pinch each coil to the one below.',
                    'Smooth interior and exterior with a wet stone (burnishing).',
                    'Dry pots slowly in shade for 3-7 days to prevent cracking.',
                    'Dig a pit 30cm deep, place dried pots inside, surround with dry fuel.',
                    'Fire slowly — build to maximum heat over 4-6 hours, then cool gradually.'
                ],
                resources: [
                    { name: 'Processed Clay', value: '10 kg' },
                    { name: 'Smooth Burnishing Stone', value: '1 unit' },
                    { name: 'Firing Fuel (Dung/Chaff)', value: '50 kg' }
                ],
                techniques: ['Coil Building', 'Burnishing', 'Pit Firing'],
                outputs: ['Water-tight Vessels', 'Storage Containers'],
                unlocks: ['Kiln Construction', 'Food Storage'],
                dependencies: ['Clay Identification S1']
            },
            {
                level: 3,
                title: 'Kiln Construction',
                subtitle: 'Controlled Atmosphere Firing',
                icon: '🔥',
                objective: 'Build an updraft kiln capable of reaching 900-1100°C with controlled heating and cooling.',
                details: [
                    'Build a firebox at ground level for fuel loading and air intake.',
                    'Construct a chamber above the firebox using clay bricks or wattle-and-daub.',
                    'Install a perforated floor (batt shelf) to separate pots from direct flame.',
                    'Create a chimney or flue at the top to draw heat upward.',
                    'Fire the kiln empty first to cure the structure.',
                    'Load dried pots, fire slowly over 8-12 hours to target temperature.'
                ],
                resources: [
                    { name: 'Fire Clay Bricks', value: '100+ units' },
                    { name: 'Kiln Furniture (Shelves)', value: '3-5 pieces' },
                    { name: 'Charcoal/Wood Fuel', value: '100 kg' }
                ],
                techniques: ['Updraft Kiln Design', 'Temperature Control', 'Kiln Loading'],
                outputs: ['Operational Kiln', 'High-Fired Ceramics'],
                unlocks: ['Glazes', 'Refractory Materials'],
                dependencies: ['Coil Pottery S2', 'Construction S2 (Wattle & Daub)']
            },
            {
                level: 4,
                title: 'Glazes & Slip Casting',
                subtitle: 'Surface Engineering',
                icon: '🎨',
                objective: 'Apply glass-like coatings to pottery for waterproofing, decoration, and chemical resistance.',
                details: [
                    'Create slip: mix fine clay with water to a cream consistency.',
                    'Apply slip to leather-hard pots for a contrasting surface color.',
                    'Make ash glaze: mix wood ash with water and feldspar (or granite dust).',
                    'Dip or brush glaze onto bisque-fired pots (1mm thickness).',
                    'Fire to 1100-1200°C — ash glazes melt into a glass surface.',
                    'Experiment with iron oxide (brown/red) and copper oxide (green) colorants.'
                ],
                resources: [
                    { name: 'Wood Ash', value: '5 kg' },
                    { name: 'Feldspar/Granite Dust', value: '2 kg' },
                    { name: 'Iron/Copper Oxide', value: '100 g' }
                ],
                techniques: ['Slip Application', 'Ash Glaze Formulation', 'Oxide Colorants'],
                outputs: ['Glazed Pottery', 'Decorative Ceramics'],
                unlocks: ['Refractory Ceramics', 'Chemical Storage'],
                dependencies: ['Kiln Construction S3']
            },
            {
                level: 5,
                title: 'Refractory Ceramics',
                subtitle: 'High-Temperature Materials',
                icon: '🧱',
                objective: 'Produce ceramics and furnace linings capable of withstanding 1400°C+ for metal smelting.',
                details: [
                    'Source fire clay with high alumina content (low iron, low flux).',
                    'Mix clay with grog (30%) and sand (20%) for thermal shock resistance.',
                    'Form crucibles for melting metals — thick walls, narrow mouths.',
                    'Create kiln shelves (batts) and posts for stacking pottery.',
                    'Build furnace linings: rammed earth mix of clay + sand + charcoal dust.',
                    'Test refractory: fire a test brick, quench in water — it should not crack.'
                ],
                resources: [
                    { name: 'Fire Clay', value: '50 kg' },
                    { name: 'Grog (Crushed Pottery)', value: '20 kg' },
                    { name: 'Silica Sand', value: '15 kg' }
                ],
                techniques: ['Refractory Formulation', 'Crucible Making', 'Thermal Shock Testing'],
                outputs: ['Smelting Crucibles', 'Furnace Linings'],
                unlocks: ['Metal Smelting', 'Advanced Forge'],
                dependencies: ['Kiln Construction S3', 'Smelting S3']
            }
        ]
    },
    knapping: {
        id: 'knapping',
        name: 'Stone Tool Making',
        icon: '🪨',
        description: 'The ancient art of fracturing stone to create cutting edges, hammerstones, and composite tools.',
        stages: [
            {
                level: 1,
                title: 'Stone Identification',
                subtitle: 'Reading the Rock Record',
                icon: '🔍',
                objective: 'Recognize knappable stone (flint, chert, obsidian) and appropriate hammerstones (basalt, quartzite).',
                details: [
                    'Search riverbeds, exposed cliffs, and dry washes for stone deposits.',
                    'Strike candidate stones with a hammerstone — listen for a clear ring (not a dull thud).',
                    'Look for conchoidal (shell-like) fracture patterns on broken surfaces.',
                    'Flint/chert nodules form inside limestone — search chalk cliffs and quarries.',
                    'Obsidian forms from rapidly cooled lava — found in volcanic regions.',
                    'Hammerstones must be harder than the stone you intend to shape.'
                ],
                resources: [
                    { name: 'Hammerstone (Basalt)', value: '1-2 kg' },
                    { name: 'Flint/Chert Nodules', value: '3-5 fist-sized' },
                    { name: 'Collection Bag', value: '1 unit' }
                ],
                techniques: ['Sound Testing', 'Fracture Pattern Recognition', 'Stone Classification'],
                outputs: ['Quality Stone Supply', 'Tool-making Kit'],
                unlocks: ['Bifacial Tools', 'Fire Starting'],
                dependencies: []
            },
            {
                level: 2,
                title: 'Bifacial Tools & Axes',
                subtitle: 'Two-Faced Mastery',
                icon: '🪓',
                objective: 'Create symmetrical hand axes and hafted stone tools with sharp edges on both faces.',
                details: [
                    'Select a flat nodule or split a larger piece with a direct percussion strike.',
                    'Strike around the perimeter to remove large flakes and establish a biconvex shape.',
                    'Thin the tool by removing flakes from alternating sides (bifacial reduction).',
                    'Refine the edge with pressure flaking using an antler or hard wood point.',
                    'Haft the finished blade into a wooden handle using pine resin glue and cordage.',
                    'Test the axe by chopping a green branch — the edge should hold without chipping.'
                ],
                resources: [
                    { name: 'Flint Core', value: '1.2 kg' },
                    { name: 'Antler Pressure Flaker', value: '15 cm' },
                    { name: 'Hardwood Handle', value: '40 cm' },
                    { name: 'Pine Resin + Charcoal', value: '50 g' }
                ],
                techniques: ['Direct Percussion', 'Bifacial Reduction', 'Pressure Flaking', 'Hafting'],
                outputs: ['Hand Axe', 'Hafted Cutting Tool'],
                unlocks: ['Timber Harvesting', 'Specialized Tool Kits'],
                dependencies: ['Stone Identification S1', 'Fiber Gathering S1 (Cordage)']
            },
            {
                level: 3,
                title: 'Specialized Tool Kits',
                subtitle: 'Form Follows Function',
                icon: '🔧',
                objective: 'Produce purpose-specific stone tools: scrapers, burins, drills, and projectile points.',
                details: [
                    'End scrapers: thick, steep-edged for processing hides and wood.',
                    'Side scrapers: elongated edge for flattening and smoothing surfaces.',
                    'Burins: chisel-edged for engraving bone, antler, and wood carving.',
                    'Drills: narrow pointed tip for piercing holes in shell, bone, and stone.',
                    'Projectile points: thin, symmetrical, with notches or stems for hafting.',
                    'Each tool requires specific core preparation and flaking strategy.'
                ],
                resources: [
                    { name: 'Fine-grained Flint', value: '5 kg' },
                    { name: 'Antler Billet (Soft Hammer)', value: '20 cm' },
                    { name: 'Copper Pressure Flaker', value: 'If available (Stage 3+)' }
                ],
                techniques: ['Specialized Core Preparation', 'Notching', 'Micro-flaking'],
                outputs: ['Complete Tool Kit (10+ tools)', 'Hide Processing Set'],
                unlocks: ['Microliths', 'Composite Tools'],
                dependencies: ['Bifacial Tools S2']
            },
            {
                level: 4,
                title: 'Microliths & Composites',
                subtitle: 'Modular Stone Engineering',
                icon: '💎',
                objective: 'Create small, standardized stone inserts for composite tools and advanced weapons.',
                details: [
                    'Prepare small blade blanks (2-5cm) from high-quality fine-grained stone.',
                    'Use the microburin technique to snap blades into uniform geometric shapes.',
                    'Set microliths into wood or bone slots using pine resin adhesive.',
                    'Create serrated blades, sickles, and multi-point spear tips.',
                    'Composite tools are lighter, repairable, and use less raw material.',
                    'Trade microlith inserts as standardized components between craftsmen.'
                ],
                resources: [
                    { name: 'Premium Flint/Chert', value: '3 kg' },
                    { name: 'Bone/Wood Slots', value: '10+ pieces' },
                    { name: 'Pine Resin Adhesive', value: '100 g' }
                ],
                techniques: ['Microburin Technique', 'Blade Standardization', 'Composite Assembly'],
                outputs: ['Microlith Set', 'Composite Sickle/Spear'],
                unlocks: ['Quarry Operations', 'Mass Production'],
                dependencies: ['Specialized Tools S3']
            },
            {
                level: 5,
                title: 'Quarry Operations',
                subtitle: 'Industrial Stone Extraction',
                icon: '⛏️',
                objective: 'Establish a permanent stone quarry with organized extraction, processing, and distribution.',
                details: [
                    'Identify a large, high-quality deposit with accessible overburden.',
                    'Strip overburden (soil/weak rock) to expose the knappable layer.',
                    'Mine large cores using fire-setting (heat rock, quench with water to crack).',
                    'Set up a workshop area with dedicated knapping stations.',
                    'Sort and grade output: premium (tools), good (scrapers), waste (tempers).',
                    'Trade finished tools and raw cores with other settlements.'
                ],
                resources: [
                    { name: 'Mining Tools', value: 'Fire-setting equipment' },
                    { name: 'Workshop Shelter', value: '1 structure' },
                    { name: 'Transport Containers', value: 'For core distribution' }
                ],
                techniques: ['Fire-setting Mining', 'Overburden Removal', 'Quality Grading'],
                outputs: ['Quarry Operation', 'Tool Trade Network'],
                unlocks: ['Regional Trade', 'Craft Guilds'],
                dependencies: ['Microliths S4', 'Construction S4', 'Trade Networks']
            }
        ]
    },
    basketry: {
        id: 'basketry',
        name: 'Basketry & Weaving',
        icon: '🧺',
        description: 'Transform plant fibers into containers, textiles, and mechanical components through interlacing techniques.',
        stages: [
            {
                level: 1,
                title: 'Fiber Identification',
                subtitle: 'Reading the Plants',
                icon: '🌿',
                objective: 'Identify and harvest flexible, strong plant fibers suitable for cordage and weaving.',
                details: [
                    'Cedar and willow inner bark: peel long strips from fallen branches.',
                    'Tall dried grass and reeds: cut at the base, dry thoroughly before use.',
                    'Nettle stems: harvest in autumn, ret (soak) to separate fibers.',
                    'Yucca and agave leaves: crush and scrape to extract long fibers.',
                    'Plant vines: test flexibility — green, living vines are most pliable.',
                    'Avoid brittle, rotten, or insect-damaged material.'
                ],
                resources: [
                    { name: 'Cedar/Willow Bark', value: 'Long strips' },
                    { name: 'Dried Grass/Reeds', value: 'Large bundles' },
                    { name: 'Processing Area', value: 'Flat, shaded ground' }
                ],
                techniques: ['Fiber Identification', 'Bark Stripping', 'Retting'],
                outputs: ['Processed Fiber Supply', 'Cordage Material'],
                unlocks: ['Twined Baskets', 'Rope Making'],
                dependencies: []
            },
            {
                level: 2,
                title: 'Twined Baskets & Rope',
                subtitle: 'The First Containers',
                icon: '🪢',
                objective: 'Create water-resistant baskets and strong cordage using the reverse-wrap (twining) technique.',
                details: [
                    'Soak bark strips in water for 1-2 hours to increase flexibility.',
                    'Start with two fiber bundles: twist them in opposite directions.',
                    'Add new fibers by overlapping ends and twisting into existing cord.',
                    'For baskets: set up vertical stakes, weave horizontal wefts around them.',
                    'Use the twining technique: twist each weft around the next stake.',
                    'Test cordage strength: aim for 5kg minimum breaking load.'
                ],
                resources: [
                    { name: 'Soaked Bark Strips', value: '50+ strips' },
                    { name: 'Basket Stakes', value: '12-20 wooden pegs' },
                    { name: 'Water Container', value: 'For soaking' }
                ],
                techniques: ['Reverse-Wrap Cordage', 'Twined Weaving', 'Basket Foundation'],
                outputs: ['Twined Basket', 'Strong Cordage (5kg+)'],
                unlocks: ['Fine Weaving', 'Tripod Construction'],
                dependencies: ['Fiber Identification S1']
            },
            {
                level: 3,
                title: 'Fine Weaving & Textiles',
                subtitle: 'Cloth from the Earth',
                icon: '🧵',
                objective: 'Weave fine textiles for clothing, blankets, and shelter coverings.',
                details: [
                    'Process nettle or milkweed fibers: ret, beat, and hack until fluffy.',
                    'Spin fibers into fine thread using a drop spindle or hand rolling.',
                    'Set up a warp-weighted loom: hang vertical threads with stone weights.',
                    'Weave the weft thread over-and-under each warp thread.',
                    'Pack rows tightly with a wooden sword (beater) for dense cloth.',
                    'Dye with natural materials: walnut hulls (brown), berries (purple), clay (red).'
                ],
                resources: [
                    { name: 'Processed Nettle Fibers', value: '2 kg' },
                    { name: 'Drop Spindle', value: '1 unit' },
                    { name: 'Loom Weights (Stones)', value: '20-30 pieces' }
                ],
                techniques: ['Fiber Spinning', 'Warp-weighted Loom', 'Natural Dyeing'],
                outputs: ['Woven Textile (1m²)', 'Clothing Material'],
                unlocks: ['Structural Cordage', 'Shelter Covers'],
                dependencies: ['Twined Baskets S2']
            },
            {
                level: 4,
                title: 'Structural Cordage',
                subtitle: 'Engineering Rope',
                icon: '⛓️',
                objective: 'Produce heavy-duty rope and cable for construction, rigging, and machinery.',
                details: [
                    'Layer 3+ fiber bundles and twist them into a thick initial strand.',
                    'Use a rope-making walk (ropewalk): 20m+ straight path for long cables.',
                    'Combine 3 strands into a hawser-lay rope: twist each strand, then twist strands together.',
                    'Target breaking strength: 100kg+ for construction applications.',
                    'Waterproof with pine resin or animal fat for outdoor use.',
                    'Test every batch: hang known weights and record breaking point.'
                ],
                resources: [
                    { name: 'Bulk Fiber Supply', value: '10+ kg' },
                    { name: 'Ropewalk Area', value: '20m straight' },
                    { name: 'Waterproofing (Resin)', value: '500 g' }
                ],
                techniques: ['Hawser-lay Rope', 'Ropewalk Production', 'Strength Testing'],
                outputs: ['Construction Cable (100kg+)', 'Waterproof Rigging'],
                unlocks: ['Mechanical Components', 'Suspension Bridges'],
                dependencies: ['Fine Weaving S3', 'Well Drilling S2 (Heavy Rope)']
            },
            {
                level: 5,
                title: 'Mechanical Components',
                subtitle: 'Fiber Meets Engineering',
                icon: '⚙️',
                objective: 'Create belting, gaskets, seals, and filters from woven and treated fibers.',
                details: [
                    'Weave flat belts for power transmission between rotating shafts.',
                    'Form gaskets from layered, resin-coated cloth for steam engines.',
                    'Create oil seals from tightly wound and compressed cordage.',
                    'Weave fine mesh filters for water purification and metal casting.',
                    'Laminate cloth with resin for lightweight, waterproof panels.',
                    'Develop specialized weaves: herringbone for strength, twill for flexibility.'
                ],
                resources: [
                    { name: 'Fine Thread', value: '5 kg' },
                    { name: 'Pine Resin', value: '1 kg' },
                    { name: 'Weaving Loom', value: '1 unit' }
                ],
                techniques: ['Belt Weaving', 'Gasket Formation', 'Cloth Lamination'],
                outputs: ['Power Transmission Belts', 'Seals & Gaskets'],
                unlocks: ['Steam Engine', 'Generator Components'],
                dependencies: ['Structural Cordage S4', 'Water Wheel S4']
            }
        ]
    },
    construction: {
        id: 'construction',
        name: 'Construction & Shelter',
        icon: '🏠',
        description: 'Build weatherproof shelters, structural frameworks, and permanent buildings using natural materials.',
        stages: [
            {
                level: 1,
                title: 'Natural Shelter',
                subtitle: 'Immediate Protection',
                icon: '🏕️',
                objective: 'Build immediate weather protection using lean-tos, debris huts, and natural windbreaks.',
                details: [
                    'Find a sturdy support (tree fork, rock, or Y-stick) at waist height.',
                    'Rest a 2-3m ridgepole against the support at a 30-45 degree angle.',
                    'Lean rib branches along both sides to form an A-frame skeleton.',
                    'Pile insulation (leaves, grass, bark) 60cm thick on all sides.',
                    'Create a thick debris bedding floor — insulation from cold ground is critical.',
                    'Build a fire reflector wall opposite the entrance using logs or rocks.'
                ],
                resources: [
                    { name: 'Ridgepole', value: '2-3m sturdy branch' },
                    { name: 'Rib Branches', value: '15-20 pieces' },
                    { name: 'Insulation Material', value: '3x body volume' }
                ],
                techniques: ['Lean-to Construction', 'Debris Insulation', 'Fire Reflector'],
                outputs: ['Weatherproof Shelter', 'Insulated Bedding'],
                unlocks: ['Overnight Survival', 'Base Camp'],
                dependencies: []
            },
            {
                level: 2,
                title: 'Tripod Structures',
                subtitle: 'Standing Frames',
                icon: '🏗️',
                objective: 'Build stable tripod frames for well drilling, drying racks, and elevated shelters.',
                details: [
                    'Select three straight poles (3-5m) of similar diameter.',
                    'Lash poles together at the top using the square lashing technique.',
                    'Spread pole bases into a triangle — wider base = more stability.',
                    'Test by hanging weight: aim for 50kg+ before trusting the structure.',
                    'Add cross-bracing between legs for lateral stability.',
                    'Use for well drilling, meat drying, or as a shelter frame with covering.'
                ],
                resources: [
                    { name: 'Straight Poles', value: '3 x 3-5m' },
                    { name: 'Lashing Rope', value: '15 m' },
                    { name: 'Cross-brace Material', value: '2-3 pieces' }
                ],
                techniques: ['Tripod Lashing', 'Square Lashing', 'Load Testing'],
                outputs: ['Stable Tripod Frame', 'Elevated Work Platform'],
                unlocks: ['Well Drilling', 'Drying Racks'],
                dependencies: ['Fiber Gathering S1 (Rope)', 'Natural Shelter S1']
            },
            {
                level: 3,
                title: 'Wattle & Daub',
                subtitle: 'Permanent Walls',
                icon: '🧱',
                objective: 'Construct solid walls using woven lattice (wattle) packed with clay mixture (daub).',
                details: [
                    'Set vertical posts (uprights) 30cm apart in a trench or directly in ground.',
                    'Weave flexible saplings horizontally between uprights (over-under pattern).',
                    'Mix daub: 3 parts clay, 1 part sand, 1 part chopped straw/hair.',
                    'Press daub into the wattle from both sides, 10-15cm thick.',
                    'Smooth the surface with a wet hand or flat stone.',
                    'Allow to dry for 1-2 weeks — apply daub mixture to seal cracks.'
                ],
                resources: [
                    { name: 'Vertical Posts', value: '10+ pieces' },
                    { name: 'Weaving Saplings', value: '50+ flexible branches' },
                    { name: 'Clay/Sand/Straw Mix', value: '200 kg' }
                ],
                techniques: ['Wattle Weaving', 'Daub Mixing', 'Wall Finishing'],
                outputs: ['Permanent Wall Structure', 'Weatherproof Building'],
                unlocks: ['Stone Foundations', 'Multi-room Buildings'],
                dependencies: ['Tripod Structures S2', 'Clay Processing S1']
            },
            {
                level: 4,
                title: 'Stone Foundations',
                subtitle: 'Building to Last',
                icon: '🪨',
                objective: 'Lay stone foundations that support heavy structures and resist frost heave.',
                details: [
                    'Excavate a trench 30-50cm deep (below frost line in cold climates).',
                    'Fill the trench base with large, flat stones — no mortar needed (dry stack).',
                    'Build up courses (layers), staggering joints like brickwork.',
                    'Fill gaps with smaller stones (hearting) — no single stone should touch just one below it.',
                    'Level each course using a simple water level (clear tube filled with water).',
                    'Cap with a sill plate (treated timber) to begin timber-frame construction above.'
                ],
                resources: [
                    { name: 'Foundation Stones', value: '500+ kg' },
                    { name: 'Hearting (Small Stones)', value: '100 kg' },
                    { name: 'Sill Plate Timber', value: '1 treated beam' }
                ],
                techniques: ['Dry Stack Masonry', 'Course Leveling', 'Hearting Placement'],
                outputs: ['Stone Foundation', 'Permanent Building Site'],
                unlocks: ['Hydraulic Architecture', 'Multi-story Buildings'],
                dependencies: ['Wattle & Daub S3', 'Stone Tools S3']
            },
            {
                level: 5,
                title: 'Hydraulic Architecture',
                subtitle: 'Building with Water',
                icon: '🏛️',
                objective: 'Construct water-powered mills, aqueducts, dams, and water-integrated buildings.',
                details: [
                    'Design buildings that incorporate water flow: mills, forges, and workshops.',
                    'Build water wheel housing with proper clearance (10cm minimum).',
                    'Construct sluice gates from timber and iron fittings for flow control.',
                    'Integrate tailrace channels to return water to the stream after use.',
                    'Build flood-resistant foundations: stone piers with timber floors above flood line.',
                    'Install water-powered machinery: trip hammers, bellows, grindstones.'
                ],
                resources: [
                    { name: 'Timber Framing', value: 'Large beams' },
                    { name: 'Iron Fittings', value: 'Nails, brackets, hinges' },
                    { name: 'Water Wheel & Machinery', value: 'Complete system' }
                ],
                techniques: ['Mill Construction', 'Sluice Gate Engineering', 'Flood-resistant Design'],
                outputs: ['Water-powered Mill', 'Hydraulic Workshop'],
                unlocks: ['Mass Production', 'Industrial Complex'],
                dependencies: ['Stone Foundations S4', 'Water Wheel S4', 'Iron Working S3']
            }
        ]
    }
};

let userBlueprints = JSON.parse(localStorage.getItem('primitive_user_blueprints') || '[]');
let blueprintSupplements = JSON.parse(localStorage.getItem('primitive_blueprint_supplements') || '{}');
let deletedCoreBlueprints = JSON.parse(localStorage.getItem('primitive_deleted_core_blueprints') || '[]');
let coreBlueprintOverrides = JSON.parse(localStorage.getItem('primitive_core_overrides') || '{}');

// --- Initialization & Auth ---

function init() {
    const isAuth = localStorage.getItem('forge_authenticated') === 'true';
    if (isAuth) {
        showMainApp();
    } else {
        document.getElementById('passphrase-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleLogin();
        });
    }
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
    const originalText = btn.innerHTML;

    btn.disabled = true;
    btn.innerHTML = `
        <svg class="spinner" width="20" height="20" viewBox="0 0 50 50" style="animation: rotate 2s linear infinite;">
            <circle cx="25" cy="25" r="20" fill="none" stroke="#4285F4" stroke-width="5"></circle>
        </svg>
        Connecting...
    `;

    // Simulate OAuth Popup & Success
    setTimeout(() => {
        localStorage.setItem('forge_authenticated', 'true');
        localStorage.setItem('forge_user_email', 'pioneer@gmail.com');
        showMainApp();
    }, 1500);
}

function handleLogout() {
    localStorage.removeItem('forge_authenticated');
    localStorage.removeItem('forge_user_email');
    window.location.reload();
}

function showMainApp() {
    document.getElementById('auth-screen').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('auth-screen').style.display = 'none';
        document.getElementById('app').classList.remove('auth-hidden');
        renderSidebar();
    }, 500);
}

function getAllBlueprints() {
    const activeCore = blueprints.map(bp => {
        // Apply overrides if they exist
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

    // Add Technology Roadmaps button
    const roadmapsBtn = document.createElement('button');
    roadmapsBtn.className = 'add-blueprint-btn';
    roadmapsBtn.style.background = '#1f6feb';
    roadmapsBtn.style.marginBottom = '1rem';
    roadmapsBtn.innerHTML = '<span>🗺️</span> Technology Roadmaps';
    roadmapsBtn.onclick = () => renderRoadmapView();
    navContainer.appendChild(roadmapsBtn);

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
        };

        const stageList = document.createElement('ul');
        stageList.className = 'stage-items';

        const stageBlueprints = allBlueprints.filter(bp => bp.stage == id);
        stageBlueprints.forEach(bp => {
            const li = document.createElement('li');
            li.innerHTML = `${renderIcon(bp.icon)} ${bp.name}`;
            li.onclick = (e) => {
                e.stopPropagation();
                selectBlueprint(bp.id);
            };
            stageList.appendChild(li);
        });

        stageGroup.appendChild(stageHeader);
        stageGroup.appendChild(stageList);
        navContainer.appendChild(stageGroup);
    });

    // Update count in hero
    const statEl = document.querySelector('.stat span');
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

    view.innerHTML = `
        <div class="category-hub">
            <header class="hub-header" style="border-left: 8px solid var(--stage-${stageId})">
                <div class="blueprint-category">Technological Advancement</div>
                <div style="display:flex; align-items:center; gap:1rem; margin-top:0.5rem;">
                    <span style="font-size: 3rem;">${stage.icon}</span>
                    <div>
                        <h2 style="margin:0">Stage ${stageId}: ${stage.name}</h2>
                        <div style="color: var(--accent-blue); font-family: 'JetBrains Mono'; font-size: 0.9rem;">Period: ${stage.period}</div>
                    </div>
                </div>
                <p style="margin-top: 1.5rem; max-width: 600px;">${stage.description}</p>
            </header>

            <div class="material-selection-grid" style="margin-top: 3rem;">
                ${stageBlueprints.map(bp => `
                    <button class="hub-card" onclick="selectBlueprint('${bp.id}')" style="border-bottom: 3px solid var(--stage-${stageId})">
                        <span class="hub-icon">${renderIcon(bp.icon)}</span>
                        <span class="hub-name">${bp.name}</span>
                        <span style="font-size: 0.6rem; color: var(--text-secondary); margin-top: 0.4rem; text-transform: uppercase;">REF: ${bp.id.toUpperCase()}</span>
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

function renderRoadmapView() {
    updateActiveSidebar('Technology Roadmaps');
    document.getElementById('welcome-view').classList.remove('active');
    const view = document.getElementById('blueprint-view');
    view.classList.add('active');

    view.innerHTML = `
        <div class="roadmap-overview">
            <header class="roadmap-main-header">
                <div class="blueprint-category">Civilization Progression</div>
                <h2 style="font-size: 2.5rem; margin: 0.5rem 0; background: linear-gradient(to right, var(--accent-blue), #9d50bb); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;">🗺️ Technology Roadmaps</h2>
                <p style="color: var(--text-secondary); font-size: 1.1rem;">Five distinct craft paths, each progressing through 5 stages of technological advancement.</p>
            </header>

            <div class="roadmap-grid">
                ${Object.values(CRAFT_ROADMAPS).map(craft => `
                    <button class="roadmap-card" onclick="renderRoadmapDetail('${craft.id}')">
                        <div class="roadmap-card-header">
                            <span class="roadmap-icon">${craft.icon}</span>
                            <h3>${craft.name}</h3>
                        </div>
                        <p class="roadmap-description">${craft.description}</p>
                        <div class="roadmap-stages-preview">
                            ${craft.stages.map((s, i) => `
                                <div class="stage-dot" style="background: var(--stage-${s.level})">
                                    <span>${s.icon}</span>
                                    <small>${s.level}</small>
                                </div>
                                ${i < craft.stages.length - 1 ? '<div class="stage-connector"></div>' : ''}
                            `).join('')}
                        </div>
                        <div class="roadmap-card-footer">
                            <span>Click to explore →</span>
                        </div>
                    </button>
                `).join('')}
            </div>

            <div class="dependencies-section">
                <h3 style="font-family: 'Outfit', sans-serif; font-size: 1.5rem; margin-bottom: 1.5rem; color: var(--text-primary);">🔗 Cross-Craft Dependencies</h3>
                <p style="color: var(--text-secondary); margin-bottom: 2rem;">Understanding how crafts interconnect and rely on each other's outputs.</p>
                
                <div class="dependency-flows">
                    <div class="dependency-flow">
                        <h4>🏗️ Well Drilling Pipeline</h4>
                        <div class="flow-diagram">
                            <span class="flow-node">Basketry S2<br><small>(Rope)</small></span>
                            <span class="flow-arrow">→</span>
                            <span class="flow-node">Knapping S1-2<br><small>(Digging Tools)</small></span>
                            <span class="flow-arrow">→</span>
                            <span class="flow-node flow-complete">Water S2<br><small>(Well Construction)</small></span>
                        </div>
                    </div>

                    <div class="dependency-flow">
                        <h4>🔥 Pottery Kiln Pipeline</h4>
                        <div class="flow-diagram">
                            <span class="flow-node">Construction S2<br><small>(Wattle & Daub)</small></span>
                            <span class="flow-arrow">→</span>
                            <span class="flow-node">Pottery S1-2<br><small>(Clay & Firing)</small></span>
                            <span class="flow-arrow">→</span>
                            <span class="flow-node flow-complete">Pottery S3<br><small>(Kiln Build)</small></span>
                        </div>
                    </div>

                    <div class="dependency-flow">
                        <h4>🌱 Irrigation Pipeline</h4>
                        <div class="flow-diagram">
                            <span class="flow-node">Knapping S2<br><small>(Stone Hoe)</small></span>
                            <span class="flow-arrow">→</span>
                            <span class="flow-node">Water S2<br><small>(Well Access)</small></span>
                            <span class="flow-arrow">→</span>
                            <span class="flow-node flow-complete">Water S3<br><small>(Zai Pits)</small></span>
                        </div>
                    </div>

                    <div class="dependency-flow">
                        <h4>⚒️ Metal Smelting Pipeline</h4>
                        <div class="flow-diagram">
                            <span class="flow-node">Pottery S3-4<br><small>(Kiln & Refractory)</small></span>
                            <span class="flow-arrow">→</span>
                            <span class="flow-node">Construction S3<br><small>(Furnace Base)</small></span>
                            <span class="flow-arrow">→</span>
                            <span class="flow-node flow-complete">Smelting S3<br><small>(Metal Extraction)</small></span>
                        </div>
                    </div>

                    <div class="dependency-flow">
                        <h4>🎡 Water Wheel Pipeline</h4>
                        <div class="flow-diagram">
                            <span class="flow-node">Water S4<br><small>(Aqueduct)</small></span>
                            <span class="flow-arrow">→</span>
                            <span class="flow-node">Metal S3<br><small>(Iron Axle)</small></span>
                            <span class="flow-arrow">→</span>
                            <span class="flow-node">Construction S4<br><small>(Mill Housing)</small></span>
                            <span class="flow-arrow">→</span>
                            <span class="flow-node flow-complete">Basketry S4-5<br><small>(Power Belts)</small></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderRoadmapDetail(craftId) {
    const craft = CRAFT_ROADMAPS[craftId];
    if (!craft) return;

    updateActiveSidebar(craft.name);
    document.getElementById('welcome-view').classList.remove('active');
    const view = document.getElementById('blueprint-view');
    view.classList.add('active');

    const stageLevelNames = ['Beginner', 'Apprentice', 'Journeyman', 'Master', 'Expert'];

    view.innerHTML = `
        <div class="roadmap-detail">
            <button class="back-btn" onclick="renderRoadmapView()" style="margin-bottom: 2rem;">← Back to Roadmaps</button>
            
            <header class="roadmap-detail-header">
                <span style="font-size: 4rem;">${craft.icon}</span>
                <h2 style="font-size: 2.5rem; margin: 0.5rem 0;">${craft.name}</h2>
                <p style="color: var(--text-secondary); font-size: 1.1rem; max-width: 700px;">${craft.description}</p>
            </header>

            <div class="roadmap-timeline">
                ${craft.stages.map((stage, idx) => `
                    <div class="timeline-stage" style="border-left: 4px solid var(--stage-${stage.level})">
                        <div class="stage-header-row">
                            <div class="stage-level-badge">
                                <span class="level-number">${stage.level}</span>
                                <span class="level-name">${stageLevelNames[stage.level - 1]}</span>
                            </div>
                            <span class="stage-icon-large">${stage.icon}</span>
                        </div>
                        
                        <h3 class="stage-title">${stage.title}</h3>
                        <p class="stage-subtitle">${stage.subtitle}</p>

                        <div class="stage-objective">
                            <h4>The Objective</h4>
                            <p>${stage.objective}</p>
                        </div>

                        <div class="stage-section">
                            <h4>📋 Key Steps</h4>
                            <ul class="checklist">
                                ${stage.details.map(d => `<li>${d}</li>`).join('')}
                            </ul>
                        </div>

                        <div class="stage-section">
                            <h4>📦 Required Resources</h4>
                            <div class="resource-grid">
                                ${stage.resources.map(r => `
                                    <div class="resource-card">
                                        <span class="resource-name">${r.name}</span>
                                        <span class="resource-value">${r.value}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <div class="stage-section">
                            <h4>🎯 Techniques to Master</h4>
                            <div class="technique-tags">
                                ${stage.techniques.map(t => `<span class="technique-tag">${t}</span>`).join('')}
                            </div>
                        </div>

                        <div class="stage-section">
                            <h4>✅ Outputs</h4>
                            <ul class="checklist">
                                ${stage.outputs.map(o => `<li>${o}</li>`).join('')}
                            </ul>
                        </div>

                        <div class="stage-section">
                            <h4>🔓 Unlocks</h4>
                            <div class="unlock-tags">
                                ${stage.unlocks.map(u => `<span class="unlock-tag">${u}</span>`).join('')}
                            </div>
                        </div>

                        ${stage.dependencies.length > 0 ? `
                            <div class="stage-section">
                                <h4>⚠️ Dependencies</h4>
                                <div class="dependency-tags">
                                    ${stage.dependencies.map(d => `<span class="dependency-tag">${d}</span>`).join('')}
                                </div>
                            </div>
                        ` : `
                            <div class="stage-section starter-note">
                                <div class="starter-badge">🌟 Starter Craft — No prerequisites required!</div>
                            </div>
                        `}
                    </div>
                    ${idx < craft.stages.length - 1 ? '<div class="stage-down-arrow">↓</div>' : ''}
                `).join('')}
            </div>
        </div>
    `;
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
    const allRequirements = [...bp.requirements, ...supplements.requirements];
    const allSteps = [...bp.steps, ...supplements.steps];

    updateActiveSidebar(bp.name);

    document.getElementById('welcome-view').classList.remove('active');
    const view = document.getElementById('blueprint-view');
    view.classList.add('active');

    const youtubeId = bp.videoUrl.split('/').pop();
    const embedUrl = getYoutubeEmbedUrl(bp.videoUrl);

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
                    <p>${bp.objective || 'Primary technical goal of the craft.'}</p>
                </div>
                <div class="summary-item">
                    <h4>The Evolution</h4>
                    <p>${bp.evolution || 'Connecting to the next stage of advancement.'}</p>
                </div>
            </div>

            <div class="video-section">
                <div class="video-header">
                    <h4>Video Guide & Documentation</h4>
                    <a href="https://www.youtube.com/watch?v=${youtubeId}" target="_blank" class="video-mirror-link">
                        Watch on YouTube ↗
                    </a>
                </div>
                <div class="video-container">
                    <iframe width="100%" height="450" src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="troubleshoot-hint">
                    🌐 <b>Field Diagnostic:</b> If the video is unavailable, check if you are using <b>http://localhost</b> and ensure your browser isn't stripping "Referrer" headers. You can always use the <b>"Watch on YouTube ↗"</b> mirror link above for 100% reliability.
                </div>
                ${renderFeedbackControls(bp.id)}
            </div>
            
            <div class="blueprint-grid">
                <div class="specs-section">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
                        <h4 style="margin:0">Technical Requirements</h4>
                        <button class="contribute-specs-btn" onclick="openContributionModal('${bp.id}')">🛠️ Supplement Specs</button>
                    </div>
                    <div class="requirement-list">
                        ${allRequirements.map(req => `
                            <div class="req-item">
                                <span class="req-name">${req.name}</span>
                                <span class="req-value">${req.value}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="specs-section">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
                        <h4 style="margin:0">Construction Steps</h4>
                    </div>
                    <div class="steps-list">
                        ${allSteps.map(step => `
                            <div class="step-card">
                                <div class="step-item">${step.text}</div>
                                <div class="step-sketch">
                                    <img src="${step.sketch}" alt="Manual Guide">
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            ${renderCommunitySection(bp.id)}
        </div>
    `;
}

function selectMaterial(id) {
    const mat = materials.find(m => m.id === id);
    if (!mat) return;

    document.getElementById('welcome-view').classList.remove('active');
    const view = document.getElementById('blueprint-view');
    view.classList.add('active');

    const youtubeId = mat.videoUrl.split('/').pop();
    const embedUrl = getYoutubeEmbedUrl(mat.videoUrl);

    view.innerHTML = `
        <div class="blueprint-card material-discovery">
            <div class="blueprint-header">
                <div class="blueprint-title">
                    <div class="blueprint-category">Encyclopedia / ${mat.category}</div>
                    <h2>${mat.name} Discovery Card</h2>
                </div>
                <div class="discovery-actions">
                    <button class="back-btn" onclick="renderCategoryHub('${mat.category}')">← Back to ${mat.category}</button>
                    <div class="blueprint-id">CAT: MAT-${mat.id.toUpperCase()}</div>
                </div>
            </div>

            <div class="video-section">
                <div class="video-header">
                    <h4>Discovery & Identification Guide</h4>
                    <a href="https://www.youtube.com/watch?v=${youtubeId}" target="_blank" class="video-mirror-link">
                        Watch on YouTube ↗
                    </a>
                </div>
                <div class="video-container">
                    <iframe width="100%" height="450" src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="troubleshoot-hint">
                    🌐 <b>Field Diagnostic:</b> If the video is unavailable, check if you are using <b>http://localhost</b> and ensure your browser isn't stripping "Referrer" headers. You can always use the <b>"Watch on YouTube ↗"</b> mirror link above for 100% reliability.
                </div>
                ${renderFeedbackControls(mat.id)}
            </div>

            <div class="material-grid-detailed">
                <div class="discovery-sketch-large">
                    <img src="${mat.sketch}" alt="${mat.name} Habitat">
                    <div class="sketch-label">HABITAT SURVEY: ${mat.id.toUpperCase()}</div>
                </div>

                <div class="discovery-details">
                    <div class="discovery-group">
                        <div class="habitat-tag">Habitat & Ranging</div>
                        <p class="discovery-text">${mat.habitat}</p>
                    </div>

                    <div class="discovery-group">
                        <div class="habitat-tag property">Material Properties</div>
                        <p class="discovery-text">${mat.properties}</p>
                    </div>

                    <div class="discovery-group">
                        <div class="habitat-tag utility">Crafting Utility</div>
                        <div class="uses-tags">
                            ${mat.commonUses.map(use => `<span class="use-tag">${use}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>

            ${renderCommunitySection(mat.id)}
        </div>
    `;
}

function renderFeedbackControls(id) {
    const feedback = getFeedback(id);
    return `
        <div class="feedback-controls" id="feedback-${id}">
            <button class="feedback-btn bad ${feedback === 'bad' ? 'active' : ''}" onclick="saveFeedback('${id}', 'bad')">
                ❌ This video is bad, I didn't understand nothing
            </button>
            <button class="feedback-btn great ${feedback === 'great' ? 'active' : ''}" onclick="saveFeedback('${id}', 'great')">
                ✅ This is a great video
            </button>
        </div>
        <p class="training-note">Your feedback trains the guide to select better educational references.</p>
    `;
}

function renderCommunitySection(id) {
    const communityGalleries = JSON.parse(localStorage.getItem('primitive_community_proof') || '{}');
    const uploads = communityGalleries[id] || [];

    return `
        <div class="community-section">
            <div class="community-header">
                <h3>Community Proof & Progress</h3>
                <button class="upload-btn" onclick="openUploadModal('${id}')">
                    📤 Upload Your Craft / Discovery
                </button>
            </div>
            <div class="community-gallery" id="gallery-${id}">
                ${uploads.length === 0 ?
            `<p class="empty-gallery">No community proof yet. Be the first to verify this craft!</p>` :
            uploads.map(up => `
                        <div class="community-item">
                            ${up.type === 'image' ? `<img src="${up.url}" alt="Community Proof">` : `<video src="${up.url}" controls></video>`}
                            <div class="item-overlay">By Discovery Pioneer</div>
                        </div>
                    `).join('')
        }
            </div>
        </div>
    `;
}

function openUploadModal(id) {
    const modalHtml = `
        <div class="modal-overlay" id="upload-modal">
            <div class="modal-content">
                <h3>Submit Your Progress</h3>
                <p>Upload a photo or video of your success to inspire the brotherhood.</p>
                <div class="upload-zone" onclick="document.getElementById('file-input').click()">
                    <span>Drag and drop or click to select files</span>
                    <input type="file" id="file-input" style="display:none" onchange="handleFileUpload(event, '${id}')">
                </div>
                <button class="close-modal" onclick="closeModal()">Cancel</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function handleFileUpload(event, id) {
    const file = event.target.files[0];
    if (!file) return;

    // Simulate upload progress
    const modalContent = document.querySelector('.modal-content');
    modalContent.innerHTML = `
        <h3>Uploading Success...</h3>
        <div class="progress-bar-container">
            <div class="progress-fill"></div>
        </div>
        <p>Your contribution is being added to the database.</p>
    `;

    setTimeout(() => {
        const communityGalleries = JSON.parse(localStorage.getItem('primitive_community_proof') || '{}');
        if (!communityGalleries[id]) communityGalleries[id] = [];

        // Mocking the stored URL for simulation
        communityGalleries[id].push({
            url: URL.createObjectURL(file), // This is temporary for the session in a real app
            type: file.type.startsWith('video') ? 'video' : 'image'
        });

        localStorage.setItem('primitive_community_proof', JSON.stringify(communityGalleries));
        closeModal();

        // Re-render current detail
        const currentBlueprint = getAllBlueprints().find(bp => bp.id === id);
        const currentMaterial = materials.find(mat => mat.id === id);
        if (currentBlueprint) selectBlueprint(id);
        else if (currentMaterial) selectMaterial(id);
    }, 2000);
}

function saveFeedback(id, rating) {
    const feedbackData = JSON.parse(localStorage.getItem('primitive_feedback') || '{}');
    feedbackData[id] = rating;
    localStorage.setItem('primitive_feedback', JSON.stringify(feedbackData));

    const container = document.getElementById(`feedback-${id}`);
    if (container) {
        container.querySelectorAll('.feedback-btn').forEach(btn => btn.classList.remove('active'));
        const activeBtn = container.querySelector(`.${rating}`);
        if (activeBtn) activeBtn.classList.add('active');
    }
}

function getFeedback(id) {
    const feedbackData = JSON.parse(localStorage.getItem('primitive_feedback') || '{}');
    return feedbackData[id] || null;
}

function updateActiveSidebar(name) {
    document.querySelectorAll('.recipe-nav li, .clickable-cat').forEach(el => {
        el.classList.remove('active');
        if (el.innerText.includes(name)) el.classList.add('active');
    });
}

function closeModal() {
    const modal = document.getElementById('upload-modal');
    if (modal) modal.remove();
}

function openAddCraftModal() {
    const modalHtml = `
        <div class="modal-overlay" id="craft-modal">
            <div class="modal-content-large">
                <div class="craft-form">
                    <h3>📜 Record New Blueprint</h3>
                    
                    <div class="form-group">
                        <label>Blueprint Name</label>
                        <input type="text" id="new-bp-name" placeholder="e.g. Bone Needle">
                    </div>

                    <div class="form-row-multi">
                        <div class="form-group" style="flex: 2;">
                            <label>Technological Stage</label>
                            <select id="new-bp-stage">
                                <option value="1">Stage 1: Stone & Fire</option>
                                <option value="2">Stage 2: Wood & Bushcraft</option>
                                <option value="3">Stage 3: Iron & Steel</option>
                                <option value="4">Stage 4: Carpentry & Machines</option>
                                <option value="5">Stage 5: Electricity & Circuits</option>
                            </select>
                        </div>
                        <div class="form-group" style="flex: 1;">
                            <label>Icon (Emoji or Upload)</label>
                            <div style="display:flex; gap:0.5rem;">
                                <input type="text" id="new-bp-icon" value="🛶" style="flex:1">
                                <input type="file" id="icon-upload" style="display:none" onchange="handleIconUpload(event)">
                                <button type="button" class="contribute-specs-btn" onclick="document.getElementById('icon-upload').click()">🖼️</button>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label>YouTube Video ID or URL</label>
                        <input type="text" id="new-bp-video" placeholder="Video ID or full URL">
                    </div>

                    <div id="requirements-container">
                        <label style="display:block; margin-bottom: 0.5rem; color: var(--text-secondary); font-size: 0.85rem;">Technical Requirements</label>
                        <div class="form-row-multi">
                            <input type="text" placeholder="Material" class="req-name-in">
                            <input type="text" placeholder="Value (e.g. 5kg)" class="req-val-in">
                        </div>
                    </div>
                    <button class="add-row-btn" onclick="addRequirementRow()">+ Add Requirement</button>

                    <div id="steps-container">
                        <label style="display:block; margin-bottom: 0.5rem; color: var(--text-secondary); font-size: 0.85rem;">Construction Steps</label>
                        <div class="form-group">
                            <textarea placeholder="Step description..." class="step-text-in"></textarea>
                        </div>
                    </div>
                    <button class="add-row-btn" onclick="addStepRow()">+ Add Construction Step</button>

                    <div class="form-actions">
                        <button class="cancel-craft-btn" onclick="closeCraftModal()">Cancel</button>
                        <button class="save-craft-btn" onclick="saveNewCraft()">📜 Seal Blueprint</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function handleIconUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        document.getElementById('new-bp-icon').value = e.target.result;
    };
    reader.readAsDataURL(file);
}

function openContributionModal(id) {
    const modalHtml = `
        <div class="modal-overlay" id="contribution-modal">
            <div class="modal-content-large">
                <div class="craft-form">
                    <h3>🛠️ Supplement Technical Data</h3>
                    <p style="color:var(--text-secondary); margin-bottom:2rem; font-size:0.9rem;">Adding missing requirements or steps identified from the field video.</p>

                    <div id="contribute-requirements-container">
                        <label style="display:block; margin-bottom: 0.5rem; color: var(--text-secondary); font-size: 0.85rem;">New Technical Requirements</label>
                    </div>
                    <button class="add-row-btn" onclick="addRowSub('contribute-requirements-container')">+ Add Requirement</button>

                    <div id="contribute-steps-container">
                        <label style="display:block; margin-bottom: 0.5rem; color: var(--text-secondary); font-size: 0.85rem;">New Construction Steps</label>
                    </div>
                    <button class="add-row-btn" onclick="addStepSub('contribute-steps-container')">+ Add Construction Step</button>

                    <div class="form-actions">
                        <button class="cancel-craft-btn" onclick="document.getElementById('contribution-modal').remove()">Cancel</button>
                        <button class="save-craft-btn" onclick="saveContribution('${id}')">🛠️ Apply Supplements</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function addRowSub(containerId) {
    const container = document.getElementById(containerId);
    const row = document.createElement('div');
    row.className = 'form-row-multi';
    row.innerHTML = `
        <input type="text" placeholder="Material" class="req-name-in">
        <input type="text" placeholder="Value (e.g. 5kg)" class="req-val-in">
    `;
    container.appendChild(row);
}

function addStepSub(containerId) {
    const container = document.getElementById(containerId);
    const group = document.createElement('div');
    group.className = 'form-group';
    group.innerHTML = `<textarea placeholder="Step description..." class="step-text-in"></textarea>`;
    container.appendChild(group);
}

function saveContribution(id) {
    const requirements = Array.from(document.querySelectorAll('#contribute-requirements-container .form-row-multi')).map(row => ({
        name: row.querySelector('.req-name-in').value,
        value: row.querySelector('.req-val-in').value
    })).filter(r => r.name);

    const steps = Array.from(document.querySelectorAll('#contribute-steps-container textarea')).map(ta => ({
        text: ta.value,
        sketch: 'assets/sketch_mixing.svg'
    })).filter(s => s.text);

    if (!blueprintSupplements[id]) blueprintSupplements[id] = { requirements: [], steps: [] };

    blueprintSupplements[id].requirements.push(...requirements);
    blueprintSupplements[id].steps.push(...steps);

    localStorage.setItem('primitive_blueprint_supplements', JSON.stringify(blueprintSupplements));
    document.getElementById('contribution-modal').remove();
    selectBlueprint(id);
}

function addRequirementRow() {
    const container = document.getElementById('requirements-container');
    const row = document.createElement('div');
    row.className = 'form-row-multi';
    row.innerHTML = `
        <input type="text" placeholder="Material" class="req-name-in">
        <input type="text" placeholder="Value (e.g. 5kg)" class="req-val-in">
    `;
    container.appendChild(row);
}

function addStepRow() {
    const container = document.getElementById('steps-container');
    const group = document.createElement('div');
    group.className = 'form-group';
    group.innerHTML = `<textarea placeholder="Step description..." class="step-text-in"></textarea>`;
    container.appendChild(group);
}

function closeCraftModal() {
    const modal = document.getElementById('craft-modal');
    if (modal) modal.remove();
}

function saveNewCraft() {
    const name = document.getElementById('new-bp-name').value;
    const stage = document.getElementById('new-bp-stage').value;
    const icon = document.getElementById('new-bp-icon').value;
    const video = document.getElementById('new-bp-video').value;

    if (!name) return alert('Name is required');

    const requirements = Array.from(document.querySelectorAll('#requirements-container .form-row-multi')).map(row => ({
        name: row.querySelector('.req-name-in').value,
        value: row.querySelector('.req-val-in').value
    })).filter(r => r.name);

    const steps = Array.from(document.querySelectorAll('#steps-container textarea')).map(ta => ({
        text: ta.value,
        sketch: 'assets/sketch_mixing.svg'
    })).filter(s => s.text);

    const newCraft = {
        id: name.toLowerCase().replace(/\s+/g, '-'),
        name: name,
        stage: parseInt(stage),
        icon: icon || '📜',
        requirements: requirements,
        steps: steps,
        videoUrl: video.includes('embed') ? video : `https://www.youtube.com/embed/${video.split('v=')[1] || video}`
    };

    userBlueprints.push(newCraft);
    localStorage.setItem('primitive_user_blueprints', JSON.stringify(userBlueprints));

    closeCraftModal();
    renderSidebar();
    selectBlueprint(newCraft.id);
}

function showAdminPanel() {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('admin-view').classList.add('active');
    updateActiveSidebar('Admin');
    renderAdminPanel();
}

function renderAdminPanel() {
    const adminView = document.getElementById('admin-view');
    const allCore = blueprints.map(bp => coreBlueprintOverrides[bp.id] ? { ...bp, ...coreBlueprintOverrides[bp.id] } : bp);
    const allUser = userBlueprints;

    adminView.innerHTML = `
        <div class="blueprint-card admin-panel">
            <header class="admin-header">
                <div>
                    <div class="blueprint-category">Management Console</div>
                    <h2>Forge Administrator</h2>
                </div>
                <div class="blueprint-id">MODE: PRIVILEGED</div>
            </header>

            <div class="specs-section">
                <h4 style="margin-bottom: 2rem;">Master Inventory Control</h4>
                <p style="color: var(--text-secondary); margin-bottom: 2rem; font-size: 0.9rem;">
                    Edit or delete blueprints. Core blueprints can be hidden or overriden, while user-contributed blueprints are managed directly.
                </p>
                
                <div class="admin-list">
                    <h5 style="color: var(--accent-blue); margin-bottom: 1rem; text-transform: uppercase; font-size: 0.7rem; letter-spacing: 1px;">Core Repository</h5>
                    ${allCore.map(bp => {
        const isDeleted = deletedCoreBlueprints.includes(bp.id);
        return `
                            <div class="admin-item ${isDeleted ? 'deleted' : ''}">
                                <div class="admin-item-info">
                                    <span>${bp.icon}</span>
                                    <div>
                                        <div class="admin-item-name">${bp.name} ${isDeleted ? '<span style="color: #f85149;">(Hidden)</span>' : ''}</div>
                                        <span class="admin-item-category">Stage ${bp.stage}: ${STAGES[bp.stage].name}</span>
                                    </div>
                                </div>
                                <div class="admin-actions">
                                    <button class="edit-btn" onclick="openEditModal('${bp.id}', true)">✏️ Edit</button>
                                    ${isDeleted ?
                `<button class="restore-btn" onclick="restoreBlueprint('${bp.id}')">🔄 Restore</button>` :
                `<button class="delete-btn" onclick="deleteBlueprint('${bp.id}', true)">🗑️ Hide</button>`
            }
                                </div>
                            </div>
                        `;
    }).join('')}

                    <h5 style="color: var(--accent-green); margin: 2rem 0 1rem; text-transform: uppercase; font-size: 0.7rem; letter-spacing: 1px;">User Contributions</h5>
                    ${allUser.length === 0 ? '<p style="color: var(--text-secondary); font-style: italic; font-size: 0.8rem;">No user blueprints found.</p>' : ''}
                    ${allUser.map(bp => `
                        <div class="admin-item">
                            <div class="admin-item-info">
                                <span>${renderIcon(bp.icon)}</span>
                                <div>
                                    <div class="admin-item-name">${bp.name}</div>
                                    <span class="admin-item-category">Stage ${bp.stage}: ${STAGES[bp.stage].name}</span>
                                </div>
                            </div>
                            <div class="admin-actions">
                                <button class="edit-btn" onclick="openEditModal('${bp.id}', false)">✏️ Edit</button>
                                <button class="delete-btn" onclick="deleteBlueprint('${bp.id}', false)">🗑️ Delete Permanently</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function openEditModal(id, isCore) {
    const all = isCore ? blueprints.map(bp => coreBlueprintOverrides[bp.id] ? { ...bp, ...coreBlueprintOverrides[bp.id] } : bp) : userBlueprints;
    const bp = all.find(b => b.id === id);
    if (!bp) return;

    const modalHtml = `
        <div class="modal-overlay" id="edit-modal">
            <div class="modal-content-large">
                <div class="craft-form">
                    <h3>✏️ Modify Blueprint: ${bp.name}</h3>
                    
                    <div class="form-group">
                        <label>Blueprint Name</label>
                        <input type="text" id="edit-bp-name" value="${bp.name}">
                    </div>

                    <div class="form-row-multi">
                        <div class="form-group" style="flex: 2;">
                            <label>Technological Stage</label>
                            <select id="edit-bp-stage">
                                <option value="1" ${bp.stage == 1 ? 'selected' : ''}>Stage 1: Stone & Fire</option>
                                <option value="2" ${bp.stage == 2 ? 'selected' : ''}>Stage 2: Wood & Bushcraft</option>
                                <option value="3" ${bp.stage == 3 ? 'selected' : ''}>Stage 3: Iron & Steel</option>
                                <option value="4" ${bp.stage == 4 ? 'selected' : ''}>Stage 4: Carpentry & Machines</option>
                                <option value="5" ${bp.stage == 5 ? 'selected' : ''}>Stage 5: Electricity & Circuits</option>
                            </select>
                        </div>
                        <div class="form-group" style="flex: 1;">
                            <label>Icon (Emoji or Data)</label>
                            <input type="text" id="edit-bp-icon" value="${bp.icon}">
                        </div>
                    </div>

                    <div class="form-group">
                        <label>YouTube Video URL</label>
                        <input type="text" id="edit-bp-video" value="${bp.videoUrl}">
                    </div>

                    <div id="edit-requirements-container">
                        <label style="display:block; margin-bottom: 0.5rem; color: var(--text-secondary); font-size: 0.85rem;">Technical Requirements</label>
                        ${bp.requirements.map(req => `
                            <div class="form-row-multi">
                                <input type="text" placeholder="Material" class="req-name-in" value="${req.name}">
                                <input type="text" placeholder="Value" class="req-val-in" value="${req.value}">
                            </div>
                        `).join('')}
                    </div>
                    <button class="add-row-btn" onclick="addRequirementRowSub('edit-requirements-container')">+ Add Requirement</button>

                    <div id="edit-steps-container">
                        <label style="display:block; margin-bottom: 0.5rem; color: var(--text-secondary); font-size: 0.85rem;">Construction Steps</label>
                        ${bp.steps.map(step => `
                            <div class="form-group">
                                <textarea placeholder="Step description..." class="step-text-in">${step.text}</textarea>
                            </div>
                        `).join('')}
                    </div>
                    <button class="add-row-btn" onclick="addStepRowSub('edit-steps-container')">+ Add Construction Step</button>

                    <div class="form-actions">
                        <button class="cancel-craft-btn" onclick="document.getElementById('edit-modal').remove()">Cancel</button>
                        <button class="update-btn" onclick="saveEdit('${id}', ${isCore})">💾 Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function addRequirementRowSub(containerId) {
    const container = document.getElementById(containerId);
    const row = document.createElement('div');
    row.className = 'form-row-multi';
    row.innerHTML = `
        <input type="text" placeholder="Material" class="req-name-in">
        <input type="text" placeholder="Value" class="req-val-in">
    `;
    container.appendChild(row);
}

function addStepRowSub(containerId) {
    const container = document.getElementById(containerId);
    const group = document.createElement('div');
    group.className = 'form-group';
    group.innerHTML = `<textarea placeholder="Step description..." class="step-text-in"></textarea>`;
    container.appendChild(group);
}

function saveEdit(id, isCore) {
    const name = document.getElementById('edit-bp-name').value;
    const stage = document.getElementById('edit-bp-stage').value;
    const icon = document.getElementById('edit-bp-icon').value;
    const video = document.getElementById('edit-bp-video').value;

    const requirements = Array.from(document.querySelectorAll('#edit-requirements-container .form-row-multi')).map(row => ({
        name: row.querySelector('.req-name-in').value,
        value: row.querySelector('.req-val-in').value
    })).filter(r => r.name);

    const steps = Array.from(document.querySelectorAll('#edit-steps-container textarea')).map(ta => ({
        text: ta.value,
        sketch: 'assets/sketch_mixing.svg'
    })).filter(s => s.text);

    const updatedData = {
        name, stage: parseInt(stage), icon, requirements, steps,
        videoUrl: video.includes('embed') ? video : `https://www.youtube.com/embed/${video.split('v=')[1] || video}`
    };

    if (isCore) {
        coreBlueprintOverrides[id] = updatedData;
        localStorage.setItem('primitive_core_overrides', JSON.stringify(coreBlueprintOverrides));
    } else {
        const index = userBlueprints.findIndex(bp => bp.id === id);
        if (index !== -1) {
            userBlueprints[index] = { ...userBlueprints[index], ...updatedData };
            localStorage.setItem('primitive_user_blueprints', JSON.stringify(userBlueprints));
        }
    }

    document.getElementById('edit-modal').remove();
    renderSidebar();
    renderAdminPanel();
    alert('Blueprint updated successfully.');
}

function deleteBlueprint(id, isCore) {
    if (confirm(`Are you sure you want to ${isCore ? 'hide' : 'delete'} this blueprint?`)) {
        if (isCore) {
            if (!deletedCoreBlueprints.includes(id)) {
                deletedCoreBlueprints.push(id);
                localStorage.setItem('primitive_deleted_core_blueprints', JSON.stringify(deletedCoreBlueprints));
            }
        } else {
            userBlueprints = userBlueprints.filter(bp => bp.id !== id);
            localStorage.setItem('primitive_user_blueprints', JSON.stringify(userBlueprints));
        }
        renderSidebar();
        renderAdminPanel();
    }
}

function restoreBlueprint(id) {
    deletedCoreBlueprints = deletedCoreBlueprints.filter(bid => bid !== id);
    localStorage.setItem('primitive_deleted_core_blueprints', JSON.stringify(deletedCoreBlueprints));
    renderSidebar();
    renderAdminPanel();
}

init();
