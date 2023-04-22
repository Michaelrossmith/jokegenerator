const nouns = ["cat", "pet bird", "chair", "uncle", "forearm", "money", "dining table", "chess board"];
const verbs = ["eats", "hears", "drinks", "vomits", "tailgates", "annoys me", "switches on"];
const adjectives = ["loudly", "brightly", "vividly", "powerfully", "fast", "hungrily"];

const pickRandomItem = (array) => {
    return array[Math.floor((Math.random() * array.length))];
};

console.log(`My ${pickRandomItem(nouns)} ${pickRandomItem(verbs)} ${pickRandomItem(adjectives)}`);
