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
    // === TOOLS ===
    {
        id: 'stone-axe',
        name: 'Flint Hand Axe',
        stage: 1,
        icon: '🪓',
        category: 'tool',
        objective: 'Shape a bifacial stone axe for chopping wood, butchering, and digging.',
        evolution: 'The first cutting tool — enables shelter building, firewood gathering, and food processing.',
        requirements: [
            { name: 'Flint or Chert Nodule', value: '1–2 kg, fist-sized' },
            { name: 'Hammerstone (Basalt/Quartzite)', value: '0.5–1 kg, rounded' },
            { name: 'Antler or Bone Billet', value: '15–20 cm, for thinning' },
            { name: 'Leather Wrap (Haft binding)', value: '1 strip, 30 cm' },
            { name: 'Hardwood Handle', value: '40–50 cm, straight grain' },
            { name: 'Pine Resin + Charcoal (Glue)', value: '50 g mixed' }
        ],
        steps: [
            { text: 'Select a flat, oval-shaped flint nodule. Hold it firmly and strike the edge with your hammerstone at a 45° angle to remove a large initiating flake.' },
            { text: 'Flip the stone and repeat on the opposite side, creating a biconvex (lens-shaped) cross-section. This is your axe blank.' },
            { text: 'Work around the entire perimeter, removing flakes alternately from each face. Keep the axe symmetrical — an unbalanced axe will twist in your hand.' },
            { text: 'Switch to the antler billet (softer than stone) to thin the axe and refine the cutting edge. Press and strike gently to remove smaller, controlled flakes.' },
            { text: 'Create a notch or groove near the base of the axe for hafting. Use pressure flaking with the antler tip to carve a shallow channel.' },
            { text: 'Split the hardwood handle to create a slot. Insert the axe head and pack pine resin mixed with crushed charcoal into the gap. Wrap tightly with leather and let the resin cure for 24 hours.' },
            { text: 'Test the axe on a green branch. The edge should bite cleanly without chipping. Resharpen by removing small flakes from the cutting edge with the antler billet.' }
        ],
        videoUrl: 'https://youtu.be/qWA5nxSAK-c?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'end-scraper',
        name: 'End Scraper',
        stage: 1,
        icon: '🔪',
        category: 'tool',
        objective: 'Create a thick-edged tool for processing animal hides into leather.',
        evolution: 'Hide scraping transforms raw skins into wearable clothing, shelter coverings, and containers.',
        requirements: [
            { name: 'Thick Flint Flake', value: '8–12 cm, 1 cm thick' },
            { name: 'Hammerstone', value: '0.5 kg' },
            { name: 'Antler Pressure Flaker', value: '15 cm' },
            { name: 'Wooden Handle (Optional)', value: '20 cm' }
        ],
        steps: [
            { text: 'Select a thick flake of flint or chert — the working edge should be at least 1 cm thick to withstand scraping force.' },
            { text: 'Using the hammerstone, create a steep, rounded working edge at one end (the "nose"). This edge should be at a 60–70° angle — much steeper than a knife.' },
            { text: 'Use the antler pressure flaker to micro-retouch the edge, creating a slightly serrated but controlled surface.' },
            { text: 'Stretch a raw animal hide on a flat surface or curved beam. Hold the scraper with the thick edge angled forward.' },
            { text: 'Push (don\'t slice) the scraper across the hide to remove flesh and fat. The steep angle prevents cutting through the hide.' },
            { text: 'Resharpen by removing small flakes from the working edge. The tool is resharpenable hundreds of times before it becomes too small.' }
        ],
        videoUrl: 'https://youtu.be/yMRxgW5EZUk?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'burin',
        name: 'Burin (Engraving Tool)',
        stage: 1,
        icon: '📐',
        category: 'tool',
        objective: 'Carve a chisel-edged stone tool for engraving bone, antler, and wood.',
        evolution: 'Burins enable decoration, notation systems, and the creation of composite tool slots.',
        requirements: [
            { name: 'Long Flint Blade', value: '8–10 cm, thin' },
            { name: 'Hammerstone', value: '0.5 kg' },
            { name: 'Pressure Flaker', value: '1 unit' }
        ],
        steps: [
            { text: 'Start with a long, thin flint blade (2–3 cm wide). These are produced from a prepared blade core.' },
            { text: 'Locate one corner of the blade\'s distal (far) end. Strike downward with a sharp, angled blow from the hammerstone to create a burin spall — a narrow flake removed along the blade\'s length.' },
            { text: 'The resulting edge is a sharp, chisel-like "burin edge" — straight and extremely durable.' },
            { text: 'Use the burin edge to carve grooves in bone, antler, or wood. The straight edge cuts clean channels for tool handles, harpoon barbs, or decorative art.' },
            { text: 'The burin can be resharpened by striking additional spalls from the same edge.' }
        ],
        videoUrl: 'https://youtu.be/qWA5nxSAK-c?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'microlith-blade',
        name: 'Microlith Blades',
        stage: 1,
        icon: '💎',
        category: 'tool',
        objective: 'Produce small, standardized stone inserts for composite tools (sickles, spears, arrows).',
        evolution: 'Microliths revolutionize tool-making — smaller, lighter, repairable, and mass-producible.',
        requirements: [
            { name: 'Fine-grained Flint Core', value: '3–5 kg, prepared blade core' },
            { name: 'Antler Punch', value: '10 cm, sharpened tip' },
            { name: 'Hammerstone', value: '0.5 kg' },
            { name: 'Pine Resin (Adhesive)', value: '100 g' },
            { name: 'Wood or Bone Tool Body', value: 'Grooved slot prepared' }
        ],
        steps: [
            { text: 'Prepare a blade core: shape a flint nodule into a conical form with a flat striking platform on top.' },
            { text: 'Using the antler punch, strike downward near the edge of the platform to detach long, thin bladelets (2–5 cm long, 0.5 cm wide).' },
            { text: 'Use the microburin technique: snap the bladelet at a controlled point to create geometric shapes (triangles, trapezoids, crescents).' },
            { text: 'Carve a narrow groove or slot into a wood or bone tool body using a burin.' },
            { text: 'Set the microlith into the slot with pine resin adhesive. The resin holds the stone insert firmly in place.' },
            { text: 'Create composite tools: sickle (multiple microliths in a curved wood handle), spear (single microlith in bone point), or arrow (triangular microlith in shaft).' },
            { text: 'When a microlith breaks, simply pry it out and insert a new one — the tool body is reused.' }
        ],
        videoUrl: 'https://youtu.be/qWA5nxSAK-c?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'atlatl',
        name: 'Atlatl (Spear Thrower)',
        stage: 1,
        icon: '🎯',
        category: 'tool',
        objective: 'Build a lever-based spear-throwing device that multiplies force and range.',
        evolution: 'Atlatls enable hunting at 30–50m range — safer distance from dangerous game.',
        requirements: [
            { name: 'Hardwood Shaft', value: '50–60 cm long, 2 cm thick' },
            { name: 'Antler or Bone Hook', value: '5 cm, for the spur' },
            { name: 'Sinew or Cordage', value: 'For lashing' },
            { name: 'Pine Resin', value: 'For securing' },
            { name: 'Dart/Spear', value: '1.5–2 m, lighter than hand spear' }
        ],
        steps: [
            { text: 'Shape a hardwood shaft (50–60 cm) with a grip at one end. Carve a shallow groove along the top for the dart to rest in.' },
            { text: 'Carve or attach a small hook (spur) at the distal end — this engages the base of the dart. Antler works best.' },
            { text: 'Lash the hook securely with sinew and seal with pine resin.' },
            { text: 'Prepare a dart: a 1.5–2 m shaft, lighter than a hand-thrown spear, with a stone or bone point.' },
            { text: 'Rest the dart in the groove, hook engaging the base. Grip the atlatl with the dart aligned along your forearm.' },
            { text: 'Throw with an overhand motion, whipping the atlatl forward. The lever action multiplies velocity — darts travel 30–50m with lethal force.' }
        ],
        videoUrl: 'https://youtu.be/qWA5nxSAK-c?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'fire-plough',
        name: 'Fire Plough',
        stage: 1,
        icon: '🔥',
        category: 'tool',
        objective: 'Generate ember using friction between two pieces of wood.',
        evolution: 'Fire is the foundation of civilization — warmth, cooking, protection, and later, pottery and metal.',
        requirements: [
            { name: 'Softwood Hearth Board', value: '30 cm (Cedar, Yucca, Willow)' },
            { name: 'Hardwood Plough Stick', value: '30 cm, straight shaft' },
            { name: 'Dry Tinder Bundle', value: 'Large (dead grass, bark fibers)' },
            { name: 'Flat Stone (Ember tray)', value: '1 unit' }
        ],
        steps: [
            { text: 'Carve a shallow groove (5 mm deep) along the length of the softwood hearth board. At one end, carve a small notch where the coal will collect.' },
            { text: 'Place the hearth board flat on the ground or on a piece of bark. Position the flat stone beneath the notch to catch the coal.' },
            { text: 'Hold the plough stick at a 45° angle in the groove. Apply firm downward pressure and saw back and forth rapidly along the groove.' },
            { text: 'Continue for 5–15 minutes until dark smoke and fine black powder (charcoal dust) accumulates in the notch.' },
            { text: 'The friction-heated dust becomes an ember (glowing coal). Carefully transfer it to the tinder bundle.' },
            { text: 'Cup the bundle and blow gently with steady, increasing breath until flame erupts. Feed small twigs to build a fire.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'bow-drill',
        name: 'Bow Drill',
        stage: 1,
        icon: '🏹',
        category: 'tool',
        objective: 'Generate fire using a bow-driven spindle — the most efficient primitive fire-making method.',
        evolution: 'Faster and more reliable than the hand drill — essential for daily fire production.',
        requirements: [
            { name: 'Hearth Board (Cedar/Cottonwood)', value: '20×10 cm, 2 cm thick' },
            { name: 'Spindle (Hardwood)', value: '25 cm, 2 cm diameter, straight' },
            { name: 'Bow Stick', value: '60–80 cm, slightly curved' },
            { name: 'Bowstring (Leather/Plant Fiber)', value: '1 m' },
            { name: 'Hand Bearing (Stone/Shell with depression)', value: '1 unit' },
            { name: 'Tinder Bundle', value: 'Large' },
            { name: 'Resin or Fat (Bearing lubricant)', value: 'Small amount' }
        ],
        steps: [
            { text: 'Carve a shallow depression near the edge of the hearth board. Cut a V-shaped notch from the edge into the depression for coal collection.' },
            { text: 'Shape the spindle: round, straight, 25 cm long. Point one end slightly; the other end should be blunt for the hand bearing.' },
            { text: 'Tie the bowstring to both ends of the bow stick with enough tension to grip the spindle.' },
            { text: 'Wrap the bowstring once around the spindle. Place the spindle\'s pointed end in the hearth board depression. Hold the blunt end in the hand bearing (lubricated with resin).' },
            { text: 'Saw the bow back and forth steadily. The spindle rotates rapidly, creating friction in the hearth board notch.' },
            { text: 'After 30–60 seconds, dark smoke and black coal dust appear in the notch. Continue until the coal glows.' },
            { text: 'Tap the hearth board to release the coal onto bark or leaf. Transfer to tinder bundle and blow into flame.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'bone-needle',
        name: 'Bone Needle & Awl',
        stage: 1,
        icon: '🧵',
        category: 'tool',
        objective: 'Fashion a sewing needle from bone for stitching clothing, shelters, and containers.',
        evolution: 'Sewing enables tailored clothing (warmth), stitched shelters, and water-tight containers.',
        requirements: [
            { name: 'Bird Bone or Deer Splinter', value: '10–15 cm, dense' },
            { name: 'Abrasive Stone (Sandstone)', value: 'For shaping' },
            { name: 'Flint Drill or Burin', value: 'For eye piercing' },
            { name: 'Sinew or Plant Fiber (Thread)', value: 'Fine' }
        ],
        steps: [
            { text: 'Select a dense, straight bird bone (wing or leg) or split a deer long bone into a thin splinter.' },
            { text: 'Grind the bone on sandstone to shape it into a slender needle, 8–12 cm long and 2–3 mm thick.' },
            { text: 'Use a flint drill or burin to pierce an eye near one end. This requires patience — drill from both sides to meet in the middle.' },
            { text: 'Polish the needle on fine sandstone or leather to smooth all edges. A rough needle will tear thread.' },
            { text: 'Thread with sinew (split into fine strands) or plant fiber. Use the needle to stitch hide garments, shelter covers, or baskets.' },
            { text: 'An awl is the same process but without an eye — used for piercing holes in leather before stitching.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'fish-hook',
        name: 'Bone Fish Hook',
        stage: 1,
        icon: '🪝',
        category: 'tool',
        objective: 'Carve a fish hook from bone or shell for fishing — a reliable protein source.',
        evolution: 'Hooks enable efficient fishing, diversifying diet beyond hunting and gathering.',
        requirements: [
            { name: 'Deer Bone or Shell', value: '5–8 cm piece' },
            { name: 'Flint Blade or Burin', value: 'For carving' },
            { name: 'Cordage (Line)', value: '2–3 m, strong' },
            { name: 'Abrasive Stone', value: 'For polishing' }
        ],
        steps: [
            { text: 'Select a curved piece of bone or shell, or carve a blank from flat bone into a J-shape.' },
            { text: 'Use a flint blade to carve the hook shape: a sharp point, a curved shank, and a barb (inward-facing projection near the point).' },
            { text: 'The barb is critical — it prevents the fish from sliding off once hooked. Carve it at a 45° angle.' },
            { text: 'Carve a groove or notch at the top of the shank for tying the fishing line.' },
            { text: 'Polish on abrasive stone until smooth. Rough hooks can cut the line.' },
            { text: 'Tie to cordage, bait with insects or small fish, and cast into rivers or coastal waters.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'harpoon',
        name: 'Harpoon Point',
        stage: 1,
        icon: '🔱',
        category: 'tool',
        objective: 'Create a barbed bone/antler harpoon head for hunting fish and marine mammals.',
        evolution: 'Harpoons expand hunting into aquatic environments — a critical food source expansion.',
        requirements: [
            { name: 'Antler Tine', value: '10–15 cm, dense' },
            { name: 'Flint Blades (Microliths)', value: '2–3, for barbs' },
            { name: 'Cordage', value: '3–5 m, strong' },
            { name: 'Spear Shaft', value: '2–3 m' },
            { name: 'Pine Resin', value: 'For adhesive' }
        ],
        steps: [
            { text: 'Select a straight antler tine. Shape it into a slender point, 10–15 cm long.' },
            { text: 'Carve a series of backward-facing barbs along one or both edges using a burin. The barbs prevent the harpoon from pulling out.' },
            { text: 'Carve a socket at the base to fit the spear shaft. The socket should be a tight friction fit.' },
            { text: 'Set flint microlith blades into the barbs using pine resin adhesive for extra cutting power.' },
            { text: 'Attach a detachable line: tie cordage to the harpoon head so it can separate from the shaft upon impact, preventing the animal from breaking the shaft.' },
            { text: 'The hunter throws the harpoon, the head embeds in the prey, the shaft detaches, and the line allows retrieval.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'mortar-pestle',
        name: 'Mortar & Pestle',
        stage: 1,
        icon: '🥣',
        category: 'tool',
        objective: 'Grind grains, nuts, and seeds into flour — the gateway to agriculture and bread.',
        evolution: 'Grinding transforms raw seeds into digestible flour, enabling bread, porridge, and the Neolithic food revolution.',
        requirements: [
            { name: 'Large Stone (Basalt/Granite)', value: '20–30 cm diameter, flat base' },
            { name: 'Hand Stone (Pestle)', value: '10–15 cm,握able shape' },
            { name: 'Sandstone (For shaping)', value: 'For grinding the bowl' }
        ],
        steps: [
            { text: 'Select a large, flat-bottomed stone (basalt or granite preferred for durability). This is the mortar base.' },
            { text: 'Use a harder stone (quartzite) to peck and grind a shallow bowl-shaped depression into the top surface. This takes many hours of work.' },
            { text: 'Smooth the bowl with sandstone and water. A smooth bowl makes cleaning easier and prevents food contamination.' },
            { text: 'Select a smaller,握able hand stone (pestle) with a rounded end. Shape it to fit comfortably in the mortar bowl.' },
            { text: 'Place dried grains, nuts, or seeds in the mortar. Grind with a circular or pounding motion using the pestle.' },
            { text: 'Sift the ground material through woven fiber to separate fine flour from coarse bran. The flour is used for bread, porridge, or flatbreads.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'quern-stone',
        name: 'Quern Stone (Saddle Quern)',
        stage: 1,
        icon: '🪨',
        category: 'tool',
        objective: 'Build a large grinding station for processing grain at scale — the first food-processing machine.',
        evolution: 'Querns enable large-scale grain processing — essential for feeding settled communities.',
        requirements: [
            { name: 'Large Flat Slab (Sandstone/Basalt)', value: '50×30 cm, 10 cm thick' },
            { name: 'Hand Stone (Rubber)', value: '20 cm, cylindrical' },
            { name: 'Leg Supports (Wood/Stone)', value: 'To elevate the quern' }
        ],
        steps: [
            { text: 'Select a large, flat slab of coarse sandstone or basalt, approximately 50×30 cm. The surface should be slightly concave or be ground to create a shallow bowl.' },
            { text: 'Peck and grind the surface with a harder stone to create a smooth, slightly curved grinding surface.' },
            { text: 'Set the quern on wooden or stone legs to elevate it to a comfortable working height (kneeling or standing).' },
            { text: 'The hand stone (rubber) is a smaller, cylindrical stone held with both hands. It slides back and forth across the quern surface.' },
            { text: 'Pour grain onto the quern. Slide the rubber back and forth, grinding the grain into flour. The coarse sandstone surface acts like sandpaper.' },
            { text: 'Saddle querns are the precursor to rotary querns and eventually millstones — the same principle scaled up over millennia.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'sickle',
        name: 'Flint Sickle',
        stage: 1,
        icon: '🌾',
        category: 'tool',
        objective: 'Build a composite harvesting tool with multiple flint blades for cutting grain stalks.',
        evolution: 'Sickles enable efficient grain harvesting — the single most important tool of the Neolithic agricultural revolution.',
        requirements: [
            { name: 'Curved Wood or Bone Handle', value: '20–30 cm, crescent shape' },
            { name: 'Microlith Blades (Flint)', value: '8–12, trapezoidal' },
            { name: 'Pine Resin + Beeswax (Adhesive)', value: '100 g mixed' },
            { name: 'Sinew or Cordage', value: 'For additional binding' }
        ],
        steps: [
            { text: 'Carve a crescent-shaped handle from hardwood or a large bone. The curve should match a comfortable sweeping cutting motion.' },
            { text: 'Carve a continuous groove along the inner (concave) edge of the handle. This groove will hold the flint blades.' },
            { text: 'Produce 8–12 trapezoidal microlith blades from a prepared flint core. Each should be 2–4 cm long.' },
            { text: 'Heat pine resin mixed with beeswax until pliable. Pack the adhesive into the groove.' },
            { text: 'Set each microlith blade into the adhesive, overlapping slightly, with the sharp edge facing inward along the curve.' },
            { text: 'Reinforce by wrapping sinew or cordage around the blades and handle. Let the resin cure for 24 hours.' },
            { text: 'Harvest grain by grasping stalks with one hand and slicing upward with the sickle in a sweeping motion. The silica in grain stalks creates a "gloss" on the blades over time — this polish is used by archaeologists to identify ancient sickles.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'stone-lamp',
        name: 'Stone Lamp',
        stage: 1,
        icon: '🪔',
        category: 'tool',
        objective: 'Carve a stone lamp for burning animal fat — providing portable light in caves and shelters.',
        evolution: 'Artificial light extends productive hours into the night — enabling cave art, night work, and underground exploration.',
        requirements: [
            { name: 'Flat Sandstone or Soapstone', value: '15×10 cm, 3 cm thick' },
            { name: 'Flint Engraver (Burin)', value: 'For carving the bowl' },
            { name: 'Animal Fat (Fuel)', value: 'Marrow or rendered fat' },
            { name: 'Plant Fiber (Wick)', value: 'Twisted moss or fiber' }
        ],
        steps: [
            { text: 'Select a flat piece of sandstone or soapstone, approximately 15×10 cm and 3 cm thick.' },
            { text: 'Use a burin or flint engraver to peck and grind a shallow bowl-shaped depression into the stone. The bowl should be 5–8 cm wide and 1 cm deep.' },
            { text: 'Smooth the bowl with fine sandstone. One end of the lamp should be pinched or shaped into a spout for the wick.' },
            { text: 'Fill the bowl with rendered animal fat (marrow, deer fat, or fish oil). This is the fuel.' },
            { text: 'Twist a small bundle of plant fiber or moss into a wick. Place one end in the fat, the other protruding from the spout.' },
            { text: 'Light the wick. A stone lamp burns for 4–10 hours depending on fuel volume. These lamps were used in Lascaux and other Paleolithic cave art sites.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    // === SKILLS ===
    {
        id: 'knapping',
        name: 'Knapping (Stone Tool Making)',
        stage: 1,
        icon: '⛏️',
        category: 'skill',
        objective: 'Master the art of fracturing stone to create sharp edges — the foundation of all Stone Age technology.',
        evolution: 'Every tool in this era begins with knapping. Without it, there is no axe, no scraper, no blade.',
        requirements: [
            { name: 'Hammerstone', value: 'Used by: Axe, Scraper, Burin, Microliths' },
            { name: 'Antler Billet', value: 'Used by: Axe, Scraper' },
            { name: 'Pressure Flaker', value: 'Used by: Axe, Scraper, Burin' },
            { name: 'Flint/Chert/Obsidian', value: 'Raw material for all stone tools' }
        ],
        steps: [
            { text: 'Knapping is the core skill behind every stone tool. It begins with selecting the right stone — flint, chert, or obsidian — and understanding how it fractures.' },
            { text: 'Direct percussion: strike the stone with a hammerstone to remove large flakes. This is used for the initial shaping of axes, scrapers, and burins.' },
            { text: 'Soft hammer percussion: use an antler billet (softer than stone) to thin and refine edges. The antler absorbs shock and removes controlled flakes.' },
            { text: 'Pressure flaking: press an antler or copper point against the edge to remove tiny flakes. This creates the fine, sharp edges on scrapers, burins, and microliths.' },
            { text: 'The key is reading the stone — knowing where the next flake will go based on the angle of impact, the platform edge, and existing fracture lines.' },
            { text: 'Every tool in Stage 1 requires knapping: the axe (bifacial reduction), scraper (steep edge retouch), burin (spall removal), microliths (bladelet production and snapping), and sickle blades (trapezoidal shaping).' }
        ],
        videoUrl: 'https://youtu.be/qWA5nxSAK-c?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'fire-making',
        name: 'Fire Making',
        stage: 1,
        icon: '🔥',
        category: 'skill',
        objective: 'Generate flame from friction — the skill that separates humans from every other animal.',
        evolution: 'Fire enables cooking (digestible food), warmth (survival in cold), protection (predator deterrence), and later, pottery and metal.',
        requirements: [
            { name: 'Fire Plough', value: 'Tool: wood-on-wood friction' },
            { name: 'Bow Drill', value: 'Tool: bow-driven spindle (faster, more reliable)' },
            { name: 'Tinder Bundle', value: 'Dry grass, bark fibers, char cloth' },
            { name: 'Hand Bearing', value: 'Stone/shell with depression (bow drill only)' }
        ],
        steps: [
            { text: 'Fire making is a daily skill. A primitive human needed fire every single day for warmth, cooking, and safety.' },
            { text: 'The Fire Plough uses friction between a hardwood stick and a softwood groove. It takes 5–15 minutes of sustained effort to produce an ember.' },
            { text: 'The Bow Drill is faster and more efficient. The bow string rotates the spindle, creating rapid friction. An ember appears in 30–60 seconds.' },
            { text: 'Both methods produce a glowing coal (ember) in a notch. This coal is transferred to a tinder bundle and blown into flame.' },
            { text: 'The skill isn\'t just the tools — it\'s knowing your materials. Cedar, cottonwood, yucca, and willow are the best hearth boards. The spindle should be slightly harder than the hearth.' },
            { text: 'Fire making is used by: everyone, every day. It\'s the prerequisite for pottery (firing), metal (smelting), and food (cooking).' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'hide-working',
        name: 'Hide Working (Leather Making)',
        stage: 1,
        icon: '🟫',
        category: 'skill',
        objective: 'Transform raw animal skin into supple, durable leather for clothing, shelter, and containers.',
        evolution: 'Leather is the first engineered material — waterproof, insulating, and wearable. It enables migration into cold climates.',
        requirements: [
            { name: 'End Scraper', value: 'Tool: removes flesh and fat from hides' },
            { name: 'Bone Needle & Awl', value: 'Tool: stitches leather pieces together' },
            { name: 'Raw Animal Hide', value: 'Fresh or salted, hair removed' },
            { name: 'Brain or Oil (for tanning)', value: 'Softens the hide' }
        ],
        steps: [
            { text: 'Hide working begins with fleshing — using the end scraper to push off all remaining meat, fat, and membrane from the raw skin.' },
            { text: 'The scraper\'s steep edge (60–70°) is perfect for this: it grabs and removes tissue without cutting through the hide itself.' },
            { text: 'After fleshing, the hide is soaked, stretched, and worked to break down fibers. Braining (applying animal brain paste) or smoking softens the leather.' },
            { text: 'The bone needle and awl are used to stitch leather pieces together. The awl pierces holes first, then the needle passes sinew thread through.' },
            { text: 'Leather is used for: clothing (tunics, moccasins, cloaks), shelter (tipi covers, door flaps), containers (bags, water bottles), and tool bindings (axe hafts, atlatl grips).' },
            { text: 'Tools used in this skill: End Scraper (fleshing), Bone Needle & Awl (stitching), Flint Knife (cutting patterns).' }
        ],
        videoUrl: 'https://youtu.be/yMRxgW5EZUk?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'composite-tools',
        name: 'Composite Tool Assembly',
        stage: 1,
        icon: '🔧',
        category: 'skill',
        objective: 'Combine stone, bone, wood, and resin into multi-material tools that outperform single-material ones.',
        evolution: 'Composite tools are lighter, repairable, and more efficient. The sickle, atlatl, and harpoon are all composite.',
        requirements: [
            { name: 'Microlith Blades', value: 'Stone inserts' },
            { name: 'Burin', value: 'Tool: carves slots in wood/bone' },
            { name: 'Pine Resin + Beeswax', value: 'Adhesive' },
            { name: 'Sinew/Cordage', value: 'Binding' },
            { name: 'Wood/Bone Handles', value: 'Tool bodies' }
        ],
        steps: [
            { text: 'Composite tool assembly is the hallmark of the Mesolithic — combining multiple materials into a single, superior tool.' },
            { text: 'The burin carves narrow slots or grooves into wood or bone handles. These grooves hold stone inserts.' },
            { text: 'Microlith blades are set into the grooves using heated pine resin mixed with beeswax. The resin flows into every gap and hardens into a rock-solid bond.' },
            { text: 'Sinew or cordage is wrapped around the joint for extra security, then sealed with more resin.' },
            { text: 'Examples of composite tools: Sickle (8–12 microliths in a curved wood handle), Atlatl (wood shaft + antler hook + sinew lashing), Harpoon (bone point + microlith barbs + detachable line).' },
            { text: 'The genius of composite tools: when a stone blade breaks, you replace just that blade — not the entire tool.' }
        ],
        videoUrl: 'https://youtu.be/qWA5nxSAK-c?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'hunting-fishing',
        name: 'Hunting & Fishing',
        stage: 1,
        icon: '🏹',
        category: 'skill',
        objective: 'Procure protein using spears, atlatls, harpoons, hooks, and traps.',
        evolution: 'Reliable protein enables brain development, population growth, and the energy surplus needed for craft specialization.',
        requirements: [
            { name: 'Atlatl + Dart', value: 'Tool: long-range spear throwing (30–50m)' },
            { name: 'Harpoon', value: 'Tool: aquatic hunting (fish, seals)' },
            { name: 'Fish Hook + Line', value: 'Tool: passive fishing' },
            { name: 'Stone Axe', value: 'Tool: processes game (butchering)' },
            { name: 'End Scraper', value: 'Tool: processes hide (clothing)' }
        ],
        steps: [
            { text: 'Hunting in the Paleolithic was a full-body skill combining tracking, stealth, and tool use.' },
            { text: 'The atlatl multiplies spear velocity — a dart travels 30–50m with enough force to penetrate large game. Safer than hand-thrown spears.' },
            { text: 'Harpoons expand hunting into water. The barbed head embeds in fish or marine mammals, and the detachable line prevents the animal from breaking the shaft.' },
            { text: 'Fish hooks enable passive fishing — set multiple lines and check them periodically. A reliable protein source that doesn\'t require chasing prey.' },
            { text: 'After a successful hunt, the stone axe is used for butchering, and the end scraper processes the hide.' },
            { text: 'Tools used: Atlatl (hunting), Harpoon (aquatic hunting), Fish Hook (fishing), Stone Axe (butchering), End Scraper (hide processing).' }
        ],
        videoUrl: 'https://youtu.be/qWA5nxSAK-c?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'food-processing',
        name: 'Food Processing (Grain to Flour)',
        stage: 1,
        icon: '🌾',
        category: 'skill',
        objective: 'Grind wild grains, nuts, and seeds into flour — the bridge between foraging and agriculture.',
        evolution: 'Flour enables bread, porridge, and flatbreads — calorie-dense food that supports larger populations and settled life.',
        requirements: [
            { name: 'Mortar & Pestle', value: 'Tool: small-scale grinding' },
            { name: 'Quern Stone', value: 'Tool: large-scale grinding' },
            { name: 'Sickle', value: 'Tool: harvesting grain stalks' },
            { name: 'Woven Basket/Sieve', value: 'For separating flour from bran' }
        ],
        steps: [
            { text: 'Food processing transforms raw, hard-to-digest seeds into flour — the most important caloric innovation before agriculture.' },
            { text: 'The sickle harvests grain stalks efficiently. The silica "gloss" on ancient sickle blades is how archaeologists identify the earliest farming communities.' },
            { text: 'The mortar and pestle handle small batches — pounding and grinding individual portions of grain, nuts, or seeds.' },
            { text: 'The quern stone is for volume. A person can process kilograms of grain per hour by sliding the rubber back and forth across the grinding surface.' },
            { text: 'The ground material is sifted through woven fiber to separate fine flour from coarse bran. The flour makes bread, porridge, or flatbread.' },
            { text: 'This skill is the direct precursor to the Neolithic agricultural revolution. Once people could process grain efficiently, they had incentive to grow it.' },
            { text: 'Tools used: Sickle (harvesting), Mortar & Pestle (small-scale grinding), Quern Stone (large-scale grinding).' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'bone-carving',
        name: 'Bone & Antler Carving',
        stage: 1,
        icon: '🦴',
        category: 'skill',
        objective: 'Shape bone and antler into needles, hooks, harpoons, and handles using stone tools.',
        evolution: 'Bone and antler are tougher and more flexible than stone — they enable hooks, needles, and harpoons that stone alone cannot.',
        requirements: [
            { name: 'Burin', value: 'Tool: carves grooves and slots' },
            { name: 'Stone Axe', value: 'Tool: splits large bones' },
            { name: 'Abrasive Stone', value: 'For smoothing and polishing' },
            { name: 'Bone/Antler Raw Material', value: 'Deer antler, bird bones, splintered long bones' }
        ],
        steps: [
            { text: 'Bone and antler carving opens a material world that stone alone cannot access. Bone is tough, slightly flexible, and holds fine edges.' },
            { text: 'The stone axe splits large bones longitudinally. The burin carves fine grooves, slots, and barbs.' },
            { text: 'Abrasive stone (sandstone) smooths and polishes the finished piece. A polished bone needle won\'t tear thread; a polished fish hook won\'t cut line.' },
            { text: 'Products of bone carving: needles (sewing), awls (piercing), fish hooks (fishing), harpoon points (hunting), atlatl hooks (spear throwing), and tool handles.' },
            { text: 'The burin is the key tool — its straight, durable chisel edge cuts clean channels in bone that a flint blade would shatter.' },
            { text: 'Tools used: Burin (carving grooves/barbs), Stone Axe (splitting bone), Abrasive Stone (smoothing).' }
        ],
        videoUrl: 'https://youtu.be/qWA5nxSAK-c?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'sewing',
        name: 'Sewing & Stitching',
        stage: 1,
        icon: '🧵',
        category: 'skill',
        objective: 'Stitch leather, hide, and fiber into tailored garments, shelters, and containers.',
        evolution: 'Sewn clothing enables survival in cold climates. Stitched shelters and containers expand living options.',
        requirements: [
            { name: 'Bone Needle', value: 'Tool: passes thread through material' },
            { name: 'Bone Awl', value: 'Tool: pre-pierces holes in tough leather' },
            { name: 'Sinew or Plant Fiber', value: 'Thread material' },
            { name: 'Processed Leather/Hide', value: 'Material to stitch' }
        ],
        steps: [
            { text: 'Sewing transforms flat pieces of leather into three-dimensional objects: tailored clothing, fitted shelters, and water-tight containers.' },
            { text: 'The bone awl pierces a hole in the leather first. This is essential — trying to push a needle through thick hide will break it.' },
            { text: 'The bone needle passes sinew thread (split from animal tendon) through the pierced hole. Sinew is incredibly strong — stronger than most plant fibers.' },
            { text: 'Stitching techniques include: running stitch (simple in-out), backstitch (stronger, overlapping), and whipstitch (edge binding).' },
            { text: 'Sewn products: tailored tunics and cloaks (warmth), stitched tipi covers (shelter), water bags (containers), moccasins (footwear).' },
            { text: 'Tools used: Bone Needle (stitching), Bone Awl (pre-piercing holes).' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    // === RESOURCES ===
    {
        id: 'flint-chert',
        name: 'Flint & Chert',
        stage: 1,
        icon: '🪨',
        category: 'resource',
        objective: 'Identify and collect knappable stone for all tool-making.',
        evolution: 'Without flint or chert, there are no axes, scrapers, burins, or blades. This is the single most critical resource of the Stone Age.',
        upgrades: [
            { name: 'Flake Knife', description: 'Simple flake for cutting', stage: 1 },
            { name: 'Stone Axe', description: 'Hafted axe for woodworking', stage: 1 },
            { name: 'End Scraper', description: 'Hide scraping tool', stage: 1 },
            { name: 'Burin', description: 'Engraving/carving tool', stage: 1 },
            { name: 'Microliths', description: 'Small blades for composite tools', stage: 2 },
            { name: 'Polished Bronze', description: 'Metal tools replace stone', stage: 3 }
        ],
        requirements: [
            { name: 'Hammerstone (for testing)', value: '1 unit' },
            { name: 'Collection bag or container', value: '1 unit' },
            { name: 'Knowledge of local geology', value: 'Critical' }
        ],
        steps: [
            { text: 'Search riverbeds, exposed cliffs, dry washes, and chalk formations for flint and chert deposits.' },
            { text: 'Test candidate stones by striking with a hammerstone — listen for a clear ring (not a dull thud). Look for conchoidal (shell-like) fracture patterns.' },
            { text: 'Flint forms as nodules inside limestone. Search chalk cliffs and limestone quarries by cracking open larger rocks.' },
            { text: 'Chert is microcrystalline quartz found in sedimentary formations. It behaves identically to flint for knapping purposes.' },
            { text: 'Collect stones in a range of sizes: large nodules for axe blanks, medium pieces for scrapers and burins, small flakes for microliths.' },
            { text: 'Store your collection in a dry place. Wet stone can freeze and fracture in cold climates.' }
        ],
        videoUrl: 'https://youtu.be/rgfLMOPAAk4?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'obsidian',
        name: 'Obsidian',
        stage: 1,
        icon: '🖤',
        category: 'resource',
        objective: 'Source volcanic glass — the sharpest material available to primitive humans.',
        evolution: 'Obsidian blades are sharper than surgical steel. Where available, it replaces flint as the premium tool-making material.',
        upgrades: [
            { name: 'Flake Blades', description: 'Simple obsidian flakes', stage: 1 },
            { name: 'Pressure Flakes', description: 'Pressure-retouched blades', stage: 1 },
            { name: 'Surgical Blades', description: 'Ultra-sharp medical tools', stage: 2 },
            { name: 'Obsidian Glass', description: 'Modern glass alternatives', stage: 3 },
            { name: 'Fiberglass', description: 'Glass fiber composites', stage: 4 }
        ],
        requirements: [
            { name: 'Access to volcanic region', value: 'Essential' },
            { name: 'Hammerstone', value: '1 unit' },
            { name: 'Collection container', value: '1 unit' }
        ],
        steps: [
            { text: 'Obsidian forms from rapidly cooled lava flows. It is only found in volcanic regions.' },
            { text: 'Look for glassy, black (or colored) rock with conchoidal fracture. It breaks like glass — very sharp, very brittle.' },
            { text: 'Obsidian is knapped the same way as flint but requires more care — it is more brittle and shatters more easily.' },
            { text: 'An obsidian blade edge is approximately 3 nanometers thick — sharper than any steel scalpel.' },
            { text: 'Where obsidian is available, it was traded over thousands of kilometers in the Stone Age. It is a high-value trade commodity.' }
        ],
        videoUrl: 'https://youtu.be/NE4cBbn_GGc?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'basalt',
        name: 'Basalt',
        stage: 1,
        icon: '🗿',
        category: 'resource',
        objective: 'Gather dense volcanic rock for hammerstones, grinding slabs, and structural uses.',
        evolution: 'Basalt hammerstones are harder than flint and are essential for knapping. Basalt grinding slabs process grain into flour.',
        requirements: [
            { name: 'Exposed basalt outcrops', value: 'Riverbeds, cliffs' },
            { name: 'Selection knowledge', value: 'Dense, fine-grained specimens' }
        ],
        steps: [
            { text: 'Basalt is a dense, fine-grained volcanic rock found in riverbeds, exposed cliffs, and lava fields.' },
            { text: 'Select rounded basalt cobbles (0.5–1 kg) for hammerstones. They should be dense, without cracks, and slightly rounded.' },
            { text: 'Large flat basalt slabs serve as grinding surfaces (quern bases) and workbenches.' },
            { text: 'Basalt is harder than most other stones — it is the preferred material for hammerstones used in knapping.' }
        ],
        videoUrl: 'https://youtu.be/RfhZfQ1EOmU?si=2-tXDnEzRWwPO--x'
    },
    {
id: 'sandstone',
        name: 'Sandstone',
        stage: 1,
        icon: '🟫',
        category: 'resource',
        objective: 'Collect abrasive sandstone for grinding, polishing, and smoothing other materials.',
        evolution: 'Sandstone is the sandpaper of the Stone Age. Without it, nothing can be sharpened, or polished.',
        requirements: [
            { name: 'Sandstone outcrops', value: 'Varied grit sizes' },
            { name: 'Selection by grit', value: 'Coarse for shaping, fine for polishing' }
        ],
        steps: [
            { text: 'Sandstone is a sedimentary rock composed of cemented sand grains. It comes in various grit sizes.' },
            { text: 'Coarse sandstone is used for initial shaping: grinding bone needles smooth, shaping wooden handles, flattening stone surfaces.' },
            { text: 'Fine sandstone is used for polishing: finishing bone needles, smoothing fish hooks, refining tool edges.' },
            { text: 'Sandstone slabs also serve as paint palettes (ochre grinding) and sharpening stones for maintained edges.' }
        ],
        videoUrl: 'https://youtu.be/VMFIzjFYnlU?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'hardwood',
        name: 'Hardwood (Oak, Ash, Hickory)',
        stage: 1,
        icon: '🪵',
        category: 'resource',
        objective: 'Harvest dense, strong wood for tool handles, shafts, and structural components.',
        evolution: 'Hardwood handles multiply the effectiveness of every stone tool. A haftered axe is 10x more efficient than a hand-held stone.',
        upgrades: [
            { name: 'Green Wood', description: 'Freshly harvested wood', stage: 1 },
            { name: 'Seasoned Wood', description: 'Air-dried for construction', stage: 1 },
            { name: 'Glu-Lam Beam', description: 'Glued laminated wood', stage: 3 },
            { name: 'Plywood', description: 'Layered wood sheets', stage: 3 },
            { name: 'MDF', description: 'Medium-density fiberboard', stage: 4 },
            { name: 'Composites', description: 'Engineered wood products', stage: 5 }
        ],
        requirements: [
            { name: 'Stone Axe', value: 'For felling trees' },
            { name: 'Knowledge of wood types', value: 'Oak, Ash, Hickory, Maple' },
            { name: 'Seasoning time', value: 'Air-dry for weeks' }
        ],
        steps: [
            { text: 'Hardwoods (oak, ash, hickory, maple) are dense, strong, and shock-resistant. They are the preferred material for tool handles.' },
            { text: 'Fell trees with the stone axe. Select straight-grained sections for handles, shafts, and structural poles.' },
            { text: 'Air-dry (season) wood for several weeks before use. Green wood will shrink and crack as it dries, loosening tool hafts.' },
            { text: 'Hardwood is used for: axe handles, atlatl shafts, spear shafts, quern legs, digging sticks, and structural frames.' }
        ],
        videoUrl: 'https://youtu.be/1Xfl5-ru50o?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'softwood',
        name: 'Softwood (Cedar, Cottonwood, Willow)',
        stage: 1,
        icon: '🌲',
        category: 'resource',
        objective: 'Harvest soft, easily-worked wood for fire-making hearth boards and tinder.',
        evolution: 'Softwoods are essential for fire production. The right hearth board material can mean the difference between a 30-second ember and 20 minutes of fruitless effort.',
        requirements: [
            { name: 'Softwood trees', value: 'Cedar, Cottonwood, Willow, Yucca' },
            { name: 'Stone Axe', value: 'For harvesting' }
        ],
        steps: [
            { text: 'Softwoods are less dense than hardwoods, making them easy to carve and ideal for friction fire-making.' },
            { text: 'Cedar, cottonwood, willow, and yucca are the best hearth board materials. They produce coal quickly and consistently.' },
            { text: 'Cut hearth boards 20–30 cm long, 2 cm thick, flat on both sides.' },
            { text: 'Softwood bark and dry inner fibers also serve as excellent tinder for catching embers.' }
        ],
        videoUrl: 'https://youtu.be/5kDLXa7gtjg?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'antler-bone',
        name: 'Antler & Bone',
        stage: 1,
        icon: '🦴',
        category: 'resource',
        objective: 'Collect deer antler and animal bone for pressure flakers, billets, needles, and hooks.',
        evolution: 'Antler is tougher than wood and more flexible than stone — it is the perfect intermediate material for tool-making and hunting equipment.',
        requirements: [
            { name: 'Deer/Elk Antler (shed or harvested)', value: 'Multiple tines' },
            { name: 'Animal Long Bones', value: 'Dense, uncracked' },
            { name: 'Stone Axe', value: 'For splitting bone' }
        ],
        steps: [
            { text: 'Antler is shed naturally by deer and elk each year, or can be harvested from hunted animals. Both sources are valuable.' },
            { text: 'Antler tines serve as pressure flakers (for fine stone work) and soft hammers (for thinning axes and scrapers).' },
            { text: 'Animal long bones (deer, elk, bison) are split longitudinally to create blanks for needles, hooks, harpoons, and awls.' },
            { text: 'Bone is ground and polished on sandstone to create smooth, functional tools. The burin carves fine details.' }
        ],
        videoUrl: 'https://youtu.be/tr811K5yZrA?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'sinew',
        name: 'Sinew (Animal Tendon)',
        stage: 1,
        icon: '🪢',
        category: 'resource',
        objective: 'Process animal tendons into the strongest natural cordage available.',
        evolution: 'Sinew is stronger than any plant fiber. It is used for bow backing, tool lashing, sewing thread, and atlatl binding.',
        upgrades: [
            { name: 'Plant Fiber Cordage', description: 'Basic plant-based rope', stage: 1 },
            { name: 'Sinew Thread', description: 'Split tendon fibers', stage: 1 },
            { name: 'Braided Rope', description: 'Multiple-strand rope', stage: 2 },
            { name: 'Laid Rope', description: 'Twisted rope construction', stage: 2 },
            { name: 'Cable', description: 'Heavy-duty rope', stage: 3 },
            { name: 'Wire', description: 'Metal wire', stage: 4 }
        ],
        requirements: [
            { name: 'Animal Leg Tendons (deer, elk)', value: 'From butchered game' },
            { name: 'Drying area', value: 'Shaded, ventilated' },
            { name: 'Stone scraper', value: 'For cleaning' }
        ],
        steps: [
            { text: 'Remove tendons from the legs of butchered animals. The backstrap tendon (along the spine) is the longest and strongest.' },
            { text: 'Clean tendons by scraping off all attached meat and fat with a stone scraper. Fat will cause the sinew to rot.' },
            { text: 'Dry the cleaned tendons in a shaded, ventilated area. They will harden into stiff, horn-like rods.' },
            { text: 'To use: soak dried sinew in water until pliable, then split into individual fibers. These fibers are incredibly strong — stronger than steel of the same thickness.' },
            { text: 'Sinew is used for: bow backing (lamination), tool haft binding, sewing thread, atlatl lashing, and fish line.' }
        ],
        videoUrl: 'https://youtu.be/EAt0pkag9YY?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'pine-resin',
        name: 'Pine Resin',
        stage: 1,
        icon: '🟡',
        category: 'resource',
        objective: 'Collect tree sap for adhesive, waterproofing, and fire-starting.',
        evolution: 'Pine resin is the superglue of the Stone Age. Mixed with charcoal and beeswax, it creates an adhesive stronger than many modern glues.',
        upgrades: [
            { name: 'Raw Resin', description: 'Collected tree sap', stage: 1 },
            { name: 'Pine Pitch Glue', description: 'Charcoal + resin adhesive', stage: 1 },
            { name: 'Birch Tar', description: 'Distilled adhesive', stage: 2 },
            { name: 'Pine Tar', description: 'Wood preservation tar', stage: 2 },
            { name: 'Synthetic Resins', description: 'Modern adhesives', stage: 5 }
        ],
        requirements: [
            { name: 'Pine or conifer trees', value: 'With visible sap flow' },
            { name: 'Collection container', value: 'Shell, bark, or clay vessel' },
            { name: 'Stick (for scraping)', value: '1 unit' }
        ],
        steps: [
            { text: 'Find pine or other conifer trees with visible sap (resin) oozing from the bark. Fresh resin is amber-colored and sticky.' },
            { text: 'Scrape resin into a collection container using a stick. Avoid getting it on your skin — it is difficult to remove.' },
            { text: 'Pure pine resin is a good adhesive. For a stronger glue, mix with crushed charcoal (1:1 ratio) and a small amount of beeswax.' },
            { text: 'Heat the mixture gently until it flows. Apply to tool joints, wrap with cordage, and let cool — it hardens into a rock-solid bond.' },
            { text: 'Pine resin is also waterproof (seals containers and shelters) and flammable (excellent fire starter).' }
        ],
        videoUrl: 'https://youtu.be/dluRhobAaco?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'clay',
        name: 'Clay (River/Alluvial)',
        stage: 1,
        icon: '🟤',
        category: 'resource',
        objective: 'Locate and process clay for construction, daub, and early container-making.',
        evolution: 'Clay is the foundation of construction (daub), waterproofing, and eventually pottery. It transforms from soft earth to hard ceramic when fired.',
        upgrades: [
            { name: 'Wattle & Daub', description: 'Mud-wall construction', stage: 1 },
            { name: 'Hand-built Pottery', description: 'Coil/pinch pottery containers', stage: 1 },
            { name: 'Potter\'s Wheel', description: 'Fast wheel thrown pottery', stage: 2 },
            { name: 'Ceramic Glazes', description: 'Glazed pottery', stage: 3 },
            { name: 'Porcelain', description: 'High-fire refined ceramics', stage: 4 }
        ],
        requirements: [
            { name: 'Riverbank or exposed earth', value: 'Fine-textured deposits' },
            { name: 'Water', value: 'For processing' },
            { name: 'Ribbon test', value: 'To verify quality' }
        ],
        steps: [
            { text: 'Search riverbanks, road cuts, and exposed earth for fine-textured, cohesive soil that sticks together when wet.' },
            { text: 'Perform the ribbon test: roll clay into a cylinder and bend it. Good clay will bend without cracking.' },
            { text: 'Remove impurities (roots, stones, sand) by slaking (soaking in water) and screening.' },
            { text: 'Clay is used for: daub (wattle-and-daub walls), waterproofing containers, early hand-built pottery, and furnace linings.' },
            { text: 'When dried and fired, clay becomes ceramic — permanently hard and waterproof.' }
        ],
        videoUrl: 'https://youtu.be/AUhOBxVFcFk?si=2-tXDnEzRWwPO--x'
    },
    {
id: 'animal-hide',
        name: 'Animal Hide (Raw)',
        stage: 1,
        icon: '🟫',
        category: 'resource',
        objective: 'Process hunted animal skins into raw hide for leather production.',
        evolution: 'Raw hide is the raw material for leather — the first engineered material. It enables clothing, shelter, and containers.',
        upgrades: [
            { name: 'Raw Hide', description: 'Unprocessed animal skin', stage: 1 },
            { name: 'Brain-tanned Leather', description: 'Soft, workable leather', stage: 1 },
            { name: 'Smoked Leather', description: ' Durable, water-resistant leather', stage: 1 },
            { name: 'Chamois', description: 'Oil-tanned soft leather', stage: 2 },
            { name: 'Tanned Leather', description: 'Vegetable-tanned leather', stage: 2 },
            { name: 'tanned Leather', description: 'Chrome-tanned modern leather', stage: 4 }
        ],
        requirements: [
            { name: 'Hunted animal (deer, elk, bison)', value: 'Fresh kill' },
            { name: 'Flint Knife', value: 'For skinning' },
            { name: 'End Scraper', value: 'For fleshing' },
            { name: 'Salt or smoke', value: 'For preservation' }
        ],
        steps: [
            { text: 'Skin the animal immediately after the hunt using a flint knife. Make careful cuts to avoid damaging the hide.' },
            { text: 'Remove all meat, fat, and membrane from the hide using the end scraper. This is called "fleshing" and must be done within hours of the kill.' },
            { text: 'Fresh hide can be worked immediately (fresh hide leather) or preserved by salting or smoking for later use.' },
            { text: 'Raw hide is processed into leather through stretching, braining (applying animal brain paste), and smoking.' },
            { text: 'Leather products: clothing (tunics, cloaks, moccasins), shelter (tipi covers, door flaps), containers (bags, water bottles).' }
        ],
        videoUrl: 'https://youtu.be/rcFJOcppQa4?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'plant-fiber',
        name: 'Plant Fiber (Nettle, Yucca, Cedar Bark)',
        stage: 1,
        icon: '🌿',
        category: 'resource',
        objective: 'Harvest and process plant fibers for cordage, weaving, and tinder.',
        evolution: 'Plant fiber is the foundation of cordage — and without cordage, there is no bow drill, no hafted axe, no atlatl, and no sewing.',
        upgrades: [
            { name: 'Raw Fibers', description: 'Processed plant fibers', stage: 1 },
            { name: 'Twisted Cord', description: 'Two-ply cordage', stage: 1 },
            { name: 'Woven Cloth', description: 'Loom-woven fabric', stage: 2 },
            { name: 'Cotton Thread', description: 'Spun cotton fiber', stage: 2 },
            { name: 'Synthetic Fiber', description: 'Nylon, polyester', stage: 4 }
        ],
        requirements: [
            { name: 'Nettle stalks / Yucca leaves / Cedar bark', value: 'Seasonal harvest' },
            { name: 'Water', value: 'For retting (soaking)' },
            { name: 'Stone scraper', value: 'For processing' }
        ],
        steps: [
            { text: 'Nettle: Harvest stalks in autumn. Soak (ret) in water for several days, then beat and scrape to separate the long fibers.' },
            { text: 'Yucca: Crush leaves with a stone, scrape away the green flesh to reveal long, strong white fibers.' },
            { text: 'Cedar bark: Peel long strips of inner bark from fallen cedar trees. Soak in water for flexibility.' },
            { text: 'Process fibers by twisting two bundles in opposite directions (reverse-wrap technique) to create strong cordage.' },
            { text: 'Plant fiber cordage is used for: bow drill strings, axe haft binding, atlatl lashing, sewing thread, basket weaving, and fish line.' }
        ],
        videoUrl: 'https://youtu.be/C5FVJVcEJco?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'ochre',
        name: 'Ochre (Red & Yellow Pigment)',
        stage: 1,
        icon: '🔴',
        category: 'resource',
        objective: 'Gather iron oxide pigments for paint, body art, tanning, and symbolic communication.',
        evolution: 'Ochre is the first pigment. It enables cave art, body decoration, hide tanning, and the symbolic communication that defines human culture.',
        upgrades: [
            { name: 'Raw Ochre', description: 'Ground iron oxide pigment', stage: 1 },
            { name: 'Fat-bound Pigment', description: 'Ochre mixed with fat', stage: 1 },
            { name: 'Mineral Paint', description: 'Processed earth pigments', stage: 2 },
            { name: 'Lead White', description: 'Synthetic white pigment', stage: 3 },
            { name: 'Synthetic Dyes', description: 'Modern chemical dyes', stage: 4 }
        ],
        requirements: [
            { name: 'Iron-rich soil or rock', value: 'Red or yellow deposits' },
            { name: 'Grinding stone', value: 'For powdering' },
            { name: 'Water or fat', value: 'For mixing paint' }
        ],
        steps: [
            { text: 'Ochre is naturally occurring iron oxide (red) or iron hydroxide (yellow). It is found in soil deposits, rock formations, and clay beds.' },
            { text: 'Grind ochre on a flat stone with a grinding stone to produce fine powder.' },
            { text: 'Mix powder with water for paint, or with animal fat for a more durable, waterproof pigment.' },
            { text: 'Uses: cave art (Lascaux, Chauvet), body decoration, hide tanning (ochre-tanned leather is more durable), and symbolic communication.' },
            { text: 'Ochre use dates back 300,000+ years — it is one of the earliest evidences of symbolic human behavior.' }
        ],
        videoUrl: 'https://youtu.be/8kX2WvMnM3Q?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'charcoal',
        name: 'Charcoal',
        stage: 1,
        icon: '⬛',
        category: 'resource',
        objective: 'Produce high-carbon fuel by burning wood in a low-oxygen environment.',
        evolution: 'Charcoal burns hotter and cleaner than wood. It is the essential fuel for pottery firing, metal smelting, and glass-making.',
        upgrades: [
            { name: 'Wood Coal', description: 'Slow-burned coal from heap', stage: 1 },
            { name: 'Kiln Charcoal', description: 'Controlled charcoal production', stage: 1 },
            { name: 'Coke', description: 'Smelter fuel from coal', stage: 3 },
            { name: 'Anthracite', description: 'High-carbon coal for industry', stage: 3 }
        ],
        requirements: [
            { name: 'Hardwood Logs', value: '200+ kg' },
            { name: 'Earth Kiln Site', value: 'Well-drained, near wood supply' },
            { name: 'Soil/Grass Cover', value: 'For sealing the mound' }
        ],
        steps: [
            { text: 'Stack hardwood logs in a dome-shaped mound (1.5m diameter, 1m tall) or dig a pit.' },
            { text: 'Cover the mound completely with soil and grass, leaving a central chimney hole and a few small air vents at the base.' },
            { text: 'Light a fire at the center top. Allow it to burn down until the wood is carbonizing.' },
            { text: 'Seal the chimney and vents with soil once smoke turns from white (water vapor) to thin blue (pyrolysis gases).' },
            { text: 'Let the mound cool for 24 hours before opening. The result is pure charcoal, not ash.' },
            { text: 'Charcoal is used for: high-heat pottery kilns, iron smelting bloomeries, black pigment (drawing), and water filtration.' }
        ],
        videoUrl: 'https://youtu.be/yxEupzz8mSY?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'clay-bricks',
        name: 'Clay Bricks',
        stage: 1,
        icon: '🧱',
        category: 'resource',
        objective: 'Mold and fire clay into standardized, durable building blocks.',
        evolution: 'Fired bricks enable permanent structures: kilns, furnaces, walls, and eventually cities. They are the backbone of civilization.',
        upgrades: [
            { name: 'Sun-Dried Bricks', description: 'Air-dried mud bricks for temporary structures', stage: 1 },
            { name: 'Fired Clay Bricks', description: 'Kiln-fired bricks for permanent construction', stage: 1 },
            { name: 'Roman Bricks', description: 'Standardized Roman bricks with kiln technology', stage: 3 },
            { name: 'Concrete', description: 'Roman concrete (pozzolan) for massive structures', stage: 4 }
        ],
        requirements: [
            { name: 'River Clay', value: 'Processed and cleaned' },
            { name: 'Sand or Grog (Crushed pottery)', value: '20% mix to prevent cracking' },
            { name: 'Wooden Molds', value: 'Rectangular frames' },
            { name: 'Drying Area', value: 'Flat, shaded ground' }
        ],
        steps: [
            { text: 'Mix cleaned clay with sand or crushed pottery (grog) at a 4:1 ratio. This "temper" prevents the brick from cracking during drying and firing.' },
            { text: 'Press the clay mixture into wooden molds. Remove the mold to leave a "green" (unfired) brick.' },
            { text: 'Dry the bricks in the shade for 1–2 weeks. Direct sun will cause them to crack.' },
            { text: 'Once bone-dry, stack the bricks in a clamp kiln (a temporary structure made of bricks and fuel).' },
            { text: 'Fire the kiln slowly over 24–48 hours. The bricks should reach a cherry-red color and ring when struck.' },
            { text: 'Fired bricks are waterproof and can withstand 1000°C+. They are used for: kiln walls, furnace linings, house foundations, and paved floors.' }
        ],
        videoUrl: 'https://youtu.be/PjBTKe8Y44c?si=2-tXDnEzRWwPO--x'
    },
    // === MOTHER EARTH NATURAL RESOURCES ===
    {
        id: 'fresh-water',
        name: 'Fresh Water',
        stage: 1,
        icon: '💧',
        category: 'resource',
        objective: 'Locate and collect potable water from springs, rivers, and rain — the most essential resource for all life and craft.',
        evolution: 'Water is the foundation of all civilization. Every settlement requires a reliable freshwater source for drinking, cooking, processing materials, and hygiene.',
        upgrades: [
            { name: 'Raw Water', description: 'Collected from natural sources', stage: 1 },
            { name: 'Filtered Water', description: 'Sand/charcoal filtered', stage: 1 },
            { name: 'Boiled Water', description: 'Heat-purified water', stage: 1 },
            { name: 'Distilled Water', description: 'Condensed steam water', stage: 3 },
            { name: 'Filtered (Modern)', description: 'Activated carbon filters', stage: 4 },
            { name: 'RO Water', description: 'Reverse osmosis water', stage: 5 }
        ],
        requirements: [
            { name: 'Water source (spring, river, rain)', value: 'Clean, flowing' },
            { name: 'Collection containers', value: 'Baskets, shells, or clay pots' },
            { name: 'Knowledge of safe sources', value: 'Avoid stagnant water' }
        ],
        steps: [
            { text: 'Locate freshwater sources: springs (underground water emerging at surface), rivers/streams, rainwater collection, or dew.' },
            { text: 'Test water quality: flowing water is safer than stagnant water. Clear water with visible bottom is preferable.' },
            { text: 'Collect water in containers: woven baskets lined with clay or pitch, large shells, animal stomachs, or hollowed gourds.' },
            { text: 'If water is cloudy or muddy, filter through layers of sand, charcoal, and cloth (if available) to clarify.' },
            { text: 'Boiling water (using hot stones dropped into containers) kills pathogens — the earliest water purification method.' },
            { text: 'Water is used for: drinking, cooking, processing clay, retting plant fibers, tanning hides, and cleaning tools and materials.' }
        ],
        videoUrl: 'https://youtu.be/xzJ85rbx7QA?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'shells',
        name: 'Shells (Marine & Freshwater)',
        stage: 1,
        icon: '🐚',
        category: 'resource',
        objective: 'Collect shells for tools, containers, ornaments, and trade items.',
        evolution: 'Shells are among the earliest containers, tools, and ornaments. They serve as scoops, bowls, beads, and currency in trade networks.',
        requirements: [
            { name: 'Access to water bodies', value: 'Ocean, river, lake' },
            { name: 'Collection knowledge', value: 'Identify useful shell types' },
            { name: 'Stone tool (for drilling)', value: 'For making holes' }
        ],
        steps: [
            { text: 'Collect shells from beaches, riverbeds, and lake shores. Look for large, intact specimens without cracks.' },
            { text: 'Large shells (conch, clam, mussel) serve as containers, scoops, and mixing bowls. Clean thoroughly before use.' },
            { text: 'Small, colorful shells are drilled with a stone or bone drill to create beads for necklaces, bracelets, and trade items.' },
            { text: 'Shell edges can be sharpened on sandstone to create cutting tools — shell knives are effective for soft materials.' },
            { text: 'Shell trumpets (large conch shells with the tip removed) are among the earliest musical instruments.' },
            { text: 'Shells were used as currency in many ancient cultures — a universal trade item across tribes and regions.' }
        ],
        videoUrl: 'https://youtu.be/ZlQlGyK2u7I?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'feathers',
        name: 'Feathers',
        stage: 1,
        icon: '🪶',
        category: 'resource',
        objective: 'Collect bird feathers for fletching, insulation, decoration, and ceremonial use.',
        evolution: 'Feathers enable accurate arrows (fletching), provide lightweight insulation, and serve as status symbols and ceremonial objects.',
        requirements: [
            { name: 'Bird feathers (various species)', value: 'Flight feathers, down feathers' },
            { name: 'Storage container', value: 'Dry, protected place' }
        ],
        steps: [
            { text: 'Collect feathers from molted bird plumage or harvested birds. Different feathers serve different purposes.' },
            { text: 'Flight feathers (from wings and tail) are stiff and curved — ideal for arrow fletching. Attach 2–3 feathers to arrow shafts with sinew and resin.' },
            { text: 'Down feathers (soft, fluffy under-layer) provide excellent insulation. Stuff into clothing, bedding, or shelter walls for warmth.' },
            { text: 'Decorative feathers (brightly colored or rare) are used in headdresses, ceremonial objects, and status symbols.' },
            { text: 'Feathers are lightweight, water-resistant, and durable — they enhance hunting equipment, comfort, and cultural expression.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'natural-dyes',
        name: 'Natural Dyes & Pigments',
        stage: 1,
        icon: '🎨',
        category: 'resource',
        objective: 'Extract colors from plants, minerals, and earth for body paint, fabric dye, and art.',
        evolution: 'Natural dies enable personal adornment, cultural identity, artistic expression, and later, textile coloring and trade goods.',
        requirements: [
            { name: 'Ochre (red/yellow)', value: 'Iron oxide deposits' },
            { name: 'Charcoal (black)', value: 'From fire pits' },
            { name: 'Clay (white)', value: 'Kaolin or white clay' },
            { name: 'Plant materials', value: 'Berries, bark, leaves' },
            { name: 'Mordant (fixative)', value: 'Urine, clay, or wood ash' }
        ],
        steps: [
            { text: 'Red/Yellow: Grind ochre into powder. Mix with water for paint, or with animal fat for waterproof pigment.' },
            { text: 'Black: Collect charcoal from fire pits. Grind finely and mix with water or fat.' },
            { text: 'White: Use kaolin clay or white chalk. Grind and mix with water for paint.' },
            { text: 'Green/Brown/Blue: Boil or crush berries, leaves, bark, and roots. Different plants yield different colors — experimentation is key.' },
            { text: 'Mordant (fixative): Add urine, clay, or wood ash to plant dyes to help colors bind to fabric or skin and last longer.' },
            { text: 'Dyes are used for: body paint (ceremonial, warfare, status), fabric and leather coloring, cave art, and pottery decoration.' }
        ],
        videoUrl: 'https://youtu.be/_arv-ZWmbUc?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'beeswax-honey',
        name: 'Beeswax & Honey',
        stage: 1,
        icon: '🍯',
        category: 'resource',
        objective: 'Harvest beeswax for adhesive and waterproofing, and honey for food and medicine.',
        evolution: 'Beeswax strengthens adhesives and waterproofs containers. Honey is the primary sweetener and an antiseptic wound treatment.',
        upgrades: [
            { name: 'Raw Honey', description: 'Wild honeycomb honey', stage: 1 },
            { name: 'Rendered Wax', description: 'Processed beeswax cakes', stage: 1 },
            { name: 'Honeycomb', description: 'Fresh comb with honey', stage: 1 },
            { name: 'Beeswax Candles', description: 'Molded wax candles', stage: 2 },
            { name: 'Refined Sugar', description: 'Crystallized/processed sugar', stage: 3 },
            { name: 'HFCS', description: 'High-fructose corn syrup', stage: 5 }
        ],
        requirements: [
            { name: 'Wild bee hive', value: 'Located in tree or rock' },
            { name: 'Smoke (for calming bees)', value: 'Smoldering grass' },
            { name: 'Collection containers', value: 'Shells, bark, or clay pots' },
            { name: 'Protective covering', value: 'Thick clothing, smoke' }
        ],
        steps: [
            { text: 'Locate wild bee hives in tree cavities, rock crevices, or underground. Follow bee flight paths at dawn/dusk.' },
            { text: 'Use smoke (smoldering grass or wood) to calm bees before opening the hive. Work quickly and carefully.' },
            { text: 'Harvest honeycomb — scrape honey into containers. Honey is food, medicine (antiseptic), and fermentable into mead.' },
            { text: 'Collect beeswax by melting honeycomb over low heat. Strain to remove impurities.' },
            { text: 'Beeswax uses: mixed with pine resin for stronger adhesive, waterproofing containers and shelters, candle-making, and leather conditioning.' }
        ],
        videoUrl: 'https://youtu.be/EAt0pkag9YY?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'moss-lichen',
        name: 'Moss & Lichen',
        stage: 1,
        icon: '🌱',
        category: 'resource',
        objective: 'Gather moss and lichen for tinder, insulation, bandages, and dye.',
        evolution: 'Moss and lichen are versatile resources — fire tinder, wound dressings, insulation, and natural dye sources.',
        requirements: [
            { name: 'Moss (dry)', value: 'From trees, rocks, forest floor' },
            { name: 'Lichen', value: 'Various species on trees and rocks' }
        ],
        steps: [
            { text: 'Collect dry moss from forest floors, tree trunks, and shaded rocks. Dry moss is excellent tinder for catching fire embers.' },
            { text: 'Lichen (crusty growths on trees and rocks) is also highly flammable — collect orange, yellow, and gray varieties.' },
            { text: 'Fresh sphagnum moss is absorbent and antiseptic — use as wound dressings and bandages in emergencies.' },
            { text: 'Moss and lichen provide insulation: stuff into clothing, bedding, or shelter walls for warmth.' },
            { text: 'Some lichens produce natural dyes: boil to extract yellow, orange, brown, and purple colors for fabric and body paint.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'natural-cordage-plants',
        name: 'Natural Cordage Plants (Willow Bark, Grapevine)',
        stage: 1,
        icon: '🌿',
        category: 'resource',
        objective: 'Harvest flexible bark and vines for immediate-use cordage without extensive processing.',
        evolution: 'Willow bark and grapevines provide ready-made cordage — stronger and faster to use than processed plant fibers.',
        requirements: [
            { name: 'Willow trees', value: 'Young, flexible bark' },
            { name: 'Grapevines or similar', value: 'Long, flexible vines' },
            { name: 'Stone knife', value: 'For harvesting' }
        ],
        steps: [
            { text: 'Willow bark: Cut young willow branches and peel the inner bark in long strips. Soak in water for flexibility.' },
            { text: 'Grapevines: Cut long, flexible vines from grape plants. Remove outer bark to reveal strong, flexible inner wood.' },
            { text: 'Both materials can be used immediately as cordage — no twisting or processing required.' },
            { text: 'Willow bark and vines are used for: binding tool handles, lashing shelter poles, creating baskets, tying bundles, and temporary repairs.' },
            { text: 'Willow bark contains salicylic acid (natural aspirin) — chew for pain relief or boil for medicinal tea.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'gums-saps',
        name: 'Tree Gums & Saps (Birch, Maple, Spruce)',
        stage: 1,
        icon: '🌳',
        category: 'resource',
        objective: 'Collect edible and useful saps from trees for food, medicine, and adhesive.',
        evolution: 'Tree saps provide sugar, medicine, and waterproof adhesives — a versatile natural resource from multiple tree species.',
        requirements: [
            { name: 'Birch, Maple, or Spruce trees', value: 'Healthy, mature trees' },
            { name: 'Collection container', value: 'Shells, bark, or clay pots' },
            { name: 'Stone tool', value: 'For tapping or cutting' }
        ],
        steps: [
            { text: 'Birch sap: Tap birch trees in early spring by making a small cut. Collect the clear, slightly sweet liquid. Rich in vitamins and minerals.' },
            { text: 'Maple sap: Tap maple trees in late winter/early spring. Boil down to create maple sugar — concentrated energy and trade item.' },
            { text: 'Spruce resin (spruce gum): Collect from tree bark. Chew as natural chewing gum (antiseptic), or use as waterproof adhesive.' },
            { text: 'Tree saps and gums are used for: food (sugar, drink), medicine (antiseptic, vitamin C), adhesive (hafting, waterproofing).' },
            { text: 'Spruce gum is antibacterial — apply directly to cuts and wounds to prevent infection. One of the earliest field medicines.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'earth-pigments',
        name: 'Earth Pigments (Chalk, Gypsum, Manganese)',
        stage: 1,
        icon: '⚪',
        category: 'resource',
        objective: 'Mine natural minerals for white, black, and colored pigments for art and ceremony.',
        evolution: 'Earth pigments expand the color palette beyond ochre — enabling complex art, symbolism, and cultural expression.',
        requirements: [
            { name: 'Chalk or gypsum deposits', value: 'White mineral sources' },
            { name: 'Manganese ore', value: 'Black/dark purple pigment' },
            { name: 'Grinding stone', value: 'For powdering minerals' }
        ],
        steps: [
            { text: 'Chalk (calcium carbonate): Mine from exposed chalk beds or limestone formations. Grind to white powder for paint.' },
            { text: 'Gypsum (calcium sulfate): Found in sedimentary deposits. Grind to white or translucent powder.' },
            { text: 'Manganese ore (manganese dioxide): Mine from dark mineral deposits. Grind to black or dark purple powder — used in cave art.' },
            { text: 'Mix mineral powders with water for paint, or with animal fat for durable, waterproof pigment.' },
            { text: 'Earth pigments are used for: cave art (Chauvet, Altamira), body decoration, pottery decoration, and ceremonial objects.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'pumice',
        name: 'Pumice',
        stage: 1,
        icon: '🫧',
        category: 'resource',
        objective: 'Collect lightweight volcanic rock for abrasive grinding, polishing, and smoothing.',
        evolution: 'Pumice is a natural abrasive superior to sandstone for fine work — smoothing wood, polishing bone, and sharpening tools.',
        requirements: [
            { name: 'Volcanic region access', value: 'Preferred, or trade networks' },
            { name: 'Collection container', value: 'For transport' }
        ],
        steps: [
            { text: 'Pumice forms from explosive volcanic eruptions — lightweight, porous volcanic rock. Found in volcanic regions or riverbeds downstream.' },
            { text: 'Pumice is an excellent abrasive — use for smoothing wood, polishing bone tools, and refining stone edges.' },
            { text: 'Different pumice grades (fine, medium, coarse) serve different purposes — select based on the task.' },
            { text: 'Pumice is also used for: cleaning hides, smoothing pottery surfaces, personal hygiene (skin exfoliation), and sharpening tools.' },
            { text: 'If not locally available, pumice was traded over long distances due to its unique properties.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'amber',
        name: 'Amber (Fossilized Resin)',
        stage: 1,
        icon: '🟠',
        category: 'resource',
        objective: 'Collect fossilized tree resin for ornaments, trade, and early understanding of natural electricity.',
        evolution: 'Amber is beautiful and tradeable. When rubbed, it creates static electricity — the earliest observation of electrical phenomena.',
        requirements: [
            { name: 'Baltic coast or amber deposits', value: 'Primary sources' },
            { name: 'Collection container', value: 'For transport' }
        ],
        steps: [
            { text: 'Amber is fossilized tree resin, found primarily in Baltic coastal regions and ancient forest deposits.' },
            { text: 'Collect amber from beaches (washed ashore), riverbeds, or mine from sedimentary deposits.' },
            { text: 'Amber is carved, drilled, and polished into beads, pendants, and ornaments. Highly valued for its warm color and translucency.' },
            { text: 'When rubbed with fur or cloth, amber attracts lightweight materials (feathers, dust) — the earliest observation of static electricity (Greek "elektron" = amber).' },
            { text: 'Amber was traded across Europe and Asia for thousands of years — the "Amber Road" predates the Silk Road.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'peat',
        name: 'Peat (Decomposed Organic Matter)',
        stage: 1,
        icon: '🟤',
        category: 'resource',
        objective: 'Harvest decomposed plant matter from bogs for fuel, insulation, and water filtration.',
        evolution: 'Peat burns slowly and steadily — a valuable fuel in treeless regions. It also insulates shelters and filters water.',
        requirements: [
            { name: 'Bog or peatland', value: 'Wetland area' },
            { name: 'Cutting tool', value: 'Stone or bone knife' },
            { name: 'Drying area', value: 'Flat, ventilated ground' }
        ],
        steps: [
            { text: 'Locate peat bogs — wetlands where plant matter accumulates and partially decomposes over centuries.' },
            { text: 'Cut peat into blocks or bricks using a stone or bone knife. Fresh peat is dark, dense, and saturated.' },
            { text: 'Dry peat blocks in the sun and wind for several days until lightweight and crumbly.' },
            { text: 'Burn dried peat for steady, slow-burning fuel — especially valuable in regions without abundant wood.' },
            { text: 'Peat is also used for: insulation (stuff into shelter walls), water filtration (layer in containers), and preserving organic materials (bogs preserve bodies and artifacts).' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'salt-deposits',
        name: 'Salt (Natural Deposits & Evaporation)',
        stage: 1,
        icon: '🧂',
        category: 'resource',
        objective: 'Harvest salt from deposits, springs, or seawater evaporation — essential for food preservation and health.',
        evolution: 'Salt preserves food, flavors meals, maintains electrolyte balance, and becomes one of the most valuable trade commodities in history.',
        requirements: [
            { name: 'Salt deposits, springs, or seawater', value: 'Natural salt sources' },
            { name: 'Evaporation pan', value: 'Flat stone or clay tray' },
            { name: 'Collection container', value: 'For storage' }
        ],
        steps: [
            { text: 'Locate salt sources: exposed salt rock deposits, salt springs, seawater, or salty soil in arid regions.' },
            { text: 'Rock salt: Mine directly from exposed deposits. Crush and purify by dissolving in water and filtering.' },
            { text: 'Seawater/spring water: Pour into shallow stone or clay pan. Allow sun and wind to evaporate water, leaving salt crystals.' },
            { text: 'Collect and store salt in dry, covered containers. Salt absorbs moisture — keep it protected from humidity.' },
            { text: 'Salt is used for: preserving meat and fish (prevents spoilage), flavoring food, maintaining health (electrolytes), and trade (salt was currency).' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'natural-sponges',
        name: 'Natural Sponges (Marine & Plant)',
        stage: 1,
        icon: '🧽',
        category: 'resource',
        objective: 'Harvest marine sponges or fibrous plants for cleaning, painting, and personal hygiene.',
        evolution: 'Sponges are versatile cleaning tools — used for pottery smoothing, paint application, hygiene, and filtering.',
        requirements: [
            { name: 'Marine sponges (ocean)', value: 'From shallow waters' },
            { name: 'OR fibrous plants', value: 'Loofah, dried moss' }
        ],
        steps: [
            { text: 'Marine sponges: Harvest from shallow ocean waters. Clean thoroughly by rinsing in fresh water and sun-drying.' },
            { text: 'Plant alternatives: Dried loofah (gourd interior) or dense moss bundles serve similar purposes.' },
            { text: 'Sponges are used for: cleaning pottery surfaces (smoothing clay), applying paint and dye (stamping), personal hygiene (body cleaning), and filtering liquids.' },
            { text: 'Sponges absorb and release liquids smoothly — making them ideal for detailed craftwork and daily hygiene.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    // === STAGE 2 PREPARATION RESOURCES (Agriculture & Settlement) ===
    {
        id: 'wild-grains',
        name: 'Wild Grains (Wheat, Barley, Rice)',
        stage: 1,
        icon: '🌾',
        category: 'resource',
        objective: 'Gather wild cereal grains — the foundation of the agricultural revolution.',
        evolution: 'Wild grain collection leads to deliberate planting and harvesting — the birth of agriculture and settled life.',
        requirements: [
            { name: 'Wild grain stands', value: 'Wheat, barley, rice, or millet' },
            { name: 'Sickle or harvesting knife', value: 'Flint blade in wood handle' },
            { name: 'Collection baskets', value: 'Woven containers' },
            { name: 'Quern stone', value: 'For grinding grain' }
        ],
        steps: [
            { text: 'Locate wild grain stands: open grasslands, river valleys, and disturbed soil where cereals grow naturally.' },
            { text: 'Harvest grain by grasping stalks and cutting with a flint sickle. Collect when grains are mature but before they shatter.' },
            { text: 'Dry the harvested grain in the sun on flat stones or woven mats. This prevents sprouting and mold.' },
            { text: 'Thresh grain by beating dried stalks to separate seeds from chaff. Winnow by tossing in the wind — chaff blows away, grain falls.' },
            { text: 'Store surplus grain in dry, sealed pits, baskets, or clay containers. This is the first step toward food surplus and settled communities.' },
            { text: 'Experiment with planting spilled or stored grains near camp — this leads to deliberate cultivation and the Neolithic Revolution.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'wild-legumes',
        name: 'Wild Legumes (Lentils, Peas, Beans)',
        stage: 1,
        icon: '🫘',
        category: 'resource',
        objective: 'Collect wild legumes — protein-rich complement to grains that also fix nitrogen in soil.',
        evolution: 'Legumes provide complete nutrition with grains and improve soil fertility — essential for sustainable agriculture.',
        requirements: [
            { name: 'Wild legume patches', value: 'Lentils, peas, beans, vetch' },
            { name: 'Collection basket', value: 'For harvesting' },
            { name: 'Drying area', value: 'Sun-exposed surface' }
        ],
        steps: [
            { text: 'Locate wild legumes: open fields, forest edges, and rocky slopes where lentils, peas, and beans grow naturally.' },
            { text: 'Harvest legume pods when mature and dry. Collect by hand-picking or stripping pods from plants.' },
            { text: 'Dry pods in the sun until they rattle. Shell by crushing pods and separating seeds.' },
            { text: 'Legumes are protein-rich and store well — they complement grain-based diets for complete nutrition.' },
            { text: 'Legumes fix nitrogen in soil through root bacteria — planting them with grains improves soil fertility naturally.' },
            { text: 'The grain-legume combination is the nutritional and agricultural foundation of civilization.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'domesticable-animals',
        name: 'Domesticable Animals (Goats, Sheep, Cattle, Pigs)',
        stage: 1,
        icon: '🐐',
        category: 'resource',
        objective: 'Identify and begin managing wild animals suitable for domestication — future sources of food, wool, milk, and labor.',
        evolution: 'Animal domestication provides meat, milk, wool, leather, traction power, and transportation — multiplying human productive capacity.',
        requirements: [
            { name: 'Wild herd animals', value: 'Goats, sheep, cattle, pigs' },
            { name: 'Enclosure area', value: 'Natural pen or fenced space' },
            { name: 'Feed supply', value: 'Grain, forage, or grazing land' }
        ],
        steps: [
            { text: 'Identify suitable animals: herd species with hierarchical social structure (will accept human as leader), not overly aggressive, and breed in captivity.' },
            { text: 'Begin by managing hunted herds: keep young animals alive after hunts, raise them in enclosures near camp.' },
            { text: 'Select for docile traits: keep calmest animals, breed them together. Over generations, animals become more tame.' },
            { text: 'Provide food, water, and protection from predators. Animals provide meat, milk, wool, hides, and eventually traction power.' },
            { text: 'Goats/sheep provide milk, wool, and meat. Cattle provide milk, meat, leather, and plowing power. Pigs provide efficient meat production.' },
            { text: 'Domestication transforms human society: settled herders need permanent settlements, driving the Neolithic Revolution.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'fiber-plants',
        name: 'Fiber Plants (Flax, Hemp, Cotton)',
        stage: 1,
        icon: '🌿',
        category: 'resource',
        objective: 'Cultivate plants with strong fibers for weaving, cordage, and eventually textiles.',
        evolution: 'Fiber plants enable woven baskets, rope, nets, clothing, and sails — transforming storage, clothing, and transportation.',
        requirements: [
            { name: 'Flax or hemp seeds', value: 'For planting' },
            { name: 'Suitable soil', value: 'Well-drained, fertile' },
            { name: 'Water source', value: 'For retting (soaking)' },
            { name: 'Rippling comb', value: 'For removing seeds' }
        ],
        steps: [
            { text: 'Plant flax or hemp seeds in fertile, well-drained soil. These plants grow quickly (90–120 days) and require minimal care.' },
            { text: 'Harvest plants when stalks are mature but before seeds shatter. Pull entire plant to maximize fiber length.' },
            { text: 'Retting: soak stalks in water for 5–10 days. Bacteria break down pectin, separating fibers from woody core.' },
            { text: 'Dry and break stalks. Scrape and comb to extract long, strong fibers. Remove seeds (flaxseed/linseed) for food and oil.' },
            { text: 'Spin fibers into thread using a drop spindle. Weave thread into cloth using a simple loom.' },
            { text: 'Textile plants revolutionize human life: woven clothing replaces sewn hides, baskets replace containers, nets enable fishing, and sails enable wind-powered boats.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'dye-plants',
        name: 'Dye Plants (Woad, Madder, Indigo, Walnut)',
        stage: 1,
        icon: '🎨',
        category: 'resource',
        objective: 'Grow plants that produce vibrant, colorfast dyes for textiles and decoration.',
        evolution: 'Dye plants enable colorful textiles, cultural identity through clothing patterns, and valuable trade goods.',
        requirements: [
            { name: 'Dye plant seeds or roots', value: 'Woad (blue), madder (red), indigo, walnut' },
            { name: 'Dye pots', value: 'Clay or stone containers' },
            { name: 'Mordant', value: 'Alum, urine, or wood ash' }
        ],
        steps: [
            { text: 'Woad (Isatis tinctoria): grow for blue dye. Harvest leaves, ferment in water, then aerate to create blue pigment.' },
            { text: 'Madder (Rubia tinctorum): grow for red dye. Harvest roots, dry, and grind. Boil with mordant to extract red color.' },
            { text: 'Walnut hulls: collect green walnut husks. Boil to create rich brown dye — no mordant needed.' },
            { text: 'Mordant (fixative): treat fabric with alum, urine, or wood ash before dyeing. Mordant helps dye bind to fibers permanently.' },
            { text: 'Dye plants create cultural identity: specific colors and patterns identify tribes, status, and roles. They are also valuable trade items.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'orchard-trees',
        name: 'Orchard Trees (Fruit, Nut, Oil)',
        stage: 1,
        icon: '🌳',
        category: 'resource',
        objective: 'Plant and cultivate fruit, nut, and oil-producing trees for long-term food security.',
        evolution: 'Orchards provide reliable, predictable food sources year after year — anchoring permanent settlements.',
        requirements: [
            { name: 'Fruit/nut seeds or saplings', value: 'Fig, olive, apple, oak, walnut' },
            { name: 'Suitable planting site', value: 'Sun, good soil, water access' },
            { name: 'Protection', value: 'From animals and grazing' }
        ],
        steps: [
            { text: 'Plant fruit trees (fig, olive, apple, date) and nut trees (oak/acorns, walnut, chestnut) near settlements.' },
            { text: 'Trees take years to mature (3–10 years depending on species), but produce for decades once established.' },
            { text: 'Fruit is eaten fresh or dried for winter storage. Nuts are eaten, pressed for oil, or stored.' },
            { text: 'Olive trees produce oil for cooking, lighting (lamps), skin care, and religious ceremonies.' },
            { text: 'Orchards anchor permanent settlements: people return yearly to harvest, building infrastructure around orchard sites.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'medicinal-plants',
        name: 'Medicinal Plants (Willow, Yarrow, Plantain, Garlic)',
        stage: 1,
        icon: '🌿',
        category: 'resource',
        objective: 'Grow and identify healing plants for treating illness, wounds, and disease.',
        evolution: 'Medicinal plants reduce mortality from infection and disease — enabling larger, healthier populations.',
        requirements: [
            { name: 'Medicinal plant seeds or roots', value: 'Willow, yarrow, plantain, garlic, mint' },
            { name: 'Garden space', value: 'Near settlement for easy access' },
            { name: 'Drying area', value: 'Shaded, ventilated space' }
        ],
        steps: [
            { text: 'Willow bark: contains salicin (natural aspirin). Chew bark or boil for pain-relieving, anti-inflammatory tea.' },
            { text: 'Yarrow: staunches bleeding and heals wounds. Apply crushed leaves to wounds or brew as tea for fever reduction.' },
            { text: 'Plantain (not banana): drawing herb for wounds, insect bites, and infections. Crush leaves and apply as poultice.' },
            { text: 'Garlic: antibacterial, antifungal, immune support. Eat raw or cooked. Repels insects and parasites.' },
            { text: 'Mint: digestive aid and breath freshener. Brew as tea or chew leaves. Also repels insects.' },
            { text: 'Medicinal gardens near settlements reduce illness and death — critical for growing Neolithic populations.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'clay-deposits-large',
        name: 'Clay Deposits (Large-Scale for Pottery)',
        stage: 1,
        icon: '🏺',
        category: 'resource',
        objective: 'Locate and extract large quantities of quality clay for pottery production — the key technology of Stage 2.',
        evolution: 'Pottery enables food storage, cooking without burning, water purification, and trade goods — essential for settled life.',
        requirements: [
            { name: 'Large clay deposit', value: 'Riverbank, exposed clay bed' },
            { name: 'Digging tools', value: 'Stone axe, bone, or wooden digging sticks' },
            { name: 'Water', value: 'For processing clay' },
            { name: 'Drying area', value: 'Flat, shaded ground' }
        ],
        steps: [
            { text: 'Locate substantial clay deposits: riverbanks, road cuts, exposed sedimentary layers. Look for fine, plastic clay that holds together when wet.' },
            { text: 'Extract clay using digging sticks, stone tools, or hands if clay is soft. Remove topsoil and vegetation first.' },
            { text: 'Process clay: dry completely, break into small pieces, soak in water, stir to create slurry. Strain through fine mesh to remove rocks and debris.' },
            { text: 'Allow clay slurry to settle and dry to workable consistency. Knead (wedge) to remove air bubbles before use.' },
            { text: 'Add temper (sand, crushed pottery grog, or plant fiber) to reduce cracking during drying and firing.' },
            { text: 'Pottery is the defining technology of Stage 2: storage containers, cooking pots, water vessels, and trade goods.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'limestone-deposits',
        name: 'Limestone Deposits',
        stage: 1,
        icon: '⬜',
        category: 'resource',
        objective: 'Mine limestone for producing lime — essential for mortar, plaster, and nixtamalization of corn.',
        evolution: 'Lime enables permanent construction (mortar/plaster) and unlocks nutrition from corn (nixtamalization) — critical for settled societies.',
        requirements: [
            { name: 'Limestone outcrops', value: 'Exposed cliffs, quarries' },
            { name: 'Mining tools', value: 'Stone hammers, antler picks' },
            { name: 'Kiln site', value: 'Well-ventilated, near fuel source' }
        ],
        steps: [
            { text: 'Locate limestone deposits: exposed cliffs, quarries, or riverbeds with white/gray sedimentary rock. Limestone is calcium carbonate (CaCO₃).' },
            { text: 'Mine limestone by heating with fire then quenching with water (thermal shock fractures rock), or pry loose with antler picks.' },
            { text: 'Burn limestone in kiln at 900°C+ for several hours. This drives off CO₂, producing quicklime (calcium oxide, CaO).' },
            { text: 'Quicklime + water = slaked lime (calcium hydroxide). Use for: mortar (construction), plaster (wall coating), nixtamalization (corn processing).' },
            { text: 'Nixtamalization: cooking corn in lime solution releases niacin (vitamin B3) — prevents malnutrition in corn-dependent societies.' },
            { text: 'Lime mortar and plaster enable permanent, weatherproof buildings — transitioning from temporary shelters to houses.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'gypsum-deposits',
        name: 'Gypsum Deposits',
        stage: 1,
        icon: '⚪',
        category: 'resource',
        objective: 'Mine gypsum for making plaster — the earliest wall coating and floor material for permanent structures.',
        evolution: 'Gypsum plaster creates smooth, clean walls and floors — transforming mud huts into finished houses.',
        requirements: [
            { name: 'Gypsum deposits', value: 'Sedimentary formations' },
            { name: 'Mining tools', value: 'Stone picks, digging sticks' },
            { name: 'Grinding equipment', value: 'Quern stone or mortar' }
        ],
        steps: [
            { text: 'Locate gypsum deposits: sedimentary rock formations, often associated with limestone and salt deposits. Gypsum is calcium sulfate (CaSO₄·2H₂O).' },
            { text: 'Mine gypsum by prying loose with stone picks or digging from soft deposits. It is softer than limestone and easier to extract.' },
            { text: 'Crush and grind gypsum to powder. Heat gently (150–180°C) to drive off water, producing plaster of Paris (calcined gypsum).' },
            { text: 'Mix calcined gypsum with water — it rehydrates and hardens into solid plaster. Apply to walls for smooth, clean surfaces.' },
            { text: 'Gypsum plaster floors are clean, dry, and waterproof compared to dirt floors. This is a major quality-of-life improvement in permanent settlements.' },
            { text: 'Plaster walls can be painted with pigments — leading to interior decoration and the earliest wall art.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'sand-deposits',
        name: 'Sand Deposits',
        stage: 1,
        icon: '🟡',
        category: 'resource',
        objective: 'Collect clean sand for mortar, filtration, pottery temper, and eventually glass-making.',
        evolution: 'Sand is essential for mortar (construction), water filtration, pottery, and later glass-making — a versatile industrial material.',
        requirements: [
            { name: 'Sand deposit', value: 'Riverbed, beach, or desert' },
            { name: 'Collection containers', value: 'Baskets or bags' }
        ],
        steps: [
            { text: 'Locate clean sand deposits: riverbeds, beaches, or exposed sand layers. Avoid sand contaminated with soil or organic matter.' },
            { text: 'Collect sand and dry thoroughly. Screen to remove large debris (sticks, leaves, rocks) if fine sand is needed.' },
            { text: 'Sand is mixed with clay to make mortar (construction adhesive) and daub (wall coating in wattle-and-daub buildings).' },
            { text: 'Sand is used as a filtration medium: layer sand, charcoal, and gravel in containers to purify water.' },
            { text: 'In pottery, sand is used as temper (added to clay) to reduce cracking during drying and firing.' },
            { text: 'Later, sand is the primary ingredient in glass-making (with soda ash and lime at high temperatures).' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'gravel-deposits',
        name: 'Gravel Deposits',
        stage: 1,
        icon: '🪨',
        category: 'resource',
        objective: 'Collect gravel for construction, drainage, road surfacing, and concrete aggregate.',
        evolution: 'Gravel enables drainage (sanitation), road construction (transportation), and concrete (permanent buildings).',
        requirements: [
            { name: 'Gravel deposit', value: 'Riverbed, glacial deposit, quarry' },
            { name: 'Collection tools', value: 'Hands, baskets' }
        ],
        steps: [
            { text: 'Locate gravel deposits: riverbeds (water-sorted, rounded stones), glacial deposits (mixed sizes), or quarries.' },
            { text: 'Collect gravel by hand — stones 2mm to 75mm in size. Sort by size if needed for specific applications.' },
            { text: 'Gravel is used for: drainage layers (sanitation, prevent flooding), road surfacing (all-weather paths), and concrete aggregate.' },
            { text: 'Drainage: layer gravel under buildings or latrines to prevent water accumulation. This is critical for health in permanent settlements.' },
            { text: 'Roads: surface paths with gravel for all-weather travel. Gravel roads drain quickly and remain passable in rain.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'reeds-cattails',
        name: 'Reeds & Cattails',
        stage: 1,
        icon: '🌾',
        category: 'resource',
        objective: 'Harvest reeds and cattails from wetlands for weaving, construction, and food.',
        evolution: 'Reeds enable woven baskets, mats, shelter roofing, and early boats. Cattails provide edible roots and pollen.',
        requirements: [
            { name: 'Wetland area', value: 'Marsh, lake edge, slow river' },
            { name: 'Cutting tool', value: 'Flint knife or sickle' },
            { name: 'Drying area', value: 'Sun-exposed, ventilated' }
        ],
        steps: [
            { text: 'Locate reed beds and cattail stands in wetlands, lake edges, and slow-moving rivers. Harvest in late summer when stalks are mature.' },
            { text: 'Cut reeds near the base with a flint knife. Bundle and dry in the sun for several days. Dried reeds are lightweight and strong.' },
            { text: 'Weave reeds into: baskets (storage), mats (flooring, wall covering), thatch (roofing), and fences (windbreaks).' },
            { text: 'Cattails are edible: young shoots (vegetable), roots (starch flour), pollen (high-protein flour), and seed heads (fluff for insulation).' },
            { text: 'Reed boats (bundled reeds tied together) are among the earliest watercraft — enabling fishing, trade, and transportation.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'rushes-grasses',
        name: 'Rushes & Grasses (Thatching Material)',
        stage: 1,
        icon: '🌱',
        category: 'resource',
        objective: 'Collect long grasses and rushes for thatching roofs, weaving mats, and basket-making.',
        evolution: 'Thatch roofing sheds rain and insulates — transforming shelters into weatherproof homes.',
        requirements: [
            { name: 'Tall grass/reed beds', value: 'Meadows, wetlands' },
            { name: 'Cutting tool', value: 'Flint knife or sickle' },
            { name: 'Cordage', value: 'For binding thatch' }
        ],
        steps: [
            { text: 'Collect long grasses and rushes from meadows, marshes, and field edges. Harvest when mature but still flexible.' },
            { text: 'Dry grasses and rushes thoroughly in the sun. Bundle and store in dry location to prevent mold.' },
            { text: 'Thatch roofs: layer grasses/reeds thickly (30cm+) from bottom to top, overlapping like shingles. Secure with cordage or wooden pegs.' },
            { text: 'Properly applied thatch sheds rain completely, insulates against heat and cold, and lasts 15–30 years before replacement.' },
            { text: 'Grasses are also woven into: floor mats, sleeping mats, baskets, and cordage (twisted grass fiber).' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'construction-timber',
        name: 'Construction Timber',
        stage: 1,
        icon: '🪵',
        category: 'resource',
        objective: 'Harvest large, straight tree trunks for building permanent structures, fences, and boats.',
        evolution: 'Timber framing enables permanent houses, granaries, palisades, and boats — the infrastructure of settled civilization.',
        requirements: [
            { name: 'Mature trees', value: 'Oak, cedar, pine, cypress' },
            { name: 'Stone axes', value: 'Multiple for felling' },
            { name: 'Digging tools', value: 'For post holes' },
            { name: 'Cordage', value: 'For lashing joints' }
        ],
        steps: [
            { text: 'Select mature, straight tree trunks (20–40cm diameter, 3–6m long). Oak, cedar, pine, and cypress are most rot-resistant.' },
            { text: 'Fell trees with stone axes: cut notch on one side, then cut from opposite side until tree falls. Remove branches with axe.' },
            { text: 'Strip bark from logs to reduce rot and insect attraction. Season (air-dry) logs for several weeks before use.' },
            { text: 'Dig post holes (60–100cm deep). Set logs vertically for wall frames or horizontally for foundation beams.' },
            { text: 'Lash joints with cordage or peg with wooden dowels. Fill walls with wattle-and-daub (woven sticks + clay daub).' },
            { text: 'Timber structures: houses, granaries, palisades (defensive walls), bridges, and boats. Timber is the framework of permanent settlements.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'wattle-material',
        name: 'Wattle Material (Flexible Branches)',
        stage: 1,
        icon: '🌿',
        category: 'resource',
        objective: 'Gather flexible branches for weaving wall panels (wattle) to be coated with daub (clay).',
        evolution: 'Wattle-and-daub walls are fast, cheap, and durable — the standard construction method for thousands of years.',
        requirements: [
            { name: 'Flexible branches', value: 'Willow, hazel, ash, birch' },
            { name: 'Vertical stakes', value: 'Thicker, driven into ground' },
            { name: 'Clay daub', value: 'Clay + straw/manure mix' }
        ],
        steps: [
            { text: 'Collect flexible branches (1–2cm diameter) from willow, hazel, ash, or birch. These bend without breaking.' },
            { text: 'Drive thicker vertical stakes (3–5cm diameter) into the ground at 15–20cm intervals. These form the wall frame.' },
            { text: 'Weave flexible branches horizontally between vertical stakes in an over-under pattern. This creates a lattice (wattle).' },
            { text: 'Mix clay daub: 3 parts clay, 1 part sand, add chopped straw or animal manure (binder). Add water to stiff paste consistency.' },
            { text: 'Press daub onto both sides of wattle panel, filling all gaps. Smooth surface with wet hands. Let dry completely.' },
            { text: 'Wattle-and-daub walls are quick to build, well-insulated, fire-resistant, and last decades with maintenance.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'straw-chaff',
        name: 'Straw & Chaff',
        stage: 1,
        icon: '🌾',
        category: 'resource',
        objective: 'Collect grain processing byproducts for building material, animal feed, and fuel.',
        evolution: 'Straw strengthens clay (daub, bricks), feeds animals, and provides fuel or bedding — zero waste from grain processing.',
        requirements: [
            { name: 'Grain harvest residue', value: 'After threshing and winnowing' },
            { name: 'Storage area', value: 'Dry, ventilated' }
        ],
        steps: [
            { text: 'After threshing and winnowing grain, collect the remaining straw (stalks) and chaff (husks). These are byproducts, not waste.' },
            { text: 'Straw is chopped and mixed with clay daub or mud bricks. The straw acts as reinforcement, preventing cracking — like rebar in concrete.' },
            { text: 'Straw is also used for: animal bedding (absorbs waste, provides comfort), thatching roofs, weaving baskets and mats, and fuel.' },
            { text: 'Chaff is mixed with clay for pottery temper (reduces cracking), used as animal feed supplement, or burned as quick fuel.' },
            { text: 'Using straw and chaff productively means zero waste from grain harvest — maximizing the value of agricultural labor.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'mushrooms-fungi',
        name: 'Mushrooms & Fungi',
        stage: 1,
        icon: '🍄',
        category: 'resource',
        objective: 'Identify edible and useful mushrooms, plus fungi for fermentation and decomposition.',
        evolution: 'Mushrooms provide nutrition and medicine. Fungi enable fermentation (bread, beer, preservation) and composting.',
        requirements: [
            { name: 'Knowledge of edible species', value: 'Critical — many mushrooms are toxic' },
            { name: 'Collection basket', value: 'For harvesting' },
            { name: 'Drying area', value: 'Ventilated, shaded' }
        ],
        steps: [
            { text: 'Learn to identify edible mushrooms through careful observation and testing. Never eat unidentified mushrooms — many are toxic.' },
            { text: 'Common edibles: morels, chanterelles, oyster mushrooms, puffballs. Collect when fresh and firm, not slimy or insect-damaged.' },
            { text: 'Dry mushrooms for winter storage: string on cordage and hang in ventilated, shaded area. Dried mushrooms rehydrate well.' },
            { text: 'Wild yeast (on fruit skins, in air) enables fermentation: bread rising, beer brewing, and food preservation (pickling).' },
            { text: 'Decomposer fungi in compost piles break down organic matter into rich soil fertilizer — critical for sustained agriculture.' },
            { text: 'Some fungi produce antibiotics (penicillin from mold) — the earliest understanding of invisible healing agents.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'seaweed-kelp',
        name: 'Seaweed & Kelp',
        stage: 1,
        icon: '🌊',
        category: 'resource',
        objective: 'Harvest marine algae for food, fertilizer, and industrial applications.',
        evolution: 'Seaweed provides minerals, soil fertilizer, and later, soda ash for glass-making — a versatile marine resource.',
        requirements: [
            { name: 'Coastal access', value: 'Ocean or sea shoreline' },
            { name: 'Collection tool', value: 'Knife or hands' },
            { name: 'Drying area', value: 'Sun-exposed, elevated' }
        ],
        steps: [
            { text: 'Harvest seaweed and kelp from rocky shorelines at low tide. Cut above the holdfast (root) so plant regrows.' },
            { text: 'Edible seaweeds: nori, kelp, dulse, wakame. Rich in iodine, calcium, iron, and vitamins. Eat fresh, dried, or roasted.' },
            { text: 'Dry seaweed thoroughly and add to compost or directly to fields. Seaweed is excellent fertilizer — rich in trace minerals.' },
            { text: 'Burn dried kelp to extract ash. Kelp ash contains soda ash (sodium carbonate) — essential for glass-making and soap production.' },
            { text: 'Seaweed is also used: livestock feed supplement, pottery glaze ingredient, and insulation (packed in walls).' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'bone-meal',
        name: 'Bone Meal',
        stage: 1,
        icon: '⚪',
        category: 'resource',
        objective: 'Crush animal bones into powder for fertilizer, pigment, and soil amendment.',
        evolution: 'Bone meal returns phosphorus and calcium to soil — essential for sustained agriculture without soil depletion.',
        requirements: [
            { name: 'Animal bones', value: 'From butchered game' },
            { name: 'Fire or boiling water', value: 'For cleaning bones' },
            { name: 'Grinding equipment', value: 'Mortar, quern, or hammerstone' }
        ],
        steps: [
            { text: 'Collect bones from butchered animals. Clean by boiling or burning to remove all meat, fat, and connective tissue.' },
            { text: 'Dry cleaned bones thoroughly in sun. Bones should be white or light-colored, not greasy.' },
            { text: 'Crush bones with hammerstone or grind on quern stone until fine powder. Bone meal should be coarse powder to fine dust.' },
            { text: 'Bone meal is rich in phosphorus (plant growth) and calcium (soil pH). Add to garden soil or compost to prevent nutrient depletion.' },
            { text: 'Bone meal is also used: white pigment (calcined bone), abrasive (polishing), and source of gelatin (boiled bones).' },
            { text: 'Returning bone meal to fields closes the nutrient loop — enabling centuries of continuous farming without soil exhaustion.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'wood-ash',
        name: 'Wood Ash',
        stage: 1,
        icon: '⚪',
        category: 'resource',
        objective: 'Collect ash from fire pits for soap-making, fertilizer, pottery glaze, and nixtamalization.',
        evolution: 'Wood ash provides alkali for soap, potassium for plants, flux for soldering, and glaze for pottery — fire waste becomes resource.',
        requirements: [
            { name: 'Fire pit ash', value: 'From hardwood fires, uncontaminated' },
            { name: 'Sifting screen', value: 'To remove charcoal and debris' },
            { name: 'Storage container', value: 'Dry, covered' }
        ],
        steps: [
            { text: 'Collect white/gray ash from fire pits after fires are completely cool. Use ash from hardwood fires — richer in minerals than softwood.' },
            { text: 'Sift ash through fine mesh or woven fiber to remove unburned charcoal, rocks, and debris. Fine ash is more useful.' },
            { text: 'Soap-making: mix wood ash with water, filter liquid (lye). Mix lye with animal fat — chemical reaction produces soap.' },
            { text: 'Fertilizer: wood ash is rich in potassium (plant flowering/fruiting) and trace minerals. Sprinkle on garden soil.' },
            { text: 'Pottery glaze: mix ash with water, apply to pottery before firing. Ash melts into natural glass glaze at high temperatures.' },
            { text: 'Wood ash is also used: nixtamalization (corn processing), flea repellent (sprinkle on bedding), and winter traction (on ice).' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    // === STAGE 2: NEOLITHIC REVOLUTION ===
    {
        id: 'pottery-vessel',
        name: 'Pottery Vessel',
        stage: 2,
        icon: '🏺',
        category: 'tool',
        objective: 'Create fired clay containers for storage, cooking, and water transportation.',
        evolution: 'Pottery enables food storage, cooking without burning containers, water purification — essential for settled life.',
        upgrades: [
            { name: 'Hand-built Pottery', description: 'Coil/pinch pottery', stage: 2 },
            { name: 'Wheel-thrown Pottery', description: 'Fast wheel thrown', stage: 2 },
            { name: 'Glazed Pottery', description: 'Functional glaze coating', stage: 3 },
            { name: 'Porcelain', description: 'High-fire refined ceramics', stage: 4 },
            { name: 'Industrial Ceramics', description: 'Engineered ceramic components', stage: 5 }
        ],
        requirements: [
            { name: 'Clay (processed)', value: '5–10 kg, cleaned and wedged' },
            { name: 'Temper (sand/grog)', value: '20% of clay volume' },
            { name: 'Paddle and anvil', value: 'Wooden paddle, stone anvil' },
            { name: 'Kiln or pit firing site', value: 'Well-ventilated, fuel source' },
            { name: 'Slip (liquid clay)', value: 'For surface finishing' }
        ],
        steps: [
            { text: 'Prepare clay by mixing with temper (sand or crushed pottery) at 4:1 ratio. Wedge thoroughly to remove air bubbles.' },
            { text: 'Form vessel using coiling technique: roll clay into long ropes, coil them in circles, building upward.' },
            { text: 'Smooth walls using paddle and anvil technique. Apply slip (liquid clay) for surface finishing.' },
            { text: 'Let vessel dry slowly in shade for 1–2 weeks until bone-dry (greenware). Rapid drying causes cracking.' },
            { text: 'Fire in kiln or pit: start with low heat to drive off remaining moisture, then increase to 800–1000°C for several hours.' },
            { text: 'Let kiln cool slowly over 24 hours. Finished pottery should ring when tapped and be waterproof.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'loom-weaving',
        name: 'Loom & Weaving',
        stage: 2,
        icon: '🧵',
        category: 'skill',
        objective: 'Build a simple loom and weave plant fibers into cloth for clothing and containers.',
        evolution: 'Weaving transforms fiber plants into textiles — replacing sewn hides with tailored clothing.',
        requirements: [
            { name: 'Loom frame (wood)', value: '1×1m or larger' },
            { name: 'Warp thread (flax/hemp)', value: '500g+ spun thread' },
            { name: 'Weft shuttle', value: 'Wooden shuttle' },
            { name: 'Heddle sticks', value: '2–4 smooth sticks' },
            { name: 'Beater (comb)', value: 'Wooden comb' }
        ],
        steps: [
            { text: 'Build loom frame: rectangular wooden frame with horizontal beams at top and bottom.' },
            { text: 'Set up warp: tie vertical threads (warp) from top beam to bottom beam, evenly spaced.' },
            { text: 'Use heddle sticks to separate warp threads into two layers (shed). This creates the opening for the weft.' },
            { text: 'Pass weft thread through shed using shuttle. Alternate which warp threads are raised for each pass.' },
            { text: 'Beat each weft row into place with wooden comb. This creates tight, even weave.' },
            { text: 'Continue until cloth reaches desired length. Remove from loom and finish edges to prevent unraveling.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'mud-brick',
        name: 'Mud Brick (Adobe)',
        stage: 2,
        icon: '🧱',
        category: 'tool',
        objective: 'Mold and sun-dry mud bricks for permanent construction — the first building blocks.',
        evolution: 'Mud bricks enable permanent houses, granaries, and city walls — the foundation of civilization.',
        requirements: [
            { name: 'Clay soil', value: 'Large quantity' },
            { name: 'Straw or chaff', value: '20% of volume' },
            { name: 'Wooden molds', value: 'Rectangular frames' },
            { name: 'Water', value: 'For mixing' },
            { name: 'Drying area', value: 'Flat, sunny ground' }
        ],
        steps: [
            { text: 'Mix clay soil with water to create thick mud consistency. Add chopped straw or chaff (20% by volume).' },
            { text: 'Press mud mixture into wooden molds. Remove mold to leave "green" brick.' },
            { text: 'Dry bricks in direct sunlight for 1–2 weeks. Turn periodically for even drying.' },
            { text: 'Stack dried bricks under cover to protect from rain. Sun-dried bricks are strong but not waterproof.' },
            { text: 'Lay bricks with mud mortar (clay + straw mixture) for walls. Seal walls with mud plaster.' },
            { text: 'For permanent structures, fire bricks in kiln at 800°C+ to create fired bricks (see Stage 1 clay bricks).' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'plow-ard',
        name: 'Plow (Ard)',
        stage: 2,
        icon: '🌾',
        category: 'tool',
        objective: 'Build a simple scratch plow pulled by animals or humans for tilling fields.',
        evolution: 'Plows multiply farming productivity — one person can cultivate 10x more land than with hand tools.',
        requirements: [
            { name: 'Hardwood beam', value: '2m long, 10cm thick' },
            { name: 'Plowshare (stone/wood)', value: 'Pointed tip' },
            { name: 'Handle', value: 'For steering' },
            { name: 'Oxen or strong animals', value: 'For pulling (optional)' },
            { name: 'Rope or harness', value: 'For attachment' }
        ],
        steps: [
            { text: 'Shape hardwood beam into plow body: long beam with angled point at one end, handle at other.' },
            { text: 'Attach plowshare (cutting blade) to the point. Stone or hardened wood works.' },
            { text: 'Add handle at rear for steering. The handle should be comfortable to grip while walking.' },
            { text: 'Attach rope or harness to front of beam. Connect to oxen, or design for human pulling.' },
            { text: 'Drag plow through field, cutting shallow furrows. The plow breaks soil, buries weeds, and prepares seedbeds.' },
            { text: 'Plow in straight lines, overlapping slightly. One person with oxen can plow 0.5 hectares per day.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'irrigation-canal',
        name: 'Irrigation Canal',
        stage: 2,
        icon: '💧',
        category: 'skill',
        objective: 'Dig channels to direct water from rivers to fields — enabling agriculture in dry regions.',
        evolution: 'Irrigation multiplies crop yields and enables farming in arid regions — the key to large-scale agriculture.',
        requirements: [
            { name: 'Water source (river/stream)', value: 'Reliable flow' },
            { name: 'Digging tools', value: 'Stone hoes, baskets' },
            { name: 'Surveying stakes', value: 'For leveling' },
            { name: 'Labor force', value: 'Community effort' }
        ],
        steps: [
            { text: 'Survey land to determine slope. Canals need gentle, consistent gradient (1:1000 or gentler).' },
            { text: 'Mark canal route with stakes. Main canal runs from water source to fields. Branch canals distribute water.' },
            { text: 'Dig main canal: 1–2m wide, 0.5–1m deep. Use excavated soil to build up banks.' },
            { text: 'Line canal with clay or stones to reduce seepage. Compacted clay works well.' },
            { text: 'Build simple gates (wooden or stone) to control water flow to individual fields.' },
            { text: 'Maintain canals: remove sediment, repair banks, clear vegetation. Community maintenance is essential.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'granary',
        name: 'Granary (Storage Building)',
        stage: 2,
        icon: '🏛️',
        category: 'tool',
        objective: 'Construct raised storage building to protect grain from moisture, rodents, and pests.',
        evolution: 'Granaries enable multi-year food storage — the foundation of food security and trade.',
        requirements: [
            { name: 'Timber posts', value: '6–8 posts, 2m long' },
            { name: 'Wattle-and-daub materials', value: 'For walls' },
            { name: 'Thatch roofing', value: 'Dried grass/reeds' },
            { name: 'Raised floor materials', value: 'Wooden planks or stone' }
        ],
        steps: [
            { text: 'Select elevated, well-drained site. Dig post holes in rectangle (3×4m or larger).' },
            { text: 'Set timber posts in holes. Raise floor 1m above ground on posts — this keeps grain dry and rodent-free.' },
            { text: 'Build walls using wattle-and-daub or mud brick. Leave small door at top for filling, bottom for removal.' },
            { text: 'Construct thatched roof with good overhang to shed rain away from walls.' },
            { text: 'Add ventilation holes near roof peak. Good airflow prevents mold and spoilage.' },
            { text: 'Fill with dried grain. A well-built granary preserves grain for 2–5 years.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    // === STAGE 3: BRONZE AGE ===
    {
        id: 'copper-smelting',
        name: 'Copper Smelting',
        stage: 3,
        icon: '🔥',
        category: 'skill',
        objective: 'Extract copper from ore using high-temperature furnace — the first metal production.',
        evolution: 'Smelting transforms stone-age technology into metal age. Copper is the first step toward bronze.',
        upgrades: [
            { name: 'Native Copper', description: 'Cold-worked copper nuggets', stage: 3 },
            { name: 'Smelted Copper', description: 'Smelted from ore', stage: 3 },
            { name: 'Bronze', description: 'Copper-tin alloy', stage: 3 },
            { name: 'Brass', description: 'Copper-zinc alloy', stage: 3 },
            { name: 'Steel', description: 'Carbon steel', stage: 4 },
            { name: 'Stainless Steel', description: 'Chromium-alloyed steel', stage: 5 }
        ],
        requirements: [
            { name: 'Copper ore (malachite)', value: '10–20 kg' },
            { name: 'Charcoal', value: '50+ kg for fuel' },
            { name: 'Furnace (clay/stone)', value: 'Capable of 1100°C+' },
            { name: 'Bellows', value: 'For air supply' },
            { name: 'Crucible', value: 'Clay vessel for molten metal' },
            { name: 'Stone hammers', value: 'For ore crushing' }
        ],
        steps: [
            { text: 'Mine copper ore (malachite, azurite, or native copper). Crush ore into small pieces using stone hammers.' },
            { text: 'Build furnace: clay-lined pit or shaft furnace. Must reach 1100°C+ to melt copper.' },
            { text: 'Layer charcoal and crushed ore in furnace. Light charcoal and use bellows to increase temperature.' },
            { text: 'Maintain high heat for several hours. Copper melts at 1085°C and collects at bottom of crucible.' },
            { text: 'Break open furnace after cooling. Extract copper "bloom" (spongy mass of metal and slag).' },
            { text: 'Reheat bloom and hammer to remove slag. Pour into molds for tools, weapons, or ornaments.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'bronze-alloy',
        name: 'Bronze Alloy',
        stage: 3,
        icon: '⚔️',
        category: 'skill',
        objective: 'Combine copper and tin to create bronze — harder and more durable than pure copper.',
        evolution: 'Bronze revolutionizes tools and weapons. Bronze tools last longer, hold sharper edges, and can be cast into complex shapes.',
        requirements: [
            { name: 'Copper', value: '90% of alloy' },
            { name: 'Tin', value: '10% of alloy' },
            { name: 'Crucible', value: 'For melting metals' },
            { name: 'Furnace', value: 'Capable of 1100°C+' },
            { name: 'Molds', value: 'Stone or clay' }
        ],
        steps: [
            { text: 'Obtain copper and tin. Tin is rarer than copper and often traded from distant sources.' },
            { text: 'Mix copper (90%) and tin (10%) in crucible. Exact ratio varies: 88–92% copper, 8–12% tin.' },
            { text: 'Heat furnace to 1100°C+. Copper melts at 1085°C, tin at 232°C — both will melt.' },
            { text: 'Stir molten metal with clay or stone rod to ensure even mixing.' },
            { text: 'Pour molten bronze into molds. Bronze flows better than copper, filling fine details.' },
            { text: 'Cool and remove from molds. Bronze is harder than copper, holds sharper edges, and is more resistant to corrosion.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'wheel-potters',
        name: "Potter's Wheel",
        stage: 3,
        icon: '🎡',
        category: 'tool',
        objective: 'Build rotating wheel for rapid, symmetrical pottery production — mass-producing vessels.',
        evolution: "The potter's wheel increases pottery production 10x. Uniform, symmetrical vessels become possible.",
        requirements: [
            { name: 'Heavy stone base', value: 'For stability' },
            { name: 'Wooden wheel head', value: '40–60cm diameter' },
            { name: 'Axle (wood/metal)', value: 'Vertical shaft' },
            { name: 'Clay', value: 'For throwing' }
        ],
        steps: [
            { text: 'Build heavy stone or wooden base. Stability is critical — wheel must not wobble.' },
            { text: 'Mount vertical axle through center of base. Axle must be perfectly vertical.' },
            { text: 'Attach wooden wheel head to top of axle. Wheel head is 40–60cm diameter, heavy enough for momentum.' },
            { text: 'Sit at wheel with clay centered on wheel head. Kick wheel or use stick to spin wheel.' },
            { text: 'Center clay by applying pressure with both hands. This is the most difficult skill to master.' },
            { text: 'Pull walls upward while wheel spins. Symmetrical vessels form in minutes instead of hours.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'writing-tablets',
        name: 'Writing Tablets (Cuneiform)',
        stage: 3,
        icon: '📝',
        category: 'tool',
        objective: 'Create clay tablets and stylus for recording information — the birth of written language.',
        evolution: 'Writing enables record-keeping, laws, literature, and knowledge transmission across generations.',
        requirements: [
            { name: 'Fine clay', value: 'Clean, smooth clay' },
            { name: 'Reed stylus', value: 'Cut reed with triangular tip' },
            { name: 'Drying area', value: 'Flat, shaded surface' },
            { name: 'Kiln (optional)', value: 'For permanent records' }
        ],
        steps: [
            { text: 'Prepare fine, smooth clay. Remove all debris. Knead until uniform consistency.' },
            { text: 'Form clay into flat tablets, 5–10cm square, 2–3cm thick. Smooth surface with wet fingers.' },
            { text: 'Cut reed stylus with triangular or wedge-shaped tip. This creates cuneiform (wedge-shaped) marks.' },
            { text: 'Press stylus into clay to create symbols. Cuneiform uses combinations of wedges for letters and numbers.' },
            { text: 'Dry tablets in sun for temporary records. Fire in kiln for permanent records.' },
            { text: 'Use writing for: record-keeping (grain stores), laws (Code of Hammurabi), literature (Epic of Gilgamesh), and correspondence.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'chariot',
        name: 'Chariot',
        stage: 3,
        icon: '🏇',
        category: 'tool',
        objective: 'Build lightweight, two-wheeled war chariot for rapid transportation and combat.',
        evolution: 'Chariots revolutionize warfare and transportation. They are the tanks of the Bronze Age.',
        requirements: [
            { name: 'Wood (ash/elm)', value: 'For frame and wheels' },
            { name: 'Bronze fittings', value: 'For axles and decorations' },
            { name: 'Leather', value: 'For floor and harness' },
            { name: 'Spoked wheels', value: 'Lightweight, 4–6 spokes' },
            { name: 'Horses', value: 'Trained for pulling' }
        ],
        steps: [
            { text: 'Build frame: lightweight wooden frame with platform for driver and warrior. Keep weight minimal.' },
            { text: 'Construct spoked wheels: 4–6 wooden spokes, bronze hub and rim. Spoked wheels are lighter than solid wheels.' },
            { text: 'Mount wheels on bronze-fitted axle. Axle must rotate freely for smooth movement.' },
            { text: 'Attach leather floor to platform. Leather absorbs shock better than wood.' },
            { text: 'Build harness for horses. Horse chariots are faster than earlier donkey or onager chariots.' },
            { text: 'Train horses to pull chariot. Chariots are used for warfare (archery platform), hunting, and racing.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    // === STAGE 4: CLASSICAL AGE ===
    {
        id: 'iron-smelting',
        name: 'Iron Smelting (Bloomery)',
        stage: 4,
        icon: '⚒️',
        category: 'skill',
        objective: 'Extract iron from ore using bloomery furnace — creating wrought iron for tools and weapons.',
        evolution: 'Iron is stronger and more abundant than bronze. Iron tools and weapons replace bronze across the known world.',
        upgrades: [
            { name: 'Bloomery Iron', description: 'Wrought iron from bloomery', stage: 4 },
            { name: 'Blast Furnace Iron', description: 'Cast iron production', stage: 4 },
            { name: 'Steel', description: 'Carbonized steel', stage: 4 },
            { name: 'Bessemer Steel', description: 'Mass steel production', stage: 5 },
            { name: 'Stainless Steel', description: 'Chromium stainless', stage: 5 },
            { name: 'Alloy Steels', description: 'Tool steels, alloys', stage: 5 }
        ],
        requirements: [
            { name: 'Iron ore (hematite)', value: '20–50 kg' },
            { name: 'Charcoal', value: '100+ kg' },
            { name: 'Bloomery furnace', value: 'Clay/stone shaft furnace' },
            { name: 'Bellows', value: 'Large, powerful' },
            { name: 'Hammers', value: 'For forging' }
        ],
        steps: [
            { text: 'Mine iron ore (hematite, magnetite, or bog iron). Crush into 2–5cm pieces.' },
            { text: 'Build bloomery furnace: vertical shaft of clay and stone, 1–2m tall. Line with clay.' },
            { text: 'Layer charcoal and iron ore in furnace. Light and use large bellows to reach 1200°C.' },
            { text: 'Iron does not fully melt (requires 1538°C). Instead, it forms spongy "bloom" mixed with slag.' },
            { text: 'Break open furnace after cooling. Extract bloom (20–50 kg of iron and slag).' },
            { text: 'Reheat bloom and hammer repeatedly to remove slag. Fold and weld iron to create wrought iron bar.' },
            { text: 'Forge iron into tools, weapons, or hardware. Iron is stronger than bronze and more widely available.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'concrete-roman',
        name: 'Roman Concrete (Opus Caementicium)',
        stage: 4,
        icon: '🏗️',
        category: 'skill',
        objective: 'Mix volcanic ash, lime, and aggregate to create hydraulic concrete that sets underwater.',
        evolution: 'Roman concrete enables aqueducts, harbors, domes, and structures that last 2000+ years.',
        requirements: [
            { name: 'Lime', value: 'Burnt lime (calcium oxide)' },
            { name: 'Volcanic ash (pozzolana)', value: 'From volcanic regions' },
            { name: 'Aggregate', value: 'Stones, brick fragments' },
            { name: 'Seawater', value: 'For mixing (activates pozzolana)' },
            { name: 'Wooden forms', value: 'For shaping' }
        ],
        steps: [
            { text: 'Burn limestone to produce quicklime (calcium oxide). Slake with water to create lime putty.' },
            { text: 'Mix lime putty with volcanic ash (pozzolana) at 1:2 ratio. Pozzolana reacts with lime to create hydraulic cement.' },
            { text: 'Add aggregate: stones, brick fragments, or rubble. Ratio is roughly 1 part lime-ash, 3 parts aggregate.' },
            { text: 'Mix with seawater (not fresh water). Seawater activates pozzolanic reaction, creating stronger concrete.' },
            { text: 'Pour into wooden forms or use as mortar between stones. Concrete sets underwater — unique among ancient materials.' },
            { text: 'Let cure for weeks. Roman concrete gains strength over centuries through continued pozzolanic reaction.' },
            { text: 'Use for: aqueducts, harbors, domes (Pantheon), foundations, and monumental architecture.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'aqueduct',
        name: 'Aqueduct',
        stage: 4,
        icon: '🌊',
        category: 'tool',
        objective: 'Build gravity-fed water channel to transport water from sources to cities and farms.',
        evolution: 'Aqueducts bring fresh water to cities, enabling large urban populations and public health.',
        upgrades: [
            { name: 'Roman Aqueduct', description: 'Stone arch aqueduct', stage: 4 },
            { name: 'Lead Pipe', description: 'Lead water distribution', stage: 4 },
            { name: 'Medieval Fountain', description: 'Public water fountain', stage: 4 },
            { name: 'Water Tower', description: 'Pressure water system', stage: 5 },
            { name: 'Modern Dam', description: 'Large reservoir dam', stage: 5 }
        ],
        requirements: [
            { name: 'Surveying tools', value: 'Chorobates (leveling device)' },
            { name: 'Stone/concrete', value: 'For channel construction' },
            { name: 'Arches', value: 'For crossing valleys' },
            { name: 'Labor force', value: 'Large workforce' }
        ],
        steps: [
            { text: 'Survey water source and route. Use chorobates (water level) to maintain consistent gradient (1:4800 typical).' },
            { text: 'Dig channel or build raised structure. Channel must maintain constant downward slope from source to destination.' },
            { text: 'Build arches to cross valleys and maintain elevation. Roman arches use concrete and stone.' },
            { text: 'Line channel with waterproof concrete (opus signinum). This prevents water loss through seepage.' },
            { text: 'Construct settling tanks at intervals to remove sediment. Build distribution tanks at city end.' },
            { text: 'Maintain aqueduct: remove sediment, repair leaks, clear vegetation. Roman aqueducts delivered 1000+ liters per person per day.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'glass-blowing',
        name: 'Glass Blowing',
        stage: 4,
        icon: '🫧',
        category: 'skill',
        objective: 'Blow molten glass into vessels, windows, and ornaments using blowpipe and tools.',
        evolution: 'Glass blowing makes glass affordable and versatile. Windows, bottles, and decorative glass become common.',
        upgrades: [
            { name: 'Blown Glass', description: 'Hand-blown vessels', stage: 4 },
            { name: 'Glass Windows', description: 'Flat glass panes', stage: 4 },
            { name: 'Crystal Glass', description: 'Lead crystal glass', stage: 4 },
            { name: 'Optical Glass', description: 'Lens-grade glass', stage: 4 },
            { name: 'Fiber Optics', description: 'Light transmission glass', stage: 5 },
            { name: 'Gorilla Glass', description: 'Tempered glass', stage: 5 }
        ],
        requirements: [
            { name: 'Silica sand', value: 'Pure white sand' },
            { name: 'Soda ash', value: 'From plant ash or natron' },
            { name: 'Lime', value: 'Stabilizer' },
            { name: 'Furnace', value: 'Capable of 1200°C+' },
            { name: 'Blowpipe', value: 'Iron or bronze tube' },
            { name: 'Tools', value: 'Pincers, shears, paddles' }
        ],
        steps: [
            { text: 'Mix silica sand (70%), soda ash (15%), and lime (15%). This is basic glass composition.' },
            { text: 'Heat mixture in furnace to 1200–1400°C. Glass becomes honey-like consistency.' },
            { text: 'Gather molten glass on end of blowpipe. Roll on marver (flat surface) to shape and cool slightly.' },
            { text: 'Blow through pipe to create bubble (parison). Rotate constantly to maintain symmetrical shape.' },
            { text: 'Shape with tools: pincers for handles, shears for trimming, paddles for flattening.' },
            { text: 'Reheat as needed (glass hardens quickly). Transfer to punty rod for finishing.' },
            { text: 'Anneal (slow cool) in lehr oven over 24–48 hours. Rapid cooling causes stress and breakage.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'paper-papyrus',
        name: 'Papyrus (Paper)',
        stage: 4,
        icon: '📜',
        category: 'tool',
        objective: 'Process papyrus reeds into writing sheets — the first paper-like material.',
        evolution: 'Papyrus enables books, records, and communication. It is lighter and cheaper than clay tablets.',
        requirements: [
            { name: 'Papyrus reeds', value: 'From Nile or wetlands' },
            { name: 'Water', value: 'For soaking' },
            { text: 'Press or heavy stones', value: 'For flattening' },
            { name: 'Polishing stone', value: 'For smoothing surface' }
        ],
        steps: [
            { text: 'Harvest papyrus reeds from wetlands. Cut into 30–50cm lengths.' },
            { text: 'Peel outer layer to expose white pith. Cut pith into thin strips.' },
            { text: 'Soak strips in water for 24–48 hours. This softens fibers.' },
            { text: 'Lay strips side by side on flat surface, slightly overlapping. Add second layer perpendicular to first.' },
            { text: 'Press layers together under heavy weight or in press. Natural sap acts as adhesive.' },
            { text: 'Dry in sun for several days. Polish surface with smooth stone for writing.' },
            { text: 'Join sheets end-to-end to create scrolls. Standard scroll is 20–30 sheets (4–6 meters).' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    // === STAGE 5: MIDDLE AGES ===
    {
        id: 'windmill',
        name: 'Windmill',
        stage: 5,
        icon: '💨',
        category: 'tool',
        objective: 'Build wind-powered mill for grinding grain, sawing wood, or pumping water.',
        evolution: 'Windmills harness wind energy — freeing human labor and enabling large-scale grain processing.',
        upgrades: [
            { name: 'Post Mill', description: 'Early post-style windmill', stage: 5 },
            { name: 'Tower Mill', description: 'Stone tower windmill', stage: 5 },
            { name: 'Smock Mill', description: 'Wooden cladding mill', stage: 5 },
            { name: 'Wind Turbine', description: 'Modern wind power', stage: 5 },
            { name: 'Offshore Turbine', description: 'Large-scale wind farms', stage: 5 }
        ],
        requirements: [
            { name: 'Timber', value: 'Oak or other hardwood' },
            { name: 'Millstones', value: 'Pair of stones' },
            { name: 'Canvas sails', value: 'For catching wind' },
            { name: 'Rotating cap', value: 'To face wind' },
            { name: 'Gearing', value: 'Wooden gears' }
        ],
        steps: [
            { text: 'Build tower: stone or timber tower, 10–20m tall. Height captures stronger, more consistent wind.' },
            { text: 'Construct rotating cap on top of tower. Cap holds sails and can rotate to face wind.' },
            { text: 'Build sail frame with 4 arms. Cover with canvas sails. Adjust sail area based on wind strength.' },
            { text: 'Install gearing: horizontal windshaft converts to vertical rotation for millstones.' },
            { text: 'Mount millstones on lower floor. Grain is fed between stones and ground into flour.' },
            { text: 'Add tail pole to rotate cap into wind. Miller adjusts sail angle and cap direction based on wind.' },
            { text: 'Windmills can also power: sawmills (wood cutting), fulling mills (cloth processing), or water pumps.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'mechanical-clock',
        name: 'Mechanical Clock',
        stage: 5,
        icon: '⏰',
        category: 'tool',
        objective: 'Build weight-driven clock with escapement — the first accurate timekeeping device.',
        evolution: 'Mechanical clocks enable precise timekeeping, coordinating work, and scientific measurement.',
        requirements: [
            { name: 'Iron or brass', value: 'For gears' },
            { name: 'Weights', value: 'Heavy weights for power' },
            { name: 'Escapement mechanism', value: 'Verge and foliot' },
            { name: 'Bell', value: 'For striking hours' },
            { name: 'Clock frame', value: 'Wood or iron' }
        ],
        steps: [
            { text: 'Design gear train: calculate gear ratios for hour and minute hands. Typical ratio is 12:1 for hours.' },
            { text: 'Cut gears from iron or brass. Gear teeth must be evenly spaced for smooth operation.' },
            { text: 'Build escapement: verge and foliot mechanism. Escapement regulates gear movement, creating "tick-tock".' },
            { text: 'Hang weights on ropes or chains. Weights provide power as they slowly descend.' },
            { text: 'Assemble gear train on sturdy frame. Connect weights to main gear, escapement to regulating mechanism.' },
            { text: 'Add dial with hour markers. Early clocks had only hour hand; minute hands came later.' },
            { text: 'Connect bell-striking mechanism for hourly chimes. Clocks in towers could be heard across cities.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'compass',
        name: 'Magnetic Compass',
        stage: 5,
        icon: '🧭',
        category: 'tool',
        objective: 'Create magnetized needle compass for navigation — enabling ocean exploration.',
        evolution: 'Compasses enable navigation in open ocean, leading to Age of Discovery and global trade.',
        requirements: [
            { name: 'Magnetized needle', value: 'Iron needle, magnetized' },
            { name: 'Compass bowl', value: 'Wood or brass' },
            { name: 'Pivot point', value: 'Low-friction bearing' },
            { name: 'Lodestone', value: 'For magnetizing needle' },
            { name: 'Compass card', value: 'Directional markings' }
        ],
        steps: [
            { text: 'Magnetize iron needle by stroking with lodestone (natural magnet) in one direction, 50+ times.' },
            { text: 'Balance needle on low-friction pivot. Needle should rotate freely and align with Earth\'s magnetic field.' },
            { text: 'Mount needle in protective bowl. Bowl protects needle from wind and damage.' },
            { text: 'Add compass card with directional markings (N, S, E, W). Later compasses had 32 points.' },
            { text: 'Test compass: needle should point north. Keep away from iron objects that interfere with magnetism.' },
            { text: 'Use compass for navigation: determine direction at sea, plot courses, and explore unknown waters.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'printing-press',
        name: 'Printing Press',
        stage: 5,
        icon: '📰',
        category: 'tool',
        objective: 'Build movable type printing press for mass-producing books and documents.',
        evolution: 'Printing press makes knowledge cheap and accessible. It enables the Renaissance, Reformation, and scientific revolution.',
        requirements: [
            { name: 'Movable type', value: 'Metal or wooden letters' },
            { name: 'Press frame', value: 'Wooden screw press' },
            { name: 'Ink', value: 'Oil-based ink' },
            { name: 'Paper or parchment', value: 'For printing' },
            { name: 'Composing stick', value: 'For arranging type' }
        ],
        steps: [
            { text: 'Create movable type: cast individual letters in metal or carve in wood. Need multiple copies of common letters.' },
            { text: 'Arrange type in composing stick to form words and lines. Type is reversed (mirror image) for printing.' },
            { text: 'Lock type into forme (frame). Ensure type is tight and level.' },
            { text: 'Ink type using leather balls or rollers. Oil-based ink adheres better than water-based.' },
            { text: 'Place paper on forme. Lower press platen to apply even pressure.' },
            { text: 'Pull printed sheet and hang to dry. Check for quality: even ink, clear letters.' },
            { text: 'Reuse type for next page. A skilled printer produces 3600 pages per day vs 40 for hand-copying.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'gunpowder',
        name: 'Gunpowder',
        stage: 5,
        icon: '💥',
        category: 'skill',
        objective: 'Mix saltpeter, charcoal, and sulfur to create explosive powder for weapons and mining.',
        evolution: 'Gunpowder transforms warfare, mining, and construction. Cannons and guns replace bows and catapults.',
        requirements: [
            { name: 'Saltpeter (potassium nitrate)', value: '75% of mixture' },
            { name: 'Charcoal', value: '15% of mixture' },
            { name: 'Sulfur', value: '10% of mixture' },
            { name: 'Mortar and pestle', value: 'For mixing' },
            { name: 'Water', value: 'For safe mixing' }
        ],
        steps: [
            { text: 'Obtain saltpeter (potassium nitrate) from composted manure, cave deposits, or mineral sources.' },
            { text: 'Make charcoal from willow or alder wood. Fine, soft charcoal works best.' },
            { text: 'Obtain sulfur from volcanic regions or mineral deposits.' },
            { text: 'Grind each ingredient separately into fine powder. Never grind together — risk of explosion.' },
            { text: 'Mix ingredients with water to create paste. Water prevents accidental ignition during mixing.' },
            { text: 'Dry paste into "corned" powder. Corned powder burns more consistently than loose mixture.' },
            { text: 'Test powder: small amount should ignite quickly with bright flash. Store in dry, sealed containers.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    // === STAGE 6: INDUSTRIAL REVOLUTION ===
    {
        id: 'steam-engine',
        name: 'Steam Engine',
        stage: 6,
        icon: '🚂',
        category: 'tool',
        objective: 'Build atmospheric steam engine to convert heat into mechanical power — the engine of industrialization.',
        evolution: 'Steam engines power factories, trains, and ships. They multiply human productive capacity beyond imagination.',
        requirements: [
            { name: 'Cylinder (cast iron)', value: 'Precision-bored' },
            { name: 'Piston', value: 'Fitted to cylinder' },
            { name: 'Boiler', value: 'Copper or iron' },
            { name: 'Coal', value: 'For heating boiler' },
            { name: 'Condenser', value: 'Separate chamber' },
            { name: 'Beam and linkage', value: 'For motion transfer' }
        ],
        steps: [
            { text: 'Build boiler: copper or iron vessel to heat water and produce steam. Must withstand pressure.' },
            { text: 'Cast iron cylinder with precision bore. Cylinder houses piston that converts steam pressure to motion.' },
            { text: 'Fit piston to cylinder with packing (seal). Piston must move freely but not leak steam.' },
            { text: 'Build separate condenser (Watt\'s improvement). Condenser cools steam, creating vacuum that pulls piston.' },
            { text: 'Connect piston to beam. Beam rocks up and down, transferring motion to pump or machinery.' },
            { text: 'Add valve gear to control steam flow. Valves must open and close at correct points in cycle.' },
            { text: 'Fire boiler with coal. Steam pressure drives piston. Engine produces continuous power as long as boiler has fire.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'spinning-jenny',
        name: 'Spinning Jenny',
        stage: 6,
        icon: '🧶',
        category: 'tool',
        objective: 'Build multi-spindle spinning frame to spin multiple threads simultaneously — mechanizing textile production.',
        evolution: 'Spinning jenny multiplies thread production. One worker spins 8+ threads at once, enabling factory system.',
        requirements: [
            { name: 'Wood frame', value: 'For structure' },
            { name: 'Spindles', value: '8–120 spindles' },
            { name: 'Wheel', value: 'For power input' },
            { name: 'Roving (prepared fiber)', value: 'For spinning' },
            { name: 'Bobbins', value: 'For collecting thread' }
        ],
        steps: [
            { text: 'Build wooden frame with horizontal beam. Frame holds multiple spindles (originally 8, later 120).' },
            { text: 'Mount spindles vertically on frame. Each spindle will spin one thread.' },
            { text: 'Add large wheel connected by belt to spindles. Turning wheel rotates all spindles simultaneously.' },
            { text: 'Prepare roving (drawn-out fiber). Roving is fed through clamps to spindles.' },
            { text: 'Turn wheel to spin spindles. Draw out roving while spinning to create fine, strong thread.' },
            { text: 'One worker operates multiple spindles. Productivity increases 8–120x compared to spinning wheel.' },
            { text: 'Spinning jenny enables factory system: centralized production, division of labor, mass-produced textiles.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'bessemer-steel',
        name: 'Bessemer Steel Process',
        stage: 6,
        icon: '🏭',
        category: 'skill',
        objective: 'Blow air through molten iron to produce steel cheaply — enabling skyscrapers, railways, and machines.',
        evolution: 'Bessemer process makes steel affordable. Steel replaces iron for construction, tools, and transportation.',
        requirements: [
            { name: 'Pig iron', value: 'Molten iron' },
            { name: 'Bessemer converter', value: 'Pear-shaped vessel' },
            { name: 'Air blast', value: 'Powerful bellows' },
            { name: 'Flux', value: 'Limestone or lime' },
            { name: 'Molds', value: 'For casting steel' }
        ],
        steps: [
            { text: 'Melt pig iron in furnace. Pour molten iron into Bessemer converter (pear-shaped vessel).' },
            { text: 'Blow air through molten iron from bottom of converter. Air oxidizes impurities (carbon, silicon, manganese).' },
            { text: 'Oxidation generates heat, keeping iron molten. Process takes 10–20 minutes.' },
            { text: 'Watch flame from converter mouth. Flame color indicates carbon content. Stop air when desired carbon level reached.' },
            { text: 'Add flux (limestone) to remove impurities as slag. Pour off slag.' },
            { text: 'Add precise amount of carbon (spiegeleisen) to create steel. Steel is iron with 0.2–2% carbon.' },
            { text: 'Pour steel into molds. Bessemer process produces 5 tons of steel in 20 minutes vs days for older methods.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'railway',
        name: 'Railway',
        stage: 6,
        icon: '🛤️',
        category: 'tool',
        objective: 'Build iron/steel rails and steam locomotives for rapid land transportation of goods and people.',
        evolution: 'Railways connect nations, enable mass transportation, and create national markets. They shrink travel time from weeks to hours.',
        requirements: [
            { name: 'Steel rails', value: 'T-shaped profile' },
            { name: 'Railroad ties', value: 'Wooden or concrete' },
            { name: 'Ballast', value: 'Gravel or crushed stone' },
            { name: 'Steam locomotive', value: 'For pulling trains' },
            { name: 'Rolling stock', value: 'Freight and passenger cars' }
        ],
        steps: [
            { text: 'Survey and grade route. Railways need gentle grades (2% or less) and wide curves.' },
            { text: 'Lay roadbed: compacted earth topped with ballast (gravel). Ballast provides drainage and stability.' },
            { text: 'Place railroad ties (sleepers) perpendicular to track direction, 50–60cm apart.' },
            { text: 'Lay steel rails on ties. Rails are T-shaped for strength. Join rails with fishplates.' },
            { text: 'Spike rails to ties. Spikes hold rails in place but allow for thermal expansion.' },
            { text: 'Build or acquire steam locomotives. Locomotives pull trains of freight or passenger cars.' },
            { text: 'Railways enable: 200+ ton freight trains, passenger travel at 50–100 km/h, and national integration.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'telegraph',
        name: 'Telegraph',
        stage: 6,
        icon: '📡',
        category: 'tool',
        objective: 'Build electrical telegraph system for instant long-distance communication using Morse code.',
        evolution: 'Telegraph enables instant communication across continents. Information travels at the speed of electricity.',
        requirements: [
            { name: 'Wire (copper/iron)', value: 'For transmission lines' },
            { name: 'Batteries', value: 'For power' },
            { name: 'Telegraph key', value: 'For sending' },
            { name: 'Sounder', value: 'For receiving' },
            { name: 'Insulators', value: 'For poles' }
        ],
        steps: [
            { text: 'String wire between stations on poles. Wire can be copper or iron. Insulate wire from poles using glass or ceramic.' },
            { text: 'Connect battery to wire at sending station. Battery provides electrical current.' },
            { text: 'Install telegraph key (switch) at sending station. Key opens and closes circuit.' },
            { text: 'Install sounder (electromagnet) at receiving station. Sounder clicks when current flows.' },
            { text: 'Learn Morse code: dots and dashes represent letters. Short click = dot, long click = dash.' },
            { text: 'Send messages by pressing key in Morse code patterns. Sounder clicks out message at receiving end.' },
            { text: 'Transcontinental telegraph enables instant communication across continents. Messages that took weeks now arrive in minutes.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    // === STAGE 7: ATOMIC & SPACE AGE ===
    {
        id: 'transistor',
        name: 'Transistor',
        stage: 7,
        icon: '💻',
        category: 'tool',
        objective: 'Create semiconductor transistor to amplify and switch electronic signals — the foundation of modern electronics.',
        evolution: 'Transistors replace vacuum tubes. They enable computers, radios, TVs, and all modern electronics in miniature form.',
        requirements: [
            { name: 'Semiconductor (silicon/germanium)', value: 'Ultra-pure' },
            { name: 'Dopants', value: 'Phosphorus, boron' },
            { name: 'Crystal puller', value: 'For growing crystals' },
            { name: 'Photolithography', value: 'For patterning' },
            { name: 'Clean room', value: 'Dust-free environment' }
        ],
        steps: [
            { text: 'Grow ultra-pure silicon crystal using Czochralski process. Melt silicon, dip seed crystal, slowly pull and rotate.' },
            { text: 'Slice crystal into thin wafers. Each wafer will become hundreds of transistors.' },
            { text: 'Dope silicon with impurities (phosphorus, boron) to create N-type and P-type regions. Doping creates semiconductor properties.' },
            { text: 'Create transistor structure: emitter, base, and collector regions. Modern transistors are nanometers in size.' },
            { text: 'Add metal contacts (aluminum, gold) for connections. Contacts must be ohmic (low resistance).' },
            { text: 'Package transistor in protective case. Add leads for connecting to circuits.' },
            { text: 'Test transistor: apply small current to base, measure amplified current from collector to emitter.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'nuclear-fission',
        name: 'Nuclear Fission Reactor',
        stage: 7,
        icon: '⚛️',
        category: 'tool',
        objective: 'Build controlled nuclear chain reaction to generate massive amounts of electricity from uranium.',
        evolution: 'Nuclear power generates enormous energy from small amounts of fuel. One kilogram of uranium = 3 million kilograms of coal.',
        requirements: [
            { name: 'Uranium fuel', value: 'Enriched to 3–5% U-235' },
            { name: 'Moderator', value: 'Water or graphite' },
            { name: 'Control rods', value: 'Boron or cadmium' },
            { name: 'Pressure vessel', value: 'Steel containment' },
            { name: 'Turbine generator', value: 'For electricity production' }
        ],
        steps: [
            { text: 'Enrich uranium to 3–5% U-235 (fissile isotope). Natural uranium is 99.3% U-238, 0.7% U-235.' },
            { text: 'Form uranium into fuel rods. Bundle rods into fuel assemblies.' },
            { text: 'Load fuel into reactor core. Core contains hundreds of fuel assemblies.' },
            { text: 'Add moderator (water or graphite). Moderator slows neutrons, enabling chain reaction.' },
            { text: 'Insert control rods (boron, cadmium). Control rods absorb neutrons, regulating reaction rate.' },
            { text: 'Initiate chain reaction: withdraw control rods slowly. Neutrons split U-235 atoms, releasing energy and more neutrons.' },
            { text: 'Heat from fission boils water, creating steam. Steam drives turbine generator, producing electricity.' },
            { text: 'Maintain criticality: reaction self-sustaining but controlled. One kilogram of uranium produces energy equivalent to 3 million kg of coal.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'rocket',
        name: 'Rocket (Liquid-Fuel)',
        stage: 7,
        icon: '🚀',
        category: 'tool',
        objective: 'Build liquid-fuel rocket to escape Earth\'s gravity — enabling space exploration and satellite deployment.',
        evolution: 'Rockets escape Earth\'s gravity. They enable satellites, space stations, moon landings, and interplanetary exploration.',
        requirements: [
            { name: 'Rocket engine', value: 'Liquid-fuel combustion chamber' },
            { name: 'Fuel (kerosene/hydrogen)', value: 'Propellant' },
            { name: 'Oxidizer (liquid oxygen)', value: 'For combustion' },
            { name: 'Turbopumps', value: 'For fuel delivery' },
            { name: 'Guidance system', value: 'For navigation' },
            { name: 'Payload', value: 'Satellite, capsule, or warhead' }
        ],
        steps: [
            { text: 'Design rocket engine: combustion chamber, nozzle, turbopumps. Engine must produce thrust greater than rocket weight.' },
            { text: 'Build fuel and oxidizer tanks. Tanks must be lightweight but strong enough to hold cryogenic liquids.' },
            { text: 'Install turbopumps to deliver fuel and oxidizer to combustion chamber at high pressure.' },
            { text: 'Add guidance system: gyroscopes, computers, and control surfaces for steering.' },
            { text: 'Mount payload (satellite, capsule) on top of rocket. Payload is protected by fairing during ascent.' },
            { text: 'Fuel rocket: load liquid oxygen and fuel. Liquid oxygen is -183°C, requiring special handling.' },
            { text: 'Ignite engine: fuel and oxidizer mix in combustion chamber, ignite. Exhaust gases exit nozzle at supersonic speed.' },
            { text: 'Rocket accelerates upward. Stages separate as fuel is exhausted. Final stage achieves orbital velocity (28,000 km/h).' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'internet',
        name: 'Internet (Packet Switching)',
        stage: 7,
        icon: '🌐',
        category: 'skill',
        objective: 'Build global network of computers using packet switching — connecting humanity\'s knowledge.',
        evolution: 'Internet connects billions of devices. It enables instant communication, global commerce, and access to all human knowledge.',
        requirements: [
            { name: 'Computers', value: 'With network interfaces' },
            { name: 'Routers', value: 'For directing traffic' },
            { name: 'Cables (fiber/copper)', value: 'For transmission' },
            { name: 'Protocols', value: 'TCP/IP' },
            { name: 'Servers', value: 'For hosting content' }
        ],
        steps: [
            { text: 'Connect computers with cables (fiber optic, copper) or wireless (radio, satellite).' },
            { text: 'Install routers at network junctions. Routers direct data packets to their destinations.' },
            { text: 'Implement TCP/IP protocol: break data into packets, address each packet, route independently, reassemble at destination.' },
            { text: 'Build Domain Name System (DNS): translate human-readable names (google.com) to IP addresses.' },
            { text: 'Create World Wide Web: hypertext system for linking documents. Web uses HTTP protocol and HTML formatting.' },
            { text: 'Deploy servers to host websites, emails, files. Servers respond to requests from client computers.' },
            { text: 'Internet enables: email, web browsing, online commerce, social media, cloud computing, and global collaboration.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    },
    {
        id: 'solar-cell',
        name: 'Solar Cell (Photovoltaic)',
        stage: 7,
        icon: '☀️',
        category: 'tool',
        objective: 'Build semiconductor device that converts sunlight directly into electricity — harvesting stellar energy.',
        evolution: 'Solar cells provide clean, renewable energy from the sun. They enable off-grid power and sustainable energy.',
        requirements: [
            { name: 'Silicon wafers', value: 'N-type and P-type' },
            { name: 'Dopants', value: 'Phosphorus, boron' },
            { name: 'Anti-reflective coating', value: 'For efficiency' },
            { name: 'Metal contacts', value: 'For current collection' },
            { name: 'Encapsulation', value: 'For protection' }
        ],
        steps: [
            { text: 'Create N-type silicon (doped with phosphorus) and P-type silicon (doped with boron).' },
            { text: 'Join N-type and P-type silicon to create P-N junction. Junction creates electric field.' },
            { text: 'Apply anti-reflective coating to top surface. Coating increases light absorption.' },
            { text: 'Add metal contacts (grid on top, solid layer on bottom). Contacts collect electrical current.' },
            { text: 'Encapsulate cell in protective material (glass, plastic). Encapsulation protects from weather while transmitting light.' },
            { text: 'Connect multiple cells in series to create solar panel. Panel produces 12–24 volts DC.' },
            { text: 'Install solar panels facing sun. Sunlight knocks electrons loose, creating current. Inverter converts DC to AC for home use.' },
            { text: 'Solar cells produce clean energy for 25+ years. They enable off-grid power, satellites, and sustainable energy.' }
        ],
        videoUrl: 'https://youtu.be/m0bEoVhxFJ8?si=2-tXDnEzRWwPO--x'
    }
];

const MATERIALS_DB = [
    // Stones & Minerals
    { name: 'Flint', icon: '🪨', category: 'Stone', priceUSD: 2.50, priceEUR: 2.30, description: 'Sedimentary cryptocrystalline quartz. Used for tools, fire-starting.' },
    { name: 'Obsidian', icon: '🖤', category: 'Stone', priceUSD: 8.00, priceEUR: 7.40, description: 'Volcanic glass. Sharp edges for blades and arrowheads.' },
    { name: 'Basalt', icon: '🗿', category: 'Stone', priceUSD: 1.20, priceEUR: 1.10, description: 'Dense volcanic rock. Hammerstones, grinding slabs.' },
    { name: 'Chert', icon: '🐚', category: 'Stone', priceUSD: 3.00, priceEUR: 2.80, description: 'Microcrystalline quartz. Similar to flint, tool-making.' },
    { name: 'Sandstone', icon: '🟫', category: 'Stone', priceUSD: 0.80, priceEUR: 0.75, description: 'Sedimentary rock. Grinding stones, construction.' },
    { name: 'Limestone', icon: '⬜', category: 'Stone', priceUSD: 0.60, priceEUR: 0.55, description: 'Sedimentary rock. Building material, lime production.' },
    { name: 'Granite', icon: '🔳', category: 'Stone', priceUSD: 1.50, priceEUR: 1.40, description: 'Igneous rock. Countertops, construction, grinding.' },
    { name: 'Quartzite', icon: '💎', category: 'Stone', priceUSD: 2.00, priceEUR: 1.85, description: 'Metamorphic quartz. Extremely hard, tool-making.' },
    { name: 'Hematite', icon: '🔴', category: 'Ore', priceUSD: 0.40, priceEUR: 0.37, description: 'Iron oxide ore. Primary source of iron, red pigment.' },
    { name: 'Malachite', icon: '💚', category: 'Ore', priceUSD: 5.00, priceEUR: 4.60, description: 'Copper carbonate. Copper ore, green pigment.' },
    { name: 'Magnetite', icon: '⬛', category: 'Ore', priceUSD: 0.50, priceEUR: 0.46, description: 'Magnetic iron ore. Lodestone, iron smelting.' },
    { name: 'Galena', icon: '🔘', category: 'Ore', priceUSD: 3.00, priceEUR: 2.80, description: 'Lead sulfide. Lead and silver extraction.' },
    { name: 'Cinnabar', icon: '🟥', category: 'Ore', priceUSD: 15.00, priceEUR: 13.90, description: 'Mercury sulfide. Vermilion pigment, mercury extraction.' },
    { name: 'Turquoise', icon: '🩵', category: 'Gem', priceUSD: 120.00, priceEUR: 111.00, description: 'Copper aluminum phosphate. Ornamental stone.' },
    { name: 'Jade', icon: '🟢', category: 'Gem', priceUSD: 200.00, priceEUR: 185.00, description: 'Nephrite or jadeite. High-value ornamental stone.' },
    { name: 'Amber', icon: '🟠', category: 'Organic', priceUSD: 50.00, priceEUR: 46.00, description: 'Fossilized resin. Ornamental, trade item.' },

    // Metals
    { name: 'Copper (Raw)', icon: '🧡', category: 'Metal', priceUSD: 9.50, priceEUR: 8.80, description: 'Native or smelted copper. First metal worked by humans.' },
    { name: 'Iron (Wrought)', icon: '⚙️', category: 'Metal', priceUSD: 1.20, priceEUR: 1.10, description: 'Low-carbon iron. Tools, weapons, construction.' },
    { name: 'Tin', icon: '🔩', category: 'Metal', priceUSD: 28.00, priceEUR: 25.90, description: 'Alloying metal. Bronze = copper + tin.' },
    { name: 'Lead', icon: '⬜', category: 'Metal', priceUSD: 2.50, priceEUR: 2.30, description: 'Heavy metal. Solder, weights, pipes.' },
    { name: 'Silver (Raw)', icon: '🥈', category: 'Metal', priceUSD: 850.00, priceEUR: 787.00, description: 'Precious metal. Currency, jewelry, ornaments.' },
    { name: 'Gold (Raw)', icon: '🥇', category: 'Metal', priceUSD: 65000.00, priceEUR: 60200.00, description: 'Precious metal. Currency, high-value trade.' },
    { name: 'Bronze', icon: '🟤', category: 'Metal', priceUSD: 12.00, priceEUR: 11.10, description: 'Copper-tin alloy. Superior tools and weapons.' },
    { name: 'Brass', icon: '🟡', category: 'Metal', priceUSD: 7.00, priceEUR: 6.50, description: 'Copper-zinc alloy. Decorative, musical instruments.' },

    // Organic Materials
    { name: 'Oak Timber', icon: '🪵', category: 'Wood', priceUSD: 0.50, priceEUR: 0.46, description: 'Hardwood. Construction, tool handles, fuel.' },
    { name: 'Cedar Wood', icon: '🌲', category: 'Wood', priceUSD: 0.80, priceEUR: 0.74, description: 'Softwood. Rot-resistant, boats, aromatic.' },
    { name: 'Pine Wood', icon: '🌲', category: 'Wood', priceUSD: 0.35, priceEUR: 0.32, description: 'Softwood. Construction, resin, fuel.' },
    { name: 'Bamboo', icon: '🎋', category: 'Wood', priceUSD: 0.60, priceEUR: 0.55, description: 'Fast-growing grass. Construction, tools, baskets.' },
    { name: 'Birch Bark', icon: '📄', category: 'Organic', priceUSD: 3.00, priceEUR: 2.80, description: 'Waterproof bark. Containers, roofing, tinder.' },
    { name: 'Pine Resin', icon: '🟡', category: 'Organic', priceUSD: 4.00, priceEUR: 3.70, description: 'Tree sap. Adhesive, waterproofing, fire starter.' },
    { name: 'Beeswax', icon: '🐝', category: 'Organic', priceUSD: 15.00, priceEUR: 13.90, description: 'Bee product. Candles, waterproofing, lost-wax casting.' },
    { name: 'Animal Hide (Raw)', icon: '🟫', category: 'Organic', priceUSD: 5.00, priceEUR: 4.60, description: 'Untanned hide. Leather production, clothing.' },
    { name: 'Sinew', icon: '🦴', category: 'Organic', priceUSD: 20.00, priceEUR: 18.50, description: 'Animal tendon. Cordage, bow backing, lashing.' },
    { name: 'Bone', icon: '🦴', category: 'Organic', priceUSD: 1.00, priceEUR: 0.93, description: 'Animal bone. Tools, needles, ornaments.' },
    { name: 'Antler', icon: '🦌', category: 'Organic', priceUSD: 8.00, priceEUR: 7.40, description: 'Deer antler. Pressure flakers, hammers, handles.' },
    { name: 'Charcoal', icon: '⬛', category: 'Fuel', priceUSD: 1.50, priceEUR: 1.40, description: 'Carbonized wood. High-heat fuel for smelting.' },
    { name: 'Peat', icon: '🟤', category: 'Fuel', priceUSD: 0.30, priceEUR: 0.28, description: 'Partially decayed plant matter. Low-grade fuel.' },

    // Fibers & Textiles
    { name: 'Nettle Fiber', icon: '🌿', category: 'Fiber', priceUSD: 12.00, priceEUR: 11.10, description: 'Processed nettle stems. Strong cordage, textiles.' },
    { name: 'Flax Fiber', icon: '🌾', category: 'Fiber', priceUSD: 3.00, priceEUR: 2.80, description: 'Linen plant. Textiles, rope, paper.' },
    { name: 'Hemp Fiber', icon: '🌿', category: 'Fiber', priceUSD: 2.50, priceEUR: 2.30, description: 'Cannabis fiber. Rope, cloth, paper.' },
    { name: 'Wool (Raw)', icon: '🐑', category: 'Fiber', priceUSD: 5.00, priceEUR: 4.60, description: 'Sheep fleece. Textiles, felt, insulation.' },
    { name: 'Cotton (Raw)', icon: '☁️', category: 'Fiber', priceUSD: 2.00, priceEUR: 1.85, description: 'Cotton bolls. Textiles, wadding.' },
    { name: 'Cedar Bark Cordage', icon: '🪢', category: 'Fiber', priceUSD: 8.00, priceEUR: 7.40, description: 'Processed inner bark. Rope, lashing, weaving.' },

    // Clays & Earth
    { name: 'River Clay', icon: '🟤', category: 'Earth', priceUSD: 0.20, priceEUR: 0.19, description: 'Alluvial clay. Pottery, construction, daub.' },
    { name: 'Fire Clay', icon: '🧱', category: 'Earth', priceUSD: 0.50, priceEUR: 0.46, description: 'Heat-resistant clay. Kilns, crucibles, refractory.' },
    { name: 'Kaolin Clay', icon: '⬜', category: 'Earth', priceUSD: 0.80, priceEUR: 0.74, description: 'White clay. Fine pottery, porcelain, pigment.' },
    { name: 'Ochre (Red)', icon: '🔴', category: 'Pigment', priceUSD: 5.00, priceEUR: 4.60, description: 'Iron oxide pigment. Paint, body art, tanning.' },
    { name: 'Ochre (Yellow)', icon: '🟡', category: 'Pigment', priceUSD: 5.00, priceEUR: 4.60, description: 'Limonite pigment. Paint, decoration.' },
    { name: 'Charcoal Powder', icon: '⬛', category: 'Pigment', priceUSD: 3.00, priceEUR: 2.80, description: 'Ground charcoal. Black pigment, drawing.' },
    { name: 'Lime (Burnt)', icon: '⬜', category: 'Earth', priceUSD: 0.40, priceEUR: 0.37, description: 'Calcined limestone. Mortar, plaster, tanning.' },

    // Salts & Chemicals
    { name: 'Sea Salt', icon: '🧂', category: 'Mineral', priceUSD: 0.30, priceEUR: 0.28, description: 'Evaporated seawater. Food preservation, trade.' },
    { name: 'Saltpeter', icon: '⬜', category: 'Mineral', priceUSD: 2.00, priceEUR: 1.85, description: 'Potassium nitrate. Gunpowder, fertilizer, preservation.' },
    { name: 'Sulfur', icon: '🟡', category: 'Mineral', priceUSD: 1.50, priceEUR: 1.40, description: 'Volcanic mineral. Gunpowder, medicine, bleaching.' },
    { name: 'Alum', icon: '⬜', category: 'Mineral', priceUSD: 4.00, priceEUR: 3.70, description: 'Potassium aluminum sulfate. Dye mordant, tanning.' },
    { name: 'Borax', icon: '⬜', category: 'Mineral', priceUSD: 3.00, priceEUR: 2.80, description: 'Sodium borate. Flux for soldering, glazes.' },

    // Water & Food
    { name: 'Fresh Water', icon: '💧', category: 'Resource', priceUSD: 0.001, priceEUR: 0.001, description: 'Potable water. Essential for all life and craft.' },
    { name: 'Acorns (Processed)', icon: '🌰', category: 'Food', priceUSD: 2.00, priceEUR: 1.85, description: 'Leached acorn flour. Staple food source.' },
    { name: 'Wild Honey', icon: '🍯', category: 'Food', priceUSD: 20.00, priceEUR: 18.50, description: 'Wild bee honey. Sweetener, medicine, mead.' },
    { name: 'Maple Syrup', icon: '🍁', category: 'Food', priceUSD: 30.00, priceEUR: 27.80, description: 'Boiled maple sap. Sweetener, trade item.' },
];

let currentMarketFilter = 'All';

let userBlueprints = JSON.parse(localStorage.getItem('primitive_user_blueprints') || '[]');
let blueprintSupplements = JSON.parse(localStorage.getItem('primitive_blueprint_supplements') || '{}');
let deletedCoreBlueprints = JSON.parse(localStorage.getItem('primitive_deleted_core_blueprints') || '[]');
let coreBlueprintOverrides = JSON.parse(localStorage.getItem('primitive_core_overrides') || '{}');

function goToHome() {
    window.location.hash = '';
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('welcome-view').classList.add('active');
    renderSidebar();
    closeSidebarMobile();
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    if (!sidebar) return;
    sidebar.classList.toggle('sidebar-open');
    overlay.classList.toggle('sidebar-overlay-visible');
}

function closeSidebarMobile() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    if (sidebar) sidebar.classList.remove('sidebar-open');
    if (overlay) overlay.classList.remove('sidebar-overlay-visible');
}

function init() {
    // Check admin route first
    if (checkAdminRoute()) return;

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
    btn.disabled = true;
    btn.innerHTML = '<span>Connecting...</span>';

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
                    <div style="margin-top:2.5rem; display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:1.5rem;">
                        
                        <!-- SKILLS BUTTON -->
                        <button class="category-nav-btn" onclick="renderCategoryView(${stageId}, 'skills')" style="background:#1c2128; border:2px solid var(--blueprint-border); padding:2rem; border-radius:12px; cursor:pointer; text-align:center; color:var(--text-primary); transition:all 0.3s; position:relative; overflow:hidden;">
                            <div style="position:absolute; top:0; left:0; right:0; height:4px; background:linear-gradient(90deg, #3fb950, #58a6ff);"></div>
                            <span style="font-size:3rem; display:block; margin-bottom:1rem;">🎯</span>
                            <div style="font-family:'Outfit',sans-serif; font-size:1.3rem; font-weight:700; margin-bottom:0.5rem;">Skills</div>
                            <div style="font-size:0.85rem; color:var(--text-secondary);">${skills.length} blueprints</div>
                            <div style="margin-top:1rem; font-size:0.75rem; color:var(--accent-blue); font-family:'JetBrains Mono';">View All →</div>
                        </button>

                        <!-- RESOURCES BUTTON -->
                        <button class="category-nav-btn" onclick="renderCategoryView(${stageId}, 'resources')" style="background:#1c2128; border:2px solid var(--blueprint-border); padding:2rem; border-radius:12px; cursor:pointer; text-align:center; color:var(--text-primary); transition:all 0.3s; position:relative; overflow:hidden;">
                            <div style="position:absolute; top:0; left:0; right:0; height:4px; background:linear-gradient(90deg, #fbc02d, #ff7043);"></div>
                            <span style="font-size:3rem; display:block; margin-bottom:1rem;">📦</span>
                            <div style="font-family:'Outfit',sans-serif; font-size:1.3rem; font-weight:700; margin-bottom:0.5rem;">Resources</div>
                            <div style="font-size:0.85rem; color:var(--text-secondary);">${resources.length} blueprints</div>
                            <div style="margin-top:1rem; font-size:0.75rem; color:var(--accent-blue); font-family:'JetBrains Mono';">View All →</div>
                        </button>

                        <!-- TOOLS BUTTON -->
                        <button class="category-nav-btn" onclick="renderCategoryView(${stageId}, 'tools')" style="background:#1c2128; border:2px solid var(--blueprint-border); padding:2rem; border-radius:12px; cursor:pointer; text-align:center; color:var(--text-primary); transition:all 0.3s; position:relative; overflow:hidden;">
                            <div style="position:absolute; top:0; left:0; right:0; height:4px; background:linear-gradient(90deg, #4fc3f7, #9d50bb);"></div>
                            <span style="font-size:3rem; display:block; margin-bottom:1rem;">🔨</span>
                            <div style="font-family:'Outfit',sans-serif; font-size:1.3rem; font-weight:700; margin-bottom:0.5rem;">Tools</div>
                            <div style="font-size:0.85rem; color:var(--text-secondary);">${tools.length} blueprints</div>
                            <div style="margin-top:1rem; font-size:0.75rem; color:var(--accent-blue); font-family:'JetBrains Mono';">View All →</div>
                        </button>
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

function renderCategoryView(stageId, category) {
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

    function renderCardGrid(items) {
        if (items.length === 0) return '<p style="color:var(--text-secondary); font-style:italic; text-align:center; padding:2rem;">No blueprints in this category yet.</p>';
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
                <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1rem;">
                    <span style="font-size: 3rem;">${categoryIcon}</span>
                    <div>
                        <h2 style="margin:0; font-family:'Outfit',sans-serif; font-size:2rem;">${categoryTitle}</h2>
                        <div style="color: var(--accent-blue); font-family: 'JetBrains Mono'; font-size: 0.9rem;">${stage.name} • ${items.length} blueprints</div>
                    </div>
                </div>
            </div>

            <!-- ITEMS GRID -->
            ${renderCardGrid(items)}
        </div>
    `;

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

init();
