# Modifier le contenu du site ETA Vesiez (sans coder)

Ce dossier contient tout ce qu'il faut pour modifier les textes, les prestations, les icônes et les images du site, même si tu ne sais pas programmer.

## 1. Modifier les prestations et les icônes (services)

- Va dans `public/texte/services.json`
- Chaque bloc correspond à une prestation (titre, description, icône)
- Pour l'icône, utilise le nom d'une icône Lucide (voir ci-dessous)

### Exemple :
```json
{
  "title": "Plantation de pommes de terre",
  "desc": "Plantation mécanisée et précise des pommes de terre pour un démarrage optimal.",
  "icon": "Sprout"
}
```

### Où trouver les icônes Lucide ?
- Va sur https://lucide.dev/icons/
- Cherche une icône qui te plaît (ex : "Tractor", "Hammer", "Sprout", "Truck"...)
- Mets le nom exact dans le champ `icon` du JSON
- Si tu ne mets rien ou si le nom est faux, une icône par défaut sera affichée

## 2. Modifier les textes du site

- Les textes principaux (prestations, descriptions) sont dans `public/texte/services.json`
- Pour d'autres textes, demande à Camille où ils se trouvent ou ajoute d'autres fichiers dans ce dossier

## 3. Modifier les images du carrousel

- Les images du carrousel sont dans `public/images/carrousel/` (plusieurs sous-dossiers)
- Pour ajouter une image : glisse-la dans le bon dossier
- Pour supprimer une image : supprime le fichier correspondant
- Pour changer l'ordre : les images sont triées automatiquement par nom

## 4. Comment ça marche ?

- À chaque modification (texte, image, icône), il faut enregistrer et pousser sur GitHub (ou utiliser l'interface web)
- Le site se mettra à jour automatiquement après quelques minutes

## 5. Astuce
- Tu peux tout tester sans risque : si tu fais une erreur, demande à Camille ou reviens en arrière sur GitHub

---

**Ce guide est fait pour que tu puisses gérer le contenu du site sans coder !**
