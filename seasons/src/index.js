import './style/App.css';
// 1) import react and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


// 2) Get a reference to the div with ID root 
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
class App extends React.Component {
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    renderContent () {
        if (this.state.errorMessage && !this.setState.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <Spinner  message="Please accept location request"/>
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    };
};
 
// 5) Show the component on the screen
root.render(<App/>);