# Comment ajouter des images au site

## Structure des dossiers

Chaque dossier représente une **catégorie** qui apparaîtra sur le carrousel :

- **`plantation/`** : Semis, plantation de pommes de terre
- **`arrachage/`** : Récolte, batteuses, arrachage
- **`preparation/`** : Labour, déchaumage, tassage, préparation du sol
- **`entretien/`** : Épareuse, fauchage, entretien des cultures
- **`fourrage/`** : Pressage, récolte d'herbe
- **`specialite/`** : Pommes de terre (l'image dans ce dossier sera utilisée en fond d'accueil)

## Pour ajouter des images

1. **Choisissez la catégorie** correspondant à votre image
2. **Copiez votre image** (format JPG, PNG, ou WEBP) dans le dossier approprié
3. **Nommez votre fichier** avec un nom descriptif (ex: `semis-precision.jpg`, `labour-automne.jpg`)
4. Le carrousel **chargera automatiquement** toutes les images

## Exemples

```bash
# Ajouter une nouvelle photo de semis
public/images/plantation/nouveau-semis.jpg

# Ajouter une photo de moisson
public/images/arrachage/moisson-2024.jpg
```

## Notes importantes

- ✅ Formats acceptés : `.jpg`, `.jpeg`, `.png`, `.webp`
- ✅ Le nom du fichier devient le titre de l'image sur le carrousel
- ✅ Les images sont affichées dans l'ordre alphabétique par catégorie
- ⚠️ **Après avoir ajouté des images**, lancez `yarn build && yarn deploy` pour mettre à jour le site

## Créer une nouvelle catégorie

Pour ajouter une nouvelle catégorie :

1. Créez un nouveau dossier dans `public/images/`
2. Ajoutez le nom de la catégorie dans `components/Services.tsx` dans l'objet `categoryNames`

```typescript
const categoryNames: Record<string, string> = {
  'plantation': 'Plantation',
  'arrachage': 'Arrachage',
  'ma-nouvelle-categorie': 'Ma Nouvelle Catégorie'  // ← Ajouter ici
};
```
