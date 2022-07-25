import Button from '../ui/button';
import { title } from './results-title.module.css';

export default function ResultsTitle({ date }) {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });

  return (
    <section className={title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
}
