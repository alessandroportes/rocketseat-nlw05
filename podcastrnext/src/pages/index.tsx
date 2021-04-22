// SPA - Single Page Aplication
// SSR - Server Side Rendering
// SSG - Static Site Generation

// import { useEffect } from 'react';

export default function Home(props) {
  // SPA - Essa chamada não é indexada pelo GOOGLE se desativar o javascript do browser para de funcionar essa estrategia
  // useEffect(() => {
  //   fetch('http://localhost:3333/episodes')
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }, []);
  // Fim SPA

  //SSR
  // console.log(props.episodes);

  return <div>Index</div>;
}

//SSR
// export async function getServerSideProps() {
//   const response = await fetch('http://localhost:3333/episodes');
//   const data = await response.json();
//   return {
//     props: {
//       episodes: data,
//     },
//   };
// }

//SSG
export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();
  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  };
}
