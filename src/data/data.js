//For the timebeing the data will be stored here, until a connection to the database works again.

async function storedData() {
  const data = {
    "recipes":[
      { "id": 0,
      "title": "Chicken breast with avocado salad",
      "description": "A satisfying solo salad that's superhealthy - great for a busy worknight",
      "ingredients": "1 skinless chicken breast, 2 tsp olive oil (1 for the salad), 1 heaped tsp smoked paprika. For the salad: 1/2 small sliced avocado, 1 tsp red wine vinegar, 1 tbsp flat-leaf parsley roughly chopped, 1 medium tomato chopped, half small red onion, thinly sliced, 1/2 cup lettuce",
      "instructions": "1. Heat grill to medium. Rub the chicken all over with 1 tsp of the olive oil and the paprika. Cook for 4-5 mins each side until lightly charred and cooked through. 2. Mix the salad ingredients together, season and add the rest of the oil. thickly slice the chicken and serve with salad.",
      "image": "https://229hkg2lw84tezus91ay33k2-wpengine.netdna-ssl.com/wp-content/uploads/2010/05/shutterstock_274855409-copy-1302x988.jpg"
    }, {
      "id": 1,
      "title": "Simple waffle",
      "description": "Start your day with fluffy and delicious waffles!",
      "ingredients": "130g plain flour, Vegetable spray, for waffle iron, 470ml buttermilk, room temperature, 60g unsalted butter, melted, 3 whole eggs, beaten, 3 tablespoons granulated sugar, 1 teaspoon salt, 1 teaspoon baking powder, 1/2 teaspoon bicarbonate soda, 130g wholemeal flour, fruit is optional. For Equipment list: Mixing bowls, Waffle iron, Whisk",
      "instructions": "Preheat waffle iron according to manufacturer's directions. In a medium bowl whisk together the flours, bicarbonate soda, baking powder, salt, and granulated sugar. In another bowl beat together eggs and melted butter, and then add the buttermilk. Add the wet ingredients to the dry and stir until combined. Put the recommended amount of waffle batter onto the iron according to the manufacturer's recommendations. Close iron top and cook until the waffle is golden on both sides and is easily removed from iron. Serve immediately or keep warm in a 100C/Gas 1/4",
      "image": "https://images.alphacoders.com/730/730037.jpg"
    },{
      "id": 2,
      "title": "Ground Beef Tacos",
      "description": "Dinner ready in 30 minutes! Enjoy these tacos made using ground beef, cheese, lettuce and tomatoes that are served with salsa.",
      "ingredients": "1 lb lean ground beef, 1 medium onion, chopped, 1 teaspoon chili powder, 1/2 teaspoon salt, 1/2 teaspoon garlic powder, 1 can (8 oz) tomato sauce, 12 Old El Paso™ crunchy taco shells, 1 1/2 cups shredded Cheddar cheese (6 oz), 2 cups shredded lettuce, 2 medium tomatoes, chopped, 3/4 cup Old El Paso™ Thick 'n Chunky salsa, 3/4 cup sour cream, if desired",
      "instructions": "1. Heat oven to 250°F. In large skillet, brown ground beef and onion over medium heat for 8 to 10 minutes or until beef is thoroughly cooked, stirring frequently. Drain. 2. Stir in chili powder, salt, garlic powder and tomato sauce. Reduce heat to low; cover and simmer 10 minutes. 3. Meanwhile, place taco shells on ungreased cookie sheet. Heat at 250°F. for 5 minutes. 4. To assemble tacos, layer beef mixture, cheese, lettuce and tomatoes in each taco shell. Serve with salsa; top with sour cream.",
      "image":"https://www.mangeonsbien.com/wp-content/uploads/2017/01/TACO-FB-2-1.jpg"
    },{
      "id": 3,
      "title": "Spaghetti Carbonara",
      "description": "A super rich, classic 'bacon and egg' spaghetti dish. Great to serve for company.",
      "ingredients": "1 pound spaghetti, 1 tablespoon olive oil, 8 slices bacon, diced, 1 onion, chopped, 1 clove garlic, minced, 1/4 cup dry white wine (optional), 4 eggs, 1/2 cup grated Parmesan cheese, 1 pinch salt and black pepper to taste, 2 tablespoons chopped fresh parsley,2 tablespoons grated Parmesan cheese",
      "instructions": "1. In a large pot of boiling salted water, cook spaghetti pasta until al dente. Drain well. Toss with 1 tablespoon of olive oil, and set aside. 2. Meanwhile in a large skillet, cook chopped bacon until slightly crisp; remove and drain onto paper towels. Reserve 2 tablespoons of bacon fat; add remaining 1 tablespoon olive oil, and heat in reused large skillet. Add chopped onion, and cook over medium heat until onion is translucent. Add minced garlic, and cook 1 minute more. Add wine if desired; cook one more minute. 3. Return cooked bacon to pan; add cooked and drained spaghetti. Toss to coat and heat through, adding more olive oil if it seems dry or is sticking together. Add beaten eggs and cook, tossing constantly with tongs or large fork until eggs are barely set. Quickly add 1/2 cup Parmesan cheese, and toss again. Add salt and pepper to taste (remember that bacon and Parmesan are very salty). 4. Serve immediately with chopped parsley sprinkled on top, and extra Parmesan cheese at table.",
      "image":"https://s.glbimg.com/po/rc/media/2013/08/15/16_31_51_606_111648900.jpg"
      },{
        "id": 4,
      "title": "French omelette",
      "description": "This French omelette recipe is a classic and versatile favorite!",
      "ingredients": "2	eggs, 2 tbsp.	water, 1/8 tsp.	salt, Dash	pepper, 1 tsp.	butter, 1/3 cup	filling, such as shredded cheese, finely chopped ham",
      "instructions": "1. Beat eggs, water, salt and pepper in small bowl until blended. 2. Heat butter in 6 to 8-inch nonstick omelet pan or skillet over medium-high heat until hot. Tilt pan to coat bottom. Pour in egg mixture. Mixture should set immediately at edges. 3. Gently push cooked portions from edges toward the center with inverted turner so that uncooked eggs can reach the hot pan surface. Continue cooking, tilting pan and gently moving cooked portions as needed. When top surface of eggs is thickened and no visible liquid egg remains, place filling on one side of the omelet. Fold omelet in half with turner. With a quick flip of the wrist, turn pan and invert or slide omelet onto plate. serve immediately.",
      "image":"https://images6.alphacoders.com/744/thumb-1920-744357.jpg"
    }
    /*,{
        "id": 5,
      "title": "lalalaa",
      "description": "lululu",
      "ingredients": "mimimim",
      "instructions": "mololo",
      "image":"efe"
      },{
        "id": 6,
      "title": "lalalaa",
      "description": "lululu",
      "ingredients": "mimimim",
      "instructions": "mololo",
      "image":"efe"
      },{
        "id": 7,
      "title": "lalalaa",
      "description": "lululu",
      "ingredients": "mimimim",
      "instructions": "mololo",
      "image":"efe"
      },{
        "id": 8,
      "title": "lalalaa",
      "description": "lululu",
      "ingredients": "mimimim",
      "instructions": "mololo",
      "image":"efe"
      },{
        "id": 9,
      "title": "lalalaa",
      "description": "lululu",
      "ingredients": "mimimim",
      "instructions": "mololo",
      "image":"efe"
      },{
        "id": 10,
      "title": "lalalaa",
      "description": "lululu",
      "ingredients": "mimimim",
      "instructions": "mololo",
      "image":"efe"
    }*/
    ]
  };

  return data;
}

export default storedData;
