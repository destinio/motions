// A Tale of Two Universes

// Star Wars Section
const galaxy = 'far, far away'
const jedi = ['Luke Skywalker', 'Yoda', 'Obi-Wan Kenobi', 'Ahsoka Tano', 'Rey']
const sith = ['Darth Vader', 'Emperor Palpatine', 'Kylo Ren', 'Darth Maul']

function useTheForce() {
  if (jedi.includes(user)) {
    return `${user} uses the Force for good.`
  } else if (sith.includes(user)) {
    return `${user} uses the Force for evil.`
  } else {
    return `${user} is not Force-sensitive.`
  }
}

function lightsaberColor(user) {
  if (jedi.includes(user)) {
    return `${user} wields a blue or green lightsaber.`
  } else if (sith.includes(user)) {
    return `${user} wields a red lightsaber.`
  } else {
    return `${user} does not wield a lightsaber.`
  }
}

// Example usage
console.log(useTheForce('Luke Skywalker')) // Luke Skywalker uses the Force for good.
console.log(useTheForce('Darth Vader')) // Darth Vader uses the Force for evil.
console.log(lightsaberColor('Ahsoka Tano')) // Ahsoka Tano wields a blue or green lightsaber.
console.log(lightsaberColor('Kylo Ren')) // Kylo Ren wields a red lightsaber.

// Star Wars Planets
const planets = ['Tatooine', 'Hoth', 'Endor', 'Naboo', 'Coruscant']

function describePlanet(planet) {
  switch (planet) {
    case 'Tatooine':
      return 'A desert planet with twin suns.'
    case 'Hoth':
      return "An icy planet, home to the Rebel Alliance's Echo Base."
    case 'Endor':
      return 'A forest moon inhabited by Ewoks.'
    case 'Naboo':
      return 'A lush planet, home to Queen Amidala and the Gungans.'
    case 'Coruscant':
      return 'The bustling city-planet and capital of the galaxy.'
    default:
      return 'Unknown planet.'
  }
}

// Example usage
console.log(describePlanet('Tatooine')) // A desert planet with twin suns.
console.log(describePlanet('Coruscant')) // The bustling city-planet and capital of the galaxy.

// Lord of the Rings Section
class MiddleEarth {
  constructor() {
    this.fellowship = [
      'Frodo',
      'Sam',
      'Aragorn',
      'Legolas',
      'Gimli',
      'Gandalf',
      'Boromir',
      'Merry',
      'Pippin',
    ]
    this.villains = ['Sauron', 'Saruman', 'Gollum']
  }

  journeyToMountDoom() {
    return `${this.fellowship.join(
      ', ',
    )} embark on a perilous journey to destroy the One Ring.`
  }

  faceVillains() {
    return `The Fellowship must confront ${this.villains.join(
      ', ',
    )} along the way.`
  }
}

// Example usage
const middleEarth = new MiddleEarth()
console.log(middleEarth.journeyToMountDoom())
console.log(middleEarth.faceVillains())

// Random Comments
// May the Force be with you.
// The Force will be with you, always.
