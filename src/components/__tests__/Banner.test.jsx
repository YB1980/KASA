import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Banner from '../Banner'

describe('Banner', () => {

  test('affiche la div banner', () => {
    render(<Banner imageUrl="test.jpg" />)

    const banner = document.querySelector('.banner')
    expect(banner).toBeInTheDocument()
  })

  test('applique une image de fond', () => {
    render(<Banner imageUrl="test.jpg" />)

    const banner = document.querySelector('.banner')

    expect(banner.style.backgroundImage).toContain('test.jpg')
  })

  test('affiche le titre si présent', () => {
    render(<Banner title="Chez vous, partout et ailleurs" />)

    expect(
      screen.getByText(/Chez vous/i)
    ).toBeInTheDocument()
  })

  test('n’affiche pas le titre si absent', () => {
    render(<Banner />)

    const title = screen.queryByRole('heading')
    expect(title).toBeNull()
  })

})