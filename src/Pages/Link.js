import {useContext} from 'react';
import NavigationContext from '../Context/Navigation'
import classNames from 'classnames';

function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);

  const classes = classNames('text-blue-500')

  const handleClick = (event) => {
    event.preventDefault();

    navigate(to);
  };

  return <a className={classes} href={to} onClick={handleClick}>{children}</a>;
}

export default Link;
