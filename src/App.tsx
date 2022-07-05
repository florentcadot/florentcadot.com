import React from 'react'
import 'assets/styles/index.scss'
import Routes from 'routes'
import HeaderComponent from 'components/header/header.component'
import FooterComponent from 'components/footer/footer.component'

export const App: React.FC = () =>
    <div>
        <HeaderComponent />
        <Routes />
        <FooterComponent />
    </div>
