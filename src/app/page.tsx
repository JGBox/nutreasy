export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Nutreasy</h1>
        <p className="text-gray-600 mb-8">J'aimerais créer une application qui m'aide à cuis...</p>

        <h2 className="text-2xl font-semibold mb-4">Pages</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <a key="landing" href="/landing" className="block p-4 rounded-lg border hover:border-primary-500 hover:bg-primary-50 transition-colors">
            <h2 className="font-semibold">Page d'accueil</h2>
            <p className="text-sm text-gray-600">Page de présentation et d'accroche</p>
          </a>
          <a key="signup" href="/signup" className="block p-4 rounded-lg border hover:border-primary-500 hover:bg-primary-50 transition-colors">
            <h2 className="font-semibold">Page d'inscription</h2>
            <p className="text-sm text-gray-600">Formulaire d'inscription pour les nouveaux utilisateurs</p>
          </a>
          <a key="onboarding" href="/onboarding" className="block p-4 rounded-lg border hover:border-primary-500 hover:bg-primary-50 transition-colors">
            <h2 className="font-semibold">Page d'onboarding</h2>
            <p className="text-sm text-gray-600">Configuration initiale des préférences utilisateurs</p>
          </a>
          <a key="ingredient_entry" href="/ingredient_entry" className="block p-4 rounded-lg border hover:border-primary-500 hover:bg-primary-50 transition-colors">
            <h2 className="font-semibold">Page d'entrée des ingrédients</h2>
            <p className="text-sm text-gray-600">Interface pour entrer les ingrédients disponibles</p>
          </a>
          <a key="suggested_recipes" href="/suggested_recipes" className="block p-4 rounded-lg border hover:border-primary-500 hover:bg-primary-50 transition-colors">
            <h2 className="font-semibold">Page des recettes suggérées</h2>
            <p className="text-sm text-gray-600">Liste de recettes personnalisées suggérées</p>
          </a>
          <a key="recipe_page" href="/recipe_page" className="block p-4 rounded-lg border hover:border-primary-500 hover:bg-primary-50 transition-colors">
            <h2 className="font-semibold">Page de la recette</h2>
            <p className="text-sm text-gray-600">Détails de la recette sélectionnée</p>
          </a>
          <a key="cooking_instructions" href="/cooking_instructions" className="block p-4 rounded-lg border hover:border-primary-500 hover:bg-primary-50 transition-colors">
            <h2 className="font-semibold">Page des instructions de cuisine</h2>
            <p className="text-sm text-gray-600">Instructions étape par étape pour cuisiner</p>
          </a>
          <a key="recipe_selection" href="/recipe_selection" className="block p-4 rounded-lg border hover:border-primary-500 hover:bg-primary-50 transition-colors">
            <h2 className="font-semibold">Page de sélection de recettes</h2>
            <p className="text-sm text-gray-600">Sélection de recettes pour le planificateur de repas</p>
          </a>
          <a key="shopping_list" href="/shopping_list" className="block p-4 rounded-lg border hover:border-primary-500 hover:bg-primary-50 transition-colors">
            <h2 className="font-semibold">Page de la liste d'achats</h2>
            <p className="text-sm text-gray-600">Liste d'achats générée pour le planificateur de repas</p>
          </a>
        </div>
      </div>
    </main>
  )
}
