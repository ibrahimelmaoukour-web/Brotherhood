const STAGES = {
    1: { id: 1, name: 'Sacred Water & Soil', period: 'The Survival Dawn', icon: '🚰', description: 'Locating groundwater in dry regions and establishing the first primitive harvests to anchor the Brotherhood.' },
    2: { id: 2, name: 'The Foundation of Fire', period: 'The Thermal Age', icon: '🔥', description: 'Mastering fire and ceramic vessels to unlock nourishment and advanced material processing.' },
    3: { id: 3, name: 'The Pyrotechnic Age', period: 'The Dawn of Smelting', icon: '⚒️', description: 'Reaching temperatures high enough to smelt and refine metals from the raw earth.' },
    4: { id: 4, name: 'The Mechanical Bridge', period: 'The Machine Age', icon: '⚙️', description: 'Converting natural forces into kinetic energy to automate labor and power precision devices.' },
    5: { id: 5, name: 'The Electromagnetic Leap', period: 'The Electric Age', icon: '⚡', description: 'Crafting the raw components to harness the electron and power the modern world.' }
};

// Roadmap data for each craft showing progression stages
const CRAFT_ROADMAPS = {
    water: {
        id: 'water',
        name: 'Water & Agriculture',
        icon: '💧',
        description: 'From finding your first water source to mastering hydraulic engineering and irrigation systems.',
        stages: [
            {
                level: 1,
                title: 'Water Source Discovery',
                subtitle: 'Finding Water in Dry Lands',
                icon: '🔍',
                objective: 'Locate underground water using environmental indicators when no surface water is visible.',
                details: [
                    'Observe phreatophyte plants (willows, reeds, cottonwoods) - their deep roots indicate groundwater',
                    'Identify topographical low-points where water naturally collects',
                    'Look for lush green patches in otherwise dry areas',
                    'Dig shallow test pits at dawn to check for moisture/dew accumulation',
                    'Follow animal trails - they often lead to water sources',
                    'Watch for insect swarms and bird activity patterns'
                ],
                resources: [
                    { name: 'Observation Skills', value: 'Essential' },
                    { name: 'Digging Stick', value: '1 unit' },
                    { name: 'Knowledge of Local Flora', value: 'Critical' }
                ],
                techniques: ['Environmental indicator reading', 'Shallow test digging', 'Dew collection'],
                outputs: ['Daily water supply for 1-2 people', 'Knowledge of seasonal water patterns', 'Permanent campsite location'],
                unlocks: ['Stage 2: Well Drilling', 'Basic agriculture planning'],
                dependencies: []
            },
            {
                level: 2,
                title: 'Well Construction',
                subtitle: 'Reaching the Water Table',
                icon: '🏗️',
                objective: 'Dig consistent, safe wells through hard soil to reach groundwater reliably.',
                details: [
                    'Build a percussion tripod drill using 3 hardwood poles (3m each)',
                    'Suspend a 15kg weighted sharp rock from the tripod apex',
                    'Use hand-woven rope (25m) to lift and drop the weight repeatedly',
                    'Break through hard soil layers with percussion force',
                    'Shore well walls with stonework or clay to prevent cave-ins',
                    'Line the well with clay for waterproofing',
                    'Create a protective cover to keep debris out'
                ],
                resources: [
                    { name: 'Hardwood Poles', value: '3 × 3m' },
                    { name: 'Weighted Sharp Rock', value: '15 kg' },
                    { name: 'Hand-woven Rope', value: '25 m' },
                    { name: 'Clay for Lining', value: '20 kg' }
                ],
                techniques: ['Percussion digging', 'Tripod construction', 'Well wall reinforcement'],
                outputs: ['Reliable groundwater access', 'Water surplus for irrigation', 'Permanent water source'],
                unlocks: ['Stage 3: Irrigation Systems', 'Consistent water storage'],
                dependencies: ['Basketry Stage 2 (rope making)', 'Knapping Stage 1-2 (cutting tools)']
            },
            {
                level: 3,
                title: 'Irrigation & Zai Pits',
                subtitle: 'Capturing Every Drop',
                icon: '🌱',
                objective: 'Establish agriculture in dry soil by capturing rainfall and redirecting water to crops.',
                details: [
                    'Dig Zai pits (30cm diameter, 20cm deep) in regular patterns',
                    'Fill pits with dried leaves, manure, and organic mulch (20kg)',
                    'Termites create irrigation tunnels, aerating the soil naturally',
                    'Plant seeds in pit centers to concentrate rainwater at root zones',
                    'Build simple gravity-fed channels from wells to planting areas',
                    'Create micro-catchments to funnel runoff to planting zones',
                    'Terrace slopes to prevent water loss'
                ],
                resources: [
                    { name: 'Digging Stick/Stone Hoe', value: '1 unit' },
                    { name: 'Compost/Organic Mulch', value: '20 kg' },
                    { name: 'Ancestral Grain Seeds', value: '500 g' },
                    { name: 'Manure', value: '10 kg' }
                ],
                techniques: ['Zai pit construction', 'Organic matter layering', 'Gravity irrigation channels'],
                outputs: ['First reliable crop yields', 'Drought-resistant agriculture', 'Food surplus begins'],
                unlocks: ['Stage 4: Aqueduct Systems', 'Permanent settlement'],
                dependencies: ['Knapping Stage 2 (stone hoe)', 'Well construction knowledge']
            },
            {
                level: 4,
                title: 'Aqueduct Engineering',
                subtitle: 'Moving Water Over Distance',
                icon: '🏛️',
                objective: 'Engineer water flow over long distances using clay pipes and flood management.',
                details: [
                    'Survey level gradients using water level instruments',
                    'Construct clay pipe aqueducts with slip coating for waterproofing',
                    'Build check dams from stone and earth to control flood waters',
                    'Implement flood-recession farming in predictable flood zones',
                    'Create qanat-style underground channels to reduce evaporation',
                    'Design settling basins to filter sediment',
                    'Build overflow channels for flood protection'
                ],
                resources: [
                    { name: 'Fired Clay Pipes', value: '100+ units' },
                    { name: 'Stone Masonry Tools', value: 'Complete set' },
                    { name: 'Waterproof Slip Coating', value: '50 kg' },
                    { name: 'Labor Force', value: 'Organized team' }
                ],
                techniques: ['Gradient surveying', 'Clay pipe waterproofing', 'Flood timing and prediction'],
                outputs: ['Irrigated fields far from water', 'Multi-season harvests', 'Population support'],
                unlocks: ['Stage 5: Water Wheels', 'Specialized labor classes'],
                dependencies: ['Pottery Stage 4 (fired pipes)', 'Construction Stage 3 (stonework)', 'Knapping Stage 3']
            },
            {
                level: 5,
                title: 'Hydraulic Power Systems',
                subtitle: 'Harnessing Kinetic Energy',
                icon: '🎡',
                objective: 'Convert flowing water into mechanical power for automated labor.',
                details: [
                    'Construct water wheel with precise alignment to stream sluice',
                    'Install iron-tipped axle for durability and reduced friction',
                    'Attach 16 bucket units with strong lashings',
                    'Build stone housing to direct and concentrate water flow',
                    'Transfer mechanical power to grinding stones and other machinery',
                    'Calculate flow rates by observation for optimal power',
                    'Design variable-speed systems for different tasks'
                ],
                resources: [
                    { name: 'Iron-tipped Axle', value: '1 unit' },
                    { name: 'Timber for Wheel', value: 'Large hardwood' },
                    { name: 'Bucket Lashings', value: '16 units' },
                    { name: 'Precise Stonework', value: 'Housing structure' }
                ],
                techniques: ['Hydraulic engineering', 'Bearing construction', 'Flow rate calculation', 'Power transfer'],
                outputs: ['Automated grain grinding', 'Mechanical power for crafts', 'Foundation for electricity'],
                unlocks: ['Mechanical Age technologies', 'Electromagnetic generation'],
                dependencies: ['Water Stage 4', 'Metalworking Stage 3 (iron axle)', 'Construction Stage 4', 'Basketry Stage 4-5']
            }
        ]
    },
    pottery: {
        id: 'pottery',
        name: 'Pottery & Ceramics',
        icon: '🏺',
        description: 'From gathering raw clay to creating refractory ceramics that enable metalworking.',
        stages: [
            {
                level: 1,
                title: 'Clay Identification',
                subtitle: 'Discovering Plastic Earth',
                icon: '🔍',
                objective: 'Identify and gather clay deposits, understanding their plastic properties.',
                details: [
                    'Search riverbanks and exposed subsoil for red clay deposits',
                    'Test clay plasticity by rolling into coils - it should hold shape without cracking',
                    'Identify temper materials: crushed shell, sand, or grog (fired clay)',
                    'Process clay through levigation (water separation to remove impurities)',
                    'Determine correct clay-to-temper ratio for workability',
                    'Learn to recognize different clay types by color and texture'
                ],
                resources: [
                    { name: 'Red River Clay Deposit', value: 'Accessible location' },
                    { name: 'Water for Processing', value: 'Large quantity' },
                    { name: 'Crushed Shell Temper', value: '1 kg' },
                    { name: 'Collection Containers', value: '2-3 units' }
                ],
                techniques: ['Clay deposit identification', 'Levigation purification', 'Temper preparation'],
                outputs: ['Processed clay ready for forming', 'Understanding of material properties', 'Source location knowledge'],
                unlocks: ['Stage 2: Coil Pottery', 'Vessel creation capability'],
                dependencies: []
            },
            {
                level: 2,
                title: 'Coil Pottery & Pit Firing',
                subtitle: 'First Vessels',
                icon: '🫖',
                objective: 'Create functional containers through coil-building and pit-firing techniques.',
                details: [
                    'Temper clay with crushed shell or sand (10% by volume)',
                    'Roll clay into uniform coils (2-3cm diameter)',
                    'Stack coils in spiral pattern, pinching together',
                    'Burnish surface with smooth river stone for water resistance',
                    'Dry vessels slowly in shade for 3-5 days',
                    'Bury in fire-pit with combustible material for 12 hours',
                    'Control firing temperature gradually to prevent cracking'
                ],
                resources: [
                    { name: 'Tempered Clay', value: '10 kg' },
                    { name: 'Smooth River Stones', value: '2-3 units' },
                    { name: 'Firewood', value: 'Large pile' },
                    { name: 'Tinder', value: 'Dry grass/leaves' }
                ],
                techniques: ['Coil building', 'Burnishing', 'Slow pit firing', 'Temperature control'],
                outputs: ['Water containers', 'Cooking vessels', 'Storage jars'],
                unlocks: ['Stage 3: Kiln Construction', 'Food storage', 'Water transport'],
                dependencies: ['Fire-making ability', 'Clay processing (Stage 1)']
            },
            {
                level: 3,
                title: 'Kiln Construction',
                subtitle: 'Mastering Temperature',
                icon: '🔥',
                objective: 'Build controlled kilns reaching 900-1100°C for durable, water-tight ceramics.',
                details: [
                    'Construct updraft kiln from clay bricks and stone',
                    'Design firebox below firing chamber for heat circulation',
                    'Create kiln furniture (shelves, stilts) for stacking',
                    'Learn to read temperature by flame color and glow',
                    'Control ramp-up of temperature over 8-12 hours',
                    'Manage reduction vs. oxidation atmospheres',
                    'Implement slow cooling to prevent thermal shock'
                ],
                resources: [
                    { name: 'Clay Bricks', value: '50+ units' },
                    { name: 'Stone', value: 'For kiln structure' },
                    { name: 'Fuel Wood/Charcoal', value: 'Very large quantity' },
                    { name: 'Kiln Furniture', value: 'Shelves and stilts' }
                ],
                techniques: ['Kiln construction', 'Temperature reading', 'Atmosphere control', 'Loading patterns'],
                outputs: ['Durable water-tight vessels', 'Standardized sizes', 'Ceramic tools (spindle whorls)'],
                unlocks: ['Stage 4: Glazes', 'Spindle whorls for textiles', 'Better storage'],
                dependencies: ['Fire mastery', 'Construction skills', 'Pottery Stage 2']
            },
            {
                level: 4,
                title: 'Glazes & Slip Casting',
                subtitle: 'Glass Surfaces',
                icon: '✨',
                objective: 'Create waterproof glass-like coatings and cast vessels from molds.',
                details: [
                    'Collect wood ash in large quantities for glaze base',
                    'Mix glaze from ash, clay, and mineral oxides (iron, copper)',
                    'Prepare slip (liquid clay) for casting',
                    'Carve mold forms from stone or wood',
                    'Fire in two stages: bisque firing then glaze firing',
                    'Control temperature to 1200°C+ for proper glaze melting',
                    'Experiment with mineral additives for color effects'
                ],
                resources: [
                    { name: 'Wood Ash', value: '50+ kg' },
                    { name: 'Mineral Pigments', value: 'Iron oxide, copper' },
                    { name: 'Mold Materials', value: 'Stone/wood blocks' },
                    { name: 'Precise Kiln Control', value: 'Critical' }
                ],
                techniques: ['Glaze formulation', 'Slip casting', 'Two-stage firing', 'Mineral coloring'],
                outputs: ['Waterproof glazed vessels', 'Chemical storage', 'Ceramic pipes', 'Crucibles for smelting'],
                unlocks: ['Stage 5: Refractory Ceramics', 'Aqueduct pipes', 'Metal crucibles'],
                dependencies: ['Pottery Stage 3', 'Mineral identification', 'Large-scale ash collection']
            },
            {
                level: 5,
                title: 'Refractory Ceramics',
                subtitle: 'Extreme Temperature Materials',
                icon: '🌋',
                objective: 'Create ceramics that withstand 1300°C+ for metal smelting infrastructure.',
                details: [
                    'Formulate high-alumina refractory clays',
                    'Add specific tempers for thermal shock resistance',
                    'Test refractory quality by repeated heating/cooling cycles',
                    'Manufacture specialized crucibles for bronze/iron smelting',
                    'Create ceramic tuyeres for forced-air bellows',
                    'Build refractory kiln furniture for sustained high-temperature operation',
                    'Develop precision ceramic dimensions for machine components'
                ],
                resources: [
                    { name: 'Refractory Clay', value: 'Specific sources' },
                    { name: 'Precision Tempers', value: 'Calculated ratios' },
                    { name: 'Advanced Kiln Design', value: 'High-temp capable' },
                    { name: 'Testing Equipment', value: 'Thermal cycling setup' }
                ],
                techniques: ['Refractory formulation', 'Thermal shock testing', 'Precision dimensions', 'Sustained 1300°C+ operation'],
                outputs: ['Smelting crucibles', 'Kiln components', 'Ceramic armor', 'Forge infrastructure'],
                unlocks: ['Pyrotechnic Age', 'Metal smelting capability', 'Advanced forge'],
                dependencies: ['All previous pottery stages', 'Metalworking knowledge', 'Advanced mineralogy']
            }
        ]
    },
    knapping: {
        id: 'knapping',
        name: 'Stone Tool Making',
        icon: '🪨',
        description: 'From striking your first flake to precision quarrying for monumental architecture.',
        stages: [
            {
                level: 1,
                title: 'Stone Identification',
                subtitle: 'Reading the Rock Record',
                icon: '🔍',
                objective: 'Identify knappable stones and produce your first sharp cutting edges.',
                details: [
                    'Learn to identify flint/chert nodules in limestone formations',
                    'Search volcanic fields for obsidian (glass-like, conchoidal fracture)',
                    'Find quartzite in riverbeds - durable and widely available',
                    'Recognize conchoidal fracture patterns (shell-like breaking)',
                    'Practice direct percussion with a basalt hammerstone (1-2kg)',
                    'Strike at correct platform angle (less than 90 degrees)',
                    'Produce first sharp flakes for cutting and scraping'
                ],
                resources: [
                    { name: 'Hammerstone (Basalt)', value: '1-2 kg' },
                    { name: 'Raw Stone Cores', value: 'Various types' },
                    { name: 'Safety Awareness', value: 'Eye protection' },
                    { name: 'Collection Bag', value: 'For usable flakes' }
                ],
                techniques: ['Stone identification', 'Direct percussion', 'Platform preparation', 'Flake removal'],
                outputs: ['Sharp cutting flakes', 'Scrapers for hide', 'Understanding of fracture'],
                unlocks: ['Stage 2: Bifacial Tools', 'Hide processing', 'Basic cutting'],
                dependencies: []
            },
            {
                level: 2,
                title: 'Bifacial Tools & Axes',
                subtitle: 'Symmetrical Precision',
                icon: '🪓',
                objective: 'Create controlled, symmetrical tools through systematic flaking on both sides.',
                details: [
                    'Select quality flint core (1.2kg minimum for good tools)',
                    'Prepare an antler pressure flaker (15cm) for precision work',
                    'Flake both sides alternately (bifacial reduction) for symmetry',
                    'Thin edges through careful percussion strikes',
                    'Use pressure flaking with antler for fine edge control',
                    'Haft stone blade to wooden handle using resin and sinew',
                    'Create specialized tools: axes, hand axes, projectile points'
                ],
                resources: [
                    { name: 'Flint Core', value: '1.2 kg' },
                    { name: 'Antler Pressure Flaker', value: '15 cm' },
                    { name: 'Hafting Resin', value: '500 g' },
                    { name: 'Wooden Handles', value: 'Shaped hardwood' }
                ],
                techniques: ['Bifacial reduction', 'Edge thinning', 'Pressure flaking', 'Hafting'],
                outputs: ['Flint-knapped axe', 'Hand axes', 'Projectile points', 'Hide scrapers'],
                unlocks: ['Stage 3: Specialized Kits', 'Timber harvesting', 'Hunting efficiency'],
                dependencies: ['Basketry Stage 1 (sinew)', 'Resin/fire knowledge']
            },
            {
                level: 3,
                title: 'Specialized Tool Kits',
                subtitle: 'The Complete Workshop',
                icon: '🧰',
                objective: 'Develop ground stone tools and complete specialized tool kits for all tasks.',
                details: [
                    'Create complete tool kit: blades, scrapers, drills, awls, burins',
                    'Use indirect percussion with punch for controlled blade removal',
                    'Prepare blade-cores for multiple standardized blades',
                    'Grind basalt for completely different tool class: metates and manos',
                    'Heat-treat stone to improve knapping quality (slow heating/cooling)',
                    'Peck and grind stone for smooth, durable surfaces',
                    'Organize tools by function for efficient workshop'
                ],
                resources: [
                    { name: 'Variety of Stone Types', value: 'Flint, basalt, obsidian' },
                    { name: 'Grinding Surfaces', value: 'Flat sandstone' },
                    { name: 'Heat Source', value: 'Controlled fire' },
                    { name: 'Punch Tool', value: 'Antler or hardwood' }
                ],
                techniques: ['Indirect percussion', 'Blade-core preparation', 'Ground stone production', 'Heat treatment'],
                outputs: ['Complete workshop', 'Grain grinding capability', 'Precision cutting tools'],
                unlocks: ['Stage 4: Microliths', 'Grain processing', 'Precision drilling'],
                dependencies: ['Fire for heat treatment', 'Diverse material sourcing']
            },
            {
                level: 4,
                title: 'Microliths & Composites',
                subtitle: 'Micro-Precision Engineering',
                icon: '⚙️',
                objective: 'Create small, precise stone components for powerful composite tools.',
                details: [
                    'Pressure flake at micro-scale for tiny, sharp blade inserts',
                    'Create slot-and-resin composite tool assemblies',
                    'Manufacture standardized interchangeable microlith inserts',
                    'Knapp obsidian for surgical-grade cutting edges',
                    'Build composite sickle with multiple stone blades set in wood handle',
                    'Craft precision drill bits for boring holes',
                    'Create saw blades for cutting wood and bone'
                ],
                resources: [
                    { name: 'Premium Obsidian/Flint', value: 'High quality' },
                    { name: 'Precision Antler Tools', value: 'Multiple sizes' },
                    { name: 'Composite Handle Materials', value: 'Wood/bone' },
                    { name: 'Fine Sinew', value: 'For binding' }
                ],
                techniques: ['Micro pressure flaking', 'Composite assembly', 'Obsidian knapping', 'Standardization'],
                outputs: ['Harvesting sickles', 'Surgical tools', 'Precision boring tools', 'Trade items'],
                unlocks: ['Agriculture tools', 'Precision craftsmanship', 'Trade economy'],
                dependencies: ['Premium materials', 'Advanced hafting', 'Precise hand-eye coordination']
            },
            {
                level: 5,
                title: 'Quarry Operations',
                subtitle: 'Monumental Stone Working',
                icon: '⛰️',
                objective: 'Scale up to architectural dimensions and organized quarry operations.',
                details: [
                    'Use wedge and feather technique with wood expansion for large extraction',
                    'Apply thermal shock (fire-setting) to fracture massive stone blocks',
                    'Create precision leveling instruments using water levels',
                    'Build stone-on-stone polishing installations',
                    'Transport multi-ton stones using rollers and sledges',
                    'Achieve mortarless precision joints for architectural stone',
                    'Organize quarry site with labor force and systematic extraction'
                ],
                resources: [
                    { name: 'Timber for Wedges/Rollers', value: 'Massive quantity' },
                    { name: 'Labor Force', value: 'Organized team' },
                    { name: 'Water for Leveling', value: 'For instruments' },
                    { name: 'Quarry Site', value: 'Quality stone deposit' }
                ],
                techniques: ['Large-scale extraction', 'Thermal shock fracturing', 'Precision leveling', 'Megalithic transportation'],
                outputs: ['Foundation stones', 'Precision walls', 'Monumental architecture', 'Permanent infrastructure'],
                unlocks: ['Permanent construction', 'Monumental buildings', 'Civilization-scale projects'],
                dependencies: ['All knapping skills', 'Water management', 'Timber harvesting', 'Social organization']
            }
        ]
    },
    basketry: {
        id: 'basketry',
        name: 'Basketry & Weaving',
        icon: '🧺',
        description: 'From twisting simple fibers to creating mechanical components and electrical insulation.',
        stages: [
            {
                level: 1,
                title: 'Fiber Identification',
                subtitle: 'Nature\'s Cordage',
                icon: '🌿',
                objective: 'Identify and prepare plant fibers for basic bundling and binding.',
                details: [
                    'Collect reeds from riverbanks - long, flexible, and strong',
                    'Gather long grasses suitable for twisting into bundles',
                    'Harvest tree bark strips (cedar, willow) for cordage',
                    'Identify useful vines for natural binding material',
                    'Collect animal sinew from hunting for strong thread',
                    'Soak fibers in water to increase flexibility',
                    'Practice simple twisting of grass bundles'
                ],
                resources: [
                    { name: 'Reeds', value: 'Large bundle' },
                    { name: 'Long Grasses', value: 'Harvested' },
                    { name: 'Vines', value: 'Various types' },
                    { name: 'Water', value: 'For soaking' }
                ],
                techniques: ['Fiber identification', 'Simple twisting', 'Basic over-under weaving', 'Knot tying'],
                outputs: ['Carrying bundles', 'Temporary cordage', 'Fiber property knowledge'],
                unlocks: ['Stage 2: Rope Making', 'Basic binding', 'Material gathering'],
                dependencies: []
            },
            {
                level: 2,
                title: 'Twined Baskets & Rope',
                subtitle: 'Containers and Cordage',
                icon: '🪢',
                objective: 'Create functional baskets and strong rope through systematic weaving.',
                details: [
                    'Build basic twined basket with two vertical stakes and horizontal weaving',
                    'Master reverse-wrap rope making for consistent strength',
                    'Create 25m of hand-woven rope for tripod well construction',
                    'Finish basket rims for durability and clean edges',
                    'Begin coiled basketry technique for round containers',
                    'Line water baskets with pitch for waterproofing',
                    'Construct fish traps from woven materials'
                ],
                resources: [
                    { name: 'Prepared Reeds/Grasses', value: 'Large quantity' },
                    { name: 'Water for Soaking', value: 'For fiber prep' },
                    { name: 'Cutting Tools', value: 'For harvesting' },
                    { name: 'Pitch/Resin', value: 'For waterproofing' }
                ],
                techniques: ['Twining', 'Rope making', 'Rim finishing', 'Coiled basketry', 'Waterproofing'],
                outputs: ['25m rope for well-drilling', 'Food storage baskets', 'Water containers', 'Fish traps'],
                unlocks: ['Stage 3: Fine Weaving', 'Well construction capability', 'Storage solutions'],
                dependencies: ['Stone cutting tools (Knapping Stage 1-2)']
            },
            {
                level: 3,
                title: 'Fine Weaving & Textiles',
                subtitle: 'The Birth of Fabric',
                icon: '🧵',
                objective: 'Process fibers into thread and weave flexible, strong textiles.',
                details: [
                    'Ret fiber plants (flax, hemp, nettle) by rotting stems in water',
                    'Beat and scutch fibers to extract usable strands',
                    'Spin thread using ceramic spindle whorl',
                    'Build simple two-bar loom from timber',
                    'Weave plain cloth on loom with consistent tension',
                    'Create twill patterns for stronger fabric',
                    'Make fine-woven mats and bags'
                ],
                resources: [
                    { name: 'Fiber Plants', value: 'Flax, hemp, nettle' },
                    { name: 'Spindle Whorl', value: 'Ceramic (Pottery Stage 3)' },
                    { name: 'Loom Timber', value: 'Straight hardwood' },
                    { name: 'Beating Tools', value: 'For fiber prep' }
                ],
                techniques: ['Retting', 'Spinning', 'Plain weave', 'Twill patterns', 'Loom construction'],
                outputs: ['Woven fabric', 'Fishing nets', 'Fine storage', 'Construction cordage'],
                unlocks: ['Stage 4: Structural Cordage', 'Clothing production', 'Better containers'],
                dependencies: ['Pottery Stage 3 (spindle whorl)', 'Construction Stage 2 (timber)']
            },
            {
                level: 4,
                title: 'Structural Cordage',
                subtitle: 'Engineering-Grade Rope',
                icon: '⚓',
                objective: 'Manufacture specialized cordage with specific strength properties for construction.',
                details: [
                    'Multi-ply rope construction with right-lay, left-lay for balance',
                    'Waterproof cordage with natural pitch/resin coatings',
                    'Weave structural panels for shelter walls',
                    'Create nets with consistent mesh sizes for fishing/hunting',
                    'Build rope-making frame for production-scale output',
                    'Make specialized cordage for different applications',
                    'Develop quality control for consistent strength'
                ],
                resources: [
                    { name: 'Prepared Fibers', value: 'Very large quantity' },
                    { name: 'Pitch/Resin', value: 'For waterproofing' },
                    { name: 'Net-making Gauges', value: 'For consistency' },
                    { name: 'Rope Frame', value: 'Production scale' }
                ],
                techniques: ['Multi-ply construction', 'Waterproofing', 'Structural weaving', 'Net making'],
                outputs: ['Construction-grade rope', 'Specialized nets', 'Waterproof containers', 'Shelter panels'],
                unlocks: ['Stage 5: Mechanical Components', 'Major construction', 'Sailcloth'],
                dependencies: ['Large-scale fiber processing', 'Pitch/resin sourcing']
            },
            {
                level: 5,
                title: 'Mechanical Components',
                subtitle: 'The Connective Tissue of Civilization',
                icon: '⚙️',
                objective: 'Create critical mechanical and electrical components from woven materials.',
                details: [
                    'Manufacture 16 bucket lashings for water wheel construction',
                    'Create drive belts from woven material for power transfer',
                    'Process plant fibers for electrical wire insulation',
                    'Make tension springs from twisted fiber for machines',
                    'Precision weave for mechanical component tolerances',
                    'Develop composite fiber-metal components',
                    'Waterproof all outdoor mechanical components'
                ],
                resources: [
                    { name: 'Premium Fibers', value: 'Highest quality' },
                    { name: 'Waterproofing Compounds', value: 'Natural pitch/resin' },
                    { name: 'Metal Integration', value: 'Composite parts' },
                    { name: 'Precision Tools', value: 'For consistent output' }
                ],
                techniques: ['Precision tension weaving', 'Composite fabrication', 'Insulation processing', 'Mechanical integration'],
                outputs: ['Water wheel lashings', 'Drive belts', 'Wire insulation', 'Machine components'],
                unlocks: ['Electromagnetic Age', 'Water wheel completion', 'Machine integration'],
                dependencies: ['All basketry stages', 'Metalworking integration', 'Electrical context']
            }
        ]
    },
    construction: {
        id: 'construction',
        name: 'Construction & Shelter',
        icon: '🏠',
        description: 'From basic windbreaks to integrating water-powered workshops and hydraulic architecture.',
        stages: [
            {
                level: 1,
                title: 'Natural Shelter',
                subtitle: 'Finding Protection',
                icon: '🏕️',
                objective: 'Utilize natural formations and simple materials for weather protection.',
                details: [
                    'Identify caves and rock overhangs for natural shelter',
                    'Locate fallen tree formations that provide cover',
                    'Build lean-to by angling branch against tree or rock',
                    'Create debris bedding for insulation from cold ground',
                    'Stack branches for windbreak walls on exposed sides',
                    'Position fire for heat reflection off shelter walls',
                    'Use large leaves and bark sheets for rain protection'
                ],
                resources: [
                    { name: 'Branches', value: 'Various sizes' },
                    { name: 'Leaves/Bark', value: 'Large quantity' },
                    { name: 'Suitable Site', value: 'Natural or modified' },
                    { name: 'Fire', value: 'For warmth/cooking' }
                ],
                techniques: ['Site selection', 'Lean-to construction', 'Debris bedding', 'Fire placement'],
                outputs: ['Basic weather protection', 'Insulated sleeping area', 'Fire shelter'],
                unlocks: ['Stage 2: Framed Structures', 'Overnight survival', 'Base camp'],
                dependencies: []
            },
            {
                level: 2,
                title: 'Tripod Structures',
                subtitle: 'Framed Shelter',
                icon: '⛺',
                objective: 'Build stable three-dimensional frameworks using joined and lashed poles.',
                details: [
                    'Harvest 3 hardwood poles (3m each) for tripod frame',
                    'Lash poles together at apex using square lashing pattern',
                    'Cover with thatch or bark sheets for weatherproofing',
                    'Build raised sleeping platform off cold ground',
                    'Construct tripod well-drilling rig (dual-purpose knowledge)',
                    'Distribute weight evenly through lashed joints',
                    'Create basic storage structure for supplies'
                ],
                resources: [
                    { name: 'Hardwood Poles', value: '3 × 3m' },
                    { name: 'Rope for Lashing', value: '25m (Basketry Stage 2)' },
                    { name: 'Thatching Material', value: 'Grass/reeds' },
                    { name: 'Lashing Cordage', value: 'Additional' }
                ],
                techniques: ['Tripod lashing', 'Thatching', 'Weight distribution', 'Raised platforms'],
                outputs: ['Stable framed shelter', 'Well-drilling rig', 'Raised platform', 'Storage structure'],
                unlocks: ['Stage 3: Wattle & Daub', 'Permanent camp', 'Well construction'],
                dependencies: ['Basketry Stage 2 (rope)', 'Knapping Stage 2 (stone axe)']
            },
            {
                level: 3,
                title: 'Wattle & Daub',
                subtitle: 'Weatherproof Permanent Dwelling',
                icon: '🏡',
                objective: 'Create insulated, weatherproof structures with woven walls and clay plaster.',
                details: [
                    'Build post-and-beam timber frame for structure',
                    'Weave branch panels (wattle) for wall infill',
                    'Mix daub: clay, straw, sand, and manure for plaster',
                    'Apply daub coating to both sides of wattle walls',
                    'Install thatched roof with ridge pole for rain runoff',
                    'Calculate roof pitch (minimum 30 degrees) for water shedding',
                    'Build clay hearth with smoke hole for ventilation',
                    'Compact packed earth floor for durability'
                ],
                resources: [
                    { name: 'Timber Posts/Beams', value: 'Structural grade' },
                    { name: 'Wattle Panels', value: 'Woven branches' },
                    { name: 'Clay for Daub', value: 'Large quantity' },
                    { name: 'Thatch Material', value: 'Roof coverage' }
                ],
                techniques: ['Mortise-and-tenon joints', 'Wattle weaving', 'Daub mixing', 'Roof pitch calculation'],
                outputs: ['Weatherproof dwelling', 'Indoor hearth', 'Storage room', 'Workshop space'],
                unlocks: ['Stage 4: Stone Foundation', 'Night work capability', 'Craft workshops'],
                dependencies: ['Knapping Stage 2-3', 'Basketry Stage 3', 'Pottery Stage 2', 'Water Stage 2']
            },
            {
                level: 4,
                title: 'Stone Foundations',
                subtitle: 'Permanent Compound',
                icon: '🏛️',
                objective: 'Build lasting stone foundations and multi-room specialized structures.',
                details: [
                    'Excavate foundation trench below frost line',
                    'Select and fit stone blocks for foundation walls',
                    'Mold and dry clay bricks for above-grade walls',
                    'Build multi-room compound: living, workshop, storage',
                    'House permanent kiln/furnace in fireproof structure',
                    'Create drainage channels around foundation',
                    'Install clay roof tiles (from Pottery Stage 4)'
                ],
                resources: [
                    { name: 'Stone Blocks', value: 'Foundation quantity' },
                    { name: 'Clay for Bricks', value: 'Very large' },
                    { name: 'Clay Roof Tiles', value: 'Full coverage' },
                    { name: 'Drainage Materials', value: 'Gravel/channels' }
                ],
                techniques: ['Stone fitting', 'Brick molding', 'Foundation trenching', 'Drainage grading'],
                outputs: ['Permanent compound', 'Specialized rooms', 'Kiln housing', 'Grain storage'],
                unlocks: ['Stage 5: Hydraulic Architecture', 'Multi-season reliability', 'Craft specialization'],
                dependencies: ['Knapping Stage 4', 'Pottery Stage 4', 'Water Stage 3-4']
            },
            {
                level: 5,
                title: 'Hydraulic Architecture',
                subtitle: 'Machine-Integrated Buildings',
                icon: '🏭',
                objective: 'Integrate buildings with water systems and machines for powered workshops.',
                details: [
                    'Build water wheel housing with precise axle bearings',
                    'Integrate sluice channels through/under building structure',
                    'Design water-powered workshop layout',
                    'Construct aqueduct support structures to building',
                    'Level foundations precisely using water level instruments',
                    'Install vibration dampening for rotating machinery',
                    'Calculate load-bearing for mechanical systems',
                    'Create maintenance access for all integrated systems'
                ],
                resources: [
                    { name: 'Precise Stonework', value: 'Foundation/housing' },
                    { name: 'Iron Bearing Components', value: 'For axles' },
                    { name: 'Water-tight Channels', value: 'Integrated' },
                    { name: 'Machine Components', value: 'For integration' }
                ],
                techniques: ['Hydraulic integration', 'Precision leveling', 'Load calculations', 'Vibration dampening'],
                outputs: ['Water-powered workshop', 'Integrated infrastructure', 'Mechanical foundation'],
                unlocks: ['Mechanical Age', 'Electromagnetic Age preparation', 'Automated production'],
                dependencies: ['Water Stage 5', 'Knapping Stage 5', 'Metal Stage 3+', 'Basketry Stage 5']
            }
        ]
    }
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
            { name: 'Charcoal', value: '20 kg' }
        ],
        steps: [
            { text: 'Construct a tapering chimney and insert clay tuyeres for air blast.', sketch: 'assets/sketch_mixing.svg' }
        ],
        videoUrl: 'https://www.youtube.com/embed/E2V_v1186r4'
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
            { name: 'Bucket Lashing', value: '16 units' }
        ],
        steps: [
            { text: 'Construct the wheel frame and align the axle with the stream sluice.', sketch: 'assets/sketch_binding.svg' }
        ],
        videoUrl: 'https://www.youtube.com/embed/7V8nZf_f90o'
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
            { name: 'Iron Lamination', value: '10 layers' }
        ],
        steps: [
            { text: 'Wind the coil uniformally and bridge to the work circuit.', sketch: 'assets/sketch_binding.svg' }
        ],
        videoUrl: 'https://www.youtube.com/embed/_k6hL-I5e_k'
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
    }
];

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

