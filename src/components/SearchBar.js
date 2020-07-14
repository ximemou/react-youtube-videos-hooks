import React, {useState} from 'react';

const SearchBar = ({onFormSubmit}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const onInputChange = (event)=>{
        setSearchTerm(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(searchTerm);
    }

    return(
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <label>Video search</label>
                <input 
                    type="text" 
                    value={searchTerm}
                    onChange={onInputChange}/>
            </form>

        </div>
    ); 
}

export default SearchBar;