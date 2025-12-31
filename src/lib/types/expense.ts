export type Expense = {
  id: number;
  amount: number;
  category_id: number;
  memo: string | null;
  spent_at: string; // YYYY-MM-DD
};

export type GetExpensesResponse = {
  expenses: Expense[];
};
