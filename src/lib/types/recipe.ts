// types/recipe.ts

export interface Recipe {
  id: number
  title: string
  image: string
  imageType: string
  servings: number
  readyInMinutes: number
  cookingMinutes: number
  preparationMinutes: number
  license: string
  sourceName: string
  sourceUrl: string
  spoonacularSourceUrl: string
  healthScore: number
  spoonacularScore: number
  pricePerServing: number
  analyzedInstructions: AnalyzedInstruction[]
  cheap: boolean
  creditsText: string
  cuisines: string[]
  dairyFree: boolean
  diets: string[]
  gaps: string
  glutenFree: boolean
  instructions: string
  ketogenic: boolean
  lowFodmap: boolean
  occasions: string[]
  sustainable: boolean
  vegan: boolean
  vegetarian: boolean
  veryHealthy: boolean
  veryPopular: boolean
  whole30: boolean
  weightWatcherSmartPoints: number
  dishTypes: string[]
  extendedIngredients: ExtendedIngredient[]
  summary: string
  winePairing: WinePairing
}

export interface AnalyzedInstruction {
  name: string
  steps: InstructionStep[]
}

export interface InstructionStep {
  number: number
  step: string
  ingredients: StepIngredient[]
  equipment: StepEquipment[]
  length?: StepLength
}

export interface StepIngredient {
  id: number
  name: string
  localizedName: string
  image: string
}

export interface StepEquipment {
  id: number
  name: string
  localizedName: string
  image: string
}

export interface StepLength {
  number: number
  unit: string
}

export interface ExtendedIngredient {
  aisle: string
  amount: number
  consistency: string
  id: number
  image: string
  measures: Measures
  meta: string[]
  name: string
  original: string
  originalName: string
  unit: string
}

export interface Measures {
  metric: Measurement
  us: Measurement
}

export interface Measurement {
  amount: number
  unitLong: string
  unitShort: string
}

export interface WinePairing {
  pairedWines: string[]
  pairingText: string
  productMatches: WineProduct[]
}

export interface WineProduct {
  id: number
  title: string
  description: string
  price: string
  imageUrl: string
  averageRating: number
  ratingCount: number
  score: number
  link: string
}

// Simplified version for recipe cards/lists
export interface RecipeCard {
  id: number
  title: string
  image: string
  imageType?: string
  servings?: number
  readyInMinutes?: number
}

// API Response types
export interface RecipeSearchResponse {
  results: RecipeCard[]
  offset: number
  number: number
  totalResults: number
}
