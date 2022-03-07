import React from 'react';
import GreyImg from '../../shared/grey_img';
import DescriptionWithLink from '../../shared/description_with_link';


class Planet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      satellites: []
    }
  }

  async getSatellites(){
    const response = await fetch(`http://localhost:3000/api/${this.props.id}.json`)
    const data = await response.json()
    return data
  }

  componentDidMount() {
    this.getSatellites().then(data => {
      this.setState(state => ({
        satellites: data['satellites']
      }))
    })
  }

  listSatellites(props) {
    return <li>{props.name}</li>
  }

  render() {
    const satellites = this.state.satellites.map(satellite => 
        <this.listSatellites key={satellite.name.toString()} name={satellite.name}/>
    )

    return(
      <div>
        <DescriptionWithLink name={this.props.name} description={this.props.description} href={this.props.href}/>
        <GreyImg img_url={this.props.img_url}/>
        <h4>Satélites</h4>
        <ul>
          {satellites}
        </ul>
        <hr />
      </div>
    )
  }
}

export default Planet;