import { FC } from 'react';

import Card, { CardVariant } from './Card';
import EventsExample from './EventsExample';

const ExamplesPage: FC = () => {
  return (
    <div>
      <EventsExample />
      <Card
        width='150px'
        height='150px'
        variant={CardVariant.outlined}
        onClick={() => console.log('click')}>
        <button>Button</button>
      </Card>
    </div>
  );
};

export default ExamplesPage;