import { Link } from '../Link.jsx'

const i18n = {
    es: {
        title: 'Sobre nosotros',
        description: '¡Hola! Me llamo Martin y estoy reando un clon de React Router.',
        button: 'Ir a la home'
    },
    en: {
        title: 'About us',
        description: 'Hi! My name is Martin and I m creating a clone of React Router',
        button: 'Go home'
    },
}

const useI18n = (lang) => {
    return i18n[lang] || i18n.en
}

export function AboutPage ({routeParams}) {

    const i18n = useI18n(routeParams.lang ?? 'es')

    return (
      <>
        <h1>About</h1>
        <div>
          <img src="https://pbs.twimg.com/profile_images/1613612257015128065/oA0Is67J_400x400.jpg" alt="foto de martin" />
          <p>{i18n.description}</p>
        </div>
        <Link to='/'>{i18n.button}</Link>
      </>
    )
}