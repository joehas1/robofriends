import React from 'react';

class SearchBox extends React.Component{
    render() {
        return(
            <div className='p2' style={{padding: '5px'}}>
                <input 
                    className='pa3 ba b--green bg-lightest-blue'
                    type='search' 
                    placeholder='search robots' 
                    onChange={this.props.searchChange}
                />
            </div>          
        )
    }
}

export default SearchBox;