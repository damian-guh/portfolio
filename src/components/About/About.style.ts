import styled from 'styled-components'

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 150vh;
`
export const AboutH2 = styled.h2`
  color: ${({ theme }) => theme.colors.darkPurple};
  font-size: ${({ theme }) => theme.fontSizes.big};
`

export const AboutDescription = styled.section`
  color: ${({ theme }) => theme.colors.darkPurple};
  font-size: ${({ theme }) => theme.fontSizes.normal};
  padding: 0 10px;

  @media ${({ theme }) => theme.screenSizes.desktop} {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`

export const TechnologiesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  > * {
    width: 100px;
  }

  @media ${({ theme }) => theme.screenSizes.desktop} {
    grid-template-columns: repeat(6, 1fr);
  }
`

export const ProjectsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  @media ${({ theme }) => theme.screenSizes.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const ProjectContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 250px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  cursor: pointer;
  transition: 1s;

  > * {
    padding: 5px;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }
`
