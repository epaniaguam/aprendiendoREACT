import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import { useState } from 'react'
import './App.css'

const user = [
  {
    name: ' Marco Sifuentes 🧨',
    userName: 'ocram',
    isFollowing: true,
    verificado: '📲'
  },
  {
    name: 'IDL_Reporteros',
    userName: 'IDL_R',
    isFollowing: false,
  },
  {
    name: 'Semanario Hildebrandt',
    userName: 'ensustrece',
    isFollowing: true
  },
  {
    name: 'OjoPúblico',
    userName: 'Ojo_Publico',
    isFollowing: false,
    verificado: '📲'
  }
]

https://wetransfer.com/downloads/06c076ed26dde351f98b2b758e6ea72b20240502021644/89c2c18d0bd991a52f5bb0af7e84fb0520240502021725/77713d


export function App() {
  return (
    <section className="App">
      {
        user.map(({ name, userName, isFollowing, verificado }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
            {verificado}
          </ TwitterFollowCard>
        ))

      }

    </section>
  );
}
/* Aqui estamos pasando name y verificado como props childres
en el componente TwitterFollowCard se deberan desestructurar como
array children[0] children[1] */