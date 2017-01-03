var text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/(^|\W)'|'($|\W)/g, '$1"$2'));
// → "I'm the cook," he said, "it's my job."
//explainaion:
// targets any single quote at the beginning^ or end$ or wihout a non-character next to it
