import React, { Component } from 'react';
import request from '../request';
import {LineChart, 
        Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar} from 'recharts';

        
const data = [
      {name: 'Seg', cozinha: 4000, banheiro1: 2400, amt: 2400},
      {name: 'Ter', cozinha: 3000, banheiro1: 1398, amt: 2210},
      {name: 'Qua', cozinha: 2000, banheiro1: 9800, amt: 2290},
      {name: 'Qui', cozinha: 2780, banheiro1: 3908, amt: 2000},
      {name: 'Sex', cozinha: 1890, banheiro1: 4800, amt: 2181},
      {name: 'Sab', cozinha: 2390, banheiro1: 3800, amt: 2500},
      {name: 'Dom', cozinha: 3490, banheiro1: 4300, amt: 2100},
];


const data2 = [
    { subject: 'Banheiro1', A: 120, B: 110, fullMark: 150 },
    { subject: 'Banheiro2', A: 98, B: 130, fullMark: 150 },
    { subject: 'Banheiro3', A: 86, B: 130, fullMark: 150 },
    { subject: 'Cozinha', A: 99, B: 100, fullMark: 150 },
    { subject: 'Quintal', A: 85, B: 90, fullMark: 150 },
    { subject: 'Piscina', A: 100, B: 100, fullMark: 150 },
];




const Card = (props) => (
    <div class="mdl-cell mdl-cell--3-col">
        <h2> 
            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">{props.title}</h2>
                </div>
                <div className="mdl-card__supporting-text">
                    {props.address}
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                    Editar
                    </a>
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                    Visualizar
                    </a>
                </div>
            </div>
        </h2>
    </div>
);



class Charts extends Component {


    constructor(props) {
        super(props);
        this.state = {locales: []};
    }
    
    componentWillMount(){
        request.get(`/locales/${this.props.match.params.localeId}/show_monitoring_points`)
        .then((response) => {
          // handle success
          console.log(response.data);
          this.setState({
              locales: response.data
          })
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
      }

  render() {
    const data = [
        {name: 'Seg', cozinha: 4000, banheiro1: 2400, amt: 2400},
        {name: 'Ter', cozinha: 3000, banheiro1: 1398, amt: 2210},
        {name: 'Qua', cozinha: 2000, banheiro1: 9800, amt: 2290},
        {name: 'Qui', cozinha: 2780, banheiro1: 3908, amt: 2000},
        {name: 'Sex', cozinha: 1890, banheiro1: 4800, amt: 2181},
        {name: 'Sab', cozinha: 2390, banheiro1: 3800, amt: 2500},
        {name: 'Dom', cozinha: 3490, banheiro1: 4300, amt: 2100},
    ];
    return (
      <div >
        <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--12-col">
                <h2>Consumo de água em Litros</h2>< br/>
            </div>

            <div className="mdl-cell mdl-cell--3-col">
            </div>

            <div className="mdl-cell mdl-cell--7-col">
                <form action="#">
                        <div className="mdl-textfield mdl-js-textfield">
                            <label className="mdl-textfield__label" for="sample2">asd...</label>
                            <select className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="sample2" >
                                <option>Cozinha</option>
                                <option>Banheiro1</option>
                                <option>Banheiro2</option>
                                <option>Quintal</option>
                                <option>Piscina</option>
                            </select>
                        </div>
                
                        <div className="mdl-textfield mdl-js-textfield" style={{marginRight: '5px'}}>
                            <label className="mdl-textfield__label" for="sample2">asd...</label>
                            <select className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="sample2" >
                                <option>Cozinha</option>
                                <option>Banheiro1</option>
                                <option>Banheiro2</option>
                                <option>Quintal</option>
                                <option>Piscina</option>
                            </select>
                        </div>
                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={{marginRight: '5px'}}>
                        <i class="material-icons">
                        search
                        </i>
                            Buscar
                        </button>
                        <a className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" href={`/locales/${this.props.match.params.localeId}/manage_monitoring_points`}>
                            <i class="material-icons">
                            menu
                            </i>
                            Configurações
                        </a>
                </form>
            </div>
            <div className="mdl-cell mdl-cell--2-col">
            </div>
            <div className="mdl-cell mdl-cell--4-col">
                <LineChart width={600} height={300} data={data}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Line type="monotone" dataKey="cozinha" stroke="#8884d8" activeDot={{r: 8}}/>
                    <Line type="monotone" dataKey="banheiro1" stroke="#82ca9d" />
                </LineChart>
            </div>
            <div className="mdl-cell mdl-cell--4-col">
                <BarChart width={600} height={300} data={data}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="cozinha" fill="#8884d8" />
                    <Bar dataKey="banheiro1" fill="#82ca9d" />
                </BarChart>
            </div>
            
            <div className="mdl-cell mdl-cell--4-col">
                <RadarChart cx={300} cy={150} outerRadius={150} width={500} height={500} data={data2}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis/>
                    <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
                </RadarChart>
            </div>
            

            
        </div>
      </div>
    );
  }
}

export default Charts;
