// Sample recipe data
const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
    ingredients: [
      "200g spaghetti",
      "100g pancetta",
      "2 eggs",
      "50g parmesan cheese",
      "Black pepper",
    ],
    instructions: [
      "Cook spaghetti al dente.",
      "Fry pancetta until crispy.",
      "Mix eggs and cheese.",
      "Toss pasta with pancetta and egg mixture.",
      "Season with black pepper.",
    ],
  },
  {
    id: 2,
    title: "Caprese Salad",
    category: "Appetizer",
    image:
      "https://images.unsplash.com/photo-1570197571499-166b36435e9f?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: [
      "4 tomatoes",
      "200g mozzarella",
      "Fresh basil leaves",
      "Balsamic glaze",
      "Olive oil",
    ],
    instructions: [
      "Slice tomatoes and mozzarella.",
      "Arrange on a plate with basil leaves.",
      "Drizzle with balsamic glaze and olive oil.",
    ],
  },
  {
    id: 3,
    title: "Chocolate Lava Cake",
    category: "Dessert",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
    ingredients: [
      "100g dark chocolate",
      "100g butter",
      "2 eggs",
      "50g sugar",
      "25g flour",
    ],
    instructions: [
      "Melt chocolate and butter.",
      "Mix in eggs, sugar, and flour.",
      "Bake in ramekins for 12-15 minutes.",
    ],
  },

  {
    id: 4,
    title: "Grilled Salmon",
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
    ingredients: [
      "4 salmon fillets",
      "2 tbsp olive oil",
      "1 lemon",
      "Salt",
      "Pepper",
    ],
    instructions: [
      "Preheat grill to medium-high.",
      "Season salmon with oil, salt, and pepper.",
      "Grill 4-5 minutes each side.",
      "Serve with lemon wedges.",
    ],
  },

  {
    id: 5,
    title: "Mushroom Risotto",
    category: "Main Course",
    image:
      "https://plus.unsplash.com/premium_photo-1694850980439-61487c39be4f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: [
      "300g Arborio rice",
      "1L vegetable stock",
      "200g mixed mushrooms",
      "1 onion",
      "50g parmesan",
    ],
    instructions: [
      "Sauté onions and mushrooms.",
      "Add rice and toast lightly.",
      "Add stock gradually, stirring constantly.",
      "Finish with parmesan.",
    ],
  },
  {
    id: 6,
    title: "Beef Wellington",
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
    ingredients: [
      "500g beef tenderloin",
      "500g puff pastry",
      "100g mushrooms",
      "4 slices prosciutto",
      "1 egg",
    ],
    instructions: [
      "Sear beef, then chill.",
      "Blend mushrooms and cool.",
      "Wrap beef in mushrooms, prosciutto, then pastry.",
      "Brush with egg wash and bake.",
    ],
  },
  {
    id: 7,
    title: "Caesar Salad",
    category: "Appetizer",
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
    ingredients: [
      "1 romaine lettuce",
      "100g croutons",
      "50g parmesan",
      "Caesar dressing",
    ],
    instructions: [
      "Chop lettuce and place in a bowl.",
      "Add croutons and parmesan.",
      "Toss with Caesar dressing.",
    ],
  },
  {
    id: 8,
    title: "Tiramisu",
    category: "Dessert",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Tiramisu_-_Raffaele_Diomede.jpg/800px-Tiramisu_-_Raffaele_Diomede.jpg",
    ingredients: [
      "200g ladyfingers",
      "250g mascarpone",
      "4 eggs",
      "100g sugar",
      "Coffee",
      "Cocoa powder",
    ],
    instructions: [
      "Mix egg yolks, sugar, and mascarpone.",
      "Whip egg whites and fold in.",
      "Dip ladyfingers in coffee and layer with cream.",
      "Chill and dust with cocoa.",
    ],
  },
  {
    id: 9,
    title: "Pad Thai",
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
    ingredients: [
      "200g rice noodles",
      "200g shrimp",
      "2 eggs",
      "Bean sprouts",
      "Pad Thai sauce",
    ],
    instructions: [
      "Cook noodles until tender.",
      "Stir-fry shrimp and scramble eggs.",
      "Add noodles, bean sprouts, and sauce.",
      "Toss until well-combined.",
    ],
  },
  {
    id: 10,
    title: "Guacamole",
    category: "Appetizer",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
    ingredients: [
      "3 avocados",
      "1 lime",
      "1 onion",
      "2 tomatoes",
      "Cilantro",
      "Salt",
    ],
    instructions: [
      "Mash avocados with lime juice.",
      "Mix in diced onion, tomatoes, and cilantro.",
      "Season with salt to taste.",
    ],
  },
  {
    id: 11,
    title: "New York Cheesecake",
    category: "Dessert",
    image:
      "https://images.unsplash.com/photo-1508737804141-4c3b688e2546?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
    ingredients: [
      "200g graham crackers",
      "500g cream cheese",
      "200g sugar",
      "3 eggs",
      "200ml sour cream",
    ],
    instructions: [
      "Make crust with crushed crackers.",
      "Beat cream cheese, sugar, eggs, and sour cream.",
      "Pour over crust and bake.",
      "Chill overnight.",
    ],
  },
  {
    id: 12,
    title: "Ramen",
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
    ingredients: [
      "2 portions ramen noodles",
      "1L chicken broth",
      "2 eggs",
      "100g bamboo shoots",
      "Nori sheets",
    ],
    instructions: [
      "Boil broth and cook noodles.",
      "Soft-boil eggs.",
      "Assemble bowls with noodles, broth, eggs, bamboo shoots, and nori.",
    ],
  },
  //New
  {
    id: 13,
    title: "Chicken Parmesan",
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: [
      "4 chicken breasts",
      "1 cup breadcrumbs",
      "1/2 cup parmesan",
      "2 eggs",
      "Marinara sauce",
      "Mozzarella",
    ],
    instructions: [
      "Bread chicken and fry.",
      "Top with marinara and mozzarella.",
      "Bake until cheese melts.",
    ],
  },
  {
    id: 14,
    title: "Beef Stroganoff",
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1608877907149-a206d75ba011?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: [
      "500g beef strips",
      "200g mushrooms",
      "1 onion",
      "200ml sour cream",
      "300g egg noodles",
    ],
    instructions: [
      "Sauté beef, mushrooms, and onions.",
      "Add sour cream.",
      "Serve over egg noodles.",
    ],
  },
  {
    id: 15,
    title: "Vegetable Lasagna",
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1510693206972-df098062cb71?q=80&w=1396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: [
      "Lasagna sheets",
      "2 zucchinis",
      "1 eggplant",
      "Spinach",
      "Ricotta",
      "Tomato sauce",
    ],
    instructions: [
      "Layer vegetables, ricotta, sauce, and pasta.",
      "Bake until bubbly.",
    ],
  },
  {
    id: 16,
    title: "Shepherd's Pie",
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1618946440416-ef676a06a913?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: [
      "500g ground lamb",
      "2 carrots",
      "1 onion",
      "Peas",
      "Mashed potatoes",
    ],
    instructions: [
      "Cook lamb with veggies.",
      "Top with mashed potatoes.",
      "Bake until golden.",
    ],
  },
  {
    id: 17,
    title: "Chicken Tikka Masala",
    category: "Main Course",
    image:
      "https://plus.unsplash.com/premium_photo-1664391929657-f901ee7f1414?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: [
      "500g chicken",
      "Yogurt",
      "Tikka masala paste",
      "400ml tomato puree",
      "200ml cream",
    ],
    instructions: [
      "Marinate chicken in yogurt and spices.",
      "Grill chicken.",
      "Simmer in tomato and cream sauce.",
    ],
  },
  {
    id: 18,
    title: "Beef Tacos",
    category: "Main Course",
    image:
      "https://plus.unsplash.com/premium_photo-1661730314652-911662c0d86e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: [
      "500g ground beef",
      "Taco seasoning",
      "8 tortillas",
      "Lettuce",
      "Cheese",
      "Salsa",
    ],
    instructions: [
      "Season and cook beef.",
      "Warm tortillas.",
      "Assemble with toppings.",
    ],
  },
  {
    id: 19,
    title: "Shrimp Scampi",
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1681151837414-d25590a0f814?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: [
      "300g shrimp",
      "4 cloves garlic",
      "1/4 cup white wine",
      "Lemon juice",
      "Parsley",
      "Linguine",
    ],
    instructions: [
      "Cook linguine.",
      "Sauté shrimp and garlic in butter.",
      "Add wine and lemon juice.",
      "Toss with pasta and parsley.",
    ],
  },
  {
    id: 20,
    title: "Eggplant Parmesan",
    category: "Main Course",
    image:
      "https://plus.unsplash.com/premium_photo-1670368206019-b6033a1940e8?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: [
      "2 eggplants",
      "Marinara sauce",
      "Mozzarella",
      "Parmesan",
      "Basil",
    ],
    instructions: [
      "Slice and bake eggplant.",
      "Layer with marinara and cheeses.",
      "Bake until bubbly.",
    ],
  },
  {
    id: 21,
    title: "Beef Bourguignon",
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1548869206-93b036288d7e?q=80&w=1390&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: [
      "1kg beef chuck",
      "200g bacon",
      "300g mushrooms",
      "Red wine",
      "Beef stock",
    ],
    instructions: [
      "Brown beef and bacon.",
      "Add wine, stock, and simmer.",
      "Add mushrooms towards the end.",
    ],
  },
  {
    id: 22,
    title: "Chicken Alfredo",
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1670508142255-f119391c4213?q=80&w=1431&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: [
      "2 chicken breasts",
      "300g fettuccine",
      "200ml heavy cream",
      "50g parmesan",
      "Garlic",
    ],
    instructions: [
      "Cook pasta.",
      "Sauté chicken and garlic.",
      "Make alfredo sauce.",
      "Combine all.",
    ],
  },
  {
    id: 23,
    title: "BBQ Ribs",
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: [
      "1 rack of ribs",
      "BBQ sauce",
      "Salt",
      "Pepper",
      "Garlic powder",
    ],
    instructions: [
      "Season ribs with salt, pepper, and garlic powder.",
      "Preheat grill to medium heat.",
      "Grill ribs for 1.5-2 hours, basting with BBQ sauce.",
      "Serve with extra sauce on the side.",
    ],
  },
  {
    id: 24,
    title: "Vegetable Stir-Fry",
    category: "Main Course",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Nizza-Salat_an_der_F_Mittelmeerk%C3%BCste.JPG/1024px-Nizza-Salat_an_der_F_Mittelmeerk%C3%BCste.JPG",
    ingredients: [
      "Mixed vegetables",
      "Soy sauce",
      "Ginger",
      "Garlic",
      "Sesame oil",
    ],
    instructions: [
      "Heat sesame oil in a wok.",
      "Add garlic and ginger, stir-fry for 30 seconds.",
      "Add mixed vegetables and stir-fry until tender.",
      "Add soy sauce and toss to combine.",
    ],
  },
  {
    id: 25,
    title: "Chicken Teriyaki",
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1514536958296-436f46226e74?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: [
      "2 chicken breasts",
      "Teriyaki sauce",
      "Green onions",
      "Sesame seeds",
      "Rice",
    ],
    instructions: [
      "Marinate chicken in teriyaki sauce for 30 minutes.",
      "Cook rice according to package instructions.",
      "Grill or pan-fry chicken until cooked through.",
      "Slice chicken and serve over rice, garnish with green onions and sesame seeds.",
    ],
  },
  {
    id: 26,
    title: "Stuffed Cabbage Rolls",
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1622220734058-23ce1f89d84d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: [
      "1 head of cabbage",
      "500g ground beef",
      "1 cup rice",
      "Tomato sauce",
      "Onion",
    ],
    instructions: [
      "Boil cabbage leaves until tender.",
      "Mix ground beef, cooked rice, and diced onion.",
      "Stuff cabbage leaves with beef mixture and roll.",
      "Place in a baking dish, cover with tomato sauce, and bake for 1 hour.",
    ],
  },
  {
    id: 27,
    title: "Chicken Piccata",
    category: "Main Course",
    image:
      "https://plus.unsplash.com/premium_photo-1692835633672-50919fdffb75?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["2 chicken breasts", "Flour", "Lemon", "Capers", "Butter"],
    instructions: [
      "Dredge chicken in flour and sauté in butter until golden.",
      "Remove chicken, add lemon juice and capers to the pan.",
      "Return chicken to the pan and simmer for a few minutes.",
      "Serve with lemon sauce over the top.",
    ],
  },
  {
    id: 28,
    title: "Lamb Kebabs",
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1625944228741-cf30983ecb91?q=80&w=1481&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["500g lamb cubes", "Yogurt", "Garlic", "Cumin", "Paprika"],
    instructions: [
      "Marinate lamb in yogurt, garlic, cumin, and paprika for 1 hour.",
      "Thread lamb onto skewers.",
      "Grill kebabs until cooked to desired doneness.",
      "Serve with a side of yogurt sauce.",
    ],
  },
  {
    id: 29,
    title: "Vegetarian Moussaka",
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1606791422814-b32c705e3e2f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: [
      "2 eggplants",
      "2 zucchinis",
      "Tomato sauce",
      "Béchamel sauce",
      "Parmesan cheese",
    ],
    instructions: [
      "Slice and roast eggplants and zucchinis.",
      "Layer vegetables with tomato sauce in a baking dish.",
      "Top with béchamel sauce and parmesan.",
      "Bake until golden and bubbly.",
    ],
  },
  {
    id: 30,
    title: "Beef Kebabs",
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1669907366240-365f02ceaf44?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: [
      "500g beef cubes",
      "Bell peppers",
      "Onions",
      "Soy sauce",
      "Garlic",
    ],
    instructions: [
      "Marinate beef in soy sauce and garlic.",
      "Thread beef, bell peppers, and onions onto skewers.",
      "Grill until beef is cooked to desired doneness.",
      "Serve with a side of rice.",
    ],
  },
  {
    id: 32,
    title: "Strawberry Cheesecake",
    category: "Dessert",
    image:
      "https://images.unsplash.com/photo-1589119908995-c6837fa14848?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: [
      "200g cream cheese",
      "100g sugar",
      "200g strawberries",
      "150g digestive biscuits",
      "50g butter",
    ],
    instructions: [
      "Crush biscuits and mix with melted butter.",
      "Press into a springform pan.",
      "Mix cream cheese and sugar until smooth.",
      "Pour over crust and chill.",
      "Top with strawberries before serving.",
    ],
  },
  {
    id: 34,
    title: "Lemon Meringue Pie",
    category: "Dessert",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Theres_always_room_for_pie_%287859650026%29.jpg/800px-Theres_always_room_for_pie_%287859650026%29.jpg",
    ingredients: [
      "1 pie crust",
      "4 lemons",
      "200g sugar",
      "3 eggs",
      "50g cornstarch",
      "3 egg whites",
    ],
    instructions: [
      "Prebake pie crust.",
      "Mix lemon juice, zest, sugar, and cornstarch over heat.",
      "Whisk in egg yolks and cook until thick.",
      "Pour into crust and cool.",
      "Beat egg whites to stiff peaks with sugar.",
      "Top pie with meringue and bake until golden.",
    ],
  },
  {
    id: 35,
    title: "Chocolate Chip Cookies",
    category: "Dessert",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/C_is_for_cookie_-_chocolate_chip_cookie_detail.jpg/800px-C_is_for_cookie_-_chocolate_chip_cookie_detail.jpg",
    ingredients: [
      "200g flour",
      "100g butter",
      "100g sugar",
      "1 egg",
      "100g chocolate chips",
      "1 tsp baking soda",
    ],
    instructions: [
      "Cream butter and sugar.",
      "Add egg and mix well.",
      "Stir in flour, baking soda, and chocolate chips.",
      "Drop spoonfuls onto baking sheet.",
      "Bake at 180°C for 10-12 minutes.",
    ],
  },
  {
    id: 36,
    title: "Banana Bread",
    category: "Dessert",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Banana_bread_078.jpg/220px-Banana_bread_078.jpg",
    ingredients: [
      "3 ripe bananas",
      "100g sugar",
      "2 eggs",
      "200g flour",
      "1 tsp baking soda",
      "50g butter",
    ],
    instructions: [
      "Mash bananas and mix with sugar.",
      "Add eggs and melted butter.",
      "Stir in flour and baking soda.",
      "Pour into loaf pan.",
      "Bake at 175°C for 60 minutes.",
    ],
  },
  {
    id: 37,
    title: "Pavlova",
    category: "Dessert",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Pavlova%2C_dessert.jpeg/800px-Pavlova%2C_dessert.jpeg",
    ingredients: [
      "4 egg whites",
      "200g sugar",
      "1 tsp vinegar",
      "1 tsp cornstarch",
      "300ml whipped cream",
      "Mixed berries",
    ],
    instructions: [
      "Beat egg whites to soft peaks.",
      "Gradually add sugar, beating to stiff peaks.",
      "Fold in vinegar and cornstarch.",
      "Spread onto baking sheet and bake at 130°C for 1 hour.",
      "Top with whipped cream and berries.",
    ],
  },
  {
    id: 38,
    title: "Brownies",
    category: "Dessert",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Chocolatebrownie.JPG/800px-Chocolatebrownie.JPG",
    ingredients: [
      "200g dark chocolate",
      "150g butter",
      "200g sugar",
      "3 eggs",
      "100g flour",
      "50g cocoa powder",
    ],
    instructions: [
      "Melt chocolate and butter together.",
      "Mix in sugar and eggs.",
      "Stir in flour and cocoa powder.",
      "Pour into baking dish.",
      "Bake at 180°C for 25 minutes.",
    ],
  },
  {
    id: 39,
    title: "Apple Pie",
    category: "Dessert",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Apple_pie.jpg",
    ingredients: [
      "2 pie crusts",
      "6 apples",
      "150g sugar",
      "1 tsp cinnamon",
      "2 tbsp flour",
      "1 egg",
    ],
    instructions: [
      "Peel and slice apples.",
      "Mix apples with sugar, cinnamon, and flour.",
      "Pour into pie crust.",
      "Cover with top crust and seal edges.",
      "Brush with beaten egg and bake at 180°C for 50 minutes.",
    ],
  },
  {
    id: 40,
    title: "Panna Cotta",
    category: "Dessert",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Panna_Cotta_with_cream_and_garnish.jpg/800px-Panna_Cotta_with_cream_and_garnish.jpg",
    ingredients: [
      "500ml heavy cream",
      "100g sugar",
      "1 tsp vanilla extract",
      "4 gelatin sheets",
      "Fresh berries",
    ],
    instructions: [
      "Heat cream, sugar, and vanilla until sugar dissolves.",
      "Soften gelatin in cold water.",
      "Stir gelatin into warm cream.",
      "Pour into molds and chill.",
      "Serve with fresh berries.",
    ],
  },
  {
    id: 41,
    title: "Bruschetta",
    category: "Appetizer",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/2014_Bruschetta_The_Larder_Chiang_Mai.jpg/220px-2014_Bruschetta_The_Larder_Chiang_Mai.jpg",
    ingredients: [
      "1 baguette",
      "4 tomatoes",
      "2 cloves garlic",
      "Fresh basil leaves",
      "Olive oil",
      "Salt",
      "Pepper",
    ],
    instructions: [
      "Slice baguette and toast until golden brown.",
      "Dice tomatoes and mince garlic.",
      "Mix tomatoes, garlic, and basil with olive oil, salt, and pepper.",
      "Top baguette slices with the tomato mixture.",
    ],
  },
  {
    id: 42,
    title: "Deviled Eggs",
    category: "Appetizer",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/0.2014_Ostereier_zum_Fr%C3%BChst%C3%BCck%2C_Beskiden%2C_Nowotaniec.jpg/250px-0.2014_Ostereier_zum_Fr%C3%BChst%C3%BCck%2C_Beskiden%2C_Nowotaniec.jpg",
    ingredients: [
      "6 large eggs",
      "3 tablespoons mayonnaise",
      "1 teaspoon Dijon mustard",
      "1 teaspoon white vinegar",
      "Salt",
      "Pepper",
      "Paprika",
    ],
    instructions: [
      "Boil the eggs for 10 minutes, then cool in ice water.",
      "Peel the eggs and cut them in half lengthwise.",
      "Remove the yolks and place them in a bowl.",
      "Mash the yolks with mayonnaise, mustard, vinegar, salt, and pepper.",
      "Spoon or pipe the mixture back into the egg whites.",
      "Sprinkle with paprika and serve.",
    ],
  },
  {
    id: 43,
    title: "Garlic Shrimp",
    category: "Appetizer",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Awadhi_prawns.jpg/235px-Awadhi_prawns.jpg",
    ingredients: [
      "500g shrimp",
      "4 cloves garlic",
      "1/4 cup olive oil",
      "1 lemon",
      "Salt",
      "Pepper",
      "Fresh parsley",
    ],
    instructions: [
      "Peel and devein shrimp.",
      "Mince garlic.",
      "Heat olive oil in a pan and sauté garlic.",
      "Add shrimp, salt, and pepper. Cook until shrimp is pink.",
      "Squeeze lemon juice and garnish with parsley.",
    ],
  },
  {
    id: 44,
    title: "Greek Salad",
    category: "Appetizer",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Greece_Food_Horiatiki.JPG/1024px-Greece_Food_Horiatiki.JPG",
    ingredients: [
      "4 tomatoes",
      "1 cucumber",
      "1 red onion",
      "1/2 cup olives",
      "200g feta cheese",
      "Olive oil",
      "Oregano",
    ],
    instructions: [
      "Chop tomatoes, cucumber, and red onion.",
      "Mix with olives and crumbled feta cheese.",
      "Drizzle with olive oil and sprinkle with oregano.",
    ],
  },
  {
    id: 45,
    title: "Stuffed Mushrooms",
    category: "Appetizer",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Stuffed_mushrooms%2C_Thanksgiving_Day_2007.jpg/271px-Stuffed_mushrooms%2C_Thanksgiving_Day_2007.jpg",
    ingredients: [
      "12 large mushrooms",
      "100g cream cheese",
      "1/4 cup grated Parmesan cheese",
      "2 cloves garlic",
      "1/4 cup breadcrumbs",
      "Fresh parsley",
      "Olive oil",
    ],
    instructions: [
      "Preheat oven to 180°C.",
      "Remove stems from mushrooms and chop finely.",
      "Mix cream cheese, Parmesan, garlic, chopped stems, and parsley.",
      "Fill mushroom caps with mixture and sprinkle with breadcrumbs.",
      "Drizzle with olive oil and bake for 20 minutes.",
    ],
  },
  {
    id: 46,
    title: "Caprese Skewers",
    category: "Appetizer",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Insalata_Caprese_Shallow_Focus.jpg/800px-Insalata_Caprese_Shallow_Focus.jpg",
    ingredients: [
      "Cherry tomatoes",
      "Mini mozzarella balls",
      "Fresh basil leaves",
      "Balsamic glaze",
      "Olive oil",
      "Salt",
      "Pepper",
      "Skewers",
    ],
    instructions: [
      "Skewer cherry tomatoes, mozzarella balls, and basil leaves.",
      "Arrange skewers on a plate.",
      "Drizzle with balsamic glaze and olive oil.",
      "Season with salt and pepper.",
    ],
  },
  {
    id: 47,
    title: "Classic Crème Brûlée",
    category: "Dessert",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/2014_0531_Cr%C3%A8me_br%C3%BBl%C3%A9e_Doi_Mae_Salong_%28cropped%29.jpg/800px-2014_0531_Cr%C3%A8me_br%C3%BBl%C3%A9e_Doi_Mae_Salong_%28cropped%29.jpg",
    ingredients: [
      "475ml heavy cream",
      "1 vanilla bean, split lengthwise",
      "6 large egg yolks",
      "100g white sugar, plus more for caramelizing",
    ],
    instructions: [
      "Preheat oven to 325°F (165°C).",
      "In a saucepan, heat cream with vanilla bean until simmering. Remove from heat and let sit for 15 minutes.",
      "In a bowl, whisk together egg yolks and 100g sugar until smooth. Remove vanilla bean from cream.",
      "Slowly whisk the hot cream into the egg yolk mixture. Pour into ramekins or baking dish.",
      "Bake for 30-40 minutes until just set in the center. Refrigerate for at least 2 hours.",
      "Before serving, sprinkle tops evenly with white sugar and caramelize with a kitchen torch.",
    ],
  },
];

