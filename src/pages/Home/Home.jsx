import { About, Hero, Specials, Testimonials } from './components';
import { Main } from '../../components';

import specials from '../../settings/cms/specials';
import testimonials from '../../settings/cms/testimonials';

export const Home = () => {
  return (
    <Main>
      <Hero />
      <Specials data={specials} itemWidth="350px" />
      <Testimonials data={testimonials} />
      <About />
    </Main>
  );
};
