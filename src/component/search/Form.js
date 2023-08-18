import React from 'react';
import { Link } from 'react-router-dom';
import SearchByVoice from "./SearchByVoice";


class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.key = 0;
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });

        this.forceUpdate(); // reload lai component
    }

    render() {
        return (
            <div key={this.key} className="d-flex float-end" style={{margin: "-12px 24px 0 0"}}>
                <SearchByVoice/>
                <form className="example" id="form_search" onSubmit={handleClick}>
                    <input id="text" type="text" name="name" value={this.state.name} onChange={this.handleInputChange} style={{float:"left",width:180}} />
                    <Link to={`/search/${this.state.name}`}><button style={{border:"none"}}><i className="fa fa-search"></i></button></Link>
                </form>
            </div>
        );
    }
}

function handleClick(event) {
    let newUrl = document.getElementById("text").value;
    window.location.assign(`/search/${newUrl}`) ;
    window.location.reload();
}

export default MyComponent;