function renderRoadmapView() {
    const view = document.getElementById('blueprint-view');
    view.classList.add('active');
    document.getElementById('welcome-view').classList.remove('active');

    const crafts = Object.values(CRAFT_ROADMAPS);

    view.innerHTML = `
        <div class="roadmap-overview">
            <header class="roadmap-main-header">
                <div class="roadmap-category">Craft Progression Paths</div>
                <h2>🗺️ Technology Roadmaps</h2>
                <p>Each craft follows a 5-stage progression from basic survival to advanced civilization. Click a craft to explore its detailed roadmap.</p>
            </header>

            <div class="roadmap-grid">
                ${crafts.map(craft => `
                    <div class="roadmap-craft-card" onclick="renderRoadmapDetail('${craft.id}')">
                        <div class="roadmap-card-header">
                            <span class="roadmap-craft-icon">${craft.icon}</span>
                            <h3>${craft.name}</h3>
                        </div>
                        <p class="roadmap-craft-desc">${craft.description}</p>
                        <div class="roadmap-stages-preview">
                            ${craft.stages.map((stage, idx) => `
                                <div class="roadmap-stage-dot" title="${stage.title}">
                                    <span class="stage-number">${idx + 1}</span>
                                    <span class="stage-icon">${stage.icon}</span>
                                </div>
                                ${idx < craft.stages.length - 1 ? '<div class="roadmap-connector"></div>' : ''}
                            `).join('')}
                        </div>
                        <div class="roadmap-card-footer">
                            <span>Click to explore →</span>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="roadmap-dependencies-section">
                <h3>🔗 Cross-Craft Dependencies</h3>
                <p class="roadmap-dep-intro">Crafts don't exist in isolation - each stage unlocks capabilities in others. Here are the critical dependency chains:</p>
                
                <div class="dependency-chains">
                    <div class="dependency-chain">
                        <h4>💧 Well Drilling</h4>
                        <div class="dep-flow">
                            <span class="dep-item">🧺 Basketry S2<br><small>(rope)</small></span>
                            <span class="dep-arrow">→</span>
                            <span class="dep-item">🪨 Knapping S1-2<br><small>(tools)</small></span>
                            <span class="dep-arrow">→</span>
                            <span class="dep-item">💧 Water S2<br><small>(well drilling)</small></span>
                        </div>
                    </div>

                    <div class="dependency-chain">
                        <h4>🏺 Pottery Kiln</h4>
                        <div class="dep-flow">
                            <span class="dep-item">🏠 Construction S2<br><small>(structure)</small></span>
                            <span class="dep-arrow">→</span>
                            <span class="dep-item">🏺 Pottery S1<br><small>(clay)</small></span>
                            <span class="dep-arrow">→</span>
                            <span class="dep-item">🔥 Fire mastery<br><small>(temperature)</small></span>
                        </div>
                    </div>

                    <div class="dependency-chain">
                        <h4>🌱 Irrigation</h4>
                        <div class="dep-flow">
                            <span class="dep-item">🪨 Knapping S2<br><small>(stone hoe)</small></span>
                            <span class="dep-arrow">→</span>
                            <span class="dep-item">💧 Water S2<br><small>(well)</small></span>
                            <span class="dep-arrow">→</span>
                            <span class="dep-item">🌱 Water S3<br><small>(irrigation)</small></span>
                        </div>
                    </div>

                    <div class="dependency-chain">
                        <h4>🌋 Metal Smelting</h4>
                        <div class="dep-flow">
                            <span class="dep-item">🏺 Pottery S4<br><small>(crucibles)</small></span>
                            <span class="dep-arrow">→</span>
                            <span class="dep-item">🏠 Construction S3<br><small>(furnace)</small></span>
                            <span class="dep-arrow">→</span>
                            <span class="dep-item">🪨 Knapping S3<br><small>(tools)</small></span>
                        </div>
                    </div>

                    <div class="dependency-chain">
                        <h4>🎡 Water Wheel</h4>
                        <div class="dep-flow">
                            <span class="dep-item">💧 Water S4<br><small>(hydraulics)</small></span>
                            <span class="dep-arrow">→</span>
                            <span class="dep-item">⚒️ Metal S3<br><small>(iron axle)</small></span>
                            <span class="dep-arrow">→</span>
                            <span class="dep-item">🏠 Construction S4<br><small>(housing)</small></span>
                            <span class="dep-arrow">→</span>
                            <span class="dep-item">🧺 Basketry S4-5<br><small>(lashings)</small></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    updateActiveSidebar('Technology Roadmaps');
}

