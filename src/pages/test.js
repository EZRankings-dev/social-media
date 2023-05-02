import React from 'react';

export default function MyPage({ data }) {
  return (
    <div>
      <h1>My Data:</h1>
      <ul>
        {data.gallery.map((item) => (
          <li key={item.id}><img src={item.img} /></li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  // Fetch data from API
  const response = await fetch('https://smca.ezrankings.in/react-backend/homes.php');
  const data = await response.json();

  // Pass data as props
  return {
    props: { data }
  };
}
