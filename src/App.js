import React from 'react';

import { Cards, Chart, CountryPicker, PieChart } from './components';
import styles from './App.module.css';
import { fetchData } from './api'
import logo from './images/image.png'

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

async componentDidMount(){
    const fetchedData = await fetchData();
    
    this.setState({ data: fetchedData});
}

handleCountryChange = async(country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
}

    render(){
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <img className={styles.image} src={logo} alt="Logo of this PWa" />
                <Cards data={ data }/>
                <PieChart data={ data }/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;