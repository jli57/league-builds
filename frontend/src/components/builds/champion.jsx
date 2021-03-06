import React from 'react';
import ChampionStats from './champion_stats';
import ChampionSpells from './champion_spells';
import ChampionIcon from '../champions/champion_icon';

class Champion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 1
    };
  }

  handleClick(delta) {
    const level = this.state.level + delta;
    if ( level >= 1 && level <= 18 ) {
      this.setState({level});
    }
  }

  handleChange(e) {
    e.preventDefault();
    const level = parseInt(e.target.value);
    this.setState({level});
  }

  render() {
    const levels = [];
    for ( let i = 1; i < 19; i++ ) {
      levels.push(i);
    }

    return (
      <section className="champion-data" >
        <h1>{ this.props.champion.name }</h1>
        <ChampionIcon champion={this.props.champion}/>
        <div className="champion-level" >
          <button onClick={this.handleClick.bind(this, -1)}><i className="fas fa-caret-left"></i></button>
          <select onChange={ this.handleChange.bind(this) } value={ this.state.level }>
            {
              levels.map( (e) => (
                <option key={e} value={e} >{e}</option>
              ))
            }
          </select>
          <button onClick={this.handleClick.bind(this, 1)}><i className="fas fa-caret-right"></i></button>
        </div>

        <div>
          <ChampionStats stats={this.props.champion.stats || {} } level={this.state.level} />
          <ChampionSpells spells={this.props.champion.spells || []} level={this.state.level} />
        </div>
      </section>
    )
  }
}

export default Champion;
