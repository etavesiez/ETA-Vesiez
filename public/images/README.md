# 📸 Guide complet pour gérer les images du site

Ce guide explique comment modifier les images du site **sans avoir besoin de coder**.

**🎉 BONNE NOUVELLE : Le système est 100% AUTOMATIQUE !**
Vous n'avez **JAMAIS** besoin de modifier le code. Ajoutez simplement vos images dans les bons dossiers.

---

## 🖼️ CHANGER L'IMAGE D'ACCUEIL

L'image d'accueil est la grande photo de fond sur la page principale.

### Étapes pour la remplacer :

1. **Trouvez votre nouvelle image** (elle doit être au format JPG, JPEG, PNG ou WEBP)
2. **Renommez-la** exactement comme ceci : `image-accueil.jpg`
3. **Remplacez** l'ancien fichier situé dans : `public/images/image-accueil.jpg`

⚠️ **IMPORTANT** : Le nom du fichier doit être EXACTEMENT `image-accueil.jpg` (avec un tiret, en minuscules)

---

## 🎠 GÉRER LE CARROUSEL DE PHOTOS

Le carrousel charge **AUTOMATIQUEMENT** toutes les photos depuis les dossiers de catégories.

### 📁 Les dossiers = Les catégories

Chaque dossier dans `public/images/` devient automatiquement une catégorie :

```
public/images/
├── plantation/         → Toutes les photos ici = catégorie "Plantation"
├── arrachage/          → Toutes les photos ici = catégorie "Arrachage"
├── preparation/        → Toutes les photos ici = catégorie "Préparation"
├── entretien/          → Toutes les photos ici = catégorie "Entretien"
├── fourrage/           → Toutes les photos ici = catégorie "Fourrage"
└── transport/          → Toutes les photos ici = catégorie "Transport"
```

**💡 Le système détecte automatiquement :**
- ✅ Tous les dossiers
- ✅ Toutes les images dans chaque dossier
- ✅ Les titres depuis les noms de fichiers

---

## ➕ AJOUTER UNE NOUVELLE PHOTO AU CARROUSEL

### Étape 1 : Choisissez la catégorie
Décidez dans quelle catégorie va votre photo (plantation, arrachage, etc.)

### Étape 2 : Nommez votre photo
Donnez-lui un nom descriptif avec des **tirets** entre les mots :
- ✅ BON : `semis-printemps-2025.jpg`
- ✅ BON : `labour-automne.jpg`
- ❌ MAUVAIS : `IMG_1234.jpg`
- ❌ MAUVAIS : `photo avec espaces.jpg`

**Le nom devient automatiquement le titre :**
- `semis-printemps-2025.jpg` → affiche "Semis Printemps 2025"
- `labour-automne.jpg` → affiche "Labour Automne"

### Étape 3 : Copiez la photo
Placez votre photo dans le dossier de la catégorie :
```
public/images/plantation/semis-printemps-2025.jpg
```

### Étape 4 : C'EST TOUT ! 🎉
Pas besoin de modifier le code. Compilez simplement :
```bash
yarn build
yarn deploy
```

---

## 🗑️ SUPPRIMER UNE PHOTO DU CARROUSEL

**Super simple :**

1. Supprimez le fichier image du dossier
2. C'est tout ! Lancez juste :
```bash
yarn build
yarn deploy
```

---

## 📂 CRÉER UNE NOUVELLE CATÉGORIE

### C'est 100% AUTOMATIQUE ! 🎉

**Il suffit de créer un dossier et d'y mettre des images.**

### Étape 1 : Créez le dossier
Créez un nouveau dossier dans `public/images/`
Exemple : `public/images/transport/` ou `public/images/travaux-speciaux/`

### Étape 2 : Ajoutez des photos
Placez vos photos dans ce nouveau dossier avec des noms descriptifs

### Étape 3 : C'EST TOUT ! 🎉

**Le nom du dossier devient automatiquement la catégorie :**
- `transport/` → "Transport"
- `travaux-speciaux/` → "Travaux Speciaux"
- `manutention/` → "Manutention"

**Le système capitalise automatiquement chaque mot !**

### Publiez
```bash
yarn build
yarn deploy
```

---

## ✏️ RENOMMER UNE CATÉGORIE

### Option 1 : Renommer le dossier
Renommez simplement le dossier :
```bash
mv public/images/plantation public/images/semis
```

### Option 2 : Changer seulement l'affichage
Dans `components/Services.tsx`, ajoutez/modifiez dans `categoryTranslations` :
```typescript
'plantation': 'Semis et Plantation',  // Change l'affichage sans renommer le dossier
```

---

## ❌ SUPPRIMER UNE CATÉGORIE ENTIÈRE

1. Supprimez le dossier complet : `public/images/fourrage/`
2. C'est tout ! Le système ne chargera plus ces images
3. Publiez :
```bash
yarn build
yarn deploy
```

---

## 🚀 PUBLIER VOS MODIFICATIONS

**Après CHAQUE modification**, vous devez publier le site :

```bash
# Étape 1 : Compiler le site
yarn build

# Étape 2 : Déployer en ligne
yarn deploy
```

⏱️ Attendez 1-2 minutes que les modifications soient visibles en ligne.

---

## 📝 RÈGLES IMPORTANTES

✅ **À FAIRE :**
- Nommer les fichiers avec des tirets : `mon-image-2025.jpg`
- Utiliser des formats : `.jpg`, `.jpeg`, `.png`, `.webp`
- Mettre les images dans les bons dossiers de catégories
- Toujours lancer `yarn build` puis `yarn deploy` après une modification

❌ **À ÉVITER :**
- Espaces dans les noms : `ma photo.jpg`
- Accents dans les noms de fichiers : `récolte.jpg` → utilisez `recolte.jpg`
- Mettre des images directement dans `public/images/` (utilisez les sous-dossiers)

---

## 🆘 EN CAS DE PROBLÈME

Si le site ne s'affiche pas correctement :

1. Vérifiez que tous les noms de fichiers sont corrects (pas d'espaces, pas d'accents)
2. Vérifiez que les images sont dans des sous-dossiers (pas à la racine de `images/`)
3. Relancez `yarn build` pour voir les erreurs
4. Videz le cache de votre navigateur (Ctrl+Shift+R ou Cmd+Shift+R)

---

## 🎯 RÉSUMÉ - CE QUE VOUS DEVEZ SAVOIR

**Pour ajouter une image :**
1. Nommez-la avec des tirets : `ma-photo.jpg`
2. Mettez-la dans le bon dossier : `public/images/[categorie]/ma-photo.jpg`
3. Publiez : `yarn build && yarn deploy`

**Pour créer une catégorie :**
1. Créez un dossier : `public/images/nouvelle-categorie/`
2. Ajoutez des images dedans
3. Publiez : `yarn build && yarn deploy`

**Tout est automatique ! Aucun code à modifier !** 🎉
