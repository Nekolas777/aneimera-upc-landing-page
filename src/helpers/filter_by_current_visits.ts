import type { TechnicalVisit } from "../interfaces/technicalVisit";

export function filterByCurrentVisits(
  visits: TechnicalVisit[]
): TechnicalVisit[] {

  const currentDate = new Date();
  return visits.filter(
    (visit) =>
      new Date(visit.fecha).setHours(0, 0, 0, 0) >=
      currentDate.setHours(0, 0, 0, 0)
  );
}