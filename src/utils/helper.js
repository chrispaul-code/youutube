var nameList = [
  'Time', 'Past', 'Future', 'Dev',
  'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
  'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
  'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
  'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
  'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
  'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
  'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
  'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
  'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
  'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
  'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
  'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
  'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
  'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
  'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
  'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
  'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
  'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
  'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
  'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
];
export function generateRandomeName() {
return nameList[Math.floor(Math.random() * nameList.length)];
     
};




export const generateRandomMessage = () => {
  const messages = [
  "Just finished my workout 💪",
  "This movie was 🔥🔥🔥",
  "Anyone else hungry? 🍕😋",
  "Coding all night again 😩💻",
  "Can’t wait for the weekend 😍",
  "Coffee hits different today ☕❤️",
  "Miss those school days 🎒📚",
  "That meme cracked me up 😂",
  "Woke up feeling grateful 🙏",
  "Who else loves rainy days? 🌧️☔",
  "That song is stuck in my head 🎵",
  "New phone feels so smooth 📱😎",
  "LOL I needed that laugh 😂👏",
  "Time for a break 🍫☕",
  "Is this thing live? 🎥👀",
  "Back to grinding mode 🧠⚙️",
  "What a peaceful night 🌙✨",
  "Late-night snacks hit diff 🌮",
  "Binge-watching again 📺😅",
  "Nature walks are the best 🌳🚶"
  ];
  return messages[Math.floor(Math.random() * messages.length)];
};



export function generateRandomAvatar(gender = null) {
  const id = Math.floor(Math.random() * 100); // IDs from 0 to 99

  if (gender === "male") {
    return `https://randomuser.me/api/portraits/men/${id}.jpg`;
  } else if (gender === "female") {
    return `https://randomuser.me/api/portraits/women/${id}.jpg`;
  } else {
    const genders = ["men", "women"];
    const randomGender = genders[Math.floor(Math.random() * genders.length)];
    return `https://randomuser.me/api/portraits/${randomGender}/${id}.jpg`;
  }
};