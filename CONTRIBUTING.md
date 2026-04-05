# 🤝 Contributing to Brotherhood

Thank you for wanting to contribute! This guide will help you join the community and share your knowledge.

## 🎯 Ways to Contribute

### 1. Add New Crafts
Create new craft roadmaps following the existing structure. Each craft has:
- **ID** (unique identifier)
- **Name** (display name)
- **Icon** (emoji)
- **Description** (overview)
- **Stages** (progression through civilization levels 1-5)

### 2. Expand Existing Crafts
Add new stages, techniques, resources, or details to existing crafts.

### 3. Improve Documentation
- Fix typos or clarity issues
- Add links to external resources
- Improve descriptions
- Add diagrams or ASCII art

### 4. Add Media
- Link to relevant YouTube tutorials
- Add images to the `/assets` directory
- Create diagrams for complex techniques

### 5. Report Issues
Found an error? Unclear instructions? Open an issue describing:
- What you found
- Why it's a problem
- Suggested fix (if you have one)

## 📝 How to Add a New Craft

### Step 1: Fork/Clone the Repository

```bash
git clone https://github.com/ibrahimelmaoukour-web/Brotherhood.git
cd Brotherhood
```

### Step 2: Create Your Craft

Open `bortherhood/script.js` and add your craft to the `CRAFT_ROADMAPS` object:

```javascript
CRAFT_ROADMAPS = {
    // ... existing crafts ...
    
    your_craft_id: {
        id: 'your_craft_id',
        name: 'Your Craft Name',
        icon: '🔨', // Pick an emoji
        description: 'Brief description of what this craft covers.',
        stages: [
            {
                level: 1,
                title: 'Stage 1: First Steps',
                subtitle: 'A short tagline',
                icon: '👣',
                objective: 'What should people accomplish at this stage?',
                details: [
                    'Step-by-step instruction 1',
                    'Step-by-step instruction 2',
                    'Step-by-step instruction 3'
                ],
                resources: [
                    { name: 'Resource Name', value: 'Quantity/Description' },
                    { name: 'Tool Name', value: '2 units' }
                ],
                techniques: ['Technique 1', 'Technique 2'],
                outputs: ['What learners produce/achieve'],
                unlocks: ['What becomes possible next'],
                dependencies: [] // Leave empty if no dependencies
            },
            // Add more stages for levels 2-5 if applicable
        ]
    }
}
```

### Step 3: Test Your Craft

1. Open `bortherhood/index.html` in your browser
2. Authenticate with password: `FORGE`
3. Navigate to your craft and verify:
   - All details display correctly
   - Links work properly
   - No formatting issues
   - Icons render correctly

### Step 4: Create a Pull Request

```bash
git add .
git commit -m "Add: <Craft Name> craft roadmap"
git push origin your-branch-name
```

Then open a Pull Request with:
- **Title**: `Add: [Craft Name] craft roadmap`
- **Description**: 
  - What craft you added
  - What stages it covers
  - Why this craft is important
  - Any sources/references

## 🎨 Craft Template (Full Example)

