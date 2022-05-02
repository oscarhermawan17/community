import { ReactElement } from 'react';

interface TextConfig {
  value?: string;
}

function Home(props: TextConfig): ReactElement {
  return (
    <div>home</div>
  );
};

export default Home;