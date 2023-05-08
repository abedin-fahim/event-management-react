import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

const RootLayout = () => {
  // We can use useNavigation hook from react-router to check and provide better feedback to the user about the transition
  // const navigation = useNavigation();

  return (
    <Fragment>
      <MainNavigation />
      {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default RootLayout;
