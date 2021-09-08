import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'auth/AuthApp';

function AuthApp({ onSignIn }) {
  const ref = React.useRef(null);
  const history = useHistory();

  React.useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate({ pathname: nextPathname }) {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn,
    });

    history.listen(onParentNavigate);

    return () => (ref.current = null);
  }, []);

  return <div ref={ref} />;
}

export default AuthApp;
