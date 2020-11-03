import React from 'react';
import Display from './Display';
import Moment from 'react-moment';

class Card extends React.Component {
  render() {
    const statistics = [
      {id: 1, title: 'Active', total: this.props.cases.Active},
      {id: 2, title: 'Deaths', total: this.props.cases.Deaths},
      {id: 3, title: 'Confirmed', total: this.props.cases.Confirmed},
      {id: 4, title: 'Recovered', total: this.props.cases.Recovered},
    ];

    return (
        <div className='card'>
          <div className="card__date">
            <Moment format="DD MMM">{this.props.cases.Date}</Moment>
          </div>
          <div className="card__statistics">
            {statistics.map(statictic => {
              return (
                  <Display key={statictic.id} title={statictic.title} total={statictic.total}/>
              )
            })}
          </div>
        </div>
    )
  }
}

export default Card
