import { useState } from "react";
import { createExpense } from "@/lib/api/expenses";
import { CreateExpenseInput, Expense } from "@/lib/types/expense";

export function useExpenses() {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const addExpense = async (input: CreateExpenseInput) => {
        setIsSubmitting(true);
        setError(null);

        try {
            const expense = await createExpense(input);
            setExpenses((prevExpenses) => [...prevExpenses, expense]);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'unknown error');
        } finally {
            setIsSubmitting(false);
        }
    }

    return {
        expenses,
        isSubmitting,
        error,
        addExpense,
    }
}
