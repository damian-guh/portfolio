import React from 'react'
import {
  HeroContainer,
  HeroHeader,
  HeroH1,
  HeroDesc,
  HeroCircle,
  HeroIconContainer,
  HeroNav,
  HeroNavList,
  HeroNavListItem,
} from 'components/Hero/Hero.style'
import Button from 'components/Button'
import {
  HERO_H1_CONTENT,
  HERO_DESC,
  HERO_BUTTON_CONTENT,
  HERO_NAV_CONTENT,
  GITHUB_LINK,
  LINKEDIN_LINK,
} from 'utility/constants'
import GithubIcon from 'icons/github.svg'
import LinkedinIcon from 'icons/linkedin.svg'

function Hero() {
  return (
    <HeroContainer>
      <HeroHeader>
        <HeroH1>{HERO_H1_CONTENT}</HeroH1>
        <HeroDesc>{HERO_DESC}</HeroDesc>
        <Button text={HERO_BUTTON_CONTENT} />
      </HeroHeader>
      <HeroNav>
        <HeroNavList>
          {HERO_NAV_CONTENT.map(item => (
            <HeroNavListItem key={item}>{item}</HeroNavListItem>
          ))}
        </HeroNavList>
      </HeroNav>
      <HeroCircle />
      <HeroIconContainer>
        <a href={GITHUB_LINK} target="_blank">
          <GithubIcon />
        </a>
        <a href={LINKEDIN_LINK} target="_blank">
          <LinkedinIcon />
        </a>
      </HeroIconContainer>
    </HeroContainer>
  )
}

export default Hero
