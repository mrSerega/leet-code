function removeOccurrences(s: string, part: string): string {
  while (s.includes(part)) {
    const index = s.indexOf(part);
    s = s.replace(part, "");
  }

  return s;
}
