// `icon` is the file name in public/icons (without .svg); `level` flags skills that are still early.
export const toolkit = [
  {
    title: 'Game Development',
    items: [
      { name: 'Unity', icon: 'unity', note: 'C# gameplay & UI' },
      { name: 'Unreal Engine', icon: 'unrealengine', note: 'Blueprints' },
      { name: 'Roblox Studio', icon: 'robloxstudio', note: 'Roblox games' },
      { name: 'Blender', icon: 'blender', note: '3D & animation' },
    ],
  },
  {
    title: 'Languages',
    items: [
      { name: 'C#', icon: 'csharp', note: 'Unity scripting' },
      { name: 'Python', icon: 'python', note: 'Scripting' },
      { name: 'JavaScript', icon: 'javascript', note: 'Web & React' },
      { name: 'C++', icon: 'cplusplus', note: 'Still learning', level: 'Basics' },
    ],
  },
  {
    title: 'Tools & Editors',
    items: [
      { name: 'Git', icon: 'git', note: 'Version control' },
      { name: 'WebStorm', icon: 'webstorm', note: 'JavaScript IDE' },
      { name: 'Visual Studio Code', icon: 'vscode', note: 'Code editor' },
      { name: 'Visual Studio', icon: 'visualstudio', note: 'IDE' },
    ],
  },
]
