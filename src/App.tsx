import { useState } from 'react'
import './App.css'

const App = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState('nacional')

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className="marketing-comparison-container">
      <h2>Comparación de Estrategias de Marketing</h2>
      <div className="tabs">
        <div
          className={`tab ${activeTab === 'nacional' ? 'active' : ''}`}
          onClick={() => { handleTabClick('nacional') }}
        >
          Estrategia Nacional
        </div>
        <div
          className={`tab ${activeTab === 'internacional' ? 'active' : ''}`}
          onClick={() => { handleTabClick('internacional') }}
        >
          Estrategia Internacional
        </div>
      </div>
      <div className="strategies-container">
        <div className={`strategy ${activeTab === 'nacional' ? 'active' : ''}`}>
          <span role="img" aria-label="bandera argentina" className="icon">
            🏠
          </span>
          <h3>Estrategia Nacional</h3>
          <p>
            <strong>Segmentación del Mercado:</strong> Enfoque en segmentos específicos dentro del mercado nacional, como familias, jóvenes y jubilados.
          </p>
          <p>
            <strong>Promoción Local:</strong> Utilización de medios de comunicación nacionales para promocionar eventos y atracciones locales, como festivales, playas y actividades culturales.
          </p>
          <p>
            <strong>Colaboración con Empresas Locales:</strong> Establecimiento de alianzas con empresas locales, como hoteles, restaurantes y agencias de turismo, para ofrecer paquetes turísticos completos.
          </p>
          <p>
            <strong>Presencia en Redes Sociales:</strong> Mantenimiento de una fuerte presencia en las redes sociales para interactuar con la audiencia y promocionar ofertas y eventos locales.
          </p>
        </div>
        <div className={`strategy ${activeTab === 'internacional' ? 'active' : ''}`}>
          <span role="img" aria-label="globo terráqueo" className="icon">
            🌍
          </span>
          <h3>Estrategia Internacional</h3>
          <p>
            <strong>Segmentación Internacional:</strong> Identificación de segmentos internacionales, como turistas de lujo, mochileros o familias, y adaptación de las estrategias en consecuencia.
          </p>
          <p>
            <strong>Campañas Publicitarias Globales:</strong> Lanzamiento de campañas publicitarias en varios países clave, utilizando canales como la televisión, Internet y revistas de viajes.
          </p>
          <p>
            <strong>Promoción de Atracciones Emblemáticas:</strong> Destacar atracciones emblemáticas como las playas de Copacabana en Río de Janeiro y las playas de Cancún, junto con actividades como el surf y la vida nocturna.
          </p>
          <p>
            <strong>Alianzas con Aerolíneas y Agencias de Viaje:</strong> Colaboración con aerolíneas y agencias de viaje internacionales para ofrecer paquetes de vuelo y alojamiento atractivos para los turistas internacionales.
          </p>
        </div>
      </div>
      <div className="comparison-section">
          <span role="img" aria-label="globo terráqueo" className="icon">
            🔄
          </span>
        <h2>Comparación:</h2>
        <ul>
          <li>
            <strong>Alcance Geográfico:</strong> Las estrategias internacionales tienen un alcance más amplio, ya que se dirigen a mercados de todo el mundo, mientras que las estrategias nacionales se concentran en un mercado específico.
          </li>
          <li>
            <strong>Inversión:</strong> Las estrategias internacionales suelen requerir una inversión financiera significativa en campañas publicitarias globales, mientras que las estrategias nacionales pueden ser más económicas.
          </li>
          <li>
            <strong>Competencia:</strong> La competencia internacional es más intensa, ya que compiten con destinos turísticos de renombre mundial, mientras que en el ámbito nacional, la competencia puede ser más regional.
          </li>
          <li>
            <strong>Diversidad Cultural:</strong> Las estrategias internacionales deben considerar la diversidad cultural y las preferencias de los turistas de diferentes países, mientras que las estrategias nacionales pueden centrarse en la cultura local.
          </li>
          <li>
            <strong>Colaboraciones:</strong> Las colaboraciones internacionales suelen involucrar a múltiples partes interesadas internacionales, como aerolíneas y agencias de viaje, mientras que las colaboraciones nacionales pueden ser más locales y específicas.
          </li>
        </ul>
        <p>
          En resumen, las estrategias de marketing nacional e internacional tienen enfoques y consideraciones diferentes debido a su alcance geográfico y el mercado al que se dirigen. Las estrategias internacionales a menudo requieren una inversión y una competencia más intensa, mientras que las estrategias nacionales pueden centrarse en la promoción local y colaboraciones regionales. Cada enfoque tiene sus ventajas y desafíos, y la elección depende de los objetivos y recursos disponibles para cada destino turístico.
        </p>
      </div>
    </div>
  )
}

export default App
