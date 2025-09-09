import { useEffect, useState } from 'react'

function Screen ({ path, children }) {
  // Emulate subpages as screens of the menu
  const [ currentPath, setCurrentPath ] = useState(window.location.pathname);
  const basename = import.meta.env.DEV ? '' : 'adventure-party-manager/';

  useEffect(() => {
    const onChange = () => {
      setCurrentPath(window.location.pathname);
    }
    window.addEventListener('changescreen', onChange);
    return () => {
      window.removeEventListener('changescreen', onChange)
    };
  }, [])

  return (
    window.location.pathname === basename + path ? children : null
  )
}

export default Screen
