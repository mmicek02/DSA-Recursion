import {HashMap} from 'hashMap.js';

function main() {
    const lotr = new HashMap;

    lotr.set("Hobbit", "Bilbo");
    lotr.set("Hobbit", "Hobbit");
    lotr.set("Wizard", "Gandalf");
    lotr.set("Human", "Aragorn");
    lotr.set("Elf", "Legolas");
    lotr.set("Maiar", "The Necromancer");
    lotr.set("Maiar", "Sauron");
    lotr.set("RingBearer", "Gollum");
    lotr.set("LadyOfLight", "Galadriel");
    lotr.set("HalfElven", "Arwen");
    lotr.set("Ent", "Treebeard");
}
console.log(main())