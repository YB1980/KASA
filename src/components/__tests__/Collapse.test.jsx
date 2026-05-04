import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Collapse from '../Collapse'

describe('Collapse', () => {

  test('affiche le titre', () => {
    render(<Collapse title="Description" content="Contenu test" />)

    expect(screen.getByText("Description")).toBeInTheDocument()
  })

  test('fermé par défaut (pas de classe open)', () => {
    render(<Collapse title="Test" content="Contenu test" />)

    const arrow = document.querySelector('.arrow')

    expect(arrow.classList.contains('open')).toBe(false)
  })

  test('ouvre au clic', () => {
    render(<Collapse title="Test" content="Contenu test" />)

    const arrow = document.querySelector('.arrow')

    fireEvent.click(arrow)

    expect(arrow.classList.contains('open')).toBe(true)
  })

  test('se referme au second clic', () => {
    render(<Collapse title="Test" content="Contenu test" />)

    const arrow = document.querySelector('.arrow')

    fireEvent.click(arrow)
    fireEvent.click(arrow)

    expect(arrow.classList.contains('open')).toBe(false)
  })

})