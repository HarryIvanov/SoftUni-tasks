// ^ отрицание
// + добавя букви
// | или
// \w - [a-zA-Z0-9_] маркира всички символи (букви и цифри и долни черти)
// \d - [0-9] Маркира всички цифри
// \W - отрицание на всички символи (букви и цифри и долни черти)
// \D - отрицание на всички цифри
// \s - маркира само space
// \S - отрицание на space
// {} - показваме колко максимално символа искаме да match-не. Ако сложим {4,6} ще ни мачне всички думи межуд 4 и 6 символа. Ако сложим само "," ще ни маркира от 4 до безкрай.
/* след правило ако поставим тези
    + = {1,}
    * = {0,}
    ? = {0,1} */
// \b - проверява дали е начало или край на дума    
// regex.test(string) - true/false
// let matches string.match(regex) - връща масив с всички съвпадения. Достъпваме с matches[1], matches[0]
// let array = string.matchAll(regex) 
// string.split(regex) - можем да сплитваме по регекс