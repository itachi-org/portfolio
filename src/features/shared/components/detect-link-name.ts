// DetectLinkName.ts - Simple ajout/suppression de classe 'active'
export type LinksProps = 'PROJECTS' | 'SKILLS' | 'CONTACT' | 'K' | 'ABOUT'

export default function DetectLinkNameByHref (linkName: LinksProps): void {
  const links: NodeListOf<HTMLAnchorElement> =
    document.querySelectorAll('nav a')

  const linkMapping: Record<LinksProps, string> = {
    K: '#home',
    ABOUT: '#about',
    PROJECTS: '#projects',
    SKILLS: '#skills',
    CONTACT: '#contact'
  }

  const targetHref = linkMapping[linkName]

  for (const link of links) {
    if (link.getAttribute('href') === targetHref) {
      link.classList.add('active')
    } else {
      link.classList.remove('active')
    }
  }
}
