export function paginate<T>(items: T[], page: number, perPage: number): T[] {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  return items.slice(start, end);
}

export function totalPages(totalItems: number, perPage: number): number {
  return Math.ceil(totalItems / perPage);
}
