import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;
`
const colors = {
    green: '#33CC95',
    red: '#E52E4D'
}

interface ResumeCardProps {
    color?: 'green' | 'red';
}
export const ResumeCard = styled.div<ResumeCardProps>`
    background: ${({color}) => color !== undefined? colors[color]: '#FFFFFF'};
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: ${({color}) => color !== undefined? '#FFFFFF': '#363F5F'};

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }
`