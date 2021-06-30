import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
    id: number,
    title: string,
    amount: number,
    type: "deposit" | "withdraw",
    category: string,
    createdAt: Date
}

export function TransactionsTable() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get("transactions")
            .then(response => setTransactions(response.data));
    }, []);
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        transactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>{transaction.amount}</td>
                                <td>{transaction.category}</td>
                                <td>{transaction.createdAt}</td>
                            </tr>
                        ))
                    }
                    {/* <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12000,00</td>
                        <td>Desenvolvimento</td>
                        <td>28/06/2021</td>
                    </tr>

                    <tr>
                        <td>Prestação Moto</td>
                        <td className="withdraw">- R$820,00</td>
                        <td>Desenvolvimento</td>
                        <td>28/06/2021</td>
                    </tr>

                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12000,00</td>
                        <td>Desenvolvimento</td>
                        <td>28/06/2021</td>
                    </tr> */}
                </tbody>
            </table>
        </Container>
    )
}