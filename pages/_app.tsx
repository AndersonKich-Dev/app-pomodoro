import '../styles/global.scss'
import style from '../styles/app.module.scss'
import Settings from '../src/components/SettingsComponent'
import Header from '../src/components/HeaderComponent'
import { TimerContextProvider } from '../src/contexts/TimerContext'

function MyApp({ Component, pageProps }) {



  return(
  <TimerContextProvider>
      <div className={style.appWrapper}>
        <main>
          <Header/>
          <Component {...pageProps} />
        </main>
        <Settings/>
      </div>
  </TimerContextProvider>
  )
}

export default MyApp
