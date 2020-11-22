/* 
ITALO CALVINO - THE INVISIBLE CITIES

For details: https://en.wikipedia.org/wiki/Invisible_Cities
Images taken from: http://www.cittainvisibili.com/en/index-en.html
For path-schema: https://drive.google.com/file/d/1u7ewVkGh0Td9WFlvgfS1FCLNWTLtLEQf/view?usp=sharing
*/

var intro, memory, desire, signs, thin, eyes, trading, names, dead, sky, continuous, hidden, end, font;
var state = "intro";
var string = "";
var listStates = ["intro", "memory", "desire", "signs", "thin", "eyes", "trading", "names", "sky", "dead", "continuous", "hidden", "end"];

function preload() {
  intro = loadImage('assets/img/intro.jpg');
  memory = loadImage('assets/img/diomira.jpg');
  desire = loadImage('assets/img/fedora.jpg');
  signs = loadImage('assets/img/tamara.jpg');
  thin = loadImage('assets/img/ottavia.jpg');
  eyes = loadImage('assets/img/valdrada.jpg');
  trading = loadImage('assets/img/eutropia.jpg');
  names = loadImage('assets/img/irene.jpg');
  dead = loadImage('assets/img/eusapia.jpg');
  sky = loadImage('assets/img/eudossia.jpg');
  continuous = loadImage('assets/img/procopia.jpg');
  hidden = loadImage('assets/img/berenice.jpg');
  end = loadImage('assets/img/end.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  intro.resize(windowWidth / 2, windowHeight);
  memory.resize(windowWidth / 2, windowHeight);
  desire.resize(windowWidth / 2, windowHeight);
  signs.resize(windowWidth / 2, windowHeight);
  thin.resize(windowWidth / 2, windowHeight);
  eyes.resize(windowWidth / 2, windowHeight);
  trading.resize(windowWidth / 2, windowHeight);
  names.resize(windowWidth / 2, windowHeight);
  dead.resize(windowWidth / 2, windowHeight);
  sky.resize(windowWidth / 2, windowHeight);
  continuous.resize(windowWidth / 2, windowHeight);
  hidden.resize(windowWidth / 2, windowHeight);
  end.resize(windowWidth / 2, windowHeight);
  textFont('Arvo');
}

function draw() {
  background(220);


  if (state == "intro") {
    image(intro, 0, 0);
    stateWatcher();
    textSize(24);
    fill(0);
    textStyle(BOLDITALIC);
    text('The invisible cities', (windowWidth / 2) + 30, 50, (windowWidth / 2), windowHeight);
    textStyle(NORMAL);
    textSize(18);
    text('Italo Calvino', (windowWidth / 2) + 30, 100, windowWidth, windowHeight);
    textSize(18);
    text('press ENTER to start...', (windowWidth / 2) + 30, windowHeight - 40, windowWidth, windowHeight);
  } 
  else if (state == "memory") {
    image(memory, 0, 0);
    stateWatcher();
    stateHandler();
    textSize(24);
    fill(0);
    textStyle(BOLDITALIC);
    text('Diomira', (windowWidth / 2) + 30, 50, (windowWidth / 2), windowHeight);
    textStyle(NORMAL);
    textSize(12);
    text('“Leaving there and proceeding for three days toward the east, you reach Diomira, a city with sixty silver domes, bronze statues of all the gods, streets paved with lead, a golden cock that crows each morning on a tower. All these beauties will already be familiar to a visitor, who has seen them also in other cities. But the special quality of this city for the man who arrives there on a September evening, when days are growing shorter and the multicolored lamps are lighted all at once at the doors of the food stalls and from a terrace a woman’s voice cries ooh!, is that he feels envy toward those who now believe they have once before lived an evening identical to this and who think they were happy, that time.”', (windowWidth / 2) + 30, 100, windowWidth - 350, windowHeight);

    text("Type the next city: ", (windowWidth / 2) + 30, windowHeight - 35, 150, windowHeight - 40);
    text(string, (windowWidth / 2) + 140, windowHeight - 35, 150, windowHeight - 40);
  } 
  else if (state == "desire") {
    image(desire, 0, 0);
    stateWatcher();
    stateHandler();
    textSize(24);
    fill(0);
    textStyle(BOLDITALIC);
    text('Fedora', (windowWidth / 2) + 30, 50, (windowWidth / 2), windowHeight);
    textStyle(NORMAL);
    textSize(12);
    text('“In the center of Fedora, that gray stone metropolis, stands a metal building with a crystal globe in every room. Looking into each globe, you see a blue city, the model of a different Fedora. These are the forms the city could have taken if, for one reason or another, it had not become what we see today. In every age someone, looking at Fedora as it was, imagined a way of making it the ideal city, but while he constructed his miniature model, Fedora was already no longer the same as it was before, and what had been until yesterday a possible future became only a toy in a glass globe...”', (windowWidth / 2) + 30, 100, windowWidth - 350, windowHeight);

    text("Type the next city: ", (windowWidth / 2) + 30, windowHeight - 35, 150, windowHeight - 40);
    text(string, (windowWidth / 2) + 140, windowHeight - 35, 150, windowHeight - 40);
  } 
  else if (state == "signs") {
    image(signs, 0, 0);
    stateWatcher();
    stateHandler();
    textSize(24);
    fill(0);
    textStyle(BOLDITALIC);
    text('Tamara', (windowWidth / 2) + 30, 50, (windowWidth / 2), windowHeight);
    textStyle(NORMAL);
    textSize(12);
    text('“Finally the journey leads to the city of Tamara. You penetrate it along streets thick with signboards jutting from the walls. The eye does not see things but images of things that mean other things: pincers point out the tooth-drawer\'s house; a tankard, the tavern; halberds, the barracks; scales, the grocer\'s. Statues and shields depict lions, dolphins, towers, stars: a sign that something -- who knows what? -- has as its sign a lion or a dolphin or a tower or a star. ”', (windowWidth / 2) + 30, 100, windowWidth - 350, windowHeight);

    text("Type the next city: ", (windowWidth / 2) + 30, windowHeight - 35, 150, windowHeight - 40);
    text(string, (windowWidth / 2) + 140, windowHeight - 35, 150, windowHeight - 40);
  } 
  else if (state == "thin") {
    image(thin, 0, 0);
    stateWatcher();
    stateHandler();
    textSize(24);
    fill(0);
    textStyle(BOLDITALIC);
    text('Octavia', (windowWidth / 2) + 30, 50, (windowWidth / 2), windowHeight);
    textStyle(NORMAL);
    textSize(12);
    text('“If you choose to believe me, good. Now I will tell how Octavia, the spider-web city, is made. There is a precipice between two steep mountains: the city is over the void, bound to the two crests with ropes and chains and catwalks. You walk on the little wooden ties, careful not to set your foot in the open spaces, or you cling to the hempen strands. Below there is nothing for hundreds and hundreds of feet: a few clouds glide past; farther down you can glimpse the chasm\'s bed. This is the foundation of the city: a net which serves as passage and as support.”', (windowWidth / 2) + 30, 100, windowWidth - 350, windowHeight);

    text("Type the next city: ", (windowWidth / 2) + 30, windowHeight - 35, 150, windowHeight - 40);
    text(string, (windowWidth / 2) + 140, windowHeight - 35, 150, windowHeight - 40);
  } 
  else if (state == "eyes") {
    image(eyes, 0, 0);
    stateWatcher();
    stateHandler();
    textSize(24);
    fill(0);
    textStyle(BOLDITALIC);
    text('Valdrada', (windowWidth / 2) + 30, 50, (windowWidth / 2), windowHeight);
    textStyle(NORMAL);
    textSize(12);
    text('“The ancients built Valdrada on the shores of a lake, with houses all verandas one above the other, and high streets whose railed parapets look out over the water. Thus the traveler, arriving, sees two cities: one erect above the lake, and the other reflected, upside down. Nothing exists or happens in the one Valdrada that the other Valdrada does not repeat, because the city was so constructed that it\'s every point would be reflected in its mirror, and the Valdrada down in the water contains not only all the flutings and juttings of the facades that raise above the lake, but also the rooms\' interiors with ceilings and floors, the perspective of the halls, the mirrors of the wardrobes.”', (windowWidth / 2) + 30, 100, windowWidth - 350, windowHeight);

    text("Type the next city: ", (windowWidth / 2) + 30, windowHeight - 35, 150, windowHeight - 40);
    text(string, (windowWidth / 2) + 140, windowHeight - 35, 150, windowHeight - 40);
  } 
  else if (state == "trading") {
    image(trading, 0, 0);
    stateWatcher();
    stateHandler();
    textSize(24);
    fill(0);
    textStyle(BOLDITALIC);
    text('Eutropia', (windowWidth / 2) + 30, 50, (windowWidth / 2), windowHeight);
    textStyle(NORMAL);
    textSize(12);
    text('“When he enters the territory of which Eutropia is the capital, the traveler sees not one city but many, of equal size and not unlike one another, scattered over a vast, rolling plateau. Eutropia is not one, but all these cities together; only one is inhabited at a time, the others are empty; and this process is carried out in rotation. Now I shall tell you how. On the day when Eutropia\'s inhabitants feel the grip of weariness and no one can bear any longer his job, his relatives, his house and his life, debts, the people he must greet or who greet him, then the whole citizenry decides to move to the next city, which is there waiting for them, empty and good as new...”', (windowWidth / 2) + 30, 100, windowWidth - 350, windowHeight);

    text("Type the next city: ", (windowWidth / 2) + 30, windowHeight - 35, 150, windowHeight - 40);
    text(string, (windowWidth / 2) + 140, windowHeight - 35, 150, windowHeight - 40);
  } 
  else if (state == "names") {
    image(names, 0, 0);
    stateWatcher();
    stateHandler();
    textSize(24);
    fill(0);
    textStyle(BOLDITALIC);
    text('Irene', (windowWidth / 2) + 30, 50, (windowWidth / 2), windowHeight);
    textStyle(NORMAL);
    textSize(12);
    text('“Irene is the city visible when you lean out from the edge of the plateau at the hour when the lights come on, and in the limpid air, the pink of the settlement can be discerned spread out in the distance below: where the windows are more concentrated, where it thins out in dimly lighted alleys, where it collects the shadows of gardens, where it raises towers with signal fires; and if the evening is misty, a hazy glow swells like a milky sponge at the foot of the gulleys. Travelers on the plateau, shepherds shifting their flocks, bird-catchers watching their nets, hermits gathering greens: all look down and speak of Irene...”', (windowWidth / 2) + 30, 100, windowWidth - 350, windowHeight);

    text("Type the next city: ", (windowWidth / 2) + 30, windowHeight - 35, 150, windowHeight - 40);
    text(string, (windowWidth / 2) + 140, windowHeight - 35, 150, windowHeight - 40);
  }
  else if (state == "dead"){
    image(dead, 0, 0);
    stateWatcher();
    stateHandler();
    textSize(24);
    fill(0);
    textStyle(BOLDITALIC);
    text('Eusapia', (windowWidth / 2) + 30, 50, (windowWidth / 2), windowHeight);
    textStyle(NORMAL);
    textSize(12);
    text('“No city is more inclined than Eusapia to enjoy life and flee care. And to make the leap from life to death less abrupt, the inhabitants have constructed an identical copy of their city, underground. All corpses, dried in such a way that the skeleton remains sheathed in yellow skin, are carried down there, to continue their former activities. And, of these activities, it is their carefree moments that take first place: most of the corpses are seated around laden tables, or placed in dancing positions, or made to play little trumpets...”', (windowWidth / 2) + 30, 100, windowWidth - 350, windowHeight);

    text("Type the next city: ", (windowWidth / 2) + 30, windowHeight - 35, 150, windowHeight - 40);
    text(string, (windowWidth / 2) + 140, windowHeight - 35, 150, windowHeight - 40);
  }
  else if (state == "sky"){
    image(sky, 0, 0);
    stateWatcher();
    stateHandler();
    textSize(24);
    fill(0);
    textStyle(BOLDITALIC);
    text('Eudoxia', (windowWidth / 2) + 30, 50, (windowWidth / 2), windowHeight);
    textStyle(NORMAL);
    textSize(12);
    text('“In Eudoxia, which spreads both upward and down, with winding alleys, steps, dead ends, hovels, a carpet is preserved in which you can observe the city\'s true form. At first sight nothing seems to resemble Eudoxia less than the design of that carpet, laid out in symmetrical motives whose patterns are repeated along straight and circular lines, interwoven with brilliantly colored spires, in a repetition that can be followed throughout the whole woof...”', (windowWidth / 2) + 30, 100, windowWidth - 350, windowHeight);

    text("Type the next city: ", (windowWidth / 2) + 30, windowHeight - 35, 150, windowHeight - 40);
    text(string, (windowWidth / 2) + 140, windowHeight - 35, 150, windowHeight - 40);
  }
  else if (state == "continuous"){
    image(continuous, 0, 0);
    stateWatcher();
    stateHandler();
    textSize(24);
    fill(0);
    textStyle(BOLDITALIC);
    text('Procopia', (windowWidth / 2) + 30, 50, (windowWidth / 2), windowHeight);
    textStyle(NORMAL);
    textSize(12);
    text('“Each year in the course of my travels I stop at Procopia and take lodgings in the same room in the same inn. Ever since the first time I have lingered to contemplate the landscape to be seen by raising the curtain at the window: a ditch, a bridge, a little wall, a medlar, a field of corn, a bramble patch with blackberries, a chicken yard, the yellow hump of a hill, a white cloud, a stretch of blue sky shaped like a trapeze. The first time I am sure there was no one to be seen; it was only the following year that, at a movement among the leaves, I could discern a round, flat face, gnawing on an ear of corn...”', (windowWidth / 2) + 30, 100, windowWidth - 350, windowHeight);

    text("Type the next city: ", (windowWidth / 2) + 30, windowHeight - 35, 150, windowHeight - 40);
    text(string, (windowWidth / 2) + 140, windowHeight - 35, 150, windowHeight - 40);
  }
  else if (state == "hidden"){
    image(hidden, 0, 0);
    stateWatcher();
    stateHandler();
    textSize(24);
    fill(0);
    textStyle(BOLDITALIC);
    text('Berenice', (windowWidth / 2) + 30, 50, (windowWidth / 2), windowHeight);
    textStyle(NORMAL);
    textSize(12);
    text('“I should not tell you of Berenice, the unjust city, which crowns with triglyphs, abaci, metopes the gears of its meat-grinding machines (the men assigned to polishing, when they raise their chins over the balustrades and contemplate the atria, stairway, porticos, feel even more imprisoned and short of stature). Instead, I should tell you of the hidden Berenice, the city of the just, handling makeshift materials in the shadowy rooms behind the shops and beneath the stairs, linking a network of wires and pipes, pulleys and pistons and counterweights that infiltrates like a climbing plant among the great cogged wheels (when they jam, a subdued ticking gives warning that a new precision mechanism is governing the city)....”', (windowWidth / 2) + 30, 100, windowWidth - 350, windowHeight);

    text("Type the next city: ", (windowWidth / 2) + 30, windowHeight - 35, 150, windowHeight - 40);
    text(string, (windowWidth / 2) + 140, windowHeight - 35, 150, windowHeight - 40);
  }
  else if (state == "end"){
    image(end, 0, 0);
    stateWatcher();
    textSize(24);
    fill(0);
    textStyle(BOLDITALIC);
    text('The end', (windowWidth / 2) + 30, 50, (windowWidth / 2), windowHeight);
    textStyle(NORMAL);
    textSize(18);
    text('type intro to reload...', (windowWidth / 2) + 30, windowHeight - 100, windowWidth, windowHeight);
    textSize(12);
    
    text("Type the next city: ", (windowWidth / 2) + 30, windowHeight - 35, 150, windowHeight - 40);
    text(string, (windowWidth / 2) + 140, windowHeight - 35, 150, windowHeight - 40);
  }
}

function keyPressed() {
  if (keyCode === RETURN && state == 'intro') {
    state = "memory"
  } else if (state != "intro" && keyCode != BACKSPACE && (key >= 'a' && key <= 'z' || keyCode == RETURN)) {
    if (keyCode == RETURN) {
      if (!stateChecker(string)) {
        state = state;
      } else {
        if (checkNext(string)) {
          state = string;
          string = '';
        }else{
          state = state;
        }
      }
    } else {
      string += `${key}`;
    }
  } else if (keyCode == BACKSPACE) {
    string = "";
  }
}

function stateWatcher() {
  fill(255);
  rect(20, windowHeight - 40, 150, 20);
  fill(0);
  textSize(12);
  text("state: " + state, 25, windowHeight - 35, 150, windowHeight - 40)
}

function stateHandler() {
  fill(255);
  rect(20, 20, 250, 20);
  fill(0);
  textSize(12);
  text("Next: ", 25, 25, 150, 40)
  textStyle(BOLD);
  if (state == "memory") {
    text("desire, signs, intro", 60, 25, 150, 40);
  } 
  else if (state == "desire") {
    text("memory, signs, thin", 60, 25, 150, 40);
  } 
  else if (state == "signs") {
    text("memory, desire, thin", 60, 25, 150, 40);
  } 
  else if (state == "thin") {
    text("desire, signs, eyes, trading", 60, 25, 200, 40);
  } 
  else if (state == "eyes") {
    text("thin, trading, names", 60, 25, 200, 40);
  } 
  else if (state == "trading") {
    text("thin, eyes, names", 60, 25, 200, 40);
  } 
  else if (state == "names") {
    text("trading, eyes, dead, sky", 60, 25, 200, 40);
  }
  else if (state == "dead") {
    text("names, sky, continuous", 60, 25, 200, 40);
  }
  else if (state == "sky"){
    text("eyes, names, dead, continuous", 60, 25, 300, 40);
  }
  else if (state == "continuous"){
    text("dead, sky, hidden", 60, 25, 200, 40);
  }
  else if (state == "hidden"){
    text("memory, continuous, sky, end", 60, 25, 200, 40);
  }
}

function checkNext(elemTyped) {
  switch (elemTyped) {
    case 'intro' : {
      return (state == 'memory' || state == 'end');
      break;
    }
    case 'desire': {
      return (state == 'memory' || state == 'signs' || state == 'thin');
      break;
    };
    case 'memory': {
      return (state == 'desire' || state == 'signs' || state == 'hidden');
      break;
    }
    case 'signs': {
      return (state == 'desire' || state == 'memory' || state == 'thin');
      break;
    }
    case 'thin': {
      return (state == 'desire' || state == 'signs' || state == 'trading' || state == 'eyes');
      break;
    }
    case 'eyes': {
      return (state == 'thin' || state == 'trading' || state == 'names' || state == 'sky');
      break;
    }
    case 'trading': {
      return (state == 'thin' || state == 'eyes' || state == 'names');
      break;
    }
    case 'names': {
      return (state == 'trading' || state == 'eyes' || state == 'dead' || state == 'sky');
      break;
    }
    case 'sky': {
      return (state == 'names' || state == 'dead' || state == 'continuous' || state == 'hidden');
      break;
    }
    case 'dead': {
      return (state == 'sky' || state == 'names' || state == 'continuous'); 
      break;
    }
    case 'continuous': {
      return (state == 'dead' || state == 'sky' || state == 'hidden');
      break;
    }
    case 'hidden': {
      return (state == 'continuous');
      break;
    }
    case 'end': {
      return (state == 'hidden');
      break;
    }
  }
}

function stateChecker(stringInput) {
  console.log(listStates.indexOf(stringInput));
  if (listStates.indexOf(stringInput) == -1) {
    return false;
  } else {
    return true;
  }
}