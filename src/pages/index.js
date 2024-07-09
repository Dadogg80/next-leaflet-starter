import { useState } from 'react';
import Head from 'next/head';

import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import Map from '@components/Map';

import styles from '@styles/Home.module.scss';

export default function Home() {
  // Initialize state for latitude and longitude
  const [latitude, setLatitude] = useState(41.87194);
  const [longitude, setLongitude] = useState(12.56738);

  // Event handler for latitude input field
  const handleLatitudeChange = (e) => {
    setLatitude(parseFloat(e.target.value));
  }

  // Event handler for longitude input field
  const handleLongitudeChange = (e) => {
    setLongitude(parseFloat(e.target.value));
  }

  return (
    <Layout>
      <Head>
        <title>Next.js Leaflet Starter</title>
        <meta name="description" content="Create mapping apps with Next.js Leaflet Starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className={styles.title}>
          <input 
            type="number" 
            id="latitude" 
            name="latitude" 
            placeholder="Latitude" 
            value={latitude} 
            onChange={handleLatitudeChange} 
          />
          <input 
            type="number" 
            id="longitude" 
            name="longitude" 
            placeholder="Longitude" 
            value={longitude} 
            onChange={handleLongitudeChange} 
          />
        </div>
        <Section>
          <Container>
            <Map 
              className={styles.homeMap} 
              width="800" 
              height="400" 
              center={[latitude, longitude]} 
              zoom={8}
            >
              {({ TileLayer, Marker, Popup }) => (
                <>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                  />
                  <Marker position={[latitude, longitude]}>
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                  </Marker>
                </>
              )}
            </Map>
          </Container>
        </Section>
      </div>
    </Layout>
  )
}
