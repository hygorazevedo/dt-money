import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import whiteTotalImg from "../../assets/total-white.svg";
import blackTotalImg from "../../assets/total-black.svg";
import { Container, ResumeCard } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary () {
    const { transactions } = useTransactions();

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === "deposit") {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })

    return (
        <Container>
            <ResumeCard>
                <header>
                    <span>Entradas</span>
                    <img src={incomeImg} alt="entradas" />
                </header>

                <strong>{new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(summary.deposits)}</strong>
            </ResumeCard>

            <ResumeCard>
                <header>
                    <span>Saídas</span>
                    <img src={outcomeImg} alt="saidas" />
                </header>

                <strong>- {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(summary.withdraws)}</strong>
            </ResumeCard>

            <ResumeCard color={ summary.total >= 0? (summary.total > 0? 'green': undefined): 'red' }>
                <header>
                    <span>Total</span>
                    <img src={summary.total === 0? blackTotalImg: whiteTotalImg } alt="total" />
                </header>

                <strong>{new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(summary.total)}</strong>
            </ResumeCard>
        </Container>
    )
}