// ... rest of the JavaScript code remains the same ...
// Function to create recipe cards
function createRecipeCard(recipe) {
  return `
        <div class="recipe-card" data-id="${recipe.id}">
            <img src="${recipe.image}" alt="${recipe.title}">
            <div class="details">
                <h3>${recipe.title}</h3>
                <p>${recipe.category}</p>
                <button onclick="showRecipeDetails(${recipe.id})">View Recipe</button>
            </div>
        </div>
    `;
}

// Function to display recipes
function displayRecipes(recipeList, containerId) {
  const container = document.querySelector(containerId);
  container.innerHTML = recipeList.map(createRecipeCard).join("");
}

// Display featured recipes on the homepage
function displayFeaturedRecipes() {
  const featuredRecipes = recipes.sort(() => 0.5 - Math.random()).slice(0, 3);
  displayRecipes(featuredRecipes, ".featured-recipes .recipe-grid");
}

// Display all recipes on the recipes page
function displayAllRecipes() {
  displayRecipes(recipes, ".recipes-container .recipe-grid");
}

// Filter recipes by category
function filterRecipes(category) {
  const filteredRecipes =
    category === "all"
      ? recipes
      : recipes.filter((recipe) => recipe.category === category);
  displayRecipes(filteredRecipes, ".recipes-container .recipe-grid");
}

