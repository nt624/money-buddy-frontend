import { GetExpensesResponse } from "@/lib/types/expense";

const API_BASE_URL = "http://localhost:8080";

export async function getExpenses(): Promise<GetExpensesResponse> {
  const res = await fetch(`${API_BASE_URL}/expenses`, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch expenses");
  }

  return res.json();
}
