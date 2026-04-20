export interface Recipe {
  id: number;
  title: string;
  text: string;
  ingredients: { name: string; amount: number; unit: string }[];
  author: string;
  rating: number;
  complexity: "easy" | "medium" | "hard";
}

const recipes: Recipe[] = [
  {
    id: 1,
    title: "Spaghetti Bolognese",
    text: "Lorem ipsum dolor sit ament",
    ingredients: [
      {
        name: "Gemischtes Hackfleisch",
        amount: 150,
        unit: "g",
      },
      {
        name: "Spaghetti",
        amount: 100,
        unit: "g",
      },
      {
        name: "Tomatenmark",
        amount: 100,
        unit: "ml",
      },
    ],
    author: "User123",
    rating: 5,
    complexity: "medium",
  },
  {
    id: 2,
    title: "Kürbiscremesuppe",
    text: "Lorem ipsum dolor sit ament",
    ingredients: [],
    author: "User123",
    rating: 4,
    complexity: "easy",
  },
  {
    id: 2,
    title: "Omas Quarkkuchen",
    text: "Lorem ipsum dolor sit ament",
    ingredients: [],
    author: "UserABC",
    rating: 4,
    complexity: "hard",
  },
];

export function useRecipes() {
  return { recipes };
}
