### HellenEQ

To plugin αυτό εμφανίζει τα τελευταία σεισμικά γεγονότα της Ελλάδας απο το official site :globe_with_meridians: seismos.gr

#### :question: Πως λειτουργεί

Μέσω ενώς Webscraper σε :elephant: PHP που υλοποίησα , φορτώνω ολόκληρο όλα τα στοιχεία **a** (links) και τα εξάγω σε μορφή JSON, όπου και τα καλώ μέσα απο αυτό το extension.


#### :gem: API Resoure
Δείτε το API εδώ: https://api.alexasta.gr/helleneq.php

#### :shield: Nομικά Στοιχεία

Όλα τα δεδομένα που εμφανίζονται στο extension ανήκουν αποκλειστικά στο seismos.gr - To project αυτό το έφτιαξα **ΔΩΡΕΑΝ** για να συνσεισφέρω στο έργο τους.


#### :clipboard: Απαιτήσεις

- Εγκατεστημένο το Node.js
- Package manager NPM ή Yarn


#### :rocket: Eγκατάσταση

##### Κατεβάστε το reposiroty
```sh
git clone https://github.com/alexastagr/HellenEQ.git
```


##### :one: Mπείτε στον φάκελο του project
```sh

cd HellenEQ
```


##### :two: Eγκατάσταση πακέτων
```sh

cd HellenEQ
```


##### :three: Tρέξτε την React εφαρμογή.
```sh

npm run dev:all # κάνει auto reload & build 

```

##### Eπιλογές

| Eντολή    | Περιγραφή |
| -------- | ------- |
| **npm run dev**  | Τρέχει την εφαρμογή χωρίς να κάνει build    |
| **npm run dev:all** | Τρέχει τον server και κάνει build σε κάθε αλλαγή     |
| **npm run build**   | Κάνει build όλο το extension    |

Αν δεν θέλετε σε κάθε αλλαγή να κλείνετε και να ξανα ανοίγετε το Popup
επιλέξτε το npm run **dev:all**


####  Δοκιμή του Plugin στον Firefox.

Ανοίξτε τον Firefox σε περιβάλλον προγραμματιστή, γράφοντας στην μπάρα διευθνύνσεων την λέξη **about:debugging**

- Στην αριστερή ενότητα επιλέξτε Αυτός ο Firefox


![](https://raw.githubusercontent.com/alexastagr/HellenEQ/refs/heads/main/01.png)

- Πατήστε το κουμπί φορτώστε το δοκιμαστικό σας extension

![](https://raw.githubusercontent.com/alexastagr/HellenEQ/refs/heads/main/02.png)

Μπείτε στον φάκελο του HellenEQ ανοίξτε τον φάκελο **dist** και επιλέξτε το αρχείο manifest.json και έπειτα πατήστε Ανοιγμα.

## Voilà :smile: