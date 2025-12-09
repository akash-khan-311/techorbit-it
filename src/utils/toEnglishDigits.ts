export const toEnglishDigits = (str: string) => {
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  const englishDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return str.replace(/[০-৯]/g, (digit) => {
    return englishDigits[banglaDigits.indexOf(digit)];
  });
};