```javascript
blacksmithing: {
    id: 'blacksmithing',
    name: 'Blacksmithing',
    icon: '🔨',
    description: 'From heating stone with fire to forging complex metal tools and weapons. The journey of the blacksmith.',
    stages: [
        {
            level: 1,
            title: 'Heat Control Basics',
            subtitle: 'Working with the Flame',
            icon: '🔥',
            objective: 'Learn to control fire temperature for basic heating and hardening tasks.',
            details: [
                'Build a simple fire pit with stone walls to retain heat',
                'Understand wood types: hardwoods (oak, maple) burn longer; softwoods burn quick',
                'Layer kindling (fine twigs), fuel wood (branches), and base wood in pyramid',
                'Use clay/mud to create fire channels for directing heat',
                'Learn to judge temperature by smoke color: white (cold), blue (hot), yellow (very hot)',
                'Harden leather and thin metal by placing in embers'
            ],
            resources: [
                { name: 'Firewood', value: '50 kg' },
                { name: 'Stones for pit', value: '20 pieces' },
                { name: 'Clay for channels', value: '10 kg' }
            ],
            techniques: ['Fire building', 'Temperature judgment by observation', 'Heat retention'],
            outputs: ['Basic hardened tools', 'Understanding of fire control', 'Heat workspace established'],
            unlocks: ['Level 2: Smelting', 'Tool hardening'],
            dependencies: []
        },
        {
            level: 2,
            title: 'Smelting Iron Ore',
            subtitle: 'Extracting Metal from Stone',
            icon: '⚒️',
            objective: 'Reach temperatures high enough to smelt iron ore and extract raw metal.',
            details: [
                'Build a clay furnace: stack clay in a 1m tall cone shape',
                'Create air vents at the base for bellows connection',
                'Temperature needs to reach 1200°C minimum (visible as bright red/orange)',
                'Use charcoal (not wood) for sustained high heat',
                'Layer ore, charcoal, and flux (limestone) in furnace',
                'Use leather bellows to pump air and raise temperature',
                'Molten iron sinks to furnace bottom, slag separates on top',
                'Tap off slag and collect raw molten iron in clay molds'
            ],
            resources: [
                { name: 'Clay for furnace', value: '50 kg' },
                { name: 'Iron ore', value: '20 kg' },
                { name: 'Charcoal', value: '15 kg' },
                { name: 'Leather bellows', value: '1 unit' }
            ],
            techniques: ['Furnace building', 'Ore selection', 'Bellows operation', 'Temperature control'],
            outputs: ['Raw iron ingots', 'Furnace workspace', 'Slag byproducts'],
            unlocks: ['Level 3: Forging'],
            dependencies: ['Level 1: Heat Control', 'Pottery (for furnace)', 'Level 2: Leather working (bellows)']
        }
        // Continue through levels 3-5
    ]
}
```

## ✅ Submission Checklist

Before submitting your contribution:

- [ ] All fields are filled correctly (id, name, icon, description)
- [ ] All stages have complete details
- [ ] No typos or grammar errors
- [ ] Icons are actual emoji, not descriptions
- [ ] Resource values are specific (not vague)
- [ ] Dependencies are accurate
- [ ] Tested in the browser
- [ ] Follows the existing format and style

## 🎓 Writing Tips

1. **Be Specific**: Use exact measurements, quantities, temperatures
   - ❌ "Some water"
   - ✅ "2 liters of water"

2. **Be Sequential**: List steps in the order they happen
   - ❌ "Mix and heat the rocks"
   - ✅ "Heat the rocks to 300°C, then mix in clay"

3. **Be Educational**: Assume the reader is a beginner
   - ❌ "Use standard smelting procedures"
   - ✅ "Use charcoal (not wood) for sustained heat, as it burns at 1200°C"

4. **Be Realistic**: Ground crafts in historical/scientific fact
   - Research before you write
   - Add dependencies to show how crafts connect
   - Consider what tools/knowledge are needed first

## 🐛 Reporting Issues

Found a problem? Create an issue with:

1. **Clear title**: "Bug: Woodworking stage 3 description has typo"
2. **Description**: What's wrong?
3. **Steps to reproduce**: How did you find it?
4. **Suggested fix**: How should it be fixed?

## 📧 Getting Help

- Check existing crafts for formatting examples
- Look at approved PRs to see what works
- Ask questions in issues
- Reach out to maintainers

## 🎉 Recognition

All contributors are:
- Listed in [CONTRIBUTORS.md](CONTRIBUTORS.md)
- Credited in their craft entries
- Celebrated in community updates

## 📋 Code of Conduct

This project follows these principles:

- **Be Respectful**: Value different perspectives
- **Be Honest**: Acknowledge errors and learn
- **Be Inclusive**: Welcome all skill levels
- **Be Collaborative**: Help fellow contributors

Violations will result in warnings or removal from the project.

## 🚀 Next Steps

1. Fork this repository
2. Create your craft or improvement
3. Test it thoroughly
4. Submit a pull request
5. Engage with feedback
6. Celebrate your contribution! 🎉

**Thank you for building Brotherhood with us!** 🤝

---

_Questions? Open an issue or reach out to the maintainers._
