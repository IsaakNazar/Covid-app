import './App.css';
import React from 'react';
import ApiService from './api.service';
import Select from 'react-dropdown-select';
import Card from './components/Card';
import Moment from 'react-moment';

class App extends React.Component {

  state = {
    countries: [],
    selectedCountry: '',
    lastCases: []
  };

  componentDidMount() {
    this.getAll()
  }

  getAll() {
    ApiService.getAll().then(resp => {
      this.setState({
        countries: resp.data.Countries.map(country => ({
          label: country.Country,
          value: country.Slug
        }))
      });
    })
  }

  getDatesAgo(days) {
    const today = new Date();
    return new Date(today.setDate(today.getDate() - days)).toISOString()
  }

  handleSelection = (country) => {
    const selectedCountry = country[0].value;
    this.loadCountry(selectedCountry)
  };

  loadCountry(country) {
    ApiService.getAllStatuses(country).then(resp => {
      this.setState({
        lastCases: resp.data.slice(-5)
      })
    })
  }

  getLocalCountry() {
    return this.state.countries && this.state.countries.length && [this.state.countries.find(x => x.value === 'kyrgyzstan')]
  }



  render() {

    return (
        <div className="page">
          <div className="container">

            <div className="dropdown">
              <Select options={this.state.countries}  values={this.getLocalCountry()} onChange={this.handleSelection}/>
            </div>

            <div className="content">

              <div className="content__list">
                {this.state.lastCases.map((data, i) => {
                  return (
                      <Card key={i} cases={data}/>
                  )
                })}
              </div>

              <div className="content__total">
                <div className="content__total-box">
                  <div className="content__total_title">Top recovered cases</div>
                  <div className="content__total_num">123</div>
                  <div className="content__total_date">
                    <Moment format='DD MMMM'>{new Date()}</Moment>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
    )
  }
}

export default App;
