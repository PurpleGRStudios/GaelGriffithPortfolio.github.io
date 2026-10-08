const img = (path) => `/img/${path}`

const PLACEHOLDER_BODY = [
  { type: 'heading', text: 'Details coming soon' },
  { type: 'text', text: 'The write-up for this project is still being worked on.' },
]

export const projects = [
  {
    id: 'tower-defense',
    title: 'Tower Defense',
    thumbnail: img('Space/Carto/TowerDefense/Tower Defense.png'),
    background: img('Space/Carto/TowerDefense/Tower Defense.png'),
    summary:
      'My Unannounced Game called Tower Defense is a 3D top down experience for local play, inspired by other tower defense games like bloons. You can only play this game solo and it also has endless waves of different enemy types',
    stats: ['Project Status: In development', 'Project Type: Solo Project', 'Software Used: Unity', 'Languages Used: C#'],
    about: 'Tower Defense is a 3D top down tower defense game with endless waves of different enemy types.',
    body: PLACEHOLDER_BODY,
  },
  {
    id: 'space',
    title: 'Expanding Space',
    thumbnail: img('Space/Thumbnail.png'),
    background: img('Space/Thumbnail.png'),
    summary:
      'Expanding Space was a collaborative project to develop an engaging horror game that would inspire space travel and astronomy interest amongst an older audience. It marked the first partnership between Game Developers and Game Artists, with each group comprising two developers and four artists.',
    stats: [
      'Project Status: Finished',
      'Project Type: Group Project',
      'Project Duration: 8 weeks',
      'Software Used: Unity',
      'Languages Used: C#',
      'Primary Role(s): UI designer/Programmer, Git master',
      'Team: 3 Devs, 4 Artists',
    ],
    about:
      '"Expanding Space" was a collaborative project to develop an engaging game that would inspire space travel and astronomy interest amongst a younger audience. It marked the first partnership between Game Developers and Game Artists, with each group comprising two developers and four artists. But our group had an extra dev who joined the project at a later date. This was also the second time we worked with sprints if i recall correctly.',
    link: { label: 'Github', href: 'https://github.com/10KJVN/Expanding-Space-2/tree/Jahvairo' },
    lists: [
      {
        title: 'My Features',
        items: ['Directional Weapon Pickup System', 'Regenarating Healthbar', 'Particle Effects', 'Healthbar UI'],
      },
      { title: 'Software Used', items: ['Navmesh', 'TextMesh Pro', 'Trello'] },
    ],
    body: [
      { type: 'heading', text: 'Intro' },
      {
        type: 'text',
        text: 'To start this project off, we as a team were brainstorming about the genre of the game, the gameplay loop, and a goal and such. We decided to do go for a 3D horror game with parkouring and FPS elements. So the artists went ahead to create their assets and sketches, while i started working on a weapon pickup script.',
      },
      {
        type: 'text',
        lines: [
          'Sprint 0: Initial research phase.',
          'Sprint 1 and 2: Concentrated on creating a playable game.',
          'Sprint 3: Finish & Present the product on a project market.',
        ],
      },
      {
        type: 'figure',
        title: 'Weapon Pickup Script',
        src: img('Space/Script.png'),
        caption:
          'In the snippet above I created lines of code that would check if the weapon was equipped or not when pressing "n". If this wasn\'t true it would turn off features that you would normally be able to do with the weapon equipped. Like shooting the space rifle.',
      },
      { type: 'heading', text: 'Development' },
      {
        type: 'text',
        text: 'After making an Weapon Pickup Script I thought about what would be needed to make the gun useful. So I started making a healthbar system for the game for both the enemy and player.',
      },
      {
        type: 'figure',
        title: 'Healthbar Script',
        src: img('Space/Health.png'),
        caption:
          'Here you can see the healthbar script I created for the player. The first line in the "Update Start" shows when the healthamount is eqaul to or less then zero it reloads the level. It also shows the damage you take which I put in at 10 for testing purposes.',
      },
      {
        type: 'figure',
        title: 'My Test Scene:',
        src: img('BOSpace/TestScene.png'),
        caption:
          'Here i created a scene to propperly test out simple things such as ground checks, Gravity, Slopes, Wall jumps, parkouring options and more.',
      },
      {
        type: 'figure',
        title: 'Enemy AI:',
        src: img('BOSpace/EnemyAI.gif'),
        caption:
          'Here i created a scene to propperly test out simple things such as ground checks, Gravity, Slopes, Wall jumps, parkouring options and more.',
      },
      {
        type: 'text',
        text: "The navmesh was tough to figure out, and in the end i didn't completely get it working with the enemies not moving from their position. Atleast i managed to figure out how the following Attack Function",
      },
      {
        type: 'figure',
        title: 'Snippet of the EnemyAI:',
        src: img('BOSpace/AttackSnippet.png'),
        caption:
          'The Enemy checks every frame wether the player is in Sight- or Attack range. So as soon the player gets within sight range, the enemy starts looking at you. And when you enter the Attack Range the enemy shoots a bullet at you every 3 seconds.',
      },
      { type: 'heading', text: 'Conclusion', level: 3 },
      {
        type: 'text',
        text: "By the end of this project, i've improved my developing skills alot during the development process of this game. I learned how to work together with artists more through communicating with them about Anchor Points in their models for example. And i had to learn each of them how Github worked and i myself learned how branches worked mid-process. Because of our little knowledge there were some bugs and errors in the Repositories so i had to make 2 new ones in total. also making use of Git LFS for the first time, since the map file was above 100Mb.",
      },
      {
        type: 'figure',
        title: 'Gameplay:',
        src: img('BOSpace/Gameplay.gif'),
        caption:
          "Here the player has just picked up a gun. The player loses HP by the enemy's attacks and regens. In the end the player dies eitherway and respawns.",
      },
    ],
  },
  {
    id: 'carto',
    title: 'Vertical Slice',
    thumbnail: img('Space/Carto/CARTO.jpg'),
    background: img('Space/Carto/CARTO.jpg'),
    summary:
      'Vertical Slice was a project in which we recreated 10 seconds from a game on a 1:1 scale. It marked the second collaboration between Artists and Developers. It took us 8 weeks to recreate the gameplay of Carto',
    stats: ['Project Status: Finished', 'Project Type: Group Project', 'Project Duration: 8 weeks', 'Software Used: Unity', 'Languages Used: C#'],
    about:
      'Vertical Slice was a project in which we recreated 10 seconds from Carto on a 1:1 scale. It marked the second collaboration between Artists and Developers.',
    body: PLACEHOLDER_BODY,
  },
  {
    id: 'top-down-shooter',
    title: 'Top Down Shooter',
    thumbnail: img('TopDownShooter/TopDownViewMouse-ezgif.com-video-to-gif-converter.gif'),
    background: img('TopDownShooter/TopDownViewMouse-ezgif.com-video-to-gif-converter.gif'),
    stats: ['Project Status: Finished', 'Project Type: Solo Project'],
    about: 'A top down shooter where the character aims with the mouse.',
    body: PLACEHOLDER_BODY,
  },
  {
    id: 'shaders',
    title: 'Shaders',
    thumbnail: img('Space/Carto/TowerDefense/Tower Defense.png'),
    background: img('Space/Carto/TowerDefense/Tower Defense.png'),
    stats: ['Software Used: Unity (URP)'],
    about: 'Shader experiments made in Unity with the Universal Render Pipeline.',
    body: PLACEHOLDER_BODY,
  },
  {
    id: 'coin-collector',
    title: 'Coin Collector',
    thumbnail: img('CoinCollectorGame/CoinCollectorBackground.png'),
    background: img('CoinCollectorGame/CoinCollectorBackground.png'),
    stats: [
      'Project Status: Finished',
      'Project Type: Solo Project',
      'Project Duration: 1 week',
      'Software Used: Unreal Engine',
      'Languages Used: Blueprints (c++)',
      'Primary Role(s): UI designer/Programmer, Git master',
      'Team: 1 dev',
    ],
    about:
      '"Coin Collector" was a solo project to develop an engaging game that would inspire space travel and astronomy interest amongst a younger audience. It marked the first partnership between Game Developers and Game Artists, with each group comprising two developers and four artists. But our group had an extra dev who joined the project at a later date. This was also the second time we worked with sprints if i recall correctly.',
    lists: [
      { title: 'My Features', items: ['Interactable Bridge', 'Collectable Coins', 'Win Condition', 'Coin Counter'] },
      { title: 'Software Used', items: ['Blender', 'mixamo', 'Trello'] },
    ],
    body: [
      { type: 'heading', text: 'Intro' },
      {
        type: 'text',
        text: "To start this project off, I wanted to create a simple game too learn more about Unreal Engine. So I decided with a Coin Collector game. I decided just collecting coins would be too easy. so I created a little win/lose condition to the game. If the timer runs out and you haven't colllected all the coins you lose the game.",
      },
      {
        type: 'text',
        lines: [
          'Sprint 0: Initial research phase.',
          'Sprint 1 and 2: Concentrated on creating a playable game.',
          'Sprint 3: Finish & Present the product on a project market.',
        ],
      },
      {
        type: 'figure',
        title: 'Interactable Bridge',
        src: img('CoinCollectorGame/BridgeCheck-ezgif.com-video-to-gif-converter.gif'),
        caption:
          "In the snippet above I created a blueprint which checks if all the coins are collected before you can interact with the bridge. If this is true the bridge will open up and play a little sound, if this isn't true the bridge will not open.",
      },
      { type: 'heading', text: 'Development' },
      {
        type: 'text',
        text: 'After creating the coin object and blueprint to pickup the coins I realize I needed a way to count all the coins. So I started working on a total coins blueprint.',
      },
      {
        type: 'figure',
        title: 'Collectable Coins',
        src: img('CoinCollectorGame/CoinsObject.gif'),
        caption:
          'Here you can see the coins I made that can be collected. I gave it a fixed rotation which also highlights that the coins can be collected.',
      },
      {
        type: 'figure',
        title: 'Coin Counter',
        src: img('CoinCollectorGame/CoinCounterBlueprint.png'),
        caption:
          'This is the blueprint I created so I can check the amount of coins collected and the coins that needed to be collected. I did this using the total coins and coins left.',
      },
      {
        type: 'figure',
        title: 'My Test Scene:',
        src: img('CoinCollectorGame/BoxTraceCheck-ezgif.com-video-to-gif-converter.gif'),
        caption:
          'Here i created a scene to propperly test out simple things such as Bridge interactions, coin collecting and hitbox testing around the third person character. In the clip shown here I only focused on testing the BoxTrace around my ThirdPersonCharacter which as you can see turns green when collision is true.',
      },
      {
        type: 'figure',
        title: 'Coin collection in action',
        src: img('CoinCollectorGame/CoinCollection.gif'),
        caption: 'Collecting the coins in the level.',
      },
      { type: 'heading', text: 'Conclusion', level: 3 },
      {
        type: 'text',
        text: "By the end of this little project, i've improved my developing skills alot during the development process of this game. I learned how to work with blueprints more efficiently. This was a very fun experience and also very informational for me. I also realized that I enjoy working with Unreal Engine more then working with Unity this however does not mean I don't plan to continue with Unity. Overal this was a very cool project that got me into Unreal Engine.",
      },
      {
        type: 'figure',
        title: 'Gameplay',
        src: img('CoinCollectorGame/GameplayWithoutTheLoop.gif'),
        caption:
          'This shows how the game ends when you have collected all coins. The bridge opens up after you have collected all the coins it currently doesn\'t have any noise that confirms you collected every coin. but as soon as you press "E" on the bridge it will lower then you can walk to the chest and open it too finish the game.',
      },
    ],
  },
  {
    id: 'elevator',
    title: 'Elevator',
    thumbnail: img('Elevator/Going up.jpg'),
    background: img('Elevator/Going up.jpg'),
    stats: [
      'Project Status: Finished',
      'Project Type: Solo Project',
      'Software Used: Unreal Engine',
      'Languages Used: Blueprints (c++)',
      'Team: 1 dev',
    ],
    about: 'An elevator system built in Unreal Engine 5 with Blueprints.',
    body: [
      { type: 'heading', text: 'Intro' },
      {
        type: 'figure',
        title: 'Elevator Buttons',
        src: img('Elevator/Array Floors BLueprint.png'),
        caption:
          'In the snippet above I created a blueprint which checks if all the floors are ingame before you can interact with the Elevator. If this is true each number you press the elevator will go too. It will also skip numbers if those aren\'t in the way of a higher number. Like pressing floor 4 when you are on floor 1 it will instantly go there. unless someone else has pressed any other number between 1 and 4 it will go to the highest floor pressed.',
      },
      { type: 'heading', text: 'Development' },
      {
        type: 'text',
        text: "Biggest issue I was noticing was that each time I pressed a number and error would pop up. Almost like the game couldn't find the floor numbers. So I created an array were it could store all the numbers that are currently ingame. Problem is it doesn't automatically check the floor numbers. It only checks the manaully assigned floor numbers resulting in errors when you press an unassigned floor number.",
      },
      {
        type: 'figure',
        title: 'Elevator Floor Check',
        src: img('Elevator/Going up.jpg'),
        caption: 'The elevator going up.',
      },
      {
        type: 'figure',
        title: 'Movement Elevator Blueprint',
        src: img('Elevator/Blueprint elevator movement.png'),
        caption: 'The blueprint that moves the elevator between floors.',
      },
    ],
  },
  {
    id: 'blender-r6-jump',
    title: 'Roblox R6 Jump',
    thumbnail: img('Blender/JumpingR6.gif'),
    background: img('Blender/JumpingR6.gif'),
    stats: ['Software Used: Blender'],
    about: 'A jump animation for a Roblox R6 rig made in Blender.',
    body: PLACEHOLDER_BODY,
  },
  {
    id: 'kickboxing',
    title: 'Kickboxing animation',
    thumbnail: img('RadialThumb.png'),
    background: img('RadialThumb.png'),
    stats: ['Software Used: Blender'],
    about: 'A kickboxing animation made in Blender.',
    body: PLACEHOLDER_BODY,
  },
]

export const getProject = (id) => projects.find((p) => p.id === id)

// Stats are stored as "Label: Value" strings
export const parseStat = (stat) => {
  const i = stat.indexOf(':')
  return i === -1 ? { label: stat, value: '' } : { label: stat.slice(0, i).trim(), value: stat.slice(i + 1).trim() }
}

export const getStat = (project, label) =>
  project.stats.map(parseStat).find((s) => s.label === label)?.value ?? '—'

export const featured = ['tower-defense', 'space', 'carto'].map(getProject)

export const tabs = [
  { label: 'Unity', description: 'Projects made in Unity', ids: ['space', 'carto', 'top-down-shooter', 'shaders'] },
  {
    label: 'Unreal Engine',
    description: 'Projects made in UE5',
    heading: 'Unreal Engine 5',
    ids: ['coin-collector', 'top-down-shooter', 'elevator'],
  },
  { label: 'Blender', description: 'Things I made in Blender', ids: ['blender-r6-jump', 'kickboxing'] },
]
