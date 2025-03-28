export const formatToShamsi = (
  shamsiDate: string | undefined
): string | null => {
  const miladiDate = shamsiDate ? new Date(shamsiDate) : null;
  return miladiDate
    ? miladiDate.toLocaleDateString("fa-IR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    : null;
};
