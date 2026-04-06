const STAGES = {
    1: { id: 1, name: 'Stone & Fire', period: 'The Survival Dawn', icon: '🪨', description: 'Master the basics: shaping stone, making fire, and surviving with raw materials from the earth.' },
    2: { id: 2, name: 'Wood & Fiber', period: 'The Craft Age', icon: '🌲', description: 'Harness organic materials for shelter, cordage, and tools.' },
    3: { id: 3, name: 'Clay & Metal', period: 'The Thermal Age', icon: '🔥', description: 'Fire ceramics and smelt the first metals from raw ore.' },
    4: { id: 4, name: 'Machine & Power', period: 'The Mechanical Age', icon: '⚙️', description: 'Build mechanisms that convert natural forces into work.' },
    5: { id: 5, name: 'Electricity', period: 'The Electromagnetic Age', icon: '⚡', description: 'Harness the electron and build the modern world.' }
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
        videoUrl: 'https://www.youtube.com/embed/b817-P9n-6Q'
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
        videoUrl: 'https://www.youtube.com/embed/W5u4ttosEmM'
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
        videoUrl: 'https://www.youtube.com/embed/k9pL5m4zN8Q'
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
        videoUrl: 'https://www.youtube.com/embed/k9pL5m4zN8Q'
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
        videoUrl: 'https://www.youtube.com/embed/k9pL5m4zN8Q'
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
        videoUrl: 'https://www.youtube.com/embed/ZEl-Y1NvBVI'
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
        videoUrl: 'https://www.youtube.com/embed/ZEl-Y1NvBVI'
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
        videoUrl: 'https://www.youtube.com/embed/ZEl-Y1NvBVI'
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
        videoUrl: 'https://www.youtube.com/embed/ZEl-Y1NvBVI'
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
        videoUrl: 'https://www.youtube.com/embed/ZEl-Y1NvBVI'
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
        videoUrl: 'https://www.youtube.com/embed/ZEl-Y1NvBVI'
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
        videoUrl: 'https://www.youtube.com/embed/ZEl-Y1NvBVI'
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
        videoUrl: 'https://www.youtube.com/embed/ZEl-Y1NvBVI'
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
        videoUrl: 'https://www.youtube.com/embed/ZEl-Y1NvBVI'
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
        videoUrl: 'https://www.youtube.com/embed/k9pL5m4zN8Q'
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
        videoUrl: 'https://www.youtube.com/embed/ZEl-Y1NvBVI'
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
        videoUrl: 'https://www.youtube.com/embed/W5u4ttosEmM'
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
        videoUrl: 'https://www.youtube.com/embed/k9pL5m4zN8Q'
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
        videoUrl: 'https://www.youtube.com/embed/k9pL5m4zN8Q'
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
        videoUrl: 'https://www.youtube.com/embed/ZEl-Y1NvBVI'
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
        videoUrl: 'https://www.youtube.com/embed/k9pL5m4zN8Q'
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
        videoUrl: 'https://www.youtube.com/embed/ZEl-Y1NvBVI'
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
        videoUrl: 'https://www.youtube.com/embed/k9pL5m4zN8Q'
    },
    {
        id: 'obsidian',
        name: 'Obsidian',
        stage: 1,
        icon: '🖤',
        category: 'resource',
        objective: 'Source volcanic glass — the sharpest material available to primitive humans.',
        evolution: 'Obsidian blades are sharper than surgical steel. Where available, it replaces flint as the premium tool-making material.',
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
        videoUrl: 'https://www.youtube.com/embed/k9pL5m4zN8Q'
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
        videoUrl: 'https://www.youtube.com/embed/jB58f7I0sL4'
    },
    {
        id: 'sandstone',
        name: 'Sandstone',
        stage: 1,
        icon: '🟫',
        category: 'resource',
        objective: 'Collect abrasive sandstone for grinding, polishing, and smoothing other materials.',
        evolution: 'Sandstone is the sandpaper of the Stone Age. Without it, nothing can be smoothed, sharpened, or polished.',
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
        videoUrl: 'https://www.youtube.com/embed/jB58f7I0sL4'
    },
    {
        id: 'hardwood',
        name: 'Hardwood (Oak, Ash, Hickory)',
        stage: 1,
        icon: '🪵',
        category: 'resource',
        objective: 'Harvest dense, strong wood for tool handles, shafts, and structural components.',
        evolution: 'Hardwood handles multiply the effectiveness of every stone tool. A haftered axe is 10x more efficient than a hand-held stone.',
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
        videoUrl: 'https://www.youtube.com/embed/ZEl-Y1NvBVI'
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
        videoUrl: 'https://www.youtube.com/embed/ZEl-Y1NvBVI'
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
        videoUrl: 'https://www.youtube.com/embed/k9pL5m4zN8Q'
    },
    {
        id: 'sinew',
        name: 'Sinew (Animal Tendon)',
        stage: 1,
        icon: '🪢',
        category: 'resource',
        objective: 'Process animal tendons into the strongest natural cordage available.',
        evolution: 'Sinew is stronger than any plant fiber. It is used for bow backing, tool lashing, sewing thread, and atlatl binding.',
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
        videoUrl: 'https://www.youtube.com/embed/ZEl-Y1NvBVI'
    },
    {
        id: 'pine-resin',
        name: 'Pine Resin',
        stage: 1,
        icon: '🟡',
        category: 'resource',
        objective: 'Collect tree sap for adhesive, waterproofing, and fire-starting.',
        evolution: 'Pine resin is the superglue of the Stone Age. Mixed with charcoal and beeswax, it creates an adhesive stronger than many modern glues.',
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
        videoUrl: 'https://www.youtube.com/embed/ZEl-Y1NvBVI'
    },
    {
        id: 'clay',
        name: 'Clay (River/Alluvial)',
        stage: 1,
        icon: '🟤',
        category: 'resource',
        objective: 'Locate and process clay for construction, daub, and early container-making.',
        evolution: 'Clay is the foundation of construction (daub), waterproofing, and eventually pottery. It transforms from soft earth to hard ceramic when fired.',
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
        videoUrl: 'https://www.youtube.com/embed/L8zE5l46_u0'
    },
    {
        id: 'animal-hide',
        name: 'Animal Hide (Raw)',
        stage: 1,
        icon: '🟫',
        category: 'resource',
        objective: 'Process hunted animal skins into raw hide for leather production.',
        evolution: 'Raw hide is the raw material for leather — the first engineered material. It enables clothing, shelter, and containers.',
        requirements: [
            { name: 'Hunted animal (deer, elk, bison)', value: 'Fresh kill' },
            { name: 'Flint knife', value: 'For skinning' },
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
        videoUrl: 'https://www.youtube.com/embed/W5u4ttosEmM'
    },
    {
        id: 'plant-fiber',
        name: 'Plant Fiber (Nettle, Yucca, Cedar Bark)',
        stage: 1,
        icon: '🌿',
        category: 'resource',
        objective: 'Harvest and process plant fibers for cordage, weaving, and tinder.',
        evolution: 'Plant fiber is the foundation of cordage — and without cordage, there is no bow drill, no hafted axe, no atlatl, and no sewing.',
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
        videoUrl: 'https://www.youtube.com/embed/ZEl-Y1NvBVI'
    },
    {
        id: 'ochre',
        name: 'Ochre (Red & Yellow Pigment)',
        stage: 1,
        icon: '🔴',
        category: 'resource',
        objective: 'Gather iron oxide pigments for paint, body art, tanning, and symbolic communication.',
        evolution: 'Ochre is the first pigment. It enables cave art, body decoration, hide tanning, and the symbolic communication that defines human culture.',
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
        videoUrl: 'https://www.youtube.com/embed/ZEl-Y1NvBVI'
    },
    {
        id: 'charcoal',
        name: 'Charcoal',
        stage: 1,
        icon: '⬛',
        category: 'resource',
        objective: 'Produce high-carbon fuel by burning wood in a low-oxygen environment.',
        evolution: 'Charcoal burns hotter and cleaner than wood. It is the essential fuel for pottery firing, metal smelting, and glass-making.',
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
        videoUrl: 'https://www.youtube.com/embed/xvCjJqCRNzA'
    },
    {
        id: 'clay-bricks',
        name: 'Clay Bricks',
        stage: 1,
        icon: '🧱',
        category: 'resource',
        objective: 'Mold and fire clay into standardized, durable building blocks.',
        evolution: 'Fired bricks enable permanent structures: kilns, furnaces, walls, and eventually cities. They are the backbone of civilization.',
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
        videoUrl: 'https://www.youtube.com/embed/L8zE5l46_u0'
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

    function renderCardGrid(items) {
        if (items.length === 0) return '<p style="color:var(--text-secondary); font-style:italic; text-align:center; padding:2rem;">None yet.</p>';
        return `<div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap:1rem;">
            ${items.map(bp => `
                <button class="hub-card" onclick="selectBlueprint('${bp.id}')" style="background:#1c2128; border:1px solid var(--blueprint-border); padding:1.5rem; border-radius:12px; cursor:pointer; text-align:center; color:var(--text-primary); border-bottom:3px solid var(--stage-${stageId});">
                    <span style="font-size:2rem;">${renderIcon(bp.icon)}</span>
                    <div style="font-weight:700; margin-top:0.5rem;">${bp.name}</div>
                    <span style="font-size:0.6rem; color:var(--text-secondary); text-transform:uppercase;">REF: ${bp.id.toUpperCase()}</span>
                </button>
            `).join('')}
        </div>`;
    }

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
                    <!-- SKILLS SECTION -->
                    <div style="margin-top:2.5rem;">
                        <h3 style="font-family:'Outfit',sans-serif; font-size:1.4rem; margin-bottom:1rem; display:flex; align-items:center; gap:0.5rem;">
                            🎯 Skills <span style="font-size:0.8rem; color:var(--text-secondary); font-weight:400;">(${skills.length})</span>
                        </h3>
                        ${renderCardGrid(skills)}
                    </div>

                    <!-- RESOURCES SECTION -->
                    <div style="margin-top:2.5rem;">
                        <h3 style="font-family:'Outfit',sans-serif; font-size:1.4rem; margin-bottom:1rem; display:flex; align-items:center; gap:0.5rem;">
                             Resources <span style="font-size:0.8rem; color:var(--text-secondary); font-weight:400;">(${resources.length})</span>
                        </h3>
                        ${renderCardGrid(resources)}
                    </div>

                    <!-- TOOLS SECTION -->
                    <div style="margin-top:2.5rem;">
                        <h3 style="font-family:'Outfit',sans-serif; font-size:1.4rem; margin-bottom:1rem; display:flex; align-items:center; gap:0.5rem;">
                            🔨 Tools <span style="font-size:0.8rem; color:var(--text-secondary); font-weight:400;">(${tools.length})</span>
                        </h3>
                        ${renderCardGrid(tools)}
                    </div>
                `
        }
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

init();
