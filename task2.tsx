function createImmutableObject<T>(obj: T): T {
  return Object.freeze(obj);
}
