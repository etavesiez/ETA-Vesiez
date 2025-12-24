# 📸 Guide complet pour gérer les images du site

Ce guide explique comment modifier les images du site **sans avoir besoin de coder**.

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

Le carrousel affiche automatiquement toutes les photos organisées par catégories.

### 📁 Les dossiers = Les catégories

Chaque dossier dans `public/images/` représente une catégorie :

```
public/images/
├── plantation/         → Photos de semis, plantation
├── arrachage/          → Photos de récolte, batteuses
├── preparation/        → Photos de labour, déchaumage
├── entretien/          → Photos d'élagage, fauchage
├── fourrage/           → Photos de pressage
└── specialite/         → Photos spéciales
```

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

**Le nom devient le titre sur le carrousel :**
- `semis-printemps-2025.jpg` → affiche "Semis Printemps 2025"
- `labour-automne.jpg` → affiche "Labour Automne"

### Étape 3 : Copiez la photo
Placez votre photo dans le dossier de la catégorie choisie :
```
public/images/plantation/semis-printemps-2025.jpg
```

### Étape 4 : Ajoutez la photo dans le code
Ouvrez le fichier `components/Services.tsx` et ajoutez votre ligne :

```typescript
// Trouvez la section correspondante (ex: Plantation) et ajoutez :
{ src: '/images/plantation/semis-printemps-2025.jpg', title: 'Semis Printemps 2025', category: 'Plantation' },
```

### Étape 5 : Mettez le site à jour
Ouvrez un terminal dans le dossier du projet et tapez :
```bash
yarn build
yarn deploy
```

---

## 🗑️ SUPPRIMER UNE PHOTO DU CARROUSEL

### Étape 1 : Supprimez le fichier
Supprimez simplement la photo du dossier

### Étape 2 : Retirez la ligne du code
Ouvrez `components/Services.tsx` et **supprimez** la ligne correspondante :
```typescript
// SUPPRIMEZ cette ligne entière :
{ src: '/images/plantation/vieille-photo.jpg', title: 'Vieille Photo', category: 'Plantation' },
```

### Étape 3 : Mettez à jour
```bash
yarn build
yarn deploy
```

---

## 📂 CRÉER UNE NOUVELLE CATÉGORIE

### Étape 1 : Créez le dossier
Créez un nouveau dossier dans `public/images/`
Exemple : `public/images/transport/`

### Étape 2 : Ajoutez des photos
Placez vos photos dans ce nouveau dossier avec des noms descriptifs

### Étape 3 : Déclarez les photos
Ouvrez `components/Services.tsx` et ajoutez vos photos :
```typescript
// Ajoutez après les autres catégories :
// Transport
{ src: '/images/transport/camion-bennes.jpg', title: 'Camion Bennes', category: 'Transport' },
{ src: '/images/transport/manuscopique.jpg', title: 'Manuscopique', category: 'Transport' },
```

### Étape 4 : Mettez à jour
```bash
yarn build
yarn deploy
```

---

## ✏️ RENOMMER UNE CATÉGORIE

Pour changer le nom d'une catégorie (ex: "Plantation" → "Semis") :

### Étape 1 : Renommez le dossier (optionnel)
Vous pouvez garder le nom du dossier tel quel

### Étape 2 : Changez le nom affiché
Dans `components/Services.tsx`, modifiez uniquement le champ `category` :
```typescript
// Avant :
{ src: '/images/plantation/semis.jpg', title: 'Semis', category: 'Plantation' },

// Après :
{ src: '/images/plantation/semis.jpg', title: 'Semis', category: 'Semis' },
```

---

## ❌ SUPPRIMER UNE CATÉGORIE ENTIÈRE

### Étape 1 : Supprimez le dossier
Supprimez le dossier complet (ex: `public/images/fourrage/`)

### Étape 2 : Retirez toutes les lignes
Dans `components/Services.tsx`, supprimez **toutes** les lignes de cette catégorie :
```typescript
// SUPPRIMEZ TOUTES ces lignes :
{ src: '/images/fourrage/pressage-foin.jpg', title: 'Pressage Foin', category: 'Fourrage' },
{ src: '/images/fourrage/pressage-herbe.jpg', title: 'Pressage Herbe', category: 'Fourrage' },
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
- Toujours lancer `yarn build` puis `yarn deploy` après une modification

❌ **À ÉVITER :**
- Espaces dans les noms : `ma photo.jpg`
- Accents dans les noms de fichiers : `récolte.jpg` → utilisez `recolte.jpg`
- Oublier de mettre à jour le fichier `Services.tsx`

---

## 🆘 EN CAS DE PROBLÈME

Si le site ne s'affiche pas correctement :

1. Vérifiez que tous les noms de fichiers sont corrects
2. Vérifiez qu'il n'y a pas d'erreurs dans `components/Services.tsx` (virgules, guillemets, etc.)
3. Relancez `yarn build` pour voir les erreurs
4. Si tout est bloqué, restaurez la version précédente avec Git
