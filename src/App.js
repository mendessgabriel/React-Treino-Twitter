import React, { Component, Fragment } from 'react';
import Cabecalho from './components/Cabecalho'
import NavMenu from './components/NavMenu'
import Dashboard from './components/Dashboard'
import Widget from './components/Widget'
import TrendsArea from './components/TrendsArea'
import Tweet from './components/Tweet'

class App extends Component {
    constructor(state) {
        super(state)
        this.state = {
            name: '',
            novoTweet: '',
            texto: '',
            tweets: [{tweet: "", data: new Date()}],
            tweetTime: new Date
        }
    }

    adicionaTweet = (infosDoEvento) => {
        infosDoEvento.preventDefault();
        let self = this;
        if(this.state.novoTweet.length > 0){
            self.state.tweets.push({tweet: this.state.novoTweet, data: this.state.tweetTime});
            self.setState({ 
                tweets: self.state.tweets,
                novoTweet: ''
            });
            
        }
    }

    render() {
        console.log(this.state);
        return (
            <Fragment>
                <Cabecalho nomeApp="ttertwi">
                    <NavMenu usuario="@GabrielMendes" />
                </Cabecalho>
                <div className="container">
                    <Dashboard>
                        <Widget>
                            <form className="novoTweet" onSubmit={this.adicionaTweet}>
                                <div className="novoTweet__editorArea">
                                    <span className={ `novoTweet__status ${
                                        this.state.novoTweet.length > 140 ? 'novoTweet__status--invalido' : ''}`
                                        }>
                                        {this.state.novoTweet.length}/140
									</span>
                                    <textarea className="novoTweet__editor" value={this.state.novoTweet}
                                    onChange={ (event) => this.setState({ novoTweet: event.target.value, tweetTime: new Date() }) }
                                     placeholder="O que está acontecendo?"
                                     ></textarea>
                                </div>
                                <button type="submit"
                                disabled={ this.state.novoTweet.length > 140 || this.state.novoTweet.length === 0 }
                                 className="novoTweet__envia">Twettar</button>

                                 <br />
                                 <br />
                                 <br />
                                 <label>Digite seu nome:</label>
                                 <input type='text' className="inputNewTweet" value={this.state.name} onChange={(event) => {this.setState({name: event.target.value})}}/><br />
                                 <br />
                                 <label hidden={this.state.name.length <= 0}>Bem vindo, <b>{this.state.name}!</b></label>
                            </form>
                        </Widget>
                        <Widget>
                            <TrendsArea />
                        </Widget>
                    </Dashboard>
                    <Dashboard posicao="centro">
                        <Widget>
                            <div className="tweetsArea">
                                {
                                    this.state.tweets.map( (tweetInfo, index) => {
                                    return <Tweet key={index} texto={tweetInfo.tweet} />
                                }).reverse(this.state.tweets.data)}
                            </div>
                        </Widget>
                    </Dashboard>
                </div>
            </Fragment>
        );
    }
}

export default App;