function renderRoadmapDetail(craftId) {
    const craft = CRAFT_ROADMAPS[craftId];
    if (!craft) return;

    const view = document.getElementById('blueprint-view');
    view.classList.add('active');
    document.getElementById('welcome-view').classList.remove('active');

    view.innerHTML = `
        <div class="roadmap-detail">
            <header class="roadmap-detail-header">
                <button class="back-to-roadmaps-btn" onclick="renderRoadmapView()">← Back to Roadmaps</button>
                <div class="roadmap-detail-title">
                    <span class="roadmap-detail-icon">${craft.icon}</span>
                    <div>
                        <h2>${craft.name} Roadmap</h2>
                        <p class="roadmap-detail-desc">${craft.description}</p>
                    </div>
                </div>
            </header>

            <div class="roadmap-timeline">
                ${craft.stages.map((stage, idx) => `
                    <div class="roadmap-stage-card" id="stage-${stage.level}">
                        <div class="stage-header-row">
                            <div class="stage-level-badge">
                                <span class="level-number">${stage.level}</span>
                                <span class="level-label">${getStageName(stage.level)}</span>
                            </div>
                            <div class="stage-title-group">
                                <h3>${stage.icon} ${stage.title}</h3>
                                <p class="stage-subtitle">${stage.subtitle}</p>
                            </div>
                        </div>

                        <div class="stage-objective">
                            <h4>🎯 Objective</h4>
                            <p>${stage.objective}</p>
                        </div>

                        <div class="stage-details">
                            <h4>📋 Key Steps</h4>
                            <ul>
                                ${stage.details.map(detail => `<li>${detail}</li>`).join('')}
                            </ul>
                        </div>

                        <div class="stage-resources">
                            <h4>📦 Required Resources</h4>
                            <div class="resource-grid">
                                ${stage.resources.map(res => `
                                    <div class="resource-item">
                                        <span class="res-name">${res.name}</span>
                                        <span class="res-value">${res.value}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <div class="stage-techniques">
                            <h4>🔧 Techniques to Master</h4>
                            <div class="technique-tags">
                                ${stage.techniques.map(tech => `<span class="technique-tag">${tech}</span>`).join('')}
                            </div>
                        </div>

                        <div class="stage-outputs">
                            <h4>✨ Outputs</h4>
                            <ul>
                                ${stage.outputs.map(output => `<li>${output}</li>`).join('')}
                            </ul>
                        </div>

                        <div class="stage-unlocks">
                            <h4>🔓 Unlocks</h4>
                            <div class="unlock-tags">
                                ${stage.unlocks.map(unlock => `<span class="unlock-tag">${unlock}</span>`).join('')}
                            </div>
                        </div>

                        ${stage.dependencies.length > 0 ? `
                            <div class="stage-dependencies">
                                <h4>⚠️ Dependencies</h4>
                                <div class="dependency-tags">
                                    ${stage.dependencies.map(dep => `<span class="dependency-tag">${dep}</span>`).join('')}
                                </div>
                            </div>
                        ` : `
                            <div class="stage-dependencies starter">
                                <h4>✅ Starter Craft</h4>
                                <p>No dependencies required - this is where you begin your journey!</p>
                            </div>
                        `}
                    </div>
                    ${idx < craft.stages.length - 1 ? '<div class="roadmap-stage-arrow">↓</div>' : ''}
                `).join('')}
            </div>
        </div>
    `;

    updateActiveSidebar(`${craft.name} Roadmap`);
}

function getStageName(level) {
    const stageNames = {
        1: 'Beginner',
        2: 'Apprentice',
        3: 'Journeyman',
        4: 'Master',
        5: 'Expert'
    };
    return stageNames[level] || 'Unknown';
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