// Add category filter buttons dynamically
function addCategoryFilters() {
  const categories = [
    "all",
    ...new Set(recipes.map((recipe) => recipe.category)),
  ];
  const container = document.querySelector(".recipes-container");
  const filterHtml = categories
    .map(
      (category) => `
        <button onclick="filterRecipes('${category}')">${category}</button>
    `
    )
    .join("");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="category-filters">${filterHtml}</div>`
  );
}

// Search functionality
function searchRecipes() {
  const searchTerm = document.getElementById("search").value.toLowerCase();
  const searchResults = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchTerm) ||
      recipe.category.toLowerCase().includes(searchTerm)
  );
  displayRecipes(searchResults, ".recipes-container .recipe-grid");
}

// Show recipe details
function showRecipeDetails(recipeId) {
  const recipe = recipes.find((r) => r.id === recipeId);
  const modal = document.createElement("div");
  modal.classList.add("recipe-modal");
  modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <h2>${recipe.title}</h2>
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>Ingredients:</h3>
            <ul>${recipe.ingredients.map((i) => `<li>${i}</li>`).join("")}</ul>
            <h3>Instructions:</h3>
            <ol>${recipe.instructions.map((i) => `<li>${i}</li>`).join("")}</ol>
        </div>
    `;
  document.body.appendChild(modal);
}

// Close recipe modal
function closeModal() {
  document.querySelector(".recipe-modal").remove();
}

// Handle contact form submission
function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  console.log(
    `Submitted: Name - ${name}, Email - ${email}, Message - ${message}`
  );
  alert("Thank you for your message! We'll get back to you soon.");
  event.target.reset();
}

// Event listeners and initial setup
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".featured-recipes")) displayFeaturedRecipes();
  if (document.querySelector(".recipes-container")) {
    displayAllRecipes();
    addCategoryFilters();
  }
  if (document.getElementById("contact-form")) {
    document
      .getElementById("contact-form")
      .addEventListener("submit", handleSubmit);
  }
});
//
// ... previous JavaScript code ...

// Mobile Menu Functionality
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.querySelector(".nav-links");

  menuBtn.addEventListener("change", () => {
    if (menuBtn.checked) {
      navLinks.style.transition = "right 0.3s ease-in-out";
      navLinks.style.right = "0";
    } else {
      navLinks.style.transition = "right 0.3s ease-in-out";
      navLinks.style.right = "-250px";
    }
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      menuBtn.checked = false;
      navLinks.style.transition = "right 0.3s ease-in-out";
      navLinks.style.right = "-250px";
    }
  });
});

// ... rest of the JavaScript code ...
