import React, {useState} from 'react'

import PortfolioSlider from './components/PortfolioSlider'

export default function MyPage({ data }) {
  const [imgData, setImgData] = useState([]);

  const dataC = data.gallery && data.gallery.map((item) => {
    return {
      id: item.id,
      alt: item.alt,
      image: item.img
    }
}
)
if(data.gallery && data.gallery.length > 0 && dataC && !imgData){
  setImgData(dataC);

}
  return (
    <div>
      <h1>My Data:</h1>
      <PortfolioSlider imgData={imgData} />
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
