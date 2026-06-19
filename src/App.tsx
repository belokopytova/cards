import Card from './components/Card'

const cards = [
  {
    id: 1,
    image: 'https://placehold.co/300x200?text=Image+cap',
    title: 'Card title',
    text: 'Some quick example text to build on the card title and make up the bulk of the card’s content.',
    button: { text: 'Go somewhere', variant: 'btn-primary' }
  },
  {
    id: 2,
    title: 'Special title treatment',
    text: 'With supporting text below as a natural lead-in to additional content.',
    button: { text: 'Go somewhere', variant: 'btn-outline-primary' }
  },
  {
    id: 3,
    title: 'Card title',
    text: 'Some quick example text to build on the card title and make up the bulk of the card’s content.',
    button: { text: 'Go somewhere', variant: 'btn-success' }
  }
]

function App() {
  return (
    <div className="container">
      <div className="row py-3">
        {cards.map((card) => (
          <Card {...card} key={card.id} />
        ))}
      </div>
    </div>
  )
}

export default App