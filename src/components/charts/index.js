import React, { Component } from 'react';
import request from '../request';
import {LineChart, 
        Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar} from 'recharts';

        
const data = [
      {name: 'Seg', cozinha: 30, banheiro1: 2400, amt: 2400},
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




class Charts extends Component {


    constructor(props) {
        super(props);
        this.handleChangeId1 = this.handleChangeId1.bind(this);
        this.handleChangeId2 = this.handleChangeId2.bind(this);
        this.getChartData   = this.getChartData.bind(this);
        this.state = {
            locales: {
                monitoring_points: []
            },
            chart_data: [],
            id_1: '',
            id_2: ''
        };
    }

    getChartData(){
        console.log(this.props.match.params.localeId);
        request.get(`/locales/${this.props.match.params.localeId}/get_charts_data?id_1=${this.state.id_1}&id_2=${this.state.id_2}`)
        .then((response) => {
          // handle success
          console.log(response.data);
          this.setState({
            chart_data: response.data
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
    
    componentWillMount(){
        this.getChartData()
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

      handleChangeId1(e){
        this.setState({
            id_1: e.target.value
        })
     }

      handleChangeId2(e){
        this.setState({
            id_2: e.target.value
        })
     }

  render() {
    const data = [
        {name: 'Seg', cozinha: 30, banheiro1: 2400, amt: 2400},
        {name: 'Ter', cozinha: 3000, banheiro1: 1398, amt: 2210},
        {name: 'Qua', cozinha: 2000, banheiro1: 9800, amt: 2290},
        {name: 'Qui', cozinha: 2780, banheiro1: 3908, amt: 2000},
        {name: 'Sex', cozinha: 1890, banheiro1: 4800, amt: 2181},
        {name: 'Sab', cozinha: 2390, banheiro1: 3800, amt: 2500},
        {name: 'Dom', cozinha: 3490, banheiro1: 4300, amt: 2100},
    ];
    const listItems = this.state.locales.monitoring_points.map((point) =>
    <option value={point.id}>{point.title}</option>

    );

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
                            <label className="mdl-textfield__label" for="sample2">Pontos de monitoramento</label>
                            <select className="mdl-textfield__input" onChange={this.handleChangeId1} value={this.state.id_1} type="text" id="sample2" >
                                {listItems}
                            </select>
                        </div>
                
                        <div className="mdl-textfield mdl-js-textfield" style={{marginRight: '5px'}}>
                            <label className="mdl-textfield__label" for="sample2">Pontos de monitoramento</label>
                            <select className="mdl-textfield__input" type="text" onChange={this.handleChangeId2} value={this.state.id_2} id="sample2" >
                                {listItems}
                            </select>
                        </div>
                        <button onClick={this.getChartData} className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={{marginRight: '5px'}}>
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
                <LineChart width={600} height={300} data={this.state.chart_data}
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
                <BarChart width={600} height={300} data={this.state.chart_data}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey='Galpão' fill="#8884d8" />
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
