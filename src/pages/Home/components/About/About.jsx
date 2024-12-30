import { Heading, Stack } from '../../../../components';
import './About.css';
import chefsKiss from "../../../../assets/about/chefs_kiss.jpg";
import chefs from "../../../../assets/about/chefs.jpg";

export const About = () => {
  return (
    <section id="about">
      <Stack className="about-columns" justify="space-between">
        <Stack.Item
          className="about-left-column"
          vertical
          gap="2.25rem"
          basis="50%"
        >
          <Stack.Item vertical>
            <Heading tag="h1" size="2xl">Little Lemon</Heading>
            <p>Chicago</p>
          </Stack.Item>

          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </p>
        </Stack.Item>

        <section className="about-right-column">
          <section id="about-images">
            <div id="about-first-image">
              <img
                src={chefsKiss}
                alt="Little Lemon - Chefs Kiss"
              />
            </div>
            <div id="about-second-image">
              <img
                src={chefs}
                alt="Little Lemon - Chefs"
              />
            </div>
          </section>
        </section>
      </Stack>
    </section>
  );
};
