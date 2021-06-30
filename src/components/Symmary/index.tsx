import { Container } from "./styles";
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Summary () {
    return (
        <Container>
            <div>
                <header>
                    <span>Entradas</span>
                    <img src={incomeImg} alt="entradas" />
                </header>

                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <span>Saídas</span>
                    <img src={outcomeImg} alt="saidas" />
                </header>

                <strong>- R$100,00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <span>Total</span>
                    <img src={totalImg} alt="total" />
                </header>

                <strong>R$900,00</strong>
            </div>
        </Container>
    )
}