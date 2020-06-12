import React from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import {fetchData} from './api';
import covid from './covid.jpg'

import styles from './App.module.css';

class App extends React.Component {

    state= {
        data:[],
        country:'',
    }

    async componentDidMount () {
        const fetchedData = await fetchData();
        this.setState({data :fetchedData})
    }
    handleCountryChange = async (country)=> {
        const data = await fetchData(country);
        this.setState({ data, country: country });
    }
    render(){
        return(
            <div className={styles.container} >
            <img className={styles.image} src={covid} alt='covid-19'/>
            <Cards data={this.state.data} country={this.state.country}/>
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Chart data={this.state.data} country={this.state.country}/>
            </div>
        )
    }
}

export default App;