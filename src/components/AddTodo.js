import React, {Component} from 'react';


class AddTodo extends Component {

    constructor(props){
        super(props);
        this.state={
            title: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
    }

    onChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
    onSubmit(event){
        event.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
           title: ""
       })
    };
    

    render () {
        return (
           
                <div className="form-container">
                    <form className="form" onSubmit={this.onSubmit} >
                        <input
                            type="text"
                            placeholder="Add To Do"
                            className="input-text"
                            value={this.state.title}
                            name="title"
                            onChange={this.onChange}
                        />
                    </form>
                </div>
            
        );
    }
} 

export default AddTodo