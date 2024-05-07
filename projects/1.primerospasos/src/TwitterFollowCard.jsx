import { useState } from 'react';

export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const estadoSeguir = isFollowing ? 'Siguiendo' : 'Seguir';
  // console.log(isFollowing)
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

  const accionarClick = () => {
    setIsFollowing(!isFollowing);
  }

  return (

    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt={`Avatar de ${userName}`}
          src={`https://unavatar.io/twitter/${userName}`} />
        <div className='tw-followCard-info'>
          <strong>{children[0]}</strong>
          <strong>{children[1]}</strong>
          <span className='tw-followCard-infoUserName'>
            {`@${userName}`}
          </span>
        </div>
      </header>

      <aside>
        <button
          className={buttonClassName}
          onClick={accionarClick}
        >
          <span className='tw-followCard-Follow'>{estadoSeguir}</span>

          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}